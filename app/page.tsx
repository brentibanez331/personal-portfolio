"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Featured from "./components/featured";
import AllProjects from "./components/allprojects";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaderFading, setIsLoaderFading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const loadingTimeout = setTimeout(() => {
      document.body.style.overflow = 'hidden';
      setIsLoaderFading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsLoaderFading(false);
        document.body.style.overflow = 'auto';
      }, 300);
    }, 1000);

    return () => {
      clearTimeout(loadingTimeout);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <main>
      {(isLoading || isLoaderFading) && (
        <div
          className={`bg-black fixed inset-0 z-50 items-center flex transition-opacity duration-300 ${isLoaderFading ? 'opacity-0' : 'opacity-100'
            }`}
        >
          <div className="loader mx-auto">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
      )}
      <div className="top-0 absolute">
        <Image src="/Rectangle1.png" width={900} height={800} alt="My SVG" />
      </div>
      <div className="top-0 absolute">
        <Image src="/Intersect.svg" width={700} height={300} alt="intersect" />
      </div>
      <div className="top-0 absolute">
        <Image src="/Vector2.png" width={900} height={800} alt="intersect" />
      </div>
      <div className="top-0 right-0 absolute">
        <Image src="/Vector3.svg" width={700} height={800} alt="intersect" />
      </div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Featured></Featured>
      <AllProjects></AllProjects>
    </main>
  );
}