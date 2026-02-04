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
                Harness disciplined intelligence <span className="text-zinc-500">to build faster, think deeper, and ship with clarity.</span>
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                <FeaturePreviewCard
                    title="From Software Labor to Software Developer"
                    subtitle="Understand the difference between writing code and engineering systems. Learn how decisions, structure, and clarity shape real software."
                    imageUrl="/Feature-1.png"
                />
                <FeaturePreviewCard
                    title="Engineering with AI, Not Replaced by It"
                    subtitle="Work with AI-native engineering tools as collaborators. Learn how humans evolve by thinking, not by memorizing syntax."
                    imageUrl="/Feature-2.png"
                />
                <FeaturePreviewCard
                    title="Discipline Before Intelligence"
                    subtitle="We provide intelligence through structure, feedback, and systems. Your responsibility is discipline, consistency, and seriousness."
                    imageUrl="/Feature-3.png"
                />
            </div>
        </section>
    );
}
