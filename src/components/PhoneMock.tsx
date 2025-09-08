"use client";

import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

type Screen = {
  id: number;
  title: string;
  description: string;
  // You can swap this block for an <Image/> later
  // or pass a React node if you prefer.
  gradientFrom: string; // Tailwind color classes
  gradientTo: string;
};

export default function PhoneMock({
  active,
  screens,
  className,
}: {
  active: number;
  screens: Screen[];
  className?: string;
}) {
  const screen = screens[active] ?? screens[0];

  return (
    <div
      className={clsx(
        "relative w-[310px] sm:w-[340px] md:w-[360px]",
        "rounded-[40px] p-3 glass",
        "border border-white/10 dark:border-white/10",
        "shadow-xl",
        className
      )}
      aria-label="Glimvia app preview"
    >
      {/* Phone frame */}
      <div className="relative rounded-[32px] bg-black/80 dark:bg-black overflow-hidden aspect-[9/19.5] border border-white/10">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black/70 rounded-b-2xl z-20" />

        <AnimatePresence mode="wait">
          <motion.div
            key={screen.id}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={clsx("absolute inset-0")}
          >
            {/* Gradient backdrop for the “screen” */}
            <div
              className={clsx(
                "absolute inset-0",
                "bg-gradient-to-br",
                screen.gradientFrom,
                screen.gradientTo
              )}
            />
            {/* Faux toolbar */}
            <div className="absolute top-6 left-5 right-5 flex items-center justify-between text-white/90">
              <span className="text-xs/4">Glimvia</span>
              <div className="flex gap-2">
                <span className="size-1.5 rounded-full bg-white/60" />
                <span className="size-1.5 rounded-full bg-white/60" />
                <span className="size-1.5 rounded-full bg-white/60" />
              </div>
            </div>

            {/* Content card */}
            <div className="absolute left-5 right-5 bottom-6">
              <div className="rounded-2xl p-4 glass border border-white/10 text-slate-900 dark:text-slate-100">
                <div className="text-sm font-semibold">{screen.title}</div>
                <p className="mt-1.5 text-xs/5 opacity-80">
                  {screen.description}
                </p>
                {/* Fake KPI row */}
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-2 bg-white/60 dark:bg-white/10 border border-black/5 dark:border-white/10"
                    >
                      <div className="text-[10px] opacity-70">KPI {i + 1}</div>
                      <div className="text-sm font-semibold">24.8%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
