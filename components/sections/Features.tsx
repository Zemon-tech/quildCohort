import * as React from "react";
import FeaturePreviewCard from "../FeaturePreviewCard";

export default function Features() {
    return (
        <section id="intelligence" className="mx-auto mt-24 max-w-6xl px-6 scroll-mt-20">
            <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                <p className="text-sm text-zinc-500">Intelligence</p>
            </div>
            <h2 className="max-w-3xl text-3xl leading-tight text-white md:text-4xl font-normal">
                The Standard. <span className="text-zinc-500">We build engineers, not just coders.</span>
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                <FeaturePreviewCard
                    title="Production-Level Engineering"
                    subtitle="Stop copying code. Start designing architectures. Learn to reason about trade-offs, scalability, and security constraints before you write a single line."
                    imageUrl="/Feature-1.png"
                />
                <FeaturePreviewCard
                    title="AI as a Catalyst"
                    subtitle="Don't let AI replace your thinking. Learn structured prompting, prompt debugging, and how to use LLMs to amplify your logic, not bypass it."
                    imageUrl="/Feature-2.png"
                />
                <FeaturePreviewCard
                    title="Execution is the Only Metric"
                    subtitle="Ideas are cheap. We value consistency. Weekly evaluations, strict deadlines, and a &quot;shipping is binary&quot; philosophy."
                    imageUrl="/Feature-3.png"
                />
            </div>
        </section>
    );
}
