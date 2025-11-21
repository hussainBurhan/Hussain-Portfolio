"use client";

import { Skills as SkillsType } from "@/types";
import { motion } from "framer-motion";

interface SkillsProps {
    data: SkillsType;
}

export function Skills({ data }: SkillsProps) {
    // Define categories to display in order
    const categories = [
        { key: "frontend_ui", label: "Frontend & UI Development" },
        { key: "backend_devops", label: "Backend & DevOps" },
        { key: "ai_ml", label: "AI & Machine Learning" },
        { key: "databases_tools", label: "Databases & Tools" },
    ];

    return (
        <section id="skills" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 flex items-center"
                >
                    <span className="text-primary mr-2">06.</span> Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => {
                        const skills = data[category.key];
                        if (!skills || skills.length === 0) return null;

                        return (
                            <motion.div
                                key={category.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className="text-xl font-semibold mb-4">{category.label}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, i) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + i * 0.05 }}
                                            whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-3 py-1 bg-background border rounded-full text-sm text-muted-foreground transition-colors cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
