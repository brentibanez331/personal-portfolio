'use client';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { ReactNode } from 'react';
import { useRef } from 'react';
import React from 'react';

export function TextReveal({
    direction,
    children,
    className = '',
    staggerChildren = 0.1,
}: {
    direction: 'up' | 'down';
    children: ReactNode;
    className?: string;
    staggerChildren?: number;
}) {
    const FADE_DOWN = {
        hidden: {
            y: direction === 'down' ? "-100%" : "100%",
            // opacity: 0 
        },
        show: {
            y: 0,
            // opacity: 1,
            transition: {
                type: "tween",
                duration: 0.5,
                // Don't add staggerChildren here - it belongs only in the parent
            }
        }
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: staggerChildren,
                        delayChildren: 0.1, // Optional initial delay before starting the stagger
                    },
                },
            }}
            className={className}
        >
            {React.Children.map(children, (child, index) => (
                <div className="relative overflow-hidden" key={index}>
                    <motion.div
                        variants={{
                            hidden: {
                                y: direction === 'down' ? "-100%" : "100%",
                            },
                            show: {
                                y: 0,
                                transition: {
                                    type: "tween",
                                    duration: 0.4,
                                }
                            }
                        }}
                    >
                        {React.isValidElement(child) ? child : child}
                    </motion.div>
                </div>
            ))}
        </motion.div>
    );
}