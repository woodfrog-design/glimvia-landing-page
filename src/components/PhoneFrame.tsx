"use client";

import React from "react";
import clsx from "clsx";

/**
 * A lightweight “device” frame. Drop any content (usually an <img>) in children.
 * - aspect ratio ~ 390x844 (modern phone)
 * - optional tilt via `tilt` (deg)
 * - size controlled by Tailwind width classes on the wrapper
 */
export default function PhoneFrame({
  children,
  className,
  tilt = 3,
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: number;
}) {
  return (
    <div
      className={clsx(
        "relative mx-auto select-none",
        "drop-shadow-2xl",
        className
      )}
      style={{ transform: `rotate(${tilt}deg)` }}
      aria-hidden={false}
    >
      {/* Outer shell */}
      <div
        className={clsx(
          "relative aspect-[390/844] w-full rounded-[2.4rem]",
          "bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/70 dark:to-slate-800/50",
          "ring-1 ring-black/10 dark:ring-white/10",
          "shadow-[0_30px_80px_rgba(0,0,0,.25)]"
        )}
      >
        {/* Inner screen bezel */}
        <div
          className={clsx(
            "absolute inset-0 m-3 rounded-[2rem]",
            "bg-white/65 dark:bg-slate-900/50",
            "backdrop-blur-xl"
          )}
        />

        {/* Dynamic screen (children) */}
        <div
          className={clsx(
            "absolute inset-0 m-3 rounded-[2rem] overflow-hidden",
            "ring-1 ring-black/5 dark:ring-white/10"
          )}
          aria-live="polite"
        >
          {children}
        </div>

        {/* Notch */}
        <div className="absolute left-1/2 -translate-x-1/2 top-3 h-3.5 w-28 rounded-full bg-black/50 dark:bg-white/20" />
      </div>
    </div>
  );
}
