import * as React from "react";

export default function CTA() {
    return (
        <section className="w-full px-6 py-0 md:py-0">
            <div className="relative isolate mx-auto flex h-[260px] w-full max-w-6xl items-center justify-center overflow-hidden sm:h-[320px] md:h-[360px]">
                <div
                    className="absolute inset-0 -z-10 bg-cover bg-center opacity-60"
                    style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1453791052107-5c843da62d97?q=80&w=1640&auto=format&fit=crop)",
                    }}
                />
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="mx-auto max-w-3xl text-3xl leading-tight text-zinc-100 md:text-4xl font-normal">
                        Step into the future, <span className="text-zinc-500">guided by AI clarity</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-300">
                        Experience the tool right now. Just dive in and see what AI can do for you.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <a className="inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow hover:bg-zinc-200 transition-colors" href="#get-started">
                            Try It Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
