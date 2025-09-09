import { type ElementType } from "react";
import {
  Smartphone,
  Activity,
  KeyRound,
  SlidersHorizontal,
  Heart,
} from "lucide-react";

export type AboutSlide = {
  id: string;
  title: string;
  body: string;
  icon: ElementType;
  image: string; // Path to your screenshot in /public/about/
};

// Using Ananta's copy for the cards
export const aboutSlides: AboutSlide[] = [
  {
    id: "mobile-first",
    title: "Mobile-First Design",
    body: "Enjoy Apache Superset in a sleek, responsive interface made for mobile. Dashboards, filters, and drilldowns optimized for your fingertips.",
    icon: Smartphone,
    image: "/about/mobile-first.png",
  },
  {
    id: "real-time",
    title: "Real-Time Insights",
    body: "Stay ahead with instant updates, live dashboards, and push notifications—keeping your KPIs and metrics always within reach.",
    icon: Activity,
    image: "/about/real-time.png",
  },
  {
    id: "easy-setup",
    title: "Easy Setup",
    body: "Connect your existing Apache Superset instance in minutes with secure login. No complex setup or extra sign-ups required.",
    icon: KeyRound,
    image: "/about/easy-setup.png",
  },
  {
    id: "customizable",
    title: "Customizable & Extendable",
    body: "We extend Glimvia quickly and cost-effectively to fit your needs. Add features, adjust views, and personalize your analytics experience.",
    icon: SlidersHorizontal,
    image: "/about/customizable.png",
  },
  {
    id: "free-user",
    title: "Free & User-Focused",
    body: "Offered free of charge, Glimvia is designed with users in mind and continuously improved based on user feedback.",
    icon: Heart,
    image: "/about/free.png",
  },
];