// // "use client";
// // import { motion } from "framer-motion";
// // import PauseButton from "./PauseButton";
// // import Magnetic from "./Magnetic";

// // export default function Hero() {
// //   return (
// //     <section
// //       id="home"
// //       className="relative min-h-[84vh] flex flex-col items-center justify-center text-center px-6"
// //     >
// //       <motion.h1
// //         className="headline-gradient text-5xl md:text-7xl font-semibold tracking-tight"
// //         initial={{ opacity: 0, y: 14 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6, ease: "easeOut" }}
// //       >
// //         Apache Superset on Mobile. Business Insights Anywhere.
// //       </motion.h1>

// //       <motion.p
// //         className="mt-4 max-w-2xl text-slate-700 dark:text-slate-300"
// //         initial={{ opacity: 0, y: 10 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
// //       >
// //         Your dashboards, KPIs and alerts now live in your pocket so decisions never have to wait.
// //       </motion.p>

// //       <motion.div
// //         className="mt-6 flex flex-col sm:flex-row gap-3"
// //         initial={{ opacity: 0, y: 8 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
// //       >
// //         <Magnetic>
// //           <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
// //             className="px-5 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900"
// //             href="#cta">
// //             Download on App Store
// //           </motion.a>
// //         </Magnetic>

// //         <Magnetic>
// //           <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
// //             className="px-5 py-3 rounded-full ring-1 ring-black/10 dark:ring-white/15 hover:bg-white/40 dark:hover:bg-white/10"
// //             href="#cta">
// //             Get it on Google Play
// //           </motion.a>
// //         </Magnetic>

// //         <Magnetic>
// //           <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
// //             className="px-5 py-3 rounded-full ring-1 ring-black/10 dark:ring-white/15 hover:bg-white/40 dark:hover:bg-white/10"
// //             href="#features">
// //             Explore the demo
// //           </motion.a>
// //         </Magnetic>
// //       </motion.div>

// //       <div className="mt-8 text-sm text-slate-700 dark:text-slate-400 grid gap-1" data-reveal>
// //         <div className="hr-accent w-24 mx-auto rounded-full" />
// //         <div>Monitor. Explore. Act. Wherever business takes you.</div>
// //         <div className="opacity-80">
// //           Always free for core features · No sign-up hassle—start instantly · Easily extended to meet your unique needs.
// //         </div>
// //       </div>

// //       <PauseButton />
// //     </section>
// //   );
// // }

// // "use client";

// // import { motion } from "framer-motion";
// // import clsx from "clsx";

// // const headline =
// //   "Apache Superset on Mobile. Business Insights Anywhere.";

// // const sub =
// //   "Your dashboards, KPIs and alerts now live in your pocket so decisions never have to wait.";

// // const benefits = [
// //   "Always free for core features",
// //   "No sign-up hassle—start instantly",
// //   "Easily extended to meet your unique needs",
// // ];

// // export default function Hero() {
// //   return (
// //     <section id="cta" aria-label="Hero" className="relative">
// //       {/* spacing: start a little lower than before */}
// //       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-36 pb-16">
// //         {/* Headline */}
// //         <motion.h1
// //           initial={{ opacity: 0, y: 8 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5, ease: "easeOut" }}
// //           className={clsx(
// //             "title-gradient text-4xl sm:text-5xl md:text-6xl lg:text-[64px]",
// //             "font-semibold leading-[1.08] tracking-tight"
// //           )}
// //         >
// //           {headline}
// //         </motion.h1>

// //         {/* Sub-headline */}
// //         <motion.p
// //           initial={{ opacity: 0, y: 8 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
// //           className="mt-6 max-w-3xl text-base sm:text-lg text-slate-700/90 dark:text-slate-300/90 text-elev"
// //         >
// //           {sub}
// //         </motion.p>

// //         {/* CTA row */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 8 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5, delay: 0.14, ease: "easeOut" }}
// //           className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
// //         >
// //           {/* App Store – filled */}
// //           <a
// //             href="#"
// //             className={clsx(
// //               "glow-cta cta-shine",
// //               "inline-flex items-center gap-3 rounded-full px-5 py-3",
// //               "bg-slate-900 text-white shadow-sm",
// //               "dark:bg-white dark:text-slate-900",
// //               "transition will-change-transform active:scale-[.98]"
// //             )}
// //           >
// //             <AppleIcon className="size-5" />
// //             <span className="text-base font-medium">Download on App Store</span>
// //           </a>

// //           {/* Google Play – glass outline */}
// //           <a
// //             href="#"
// //             className={clsx(
// //               "glow-cta cta-shine",
// //               "inline-flex items-center gap-3 rounded-full px-5 py-3",
// //               "glass outline outline-1 outline-slate-900/10 dark:outline-white/10",
// //               "transition will-change-transform active:scale-[.98]"
// //             )}
// //           >
// //             <GooglePlayIcon className="size-5" />
// //             <span className="text-base font-medium">Get it on Google Play</span>
// //           </a>

