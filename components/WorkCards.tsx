'use client'

import Image from "next/image";
import { Separator } from "./ui/separator";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageDistort from "./ImageDistort";
import { motion, useSpring } from "motion/react";


import ouicall from "./../public/projects/ouicall.png";
import goverify from "./../public/projects/goverify.png";
import { spring } from "motion";


const works = [
    {
        role: "Full Stack Engineer",
        company: "Callo Technologies Inc.",
        link: {
            url: "https://ouicall.com",
            placeholder: "OUICALL.COM",
            enable: true
        },
        industry: "Beauty care, Booking",
        date: "OCT 2024 - NOW",
        responsibilities: [
            "FRONTEND",
            "BACKEND",
            "PROJECT MANAGEMENT",
            "DATABASE ENGINEERING"
        ],
        technologies: [
            "NEXT.js",
            "NEST.js",
            "POSTGRESQL",
            "DRIZZLE"
        ],
        imagePath: ouicall
    },
    {
        role: "Full Stack Engineer",
        company: "March Resources",
        link: {
            url: "N/A",
            placeholder: "OUICALL.COM",
            enable: false
        },
        industry: "Automotive, Paints",
        date: "NOV 2024 - MAR 2025",
        responsibilities: [
            "FRONTEND",
            "BACKEND",
            "PROJECT MANAGEMENT",
        ],
        technologies: [
            "NEXT.js",
            "NEST.js",
            "POSTGRESQL",
            "MIKRO-ORM"
        ],
        imagePath: ouicall
    },
    {
        role: "Software Engineer",
        company: "ACF Solutions",
        link: {
            url: "N/A",
            placeholder: "N/A",
            enable: false
        },
        industry: "N/A",
        date: "NOV 2024 - MAR 2025",
        responsibilities: [
            "MOBILE DEVELOPMENT",
            "UI/UX DESIGN (MOBILE)",
            "FRONTEND",
        ],
        technologies: [
            "FLUTTER",
            "POSTMAN",
            // "POSTGRESQL",
            // "DRIZZLE"
        ],
        imagePath: ouicall
    },
    {
        role: "Software Engineer Intern",
        company: "Department of Information and Communications Technology",
        link: {
            url: "https://ouicall.com",
            placeholder: "OUICALL.COM"
        },
        industry: "N/A",
        date: "NOV 2024 - MAR 2025",
        responsibilities: [
            "FRONTEND",
            "BACKEND",
            "UI/UX",
        ],
        technologies: [
            "NEXT.js",
            ".NET MVC",
            "MYSQL",
        ],
        imagePath: goverify
    }
]

