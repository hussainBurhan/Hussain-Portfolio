"use client";

import { Experience as ExperienceType } from "@/types";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard } from "@/components/ui/HoverCard";

interface ExperienceProps {
    data: ExperienceType[];
}

export function Experience({ data }: ExperienceProps) {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 flex items-center"
                >
                    <span className="text-primary mr-2">02.</span> Experience
                </motion.h2>

                <div className="space-y-8">
                    {data.map((job, index) => (
                        <HoverCard key={index}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="border-none shadow-none bg-transparent">
                                    <CardHeader className="p-0 mb-4">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                            <CardTitle className="text-xl font-bold">
                                                {job.role} <span className="text-primary">@ {job.company}</span>
                                            </CardTitle>
                                            <span className="text-sm font-mono text-muted-foreground">
                                                {job.startDate} - {job.endDate}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{job.location}</p>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        {job.responsibilities && (
                                            <div className="mb-4">
                                                <h4 className="font-semibold mb-2 text-primary">Key Responsibilities</h4>
                                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                    {job.responsibilities.map((resp, i) => (
                                                        <li key={i} className="text-base">
                                                            {resp}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {job.projects && (
                                            <div className="mb-4">
                                                <h4 className="font-semibold mb-2 text-primary">Selected Projects</h4>
                                                <div className="space-y-4">
                                                    {job.projects.map((project, i) => (
                                                        <div key={i}>
                                                            <h5 className="font-medium text-foreground mb-1">{project.name}</h5>
                                                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                                                {project.details.map((detail, j) => (
                                                                    <li key={j} className="text-sm">
                                                                        {detail}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {!job.responsibilities && !job.projects && (
                                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                {job.achievements.map((achievement, i) => (
                                                    <li key={i} className="text-base">
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </HoverCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
