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
        question: "What is this cohort designed for?",
        answer: "To help students evolve from software labor into software developers who understand systems, not just syntax."
    },
    {
        id: "item-2",
        question: "Do I need to already know coding?",
        answer: "Basic familiarity helps, but mastery is not required. Discipline matters more than prior skill."
    },
    {
        id: "item-3",
        question: "Is this a coding bootcamp?",
        answer: "No. We do not teach coding as a product. We teach engineering thinking using AI tools."
    }
];

const faqItems2 = [
    {
        id: "item-4",
        question: "Is Cohort 2.0 free?",
        answer: "Yes. It is free and highly selective."
    },
    {
        id: "item-5",
        question: "Who can apply?",
        answer: "Primarily students from IPU colleges. Others may apply but selection is not guaranteed."
    },
    {
        id: "item-6",
        question: "How are students evaluated?",
        answer: "Weekly reports measure activity, intelligence growth, and discipline — discipline carries the highest weight."
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
                Questions, <span className="text-zinc-500">answered with honesty.</span>
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
