"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LogoImage from "./Logo.webp";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/good-practices", label: "Good Practices" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
                    : "bg-white"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group py-2">
                            <Image
                                src={LogoImage}
                                alt="DCG Logo"
                                className="h-12 w-auto max-w-[180px] sm:h-14 sm:max-w-[220px] object-contain"
                                priority
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === link.href
                                        ? "text-primary bg-accent"
                                        : "text-text-body hover:text-primary hover:bg-accent/50"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:block">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-[0_4px_14px_rgba(27,110,194,0.35)] hover:shadow-[0_6px_20px_rgba(27,110,194,0.45)] hover:-translate-y-0.5 transition-all duration-200"
                            >
                                Get in Touch
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
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

                        {/* Hamburger */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
                            aria-label="Open menu"
                        >
                            <svg
                                className="w-6 h-6 text-secondary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[60] lg:hidden">
                    <div
                        className="absolute inset-0 bg-secondary/40 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl animate-slide-in">
                        {/* Close Button */}
                        <div className="flex items-center justify-between p-6 border-b border-border-light">
                            <div className="flex items-center py-1">
                                <Image
                                    src={LogoImage}
                                    alt="DCG Logo"
                                    className="h-10 w-auto max-w-[150px] object-contain"
                                />
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-lg hover:bg-accent transition-colors"
                                aria-label="Close menu"
                            >
                                <svg
                                    className="w-6 h-6 text-secondary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Mobile Links */}
                        <div className="p-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block px-4 py-3.5 rounded-lg text-base font-medium transition-all duration-200 ${pathname === link.href
                                        ? "text-primary bg-accent"
                                        : "text-text-body hover:text-primary hover:bg-accent/50"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="p-6 pt-2">
                            <Link
                                href="/contact"
                                className="block text-center bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3.5 rounded-lg font-semibold shadow-[0_4px_14px_rgba(27,110,194,0.35)] hover:shadow-[0_6px_20px_rgba(27,110,194,0.45)] transition-all duration-200"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Spacer for fixed navbar */}
            <div className="h-20" />
        </>
    );
}
