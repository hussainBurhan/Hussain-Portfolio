"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface AchievementsProps {
    data: string[];
}

export function Achievements({ data }: AchievementsProps) {
    return (
        <section id="achievements" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 flex items-center"
                >
                    <span className="text-primary mr-2">04.</span> Certifications
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start space-x-4 p-6 rounded-lg bg-card border shadow-sm transition-all duration-300"
                        >
                            <div className="mt-1">
                                <Award className="text-primary h-6 w-6" />
                            </div>
                            <p className="text-muted-foreground">{achievement}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
