import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
    return (
        <section className="relative isolate flex h-screen w-full items-start justify-center overflow-hidden pt-32 md:pt-40">
            <video
                autoPlay
                muted
                loop
                playsInline
                poster="/Hero.png"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            >
                <source src="/hero.mp4" type="video/mp4" />
            </video>
            <div className="text-center flex flex-col items-center z-10">
                <h1 className="mx-auto max-w-5xl text-4xl font-normal leading-[1.1] text-zinc-100 md:text-5xl lg:text-6xl tracking-tight">
                    Engineering. Discipline. Intelligence.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 font-light leading-relaxed">
                    A selective, 4-week engineering cohort for builders who refuse to be average. <br className="hidden md:block" />
                    Move beyond syntax. Build production-grade systems. Collaborate with AI.
                </p>
                <div className="mt-8 flex flex-col items-center gap-4">
                    <p className="text-[13px] font-medium text-zinc-300 uppercase tracking-widest">
                        15 hours/week • Strict Standards • No Shortcuts
                    </p>
                    <Link className="rounded-full bg-white px-10 py-3.5 text-sm font-medium text-black shadow-lg hover:bg-zinc-200 transition-all duration-300" href="/apply">
                        Apply to Cohort 2.0
                    </Link>
                    <p className="text-xs text-zinc-100 font-mono">
                        Selection Rate: &lt;10%
                    </p>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-zinc-500 font-medium flex flex-col items-center gap-3">
                <div className="h-7 w-4 rounded-full border border-zinc-500/40 flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="h-1.5 w-0.5 rounded-full bg-zinc-400"
                    />
                </div>
                Scroll to explore
            </div>
        </section>
    );
}
