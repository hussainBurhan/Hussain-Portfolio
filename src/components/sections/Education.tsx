"use client";

import { Education as EducationType } from "@/types";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface EducationProps {
    data: EducationType[];
}

export function Education({ data }: EducationProps) {
    return (
        <section id="education" className="py-20">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 flex items-center"
                >
                    <span className="text-primary mr-2">05.</span> Education
                </motion.h2>

                <div className="space-y-8 max-w-3xl">
                    {data.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-muted"
                        >
                            <div className="absolute -left-[9px] top-0 bg-background p-1 rounded-full border-2 border-primary">
                                <GraduationCap className="w-4 h-4 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">{edu.degree}</h3>
                            <p className="text-lg text-primary font-medium">{edu.institution}</p>
                            <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                                <span>{edu.location}</span>
                                <span className="font-mono">{edu.startDate} - {edu.endDate}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
