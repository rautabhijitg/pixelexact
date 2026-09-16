"use client";

import { useState, type ReactNode } from "react";
import Header from "@/components/Header/Header";

export default function HomeChrome({ children }: { children: ReactNode }) {
    const [precisionView, setPrecisionView] = useState(false);

    return (
        <div className={`pe${precisionView ? " pe--precision" : ""}`}>
            <div className="pe__grid-overlay" aria-hidden="true" />
            <Header precisionView={precisionView} onPrecisionToggle={() => setPrecisionView((current) => !current)} />
            {children}
        </div>
    );
}
