"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

function useCountUp(target: number, duration = 800, startCounting = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startCounting) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.floor(eased * target));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            }
        };

        animationFrame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrame);
    }, [target, duration, startCounting]);

    return count;
}

export default function HeroSection() {
    const [statsVisible, setStatsVisible] = useState(false);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = statsRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStatsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const projectCount = useCountUp(15, 800, statsVisible);
    const countryCount = useCountUp(8, 800, statsVisible);
    const trainedCount = useCountUp(200, 800, statsVisible);

    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-secondary">
            {/* Background: SVG geometric grid */}
            <div className="absolute inset-0 opacity-[0.06]">
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
                    opacity: 0.25,
                    top: "-10%",
                    left: "58%",
                    transform: "rotate(12deg)",
                    transformOrigin: "top center",
                }}
            />

            {/* Soft radial glow — bottom left, brand primary */}
            <div
                className="absolute pointer-events-none"
                style={{
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(236,171,43,0.12) 0%, transparent 70%)",
                    bottom: "-100px",
                    left: "-100px",
                }}
            />

            {/* Soft radial glow — top right */}
            <div
                className="absolute pointer-events-none"
                style={{
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(236,171,43,0.08) 0%, transparent 70%)",
                    top: "-50px",
                    right: "-50px",
                }}
            />

            {/* Hero content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-32 pb-16 lg:pt-40 lg:pb-20">
                <div className="animate-fade-in-up max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-white/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Trusted Consulting Partner in East Africa
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.1] tracking-tight">
                        Local Insight,{" "}
                        <span className="text-primary italic">
                            Global Expertise
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-white/80 font-medium max-w-2xl">
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

            {/* Stat bar at bottom */}
            <div
                ref={statsRef}
                className="relative z-10 border-t w-full mt-auto"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x"
                    style={{ "--tw-divide-opacity": "0.08", "--tw-divide-color": "rgba(255,255,255,0.08)" } as React.CSSProperties}
                >
                    {[
                        { number: projectCount, suffix: "+", label: "Projects Delivered" },
                        { number: countryCount, suffix: "", label: "Partner Countries" },
                        { number: trainedCount, suffix: "+", label: "Professionals Trained" },
                    ].map(({ number, suffix, label }) => (
                        <div key={label} className="py-8 px-6 text-center">
                            <p className="font-heading text-5xl text-white mb-1">
                                {number}{suffix}
                            </p>
                            <p className="text-sm tracking-widest uppercase text-white/40">
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
