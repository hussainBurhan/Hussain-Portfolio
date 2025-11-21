"use client";

import { Experience as ExperienceType } from "@/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceProps {
    data: ExperienceType[];
}

export function Experience({ data }: ExperienceProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Professional Journey
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        A timeline of my career, featuring key roles, projects, and milestones.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Continuous Line */}
                    <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20" />

                    <div className="space-y-12">
                        {data.map((job, index) => (
                            <TimelineItem key={index} job={job} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ job, index }: { job: ExperienceType; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-12 md:pl-24"
        >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-8 top-0 w-4 h-4 bg-background border-4 border-primary rounded-full transform -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(var(--primary),0.5)] mt-6" />

            {/* Content Card */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-background/40 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 border-b border-white/5 pb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {job.role}
                            </h3>
                            <div className="flex items-center gap-2 text-lg font-medium text-muted-foreground mt-1">
                                <Briefcase className="w-4 h-4" />
                                {job.company}
                            </div>
                        </div>

                        <div className="flex flex-col md:items-end gap-1">
                            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium whitespace-nowrap">
                                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                                {job.startDate} - {job.endDate}
                            </span>
                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground/80 md:mt-1">
                                <MapPin className="w-3.5 h-3.5" />
                                {job.location}
                            </div>
                        </div>
                    </div>

                    {/* Responsibilities / Achievements */}
                    <div className="space-y-6">
                        {job.responsibilities && (
                            <div>
                                <h4 className="text-sm font-semibold text-foreground/90 mb-3 uppercase tracking-wider text-xs">Key Responsibilities</h4>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {job.responsibilities.map((resp, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Projects Section */}
                        {job.projects && job.projects.length > 0 && (
                            <div>
                                <h4 className="text-sm font-semibold text-foreground/90 mb-3 uppercase tracking-wider text-xs">Key Projects</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {job.projects.map((project, i) => (
                                        <div key={i} className="bg-background/50 rounded-lg p-4 border border-border/50 hover:bg-background/80 transition-colors">
                                            <div className="font-medium text-primary mb-2">{project.name}</div>
                                            <ul className="space-y-1.5">
                                                {project.details.map((detail, j) => (
                                                    <li key={j} className="text-xs text-muted-foreground flex items-start gap-1.5">
                                                        <span className="mt-1 w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Fallback for older data structure */}
                        {!job.responsibilities && !job.projects && job.achievements && (
                            <ul className="space-y-2">
                                {job.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
