import SuggestionForm from "@/components/SuggestionForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feature Suggestions — Glimvia",
  description: "Share your ideas to help improve Glimvia.",
};

export default function SuggestionPage() {
  return <SuggestionForm />;
}