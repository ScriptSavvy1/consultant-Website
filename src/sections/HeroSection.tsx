import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-accent/30 to-white">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-blue/20 rounded-full translate-y-1/2 -translate-x-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 bg-accent/80 text-secondary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            Trusted Consulting Partner in East Africa
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-secondary leading-[1.15] tracking-tight">
                            Local Insight,{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-primary">
                                Global Expertise
                            </span>
                        </h1>

                        <p className="mt-5 text-lg text-secondary font-medium">
                            Empowering institutions across Somalia and East Africa through
                            expert advisory, strategic communications, and capacity-building
                            solutions.
                        </p>

                        <p className="mt-4 text-text-body leading-relaxed max-w-xl">
                            Dhiirane Consulting Group strengthens Somalia&apos;s institutions
                            by providing expert advisory, training, and communications
                            services. Led by professionals, we leverage local insights and
                            global best practices to deliver practical solutions in governance,
                            capacity building, and project support.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-primary text-white px-7 py-3.5 rounded-xl text-sm font-semibold shadow-[0_4px_14px_rgba(236,171,43,0.35)] hover:shadow-[0_6px_20px_rgba(236,171,43,0.5)] hover:-translate-y-0.5 transition-all duration-200"
                            >
                                Explore Our Services
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
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 border-2 border-primary/30 text-primary px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-accent hover:border-primary/50 transition-all duration-200"
                            >
                                Get in Touch
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-10 flex items-center gap-8 text-sm text-text-light">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                                    <svg
                                        className="w-4 h-4 text-green-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <span>Since 2020</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                                    <svg
                                        className="w-4 h-4 text-green-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <span>50+ Projects</span>
                            </div>
                            <div className="hidden sm:flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                                    <svg
                                        className="w-4 h-4 text-green-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <span>East Africa Focus</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="hidden lg:flex justify-center animate-float">
                        <div className="relative w-full max-w-md">
                            {/* Abstract consulting illustration using shapes */}
                            <div className="relative">
                                {/* Main card */}
                                <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(27,110,194,0.15)] p-8 border border-border-light">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                                            D
                                        </div>
                                        <div>
                                            <div className="h-3 w-28 bg-secondary/80 rounded" />
                                            <div className="h-2 w-20 bg-text-light/30 rounded mt-2" />
                                        </div>
                                    </div>

                                    {/* Chart bars */}
                                    <div className="flex items-end gap-3 h-32 mb-6">
                                        <div className="flex-1 bg-accent rounded-t-lg h-[45%]" />
                                        <div className="flex-1 bg-accent-blue rounded-t-lg h-[65%]" />
                                        <div className="flex-1 bg-primary/70 rounded-t-lg h-[85%]" />
                                        <div className="flex-1 bg-primary rounded-t-lg h-[100%]" />
                                        <div className="flex-1 bg-secondary rounded-t-lg h-[75%]" />
                                    </div>

                                    {/* Stats row */}
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="bg-accent/50 rounded-lg p-3 text-center">
                                            <div className="text-primary font-bold text-lg">98%</div>
                                            <div className="text-text-light text-xs">Success</div>
                                        </div>
                                        <div className="bg-accent/50 rounded-lg p-3 text-center">
                                            <div className="text-primary font-bold text-lg">50+</div>
                                            <div className="text-text-light text-xs">Clients</div>
                                        </div>
                                        <div className="bg-accent/50 rounded-lg p-3 text-center">
                                            <div className="text-primary font-bold text-lg">5+</div>
                                            <div className="text-text-light text-xs">Years</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badge */}
                                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-border-light">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-green-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-secondary">
                                                Growth
                                            </div>
                                            <div className="text-xs text-green-500 font-bold">
                                                +42%
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badge bottom-left */}
                                <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg p-3 border border-border-light">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-primary"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-secondary">
                                                Trusted
                                            </div>
                                            <div className="text-xs text-primary font-bold">
                                                Verified
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
