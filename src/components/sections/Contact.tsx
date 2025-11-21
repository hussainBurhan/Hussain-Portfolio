"use client";

import { Hero as HeroType } from "@/types";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface ContactProps {
    data: HeroType; // Reusing Hero type as it contains contact info
}

export function Contact({ data }: ContactProps) {
    return (
        <section id="contact" className="py-20 min-h-[60vh] flex items-center justify-center">
            <div className="container mx-auto px-6 text-center max-w-2xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary font-medium mb-4"
                >
                    07. What's Next?
                </motion.h2>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Get In Touch
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-muted-foreground text-lg mb-10"
                >
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open. I'll try my best to get back to you!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <Button size="lg" className="h-14 px-8 text-lg" asChild>
                        <a href={`mailto:${data.email}`}>
                            <Mail className="mr-2 h-5 w-5" />
                            Say Hello
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
