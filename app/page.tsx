"use client"
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import * as THREE from 'three'
import Nav from "@/components/Nav";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScramble } from "use-scramble";
import { Separator } from "@/components/ui/separator"
import Image from "next/image";
import Lenis from "lenis"
import WorkSection from "@/components/WorkCards";
import About from "@/components/About";


let easeFactor = 0.02;
let returnEaseFactor = 0.02;
let mousePosition = { x: 0.5, y: 0.5 };
let targetMousePosition = { x: 0.5, y: 0.5 };
let aberrationIntensity = 0.0;
let lastPosition = { x: 0.5, y: 0.5 };
let prevPosition = { x: 0.5, y: 0.5 };

const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
    varying vec2 vUv;
    uniform sampler2D u_texture;    
    uniform vec2 u_mouse;
    uniform vec2 u_prevMouse;
    uniform float u_aberrationIntensity;
    uniform float u_aspectRatio;

    void main() {
        float gridSize = 20.0;
        vec2 gridDimensions;

        if(u_aspectRatio >= 1.0){
            gridDimensions = vec2(gridSize * u_aspectRatio, gridSize);
        }else{
            gridDimensions = vec2(gridSize, gridSize / u_aspectRatio);
        }

        vec2 gridUV = floor(vUv * gridDimensions) / gridDimensions;
        vec2 centerOfPixel = gridUV + vec2(1.0/gridDimensions.x, 1.0/gridDimensions.y);
        
        vec2 mouseDirection = u_mouse - u_prevMouse;
        
        vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
        float pixelDistanceToMouse = length(pixelToMouseDirection);
        float strength = smoothstep(0.5, 0.0, pixelDistanceToMouse);
 
        vec2 uvOffset = strength * - mouseDirection * 0.2;
        vec2 uv = vUv - uvOffset;

        vec4 color = texture2D(u_texture, uv);

        // vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
        // vec4 colorG = texture2D(u_texture, uv);
        // vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

        gl_FragColor = color;
    }
`;


export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  gsap.registerPlugin(ScrollTrigger)
  const lenis = new Lenis()

  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0);


  useLayoutEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    
    console.log("Container: ", containerRef.current)
    console.log("Image: ", imageRef.current)

    const scene = new THREE.Scene()

    const initialWidth = imageRef.current?.offsetWidth;
    const initialHeight = imageRef.current?.offsetHeight;

    if(initialHeight === 0 || initialWidth === 0) return;

    const camera = new THREE.PerspectiveCamera(90, initialWidth! / initialHeight!, 0.01, 10)
    camera.position.z = 1;

    let texture: THREE.Texture = new THREE.Texture();

    if (imageRef.current)
      texture = new THREE.TextureLoader().load(imageRef.current?.src)
    console.log(texture)

    const aspectRatio = initialWidth! / initialHeight!;

    console.log("WIDTH: ", initialWidth)
    console.log("HEIGHT: ", initialHeight)
    console.log("ASPECT RATIO: ", aspectRatio);


    let shaderUniforms = {
      u_mouse: { type: 'v2', value: new THREE.Vector2() },
      u_prevMouse: { type: 'v2', value: new THREE.Vector2() },
      u_aberrationIntensity: { type: 'f', value: 0.0 },
      u_texture: { type: 't', value: texture },
      u_aspectRatio: { type: 'f', value: aspectRatio }
    }


    const planeMesh = new THREE.Mesh(new THREE.PlaneGeometry(aspectRatio * 2, 2), new THREE.ShaderMaterial({
      uniforms: shaderUniforms,
      vertexShader,
      fragmentShader
    }))

    scene.add(planeMesh)

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(initialWidth!, initialHeight!)

    containerRef.current?.appendChild(renderer.domElement)

    const animate = () => {
      requestAnimationFrame(animate);

      mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
      mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;

      planeMesh.material.uniforms.u_mouse.value.set(
        mousePosition.x,
        1.0 - mousePosition.y
      )

      planeMesh.material.uniforms.u_prevMouse.value.set(
        prevPosition.x,
        1.0 - prevPosition.y
      )

      aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.05)

      planeMesh.material.uniforms.u_aberrationIntensity.value = aberrationIntensity;
      renderer.render(scene, camera)
    }

    animate()

    containerRef.current?.addEventListener("mousemove", handleMouseMove)
    containerRef.current?.addEventListener("mouseenter", handleMouseEnter)
    containerRef.current?.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }


    }
  }, [containerRef.current, imageRef.current])

  const handleMouseMove = (event: MouseEvent) => {
    easeFactor = 0.02;
    let rect = containerRef.current?.getBoundingClientRect()
    prevPosition = { ...targetMousePosition };

    targetMousePosition.x = (event.clientX - rect!.left) / rect!.width
    targetMousePosition.y = (event.clientY - rect!.top) / rect!.height

    aberrationIntensity = 1;
  }

  const handleMouseEnter = (event: MouseEvent) => {
    easeFactor = 0.02;
    let rect = containerRef.current?.getBoundingClientRect()
    mousePosition.x = targetMousePosition.x = (event.clientX - rect!.left) / rect!.width;
    mousePosition.y = targetMousePosition.y = (event.clientY - rect!.top) / rect!.height;
  }

  const handleMouseLeave = () => {
    easeFactor = returnEaseFactor;
    targetMousePosition = { ...prevPosition }
  }

  const { ref: textRef } = useScramble({
    text: "Software Engineer | AI Engineer",
    tick: 3,
    scramble: 8,
    ignore: [' ']
  });

  const { ref: percentRef } = useScramble({
    text: "100%",
    ignore: ['%'],
    speed: 0.7,
    tick: 2,
    scramble: 8
  })


  return (
    <div className="relative no-scrollbar">
      {/* Navbar */}
      <Nav />
      <div className="relative h-screen">
        <div ref={containerRef} id="imageContainer">
          <img ref={imageRef} id="myImage" src="brent.png" />
        </div>
        <div className="grid grid-cols-2 w-full absolute -bottom-[-40px] z-[998]">
          <div ref={textRef} className="px-4">
            Software Engineer | AI Engineer
          </div>
          <div className="a">
            calculating odds --- <span ref={percentRef}>0%</span>

          </div>
        </div>
      </div>

      <About/>

      <WorkSection />

      <div className="h-screen end-pin">

      </div>
    </div>
  )
}