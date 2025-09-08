// "use client";

// import { useRef, useMemo } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import clsx from "clsx";
// import PhoneMock from "./about/PhoneMock";
// import { aboutSlides } from "./about/aboutData";

// /**
//  * Split-screen About:
//  * - Left: horizontal card track, one card per scroll step (snapped)
//  * - Right: sticky phone, crossfades to active slide screenshot
//  * - Section stays pinned until all slides are viewed
//  */
// export default function About() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   // Track progress while scrolling THIS section (0 → 1)
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   const N = aboutSlides.length;
//   const clamped = useTransform(scrollYProgress, (v) =>
//     Math.min(0.9999, Math.max(0, v))
//   );

//   // Convert 0..1 progress to 0..(N-1), then snap to nearest integer step.
//   const stepIndexRaw = useTransform(clamped, (v) => v * (N - 1));
//   const stepIndex = useTransform(stepIndexRaw, (v) => Math.round(v));

//   // Drive the horizontal track: translate by full-width steps (-0%, -100%, -200%...)
//   const xSteps = useTransform(stepIndex, (i) => `-${i * 100}%`);
//   // Add a touch of spring so each snap feels premium.
//   const x = useSpring(xSteps, { stiffness: 260, damping: 32, mass: 0.7 });

//   // Screen opacities for PhoneMock (exactly one visible at a time)
//   const screenOpacities = useMemo(
//     () => aboutSlides.map((_, i) => useTransform(stepIndex, (idx) => (idx === i ? 1 : 0))),
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [N]
//   );

//   return (
//     <section
//       id="about"
//       ref={sectionRef}
//       // Height: one full viewport per card so the section "freezes" until we finish.
//       style={{ height: `${N * 100}vh` }}
//       className="relative"
//       aria-label="About Glimvia"
//     >
//       {/* Sticky viewport */}
//       <div className="sticky top-0 h-screen flex items-center">
//         <div className="mx-auto flex w-full max-w-7xl items-center gap-6 lg:gap-10 px-4 sm:px-6">
//           {/* LEFT: Track viewport (≈40%) */}
//           <div className="basis-[40%] min-w-0">
//             <div className="relative w-full overflow-hidden">
//               <motion.div
//                 className="flex w-full"
//                 style={{ x, willChange: "transform" }}
//               >
//                 {aboutSlides.map((slide, idx) => (
//                   <div
//                     key={slide.id}
//                     // Each slide takes full width of the left viewport (so 100% steps align perfectly)
//                     className="w-full shrink-0 px-1 sm:px-2"
//                   >
//                     <article
//                       className={clsx(
//                         "glass rounded-2xl p-5 sm:p-6 md:p-7",
//                         "text-slate-900 dark:text-slate-50"
//                       )}
//                     >
//                       <header className="mb-3 flex items-center gap-3">
//                         <span className="inline-flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-200 via-violet-200 to-pink-200 dark:from-sky-600/20 dark:via-violet-600/20 dark:to-pink-600/20">
//                           <slide.icon className="size-4 text-slate-800 dark:text-slate-200" />
//                         </span>
//                         <p className="uppercase tracking-[.20em] text-[11px] md:text-xs text-slate-700/80 dark:text-slate-300/80">
//                           {slide.kicker}
//                         </p>
//                       </header>

//                       <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-50">
//                         {slide.title}
//                       </h3>

//                       <p className="mt-3 text-base leading-relaxed text-slate-700/90 dark:text-slate-300/90">
//                         {slide.body}
//                       </p>

//                       {/* Progress hint bar */}
//                       <div className="mt-6">
//                         <div className="h-1.5 w-full rounded-full bg-slate-900/5 dark:bg-white/10 overflow-hidden">
//                           <div
//                             className={clsx(
//                               "h-full rounded-full",
//                               "bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400"
//                             )}
//                             style={{ width: `${(idx <= (typeof window !== "undefined" ? 9999 : 0) ? 100 : 0)}%` }}
//                             // note: purely decorative; real progress is via snapping
//                           />
//                         </div>
//                       </div>
//                     </article>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>

//           {/* RIGHT: Sticky Phone (≈60%), slight tilt */}
//           <div className="basis-[60%] relative flex items-center justify-center">
//             <div className="w-[min(62vw,560px)] rotate-[-2deg]">
//               <PhoneMock screens={aboutSlides} opacities={screenOpacities} />
//             </div>
//           </div>
//         </div>

