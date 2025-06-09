'use client'
import { cn } from "@/lib/utils";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

export default function About() {
    return (
        <div className="h-screen mx-4 mt-20">
            <WordsPullUp
                text="Award-winning Full Stack Engineer with proven expertise in software development, leadership, and innovation. Currently building impactful solutions in the startup ecosystem with a strong foundation of hackathon victories and academic excellence."
                className=""
                maxWidth="xl" // You can use 'sm', 'md', 'lg', 'xl', etc.
                boldWords={["Full Stack Engineer", "innovation", "impactful", "Ouicall,"]} 
            />
        </div>
    )
}

const WordsPullUp = ({ 
    text, 
    className,
    maxWidth = "md",
    boldWords = []
}: { 
    text: string, 
    className: string,
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full",
    boldWords?: string[] 
}) => {
    const splittedText = text.split(' ');
    const pullupVariant = {
        initial: { y: 20, opacity: 0 },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.05,
            },
        }),
    };
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    const widthClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl", 
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "full": "max-w-full"
    };

    const shouldBeBold = (word: string): boolean => {
        return boldWords.some(boldPhrase => {
            if(boldPhrase === word ) return true;

            const wordsInPhrase = boldPhrase.split(' ');
            const phraseIndex = wordsInPhrase.indexOf(word);
            if(phraseIndex === -1) return false;

            const currentIndex = splittedText.indexOf(word)
            if(currentIndex === -1) return false;

            for (let i = 0; i < wordsInPhrase.length; i++) {
                const expectedWordIndex = currentIndex - phraseIndex + i;
                if (
                    expectedWordIndex < 0 || 
                    expectedWordIndex >= splittedText.length ||
                    splittedText[expectedWordIndex] !== wordsInPhrase[i]
                ) {
                    return false;
                }
            }
            
            return true;
        })
    }
    
    return (
        <div className={cn("flex flex-wrap", widthClasses[maxWidth])}>
            {splittedText.map((current, i) => (
                <motion.div
                    key={i}
                    ref={i === 0 ? ref : undefined} // Only need one ref to trigger animation
                    variants={pullupVariant}
                    initial="initial"
                    animate={isInView ? 'animate' : ''}
                    custom={i}
                    className={cn(
                        'text-3xl tracking-tighter',
                        'pr-2 mb-2', // Add bottom margin for wrapped lines
                        shouldBeBold(current) ? 'font-semibold' : 'font-normal', className
                    )}
                >
                    {current === ''
                        ? <span>&nbsp;</span>
                        : current}
                </motion.div>
            ))}
        </div>
    )
}