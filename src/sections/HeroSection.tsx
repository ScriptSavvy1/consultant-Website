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
                {/* Dark overlay — stronger on left for text, lighter on right to show image */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/60" />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary to-transparent" />
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

            {/* Hero content — two column */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-28 lg:py-36 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Text */}
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 bg-white/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            Trusted Consulting Partner in East Africa
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                            Local Insight,{" "}
                            <span className="text-primary">
                                Global Expertise
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-white/80 font-medium leading-relaxed">
                            Empowering institutions across Somalia and East Africa through
                            expert advisory, strategic communications, and capacity-building
                            solutions.
                        </p>

                        <p className="mt-4 text-white/50 leading-relaxed text-base">
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
                        <div className="mt-12 flex items-center gap-8 text-sm">
                            {["Strategic Vision", "Proven Impact", "Lasting Value"].map((text) => (
                                <div key={text} className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-white/60">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Pillar Cards */}
                    <div className="hidden lg:flex flex-col gap-5">
                        {[
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                    </svg>
                                ),
                                label: "Ideas",
                                title: "Innovative Solutions",
                                desc: "Turning strategic thinking into actionable plans that address complex challenges in governance and development.",
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                    </svg>
                                ),
                                label: "Institutions",
                                title: "Strengthened Governance",
                                desc: "Building capacity within organizations and public bodies for sustainable, transparent, and accountable systems.",
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                ),
                                label: "Impact",
                                title: "Measurable Outcomes",
                                desc: "Delivering real, lasting social and economic value across Somalia and East Africa through evidence-based approaches.",
                            },
                        ].map((card, idx) => (
                            <div
                                key={card.label}
                                className="group relative bg-white/[0.07] backdrop-blur-md border border-white/[0.1] rounded-2xl p-6 hover:bg-white/[0.12] hover:border-primary/30 transition-all duration-500"
                                style={{ animationDelay: `${idx * 150}ms` }}
                            >
                                {/* Accent line on hover */}
                                <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                                <div className="flex items-start gap-4 pl-2">
                                    <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/15 flex items-center justify-center text-primary group-hover:bg-primary/25 transition-colors duration-300">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs tracking-widest uppercase text-primary font-semibold mb-1">
                                            {card.label}
                                        </p>
                                        <h3 className="text-white font-semibold text-base mb-1.5">
                                            {card.title}
                                        </h3>
                                        <p className="text-white/45 text-sm leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
