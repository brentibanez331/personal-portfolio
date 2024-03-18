"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero";
import Featured from "./components/featured";
import AllProjects from "./components/allprojects";
import AIMLProjects from "./components/aiml";
import Footer from "./components/footer";

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
          <div className="loader mx-auto pl-3.5">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
      )}
      <div className="top-0 absolute">
        <Image src="/Rectangle1.png" width={900} height={800} alt="My SVG" className="w-[500px] sm:w-10/12"/>
      </div>
      <div className="top-0 absolute">
        <Image src="/Intersect.svg" width={700} height={300} alt="intersect" className="w-[500px] sm:w-10/12"/>
      </div>
      <div className="top-0 absolute">
        <Image src="/Vector2.png" width={900} height={800} alt="intersect" className="w-[300px] sm:w-10/12"/>
      </div>
      <div className="top-0 right-0 absolute">
        <Image src="/Vector3.svg" width={700} height={800} alt="intersect" className="w-[250px] sm:w-96"/>
      </div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Featured></Featured>
      <AIMLProjects></AIMLProjects>
      <AllProjects></AllProjects>
      <Footer></Footer>
    </main>
  );
}