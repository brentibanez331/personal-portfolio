import Image from "next/image";
import { Separator } from "./ui/separator";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    return (

        <div className="w-full flex flex-col px-8">
            <h2 className="gen-sans-bold text-9xl pb-8">works</h2>
            <div ref={addToCardRefs} className="flex py-4 justify-between cursor-pointer">
                <div className="flex flex-col justify-between w-2/5">
                    <div className="flex flex-col space-y-1">
                        <h4 className="gen-sans-semibold mb-3 text-xl">Full Stack Engineer</h4>
                        <p className="text-md">Callo Technologies Inc.</p>
                        <p className="text-md">oct 2024 — now</p>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-y-6">
                        <div className="space-y-1">
                            <p className="text-xs text-neutral-400 font-semibold">Live Site</p>
                            <a href="https://ouicall.com" target="_blank" className="text-sm font-semibold">OUICALL.COM</a>
                        </div>
                        <div className="space-y-0.5">
                            <p className="text-xs text-neutral-400 font-semibold">Industry</p>
                            <p className="text-sm font-semibold">Beauty care</p>
                        </div>
                        
                            <p className="text-sm font-semibold">VIEW PROJECT</p>
                            {/* <p className="text-xs font-semibold"></p> */}
                        
                        <p>Industry</p>
                        <p></p>
                    </div>
                </div>
                <div className="w-[750px] h-[500px] border border-neutral-400 rounded-lg overflow-hidden">
                    <Image ref={addToImageRefs} src={"/projects/ouicall.png"} alt="" width={1000} height={1000} className="object-cover" />
                </div>
            </div>

            <div ref={addToCardRefs} className="flex py-4 justify-between cursor-pointer">
                <div className="flex flex-col">
                    <h4 className="gen-sans-semibold text-5xl mb-3">Full Stack Engineer</h4>
                    <p className="text-md">K92 Keema</p>
                    <p className="text-md">nov 2024 — mar 2025</p>
                </div>
                <Image ref={addToImageRefs} src={"/projects/PCTC.png"} alt="" width={1000} height={1000} className="w-[750px] h-[400px] rounded-md object-cover border border-neutral-200" />
            </div>

            <div ref={addToCardRefs} className="flex py-4 justify-between cursor-pointer">
                <div className="flex flex-col">
                    <h4 className="gen-sans-semibold text-5xl mb-3">Software Engineer</h4>
                    <p className="text-md">ACF Solutions</p>
                    <p className="text-md">may 2024 — oct 2024</p>
                </div>
                <Image ref={addToImageRefs} src={"/projects/PCTC.png"} alt="" width={1000} height={1000} className="w-[750px] h-[400px] rounded-md object-cover border border-neutral-200" />
            </div>

            <Separator />
            <div ref={addToCardRefs} className="flex py-4 justify-between cursor-pointer">
                <div className="flex flex-col">
                    <h4 className="gen-sans-semibold text-5xl mb-3">Software Engineer Intern</h4>
                    <p className="text-md">Department of Information, Communications and Technology</p>
                    <p className="text-md">jun 2024 — aug 2024</p>
                </div>
                <Image ref={addToImageRefs} src={"/projects/PCTC.png"} alt="" width={1000} height={1000} className="w-[750px] h-[400px] rounded-md object-cover border border-neutral-200" />
            </div>
        </div>
    )
}