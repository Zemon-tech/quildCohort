import * as React from "react";
import { motion } from "motion/react";
import { MessageSquare, Sparkles, CheckCircle2, RotateCcw } from "lucide-react";
import { Button } from "../ui/button";

const steps = [
    {
        id: "01",
        label: "Selection",
        title: "High-Agency Filter",
        metrics: ["<10% ADMISSION", "15H / WEEK"],
        text: "We screen for intent and slope, not just existing skill. Entry is earned through evidence of prior execution.",
        bullets: [
            "Initial application screening for intent",
            "Evidence of technical curiosity",
            "Proof of execution (past projects)",
            "Strict 15h/week commitment agreement"
        ],
        imageUrl: "/howitworks-1.png"
    },
    {
        id: "02",
        label: "Foundations",
        title: "Logic & Mental Models",
        metrics: ["6H LIVE SESSIONS", "SYSTEMS THINKING"],
        text: "Deconstructing software architecture. We focus on why systems work the way they do, moving beyond syntax.",
        bullets: [
            "Architecture deconstruction sessions",
            "Relational logic and schema design",
            "Thinking in system trade-offs",
            "Mandatory weekly logic check-ins"
        ],
        imageUrl: "/howitworks-2.png"
    },
    {
        id: "03",
        label: "The Build",
        title: "Execution & Accountability",
        metrics: ["PRODUCTION STACK", "CODE REVIEW"],
        text: "Production-level implementation. Modular APIs, scalable schemas, and maintainable frontend structures.",
        bullets: [
            "Node.js & PostgreSQL implementations",
            "Next.js production-grade architecture",
            "Rigorous peer and mentor code reviews",
            "Binary shipping: It works or it doesn't"
        ],
        imageUrl: "/howitworks-3.png"
    },
    {
        id: "04",
        label: "Distinction",
        title: "Synthesis & Capstone",
        metrics: ["FINAL REVIEW", "ALUMNI NETWORK"],
        text: "Final end-to-end production system design. Graduation is awarded only to those meeting industry standards.",
        bullets: [
            "Capstone project deployment",
            "Formal defense of architectural choices",
            "Mentorship sign-off on code quality",
            "Entry into the Quild Alumni network"
        ],
        imageUrl: "/howitworks-1.png"
    },
];

export default function HowItWorks() {
    return (
        <section className="mx-auto flex w-full flex-col items-center justify-center bg-black px-6 py-40" id="system">
            <div className="mb-24 flex flex-col items-center gap-4 text-center">
                <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-zinc-800" />
                    <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">The Protocol</p>
                    <span className="h-px w-8 bg-zinc-800" />
                </div>
                <h2 className="text-5xl md:text-7xl font-normal text-white tracking-tighter">
                    A Structured Path <br /> <span className="text-zinc-600 font-light italic">to Competence.</span>
                </h2>
                <p className="mt-6 max-w-md text-sm text-zinc-500 leading-relaxed font-light">
                    Entry is selective. Progression is earned. <br /> Completion is binary.
                </p>
            </div>

            <div className="relative w-full max-w-7xl">
                {/* Central Spine */}
                <div className="absolute left-[20px] top-0 h-full w-px bg-zinc-900 md:left-1/2 md:-translate-x-1/2" />

                <div className="space-y-48">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative flex flex-col md:flex-row md:items-center">

                            {/* Desktop Image (Alternating) */}
                            <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? "order-last pl-24" : "order-first pr-24"}`}>
                                <motion.div
                                    initial={{ opacity: 0.1, filter: "grayscale(100%)" }}
                                    whileInView={{ opacity: 0.6, filter: "grayscale(0%)" }}
                                    viewport={{ amount: 0.6, once: false }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="relative aspect-[16/10] w-full overflow-hidden border border-white/5"
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                        style={{ backgroundImage: `url(${step.imageUrl})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
                                </motion.div>
                            </div>

                            {/* Center Node */}
                            <motion.div
                                initial={{ backgroundColor: "rgb(0,0,0)", borderColor: "rgb(39,39,42)" }}
                                whileInView={{ backgroundColor: "rgb(255,255,255)", borderColor: "rgb(255,255,255)", boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
                                viewport={{ amount: 0.8, once: false }}
                                className="absolute left-[20px] z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border md:left-1/2 md:block"
                            />

                            {/* Content Card */}
                            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-24" : "md:pl-24"}`}>
                                <div className="pl-12 md:pl-0">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <span className="font-mono text-xs text-zinc-600">{step.id}</span>
                                            <span className="h-px w-4 bg-zinc-800" />
                                            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{step.label}</p>
                                        </div>

                                        <h3 className="text-3xl font-medium text-white tracking-tight">{step.title}</h3>

                                        <div className="flex flex-wrap gap-2">
                                            {step.metrics.map(metric => (
                                                <span key={metric} className="border border-zinc-800/50 bg-zinc-900/30 px-2 py-0.5 text-[9px] font-mono text-zinc-500">
                                                    {metric}
                                                </span>
                                            ))}
                                        </div>

                                        <p className="text-base leading-relaxed text-zinc-400 font-light">
                                            {step.text}
                                        </p>

                                        {/* Mobile Image */}
                                        <motion.div
                                            initial={{ opacity: 0.2, filter: "grayscale(100%)" }}
                                            whileInView={{ opacity: 0.6, filter: "grayscale(0%)" }}
                                            viewport={{ amount: 0.4, once: false }}
                                            transition={{ duration: 0.8 }}
                                            className="block md:hidden my-8 aspect-[16/9] w-full overflow-hidden border border-white/5"
                                        >
                                            <div
                                                className="h-full w-full bg-cover bg-center"
                                                style={{ backgroundImage: `url(${step.imageUrl})` }}
                                            />
                                        </motion.div>

                                        <ul className="grid gap-x-8 gap-y-3 pt-6 sm:grid-cols-2">
                                            {step.bullets.map((bullet) => (
                                                <li key={bullet} className="flex items-start gap-3 text-[13px] text-zinc-500 leading-snug font-light">
                                                    <span className="mt-2 h-px w-2 bg-zinc-800 shrink-0" />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
