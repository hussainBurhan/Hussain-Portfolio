"use client";

import { Education as EducationType } from "@/types";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface EducationProps {
    data: EducationType[];
}

export function Education({ data }: EducationProps) {
    return (
        <section id="education" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-flex items-center gap-3">
                        <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                        Education
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Academic background and qualifications.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {data.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center"
                        >

                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                                {edu.degree}
                            </h3>

                            <p className="text-xl text-muted-foreground font-medium mb-6">
                                {edu.institution}
                            </p>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground/60 uppercase tracking-wider font-medium">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{edu.startDate} - {edu.endDate}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{edu.location}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