export default function WorkSection() {
    const cardRefs = useRef<HTMLDivElement[]>([]);
    const imageRefs = useRef<HTMLImageElement[]>([]);

    const [img, setImg] = useState({
        src: "",
        alt: "",
        opacity: 0
    })

    const spring = {
        stiffness: 150,
        damping: 15,
        mass: 0.1
    }

    const imagePos = {
        x: useSpring(0, spring),
        y: useSpring(0, spring)
    }

    const handleMove = (e: MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;

        console.log(clientX, clientY)

        imagePos.x.set(clientX);
        imagePos.y.set(clientY);
    }

    gsap.registerPlugin(ScrollTrigger)
    // const workRef = useRef<HTMLDivElement>(null)

    const cardVariants = {
        rest: {
            backgroundColor: "#ffffff",
            color: "#1b1b1b",
            transition: { duration: 0.1, ease: "easeInOut" }
        },
        hover: {
            backgroundColor: "#1b1b1b",
            color: "#ffffff",
            transition: { duration: 0.1, ease: "easeInOut" }
        }
    };

    const roleVariants = {
        rest: {
            x: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        hover: {
            x: 20,
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    }

    const companyVariants = {
        rest: {
            x: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        hover: {
            x: 20,
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    }

    return (

        <div className="w-full flex flex-col">
            <h2 className="gen-sans-bold text-9xl px-4">work experience</h2>
            <Separator className="mt-4 bg-neutral-800" />
            <div className="w-full relative" onMouseMove={handleMove}>
                {works.map((work, index) => (
                    <motion.div
                        key={index}
                        initial="rest"
                        whileHover="hover"
                        className="hover-card"
                        onMouseEnter={() => setImg({
                            src: work.imagePath.src,
                            alt: `${work.company} image`,
                            opacity: 1
                        })}

                        onMouseLeave={() => setImg({
                            src: img.src,
                            alt: img.alt,
                            opacity: 0
                        })}

                    >
                        <motion.div variants={cardVariants} className="py-6 px-4">
                            <motion.p variants={roleVariants} className="text-5xl font-bold">{work.role}</motion.p>
                            <motion.p variants={companyVariants}>{work.company}</motion.p>
                        </motion.div>
                        <Separator className="bg-[#1b1b1b] " />
                    </motion.div>

                ))}

                <motion.div
                    style={{
                        y: imagePos.y,
                        x: imagePos.x,
                        opacity: img.opacity,
                        
                    }}
                    className="hover-image"
                >
                    <Image
                        src={img.src}
                        alt={`${img.alt} project`}
                        width={500}
                        height={500}
                        className=""
                    />

                    {/* )} */}

                </motion.div>

            </div>

        </div>
    )
}

{/* <motion.div
                        // whileHover="hover"
                        initial="hover"
                        variants={containerVariants}
                        key={index}
                        className="flex flex-col justify-between"
                    >
                        <div className="flex justify-between h-full w-full">
                            <div className="flex h-full flex-col justify-between w-1/2">
                                <div className="flex flex-col space-y-1">
                                    <h4 className="gen-sans-semibold text-3xl">{work.role}</h4>
                                    <p className="text-md">{work.company}</p>
                                </div>

                                Default is collapsed and hidden, show on hover
                                <motion.div
                                    variants={detailsVariants}
                                    className="grid grid-cols-3">

                                    <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-y-8">
                                        <div className="space-y-1">
                                            <p className="text-xs text-neutral-400 font-semibold">Live Site</p>
                                            <a href={work.link.url} target="_blank" className="text-sm font-semibold">{work.link.placeholder}</a>
                                        </div>
                                        <div className="space-y-0.5">
                                            <p className="text-xs text-neutral-400 font-semibold">Industry</p>
                                            <p className="text-sm font-semibold">{work.industry}</p>
                                        </div>
                                        <p className="text-sm font-semibold pt-2">VIEW PROJECT</p>

                                        <div className="space-y-0.5 ">
                                            <p className="text-xs text-neutral-400 font-semibold">Date</p>
                                            <p className="text-sm font-semibold">{work.date}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-0.5 ">
                                        <p className="text-xs text-neutral-400 font-semibold">Date</p>
                                        <p className="text-sm font-semibold">{work.date}</p>
                                    </div>
                                    <div className="space-y-0.5 ">
                                        <p className="text-xs text-neutral-400 font-semibold">Technology</p>
                                        <p className="text-sm font-semibold">{work.date}</p>
                                        <div className="text-sm font-semibold space-y-1">
                                            {work.technologies.map((item) => (
                                                <p>{item}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div
                                        className="text-end mr-8 space-y-1"
                                    >
                                        <p className="text-xs text-neutral-400 font-semibold">Responsibilities</p>
                                        <div className="text-sm font-semibold space-y-1">
                                            {work.responsibilities.map((item) => (
                                                <p>{item}</p>
                                            ))}
                                        </div>
                                    </div>


                                </motion.div>
                            </div>
                            <motion.div
                                variants={cardVariants}
                                className="flex items-end"
                            >
                                <motion.div

                                    className="w-[750px] h-full shadow-md rounded-lg overflow-hidden">
                                    <Image src={work.imagePath} alt="" width={1000} height={1000} className="object-cover h-full" />
                                </motion.div>
                            </motion.div>
                        </div>
                        <Separator className="bg-neutral-400 mt-4" />
                    </motion.div> */}