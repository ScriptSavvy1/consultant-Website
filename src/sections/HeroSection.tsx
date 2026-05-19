"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-secondary">
            {/* Hero background image with overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/hero.png"
                    alt="Professional consulting team in Mogadishu"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/80 to-secondary/50" />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary to-transparent" />
            </div>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-[0.04]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Accent: diagonal gold line */}
            <div
                className="absolute pointer-events-none"
                style={{
                    width: "1px",
                    height: "120%",
                    background: "var(--color-primary)",
                    opacity: 0.15,
                    top: "-10%",
                    left: "58%",
                    transform: "rotate(12deg)",
                    transformOrigin: "top center",
                }}
            />

            {/* Hero content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-32 lg:py-40">
                <div className="animate-fade-in-up max-w-2xl">
                    <div className="inline-flex items-center gap-2 bg-white/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Trusted Consulting Partner in East Africa
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                        Local Insight,{" "}
                        <span className="text-primary">
                            Global Expertise
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-white/80 font-medium max-w-xl">
                        Empowering institutions across Somalia and East Africa through
                        expert advisory, strategic communications, and capacity-building
                        solutions.
                    </p>

                    <p className="mt-4 text-white/55 leading-relaxed max-w-xl text-base">
                        Dhiirane Consulting Group strengthens Somalia&apos;s institutions
                        by providing expert advisory, training, and communications
                        services. Led by professionals, we leverage local insights and
                        global best practices to deliver practical solutions in governance,
                        capacity building, and project support.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-secondary px-8 py-4 rounded-xl text-sm font-semibold shadow-[0_4px_20px_rgba(236,171,43,0.35)] hover:shadow-[0_8px_30px_rgba(236,171,43,0.5)] hover:-translate-y-0.5 transition-all duration-300"
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
                            className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-12 flex items-center gap-8 text-sm text-white/50">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                                <svg
                                    className="w-4 h-4 text-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-white/60">Strategic Vision</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                                <svg
                                    className="w-4 h-4 text-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-white/60">Proven Impact</span>
                        </div>
                        <div className="hidden sm:flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                                <svg
                                    className="w-4 h-4 text-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-white/60">Lasting Value</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
