import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Orbitron } from "next/font/google";
import { organizationJsonLd, SITE_NAME, SITE_URL, websiteJsonLd } from "@/lib/seo";
import "./globals.scss";

const ibmPlexSans = IBM_Plex_Sans({
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

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${SITE_NAME} | Senior-led UX, UI, and frontend development`,
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
        <html lang="en" className={`${ibmPlexSans.variable} ${orbitron.variable}`}>
            <body>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }} />
                {children}
            </body>
        </html>
    );
}
