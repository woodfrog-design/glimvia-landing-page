export const dynamic = 'force-dynamic';

import PrivacyNotice from "@/components/PrivacyNotice";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice — Glimvia",
  description: "Learn how we protect your privacy and handle your data.",
};

export default function PrivacyPage() {
  return <PrivacyNotice />;
}