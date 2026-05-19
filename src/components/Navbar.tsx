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
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    // Dynamic styles based on scroll + page
    const navBg = scrolled
        ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08),0_8px_30px_rgba(0,0,0,0.04)]"
        : isHomePage
            ? "bg-transparent"
            : "bg-white";

    const linkColor = scrolled || !isHomePage
        ? "text-text-body hover:text-secondary"
        : "text-white/80 hover:text-white";

    const activeLinkColor = scrolled || !isHomePage
        ? "text-secondary"
        : "text-white";

    const logoFilter = scrolled || !isHomePage
        ? ""
        : "brightness-0 invert";

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-[72px]">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group py-2 shrink-0">
                            <Image
                                src={LogoImage}
                                alt="Dhiirane Consulting Group"
                                className={`h-10 w-auto max-w-[160px] sm:h-11 sm:max-w-[180px] object-contain transition-all duration-500 ${logoFilter}`}
                                priority
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center">
                            <div className="flex items-center gap-0.5 bg-black/[0.04] rounded-full p-1" style={scrolled || !isHomePage ? {} : { background: "rgba(255,255,255,0.08)" }}>
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`relative px-5 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-300 ${
                                                isActive
                                                    ? `${activeLinkColor} bg-white shadow-sm`
                                                    : `${linkColor}`
                                            }`}
                                            style={isActive && (!scrolled && isHomePage) ? { background: "rgba(255,255,255,0.15)", boxShadow: "none" } : {}}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Hamburger */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className={`lg:hidden p-2.5 rounded-xl transition-colors ${
                                scrolled || !isHomePage
                                    ? "hover:bg-gray-100 text-secondary"
                                    : "hover:bg-white/10 text-white"
                            }`}
                            aria-label="Open menu"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Subtle bottom border when scrolled */}
                <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`} />
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
                    isOpen ? "visible" : "invisible"
                }`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-secondary/50 backdrop-blur-sm transition-opacity duration-300 ${
                        isOpen ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={() => setIsOpen(false)}
                />

                {/* Panel */}
                <div
                    className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-5 border-b border-gray-100">
                        <Image
                            src={LogoImage}
                            alt="DCG Logo"
                            className="h-9 w-auto max-w-[140px] object-contain"
                        />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-400 hover:text-secondary"
                            aria-label="Close menu"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Links */}
                    <div className="p-4 space-y-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                                        isActive
                                            ? "text-primary bg-accent"
                                            : "text-text-body hover:text-secondary hover:bg-gray-50"
                                    }`}
                                >
                                    {isActive && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    )}
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile CTA */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-100 bg-white">
                        <Link
                            href="/contact"
                            className="block text-center bg-gradient-to-r from-primary to-primary-dark text-secondary px-6 py-3.5 rounded-xl font-semibold shadow-[0_4px_14px_rgba(236,171,43,0.3)] hover:shadow-[0_6px_20px_rgba(236,171,43,0.4)] transition-all duration-200"
                        >
                            Get in Touch
                        </Link>
                        <p className="text-center text-xs text-text-light mt-3">
                            Dhiiranegroup@gmail.com
                        </p>
                    </div>
                </div>
            </div>

            {/* Spacer — only on non-home pages where nav is solid */}
            {!isHomePage && <div className="h-[72px]" />}
        </>
    );
}
