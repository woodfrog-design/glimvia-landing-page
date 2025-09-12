export const dynamic = 'force-dynamic';
import TermsAndConditions from "@/components/TermsAndConditions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions — Glimvia",
  description: "Read our terms of service and usage guidelines.",
};

export default function TermsPage() {
  return <TermsAndConditions />;
}