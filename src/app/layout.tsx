import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: {
    default: "Pixel Exact | UX, UI and frontend implementation",
    template: "%s | Pixel Exact",
  },
  description:
    "Pixel-perfect UX, UI and frontend development for digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}