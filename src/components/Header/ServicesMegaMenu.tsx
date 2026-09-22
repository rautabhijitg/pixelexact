"use client";

import { useEffect, useRef, useState, type FocusEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { serviceOrder, servicePages } from "@/components/ServicePage/serviceData";

const OPEN_DELAY = 80;
const CLOSE_DELAY = 200;

/**
 * Desktop "Services" nav item: opens on hover (with brief open/close tolerance
 * so fast mouse movement doesn't flicker it) and on click, so it never
 * depends on hover alone. Deliberately not role="menu"/"menuitem" — this is
 * a disclosure panel of plain links, not an application menu, so it doesn't
 * need arrow-key navigation or a menu keyboard contract. Tab order just runs
 * through it naturally; links are only in the tab order while the panel is
 * actually open.
 */
export default function ServicesMegaMenu() {
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearTimers = () => {
        if (openTimer.current) clearTimeout(openTimer.current);
        if (closeTimer.current) clearTimeout(closeTimer.current);
        openTimer.current = null;
        closeTimer.current = null;
    };

    const scheduleOpen = () => {
        clearTimers();
        openTimer.current = setTimeout(() => setOpen(true), OPEN_DELAY);
    };

    const scheduleClose = () => {
        clearTimers();
        closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
    };

    useEffect(() => clearTimers, []);

    useEffect(() => {
        if (!open) return;

        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                clearTimers();
                setOpen(false);
                triggerRef.current?.focus();
            }
        }
        function onPointerDown(event: MouseEvent) {
            if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("mousedown", onPointerDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.removeEventListener("mousedown", onPointerDown);
        };
    }, [open]);

    function onBlur(event: FocusEvent<HTMLDivElement>) {
        if (!rootRef.current?.contains(event.relatedTarget as Node)) {
            clearTimers();
            setOpen(false);
        }
    }

    function closeAndNavigate() {
        clearTimers();
        setOpen(false);
    }

    return (
        <div
            className="services-menu"
            ref={rootRef}
            onMouseEnter={scheduleOpen}
            onMouseLeave={scheduleClose}
            onBlur={onBlur}
        >
            <button
                ref={triggerRef}
                type="button"
                className="services-menu__trigger"
                aria-expanded={open}
                aria-controls="services-menu-panel"
                onClick={() => { clearTimers(); setOpen((current) => !current); }}
            >
                Services
                <ChevronDown aria-hidden="true" size={15} className="services-menu__chevron" />
            </button>

            <div id="services-menu-panel" className={`services-menu__panel${open ? " services-menu__panel--open" : ""}`}>
                <div className="site-container services-menu__grid">
                    <div className="services-menu__intro">
                        <p className="services-menu__eyebrow">Services</p>
                        <h2>Designing, building, and improving digital products with senior expertise and AI-enabled workflows.</h2>
                        <Link className="services-menu__all" href="/services" tabIndex={open ? 0 : -1} onClick={closeAndNavigate}>
                            View all services <ArrowUpRight aria-hidden="true" size={16} />
                        </Link>
                    </div>
                    <ul className="services-menu__list">
                        {serviceOrder.map((slug, index) => {
                            const service = servicePages[slug];
                            const isTrailingSingle = index === serviceOrder.length - 1 && serviceOrder.length % 3 === 1;
                            return (
                                <li key={slug} className={isTrailingSingle ? "services-menu__item--wide" : undefined}>
                                    <Link href={`/services/${slug}`} tabIndex={open ? 0 : -1} onClick={closeAndNavigate}>
                                        <span className="services-menu__item-title">{service.title}</span>
                                        <span className="services-menu__item-desc">{service.menuDescription}</span>
                                        <ArrowUpRight aria-hidden="true" size={16} className="services-menu__item-arrow" />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
