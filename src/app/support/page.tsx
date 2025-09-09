import SupportForm from "@/components/SupportForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Glimvia",
};

export default function SupportPage() {
  return <SupportForm />;
}