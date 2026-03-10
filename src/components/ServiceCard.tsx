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
    className = "",
}: ServiceCardProps & { className?: string }) {
    return (
        <div className={`group bg-white rounded-3xl p-8 lg:p-10 border border-border-light hover:border-primary/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(236,171,43,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden ${className}`}>
            {/* Hover Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-900 to-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm group-hover:shadow-[0_4px_15px_rgba(236,171,43,0.3)] shrink-0">
                {icon}
            </div>
            <h3 className="text-xl font-extrabold text-secondary mb-4 leading-tight group-hover:text-primary transition-colors duration-300">{title}</h3>
            <p className="text-text-body text-base leading-relaxed mb-8 flex-grow">
                {description}
            </p>
            <Link
                href={href}
                className="inline-flex items-center gap-2 text-primary-dark text-sm font-bold group-hover:text-primary transition-colors duration-300 mt-auto"
            >
                <span className="relative">
                    Learn More
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </span>
                <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
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
