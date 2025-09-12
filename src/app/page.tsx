// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Features from "@/components/Features";
// import Experience from "@/components/Experience";
// import Roadmap from "@/components/Roadmap";
// import FAQ from "@/components/FAQ";
// import ContactForm from "@/components/ContactForm";

// export default function Page() {
//   return (
//     <>
//       <Hero />
//       <About />
//       <Features />
//       <Experience />
//       <Roadmap />
      
//       {/* Call to Action Section with download anchor */}
//       <section id="download" className="max-w-6xl mx-auto px-4 md:px-6 pb-0">
//         <div className="glass p-6 md:p-8 rounded-2xl text-center">
//           <h2 className="text-2xl md:text-3xl font-semibold">Open your data in Glimvia</h2>
//           <p className="mt-2 text-slate-700 dark:text-slate-300">Take your analytics anywhere.</p>
//           <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
//             <a 
//               className="px-5 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-95 transition" 
//               href="#"
//             >
//               Download on App Store
//             </a>
//             <a 
//               className="px-5 py-3 rounded-full ring-1 ring-black/10 dark:ring-white/15 hover:bg-slate-50 dark:hover:bg-slate-800 transition" 
//               href="#"
//             >
//               Get it on Google Play
//             </a>
//           </div>
//         </div>
//       </section>
      
//       <FAQ />
//       <ContactForm />
//     </>
//   );
// }


// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Experience from "@/components/Experience";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import DownloadCTA from "@/components/DownloadCTA";

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
      <ContactForm />
    </>
  );
}
