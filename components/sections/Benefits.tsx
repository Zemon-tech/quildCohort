import * as React from "react";
import { Hourglass, Feather, Target, Book, Handshake, Shield } from "lucide-react";

const benefits = [
    {
        title: "Time Returned",
        body: "Automate the routine and reclaim hours for what matters most.",
        icon: Hourglass
    },
    {
        title: "Words with Ease",
        body: "Turn thoughts into polished writing — clear, natural, and fast.",
        icon: Feather
    },
    {
        title: "Guided Focus",
        body: "Stay sharp with gentle nudges that keep distractions away.",
        icon: Target
    },
    {
        title: "Instant Knowledge",
        body: "Condense research and insights into clarity within seconds.",
        icon: Book
    },
    {
        title: "Always Available",
        body: "Your silent partner, ready to help whenever you need it.",
        icon: Handshake
    },
    {
        title: "Built‑in Trust",
        body: "Protected by design — your data, your ideas, always secure.",
        icon: Shield
    },
];

export default function Benefits() {
    return (
        <section className="mx-auto mt-40 max-w-6xl px-6" id="benefits">
            <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                <p className="text-sm text-zinc-500">Benefits</p>
            </div>
            <h2 className="max-w-3xl text-3xl leading-tight text-white md:text-4xl font-normal">
                Invisible power at your side <span className="text-zinc-500">delivering tangible benefits every day.</span>
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                        <div
                            key={benefit.title}
                            className="group relative border border-white/10 bg-[#0c0c0c]/80 p-10 transition-all hover:bg-[#0f0f0f] hover:border-white/20"
                        >
                            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/5 bg-white/5 text-zinc-400 transition-colors group-hover:text-white">
                                <Icon className="h-5 w-5" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                            <p className="mt-3 text-[15px] leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400">{benefit.body}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