//         {/* Title & intro pinned at very top-left (optional). Remove if not needed. */}
//         <div className="pointer-events-none absolute left-0 right-0 top-8">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6">
//             <div className="text-left">
//               <p className="uppercase tracking-[.22em] text-[11px] md:text-xs text-slate-700/80 dark:text-slate-300/80">
//                 About
//               </p>
//               <h2
//                 className={clsx(
//                   "mt-1 text-2xl sm:text-3xl md:text-4xl font-semibold title-gradient"
//                 )}
//                 style={{ WebkitTextStroke: "0.4px rgba(0,0,0,.04)" }}
//               >
//                 Glimvia at a glance
//               </h2>
//               <p className="mt-2 max-w-2xl text-slate-700/85 dark:text-slate-300/85">
//                 Glimvia brings Apache Superset to your fingertips—fast, intuitive, and built for
//                 professionals on the move.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
  

// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import { motion, useMotionValue, useScroll, animate } from "framer-motion";
// import clsx from "clsx";
// import { aboutSlides } from "./about/aboutData";

// /* ---------- Tunables ---------- */
// const HEADER_OFFSET = 88;                 // distance from top (your navbar)
// const COL_SPLIT = { left: 0.6, right: 0.4 };
// const AUTOPLAY_DELAY_MS = 2200;           // idle before autoplay
// const AUTOPLAY_SPEED_SEC = 24;            // time to traverse all slides

// /* ---------- utils ---------- */
// const clamp = (n: number, min: number, max: number) =>
//   Math.max(min, Math.min(max, n));

// function useViewportHeight() {
//   const [vh, setVh] = useState<number>(0);
//   useEffect(() => {
//     const set = () => setVh(window.innerHeight);
//     set();
//     window.addEventListener("resize", set);
//     return () => window.removeEventListener("resize", set);
//   }, []);
//   return vh;
// }

// /* ---------- Phone (glass, realistic iPhone-ish frame) ---------- */
// function PhoneMock({
//   index,
//   screens,
// }: {
//   index: number;
//   screens: { id: string; title: string; shot: string }[];
// }) {
//   // Safety
//   const safeIndex = clamp(index, 0, Math.max(0, screens.length - 1));

//   return (
//     <div
//       className={clsx(
//         "relative h-full w-full rounded-[28px]",
//         // translucent bay
//         "backdrop-blur-xl bg-white/8 dark:bg-slate-900/30",
//         "ring-1 ring-black/[0.08] dark:ring-white/[0.08]"
//       )}
//     >
//       {/* Phone body */}
//       <div
//         className={clsx(
//           "absolute inset-4 rounded-[30px] shadow-2xl",
//           "bg-[linear-gradient(160deg,#0b1a2e_0%,#0c1725_40%,#0b1a2e_100%)]"
//         )}
//       >
//         {/* Subtle side bevel */}
//         <div className="absolute inset-0 rounded-[30px] ring-1 ring-white/5 dark:ring-white/10" />
//         {/* Notch */}
//         <div className="absolute left-1/2 top-3 h-3 w-32 -translate-x-1/2 rounded-full bg-black/40" />
//         {/* Screen */}
//         <div className="absolute inset-1.5 rounded-[26px] overflow-hidden">
//           <div className="absolute inset-0 bg-black/10" />
//           {/* cross-fade shots */}
//           {screens.map((s, i) => (
//             <img
//               key={s.id}
//               src={s.shot}
//               alt={s.title}
//               draggable={false}
//               className={clsx(
//                 "absolute inset-0 size-full object-cover transition-opacity duration-500",
//                 i === safeIndex ? "opacity-100" : "opacity-0"
//               )}
//             />
//           ))}
//           {/* soft diagonal gloss */}
//           <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,.08)_0%,rgba(255,255,255,.02)_40%,transparent_60%)]" />
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------- About (pinned split scene) ---------- */
// export default function About() {
//   const slides = aboutSlides;
//   const vh = useViewportHeight();
//   const runway =
//     vh > 0 ? (vh - HEADER_OFFSET) + (slides.length - 1) * vh : undefined;

//   const sectionRef = useRef<HTMLElement | null>(null);
//   const stickyRef = useRef<HTMLDivElement | null>(null);

