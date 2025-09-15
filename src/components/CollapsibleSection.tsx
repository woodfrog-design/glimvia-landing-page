"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  id?: string;                // e.g. "contact" so /#contact auto-opens
  title: string;              // Section header
  defaultOpen?: boolean;      // Start expanded?
  children: React.ReactNode;  // Section content
};

export default function CollapsibleSection({
  id,
  title,
  defaultOpen = false,
  children,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  // Auto-open if URL hash matches (so /#contact still works)
  useEffect(() => {
    if (!id) return;
    if (typeof window !== "undefined" && window.location.hash === `#${id}`) {
      setOpen(true);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  }, [id]);

  return (
    <section id={id} className="w-full">
      <div className="rounded-2xl border border-slate-200/60 bg-white/60 backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-900/50">
        {/* Header */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id ? `${id}-panel` : undefined}
          onClick={() => setOpen(v => !v)}
          className="group flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
        >
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
          {/* Chevron */}
          <svg
            className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-300 ${open ? "rotate-180" : ""}`}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {/* Content (animated height) */}
        <div
          id={id ? `${id}-panel` : undefined}
          ref={contentRef}
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="min-h-0 overflow-hidden px-5 pb-5">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