// //           {/* Demo – glass outline */}
// //           <a
// //             href="#demo"
// //             className={clsx(
// //               "glow-cta cta-shine",
// //               "inline-flex items-center gap-3 rounded-full px-5 py-3",
// //               "glass outline outline-1 outline-slate-900/10 dark:outline-white/10",
// //               "transition will-change-transform active:scale-[.98]"
// //             )}
// //           >
// //             <span className="text-base font-medium">Explore the demo</span>
// //           </a>
// //         </motion.div>

// //         {/* Ticker – continuous, subtle benefit strip */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.4, delay: 0.12 }}
// //           className="mt-10"
// //         >
// //           <Ticker items={benefits} />
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ---------------- Icons (inline SVGs) ---------------- */

// // function AppleIcon({ className }: { className?: string }) {
// //   return (
// //     <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
// //       <path
// //         d="M16.365 12.154c-.013-2.137 1.756-3.154 1.835-3.203-1.003-1.463-2.561-1.66-3.107-1.682-1.322-.133-2.58.77-3.251.77-.671 0-1.707-.75-2.81-.729-1.443.022-2.777.836-3.522 2.12-1.494 2.587-.38 6.405 1.073 8.5.711 1.025 1.558 2.177 2.673 2.135 1.08-.044 1.487-.69 2.789-.69 1.302 0 1.668.69 2.804.667 1.165-.02 1.902-1.045 2.61-2.073.822-1.2 1.163-2.363 1.178-2.423-.026-.009-2.261-.867-2.272-3.392ZM14.174 5.99c.59-.715.987-1.714.879-2.72-.85.034-1.885.566-2.5 1.28-.55.63-1.03 1.64-.902 2.6.955.073 1.934-.485 2.523-1.16Z"
// //         fill="currentColor"
// //       />
// //     </svg>
// //   );
// // }

// // function GooglePlayIcon({ className }: { className?: string }) {
// //   return (
// //     <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
// //       <defs>
// //         <linearGradient id="gp-a" x1="100%" x2="0%" y1="0%" y2="100%">
// //           <stop offset="0%" stopColor="#00EDFF" />
// //           <stop offset="50%" stopColor="#7C4DFF" />
// //           <stop offset="100%" stopColor="#FF4D8D" />
// //         </linearGradient>
// //       </defs>
// //       <path
// //         d="M3.5 2.9a1 1 0 0 0-.5.866v16.468a1 1 0 0 0 1.5.866l11.7-8.234a1 1 0 0 0 0-1.732L4.5 2.9a1 1 0 0 0-1-.001Z"
// //         fill="url(#gp-a)"
// //       />
// //       <path
// //         d="M20.34 8.52 16.1 11.5l-2.1-1.48 3.86-2.72a1 1 0 0 1 1.48.22Z"
// //         fill="#00EDFF"
// //         opacity=".8"
// //       />
// //       <path
// //         d="M20.34 15.48a1 1 0 0 1-1.48.22l-3.86-2.72 2.1-1.48 4.24 2.98Z"
// //         fill="#FF4D8D"
// //         opacity=".8"
// //       />
// //     </svg>
// //   );
// // }

// // /* ---------------- Marquee (ticker) ---------------- */

// // function Ticker({ items }: { items: string[] }) {
// //   // duplicate for seamless loop
// //   const row = [...items, "•", ...items, "•", ...items];

// //   return (
// //     <div
// //       className="ticker glass rounded-full px-4 py-2 text-sm text-slate-700/80 dark:text-slate-200/85"
// //       role="status"
// //       aria-label="Benefits"
// //     >
// //       <div className="ticker__inner">
// //         {row.map((t, i) => (
// //           <span key={i} className="mx-3 whitespace-nowrap">
// //             {t}
// //           </span>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// // hero 3

// // "use client";

// // import { useEffect, useMemo, useState } from "react";
// // import clsx from "clsx";

// // function AppleIcon() {
// //   return (
// //     <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
// //       <path
// //         fill="currentColor"
// //         d="M16.365 1.43c.06.78-.29 1.56-.78 2.15-.56.69-1.5 1.23-2.42 1.15-.07-.77.31-1.57.82-2.16.57-.66 1.58-1.17 2.38-1.14zM20.9 17.2c-.42.98-.62 1.4-1.16 2.26-.75 1.2-1.81 2.7-3.14 2.71-1.17.01-1.48-.78-3.08-.77-1.6.01-1.95.78-3.13.79-1.34.01-2.36-1.3-3.11-2.48-1.7-2.63-3-7.42-1.25-10.66.86-1.55 2.4-2.54 4.06-2.56 1.31-.03 2.55.86 3.08.86.52 0 2.22-1.07 3.74-.91.64.03 2.44.26 3.6 2.02-3.13 1.71-2.63 6.2.39 7.74z"
// //       />
// //     </svg>
// //   );
// // }
// // function PlayTriangle() {
// //   return (
// //     <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
// //       <path fill="currentColor" d="M8 5v14l11-7z" />
// //     </svg>
// //   );
// // }