//   // Motion value for the horizontal track (cards)
//   const x = useMotionValue(0);

//   // Track idle → autoplay
//   const [isAutoplay, setIsAutoplay] = useState(false);
//   const idleTimer = useRef<number | null>(null);
//   const stopAutoplay = useRef<() => void>();

//   // Active slide index (for sync + dots)
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Scroll → map vertical progress to horizontal x
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   // Compute total horizontal width we need to pan
//   const trackWidthPx = useMemo(() => {
//     if (!stickyRef.current) return 0;
//     const leftWidth = stickyRef.current.clientWidth * COL_SPLIT.left;
//     // Each slide takes leftWidth; we need to scroll across (slides-1) widths
//     return (slides.length - 1) * leftWidth;
//   }, [slides.length, vh]); // vh included so it recalculates on resize

//   // Tie vertical scroll to horizontal x, and index
//   useEffect(() => {
//     const unsub = scrollYProgress.on("change", (p) => {
//       // If user scrolls, kill autoplay quickly
//       if (isAutoplay && stopAutoplay.current) stopAutoplay.current();

//       // progress 0..1 → x 0..-trackWidth
//       const nx = -trackWidthPx * p;
//       x.set(nx);

//       // nearest slide index
//       const i = Math.round(p * (slides.length - 1));
//       setActiveIndex(clamp(i, 0, slides.length - 1));
//     });
//     return () => unsub();
//   }, [scrollYProgress, slides.length, trackWidthPx, x, isAutoplay]);

//   // Idle → autoplay (smooth, pauses on hover or wheel)
//   useEffect(() => {
//     const kick = () => {
//       if (idleTimer.current) window.clearTimeout(idleTimer.current);
//       idleTimer.current = window.setTimeout(() => setIsAutoplay(true), AUTOPLAY_DELAY_MS);
//     };
//     kick();

//     const onMove = () => {
//       setIsAutoplay(false);
//       kick();
//     };

//     window.addEventListener("wheel", onMove, { passive: true });
//     window.addEventListener("touchmove", onMove, { passive: true });
//     return () => {
//       window.removeEventListener("wheel", onMove);
//       window.removeEventListener("touchmove", onMove);
//       if (idleTimer.current) window.clearTimeout(idleTimer.current);
//     };
//   }, []);

//   // Drive x when autoplay is on
//   useEffect(() => {
//     if (!isAutoplay || trackWidthPx <= 0) return;
//     const controls = animate(x, [-0, -trackWidthPx], {
//       duration: AUTOPLAY_SPEED_SEC,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "loop",
//     });
//     stopAutoplay.current = () => {
//       controls.stop();
//       setIsAutoplay(false);
//     };
//     return () => controls.stop();
//   }, [isAutoplay, trackWidthPx, x]);

//   // Pause autoplay when hovering cards
//   const pauseAuto = () => isAutoplay && stopAutoplay.current?.();

//   // Snap feel (inertia): after wheel ends, we’re already visually snapped
//   // because activeIndex is int and cards are centered by layout; no extra scroll needed.

//   return (
//     <section
//       id="about"
//       ref={sectionRef}
//       className={clsx(
//         "relative overflow-x-clip",     // no horizontal scrollbar
//         "bg-gradient-to-b from-transparent to-black/[0.02] dark:to-white/[0.02]"
//       )}
//       style={runway ? { height: `${runway}px` } : undefined}
//     >
//       {/* Sticky scene */}
//       <div
//         ref={stickyRef}
//         className="sticky"
//         style={{ top: HEADER_OFFSET, height: `calc(100vh - ${HEADER_OFFSET}px)` }}
//       >
//         {/* Scene padding */}
//         <div className="mx-auto flex h-full max-w-7xl flex-col px-4 sm:px-6">
//           {/* Header copy */}
//           <header className="pt-6 pb-4">
//             <p className="uppercase tracking-[.22em] text-xs text-slate-500 dark:text-slate-400">
//               About
//             </p>
//             <h2 className="mt-1 text-3xl sm:text-4xl font-semibold title-gradient">
//               Glimvia at a glance
//             </h2>
//             <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700/90 dark:text-slate-300/90">
//               Glimvia brings Apache Superset to your fingertips—fast, intuitive,
//               and built for professionals on the move.
//             </p>
//           </header>

