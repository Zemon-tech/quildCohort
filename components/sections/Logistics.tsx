"use client";

import * as React from "react";
import { motion } from "motion/react";

/* ─── Floating label data ─── */
const leftLabels = [
    { text: "Live Google Meet Sessions", top: "12%" },
    { text: "Async Build Challenges", top: "44%" },
    { text: "Weekly \"Ship or Sink\" Reviews", top: "76%" },
];
const rightLabels = [
    { text: "Private Builder Discord", top: "12%" },
    { text: "GitHub Workflow", top: "44%" },
    { text: "Capstone Required", top: "76%" },
];

/* ─── Cycle blocks ─── */
const blocks = [
    {
        phase: "01",
        tag: "WEEKEND",
        title: "6-Hour Live Architecture Sessions",
        description:
            "Intense, deep system design. Deconstructing production architectures, reasoning about trade-offs, and building mental models in real-time with live mentorship.",
        accent: "rgba(255,255,255,0.06)",
    },
    {
        phase: "02",
        tag: "WEEKDAYS",
        title: "Daily Build & Follow-Ups",
        description:
            "Async build sprints and focused practical sessions. Ship incremental work daily — code reviews, debugging, and systematic iteration toward production quality.",
        accent: "rgba(255,255,255,0.04)",
    },
    {
        phase: "03",
        tag: "SHIP & REVIEW",
        title: "Assignment Submissions & Weekly Reviews",
        description:
            "GitHub PRs, assignment submissions, and the weekly 'Ship or Sink' review. Binary accountability — you ship working code or you're out.",
        accent: "rgba(255,255,255,0.05)",
    },
];

export default function Logistics() {
    return (
        <section
            className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-28 md:py-40 scroll-mt-0"
            id="logistics"
        >
            {/* ── Section header ── */}
            <div className="mb-20 flex flex-col items-center gap-4 text-center">
                <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-zinc-800" />
                    <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">
                        Execution Cycle
                    </p>
                    <span className="h-px w-8 bg-zinc-800" />
                </div>
                <h2 className="text-4xl md:text-6xl font-normal text-white tracking-tighter">
                    Weekly Protocol.
                </h2>
                <p className="mt-2 max-w-md text-sm text-zinc-500 leading-relaxed font-light">
                    Every week is a micro-sprint. Weekend sessions set
                    direction. Weekdays are for shipping. Reviews are
                    non-negotiable.
                </p>
            </div>

            {/* ── Desktop layout: labels – spine – blocks – labels ── */}
            <div className="relative mx-auto w-full max-w-5xl">
                {/* ── Floating labels — LEFT (hidden on mobile) ── */}
                <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-[180px] lg:block">
                    {leftLabels.map((label, i) => (
                        <motion.div
                            key={label.text}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.15 * i }}
                            className="absolute right-0 flex items-center gap-3"
                            style={{ top: label.top }}
                        >
                            <span className="text-[11px] font-mono text-zinc-500 text-right leading-tight whitespace-nowrap">
                                {label.text}
                            </span>
                            <span className="h-px w-8 bg-zinc-700/60" />
                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 shrink-0" />
                        </motion.div>
                    ))}
                </div>

                {/* ── Floating labels — RIGHT (hidden on mobile) ── */}
                <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[180px] lg:block">
                    {rightLabels.map((label, i) => (
                        <motion.div
                            key={label.text}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.15 * i }}
                            className="absolute left-0 flex items-center gap-3"
                            style={{ top: label.top }}
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 shrink-0" />
                            <span className="h-px w-8 bg-zinc-700/60" />
                            <span className="text-[11px] font-mono text-zinc-500 leading-tight whitespace-nowrap">
                                {label.text}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* ── Central column (blocks + spine) ── */}
                <div className="relative mx-auto w-full max-w-xl lg:max-w-lg">
                    {/* Vertical spine */}
                    <div className="absolute left-1/2 top-0 -z-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />

                    <div className="flex flex-col gap-10 md:gap-14">
                        {blocks.map((block, i) => (
                            <motion.div
                                key={block.phase}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.12 * i,
                                    ease: "easeOut",
                                }}
                                className="group relative z-10"
                            >
                                {/* Spine node */}
                                <span className="absolute -left-[5px] top-6 hidden h-2.5 w-2.5 rounded-full border border-zinc-700 bg-black lg:left-1/2 lg:-translate-x-1/2 lg:block group-hover:border-white/50 group-hover:bg-white/10 transition-colors duration-300" />

                                {/* Card */}
                                <div
                                    className="relative overflow-hidden border border-white/[0.06] bg-[#0a0a0a] p-8 md:p-10 transition-all duration-500 hover:border-white/[0.14] hover:bg-[#0d0d0d]"
                                    style={{
                                        boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.03)`,
                                    }}
                                >
                                    {/* Subtle top glow on hover */}
                                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Phase tag */}
                                    <div className="mb-5 flex items-center gap-4">
                                        <span className="font-mono text-[10px] tracking-widest text-zinc-600">
                                            {block.phase}
                                        </span>
                                        <span className="h-px w-4 bg-zinc-800" />
                                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                                            {block.tag}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-normal text-white tracking-tight leading-snug">
                                        {block.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-4 text-sm text-zinc-500 leading-relaxed font-light">
                                        {block.description}
                                    </p>

                                    {/* Decorative corner */}
                                    <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-white/[0.04] transition-colors duration-500 group-hover:border-white/[0.10]" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── Mobile-only floating labels (rendered below blocks) ── */}
                <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-5 lg:hidden">
                    {[...leftLabels, ...rightLabels].map((label, i) => (
                        <motion.div
                            key={label.text}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.08 * i }}
                            className="flex items-center gap-2"
                        >
                            <span className="h-1 w-1 rounded-full bg-zinc-600 shrink-0" />
                            <span className="text-[11px] font-mono text-zinc-500 leading-tight">
                                {label.text}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
