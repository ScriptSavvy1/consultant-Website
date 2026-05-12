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
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Column: Text Content */}
                    <div>
                        <SectionHeader
                            title="Who We Are"
                            align="left"
                        />
                        <div className="space-y-6 mt-8">
                            <p className="text-text-body text-lg leading-relaxed">
                                Dhiirane Group is a multidisciplinary platform organization dedicated to building ideas, institutions, and enterprises that create lasting social and economic value.
                            </p>
                            <p className="text-text-body text-lg leading-relaxed">
                                The group operates as an umbrella structure that brings together a diverse portfolio of initiatives, businesses, and programs across multiple sectors. These range from strategic advisory and consultancy services to research, policy dialogue, innovation projects, community programs, and business ventures.
                            </p>
                            <div className="pl-6 border-l-4 border-primary italic text-text-body mt-8">
                                <p className="leading-relaxed">
                                    At its core, Dhiirane Group serves as a hub for knowledge, collaboration, and enterprise development, connecting experts, institutions, businesses, and communities to solve complex challenges and unlock new opportunities.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Mission / Vision / Value Cards */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -rotate-3 scale-105 z-0"></div>
                        <div className="relative z-10 grid gap-6">
                            {cards.map((card, index) => (
                                <div
                                    key={card.title}
                                    className={`bg-white rounded-2xl p-6 border border-border-light shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex gap-5 items-start ${index === 1 ? 'lg:translate-x-8' : ''}`}
                                >
                                    <div className="w-14 h-14 shrink-0 rounded-xl bg-accent flex items-center justify-center text-primary">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-secondary mb-2">
                                            {card.title}
                                        </h3>
                                        <p className="text-text-body text-sm leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