//           {/* Split content (60/40) fills remaining height */}
//           <div className="grid h-full grid-cols-5 gap-6">
//             {/* LEFT: 60% — cards track, masked within column */}
//             <div
//               className="col-span-3 relative h-full overflow-hidden"
//               onMouseEnter={pauseAuto}
//             >
//               {/* soft wash behind cards for depth */}
//               <div className="pointer-events-none absolute -left-24 -top-24 h-[140%] w-[140%] rounded-[40%] bg-[radial-gradient(closest-side,rgba(56,189,248,.20),rgba(168,85,247,.10),rgba(236,72,153,.06),transparent)] dark:bg-[radial-gradient(closest-side,rgba(59,130,246,.12),rgba(168,85,247,.10),rgba(236,72,153,.08),transparent)]" />
//               {/* horizontal mover */}
//               <motion.div
//                 className="absolute left-0 top-1/2 flex -translate-y-1/2 select-none"
//                 style={{ x, willChange: "transform" }}
//               >
//                 {slides.map((s, i) => (
//                   <motion.article
//                     key={s.id}
//                     className={clsx(
//                       "group mx-4 w-[min(46rem,58vw)] shrink-0 rounded-2xl p-6 md:p-8",
//                       "bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl",
//                       "ring-1 ring-black/10 dark:ring-white/10 shadow-xl"
//                     )}
//                     whileHover={{ y: -6, scale: 1.02 }}
//                     transition={{ type: "spring", stiffness: 240, damping: 22 }}
//                   >
//                     <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/[0.05] dark:bg-white/[0.06] px-3 py-1.5 text-sm">
//                       <s.icon className="size-4 opacity-70" />
//                       <span className="font-medium opacity-80">{s.title}</span>
//                     </div>
//                     <p className="text-[1.05rem] leading-7 text-slate-800 dark:text-slate-200">
//                       {s.body}
//                     </p>

//                     {/* gradient progress line */}
//                     <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
//                       <div
//                         className={clsx(
//                           "h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400",
//                           i <= activeIndex ? "w-full" : "w-0",
//                           "transition-all duration-500"
//                         )}
//                       />
//                     </div>
//                   </motion.article>
//                 ))}
//               </motion.div>

//               {/* progress dots (snap indicators) */}
//               <div className="pointer-events-none absolute bottom-3 left-0 right-0 flex justify-center gap-2">
//                 {slides.map((_, i) => (
//                   <span
//                     key={i}
//                     className={clsx(
//                       "h-2 w-2 rounded-full transition",
//                       i === activeIndex
//                         ? "bg-sky-500/80 dark:bg-sky-400"
//                         : "bg-black/20 dark:bg-white/20"
//                     )}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* RIGHT: 40% — translucent bay + phone that always fits */}
//             <div className="col-span-2 relative h-full">
//               <div
//                 className={clsx(
//                   "absolute inset-0 rounded-2xl",
//                   "backdrop-blur-xl bg-white/30 dark:bg-slate-900/35",
//                   "ring-1 ring-black/10 dark:ring-white/10"
//                 )}
//               />
//               <div className="relative flex h-full items-center justify-center p-4">
//                 {/* Maintain comfortable margins so the phone fully fits */}
//                 <div className="h-[calc(100%-1.5rem)] w-[min(92%,520px)]">
//                   <PhoneMock
//                     index={activeIndex}
//                     screens={slides.map(({ id, title, shot }) => ({
//                       id,
//                       title,
//                       shot,
//                     }))}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> {/* /sticky */}
//     </section>
//   );
// }


"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import clsx from "clsx";
import PhoneMock from "./PhoneMock";
import { aboutSlides } from "./about/aboutData";
import { LucideIcon } from "lucide-react";

