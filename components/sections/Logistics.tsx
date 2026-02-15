import * as React from "react";
import { Check } from "lucide-react";

export default function Logistics() {
    return (
        <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 scroll-mt-0" id="logistics">
            <div className="mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                <p className="text-sm font-medium text-zinc-500">Logistics</p>
            </div>
            <h2 className="max-w-3xl text-3xl leading-tight text-white md:text-5xl font-normal tracking-tight">
                Practical details.
            </h2>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
                <div className="group relative border border-white/10 bg-[#0c0c0c]/80 p-10 transition-all hover:bg-[#0f0f0f] hover:border-white/20">
                    <h3 className="text-xl font-normal text-white font-mono tracking-tight">Format & Tools</h3>
                    <ul className="mt-8 space-y-5">
                        <li className="flex items-start gap-4">
                            <Check className="mt-0.5 h-4 w-4 text-zinc-600 shrink-0 group-hover:text-white transition-colors" />
                            <p className="text-zinc-400 text-[15px] leading-relaxed group-hover:text-zinc-300 transition-colors">Live Sessions (Google Meet) + Async Build Challenges</p>
                        </li>
                        <li className="flex items-start gap-4">
                            <Check className="mt-0.5 h-4 w-4 text-zinc-600 shrink-0 group-hover:text-white transition-colors" />
                            <p className="text-zinc-400 text-[15px] leading-relaxed group-hover:text-zinc-300 transition-colors">Communication via private Discord server</p>
                        </li>
                        <li className="flex items-start gap-4">
                            <Check className="mt-0.5 h-4 w-4 text-zinc-600 shrink-0 group-hover:text-white transition-colors" />
                            <p className="text-zinc-400 text-[15px] leading-relaxed group-hover:text-zinc-300 transition-colors">Code collaboration via GitHub</p>
                        </li>
                    </ul>
                </div>
                <div className="group relative border border-white/10 bg-[#0c0c0c]/80 p-10 transition-all hover:bg-[#0f0f0f] hover:border-white/20">
                    <h3 className="text-xl font-normal text-white font-mono tracking-tight">Evaluation & Cost</h3>
                    <ul className="mt-8 space-y-5">
                        <li className="flex items-start gap-4">
                            <Check className="mt-0.5 h-4 w-4 text-zinc-600 shrink-0 group-hover:text-white transition-colors" />
                            <p className="text-zinc-400 text-[15px] leading-relaxed group-hover:text-zinc-300 transition-colors"><span className="text-white font-medium">Cost: $0 (Free).</span> Entry is earned via selection.</p>
                        </li>
                        <li className="flex items-start gap-4">
                            <Check className="mt-0.5 h-4 w-4 text-zinc-600 shrink-0 group-hover:text-white transition-colors" />
                            <p className="text-zinc-400 text-[15px] leading-relaxed group-hover:text-zinc-300 transition-colors">Weekly "Ship or Sink" reviews. You must ship to stay.</p>
                        </li>
                        <li className="flex items-start gap-4">
                            <Check className="mt-0.5 h-4 w-4 text-zinc-600 shrink-0 group-hover:text-white transition-colors" />
                            <p className="text-zinc-400 text-[15px] leading-relaxed group-hover:text-zinc-300 transition-colors">Capstone project required for graduation.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
