import Link from "next/link";

const quickLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/good-practices", label: "Good Practices" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer className="bg-secondary text-white relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6 group">
                            <div className="flex items-center gap-3">
                                <div>
                                    <span className="font-bold text-xl block leading-tight text-white group-hover:text-primary transition-colors">
                                        Dhiirane Group
                                    </span>
                                    <span className="text-primary text-xs tracking-widest uppercase font-semibold">
                                        Ideas. Institutions. Impact.
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <p className="text-white/70 text-base leading-relaxed max-w-md">
                            Dhiirane Group is a multidisciplinary platform organization dedicated to building ideas, institutions, and enterprises that create lasting social and economic value across East Africa.
                        </p>

                        {/* Social Icons — placeholder hrefs, to be updated later */}
                        <div className="mt-8 flex items-center gap-4">
                            {/* LinkedIn */}
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-secondary transition-all duration-300"
                                aria-label="Dhiirane Group on LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            {/* X / Twitter */}
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-secondary transition-all duration-300"
                                aria-label="Dhiirane Group on X"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-secondary transition-all duration-300"
                                aria-label="Dhiirane Group on Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg text-white mb-6">
                            Company
                        </h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-primary transition-colors duration-200 flex items-center gap-3 group"
                                    >
                                        <span className="w-4 h-0.5 rounded-full bg-white/20 group-hover:bg-primary group-hover:w-6 transition-all duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info — phone removed per user request */}
                    <div>
                        <h4 className="font-bold text-lg text-white mb-6">
                            Contact Us
                        </h4>
                        <ul className="space-y-5 text-white/70">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <span className="pt-2">Mogadishu, Somalia</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <a href="mailto:Dhiiranegroup@gmail.com" className="pt-2 hover:text-primary transition-colors">
                                    Dhiiranegroup@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-white/50">
                    <p>
                        &copy; {new Date().getFullYear()} Dhiirane Group. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="/privacy-policy" className="hover:text-primary transition-colors duration-200">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="hover:text-primary transition-colors duration-200">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
