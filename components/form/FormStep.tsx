"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { Question } from "@/lib/form-config";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FormStepProps {
    question: Question;
}

export default function FormStep({ question }: FormStepProps) {
    const { register, watch, setValue, formState: { errors } } = useFormContext();
    const value = watch(question.id);
    const error = errors[question.id];

    const handleOptionClick = (option: string) => {
        if (question.type === "mcq") {
            setValue(question.id, option, { shouldValidate: true });
        } else if (question.type === "multi-select") {
            const currentValues = Array.isArray(value) ? value : [];
            const newValues = currentValues.includes(option)
                ? currentValues.filter((v: string) => v !== option)
                : [...currentValues, option];
            setValue(question.id, newValues, { shouldValidate: true });
        }
    };

    return (
        <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tighter max-w-xl">
                {question.label}
            </h2>

            <div className="space-y-5">
                {question.type === "text" && (
                    <div className="relative group max-w-lg">
                        <input
                            {...register(question.id)}
                            placeholder={question.placeholder}
                            className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl md:text-2xl text-white outline-none focus:border-white transition-all duration-500 placeholder:text-zinc-800"
                            autoFocus
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full" />
                        {error && <p className="mt-4 text-[10px] text-red-500 font-mono uppercase tracking-widest">{error.message as string}</p>}
                    </div>
                )}

                {(question.type === "mcq" || question.type === "multi-select") && (
                    <div className="max-h-[320px] md:max-h-none overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800">
                        <div className={cn(
                            "grid gap-2 w-full transition-all duration-300",
                            (question.options?.length ?? 0) > 4
                                ? "grid-cols-1 md:grid-cols-2 max-w-2xl"
                                : "grid-cols-1 max-w-lg"
                        )}>
                            {question.options?.map((option, index) => {
                                const isActive = question.type === "mcq"
                                    ? value === option
                                    : Array.isArray(value) && value.includes(option);

                                const keyLabel = String.fromCharCode(65 + index); // A, B, C...

                                return (
                                    <button
                                        key={option}
                                        type="button"
                                        onClick={() => handleOptionClick(option)}
                                        className={cn(
                                            "flex items-center gap-4 w-full p-4 text-left transition-all duration-300 group relative overflow-hidden",
                                            isActive
                                                ? "bg-white text-black translate-x-1"
                                                : "bg-[#0f0f0f]/80 border border-white/5 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900/60 hover:text-zinc-200"
                                        )}
                                    >
                                        <span className={cn(
                                            "flex items-center justify-center w-6 h-6 text-[9px] font-mono border transition-colors",
                                            isActive
                                                ? "bg-black/5 border-black/20 text-black"
                                                : "border-zinc-800 text-zinc-600 group-hover:border-zinc-700"
                                        )}>
                                            {keyLabel}
                                        </span>
                                        <span className="text-lg font-medium tracking-tight">{option}</span>

                                        {isActive && (
                                            <div className="absolute right-4 opacity-40">
                                                <div className="w-1.5 h-1.5 bg-black rounded-full" />
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                        {error && <p className="mt-4 text-[10px] text-red-500 font-mono uppercase tracking-widest">{error.message as string}</p>}
                    </div>
                )}
            </div>
        </div>
    );
}
