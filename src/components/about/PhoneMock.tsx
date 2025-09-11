"use client";

import { MotionValue, motion } from "framer-motion";
import clsx from "clsx";

type Screen = { id: string; title: string; shot: string };

export default function PhoneMock({
  screens,
  activeIndex,
  className,
  tilt = 4,
}: {
  screens: Screen[];
  activeIndex: number;
  className?: string;
  tilt?: number; // degrees
}) {
  // iPhone-ish proportions (19.5:9), fill parent height
  return (
    <motion.div
      aria-label={screens?.[activeIndex]?.title ?? "Phone preview"}
      className={clsx("pointer-events-auto select-none", className)}
      style={{ rotate: tilt }}
    >
      {/* Shell (bezel) */}
      <div className="relative h-full aspect-[9/19.5] rounded-[2.6rem] bg-slate-900/85 dark:bg-slate-900/80 shadow-2xl ring-1 ring-black/10 dark:ring-white/10">
        {/* Chamfer rim */}
        <div className="absolute inset-0 rounded-[2.6rem] ring-1 ring-white/10 dark:ring-black/30" />

        {/* Screen */}
        <div className="absolute inset-[12px] rounded-[2.2rem] overflow-hidden bg-slate-900">
          {/* Notch / earpiece */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-2.5 w-1/3 rounded-full bg-black/50" />

          {/* Cross-fade images */}
          <div className="absolute inset-0">
            {screens.map((s, i) => (
              <img
                key={s.id}
                src={s.shot}
                alt={s.title}
                className={clsx(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-450",
                  i === activeIndex ? "opacity-100" : "opacity-0"
                )}
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

