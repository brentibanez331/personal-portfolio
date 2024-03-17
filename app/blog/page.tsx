"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Profile from "./components/profile";
import Content from "./components/content";

export default function Blog() {
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
      <div className="relative h-screen">
        <div className="h-screen w-full absolute">
          <div className="bg-gradient-to-b from-transparent from-10% to-[#0a0a0c] to-40% w-full h-full relative z-10"></div>
          <Image src="/8.png" width={3000} height={3000} alt="My SVG" className="-z-10 h-96 sm:h-auto object-cover sm:w-full absolute top-0"></Image>
        </div>
        <div className="relative z-40">
          <Profile></Profile>
          <Content></Content>
        </div>
      </div>


    </main>
  );
}