// // export default function Hero() {
// //   // Detect mobile OS (client side)
// //   const [os, setOs] = useState<"ios" | "android" | "other">("other");
// //   useEffect(() => {
// //     const ua = navigator.userAgent || "";
// //     if (/iPad|iPhone|iPod/i.test(ua)) setOs("ios");
// //     else if (/Android/i.test(ua)) setOs("android");
// //     else setOs("other");
// //   }, []);

// //   const primary = useMemo(() => {
// //     if (os === "ios")
// //       return { href: "#cta", label: "Download on App Store", icon: <AppleIcon /> };
// //     if (os === "android")
// //       return { href: "#cta", label: "Get it on Google Play", icon: <PlayTriangle /> };
// //     return { href: "#cta", label: "Download on App Store", icon: <AppleIcon /> };
// //   }, [os]);

// //   const ctaBase =
// //     "glow-cta cta-shine inline-flex items-center justify-center gap-2 rounded-full h-14 px-6 text-[15px] font-medium transition shadow-sm active:scale-[.98]";

// //   return (
// //     <section id="cta" className="hero-wrap">
// //       <div className="container mx-auto max-w-6xl px-5 md:px-6">
// //         {/* Headline */}
// //         <div className="hero-spot">
// //           <h1 className="text-center leading-[1.06] sm:leading-[1.04]">
// //             <span className="block title-gradient font-extrabold text-[clamp(36px,7vw,64px)]">
// //               Apache Superset on Mobile.
// //             </span>
// //             <span className="block title-gradient font-bold text-[clamp(34px,6.6vw,60px)] mt-1">
// //               Business Insights Anywhere.
// //             </span>
// //           </h1>

// //         {/* Subhead */}
// //         <p className="mt-5 text-center text-[17px] md:text-[18px] text-slate-700/85 dark:text-slate-300/90">
// //           Your dashboards, KPIs and alerts now live in your pocket so decisions never have to wait.
// //         </p>

// //         {/* CTAs */}
// //         <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
// //           <a href={primary.href} className={clsx(ctaBase, "bg-slate-900 text-white dark:bg-white dark:text-slate-900")}>
// //             {primary.icon}
// //             {primary.label}
// //           </a>

// //           <a href="#demo" className={clsx(ctaBase, "glass text-slate-900 dark:text-slate-100")}>
// //             <PlayTriangle />
// //             Explore the demo
// //           </a>
// //         </div>

// //         {/* Fancy ticker strip */}
// //         <div className="mt-7">
// //           <div className="ticker glass rounded-full py-3">
// //             <div className="ticker-track" aria-hidden>
// //               {Array.from({ length: 8 }).map((_, i) => (
// //                 <span key={i} className="ticker-item">
// //                   Always free for core features
// //                 </span>
// //               ))}
// //               {Array.from({ length: 8 }).map((_, i) => (
// //                 <span key={"b" + i} className="ticker-item">
// //                   No sign-up hassle—start instantly
// //                 </span>
// //               ))}
// //               {Array.from({ length: 8 }).map((_, i) => (
// //                 <span key={"c" + i} className="ticker-item">
// //                   Easily extended to meet your unique needs
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// // src/components/Hero.tsx
// // import React from "react";
// // import clsx from "clsx";

// // const MESSAGES = [
// //   "Always free for core features",
// //   "No sign-up hassle—start instantly",
// //   "Easily extended to meet your unique needs",
// // ];

// // function AppleLogo({ className }: { className?: string }) {
// //   return (
// //     <svg
// //       viewBox="0 0 24 24"
// //       aria-hidden="true"
// //       className={className}
// //       fill="currentColor"
// //     >
// //       <path d="M16.365 12.45c-.022-2.239 1.829-3.306 1.913-3.356-1.04-1.516-2.653-1.724-3.225-1.747-1.37-.138-2.67.803-3.364.803-.695 0-1.763-.782-2.9-.76-1.49.022-2.867.864-3.63 2.189-1.548 2.683-.394 6.627 1.107 8.793.735 1.06 1.611 2.244 2.76 2.202 1.107-.043 1.525-.716 2.87-.716 1.343 0 1.72.716 2.902.694 1.2-.022 1.958-1.082 2.692-2.147.848-1.238 1.2-2.437 1.222-2.502-.026-.013-2.344-.899-2.346-3.153ZM13.84 5.57c.61-.743 1.024-1.78.911-2.82-.882.036-1.957.607-2.593 1.35-.57.664-1.063 1.73-.93 2.745.985.076 1.999-.498 2.612-1.275Z" />
// //     </svg>
// //   );
// // }

