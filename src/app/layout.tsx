import type { Metadata, Viewport } from "next";
import { Inter, Orbitron, Montserrat } from "next/font/google";
import Script from "next/script";
import BackToTop from "@/components/BackToTop/BackToTop";
import { organizationJsonLd, SITE_NAME, SITE_URL, websiteJsonLd } from "@/lib/seo";
import "./globals.scss";

// Google Analytics (GA4). Loaded once here in the root layout so every route
// gets exactly one tag, per Google's own instructions. `afterInteractive` is
// Next.js's recommended strategy for gtag.js: it loads after the page is
// interactive instead of blocking the initial render, while still firing
// early enough to track the visit accurately.
const GA_MEASUREMENT_ID = "G-NPKKCWGRZ6";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-body",
    display: "swap",
});

const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    variable: "--font-display",
    display: "swap",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-secondary",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${SITE_NAME} | Pixel Exact | Pixel Perfect Senior-led UX, UI, and frontend development`,
        template: `%s | ${SITE_NAME}`,
    },
    description: "UX design, UI design, and frontend development from one senior, AI-enabled team. Pixel-accurate execution, design and code held together, delivered fast.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#173963",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${orbitron.variable} ${montserrat.variable}`}>
            <body>
                <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_MEASUREMENT_ID}');
                    `}
                </Script>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }} />
                {children}
                <BackToTop />
            </body>
        </html>
    );
}
