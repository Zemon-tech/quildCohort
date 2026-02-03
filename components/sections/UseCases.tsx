import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { RotateCcw, Copy, Share2, Bookmark } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselIndicator,
} from "../ui/carousel";

const useCases = [
    {
        id: "content",
        title: "Content Creation",
        description: "Bring stories, posts, and ideas to life with words that flow naturally.",
        imageUrl: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1640&auto=format&fit=crop",
        aiMessage: "Here's a quick draft for your new blog post introduction. In today's fast-paced digital world, finding your unique voice is more important than ever.",
    },
    {
        id: "coding",
        title: "Coding Help",
        description: "Solve bugs, generate snippets, and navigate code with unseen precision.",
        imageUrl: "https://images.unsplash.com/photo-1528821154947-1aa3d1f52c16?q=80&w=1640&auto=format&fit=crop",
        aiMessage: "I'll generate a Python script that analyzes customer feedback for sentiment and key themes. Analyzing code…",
    },
    {
        id: "research",
        title: "Research & Insights",
        description: "Condense knowledge into clarity — summaries, analysis, and hidden connections revealed.",
        imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1640&auto=format&fit=crop",
        isInsight: true, // Special flag for the Insight UI
    },
    {
        id: "focus",
        title: "Focus & productivity",
        description: "Keep your attention on what matters with subtle guidance and timely prompts.",
        imageUrl: "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?q=80&w=1640&auto=format&fit=crop",
        aiMessage: "Stay focused with gentle nudges and timely reminders to keep your flow uninterrupted.",
    }
];

