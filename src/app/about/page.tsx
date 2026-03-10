import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "About | Dhiirane Group",
    description:
        "Learn about Dhiirane Group — a multidisciplinary platform organization dedicated to building ideas, institutions, and enterprises that create lasting social and economic value.",
};

const areasOfWork = [
    "Strategic advisory and institutional consulting",
    "Policy research and knowledge production",
    "Conferences, forums, and dialogue platforms",
    "Community initiatives and development programs",
    "Training, education, and leadership development",
    "Media, communications, and public engagement",
    "Investment, business incubation, and enterprise development",
];

export default function AboutPage() {
    return (
        <main>
            {/* Hero Section for About Page */}
            <section className="bg-gradient-to-br from-secondary to-primary-dark text-white py-24 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
                            About Dhiirane Group
                        </h1>
                        <p className="text-lg text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                            Building ideas, institutions, and enterprises that create lasting social and economic value.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Text Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-secondary mb-8">
                                A Multidisciplinary Platform
                            </h2>
                            <p className="text-text-body text-lg leading-relaxed">
                                Dhiirane Group is a multidisciplinary platform organization dedicated to building ideas, institutions, and enterprises that create lasting social and economic value.
                            </p>
                            <p className="text-text-body text-lg leading-relaxed">
                                The group operates as an umbrella structure that brings together a diverse portfolio of initiatives, businesses, and programs across multiple sectors. These range from strategic advisory and consultancy services to research, policy dialogue, innovation projects, community programs, and business ventures.
                            </p>
                            <p className="text-text-body text-lg leading-relaxed">
                                At its core, Dhiirane Group serves as a hub for knowledge, collaboration, and enterprise development, connecting experts, institutions, businesses, and communities to solve complex challenges and unlock new opportunities.
                            </p>
                            <div className="pt-6 border-t border-border-light mt-8">
                                <p className="text-text-body text-lg leading-relaxed font-medium">
                                    By integrating expertise from multiple disciplines, Dhiirane Group creates solutions that combine strategy, research, innovation, and real-world implementation.
                                </p>
                            </div>
                            <div className="bg-bg-silver p-8 rounded-2xl mt-8 border border-border-light">
                                <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
                                <p className="text-text-body italic leading-relaxed">
                                    "To become a leading platform for ideas, enterprise, and societal transformation, operating across sectors and regions while empowering institutions, communities, and entrepreneurs to grow and thrive."
                                </p>
                            </div>
                        </div>

                        {/* Subsidiaries and Units */}
                        <div className="bg-bg-silver rounded-3xl p-8 lg:p-12 border border-border-light shadow-sm">
                            <h3 className="text-2xl font-bold text-secondary mb-6">
                                Specialized Units & Areas of Work
                            </h3>
                            <p className="text-text-body mb-8">
                                Through its various subsidiaries and specialized units, the group works across areas such as:
                            </p>
                            <ul className="space-y-5">
                                {areasOfWork.map((area, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary mt-0.5">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-text-dark font-medium leading-relaxed pt-1">
                                            {area}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
