import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
    {
        quote:
            "DCG's governance advisory transformed our institutional processes. Their deep understanding of the Somali context combined with international best practices delivered remarkable results.",
        name: "Amina Hassan",
        position: "Director, Ministry of Planning",
        rating: 5,
        initials: "AH",
    },
    {
        quote:
            "The capacity building programs designed by Dhiirane Consulting Group significantly improved our team's performance. Their training methodology is practical and culturally sensitive.",
        name: "Mohamed Ali",
        position: "Program Manager, UNDP Somalia",
        rating: 5,
        initials: "MA",
    },
    {
        quote:
            "Working with DCG on our strategic communications was a game-changer. They helped us engage stakeholders effectively and amplify our message across the region.",
        name: "Fatima Omar",
        position: "CEO, East Africa Development Fund",
        rating: 5,
        initials: "FO",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 lg:py-28 bg-bg-silver">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Client Testimonials"
                    subtitle="Hear from the organizations and leaders who have partnered with us."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((t) => (
                        <TestimonialCard key={t.name} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
