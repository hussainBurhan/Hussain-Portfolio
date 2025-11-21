"use client";

import { Hero as HeroType } from "@/types";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { ChevronDown } from "lucide-react";

interface HeroProps {
    data: HeroType;
}

export function Hero({ data }: HeroProps) {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            <BackgroundBeams />
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex flex-col items-start max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-primary font-medium text-lg mb-4">Hi, my name is</h2>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
                        >
                            {data.name}.
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
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                <Image
                                    src={data.image}
                                    alt={data.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>
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
