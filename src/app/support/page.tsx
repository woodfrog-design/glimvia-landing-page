export const dynamic = 'force-dynamic';
import SupportTicket from "@/components/SupportTicket";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Ticket — Glimvia",
  description: "Submit a support ticket for bugs, feature requests, or general queries about Glimvia.",
};

export default function SupportPage() {
  return <SupportTicket />;
}