"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
    name: string;
    email: string;
    organization: string;
    message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
    const { name, email, organization, message } = formData;

    // Basic validation
    if (!name || !email || !message) {
        return { success: false, error: "Please fill in all required fields." };
    }

    try {
        await resend.emails.send({
            from: "Dhiirane Group <contact@dhiiranegroup.com>",
            to: ["dhiiranegroup@gmail.com"],
            replyTo: email,
            subject: `New message from ${name}`,
            html: `
                <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #E2E8F0;">
                    <div style="background: linear-gradient(135deg, #0A2540, #ecab2b); padding: 32px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">New Contact Message</h1>
                        <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Dhiirane Consulting Group Website</p>
                    </div>
                    <div style="padding: 32px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #0A2540; width: 140px;">Name</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; color: #4A5568;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #0A2540;">Email</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; color: #4A5568;">
                                    <a href="mailto:${email}" style="color: #ecab2b; text-decoration: none;">${email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #0A2540;">Organization</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; color: #4A5568;">${organization || "Not specified"}</td>
                            </tr>
                        </table>
                        <div style="margin-top: 24px;">
                            <h3 style="color: #0A2540; font-size: 14px; font-weight: 600; margin: 0 0 8px;">Message</h3>
                            <div style="background: #F8F9FA; border-radius: 8px; padding: 16px; color: #4A5568; line-height: 1.7; white-space: pre-wrap;">${message}</div>
                        </div>
                    </div>
                    <div style="background: #F8F9FA; padding: 16px 32px; text-align: center; border-top: 1px solid #E2E8F0;">
                        <p style="margin: 0; color: #718096; font-size: 12px;">This message was sent from the DCG website contact form.</p>
                    </div>
                </div>
            `,
        });

        return { success: true };
    } catch (error) {
        console.error("Failed to send email:", error);
        return { success: false, error: "Failed to send message. Please try again later." };
    }
}