// // function PlayLogo({ className }: { className?: string }) {
// //   // simple Google Play glyph (triangle with soft gradient)
// //   return (
// //     <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
// //       <defs>
// //         <linearGradient id="gp" x1="0%" y1="0%" x2="100%" y2="100%">
// //           <stop offset="0%" stopColor="#48a6f8" />
// //           <stop offset="50%" stopColor="#8b5cf6" />
// //           <stop offset="100%" stopColor="#f472b6" />
// //         </linearGradient>
// //       </defs>
// //       <path fill="url(#gp)" d="M3 4.7v14.6c0 .4.44.65.78.44l11.8-7.3c.35-.22.35-.67 0-.89L3.78 4.26A.52.52 0 0 0 3 4.7Z" />
// //       <path fill="#34D399" d="m15.7 7.68-2.83 2.06 2.65 1.64 3.34-1.9c.49-.28.49-1 0-1.27l-3.16-1.53Z" />
// //       <path fill="#F59E0B" d="m12.87 14.26 2.83 2.06 3.16-1.54c.49-.24.49-1 0-1.27l-3.34-1.9-2.65 1.65Z" />
// //     </svg>
// //   );
// // }

// // export default function Hero() {
// //   return (
// //     <section
// //       id="cta"
// //       className={clsx(
// //         "hero-section hero-spot",
// //         "container mx-auto px-4 md:px-8",
// //         "min-h-[calc(100svh-110px)] flex flex-col items-center justify-center",
// //         "text-center"
// //       )}
// //     >
// //       {/* Headline */}
// //       <h1 className="leading-[1.04] tracking-tight">
// //         <span className="block title-gradient text-[clamp(36px,6vw,72px)] font-extrabold">
// //           Apache Superset on Mobile.
// //         </span>
// //         <span className="block title-gradient text-[clamp(32px,5.2vw,60px)] font-semibold">
// //           Business Insights Anywhere.
// //         </span>
// //       </h1>

// //       {/* Subhead */}
// //       <p className="mt-6 max-w-3xl text-[clamp(16px,1.8vw,18px)] text-slate-600 dark:text-slate-300">
// //         Your dashboards, KPIs and alerts now live in your pocket so decisions never have to wait.
// //       </p>

// //       {/* CTAs */}
// //       <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
// //         <a
// //           href="#download-ios"
// //           className={clsx(
// //             "h-14 px-6 md:px-8 rounded-full",
// //             "inline-flex items-center gap-3",
// //             "bg-slate-900 text-white dark:bg-white dark:text-slate-900",
// //             "shadow-sm active:scale-[.98] transition",
// //             "glow-cta cta-shine"
// //           )}
// //         >
// //           <AppleLogo className="size-5" />
// //           <span className="font-medium">Download on App Store</span>
// //         </a>

// //         <a
// //           href="#download-android"
// //           className={clsx(
// //             "h-14 px-6 md:px-8 rounded-full",
// //             "inline-flex items-center gap-3",
// //             "glass",
// //             "active:scale-[.98] transition",
// //             "glow-cta cta-shine"
// //           )}
// //         >
// //           <PlayLogo className="size-5" />
// //           <span className="font-medium">Get it on Google Play</span>
// //         </a>

// //         <a
// //           href="#demo"
// //           className={clsx(
// //             "h-14 px-6 md:px-8 rounded-full",
// //             "inline-flex items-center gap-3",
// //             "glass",
// //             "active:scale-[.98] transition",
// //             "glow-cta cta-shine"
// //           )}
// //         >
// //           <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
// //             <path d="M8 5v14l11-7L8 5Z" />
// //           </svg>
// //           <span className="font-medium">Explore the demo</span>
// //         </a>
// //       </div>

// //       {/* Ticker strip */}
// //       <div className="mt-8 w-full max-w-5xl">
// //         <div className="ticker glass rounded-full py-2">
// //           <div className="ticker-track">
// //             {[...Array(2)].map((_, dup) => (
// //               <div className="flex items-center gap-6 pr-6" aria-hidden={dup === 1} key={dup}>
// //                 {MESSAGES.map((msg, i) => (
// //                   <React.Fragment key={`${dup}-${i}`}>
// //                     <span className="text-slate-700/80 dark:text-slate-200/85 text-sm font-medium">
// //                       {msg}
// //                     </span>
// //                     <span className="ticker-dot" />
// //                   </React.Fragment>
// //                 ))}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // "use client";

// // import clsx from "clsx";

