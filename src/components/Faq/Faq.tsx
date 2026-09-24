import type { ReactNode } from "react";
import Reveal from "@/components/animations/Reveal";
import type { HomeFaq } from "@/data/homeFaqs";

function renderAnswer(faq: HomeFaq): ReactNode {
    const links = faq.links ?? [];
    if (links.length === 0) return faq.answer;

    const nodes: ReactNode[] = [];
    let remaining = faq.answer;
    links.forEach((link) => {
        const index = remaining.indexOf(link.token);
        if (index === -1) return;
        nodes.push(remaining.slice(0, index));
        nodes.push(<a key={link.href} href={link.href}>{link.label}</a>);
        remaining = remaining.slice(index + link.token.length);
    });
    nodes.push(remaining);
    return nodes;
}

type FaqProps = {
    items: HomeFaq[];
    className?: string;
};

/** Accessible, JS-free FAQ accordion (native <details>/<summary>) built from shared
 * question/answer data — reusable anywhere a section needs the same pattern. */
export default function Faq({ items, className }: FaqProps) {
    return (
        <div className={`pe__faqs${className ? ` ${className}` : ""}`}>
            {items.map((item, index) => (
                <Reveal key={item.question} index={index}>
                    <details className="pe__faq">
                        <summary>{item.question}</summary>
                        <p>{renderAnswer(item)}</p>
                    </details>
                </Reveal>
            ))}
        </div>
    );
}
