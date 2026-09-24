"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

// Hysteresis: separate show/hide thresholds so scroll position hovering
// around a single value can't flicker the button in and out of view.
const SHOW_AT = 64;
const HIDE_AT = 24;

/**
 * Global "back to top" control. Mounted once in the root layout so it's
 * available on every route without per-page wiring. Visibility is derived
 * purely from scroll position: if the user has scrolled past SHOW_AT, the
 * page is — by definition — tall enough to scroll, so no separate
 * scrollHeight/innerHeight check is needed and it stays correct even as
 * content height changes after mount (images, fonts, accordions, etc.).
 */
export default function BackToTop() {
    const [visible, setVisible] = useState(false);
    const visibleRef = useRef(false);
    const tickingRef = useRef(false);
    const pathname = usePathname();

    useEffect(() => {
        visibleRef.current = visible;
    }, [visible]);

    const evaluate = useCallback(() => {
        const y = window.scrollY;
        if (!visibleRef.current && y > SHOW_AT) {
            setVisible(true);
        } else if (visibleRef.current && y < HIDE_AT) {
            setVisible(false);
        }
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (tickingRef.current) return;
            tickingRef.current = true;
            requestAnimationFrame(() => {
                evaluate();
                tickingRef.current = false;
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [evaluate]);

    // This component is mounted once at the root and persists across
    // client-side navigations, so its visibility doesn't reset on its own.
    // Next.js scrolls new routes to the top by default, but re-check rather
    // than assume it — a route can also land mid-page via a hash anchor.
    // This intentionally does NOT reuse the hysteresis-relative `evaluate`:
    // hysteresis exists to stop flicker while continuously scrolling one
    // page, but a fresh route has no such session to protect, so it's
    // derived directly against a single threshold instead. Deferred a frame
    // so this runs after the router's own scroll reset has actually applied.
    useEffect(() => {
        const id = requestAnimationFrame(() => {
            const shouldBeVisible = window.scrollY > SHOW_AT;
            visibleRef.current = shouldBeVisible;
            setVisible(shouldBeVisible);
        });
        return () => cancelAnimationFrame(id);
    }, [pathname]);

    const handleClick = () => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    };

    return (
        <button
            type="button"
            className={`back-to-top${visible ? " back-to-top--visible" : ""}`}
            onClick={handleClick}
            aria-label="Back to top"
            aria-hidden={!visible}
            tabIndex={visible ? 0 : -1}
        >
            <ArrowUp aria-hidden="true" size={20} />
        </button>
    );
}
