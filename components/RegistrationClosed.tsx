"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RegistrationClosed() {
    return (
        <div className="w-full max-w-xl">
            {/* Status indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 mb-8"
            >
                <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">
                    Applications Closed
                </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.1]"
            >
                Seats Filled.
            </motion.h1>

            {/* Divider line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="origin-left mt-8 h-px w-full max-w-[120px] bg-gradient-to-r from-zinc-600 to-transparent"
            />

            {/* Body copy */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 space-y-5"
            >
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-light max-w-md">
                    Cohort 2.0 has reached full capacity.
                    <br />
                    Every seat has been claimed by builders ready to ship.
                </p>
                <p className="text-sm text-zinc-500 leading-relaxed font-light max-w-md">
                    We&apos;re humbled by the overwhelming response. If you missed this round,
                    don&apos;t worry — Cohort 3.0 is on the horizon. Same intensity. Same standards.
                    New opportunity.
                </p>
            </motion.div>

            {/* Cohort 3.0 teaser card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 relative overflow-hidden border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 max-w-md"
            >
                {/* Subtle top glow */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

                <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-[10px] tracking-widest text-zinc-600">
                        NEXT
                    </span>
                    <span className="h-px w-4 bg-zinc-800" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                        Cohort 3.0
                    </span>
                </div>

                <h3 className="text-lg md:text-xl font-normal text-white tracking-tight">
                    See you in the next one.
                </h3>
                <p className="mt-3 text-sm text-zinc-500 leading-relaxed font-light">
                    Follow us for announcements. When applications open,
                    you&apos;ll want to move fast — seats won&apos;t last.
                </p>

                {/* Decorative corner */}
                <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-white/[0.04]" />
            </motion.div>

            {/* Back to home link */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.95 }}
                className="mt-10"
            >
                <Link
                    href="/"
                    className="group inline-flex items-center gap-2.5 text-zinc-500 hover:text-white transition-colors duration-300"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span className="text-xs font-mono uppercase tracking-widest">
                        Back to Home
                    </span>
                </Link>
            </motion.div>
        </div>
    );
}
