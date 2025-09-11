import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Experience from "@/components/Experience";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import TrustBridge from "@/components/TrustBridge";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Experience />
      <Roadmap />
      <FAQ />
      <TrustBridge />
      <section id="download" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="glass p-6 md:p-8 rounded-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Open your data in Glimvia</h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">Take your analytics anywhere.</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <a className="px-5 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900" href="#">
              Download on App Store
            </a>
            <a className="px-5 py-3 rounded-full ring-1 ring-black/10 dark:ring-white/15" href="#">
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>
    </>
  );
}