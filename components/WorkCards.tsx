import Image from "next/image";
import { Separator } from "./ui/separator";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WorkSection() {
    const cardRefs = useRef<HTMLDivElement[]>([]);
    const imageRefs = useRef<HTMLImageElement[]>([]);
    gsap.registerPlugin(ScrollTrigger)
    const workRef = useRef<HTMLDivElement>(null)

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

    useEffect(() => {
        gsap.to('body', {
            backgroundColor: '#1A1A1A', // Target white background
            color: '#ffffff',
            scrollTrigger: {
                trigger: workRef.current,
                start: 'top 80%', // Start transition when top of work section is 80% from the top of viewport
                end: 'top 20%', // Complete transition when top of work section is 20% from the top
                scrub: true, // Smooth animation that ties to scroll position
                markers: false, // Only show markers in development
            }
        });
    }, [workRef])

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

        <div ref={workRef} className="w-full flex flex-col px-8">
            <h2 className="gen-sans-bold text-9xl pb-8">work</h2>
            <Separator />
            <div ref={addToCardRefs} className="flex py-4 justify-between cursor-pointer">
                <div className="flex flex-col space-y-1">
                    <h4 className="gen-sans-semibold text-5xl mb-3">Full Stack Engineer</h4>
                    <p className="text-md">Callo Technologies Inc.</p>
                    <p className="text-md">oct 2024 — now</p>
                </div>
                <Image ref={addToImageRefs} src={"/projects/ouicall.png"} alt="" width={1000} height={1000} className="w-[750px] h-[400px] rounded-md object-cover" />
            </div>

            <Separator />

            <div ref={addToCardRefs} className="flex py-4 justify-between cursor-pointer">
                <div className="flex flex-col">
                    <h4 className="gen-sans-semibold text-5xl mb-3">Full Stack Engineer</h4>
                    <p className="text-md">K92 Keema</p>
                    <p className="text-md">nov 2024 — mar 2025</p>
                </div>
                <Image ref={addToImageRefs} src={"/projects/PCTC.png"} alt="" width={1000} height={1000} className="w-[750px] h-[400px] rounded-md object-cover" />
            </div>

            <Separator />

            <div ref={addToCardRefs} className="flex py-4 justify-between cursor-pointer">
                <div className="flex flex-col">
                    <h4 className="gen-sans-semibold text-5xl mb-3">Software Engineer</h4>
                    <p className="text-md">ACF Solutions</p>
                    <p className="text-md">may 2024 — oct 2024</p>
                </div>
                <Image ref={addToImageRefs} src={"/projects/PCTC.png"} alt="" width={1000} height={1000} className="w-[750px] h-[400px] rounded-md object-cover" />
            </div>

            <Separator />
            <div ref={addToCardRefs} className="flex py-4 justify-between cursor-pointer">
                <div className="flex flex-col">
                    <h4 className="gen-sans-semibold text-5xl mb-3">Software Engineer Intern</h4>
                    <p className="text-md">Department of Information, Communications and Technology</p>
                    <p className="text-md">jun 2024 — aug 2024</p>
                </div>
                <Image ref={addToImageRefs} src={"/projects/PCTC.png"} alt="" width={1000} height={1000} className="w-[750px] h-[400px] rounded-md object-cover" />
            </div>
        </div>
    )
}