// // const TAGS = [
// //   "Always free for core features",
// //   "No sign-up hassle—start instantly",
// //   "Easily extended to meet your unique needs",
// // ];

// // function GradientDot() {
// //   return (
// //     <span
// //       aria-hidden
// //       className="sep-dot"
// //       // a tiny accessible label for screen readers
// //       role="img"
// //     />
// //   );
// // }

// // function StoreIconApple() {
// //   return (
// //     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
// //       <path d="M19.665 16.27c-.33.76-.72 1.43-1.17 2.02-.63.82-1.14 1.38-1.54 1.69-.62.57-1.28.86-1.99.87-.51 0-1.12-.15-1.83-.46-.71-.31-1.36-.46-1.95-.46-.62 0-1.29.15-2 .46-.72.31-1.3.47-1.77.48-.69.03-1.36-.28-2-.93-.43-.39-.96-1.02-1.6-1.89-.69-.93-1.25-2-1.69-3.22-.47-1.34-.7-2.64-.7-3.89 0-1.44.31-2.69.93-3.77.49-.88 1.14-1.58 1.96-2.1.82-.52 1.7-.79 2.65-.81.52 0 1.2.17 2.04.5.84.33 1.38.5 1.63.5.18 0 .79-.19 1.82-.56 1-.36 1.85-.51 2.54-.45 1.88.16 3.3.88 4.25 2.15-1.69 1.02-2.53 2.44-2.53 4.24 0 1.41.53 2.58 1.6 3.52.47.42.99.74 1.56.94-.13.38-.27.74-.42 1.08zM15.66 2.52c0 .67-.25 1.3-.74 1.9-.59.71-1.3 1.14-2.07 1.07a2.5 2.5 0 0 1-.02-.3c0-.64.28-1.28.79-1.86.25-.29.56-.53.93-.72.37-.2.73-.31 1.08-.35.02.09.03.18.03.26z" />
// //     </svg>
// //   );
// // }

// // function StoreIconPlay() {
// //   return (
// //     <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
// //       <path fill="#34A853" d="M1.5 2.7v18.6l10.7-9.3z" />
// //       <path fill="#4285F4" d="M22.5 12L12.2 3.4 1.5 12l10.7 8.6z" />
// //       <path fill="#FBBC05" d="M12.2 3.4L9.2 5.9 18 12l4.5-3.7z" />
// //       <path fill="#EA4335" d="M9.2 18.1l3 2.5L22.5 12 18 12z" />
// //     </svg>
// //   );
// // }

// // export default function Hero() {
// //   return (
// //     <section
// //       id="cta"
// //       className={clsx(
// //         "hero-wrap relative mx-auto",
// //         "min-h-[88svh] max-w-6xl px-4 sm:px-6"
// //       )}
// //     >
// //       <div className="hero-spot" />

// //       {/* Headline */}
// //       <h1 className="mt-10 sm:mt-14 leading-[1.04] tracking-tight text-center">
// //         <span className="block title-gradient font-black text-[clamp(2.2rem,6.5vw,4.2rem)]">
// //           Apache Superset on Mobile.
// //         </span>
// //         <span className="block title-gradient font-semibold text-[clamp(2rem,6vw,3.6rem)]">
// //           Business Insights Anywhere.
// //         </span>
// //       </h1>

// //       {/* Subhead */}
// //       <p className="mx-auto mt-6 max-w-3xl text-center text-[1.05rem] text-slate-600 dark:text-slate-300/80">
// //         Your dashboards, KPIs and alerts now live in your pocket so decisions never have to wait.
// //       </p>

// //       {/* CTAs */}
// //       <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
// //         <a
// //           href="#"
// //           className="glow-cta cta-shine glass inline-flex h-14 items-center gap-3 rounded-full px-6 text-[0.98rem] font-medium shadow-sm hover:opacity-95 active:scale-[.98]"
// //         >
// //           <StoreIconApple />
// //           <span>Download on App&nbsp;Store</span>
// //         </a>

// //         <a
// //           href="#"
// //           className="glow-cta cta-shine glass inline-flex h-14 items-center gap-3 rounded-full px-6 text-[0.98rem] font-medium shadow-sm hover:opacity-95 active:scale-[.98]"
// //         >
// //           <StoreIconPlay />
// //           <span>Get it on Google&nbsp;Play</span>
// //         </a>

// //         <a
// //           href="#demo"
// //           className="glow-cta cta-shine glass inline-flex h-14 items-center justify-center gap-3 rounded-full px-6 text-[0.98rem] font-medium shadow-sm hover:opacity-95 active:scale-[.98]"
// //         >
// //           {/* play caret */}
// //           <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
// //             <path d="M8 5v14l11-7z" />
// //           </svg>
// //           <span>Explore the demo</span>
// //         </a>
// //       </div>

