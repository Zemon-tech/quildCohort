import * as React from "react";
import Image from "next/image";

export default function CTA() {
    return (
        <section className="w-full px-6 py-0 md:py-0">
            <div className="relative isolate mx-auto flex h-[250px] w-full max-w-6xl items-center justify-center overflow-hidden border border-white/10 shadow-2xl sm:h-[300px] md:h-[350px]">
                <Image
                    src="/CTA.png"
                    alt="CTA Background"
                    fill
                    className="absolute inset-0 -z-10 object-cover transition-transform duration-700 hover:scale-100"
                    priority
                />
                <div className="absolute inset-0 -z-10" />
            </div>
        </section>
    );
}

