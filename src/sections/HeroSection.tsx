"use client";

import Link from "next/link";
import Image from "next/image";

const pillars = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
        ),
        label: "Ideas",
        desc: "Turning strategic thinking into actionable plans for complex challenges.",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
            </svg>
        ),
        label: "Institutions",
        desc: "Building capacity for sustainable, transparent governance systems.",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        label: "Impact",
        desc: "Delivering real, lasting social and economic value across East Africa.",
    },
];

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-secondary">
            {/* Hero background image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero.png"
                    alt="Professional consulting team in Mogadishu"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary/95" />
            </div>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-[0.03]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-28 lg:pt-36 pb-10 w-full flex-1 flex flex-col justify-center">
                <div className="animate-fade-in-up max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-white/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Trusted Consulting Partner in East Africa
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight">
                        Local Insight,{" "}
                        <span className="text-primary">Global Expertise</span>
                    </h1>

                    <p className="mt-6 text-lg lg:text-xl text-white/80 font-medium leading-relaxed max-w-2xl">
                        Empowering institutions across Somalia and East Africa through
                        expert advisory, strategic communications, and capacity-building
                        solutions.
                    </p>

                    <p className="mt-4 text-white/45 leading-relaxed text-base max-w-2xl">
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
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
                    <div className="mt-10 flex flex-wrap items-center gap-6 sm:gap-8 text-sm">
                        {["Strategic Vision", "Proven Impact", "Lasting Value"].map((text) => (
                            <div key={text} className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
                                    <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-white/55">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom pillar cards — horizontal row */}
            <div className="relative z-10 border-t border-white/[0.08] mt-auto">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
                        {pillars.map((pillar) => (
                            <div key={pillar.label} className="group py-7 sm:py-8 px-2 sm:px-6 flex items-start gap-4 hover:bg-white/[0.03] transition-colors duration-300">
                                <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/15 flex items-center justify-center text-primary group-hover:bg-primary/25 transition-colors duration-300">
                                    {pillar.icon}
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-sm mb-1">
                                        {pillar.label}
                                    </h3>
                                    <p className="text-white/40 text-xs leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
