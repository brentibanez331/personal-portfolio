import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ImageEffectProps {
  imageSrc: string;
  width?: number;
  height?: number;
  className?: string;
}

const ImageDistort: React.FC<ImageEffectProps> = ({ 
  imageSrc, 
  width = 500, 
  height = 300,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useLayoutEffect(() => {
    if (!containerRef.current || !imageSrc) return;
    
    // Variables
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let planeMesh: THREE.Mesh;
    let animationFrameId: number;
    
    let easeFactor = 0.02;
    let mousePosition = { x: 0.5, y: 0.5 };
    let targetMousePosition = { x: 0.5, y: 0.5 };
    let aberrationIntensity = 0.0;
    let prevPosition = { x: 0.5, y: 0.5 };
    
    // Shaders
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

      void main() {
          vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
          vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);
          
          vec2 mouseDirection = u_mouse - u_prevMouse;
          
          vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
          float pixelDistanceToMouse = length(pixelToMouseDirection);
          float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);
   
          vec2 uvOffset = strength * - mouseDirection * 0.2;
          vec2 uv = vUv - uvOffset;

          vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
          vec4 colorG = texture2D(u_texture, uv);
          vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

          gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
      }
    `;
    
    // Initialize the scene
    const initializeScene = (texture: THREE.Texture) => {
      // Scene creation
      scene = new THREE.Scene();
      
      // Camera setup
      camera = new THREE.PerspectiveCamera(
        80,
        width / height,
        0.01,
        10
      );
      camera.position.z = 1;
      
      // Uniforms
      const shaderUniforms = {
        u_mouse: { value: new THREE.Vector2() },
        u_prevMouse: { value: new THREE.Vector2() },
        u_aberrationIntensity: { value: 0.0 },
        u_texture: { value: texture }
      };
      
      // Creating a plane mesh with materials
      planeMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.ShaderMaterial({
          uniforms: shaderUniforms,
          vertexShader,
          fragmentShader
        })
      );
      
      // Add mesh to scene
      scene.add(planeMesh);
      
      // Renderer
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(width, height);
      
      // Add canvas to container
      if (containerRef.current) {
        // Clear previous canvas if any
        if (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
        containerRef.current.appendChild(renderer.domElement);
      }
      
      setIsLoaded(true);
    };
    
    // Animation function
    const animate = () => {
      mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
      mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;
      
      if (planeMesh && planeMesh.material) {
        (planeMesh.material as THREE.ShaderMaterial).uniforms.u_mouse.value.set(
          mousePosition.x,
          1.0 - mousePosition.y
        );
        
        (planeMesh.material as THREE.ShaderMaterial).uniforms.u_prevMouse.value.set(
          prevPosition.x,
          1.0 - prevPosition.y
        );
        
        aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.05);
        
        (planeMesh.material as THREE.ShaderMaterial).uniforms.u_aberrationIntensity.value = aberrationIntensity;
      }
      
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Event handlers
    const handleMouseMove = (event: MouseEvent) => {
      easeFactor = 0.02;
      const rect = containerRef.current!.getBoundingClientRect();
      prevPosition = { ...targetMousePosition };
      
      targetMousePosition.x = (event.clientX - rect.left) / rect.width;
      targetMousePosition.y = (event.clientY - rect.top) / rect.height;
      
      aberrationIntensity = 1;
    };
    
    const handleMouseEnter = (event: MouseEvent) => {
      easeFactor = 0.02;
      const rect = containerRef.current!.getBoundingClientRect();
      
      mousePosition.x = targetMousePosition.x = (event.clientX - rect.left) / rect.width;
      mousePosition.y = targetMousePosition.y = (event.clientY - rect.top) / rect.height;
    };
    
    const handleMouseLeave = () => {
      easeFactor = 0.05;
      targetMousePosition = { ...prevPosition };
    };
    
    // Load the texture and initialize
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      imageSrc,
      (texture) => {
        initializeScene(texture);
        animate();
      },
      undefined,
      (error) => {
        console.error('Error loading texture:', error);
      }
    );
    
    // Add event listeners
    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    container?.addEventListener('mouseenter', handleMouseEnter);
    container?.addEventListener('mouseleave', handleMouseLeave);
    
    // Cleanup function
    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
      container?.removeEventListener('mouseenter', handleMouseEnter);
      container?.removeEventListener('mouseleave', handleMouseLeave);
      
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      if (renderer) {
        renderer.dispose();
      }
      
      if (planeMesh) {
        if (planeMesh.geometry) planeMesh.geometry.dispose();
        if (planeMesh.material) {
          (planeMesh.material as THREE.ShaderMaterial).dispose();
        }
      }
    };
  }, [imageSrc, width, height]);
  
  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height, opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

    </div>
  );
};

export default ImageDistort;