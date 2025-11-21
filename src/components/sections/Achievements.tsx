"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

interface AchievementsProps {
    data: string[];
}

export function Achievements({ data }: AchievementsProps) {
    return (
        <section id="achievements" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
                        Certifications & Awards
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Continuous learning and professional development milestones.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((achievement, index) => {
                        // Parse "Title — Issuer" format
                        const parts = achievement.split("—").map(s => s.trim());
                        const title = parts[0];
                        const issuer = parts.length > 1 ? parts[1] : "";

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group relative h-full"
                            >
                                <div className="relative h-full p-6 rounded-2xl bg-background/40 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-primary/5">
                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                                <Award className="w-6 h-6" />
                                            </div>
                                            {/* Decorative element */}
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-xl absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {title}
                                        </h3>

                                        {issuer && (
                                            <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between text-sm text-muted-foreground">
                                                <span className="font-medium">{issuer}</span>
                                                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