// //       {/* Ticker strip */}
// //       <div className="mx-auto mt-8 w-full max-w-5xl">
// //         <div className="ticker glass rounded-full py-2">
// //           <div className="ticker-track">
// //             {[...Array(2)].map((_, loop) => (
// //               <div className="flex items-center gap-8 px-6" key={loop}>
// //                 {TAGS.map((t, i) => (
// //                   <div className="flex items-center gap-8 text-[0.98rem]" key={`${t}-${i}-${loop}`}>
// //                     <span className="text-slate-700 dark:text-slate-200/90">{t}</span>
// //                     <GradientDot />
// //                   </div>
// //                 ))}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import clsx from "clsx";
// import { ArrowUpRight } from "lucide-react"; // Import the icon

// const TAGS = [
//   "Always free for core features",
//   "No sign-up hassle—start instantly",
//   "Easily extended to meet your unique needs",
// ];

// // ... (GradientDot, StoreIconApple, StoreIconPlay functions remain the same)
// function GradientDot() {
//   return (
//     <span
//       aria-hidden
//       className="sep-dot"
//       role="img"
//     />
//   );
// }

// function StoreIconApple() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//       <path d="M19.665 16.27c-.33.76-.72 1.43-1.17 2.02-.63.82-1.14 1.38-1.54 1.69-.62.57-1.28.86-1.99.87-.51 0-1.12-.15-1.83-.46-.71-.31-1.36-.46-1.95-.46-.62 0-1.29.15-2 .46-.72.31-1.3.47-1.77.48-.69.03-1.36-.28-2-.93-.43-.39-.96-1.02-1.6-1.89-.69-.93-1.25-2-1.69-3.22-.47-1.34-.7-2.64-.7-3.89 0-1.44.31-2.69.93-3.77.49-.88 1.14-1.58 1.96-2.1.82-.52 1.7-.79 2.65-.81.52 0 1.2.17 2.04.5.84.33 1.38.5 1.63.5.18 0 .79-.19 1.82-.56 1-.36 1.85-.51 2.54-.45 1.88.16 3.3.88 4.25 2.15-1.69 1.02-2.53 2.44-2.53 4.24 0 1.41.53 2.58 1.6 3.52.47.42.99.74 1.56.94-.13.38-.27.74-.42 1.08zM15.66 2.52c0 .67-.25 1.3-.74 1.9-.59.71-1.3 1.14-2.07 1.07a2.5 2.5 0 0 1-.02-.3c0-.64.28-1.28.79-1.86.25-.29.56-.53.93-.72.37-.2.73-.31 1.08-.35.02.09.03.18.03.26z" />
//     </svg>
//   );
// }

// function StoreIconPlay() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
//       <path fill="#34A853" d="M1.5 2.7v18.6l10.7-9.3z" />
//       <path fill="#4285F4" d="M22.5 12L12.2 3.4 1.5 12l10.7 8.6z" />
//       <path fill="#FBBC05" d="M12.2 3.4L9.2 5.9 18 12l4.5-3.7z" />
//       <path fill="#EA4335" d="M9.2 18.1l3 2.5L22.5 12 18 12z" />
//     </svg>
//   );
// }


// export default function Hero() {
//   return (
//     <section
//       id="cta"
//       className={clsx(
//         "relative mx-auto flex min-h-screen items-center justify-center",
//         "max-w-6xl px-4 sm:px-6"
//       )}
//     >
//       <div>
//         <div className="hero-spot" />

//         {/* Headline */}
//         <h1 className="leading-[1.04] tracking-tight text-center">
//           <span className="block title-gradient font-black text-[clamp(2.2rem,6.5vw,4.2rem)]">
//             Apache Superset on Mobile.
//           </span>
//           <span className="block title-gradient font-semibold text-[clamp(2rem,6vw,3.6rem)]">
//             Business Insights Anywhere.
//           </span>
//         </h1>

//         {/* Subhead - Increased top margin */}
//         <p className="mx-auto mt-8 max-w-3xl text-center text-[1.05rem] text-slate-600 dark:text-slate-300/80">
//           Your dashboards, KPIs and alerts now live in your pocket so decisions never have to wait.
//         </p>

//         {/* CTAs - Increased top margin */}
//         <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
//           <a
//             href="#"
//             className="glow-cta cta-shine glass inline-flex h-14 items-center gap-3 rounded-full px-6 text-[0.98rem] font-medium shadow-sm hover:opacity-95 active:scale-[.98]"
//           >
//             <StoreIconApple />
//             <span>Download on App&nbsp;Store</span>
//           </a>

//           <a
//             href="#"
//             className="glow-cta cta-shine glass inline-flex h-14 items-center gap-3 rounded-full px-6 text-[0.98rem] font-medium shadow-sm hover:opacity-95 active:scale-[.98]"
//           >
//             <StoreIconPlay />
//             <span>Get it on Google&nbsp;Play</span>
//           </a>

