import * as React from "react";
import { MessageSquare, Sparkles, CheckCircle2, RotateCcw, Copy, Share2, Bookmark } from "lucide-react";
import { Button } from "../ui/button";

const steps = [
    {
        id: 0,
        title: "1 — Call",
        description: "Type or speak your request, a thought, a task,\n a question.",
        icon: MessageSquare,
        imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1640&auto=format&fit=crop",
    },
    {
        id: 1,
        title: "2 — Awaken",
        description: "The assistant weaves the answer, shaping text\n or insight in seconds.",
        icon: Sparkles,
        imageUrl: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1640&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "3 — Embrace",
        description: "Take what appears — refine it, use it, and\n move forward with ease.",
        icon: CheckCircle2,
        imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1640&auto=format&fit=crop",
    },
];

export default function HowItWorks() {
    const [activeStep, setActiveStep] = React.useState(0);

    return (
        <section className="mx-auto mt-32 max-w-6xl px-6" id="how-it-works">
            <div className="mb-2 flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-zinc-600" />
                <p className="text-[13px] text-zinc-500 font-medium">How It Works</p>
            </div>
            <h2 className="max-w-3xl text-3xl leading-[1.15] text-white md:text-[40px] font-normal tracking-tight">
                One prompt to begin,<br /> <span className="text-zinc-600">three steps to clarity.</span>
            </h2>

            <div className="mt-14 grid items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
                <HowItWorksArt imageUrl={steps[activeStep].imageUrl} />

                <div className="relative space-y-9">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isActive = activeStep === index;

                        return (
                            <div
                                key={step.id}
                                onClick={() => setActiveStep(index)}
                                className="relative flex cursor-pointer items-start gap-6 group"
                            >
                                {/* Vertical Line Segment */}
                                <div className="relative w-[1px] self-stretch">
                                    <div className={`absolute inset-y-0 right-0 w-[1px] transition-all duration-500 ${isActive ? "bg-white shadow-[0_0_8px_white]" : "bg-white/10"}`} />
                                </div>

                                {/* Icon */}
                                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center">
                                    <Icon className={`h-5.5 w-5.5 transition-colors duration-500 ${isActive ? "text-white" : "text-zinc-600 group-hover:text-zinc-400"}`} />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className={`text-[17px] font-medium transition-colors duration-500 ${isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-400"}`}>
                                        {step.title}
                                    </h3>
                                    <p className={`mt-1 text-[13.5px] leading-relaxed transition-colors duration-500 ${isActive ? "text-zinc-400" : "text-zinc-600 group-hover:text-zinc-500"}`}>
                                        {step.description.split('\n').map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                {i < step.description.split('\n').length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function HowItWorksArt({ imageUrl }: { imageUrl: string }) {
    return (
        <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#0a0a0a] ring-1 ring-white/10 shadow-2xl">
            <div
                className="absolute inset-0 bg-cover bg-center grayscale opacity-40 mix-blend-luminosity transition-all duration-700"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />

            {/* Floating Card */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full max-w-[340px] rounded-[18px] border border-white/10 bg-[#161616]/80 p-5 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-white ring-1 ring-white/10">
                            <Sparkles className="h-4 w-4" />
                        </div>
                        <h4 className="text-[15px] font-semibold tracking-tight text-white">Refined Insight</h4>
                    </div>
                    <p className="mt-3 text-[13px] leading-relaxed text-zinc-400">
                        Your AI-crafted answer, polished and ready to use —
                        adapt it, share it, or save it for later.
                    </p>
                    <div className="mt-5">
                        <Button className="h-9 rounded-full bg-white px-4 text-[12px] font-semibold text-black hover:bg-zinc-200 transition-all">
                            Use result
                        </Button>
                    </div>
                </div>
            </div>

            {/* Action Bar */}
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-xl border border-white/5 bg-[#121212]/60 p-1.5 shadow-xl backdrop-blur-lg">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-all hover:bg-white/5 hover:text-white cursor-pointer">
                    <RotateCcw className="h-4 w-4" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-all hover:bg-white/5 hover:text-white cursor-pointer">
                    <Copy className="h-4 w-4" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-all hover:bg-white/5 hover:text-white cursor-pointer">
                    <Share2 className="h-4 w-4" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-all hover:bg-white/5 hover:text-white cursor-pointer">
                    <Bookmark className="h-4 w-4" />
                </div>
            </div>
        </div>
    );
}
