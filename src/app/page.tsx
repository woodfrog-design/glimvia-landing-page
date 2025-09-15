// app/page.tsx

import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Experience from "@/components/Experience";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import DownloadCTA from "@/components/DownloadCTA";
import ContactWidget from "@/components/ContactWidget";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Experience />
      <Roadmap />

      {/* Smart, theme-aware, device-aware store badges */}
      <DownloadCTA />

      <FAQ />

      {/* Floating Contact Widget */}
      <ContactWidget />
    </>
  );
}
