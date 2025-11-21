"use client";

import React from "react";
import { motion } from "framer-motion";

export const HoverCard = ({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <motion.div
            className={className}
            whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                    duration: 0.3,
                    ease: "easeOut"
                }
            }}
            transition={{
                duration: 0.2,
                ease: "easeInOut"
            }}
        >
            <div className="relative h-full">
                {/* Glow effect on hover */}
                <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg opacity-0 blur group-hover:opacity-20 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.2 }}
                />
                <div className="relative h-full">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};