//           {/* === EDITED BUTTON BELOW === */}
//           <a
//             href="https://www.notion.so/glimvia-technical-specification-document-v1-0-2602428418a880c098e5ed4de7269ee9?source=copy_link" // Replace # with your Notion URL
//             target="_blank" // Opens in a new tab
//             rel="noopener noreferrer"
//             className="glow-cta cta-shine glass inline-flex h-14 items-center justify-center gap-3 rounded-full px-6 text-[0.98rem] font-medium shadow-sm hover:opacity-95 active:scale-[.98]"
//           >
//             <span>Technical Specifications</span>
//             <ArrowUpRight size={16} className="opacity-70" />
//           </a>
//           {/* === END OF EDIT === */}
//         </div>

//         {/* Ticker strip - Increased top margin */}
//         <div className="mx-auto mt-12 w-full max-w-5xl">
//           <div className="ticker glass rounded-full py-2">
//             <div className="ticker-track">
//               {[...Array(2)].map((_, loop) => (
//                 <div className="flex items-center gap-8 px-6" key={loop}>
//                   {TAGS.map((t, i) => (
//                     <div className="flex items-center gap-8 text-[0.98rem]" key={`${t}-${i}-${loop}`}>
//                       <span className="text-slate-700 dark:text-slate-200/90">{t}</span>
//                       <GradientDot />
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";
// import { Menu, X, Sun, Moon } from "lucide-react";
// import { useTheme } from "next-themes";

// const LINKS = [
//   { label: "About", href: "#about" },
//   { label: "Features", href: "#features" },
//   { label: "Experience", href: "#experience" },
// ];

// export default function Navbar() {
//   const { resolvedTheme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   const [collapsedIdle, setCollapsedIdle] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const headerRef = useRef<HTMLDivElement>(null);
//   const brandRef  = useRef<HTMLAnchorElement>(null);
//   const overNavRef = useRef(false);
//   const idleT = useRef<number | null>(null);
//   const isTouch = useRef(false);
//   const mobileOpenRef = useRef(false);
//   const [navWidth, setNavWidth] = useState<number | null>(null);

//   useEffect(() => {
//     setMounted(true);
//     isTouch.current = (navigator.maxTouchPoints || 0) > 0;
//   }, []);

//   useEffect(() => { 
//     mobileOpenRef.current = mobileOpen; 
//   }, [mobileOpen]);

//   const isDark = mounted ? resolvedTheme === "dark" : false;

//   const measureAndSetWidth = (collapse: boolean) => {
//     const header = headerRef.current;
//     if (!header) return;

//     const fullW = Math.min(1100, Math.floor(window.innerWidth * 0.92));
//     const brandW = brandRef.current?.getBoundingClientRect().width ?? 0;
//     const styles = getComputedStyle(header);
//     const pad =
//       parseFloat(styles.paddingLeft || "0") +
//       parseFloat(styles.paddingRight || "0");
//     const collapsedW = Math.ceil(brandW + pad + 4);
//     setNavWidth(collapse ? collapsedW : fullW);
//   };

//   useEffect(() => {
//     const onResize = () => measureAndSetWidth(collapsedIdle);
//     onResize();
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, [collapsedIdle]);

//   const armIdleTimer = () => {
//     if (isTouch.current) return;
//     if (idleT.current) window.clearTimeout(idleT.current);
//     idleT.current = window.setTimeout(() => {
//       if (!overNavRef.current && !mobileOpenRef.current) setCollapsedIdle(true);
//     }, 2200) as unknown as number;
//   };

//   const cancelIdle = () => {
//     setCollapsedIdle(false);
//     if (idleT.current) window.clearTimeout(idleT.current);
//     armIdleTimer();
//   };

//   useEffect(() => {
//     if (isTouch.current) return;
//     armIdleTimer();
//     const onActivity = () => cancelIdle();
//     const events: (keyof WindowEventMap)[] = [
//       "mousemove", "pointermove", "keydown", "scroll", "pointerdown", "wheel", "touchstart"
//     ];
//     events.forEach((e) => window.addEventListener(e, onActivity, { passive: true }));
//     return () => events.forEach((e) => window.removeEventListener(e, onActivity));
//   }, []);

//   const ctaClass = clsx(
//     "glow-cta cta-shine rounded-full px-3.5 py-1.5 text-sm transition shadow-sm hover:opacity-95 active:scale-[.98]",
//     isDark ? "bg-white text-slate-900" : "bg-slate-900 text-white"
//   );

