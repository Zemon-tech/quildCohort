import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Hero.png"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 text-center">
                <div className="flex flex-col items-center justify-center space-y-12">
                    <div className="space-y-6">
                        <h1 className="text-sm font-medium uppercase tracking-[0.4em] text-zinc-400">
                            Error 404
                        </h1>
                        <h2 className="text-5xl font-normal leading-[1.1] text-zinc-100 md:text-7xl lg:text-8xl">
                            Page is not
                            <br />
                            created
                        </h2>
                        <p className="mx-auto max-w-lg text-zinc-400 md:text-lg leading-relaxed">
                            The journey you're looking for hasn't been mapped yet.
                            Step back into the future — guided by clarity.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Button asChild variant="outline" className="h-14 rounded-full border-white/20 bg-white/5 px-10 text-base font-medium text-white backdrop-blur-md hover:bg-white hover:text-black transition-all duration-500 group">
                            <Link href="/" className="flex items-center gap-2">
                                Return Home
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4 fill-none stroke-current stroke-2 transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium whitespace-nowrap opacity-30">
                Quild Cohort • Systems of Intelligence
            </div>


        </main>
    );
}
