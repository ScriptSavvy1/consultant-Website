import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Dhiirane Consulting Group",
    description:
        "Dhiirane Consulting Group's privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <section className="py-20 lg:py-28 bg-bg-silver">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-heading text-secondary mb-4">
                    Privacy Policy
                </h1>
                <p className="text-text-light text-sm mb-12">
                    Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>

                <div className="prose prose-lg max-w-none space-y-8 text-text-body">
                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">1. Introduction</h2>
                        <p className="leading-relaxed">
                            Dhiirane Consulting Group (&quot;DCG,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website at dhiiranegroup.com.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">2. Information We Collect</h2>
                        <p className="leading-relaxed mb-3">
                            We collect information you voluntarily provide through our contact form, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Your name</li>
                            <li>Email address</li>
                            <li>Organization or company name (if provided)</li>
                            <li>Message content and subject matter</li>
                        </ul>
                        <p className="leading-relaxed mt-3">
                            We do not use cookies for tracking purposes. Basic server logs may record your IP address, browser type, and access times for security and performance monitoring.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">3. How We Use Your Information</h2>
                        <p className="leading-relaxed mb-3">We use the information you provide to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Respond to your inquiries and requests</li>
                            <li>Provide consulting information relevant to your needs</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">4. Data Sharing</h2>
                        <p className="leading-relaxed">
                            We do not sell, trade, or rent your personal information to third parties. We may share data only when required by law or to protect our legal rights.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">5. Data Security</h2>
                        <p className="leading-relaxed">
                            We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">6. Data Retention</h2>
                        <p className="leading-relaxed">
                            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">7. Your Rights</h2>
                        <p className="leading-relaxed mb-3">You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Request access to the personal data we hold about you</li>
                            <li>Request correction or deletion of your personal data</li>
                            <li>Object to or restrict the processing of your data</li>
                        </ul>
                        <p className="leading-relaxed mt-3">
                            To exercise any of these rights, please contact us at{" "}
                            <a href="mailto:Dhiiranegroup@gmail.com" className="text-primary hover:underline">
                                Dhiiranegroup@gmail.com
                            </a>.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">8. Changes to This Policy</h2>
                        <p className="leading-relaxed">
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">9. Contact Us</h2>
                        <p className="leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at{" "}
                            <a href="mailto:Dhiiranegroup@gmail.com" className="text-primary hover:underline">
                                Dhiiranegroup@gmail.com
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
