import SectionHeader from "@/components/SectionHeader";

const cards = [
    {
        icon: (
            <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
            </svg>
        ),
        title: "Our Mission",
        description:
            "Empower institutions through locally informed, sustainable solutions that drive lasting change across Somalia and East Africa.",
    },
    {
        icon: (
            <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        ),
        title: "Our Vision",
        description:
            "A stable and prosperous Somalia and East Africa strengthened by transparent governance and inclusive development.",
    },
    {
        icon: (
            <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
            </svg>
        ),
        title: "Value Proposition",
        description:
            "Local insight, global expertise. We bridge the gap between international best practices and on-the-ground realities.",
    },
];

export default function AboutSection() {
    return (
        <section className="py-20 lg:py-28 bg-bg-silver">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Who We Are"
                    subtitle="Bridging local knowledge with global standards to create sustainable impact across East Africa."
                />

                {/* About Text */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-text-body leading-relaxed mb-4">
                        Dhiirane Consulting Group (DCG) is a Somali-rooted consulting firm
                        founded in 2020 to strengthen governance and development across
                        Somalia and East Africa. DCG was established by experienced
                        professionals from government, NGOs, and international development
                        sectors.
                    </p>
                    <p className="text-text-body leading-relaxed">
                        The firm brings together public, private, and civil society
                        stakeholders to deliver sustainable impact through strategic advisory
                        and capacity-building.
                    </p>
                </div>

                {/* Mission / Vision / Value Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="bg-white rounded-2xl p-7 border border-border-light shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(27,110,194,0.1)] transition-all duration-300 hover:-translate-y-1 text-center"
                        >
                            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-primary mx-auto mb-5">
                                {card.icon}
                            </div>
                            <h3 className="text-lg font-bold text-secondary mb-3">
                                {card.title}
                            </h3>
                            <p className="text-text-body text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
