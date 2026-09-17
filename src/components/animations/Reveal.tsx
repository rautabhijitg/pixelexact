"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
    children: ReactNode;
    className?: string;
    /** Stagger position within a group; adds index * 70ms as a transition-delay. */
    index?: number;
};

/**
 * Reveals content once, the first time it scrolls into view.
 * Renders fully visible with no JS (SSR/no-JS/pre-hydration never hides real
 * content) — the hidden state is only ever applied imperatively client-side,
 * so this can never affect crawlability. Pure DOM attribute toggling (no
 * React state) since this is presentation-only and never needs a re-render.
 */
export default function Reveal({ children, className, index = 0 }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        el.dataset.revealState = "hidden";

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.dataset.revealState = "visible";
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const style: CSSProperties | undefined = index ? { transitionDelay: `${index * 70}ms` } : undefined;

    return (
        <div ref={ref} className={`reveal${className ? ` ${className}` : ""}`} style={style}>
            {children}
        </div>
    );
}
