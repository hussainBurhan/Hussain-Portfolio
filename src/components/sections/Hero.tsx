"use client";

import { Hero as HeroType } from "@/types";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { ChevronDown } from "lucide-react";
import { MouseEvent } from "react";

interface HeroProps {
    data: HeroType;
}

export function Hero({ data }: HeroProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth out the mouse movement
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    // Calculate rotation based on mouse position
    // Rotate X depends on Y axis (tilting up/down)
    // Rotate Y depends on X axis (tilting left/right)
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        // Calculate mouse position relative to the center of the element
        // Range: -0.5 to 0.5
        const width = rect.width;
        const height = rect.height;

        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;

        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            <BackgroundBeams />
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex flex-col items-start max-w-3xl">


                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
                        >
                            {data.name}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-6"
                        >
                            <TypewriterEffect
                                words={[
                                    { text: data.title, className: "text-4xl md:text-6xl font-bold text-muted-foreground tracking-tight" }
                                ]}
                                className="text-left"
                                cursorClassName="bg-primary h-8 md:h-12"
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
                        >
                            {data.summary}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap gap-4"
                        >
                            {data.github && (
                                <Button variant="outline" size="lg" asChild>
                                    <Link href={data.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-5 w-5" />
                                        GitHub
                                    </Link>
                                </Button>
                            )}
                            {data.linkedin && (
                                <Button variant="outline" size="lg" asChild>
                                    <Link href={data.linkedin} target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="mr-2 h-5 w-5" />
                                        LinkedIn
                                    </Link>
                                </Button>
                            )}
                            {data.email && (
                                <Button variant="outline" size="lg" asChild>
                                    <Link href={`mailto:${data.email}`}>
                                        <Mail className="mr-2 h-5 w-5" />
                                        Email
                                    </Link>
                                </Button>
                            )}
                            {data.phone && (
                                <Button variant="outline" size="lg" asChild>
                                    <Link href={`tel:${data.phone}`}>
                                        <Phone className="mr-2 h-5 w-5" />
                                        Phone
                                    </Link>
                                </Button>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-8 flex items-center text-muted-foreground"
                        >
                            <MapPin className="mr-2 h-4 w-4" />
                            {data.location}
                        </motion.div>
                    </div>

                    {data.image && (
                        <div className="relative [perspective:1000px]">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                style={{
                                    rotateX,
                                    rotateY,
                                    transformStyle: "preserve-3d"
                                }}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 group cursor-pointer"
                            >
                                <div
                                    className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 -z-10"
                                    style={{ transform: "translateZ(-20px)" }}
                                />
                                <div
                                    className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-background shadow-2xl transition-all duration-500"
                                    style={{ transform: "translateZ(20px)" }}
                                >
                                    <Image
                                        src={data.image}
                                        alt={data.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                {/* Decorative elements for 3D feel */}
                                <div
                                    className="absolute -inset-4 border-2 border-primary/20 rounded-3xl -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ transform: "translateZ(-40px)" }}
                                />
                            </motion.div>
                        </div>
                    )}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <ChevronDown className="text-muted-foreground h-8 w-8" />
                </motion.div>
            </div>
        </section>
    );
}
