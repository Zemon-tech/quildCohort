import * as React from "react";
import { MessageSquare, Sparkles, CheckCircle2, RotateCcw, Copy, Share2, Bookmark } from "lucide-react";
import { Button } from "../ui/button";

const steps = [
    {
        id: 0,
        label: "1 — Call",
        title: "Declare Your Intent",
        text: "Apply with honesty. We select students willing to commit discipline and seriousness to the process.",
        icon: MessageSquare,
        imageUrl: "/howitworks-1.png",
    },
    {
        id: 1,
        label: "2 — Awaken",
        title: "Learn How Software Works",
        text: "Live sessions, challenges, assignments, and AI-assisted builds introduce syntax, software flow, and system behavior.",
        icon: Sparkles,
        imageUrl: "/howitworks-2.png",
    },
    {
        id: 2,
        label: "3 — Embrace",
        title: "Design, Debug, Build",
        text: "Work on existing projects, improve them, and finally build your own — individually and in guided groups.",
        icon: CheckCircle2,
        imageUrl: "/howitworks-3.png",
    },
];

export default function HowItWorks() {
    const [activeStep, setActiveStep] = React.useState(0);

    return (
        <section className="mx-auto mt-32 max-w-6xl px-6 scroll-mt-32" id="system">
            <div className="mb-2 flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-zinc-600" />
                <p className="text-[13px] text-zinc-500 font-medium">The System</p>
            </div>
            <h2 className="max-w-3xl text-3xl leading-[1.15] text-white md:text-[40px] font-normal tracking-tight">
                One intent to begin,<br /> <span className="text-zinc-600">four levels to clarity.</span>
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
                                        {step.label}
                                    </h3>
                                    <p className={`mt-1 text-[15px] font-medium transition-colors duration-500 ${isActive ? "text-zinc-200" : "text-zinc-600"}`}>
                                        {step.title}
                                    </p>
                                    <p className={`mt-2 text-[13.5px] leading-relaxed transition-colors duration-500 ${isActive ? "text-zinc-400" : "text-zinc-600 group-hover:text-zinc-500"}`}>
                                        {step.text}
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
        <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#0a0a0a]  shadow-2xl">
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
    );
}
