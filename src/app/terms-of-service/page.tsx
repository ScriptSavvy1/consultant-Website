import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Dhiirane Consulting Group",
    description:
        "Dhiirane Consulting Group's terms of service — the terms governing your use of our website and services.",
};

export default function TermsOfServicePage() {
    return (
        <section className="py-20 lg:py-28 bg-bg-silver">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-heading text-secondary mb-4">
                    Terms of Service
                </h1>
                <p className="text-text-light text-sm mb-12">
                    Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>

                <div className="prose prose-lg max-w-none space-y-8 text-text-body">
                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">1. Acceptance of Terms</h2>
                        <p className="leading-relaxed">
                            By accessing and using the Dhiirane Consulting Group (&quot;DCG&quot;) website at dhiiranegroup.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">2. Services Description</h2>
                        <p className="leading-relaxed">
                            DCG provides consulting, advisory, training, and capacity-building services primarily in Somalia and East Africa. The information on this website is for general informational purposes and does not constitute professional advice. Specific engagements are governed by separate service agreements.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">3. Intellectual Property</h2>
                        <p className="leading-relaxed">
                            All content on this website — including text, graphics, logos, images, and design elements — is the property of Dhiirane Consulting Group and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our prior written consent.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">4. Use of Website</h2>
                        <p className="leading-relaxed mb-3">You agree not to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Use the website for any unlawful purpose</li>
                            <li>Attempt to gain unauthorized access to any part of the website</li>
                            <li>Interfere with or disrupt the website&apos;s operation</li>
                            <li>Transmit any harmful code or malicious content</li>
                            <li>Collect or harvest personal information of other users</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">5. Contact Form Submissions</h2>
                        <p className="leading-relaxed">
                            When you submit information through our contact form, you acknowledge that the information provided is accurate and that you consent to DCG using this information to respond to your inquiry. Submitting a contact form does not create a client-consultant relationship.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">6. Disclaimer of Warranties</h2>
                        <p className="leading-relaxed">
                            This website is provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either express or implied. DCG does not guarantee that the website will be uninterrupted, error-free, or free of harmful components.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">7. Limitation of Liability</h2>
                        <p className="leading-relaxed">
                            To the fullest extent permitted by law, DCG shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">8. External Links</h2>
                        <p className="leading-relaxed">
                            Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of those external sites.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">9. Modifications</h2>
                        <p className="leading-relaxed">
                            DCG reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website constitutes acceptance of the updated terms.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">10. Governing Law</h2>
                        <p className="leading-relaxed">
                            These Terms of Service shall be governed by and construed in accordance with the laws of the Federal Republic of Somalia.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading text-secondary mb-3">11. Contact Us</h2>
                        <p className="leading-relaxed">
                            For questions about these Terms of Service, please contact us at{" "}
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
