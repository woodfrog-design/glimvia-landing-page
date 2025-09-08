// "use client";

// import clsx from "clsx";
// import { motion } from "framer-motion";
// import { useEffect, useMemo, useState } from "react";

// type Screen = {
//   id: string;
//   title: string;
//   shot?: string; // optional so we can render a gradient placeholder
// };

// type Props = {
//   screens?: Screen[];        // pass aboutSlides here
//   activeIndex?: number;      // controlled index from the carousel
//   autoplay?: boolean;        // optional idle animation
//   tilt?: number;             // degrees; small positive value looks nice
//   className?: string;
//   onPauseChange?: (paused: boolean) => void;
// };

// const FALLBACK: Screen[] = [
//   { id: "placeholder", title: "Phone preview" },
// ];

// export default function PhoneMock({
//   screens,
//   activeIndex = 0,
//   autoplay = false,
//   tilt = 4,
//   className,
//   onPauseChange,
// }: Props) {
//   // Always have at least one slide
//   const list = useMemo<Screen[]>(
//     () => (Array.isArray(screens) && screens.length ? screens : FALLBACK),
//     [screens]
//   );
//   const len = list.length;

//   // Clamp helper
//   const clamp = (n: number) => ((n % len) + len) % len;

//   // Internal index mirrors the controlled one, but can autoplay if requested
//   const [index, setIndex] = useState<number>(clamp(activeIndex));
//   useEffect(() => setIndex(clamp(activeIndex)), [activeIndex, len]);

//   useEffect(() => {
//     if (!autoplay || len <= 1) return;
//     const id = setInterval(() => setIndex((i) => clamp(i + 1)), 2600);
//     return () => clearInterval(id);
//   }, [autoplay, len]);

//   // Hover → pause + lift
//   const [paused, setPaused] = useState(false);
//   useEffect(() => onPauseChange?.(paused), [paused, onPauseChange]);

//   return (
//     <motion.div
//       aria-label={list[index]?.title ?? "Phone preview"}
//       className={clsx(
//         "pointer-events-auto select-none mx-auto",
//         "transition-transform duration-300 ease-out will-change-transform",
//         paused ? "scale-[1.02] drop-shadow-2xl" : "scale-100 drop-shadow-xl",
//         className
//       )}
//       style={{ perspective: 1200 }}
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       {/* iPhone chassis */}
//       <div
//         className={clsx(
//           "relative mx-auto overflow-hidden",
//           "rounded-[34px] border-[8px] bg-white/95 dark:bg-slate-900/95",
//           "border-white dark:border-slate-800",
//           "shadow-[0_20px_80px_rgba(2,6,23,.18)]"
//         )}
//         style={{
//           // Fits fully in the viewport (accounts for header/section padding)
//           width: "min(38vw, 420px)",
//           height: "min(calc(100vh - 160px), 820px)",
//           transform: `rotate(${tilt}deg)`,
//         }}
//       >
//         {/* Subtle outer edge glow */}
//         <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-slate-900/5 dark:ring-white/10" />

//         {/* Notch */}
//         <div className="absolute left-1/2 top-3 h-3 w-24 -translate-x-1/2 rounded-full bg-slate-400/30 dark:bg-white/15" />

//         {/* Screen area */}
//         <div className="absolute inset-2 rounded-[26px] overflow-hidden bg-slate-200/40 dark:bg-slate-700/25">
//           {list.map((s, i) =>
//             s.shot ? (
//               <img
//                 key={s.id || i}
//                 src={s.shot}
//                 alt={s.title}
//                 draggable={false}
//                 className={clsx(
//                   "absolute inset-0 size-full object-cover",
//                   "transition-opacity duration-500 ease-out",
//                   i === index ? "opacity-100" : "opacity-0"
//                 )}
//               />
//             ) : (
//               <div
//                 key={s.id || i}
//                 className={clsx(
//                   "absolute inset-0",
//                   "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200",
//                   "dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-700/80",
//                   "transition-opacity duration-500 ease-out",
//                   i === index ? "opacity-100" : "opacity-0"
//                 )}
//               />
//             )
//           )}
//         </div>
//       </div>

//       {/* Caption */}
//       <div className="mt-3 text-center text-sm text-slate-600/80 dark:text-slate-300/80">
//         {list[index]?.title}
//       </div>
//     </motion.div>
//   );
// }

// "use client";

// import { MotionValue, motion } from "framer-motion";
// import clsx from "clsx";

