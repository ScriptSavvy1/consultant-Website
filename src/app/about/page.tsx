import type { Metadata } from "next";
import AboutSection from "@/sections/AboutSection";

export const metadata: Metadata = {
    title: "About | Dhiirane Consulting Group",
    description:
        "Learn about Dhiirane Consulting Group — a Somali-rooted consulting firm strengthening governance and development across Somalia and East Africa since 2020.",
};

export default function AboutPage() {
    return <AboutSection />;
}