export default function UseCases() {
    return (
        <section className="mx-auto mt-28 max-w-6xl px-0 md:px-6" id="use-cases">
            <div className="px-6 md:px-0">
                <div className="mb-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                    <p className="text-sm text-zinc-500">Use cases</p>
                </div>
                <h2 className="max-w-3xl text-3xl leading-tight text-white md:text-4xl font-normal">
                    Different paths to explore <span className="text-zinc-500">all guided by one silent companion.</span>
                </h2>
            </div>

            {/* Desktop Version (Tabs) */}
            <div className="hidden md:block">
                <Tabs defaultValue="content" className="mt-10">
                    <TabsList variant="line" className="h-auto justify-start gap-10 bg-transparent p-0">
                        {useCases.map((useCase) => (
                            <TabsTrigger
                                key={useCase.id}
                                value={useCase.id}
                                className="h-auto rounded-none border-0 border-b-2 border-transparent px-0 pb-4 text-sm font-medium transition-all data-[state=active]:border-white data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:shadow-none dark:data-[state=active]:border-b-white dark:data-[state=active]:border-x-transparent dark:data-[state=active]:border-t-transparent dark:data-[state=active]:bg-transparent data-[state=inactive]:text-zinc-500"
                            >
                                {useCase.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <Separator className="-mt-0.5 bg-white/4" />

                    {useCases.map((useCase) => (
                        <TabsContent key={useCase.id} value={useCase.id} className="mt-8">
                            <div className="grid items-center gap-16 md:grid-cols-[1.2fr_0.8fr]">
                                <div className="relative h-[360px] w-full overflow-hidden bg-zinc-800">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${useCase.imageUrl})` }}
                                    />
                                    {useCase.isInsight ? (
                                        <div className="absolute left-8 bottom-10 w-[70%] rounded-2xl bg-zinc-900/65 p-5 text-zinc-200 shadow-2xl ring-1 ring-white/10 backdrop-blur">
                                            <div className="mb-2 flex items-center gap-2">
                                                <span className="h-3 w-3 rounded-full bg-zinc-400" />
                                                <span className="text-sm font-medium">AI Insights</span>
                                            </div>
                                            <div className="space-y-2 text-sm text-zinc-300">
                                                <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-2 ring-1 ring-white/10"><span>Overall Recommendation</span><span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-300">HIGH</span></div>
                                                <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-2 ring-1 ring-white/10"><span>Market Trend Alignment</span><span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-300">HIGH</span></div>
                                                <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-2 ring-1 ring-white/10"><span>Financial Risk</span><span className="rounded bg-rose-500/20 px-2 py-0.5 text-xs text-rose-300">MODERATE</span></div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="absolute left-5 md:left-8 bottom-10 w-[85%] md:w-[70%] rounded-2xl bg-zinc-900/65 p-5 text-zinc-200 shadow-2xl ring-1 ring-white/10 backdrop-blur">
                                            <div className="mb-2 flex items-center gap-2">
                                                <span className="h-3 w-3 rounded-full bg-zinc-400" />
                                                <span className="text-sm font-medium">Message AI</span>
                                            </div>
                                            <p className="text-sm leading-6 text-zinc-300">{useCase.aiMessage}</p>
                                            <div className="mt-3 flex items-center gap-4 text-xs text-zinc-400">
                                                <RotateCcw className="h-3 w-3" />
                                                <Copy className="h-3 w-3" />
                                                <Share2 className="h-3 w-3" />
                                                <Bookmark className="h-3 w-3" />
                                                <span>⋮</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <p className="text-sm font-small uppercase tracking-[0.2em] text-zinc-500">{useCase.title}</p>
                                    <h3 className="mt-6 text-1xl leading-tight text-white md:text-2xl font-small">{useCase.description}</h3>
                                    <Button className="mt-8 rounded-full bg-zinc-100 px-6 py-4 text-sm font-semibold text-black hover:bg-white transition-all">Get started</Button>
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>

            {/* Mobile Version (Carousel) */}
            <div className="mt-10 md:hidden">
                <Carousel loop autoplay autoplayInterval={4000}>
                    <CarouselContent className="px-[7.5%]">
                        {useCases.map((useCase, index) => (
                            <CarouselItem key={index} className="px-2 basis-[85%]">
                                <div className="flex flex-col gap-6">
                                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-800 rounded-sm">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{ backgroundImage: `url(${useCase.imageUrl})` }}
                                        />
                                        {useCase.isInsight ? (
                                            <div className="absolute left-4 right-4 bottom-6 rounded-xl bg-zinc-900/65 p-4 text-zinc-200 shadow-2xl ring-1 ring-white/10 backdrop-blur">
                                                <div className="mb-2 flex items-center gap-2">
                                                    <span className="h-2 w-2 rounded-full bg-zinc-400" />
                                                    <span className="text-xs font-medium">AI Insights</span>
                                                </div>
                                                <div className="space-y-1.5 text-[10px] text-zinc-300">
                                                    <div className="flex items-center justify-between rounded-md bg-white/5 px-3 py-1.5 ring-1 ring-white/10"><span>Overall Recommendation</span><span className="rounded bg-emerald-500/20 px-1 py-0.5 text-[9px] text-emerald-300">HIGH</span></div>
                                                    <div className="flex items-center justify-between rounded-md bg-white/5 px-3 py-1.5 ring-1 ring-white/10"><span>Market Trend Alignment</span><span className="rounded bg-emerald-500/20 px-1 py-0.5 text-[9px] text-emerald-300">HIGH</span></div>
                                                    <div className="flex items-center justify-between rounded-md bg-white/5 px-3 py-1.5 ring-1 ring-white/10"><span>Financial Risk</span><span className="rounded bg-rose-500/20 px-1 py-0.5 text-[9px] text-rose-300">MODERATE</span></div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="absolute left-4 right-4 bottom-6 rounded-xl bg-zinc-900/65 p-4 text-zinc-200 shadow-2xl ring-1 ring-white/10 backdrop-blur">
                                                <div className="mb-2 flex items-center gap-2">
                                                    <span className="h-2 w-2 rounded-full bg-zinc-400" />
                                                    <span className="text-[11px] font-medium">Message AI</span>
                                                </div>
                                                <p className="text-[11px] leading-relaxed text-zinc-300 line-clamp-4">{useCase.aiMessage}</p>
                                                <div className="mt-3 flex items-center gap-3 text-zinc-400">
                                                    <RotateCcw className="h-2.5 w-2.5" />
                                                    <Copy className="h-2.5 w-2.5" />
                                                    <Share2 className="h-2.5 w-2.5" />
                                                    <Bookmark className="h-2.5 w-2.5" />
                                                    <span className="text-[10px]">⋮</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-3 pr-4">
                                        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">{useCase.title}</p>
                                        <h3 className="text-xl font-normal leading-snug text-white">{useCase.description}</h3>
                                        <Button className="mt-2 w-fit rounded-full bg-zinc-100 px-5 py-2.5 text-xs font-semibold text-black hover:bg-white transition-all">Get started</Button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="mt-12 flex justify-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-zinc-800/50 px-3 py-2 backdrop-blur-sm">
                            <CarouselIndicator className="relative" classNameButton="w-2 h-2 bg-zinc-500 data-[state=active]:bg-white" />
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
