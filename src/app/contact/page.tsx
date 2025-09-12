export const dynamic = 'force-dynamic';
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Glimvia",
  description: "Get in touch with our team for any questions or inquiries.",
};

export default function ContactPage() {
  return <ContactForm />;
}