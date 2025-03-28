"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from 'motion/react';
import Hamburger from "./ui/hamburger";

export default function Nav() {
    const router = useRouter()

    return (
        <div className="flex justify-between w-full absolute top-0 z-[999] mix-blend-difference text-white sticky px-2 sm:px-4 pt-2 gen-sans-bold">
            <div className="cursor-pointer" onClick={() => router.push('/')}>brent.</div>
            <div className="hidden sm:flex">
                <div className="flex"><FlipLink href="/about">about</FlipLink>,</div>
                <div className="flex"><FlipLink href="/work">work</FlipLink>,</div>
                <div className="flex"><FlipLink href="/work">projects</FlipLink>,</div>
                <div className="flex"><FlipLink href="">contact</FlipLink></div>
            </div>
            <div onClick={() => router.push("/cv")} className="hidden sm:flex hover:text-neutral-500 transition ease cursor-pointer">check my cv</div>

            <Hamburger className="sm:hidden z-[999]" />
        </div>
    )
}


const FlipLink = ({ children, href }: { children: string, href: string }) => {
    return (<motion.a
        initial="initial"
        whileHover="hovered"
        href={href}
        className="relative block overflow-hidden whitespace-nowrap">
        <div>
            {children.split("").map((l, i) => {
                return (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                                rotateX: 0
                            },
                            hovered: {
                                y: "-80%",
                                rotateX: -90
                            }
                        }}
                        transition={{
                            delay: 0.03 * i,
                            visualDuration: 0
                        }}
                        className="inline-block"
                        key={i}>
                        {l}
                    </motion.span>)
            })}
        </div>
        <div className="absolute inset-0">
            {children.split("").map((l, i) => {
                return (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                                rotateX: -90
                            },
                            hovered: {
                                y: 0,
                                rotateX: 0
                            }
                        }}
                        transition={{
                            delay: 0.03 * i,
                            visualDuration: 0
                        }}

                        className="inline-block"
                        key={i}>
                        {l}
                    </motion.span>)
            })}
        </div>
    </motion.a>)
}