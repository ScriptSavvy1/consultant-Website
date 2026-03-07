import Link from "next/link";

const quickLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/good-practices", label: "Good Practices" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer className="bg-secondary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white font-bold text-sm tracking-wider">
                                DCG
                            </div>
                            <div>
                                <span className="font-bold text-lg block leading-tight">
                                    Dhiirane Consulting Group
                                </span>
                                <span className="text-blue-300 text-xs tracking-wider uppercase">
                                    Local Insight, Global Expertise
                                </span>
                            </div>
                        </div>
                        <p className="text-blue-200/80 text-sm leading-relaxed max-w-md">
                            Dhiirane Consulting Group strengthens Somalia&apos;s institutions
                            by providing expert advisory, training, and communications
                            services. We leverage local insights and global best practices to
                            deliver practical solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-blue-300">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-blue-200/80 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-blue-300 transition-colors" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-blue-300">
                            Contact Us
                        </h4>
                        <ul className="space-y-4 text-sm text-blue-200/80">
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-primary mt-0.5 shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                                <span>Mogadishu, Somalia</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-primary mt-0.5 shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                    />
                                </svg>
                                <span>+252-61-000-0000</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-primary mt-0.5 shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
                                </svg>
                                <span>info@dhiiranegroup.so</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-blue-200/60">
                    <p>
                        &copy; {new Date().getFullYear()} Dhiirane Consulting Group. All
                        rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link
                            href="#"
                            className="hover:text-white transition-colors duration-200"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-white transition-colors duration-200"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
