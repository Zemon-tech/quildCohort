import * as React from "react";
import FeaturePreviewCard from "../FeaturePreviewCard";

export default function Features() {
    return (
        <section id="features" className="mx-auto mt-24 max-w-6xl px-6">
            <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                <p className="text-sm text-zinc-500">Introducing Message</p>
            </div>
            <h2 className="max-w-3xl text-3xl leading-tight text-white md:text-4xl font-normal">
                Harness invisible power <span className="text-zinc-500">to write faster, focus deeper, and save hours.</span>
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                <FeaturePreviewCard
                    title="Time Unfolded"
                    subtitle="Automate tasks and reclaim hours. Your AI assistant turns routine into seconds so you can focus on growth."
                    imageUrl="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1640&auto=format&fit=crop"
                />
                <FeaturePreviewCard
                    title="Words That Flow"
                    subtitle="Drafts, blogs, and emails with clarity and speed — the elegance of language without the struggle."
                    imageUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1640&auto=format&fit=crop"
                />
                <FeaturePreviewCard
                    title="A Silent Guide"
                    subtitle="Always present to keep you focused — suggestions, reminders, and insights right when you need them."
                    imageUrl="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1640&auto=format&fit=crop"
                />
            </div>
        </section>
    );
}
