"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

const SmoothScrollContext = createContext<{
    lenis: Lenis | null;
    scrollTo: (target: string | HTMLElement | number, options?: any) => void;
}>({
    lenis: null,
    scrollTo: () => { },
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    const scrollTo = (target: string | HTMLElement | number, options?: any) => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(target, {
                offset: -80, // Offset for navbar
                duration: 1.5,
                ...options
            });
        }
    };

    return (
        <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
            {children}
        </SmoothScrollContext.Provider>
    );
}
