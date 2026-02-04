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
        description: "Engineering Thought Into Expression",
        text: "Learn to structure ideas, documentation, and technical writing clearly — essential for engineers who design systems others must understand.",
        imageUrl: "/useCase-1.png",
        aiMessage: "Here's a quick draft for your new blog post introduction. In today's fast-paced digital world, finding your unique voice is more important than ever.",
    },
    {
        id: "coding",
        title: "Coding Help",
        description: "Understanding Code Without Worshipping It",
        text: "Read, write, and reason about code using AI tools. Syntax becomes familiar, not intimidating — without chasing mastery.",
        imageUrl: "/useCase-2.png",
        aiMessage: "I'll generate a Python script that analyzes customer feedback for sentiment and key themes. Analyzing code…",
    },
    {
        id: "research",
        title: "Research & Insights",
        description: "Thinking in Systems, Not Tutorials",
        text: "Learn how to analyze libraries, frameworks, and tools. Understand what machine you are using, what is installed, and why it works.",
        imageUrl: "/useCase-3.png",
        isInsight: true, // Special flag for the Insight UI
    },
    {
        id: "focus",
        title: "Focus & Productivity",
        description: "Discipline as a Competitive Advantage",
        text: "Weekly evaluations, strict structure, and accountability systems ensure progress — intelligence grows where discipline exists.",
        imageUrl: "/useCase-4.png",
        aiMessage: "Stay focused with gentle nudges and timely reminders to keep your flow uninterrupted.",
    }
];

export default function UseCases() {
    return (
        <section className="mx-auto mt-32 max-w-6xl px-0 md:px-6 scroll-mt-32" id="pathways">
            <div className="px-6 md:px-0">
                <div className="mb-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                    <p className="text-sm text-zinc-500">Pathways</p>
                </div>
                <h2 className="max-w-3xl text-3xl leading-tight text-white md:text-4xl font-normal">
                    Different paths, one disciplined way of thinking.
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
                                <div className="relative h-[360px] w-full overflow-hidden bg-zinc-800 border border-white/10 shadow-lg">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                                        style={{ backgroundImage: `url(${useCase.imageUrl})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                                <div>
                                    <p className="text-sm font-small uppercase tracking-[0.2em] text-zinc-500">{useCase.title}</p>
                                    <h3 className="mt-6 text-1xl leading-tight text-white md:text-2xl font-small">{useCase.description}</h3>
                                    <p className="mt-4 text-zinc-400 text-sm md:text-base leading-relaxed">{useCase.text}</p>
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
                                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-800 border border-white/10 shadow-lg">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                                            style={{ backgroundImage: `url(${useCase.imageUrl})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>
                                    <div className="flex flex-col gap-3 pr-4">
                                        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">{useCase.title}</p>
                                        <h3 className="text-xl font-normal leading-snug text-white">{useCase.description}</h3>
                                        <p className="text-xs leading-relaxed text-zinc-400 line-clamp-3">{useCase.text}</p>
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