// type Screen = { id: string; title: string; shot: string };

// export default function PhoneMock({
//   screens,
//   activeIndex,
//   className,
//   tilt = 4,
// }: {
//   screens: Screen[];
//   activeIndex: number;
//   className?: string;
//   tilt?: number; // degrees
// }) {
//   // iPhone-ish proportions (19.5:9), fill parent height
//   return (
//     <motion.div
//       aria-label={screens?.[activeIndex]?.title ?? "Phone preview"}
//       className={clsx("pointer-events-auto select-none", className)}
//       style={{ rotate: tilt }}
//     >
//       {/* Shell (bezel) */}
//       <div className="relative h-full aspect-[9/19.5] rounded-[2.6rem] bg-slate-900/85 dark:bg-slate-900/80 shadow-2xl ring-1 ring-black/10 dark:ring-white/10">
//         {/* Chamfer rim */}
//         <div className="absolute inset-0 rounded-[2.6rem] ring-1 ring-white/10 dark:ring-black/30" />

//         {/* Screen */}
//         <div className="absolute inset-[12px] rounded-[2.2rem] overflow-hidden bg-slate-900">
//           {/* Notch / earpiece */}
//           <div className="absolute top-2 left-1/2 -translate-x-1/2 h-2.5 w-1/3 rounded-full bg-black/50" />

//           {/* Cross-fade images */}
//           <div className="absolute inset-0">
//             {screens.map((s, i) => (
//               <img
//                 key={s.id}
//                 src={s.shot}
//                 alt={s.title}
//                 className={clsx(
//                   "absolute inset-0 h-full w-full object-cover transition-opacity duration-450",
//                   i === activeIndex ? "opacity-100" : "opacity-0"
//                 )}
//                 draggable={false}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type Screen = { id: string; title: string; shot: string };
type Props = {
  screens: Screen[];
  activeIndex: number;
  autoPlaying?: boolean;
  onHoverChange?: (hovering: boolean) => void;
  className?: string;
};

/**
 * iPhone-style mock that ALWAYS fits the container's height.
 * Parent should give this component a sticky column with `h-screen` (or section height).
 * We derive width from height via aspect-ratio 9/19.5 so there’s no overflow or horizontal scroll.
 */
export default function PhoneMock({
  screens,
  activeIndex,
  autoPlaying = true,
  onHoverChange,
  className,
}: Props) {
  return (
    <motion.div
      aria-label={screens?.[activeIndex]?.title ?? "Phone preview"}
      className={clsx(
        // Fill the available height; width is computed from aspect ratio.
        "relative h-full aspect-[9/19.5] select-none",
        // Center it within the right column
        "mx-auto",
        className
      )}
      initial={{ y: 0, scale: 1, filter: "brightness(1)" }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => onHoverChange?.(true)}
      onHoverEnd={() => onHoverChange?.(false)}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
    >
      {/* Phone body */}
      <div
        className={clsx(
          "absolute inset-0 rounded-[2.2rem]",
          "bg-slate-900 dark:bg-slate-800",
          "ring-1 ring-black/10 dark:ring-white/10",
          "shadow-[0_30px_80px_-20px_rgba(2,6,23,.35)]"
        )}
      />

      {/* Subtle rim highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[2.2rem]"
        style={{
          boxShadow:
            "inset 0 0 0 2px rgba(255,255,255,.06), inset 0 0 30px rgba(255,255,255,.06)",
        }}
      />

      {/* Screen */}
      <div className="absolute inset-[12px] rounded-[1.9rem] overflow-hidden bg-black">
        {/* Dynamic island / notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 h-2.5 w-28 rounded-full bg-black/70" />

        {/* Cross-fading screenshots */}
        <div className="absolute inset-0">
          {screens?.map((s, i) => (
            <img
              key={s.id}
              src={s.shot}
              alt={s.title}
              className={clsx(
                "absolute inset-0 h-full w-full object-cover",
                "transition-opacity duration-500 ease-out",
                i === activeIndex ? "opacity-100" : "opacity-0"
              )}
              draggable={false}
            />
          ))}
        </div>

        {/* Glass glare */}
        <div className="pointer-events-none absolute inset-0 rounded-[1.9rem] bg-[radial-gradient(120%_60%_at_0%_0%,rgba(255,255,255,.10),transparent_60%),radial-gradient(120%_60%_at_100%_100%,rgba(255,255,255,.06),transparent_60%)]" />
      </div>
    </motion.div>
  );
}