//   return (
//     <>
//       <header
//         ref={headerRef}
//         className={clsx(
//           "fixed top-3 z-40 rounded-2xl px-3 sm:px-4 py-2",
//           "glass glass-nav",
//           "transition-[width,left,transform] duration-300 ease-out",
//           collapsedIdle ? "left-4 -translate-x-0" : "left-1/2 -translate-x-1/2"
//         )}
//         style={{ width: navWidth ? `${navWidth}px` : undefined }}
//         aria-label="Primary"
//         onMouseEnter={() => { overNavRef.current = true; cancelIdle(); }}
//         onMouseLeave={() => { overNavRef.current = false; armIdleTimer(); }}
//       >
//         <nav className="flex items-center justify-between gap-3">
//           <a
//             ref={brandRef}
//             href="#cta"
//             className="font-semibold tracking-tight text-sm sm:text-base"
//             aria-label="Glimvia — back to top"
//           >
//             Glimvia
//           </a>

//           <ul
//             className={clsx(
//               "hidden md:flex items-center justify-center gap-5 lg:gap-7 text-sm transition-opacity",
//               collapsedIdle ? "opacity-0 pointer-events-none" : "opacity-100"
//             )}
//           >
//             {LINKS.map((l) => (
//               <li key={l.href}>
//                 <a href={l.href} className="link-ux opacity-90 hover:opacity-100 transition">
//                   {l.label}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <div
//             className={clsx(
//               "hidden md:flex items-center gap-2 transition-opacity",
//               collapsedIdle ? "opacity-0 pointer-events-none" : "opacity-100"
//             )}
//           >
//             <a href="#download" className={ctaClass}>Get the app</a>
//             <button
//               type="button"
//               aria-label="Toggle theme"
//               onClick={() => setTheme(isDark ? "light" : "dark")}
//               className="inline-flex items-center justify-center size-9 rounded-xl glass active:scale-[.98] transition"
//               title={isDark ? "Switch to light" : "Switch to dark"}
//             >
//               {!mounted ? (
//                 <span aria-hidden className="block size-4 rounded-full bg-slate-400/60" />
//               ) : isDark ? (
//                 <Sun size={16} />
//               ) : (
//                 <Moon size={16} />
//               )}
//             </button>
//           </div>

//           <button
//             aria-label="Open menu"
//             className={clsx(
//               "md:hidden size-9 rounded-xl glass flex items-center justify-center active:scale-[.98] transition",
//               collapsedIdle ? "opacity-0 pointer-events-none" : "opacity-100"
//             )}
//             onClick={() => setMobileOpen(true)}
//           >
//             <Menu size={18} />
//           </button>
//         </nav>
//       </header>

//       {/* MOBILE OVERLAY MENU */}
//       <div
//         className={clsx(
//           "md:hidden fixed inset-0 z-40 transition",
//           mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//         )}
//         aria-hidden={!mobileOpen}
//       >
//         <div className="absolute inset-0 glass glass-strong" />

//         <button
//           aria-label="Close menu"
//           className="absolute top-4 right-4 size-10 rounded-xl glass flex items-center justify-center active:scale-[.98] transition"
//           onClick={() => setMobileOpen(false)}
//         >
//           <X size={18} />
//         </button>

//         <div className="absolute left-1/2 -translate-x-1/2 top-[18vh] w-[min(92vw,520px)] text-center">
//           <ul className="rounded-xl overflow-hidden bg-transparent text-lg font-medium text-center divide-y divide-black/10 dark:divide-white/15">
//             {LINKS.map((l, idx) => (
//               <li key={l.href} style={{ animationDelay: `${idx * 60}ms` }}>
//                 <a
//                   href={l.href}
//                   onClick={() => setMobileOpen(false)}
//                   className="block py-3 px-6 link-ux"
//                 >
//                   {l.label}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* === CODE RESTORED BELOW === */}
//           <div className="mt-8" style={{ animationDelay: `${LINKS.length * 60}ms` }}>
//             <button
//               onClick={() => setTheme(isDark ? "light" : "dark")}
//               className="inline-flex items-center gap-2 rounded-full px-4 py-2 glass active:scale-[.98] transition"
//               aria-label="Toggle theme"
//               title={isDark ? "Switch to light" : "Switch to dark"}
//             >
//               {mounted ? (isDark ? <Sun size={16} /> : <Moon size={16} />) : <span className="size-4 rounded-full bg-slate-400/60" />}
//               <span className="text-sm">{mounted ? (isDark ? "Light mode" : "Dark mode") : "Theme"}</span>
//             </button>
//           </div>

//           <div className="mt-6" style={{ animationDelay: `${(LINKS.length + 1) * 60}ms` }}>
//             <a
//               href="#download"
//               onClick={() => setMobileOpen(false)}
//               className={clsx("inline-block", ctaClass)}
//             >
//               Get the app
//             </a>
//           </div>
//           {/* === END OF RESTORED CODE === */}

//         </div>
//       </div>
//     </>
//   );
// }


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