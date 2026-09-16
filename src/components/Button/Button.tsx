import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "secondary" | "text" | "ghost" | "accent";
    className?: string;
    icon?: ReactNode;
};

export default function Button({
    children,
    href,
    variant = "primary",
    className = "",
    icon,
}: ButtonProps) {
    const classes = `button button--${variant} ${className}`.trim();

    if (href) {
        return (
            <Link className={classes} href={href}>
                {children}{icon}
            </Link>
        );
    }

    return (
        <button className={classes} type="button">
            {children}{icon}
        </button>
    );
}