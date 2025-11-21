"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypewriterEffectProps {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}: TypewriterEffectProps) => {
    // Split words into array of characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    const [scope, setScope] = useState<any>(null);
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            // Simple animation logic handled by parent or CSS if needed, 
            // but for now we'll just render the text.
            // To make it a true typewriter, we'd use motion.span with stagger.
        }
    }, [isInView]);

    const renderWords = () => {
        return (
            <motion.div ref={ref} className="inline">
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block mr-1">
                            {word.text.map((char, index) => (
                                <motion.span
                                    initial={{
                                        opacity: 0,
                                    }}
                                    key={`char-${index}`}
                                    className={word.className}
                                    animate={isInView ? {
                                        opacity: 1,
                                    } : {}}
                                    transition={{
                                        duration: 0.1,
                                        delay: idx * 0.2 + index * 0.05,
                                        ease: "easeInOut",
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div
            className={`text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center ${className}`}
        >
            {renderWords()}
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={`inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500 ${cursorClassName}`}
            ></motion.span>
        </div>
    );
};
