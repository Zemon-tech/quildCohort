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
        question: "What is this AI platform designed for?",
        answer: "It helps you write, research, and focus with an assistant that shapes ideas into clear outputs."
    },
    {
        id: "item-2",
        question: "Do I need technical knowledge to use it?",
        answer: "No. It’s built for everyone—simple prompts, powerful results."
    },
    {
        id: "item-3",
        question: "Which AI models power the tool?",
        answer: "A mix of state‑of‑the‑art large language models optimized for writing and reasoning."
    }
];

const faqItems2 = [
    {
        id: "item-4",
        question: "Is there a free plan available?",
        answer: "Yes, start with the Starter plan and upgrade anytime."
    },
    {
        id: "item-5",
        question: "Can I use this for business purposes?",
        answer: "Absolutely. Teams use Pro and Lifetime plans for collaboration and support."
    },
    {
        id: "item-6",
        question: "How can I get support if I have issues?",
        answer: "Priority support is available on paid plans; community support on Starter."
    }
];

export default function FAQ() {
    return (
        <section className="mx-auto mt-40 max-w-6xl px-6" id="faq">
            <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                <p className="text-sm text-zinc-500">FAQ</p>
            </div>
            <h2 className="max-w-3xl text-3xl leading-tight text-white md:text-4xl font-normal">
                Your questions, <span className="text-zinc-500">answered with clarity</span>
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
