import type { Metadata } from "next";
import ContactSection from "@/sections/ContactSection";

export const metadata: Metadata = {
    title: "Contact | Dhiirane Consulting Group",
    description:
        "Get in touch with Dhiirane Consulting Group. Headquarters in Mogadishu, Somalia. Expert consulting services for governance and development.",
};

export default function ContactPage() {
    return <ContactSection />;
}
