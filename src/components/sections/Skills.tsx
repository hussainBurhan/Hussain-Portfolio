"use client";

import { Skills as SkillsType } from "@/types";
import { motion } from "framer-motion";
import { Code, Cpu, Database, Terminal } from "lucide-react";

interface SkillsProps {
    data: SkillsType;
}

export function Skills({ data }: SkillsProps) {
    const categories = [
        {
            key: "ai_ml",
            label: "AI & Machine Learning",
            icon: Cpu,
            color: "from-purple-500 to-indigo-500"
        },
        {
            key: "frontend_ui",
            label: "Frontend & UI",
            icon: Code,
            color: "from-blue-500 to-cyan-500"
        },
        {
            key: "backend_devops",
            label: "Backend & DevOps",
            icon: Terminal,
            color: "from-emerald-500 to-teal-500"
        },
        {
            key: "databases_tools",
            label: "Databases & Tools",
            icon: Database,
            color: "from-orange-500 to-red-500"
        },
    ];

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[40%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
                        Technical Arsenal
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive toolkit for building intelligent, scalable applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((category, index) => {
                        const skills = data[category.key as keyof SkillsType];
                        if (!skills || skills.length === 0) return null;

                        const Icon = category.icon;

                        return (
                            <motion.div
                                key={category.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="relative h-full p-6 rounded-2xl bg-background/40 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-primary/5">
                                    {/* Hover Glow */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 text-white shadow-lg`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-foreground">{category.label}</h3>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {skills.map((skill, i) => (
                                                <motion.span
                                                    key={skill}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1 + i * 0.03 }}
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-background/50 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-default shadow-sm"
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
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
