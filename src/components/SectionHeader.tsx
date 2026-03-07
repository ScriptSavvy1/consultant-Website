interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    light?: boolean;
}

export default function SectionHeader({
    title,
    subtitle,
    centered = true,
    light = false,
}: SectionHeaderProps) {
    return (
        <div className={`mb-14 ${centered ? "text-center" : ""}`}>
            <h2
                className={`text-3xl sm:text-4xl font-bold tracking-tight ${light ? "text-white" : "text-secondary"
                    }`}
            >
                {title}
            </h2>
            <div
                className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent-blue ${centered ? "mx-auto" : ""
                    }`}
            />
            {subtitle && (
                <p
                    className={`mt-5 text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""
                        } ${light ? "text-blue-200/80" : "text-text-body"}`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
