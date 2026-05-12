import SectionHeader from "@/components/SectionHeader";

const quotes = [
    "Building Platforms for Progress",
    "Where Strategy Meets Action",
    "Connecting Ideas, Enterprise, and Society",
    "A Platform for Innovation, Dialogue, and Growth"
];

export default function QuotesSection() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden bg-bg-silver">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
            <div className="absolute -left-40 -top-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">

                    {/* Left side: Heading */}
                    <div className="lg:col-span-4 lg:pr-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary-dark font-semibold text-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Platform for Progress
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-secondary leading-tight mb-8">
                            Ideas.<br />
                            <span className="text-primary">Institutions.</span><br />
                            Impact.
                        </h2>
                        <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
                        <p className="text-text-body text-lg leading-relaxed">
                            Discover how Dhiirane Group connects strategy with action to drive sustainable social and economic transformation.
                        </p>
                    </div>

                    {/* Right side: Staggered Cards */}
                    <div className="lg:col-span-8 relative">
                        <div className="grid sm:grid-cols-2 gap-6">

                            {/* Column 1 (Pushed down slightly) */}
                            <div className="space-y-6 sm:mt-12">
                                {[quotes[0], quotes[1]].map((quote, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-3xl p-8 border border-border-light shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(236,171,43,0.15)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                                        <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-secondary font-bold text-xl leading-snug">
                                            {quote}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-6">
                                {[quotes[2], quotes[3]].map((quote, idx) => (
                                    <div
                                        key={idx + 2}
                                        className="bg-white rounded-3xl p-8 border border-border-light shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(236,171,43,0.15)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-1 h-full bg-primary transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                                        <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                            </svg>
                                        </div>
                                        <p className="text-secondary font-bold text-xl leading-snug">
                                            {quote}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
