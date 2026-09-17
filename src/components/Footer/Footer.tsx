import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/seo";

const COPYRIGHT_YEAR = "2026";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-container site-footer__grid">
                <div>
                    <Link className="site-footer__wordmark" href="/" aria-label="Pixel Exact home"><Image className="site-footer__logo" src="/images/pixelexact-logo-color.png" alt="Pixel Exact" width={699} height={119} /><Image className="site-footer__logo site-footer__logo--white" src="/images/pixelexact-logo-white.png" alt="" width={699} height={119} /></Link>
                    <p>Pixel-perfect design and pixel-perfect frontend, from one senior, AI-enabled team.</p>
                </div>
                <div><h3>Company</h3><Link href="/about">About</Link><Link href="/work">Work</Link><Link href="/insights">Insights</Link></div>
                <div><h3>Services</h3><Link href="/services">All services</Link><Link href="/services/ux-product-design">UX &amp; Product Design</Link><Link href="/services/ui-design-systems">UI &amp; Design Systems</Link><Link href="/services/frontend-application-development">Development</Link><Link href="/services/website-design-development">Website Design &amp; Development</Link></div>
                <div><h3>Contact</h3><p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p><p><Link href="/contact">Book a consultation</Link></p></div>
            </div>
            <div className="site-container site-footer__bottom"><span>© {COPYRIGHT_YEAR} Pixel Exact. All rights reserved.</span><span>Designed and built by Pixel Exact.</span></div>
        </footer>
    );
}
