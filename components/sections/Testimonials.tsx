import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselIndicator,
} from "../ui/carousel";

const testimonials = [
    {
        quote: "I've tested countless AI tools, but this one feels different — less like software, more like a guide that clears the fog in my projects.",
        author: "Harshit Kundra",
        role: "Product Designer"
    },
    {
        quote: "Within days, it streamlined my workflow. The balance of precision and inspiration it offers is unlike anything I've seen.",
        author: "Ritik ",
        role: "Indie Hacker"
    },
    {
        quote: "At first I was skeptical. But the clarity it brings into complex problems feels almost like working with a second brain.",
        author: "Shashi Ranjan",
        role: "Researcher"
    },
    {
        quote: "The interface is so intuitive, and the AI suggestions are actually helpful. It has completely changed how I approach my daily tasks.",
        author: "Prachi Yadav",
        role: "Creative Director"
    },
    {
        quote: "The interface is so intuitive, and the AI suggestions are actually helpful. It has completely changed how I approach my daily tasks.",
        author: "Sanjay",
        role: "Creative Director"
    },
    {
        quote: "The interface is so intuitive, and the AI suggestions are actually helpful. It has completely changed how I approach my daily tasks.",
        author: "Saarthak",
        role: "Creative Director"
    },
    {
        quote: "The interface is so intuitive, and the AI suggestions are actually helpful. It has completely changed how I approach my daily tasks.",
        author: "Yash Tomar",
        role: "Creative Director"
    },
    {
        quote: "The interface is so intuitive, and the AI suggestions are actually helpful. It has completely changed how I approach my daily tasks.",
        author: "Madhav Varshney",
        role: "Creative Director"
    },
    {
        quote: "The interface is so intuitive, and the AI suggestions are actually helpful. It has completely changed how I approach my daily tasks.",
        author: "Aditya Gahlan",
        role: "Creative Director"
    },
    {
        quote: "The interface is so intuitive, and the AI suggestions are actually helpful. It has completely changed how I approach my daily tasks.",
        author: "Khushi Dhankar",
        role: "Creative Director"
    },
    {
        quote: "The interface is so intuitive, and the AI suggestions are actually helpful. It has completely changed how I approach my daily tasks.",
        author: "Lakshit",
        role: "Creative Director"
    },
    {
        quote: "The interface is so intuitive, and the AI suggestions are actually helpful. It has completely changed how I approach my daily tasks.",
        author: "Agustya",
        role: "Creative Director"
    },
    {
        quote: "The interface is so intuitive, and the AI suggestions are actually helpful. It has completely changed how I approach my daily tasks.",
        author: "Sachin Patel",
        role: "Creative Director"
    },
    {
        quote: "The interface is so intuitive, and the AI suggestions are actually helpful. It has completely changed how I approach my daily tasks.",
        author: "Jatin Goyal",
        role: "Creative Director"
    },

];

export default function Testimonials() {
    const displayedTestimonials = testimonials.slice(0, 9);

    return (
        <section className="mx-auto mt-40 max-w-6xl px-6 scroll-mt-32" id="community">
            <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                <p className="text-sm text-zinc-500">Community</p>
            </div>
            <h2 className="max-w-3xl text-3xl leading-tight text-white md:text-4xl font-normal">
                What others whisper <span className="text-zinc-500">about the experience</span>
            </h2>
            <div className="mt-20">
                <Carousel loop autoplay autoplayInterval={5000}>
                    <CarouselContent className="-ml-4">
                        {displayedTestimonials.map((t, i) => (
                            <CarouselItem key={i} className="basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                                <div className="group relative border border-white/10 bg-[#0c0c0c]/80 p-10 h-full flex flex-col justify-between">
                                    <p className="text-lg leading-relaxed text-zinc-300">
                                        {t.quote}
                                    </p>
                                    <div className="mt-12 flex items-end justify-between border-t border-white/5 pt-8">
                                        <div>
                                            <h4 className="font-semibold text-white">{t.author}</h4>
                                            <p className="text-sm text-zinc-500">{t.role}</p>
                                        </div>
                                        <span className="text-xs text-zinc-700 font-mono tracking-wider">{i + 1}/{displayedTestimonials.length}</span>
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
