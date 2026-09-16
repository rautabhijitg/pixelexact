import Link from "next/link";
import { breadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo";

type BreadcrumbProps = {
    items: BreadcrumbItem[];
    className?: string;
};

export default function Breadcrumb({ items, className = "service-page__breadcrumb" }: BreadcrumbProps) {
    const lastIndex = items.length - 1;

    return (
        <nav className={className} aria-label="Breadcrumb">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(items)) }} />
            <div className="service-page__wrap">
                <ol>
                    {items.map((item, index) => index === lastIndex
                        ? <li key={item.path} aria-current="page">{item.name}</li>
                        : <li key={item.path}><Link href={item.path}>{item.name}</Link></li>)}
                </ol>
            </div>
        </nav>
    );
}
