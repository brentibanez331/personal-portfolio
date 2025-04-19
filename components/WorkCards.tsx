import Image from "next/image";
import { Separator } from "./ui/separator";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageDistort from "./ImageDistort";
import { motion } from "motion/react";

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
        imagePath: "/projects/ouicall.png"
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
        imagePath: "/projects/ouicall.png"
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
        imagePath: "/projects/ouicall.png"
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
        imagePath: "/projects/ouicall.png"
    }
]

export default function WorkSection() {
    const cardRefs = useRef<HTMLDivElement[]>([]);
    const imageRefs = useRef<HTMLImageElement[]>([]);
    gsap.registerPlugin(ScrollTrigger)
    // const workRef = useRef<HTMLDivElement>(null)

    cardRefs.current = [];
    imageRefs.current = [];

    const addToCardRefs = (el: HTMLDivElement) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    const addToImageRefs = (el: HTMLImageElement) => {
        if (el && !imageRefs.current.includes(el)) {
            imageRefs.current.push(el);
        }
    };

    // useEffect(() => {
    //     const ctx = gsap.to('body', {
    //         backgroundColor: '#1A1A1A', // Target white background
    //         color: '#ffffff',
    //         scrollTrigger: {
    //             trigger: workRef.current,
    //             start: 'top 80%', // Start transition when top of work section is 80% from the top of viewport
    //             end: 'top 20%', // Complete transition when top of work section is 20% from the top
    //             scrub: true, // Smooth animation that ties to scroll position
    //             markers: false, // Only show markers in development
    //         }
    //     });

    //     return () => {
    //         ctx.revert()

    //         gsap.set('body', {
    //             backgroundColor: '',
    //             color: ''
    //         });
    //     }
    // }, [workRef])

    // useEffect(() => {
    //     cardRefs.current.forEach((card, index) => {
    //         const nextCard = cardRefs.current[index + 1];

    //         gsap.to(card, {
    //             scrollTrigger: {
    //                 trigger: card,
    //                 start: `top bottom-=100`,
    //                 end: `top top+=40`,
    //                 scrub: true,
    //                 markers: true,
    //                 invalidateOnRefresh: true
    //             },

    //         })

    //         ScrollTrigger.create({
    //             trigger: card,
    //             start: "top top",
    //             pin: true,
    //             pinSpacing: false,
    //             markers: true,
    //             id: 'pin',
    //             end: nextCard ? "top" : "bottom top",
    //             invalidateOnRefresh: true,
    //         });
    //     })
    // }, [])

    const containerVariants = {
        rest: {
            height: "120px",
            marginBottom: "32px",
            transition: { duration: 0.5, ease: "easeInOut" }
        },
        hover: {
            height: "500px",
            marginBottom: "48px",
            transition: { duration: 0.5, ease: "easeInOut" }
        }
    };

    const cardVariants = {
        rest: {
            height: "100%",
            transition: { duration: 0.5, ease: "easeInOut" }
        },
        hover: {
            height: "100%",
            transition: { duration: 0.5, ease: "easeInOut" }
        }
    };

    // const imageContainerVariants = {
    //     rest: {
    //         height: "100%",
    //         transition: { duration: 0.5, ease: "easeInOut" }
    //     },
    //     hover: {
    //         height: "100%",
    //         transition: { duration: 0.5, ease: "easeInOut" }
    //     }
    // };

    const detailsVariants = {
        rest: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        hover: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    };

    return (

        <div className="w-full flex flex-col px-4">
            <h2 className="gen-sans-bold text-9xl">experience</h2>
            <Separator className="mt-4 mb-4 bg-neutral-800" />
            <div className="w-full">
                {works.map((work, index) => (

                    <motion.div
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

                                {/* Default is collapsed and hidden, show on hover */}
                                <motion.div
                                    variants={detailsVariants}
                                    className="grid grid-cols-3">

                                    {/* <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-y-8">
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
                                    </div> */}
                                    {/* Default is collapsed and hidden, show on hover */}
                                    <div className="space-y-0.5 ">
                                        <p className="text-xs text-neutral-400 font-semibold">Date</p>
                                        <p className="text-sm font-semibold">{work.date}</p>
                                    </div>
                                    <div className="space-y-0.5 ">
                                        <p className="text-xs text-neutral-400 font-semibold">Technology</p>
                                        {/* <p className="text-sm font-semibold">{work.date}</p> */}
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

                                    className="w-[750px] h-full border border-neutral-400 rounded-lg overflow-hidden">
                                    <Image src={work.imagePath} alt="" width={1000} height={1000} className="object-cover h-full" />
                                </motion.div>
                            </motion.div>
                        </div>
                        <Separator className="bg-neutral-400 mt-4" />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}