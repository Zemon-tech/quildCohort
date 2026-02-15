import * as React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";

const faqItems1 = [
    {
        id: "item-1",
        question: "What exactly will I learn?",
        answer: "You will learn to build full-stack applications (Next.js, Node, Postgres) using AI as a force multiplier. You will leave with a production-grade portfolio project and a systems-thinking mindset."
    },
    {
        id: "item-2",
        question: "What is the time commitment?",
        answer: "Expect ~15 hours per week. 6 hours of live sessions, 6 hours of building/assignments, and 3 hours of review. This is not a passive course."
    },
    {
        id: "item-3",
        question: "Is this suitable for beginners?",
        answer: "You need basic programming knowledge. If you have never written a line of code, this is too advanced. If you know the basics but can't build a full app yet, this is for you."
    }
];

const faqItems2 = [
    {
        id: "item-4",
        question: "How are students selected?",
        answer: "We select for 'slope' — how fast you learn and how clearly you think. We look for evidence of past projects and the ability to explain your reasoning."
    },
    {
        id: "item-5",
        question: "What tools do we use?",
        answer: "We use the modern AI-native stack: Cursor, Windsurf, v0 for frontend, and direct LLM APIs for logic. We build on standardized tech: React, Node.js, Docker, PostgreSQL."
    },
    {
        id: "item-6",
        question: "Is Cohort 2.0 free?",
        answer: "Yes. It is free and highly selective. Entry is earned through intent, not payment."
    }
];

export default function FAQ() {
    return (
        <section className="mx-auto mt-40 max-w-6xl px-6 scroll-mt-32" id="faq">
            <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                <p className="text-sm text-zinc-500">FAQ</p>
            </div>
            <h2 className="max-w-3xl text-3xl leading-tight text-white md:text-4xl font-normal">
                No ambiguity.
            </h2>
            <div className="mt-16 grid gap-x-12 md:grid-cols-2 items-start">
                <Accordion type="multiple" className="w-full">
                    {faqItems1.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={item.id}
                            className="border-white/10 data-[state=open]:border-white/40 transition-colors duration-300"
                        >
                            <AccordionTrigger className="text-zinc-200 hover:text-white transition-colors py-7">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-500 leading-relaxed pb-8">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <Accordion type="multiple" className="w-full">
                    {faqItems2.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={item.id}
                            className="border-white/10 data-[state=open]:border-white/40 transition-colors duration-300"
                        >
                            <AccordionTrigger className="text-zinc-200 hover:text-white transition-colors py-7">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-500 leading-relaxed pb-8">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
