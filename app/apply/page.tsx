"use client";

import RegistrationClosed from "@/components/RegistrationClosed";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ApplyPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col relative overflow-hidden">
            {/* Responsive Background Images */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/forms-mobile.png')] md:bg-[url('/forms.png')] z-0 transition-all duration-1000"
                aria-hidden="true"
            />

            {/* Header/Nav */}
            <header className="p-6 relative z-10 shrink-0">
                <div className="max-w-[1440px] mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span className="text-xs font-medium font-mono uppercase tracking-widest">Home</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <img src="/logo.svg" alt="Quild" className="h-4 w-auto invert" />
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Cohort 2.0</span>
                    </div>
                </div>
            </header>

            {/* Registration Closed Content */}
            <div className="flex-1 flex flex-col items-start justify-center px-8 md:px-20 lg:px-32 py-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full"
                >
                    <RegistrationClosed />
                </motion.div>
            </div>
        </main>
    );
}
