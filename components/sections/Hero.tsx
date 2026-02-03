import * as React from "react";

export default function Hero() {
    return (
        <section className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-zinc-900/50 py-28">
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center opacity-60"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1453791052107-5c843da62d97?q=80&w=1640&auto=format&fit=crop)",
                }}
            />
            <div className="text-center">
                <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-tight text-zinc-100 md:text-6xl">
                    Step into the future,
                    <br />
                    guided by AI clarity
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-300">
                    Experience the tool right now. Just dive in and see what AI can do for you.
                </p>
                <div className="mt-8">
                    <a className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow hover:bg-zinc-200 transition-colors" href="#get-started">
                        Try It Now
                    </a>
                </div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-zinc-400">
                <div className="mx-auto mb-2 h-4 w-[1px] animate-pulse rounded bg-zinc-400/60" />
                Scroll to explore
            </div>
        </section>
    );
}
