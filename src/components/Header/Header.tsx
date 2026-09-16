"use client";

import { startTransition, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Grid3X3, Menu, Minus, Plus, Settings, X } from "lucide-react";

type HeaderProps = {
    precisionView?: boolean;
    onPrecisionToggle?: () => void;
    backHref?: string;
    backLabel?: string;
};

export default function Header({
    precisionView = false,
    onPrecisionToggle,
    backHref,
    backLabel,
}: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false);
    const [fontScale, setFontScale] = useState(1);

    useEffect(() => {
        const savedScale = Number(window.localStorage.getItem("pixel-exact-font-scale"));
        const savedTheme = window.localStorage.getItem("pixel-exact-theme");

        startTransition(() => {
            if (savedScale >= 0.9 && savedScale <= 1.2) {
                setFontScale(savedScale);
            }

            if (savedTheme === "dark") {
                setDarkTheme(true);
            }
        });
    }, []);

    useEffect(() => {
        document.documentElement.dataset.theme = darkTheme ? "dark" : "light";
        document.documentElement.style.setProperty("--font-scale", String(fontScale));
        window.localStorage.setItem("pixel-exact-font-scale", String(fontScale));
        window.localStorage.setItem("pixel-exact-theme", darkTheme ? "dark" : "light");
    }, [darkTheme, fontScale]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="site-header">
            <a className="site-header__skip-link" href="#main-content">Skip to main content</a>
            <nav className="site-header__nav site-container" aria-label="Primary navigation">
                <Link className="site-header__wordmark" href="/" aria-label="Pixel Exact home" onClick={closeMenu}>
                    <Image className="site-header__logo" src="/images/pixelexact-logo-color.png" alt="Pixel Exact" width={699} height={119} priority />
                    <Image className="site-header__logo site-header__logo--white" src="/images/pixelexact-logo-white.png" alt="" width={699} height={119} priority />
                </Link>
                <div className="site-header__links">
                    <Link href="/services">Services</Link>
                    <Link href="/work">Work</Link>
                    <Link href="/services/design-toolkit">Design Toolkit</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Insights</Link>
                </div>
                <div className="site-header__actions">
                    {backHref ? <Link className="site-header__back-link" href={backHref}>{backLabel ?? "Back home"} <ArrowUpRight aria-hidden="true" size={16} /></Link> : <Link className="site-header__button" href="/#contact">Book a consultation <ArrowUpRight aria-hidden="true" size={16} /></Link>}
                    <button className="site-header__settings-button" type="button" aria-expanded={settingsOpen} aria-controls="settings-panel" aria-label={settingsOpen ? "Close settings" : "Open settings"} onClick={() => setSettingsOpen((current) => !current)}><Settings aria-hidden="true" size={20} /></button>
                    <button className="site-header__menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((current) => !current)}>{menuOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}</button>
                </div>
            </nav>
            <div className={`site-header__mobile-menu${menuOpen ? " site-header__mobile-menu--open" : ""}`} id="mobile-navigation" aria-hidden={!menuOpen}>
                <Link href="/services" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>Services</Link>
                <Link href="/work" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>Work</Link>
                <Link href="/services/design-toolkit" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>Design Toolkit</Link>
                <Link href="/about" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>About</Link>
                <Link href="/blog" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>Insights</Link>
            </div>
            <div className={`site-header__settings${settingsOpen ? " site-header__settings--open" : ""}`} id="settings-panel" role="dialog" aria-label="Site settings" aria-hidden={!settingsOpen}>
                <div className="site-header__settings-header"><h2>Settings</h2><button type="button" aria-label="Close settings" onClick={() => setSettingsOpen(false)}><X aria-hidden="true" size={20} /></button></div>
                {onPrecisionToggle ? <div className="site-header__setting"><div><strong>Precision view</strong><span>Show the layout grid overlay.</span></div><button className="site-header__setting-toggle" type="button" aria-pressed={precisionView} onClick={onPrecisionToggle}><Grid3X3 aria-hidden="true" size={16} /><span>{precisionView ? "On" : "Off"}</span></button></div> : null}
                <div className="site-header__setting"><div><strong>Dark theme</strong><span>Use a darker reading palette.</span></div><button className="site-header__setting-toggle" type="button" aria-pressed={darkTheme} onClick={() => setDarkTheme((current) => !current)}><span>{darkTheme ? "On" : "Off"}</span></button></div>
                <div className="site-header__setting"><div><strong>Text size</strong><span>Adjust the reading size.</span></div><div className="site-header__font-controls"><button type="button" aria-label="Decrease text size" onClick={() => setFontScale((current) => Math.max(0.9, current - 0.1))}><Minus aria-hidden="true" size={16} /></button><span>{Math.round(fontScale * 100)}%</span><button type="button" aria-label="Increase text size" onClick={() => setFontScale((current) => Math.min(1.2, current + 0.1))}><Plus aria-hidden="true" size={16} /></button></div></div>
            </div>
        </header>
    );
}