export default function About() {
  const slides = aboutSlides;
  const sectionRef = useRef<HTMLDivElement>(null);

  // Pin the whole scene and drive progress from 0→1 across the section height
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Move the card track horizontally (each step = 60vw)
  const shift = useTransform(scrollYProgress, (v) => -v * (slides.length - 1) * 60);
  const x = useMotionTemplate`${shift}vw`;

  // Which slide is active (for phone image + dots)
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.round(v * (slides.length - 1));
    if (idx !== active) setActive(idx);
  });

  // Scene height: lock until last card shows, then release immediately
  const runwayVh = slides.length * 100;

  return (
    <section id="about" ref={sectionRef} className="relative" style={{ height: `${runwayVh}vh` }}>
      {/* Pinned stage */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="mx-auto flex h-full max-w-7xl flex-col px-4 md:px-6">
          {/* Heading (less top padding) */}
          <header className="pt-16 md:pt-14">
            <p className="text-[11px] tracking-[.22em] uppercase text-slate-600/70 dark:text-slate-300/70">
              About
            </p>
            <h2 className="mt-1 text-3xl sm:text-4xl md:text-5xl font-semibold title-gradient">
              Glimvia at a glance
            </h2>
            <p className="mt-2 max-w-3xl text-base md:text-[1.05rem] leading-relaxed text-slate-700 dark:text-slate-300">
              Glimvia brings Apache Superset to your fingertips—fast, intuitive, and built
              for professionals on the move.
            </p>
          </header>

          {/* Split: 60 / 40 – cards and phone */}
          <div className="mt-6 grid h-full grid-cols-5 items-center gap-6">
            {/* LEFT — 60% (3/5) */}
            <div className="col-span-3 h-[72vh] md:h-[74vh] lg:h-[76vh]">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <motion.div
                  className="flex h-full items-stretch gap-6 will-change-transform"
                  style={{ x }}
                >
                  {slides.map((slide) => (
                    <Card key={slide.id} slide={slide} />
                  ))}
                </motion.div>

                {/* dots */}
                <div className="pointer-events-none absolute -bottom-3 left-1/2 z-[1] -translate-x-1/2">
                  <div className="flex items-center gap-2">
                    {slides.map((_, i) => (
                      <span
                        key={i}
                        className={clsx(
                          "h-1.5 w-1.5 rounded-full transition-all",
                          i === active
                            ? "w-6 bg-sky-500"
                            : "bg-slate-400/60 dark:bg-slate-500/60"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — 40% (2/5). Phone fills viewport height. No separate background. */}
            <div className="col-span-2 flex h-[72vh] md:h-[74vh] lg:h-[76vh] items-center justify-end">
              <PhoneMock
                screens={slides.map((s) => ({ id: s.id, title: s.title, shot: s.shot }))}
                activeIndex={active}
                className="h-full"
                tilt={3.5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Card ---------- */

function Card({
  slide,
}: {
  slide: {
    id: string;
    title: string;
    body: string;
    icon: LucideIcon;
    shot: string;
    tag?: string;
  };
}) {
  const Icon = slide.icon;
  return (
    <article
      className={clsx(
        // size: each card occupies ~60% of viewport width
        "w-[60vw] max-w-[720px] min-w-[560px]",
        // tile
        "group relative h-full rounded-2xl p-6 md:p-7 lg:p-8",
        // light glass (no dark tiles)
        "bg-white/85 dark:bg-slate-900/55 backdrop-blur-xl",
        "outline outline-1 outline-black/5 dark:outline-white/10",
        "shadow-[0_10px_30px_rgba(2,6,23,.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,.45)]",
        // hover glow + lift
        "transition-transform duration-300",
        "hover:-translate-y-1 hover:shadow-2xl",
        "after:pointer-events-none after:absolute after:-inset-[10px] after:rounded-[1.4rem] after:opacity-0 after:transition-opacity after:duration-300",
        "after:bg-[radial-gradient(60%_80%_at_50%_50%,rgba(56,189,248,.28),rgba(139,92,246,.22),rgba(236,72,153,.18),transparent_85%)]",
        "hover:after:opacity-70"
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-200 via-violet-200 to-pink-200 dark:from-sky-500/25 dark:via-violet-500/25 dark:to-pink-500/25">
          <Icon className="size-4 text-slate-700 dark:text-slate-200" />
        </span>
        <span className="text-[11px] tracking-[.22em] uppercase text-slate-600/80 dark:text-slate-400/80">
          {slide.tag ?? slide.title}
        </span>
      </div>

      <h3 className="text-2xl md:text-[1.7rem] font-semibold text-slate-900 dark:text-slate-50">
        {slide.title}
      </h3>
      <p className="mt-3 text-slate-700/95 dark:text-slate-300/95 leading-relaxed">
        {slide.body}
      </p>

      {/* tiny progress bar purely decorative */}
      <div className="pointer-events-none absolute inset-x-6 bottom-6">
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-900/5 dark:bg-white/10">
          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400" />
        </div>
      </div>
    </article>
  );
}
