"use client";

import { Hero as HeroType } from "@/types";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";

interface ContactProps {
    data: HeroType;
}

export function Contact({ data }: ContactProps) {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(data.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-20 min-h-[60vh] flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-primary font-medium mb-6 tracking-wide uppercase text-sm">
                        What's Next?
                    </h2>

                    <h3 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                        Get In Touch
                    </h3>

                    <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
                    </p>

                    <div className="flex flex-col items-center gap-8">
                        <div className="flex items-center gap-4">
                            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300" asChild>
                                <a href={`mailto:${data.email}`}>
                                    <Mail className="mr-2 h-5 w-5" />
                                    Say Hello
                                </a>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 px-6 rounded-full border-2 hover:bg-muted/50"
                                onClick={copyEmail}
                            >
                                {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                            </Button>
                        </div>

                        <div className="flex items-center gap-6 mt-4">
                            {data.linkedin && (
                                <a
                                    href={data.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300 shadow-sm"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            )}
                            {data.github && (
                                <a
                                    href={data.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300 shadow-sm"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
