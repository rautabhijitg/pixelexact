type SectionHeadingProps = {
    eyebrow?: string;
    title: string;
    description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
    return (
        <div className="site-section-heading">
            {eyebrow ? <p className="site-section-heading__eyebrow">{eyebrow}</p> : null}
            <h2>{title}</h2>
            {description ? <p className="site-section-heading__description">{description}</p> : null}
        </div>
    );
}
