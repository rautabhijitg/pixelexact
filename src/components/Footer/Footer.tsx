import Image from "next/image";
import Link from "next/link";
import CookieSettingsButton from "@/components/CookieConsent/CookieSettingsButton";
import { CONTACT_EMAIL } from "@/lib/seo";

const COPYRIGHT_YEAR = "2026";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-container site-footer__grid">
                <div>
                    <Link className="site-footer__wordmark" href="/" aria-label="Pixel Exact home"><Image className="site-footer__logo" src="/images/pixelexact-logo-color.svg" alt="Pixel Exact" width={699} height={119} /><Image className="site-footer__logo site-footer__logo--white" src="/images/pixelexact-logo-white.svg" alt="" width={699} height={119} /></Link>
                    <p>Pixel-perfect design and pixel-perfect frontend, from one senior, AI-enabled team.</p>
                    <div className="site-footer__social">
                        <a className="site-footer__social-link" href="https://www.linkedin.com/company/pixel-exact" target="_blank" rel="noreferrer" aria-label="Pixel Exact on LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.556V9h3.563v11.452z" /></svg>
                        </a>
                    </div>
                </div>
                <div><h2>Company</h2><Link href="/about">About</Link><Link href="/work">Work</Link><Link href="/insights">Insights</Link></div>
                <div><h2>Services</h2><Link href="/services">All services</Link><Link href="/services/ux-product-design">UX &amp; Product Design</Link><Link href="/services/ui-design-systems">UI &amp; Design Systems</Link><Link href="/services/frontend-application-development">Development</Link><Link href="/services/website-design-development">Website Design &amp; Development</Link><Link href="/services/legacy-application-modernization">Legacy Application Modernization</Link></div>
                <div><h2>Contact</h2><p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p><p><Link href="/contact">Book a consultation</Link></p></div>
            </div>
            <div className="site-container site-footer__bottom">
                <span>© {COPYRIGHT_YEAR} Pixel Exact. All rights reserved.</span>
                <nav className="site-footer__legal" aria-label="Legal">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/cookie-policy">Cookie Policy</Link>
                    <Link href="/disclaimer">Disclaimer</Link>
                    <CookieSettingsButton />
                </nav>
                <span>Designed and built by Pixel Exact.</span>
            </div>
        </footer>
    );
}
