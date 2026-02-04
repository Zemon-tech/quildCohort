"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { ApplicationFormData, applicationSchema, questions } from "@/lib/form-config";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

// Components
import FormStep from "@/components/form/FormStep";

export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [alreadyRegistered, setAlreadyRegistered] = useState(false);

    const methods = useForm<ApplicationFormData>({
        resolver: zodResolver(applicationSchema),
        mode: "onChange",
        defaultValues: {
            technologies: [],
            interests: [],
        }
    });

    const { handleSubmit, trigger, watch } = methods;
    const formData = watch();

    const totalSteps = questions.length;
    const progress = ((currentStep + 1) / totalSteps) * 100;

    const nextStep = async () => {
        const currentQuestion = questions[currentStep];
        const isValid = await trigger(currentQuestion.id as any);

        if (isValid) {
            let next = currentStep + 1;
            while (next < totalSteps && questions[next].condition && !questions[next].condition?.(methods.getValues())) {
                next++;
            }

            if (next < totalSteps) {
                setCurrentStep(next);
            } else {
                handleSubmit(onSubmit)();
            }
        }
    };

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter" && !isSubmitting && !isSubmitted && !alreadyRegistered) {
                nextStep();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextStep, isSubmitting, isSubmitted, alreadyRegistered]);

    const prevStep = () => {
        let prev = currentStep - 1;
        while (prev >= 0 && questions[prev].condition && !questions[prev].condition?.(methods.getValues())) {
            prev--;
        }
        if (prev >= 0) {
            setCurrentStep(prev);
        }
    };

    React.useEffect(() => {
        const status = localStorage.getItem("quild_application_status");
        if (status === "submitted" || status === "already_registered") {
            setAlreadyRegistered(true);
        }
    }, []);

    const onSubmit = async (data: ApplicationFormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
                localStorage.setItem("quild_application_status", "submitted");
                toast.success("Application submitted successfully!");
            } else if (response.status === 409) {
                setAlreadyRegistered(true);
                localStorage.setItem("quild_application_status", "already_registered");
                toast.error(result.message);
            } else {
                toast.error(result.message || "Something went wrong");
            }
        } catch (error) {
            toast.error("Failed to submit application");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted || alreadyRegistered) {
        return (
            <div className="flex flex-col items-start justify-center min-h-[400px] space-y-8 max-w-2xl px-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center"
                >
                    {isSubmitted ? (
                        <Check className="w-8 h-8 text-white" />
                    ) : (
                        <Check className="w-8 h-8 text-white opacity-40" />
                    )}
                </motion.div>
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none">
                        {isSubmitted ? "Submission Received." : "Already Registered."}
                    </h2>
                    <p className="text-zinc-500 text-lg md:text-xl font-medium tracking-tight max-w-md">
                        {isSubmitted
                            ? "Thanks for applying to Quild Cohort 2.0. We’ll reach out if you’re selected."
                            : "It looks like you've already submitted an application with this email address. We'll be in touch soon."
                        }
                    </p>
                </div>
                <div className="pt-4">
                    <Button
                        onClick={() => window.location.href = "/"}
                        className="bg-white text-black hover:bg-zinc-200 px-8 py-6 rounded-none font-bold uppercase tracking-tighter transition-all"
                    >
                        Back to Home
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl">
            <div className="mb-12 space-y-4">
                <div className="flex items-center justify-between text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">
                    <span>Progress</span>
                    <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-[1px] bg-zinc-900" />
            </div>

            <FormProvider {...methods}>
                <div className="h-[450px] md:h-[400px] lg:h-[450px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <FormStep question={questions[currentStep]} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-6 md:mt-10 flex items-center gap-6">
                    <Button
                        type="button"
                        onClick={nextStep}
                        disabled={isSubmitting}
                        className="bg-white text-black hover:bg-zinc-200 px-8 py-6 rounded-none font-bold uppercase tracking-tighter transition-all text-base"
                    >
                        {isSubmitting ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : currentStep === totalSteps - 1 ? (
                            "Submit"
                        ) : (
                            <>
                                Next Step
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </>
                        )}
                    </Button>

                    {currentStep > 0 && (
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={prevStep}
                            disabled={isSubmitting}
                            className="text-zinc-500 hover:text-white px-2 py-6 rounded-none font-bold uppercase tracking-tighter h-auto text-xs"
                        >
                            <ArrowLeft className="w-3 h-3 mr-2" />
                            Back
                        </Button>
                    )}
                </div>
            </FormProvider>

            {/* Keyboard Shortcuts Hint */}
            <div className="mt-8 opacity-30">
                <p className="text-zinc-500 text-[9px] font-mono uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="px-1 py-0.5 border border-zinc-800 rounded">Enter</span> to proceed
                </p>
            </div>
        </div>
    );
}
