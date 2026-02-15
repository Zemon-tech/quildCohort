import * as React from "react";

const phases = [
    {
        id: "01",
        title: "The Core Proficiency",
        description: "Focusing on the machine and the environment.",
        topics: ["Deep Syntax Mastery", "Machine & CPU Architecture", "Advanced Developer Tooling", "Core Engineering Fundamentals"]
    },
    {
        id: "02",
        title: "System Orchestration",
        description: "Understanding how the web truly works.",
        topics: ["Frontend-Backend Communication", "Network Protocols", "Data Flow Mental Models", "Client-Server Architecture"]
    },
    {
        id: "03",
        title: "The Ecosystem",
        description: "Integration of industry-standard tools.",
        topics: ["Library & Framework Selection", "SDK Deep Integration", "External Service APIs", "Modern Module Composition"]
    },
    {
        id: "04",
        title: "The Capstone",
        description: "Building systems that command respect.",
        topics: ["Complex Problem Solving", "Clean Code Architecture", "High-Utility Engineering", "Production Standards"]
    }
];

export default function Curriculum() {
    return (
        <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 scroll-mt-0" id="curriculum">
            <div className="mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                <p className="text-sm font-medium text-zinc-500">The Protocol</p>
            </div>

            <div className="max-w-4xl">
                <h2 className="text-3xl leading-tight text-white md:text-5xl font-normal tracking-tight">
                    We don't learn by reading. <br />
                    <span className="text-zinc-500">We learn by building.</span>
                </h2>
                <p className="mt-8 text-lg text-zinc-400 font-light leading-relaxed">
                    A requirement-driven roadmap where every phase is anchored by real-world projects.
                    Shift from understanding syntax to shipping complex, clean, and useful systems.
                    This focus on execution is what defines us.
                </p>
            </div>

            <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {phases.map((item) => (
                    <div key={item.id} className="group relative border-t border-white/10 pt-8 transition-colors duration-500 hover:border-white/30">
                        <p className="text-5xl font-light text-zinc-800 font-mono transition-colors duration-500 group-hover:text-zinc-600">{item.id}</p>
                        <h3 className="mt-6 text-xl font-normal text-white">{item.title}</h3>
                        <p className="mt-2 text-sm text-zinc-500 font-light">{item.description}</p>
                        <ul className="mt-6 space-y-3">
                            {item.topics.map((topic) => (
                                <li key={topic} className="text-[14px] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400 flex items-start gap-2">
                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-800 group-hover:bg-zinc-600" />
                                    {topic}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
