"use client";

import { useState, FormEvent } from "react";
import SectionHeader from "@/components/SectionHeader";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        message: "",
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you shortly.");
        setFormData({ name: "", email: "", organization: "", message: "" });
    };

    return (
        <section className="py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Get in Touch"
                    subtitle="Ready to transform your organization? Let's start a conversation."
                />

                <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
                    {/* Left: Contact Info */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold text-secondary mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-4">
                            {/* HQ */}
                            <div className="group bg-white rounded-2xl p-6 border border-border-light shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(236,171,43,0.1)] transition-all duration-300 hover:-translate-y-1 flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-secondary text-base mb-1 group-hover:text-primary transition-colors">
                                        Headquarters
                                    </p>
                                    <p className="text-text-body text-sm leading-relaxed">
                                        Mogadishu, Somalia
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="group bg-white rounded-2xl p-6 border border-border-light shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(236,171,43,0.1)] transition-all duration-300 hover:-translate-y-1 flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-secondary text-base mb-1 group-hover:text-primary transition-colors">
                                        Telephone
                                    </p>
                                    <p className="text-text-body text-sm leading-relaxed">
                                        +252-61-000-0000
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="group bg-white rounded-2xl p-6 border border-border-light shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(236,171,43,0.1)] transition-all duration-300 hover:-translate-y-1 flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-secondary text-base mb-1 group-hover:text-primary transition-colors">Email</p>
                                    <p className="text-text-body text-sm leading-relaxed">
                                        info@dhiiranegroup.so
                                    </p>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="group bg-gradient-to-br from-primary/5 to-accent/20 rounded-2xl p-6 border border-primary/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-base font-bold text-secondary">
                                        Business Hours
                                    </p>
                                </div>
                                <div className="space-y-2 pl-13">
                                    <p className="text-text-body text-sm flex justify-between">
                                        <span>Sat – Thu:</span>
                                        <span className="font-medium text-secondary">8:00 AM – 5:00 PM</span>
                                    </p>
                                    <p className="text-text-body text-sm flex justify-between">
                                        <span>Friday:</span>
                                        <span className="font-medium text-primary">Closed</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-3">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-3xl p-8 lg:p-10 border border-border-light shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                        >
                            <h3 className="text-2xl font-extrabold text-secondary mb-8">
                                Send us a Message
                            </h3>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-secondary mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        className="w-full px-5 py-3.5 rounded-xl border border-bg-silver bg-bg-silver/40 text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-white transition-all duration-300"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-secondary mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        className="w-full px-5 py-3.5 rounded-xl border border-bg-silver bg-bg-silver/40 text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-white transition-all duration-300"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-bold text-secondary mb-2">
                                    Organization
                                </label>
                                <input
                                    type="text"
                                    value={formData.organization}
                                    onChange={(e) =>
                                        setFormData({ ...formData, organization: e.target.value })
                                    }
                                    className="w-full px-5 py-3.5 rounded-xl border border-bg-silver bg-bg-silver/40 text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-white transition-all duration-300"
                                    placeholder="Your organization name"
                                />
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-bold text-secondary mb-2">
                                    Message
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    className="w-full px-5 py-3.5 rounded-xl border border-bg-silver bg-bg-silver/40 text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-white transition-all duration-300 resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gray-900 to-primary text-white px-8 py-4 rounded-xl text-base font-bold shadow-[0_4px_14px_rgba(236,171,43,0.35)] hover:shadow-[0_8px_25px_rgba(236,171,43,0.5)] hover:-translate-y-1 transition-all duration-300"
                            >
                                Send Message
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
