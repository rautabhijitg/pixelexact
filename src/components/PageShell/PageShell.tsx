import type { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function PageShell({
    children,
    backHref,
    backLabel,
}: {
    children: ReactNode;
    backHref?: string;
    backLabel?: string;
}) {
    return (
        <div className="site-shell">
            <Header backHref={backHref} backLabel={backLabel} />
            {children}
            <Footer />
        </div>
    );
}
