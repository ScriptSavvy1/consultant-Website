import Link from "next/link";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    href?: string;
}

export default function ServiceCard({
    icon,
    title,
    description,
    href = "#",
}: ServiceCardProps) {
    return (
        <div className="group bg-white rounded-2xl p-7 border border-border-light hover:border-primary/40 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(27,110,194,0.12)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-secondary mb-3">{title}</h3>
            <p className="text-text-body text-sm leading-relaxed mb-5">
                {description}
            </p>
            <Link
                href={href}
                className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all duration-200"
            >
                Learn More
                <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
            </Link>
        </div>
    );
}
