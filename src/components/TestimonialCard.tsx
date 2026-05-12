interface TestimonialCardProps {
    quote: string;
    name: string;
    position: string;
    rating: number;
    initials: string;
}

export default function TestimonialCard({
    quote,
    name,
    position,
    rating,
    initials,
}: TestimonialCardProps) {
    return (
        <div className="bg-white rounded-2xl p-7 border border-border-light shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                        key={i}
                        className={`w-5 h-5 ${i < rating ? "text-amber-400" : "text-gray-200"
                            }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>

            {/* Quote */}
            <blockquote className="text-text-body text-sm leading-relaxed mb-6 italic">
                &ldquo;{quote}&rdquo;
            </blockquote>

            {/* Person */}
            <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                    {initials}
                </div>
                <div>
                    <p className="font-semibold text-secondary text-sm">{name}</p>
                    <p className="text-text-light text-xs">{position}</p>
                </div>
            </div>
        </div>
    );
}
