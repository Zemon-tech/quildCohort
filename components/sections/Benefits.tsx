import * as React from "react";
import { Hourglass, Feather, Target, Book, Handshake, Shield } from "lucide-react";

const benefits = [
    {
        title: "Thinking > Syntax",
        body: "Any chatbot can write code. Only an engineer can decide what code to write. We teach decision-making.",
        icon: Hourglass
    },
    {
        title: "Standards > Speed",
        body: "Fast is good. Correct is better. We prioritize clean, maintainable architecture over fragile hacks.",
        icon: Shield
    },
    {
        title: "Creation > Consumption",
        body: "You learn by building, breaking, and fixing. No passive watching of tutorials. You are here to work.",
        icon: Target
    },
    {
        title: "Engineering Discipline",
        body: "Weekly reports measure activity, intelligence growth, and discipline — discipline carries the highest weight.",
        icon: Book
    },
    {
        title: "System Awareness",
        body: "Know what runs on your machine, what libraries exist, and how applications actually function.",
        icon: Handshake
    },
    {
        title: "Trust by Design",
        body: "Free, selective, and serious. Entry is earned through intent, not payment.",
        icon: Feather
    },
];

export default function Benefits() {
    return (
        <section className="mx-auto mt-32 max-w-6xl px-6 scroll-mt-28" id="values">
            <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                <p className="text-sm text-zinc-500">The Ethos</p>
            </div>
            <h2 className="max-w-3xl text-3xl leading-tight text-white md:text-4xl font-normal">
                Why we do this.
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
