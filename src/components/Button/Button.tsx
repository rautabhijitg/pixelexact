import "./Button.scss";

type ButtonProps = {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "secondary" | "text";
};

export default function Button({
    children,
    href,
    variant = "primary",
}: ButtonProps) {
    const className = `button button--${variant}`;

    if (href) {
        return (
            <a className={className} href={href}>
                {children}
            </a>
        );
    }

    return (
        <button className={className} type="button">
            {children}
        </button>
    );
}