import type { Metadata } from "next";
import ServicesSection from "@/sections/ServicesSection";

export const metadata: Metadata = {
    title: "Services | Dhiirane Consulting Group",
    description:
        "Explore DCG's consulting services: Governance Advisory, Strategic Communications, Training & Capacity Building, Policy Research, and Procurement Support.",
};

export default function ServicesPage() {
    return <ServicesSection />;
}
