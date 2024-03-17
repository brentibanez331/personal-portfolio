"use client";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useCallback } from "react";

const playfair = Playfair_Display({
    weight: "600",
    subsets: ["latin"],
});

export default function Navbar() {
    gsap.registerPlugin(ScrollTrigger);
    const navbarRef = useRef(null);
    const showNav = gsap
        .fromTo(navbarRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 })
        .progress(1);

    const updateScrollTrigger = useCallback(() => {
        const maxScroll =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;

        ScrollTrigger.create({
            start: 0,
            end: maxScroll,
            onUpdate: (self) => {
                self.direction === -1 ? showNav.play() : showNav.reverse();
            },
        });
    }, [showNav]);

    useEffect(() => {
        updateScrollTrigger();

        // Update the ScrollTrigger whenever the page height changes
        const handleResize = () => {
            ScrollTrigger.getAll().forEach((instance) => instance.kill());
            updateScrollTrigger();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [updateScrollTrigger]);

    return (
        <div ref={navbarRef} className="mx-7 sticky top-5 sm:mx-10 my-5 flex items-center justify-between z-40 lg:mx-40 2xl:mx-60">
            <div className="flex items-center">
                <Image src="/bi-logo-resized.png" width={23.6} height={50} alt="logo image" className="mr-2" />
                <h2 className="text-3xl font-semibold" style={{ fontFamily: playfair.style.fontFamily }}>
                    Brent.
                </h2>
            </div>
            <div>
                <RxHamburgerMenu className="text-2xl sm:hidden"/>
                <ul className="hidden sm:flex items-center">
                    <li><Link href="" className="font-medium text-lg relative after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Resume</Link></li>
                    <li><Link href="/blog" className="ml-12 font-medium text-lg relative after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Blog</Link></li>
                    <li className="ml-16">
                        <a href="https://www.linkedin.com/in/renibanez/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="text-2xl transition duration-300 hover:scale-110" />
                        </a>
                    </li>
                    <li className="ml-16">
                        <a href="https://github.com/brentibanez331" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl transition duration-300 hover:scale-110" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}