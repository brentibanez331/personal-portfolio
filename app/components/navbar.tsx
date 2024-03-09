"use client";
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function Navbar() {
    gsap.registerPlugin(ScrollTrigger)

    const navbarRef=useRef(null)

    useEffect(() => {
        const showNav = gsap.fromTo(
            navbarRef.current, {
                opacity: 0,}, {opacity: 1, duration:0.4} ).progress(1);
                ScrollTrigger.create({
                    start: "top top",
                    end: "max",
                    onUpdate: (self) => {
                        self.direction === -1 ? showNav.play() : showNav.reverse()
                    }
                });
    }, [])

    return (
        <div ref={navbarRef} className="sticky top-5 mx-60 my-5 flex items-center justify-between">
            <div>
                <Image src="/bi-logo-resized.png" width={23.6} height={50} alt='logo image' />
            </div>
            <div>
                <ul className='flex'>
                    <li className='ml-16'><a href='https://www.linkedin.com/in/renibanez/' target='_blank'><FaLinkedinIn className='text-2xl transition duration-300 hover:scale-110'/></a></li>
                    <li className='ml-16'><a href='https://github.com/brentibanez331' target='_blank'><FaGithub className='text-2xl transition duration-300 hover:scale-110'/></a></li>
                </ul>
            </div>
        </div>
    )
}