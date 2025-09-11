"use client";

import clsx from "clsx";
import { ArrowUpRight, Gift, Zap, Scaling } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

// The three points for the ticker
const TAGS = [
  { text: "Always free for core features", icon: <Gift size={16} /> },
  { text: "No sign-up hassle—start instantly", icon: <Zap size={16} /> },
  { text: "Easily extended to meet your unique needs", icon: <Scaling size={16} /> },
];

export default function Hero() {
  // Added the new "glass-button" class for the dark mode fix
  const buttonClasses = "glow-cta cta-shine glass glass-button inline-flex items-center justify-center h-14 rounded-full px-6 text-[0.98rem] font-medium shadow-sm hover:opacity-95 active:scale-[.98]";

  return (
    <section id="cta" className="relative mx-auto min-h-screen max-w-6xl px-4 sm:px-6">
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="hero-spot" />
        <h1 className="leading-[1.04] tracking-tight text-center">
          <span className="block title-gradient font-black text-[clamp(1.8rem,8vw,4.2rem)]">
            Apache Superset on Mobile.
          </span>
          <span className="block title-gradient font-semibold text-[clamp(1.7rem,7vw,3.6rem)]">
            Business Insights Anywhere.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-center text-[1.05rem] opacity-80">
          Your dashboards, KPIs and alerts now live in your pocket so decisions never have to wait.
        </p>
        
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className={buttonClasses}>
            <FaApple size={18} />
            <span>Download on App&nbsp;Store</span>
          </a>
          <a href="#" className={buttonClasses}>
            <FaGooglePlay size={18} />
            <span>Get it on Google&nbsp;Play</span>
          </a>
          <a href="https://www.notion.so/glimvia-technical-specification-document-v1-0-2602428418a880c098e5ed4de7269ee9" target="_blank" rel="noopener noreferrer" className={buttonClasses}>
            <span>Technical Specifications</span>
            <ArrowUpRight size={16} className="opacity-70" />
          </a>
        </div>

        <div className="mx-auto mt-12 w-full max-w-5xl">
          <div className="ticker glass rounded-full py-3 px-4">
            <div className="ticker-track">
              {[...TAGS, ...TAGS].map((tag, index) => (
                <div key={index} className="flex items-center gap-2 mx-4">
                  {tag.icon}
                  <span className="text-sm opacity-90 whitespace-nowrap">
                    {tag.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

