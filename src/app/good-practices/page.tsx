import type { Metadata } from "next";
import GoodPracticesSection from "@/sections/GoodPracticesSection";

export const metadata: Metadata = {
    title: "Good Practices | Dhiirane Consulting Group",
    description:
        "DCG's professional standards: Ethics & Integrity, Conflict of Interest Firewalls, Quality Assurance, Security & Data Protection, Donor Compliance, and Financial Controls.",
};

export default function GoodPracticesPage() {
    return <GoodPracticesSection />;
}
