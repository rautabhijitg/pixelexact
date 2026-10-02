import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "secondary" | "text" | "ghost" | "accent";
    className?: string;
    icon?: ReactNode;
    tabIndex?: number;
};

export default function Button({
    children,
    href,
    variant = "primary",
    className = "",
    icon,
    tabIndex,
}: ButtonProps) {
    const classes = `button button--${variant} ${className}`.trim();

    if (href) {
        return (
            <Link className={classes} href={href} tabIndex={tabIndex}>
                {children}{icon}
            </Link>
        );
    }

    return (
        <button className={classes} type="button" tabIndex={tabIndex}>
            {children}{icon}
        </button>
    );
}