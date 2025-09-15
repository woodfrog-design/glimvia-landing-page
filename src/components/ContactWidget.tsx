// src/components/ContactWidget.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

/** Minimal chat-bubble icon for the FAB (inherits currentColor) */
function ContactBubbleIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a8 8 0 0 1-8 8H8l-4 3v-5a8 8 0 1 1 17-6Z" />
      <circle cx="10" cy="12" r="1" />
      <circle cx="14" cy="12" r="1" />
    </svg>
  );
}

type Props = { defaultOpen?: boolean };

export default function ContactWidget({ defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Lock background scroll when open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Keep wheel events inside modal body (so backdrop/page never steals them)
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      // Stop backdrop/page scroll while allowing body to scroll
      e.stopPropagation();
    };
    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel as any);
  }, [open]);

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        aria-label="Contact Glimvia"
        onClick={() => setOpen(true)}
        className={clsx(
          "fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full shadow-lg",
          "bg-white/90 text-slate-900 ring-1 ring-black/5 backdrop-blur",
          "hover:scale-[1.04] transition",
          "dark:bg-slate-900/90 dark:text-white dark:ring-white/10"
        )}
      >
        <ContactBubbleIcon />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Modal */}
      <div
        className={clsx(
          "fixed inset-x-4 top-10 z-[60] mx-auto max-w-4xl",
          "transition-transform duration-300",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={clsx(
            "rounded-2xl border border-white/15 bg-white/90 shadow-2xl backdrop-blur-xl",
            "dark:bg-slate-900/90 dark:border-white/10"
          )}
        >
          {/* Header with THEME-AWARE GLIMVIA LOGO */}
          <div className="flex items-center justify-between border-b border-white/20 px-5 py-4 dark:border-white/10">
            <div className="flex items-center gap-3">
              {/* Light logo */}
              <Image
                src="/glimvia-logo-light.svg"
                alt="Glimvia"
                width={112}
                height={24}
                className="dark:hidden h-6 w-auto"
                priority
              />
              {/* Dark logo */}
              <Image
                src="/glimvia-logo-dark.svg"
                alt="Glimvia"
                width={112}
                height={24}
                className="hidden dark:block h-6 w-auto"
                priority
              />
              <h2 id="contact-title" className="ml-2 text-lg font-semibold">
                Contact Us
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="rounded-full p-2 text-slate-600 hover:bg-black/5 dark:text-slate-300 dark:hover:bg-white/10"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body (scrollable) */}
          <div
            ref={bodyRef}
            className="max-h-[min(80vh,720px)] overflow-y-auto overscroll-contain px-5 py-5"
          >
            {/* Intro */}
            <div className="mb-5">
              <div className="flex items-center gap-3">
                <div className="hr-accent w-14 rounded-full" />
                <h3 className="text-2xl font-bold">We’d love to hear from you</h3>
              </div>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Questions, feedback, or partnership ideas—drop us a note.
              </p>
            </div>

            {/* Form (keep as-is, or hook to your backend) */}
            <form
              className="grid grid-cols-1 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: wire up submit
              }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Full Name *" type="text" name="name" />
                <Field label="Email Address *" type="email" name="email" />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Company/Org" type="text" name="company" />
                <Field label="Phone (+12123456789)" type="tel" name="phone" />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Select
                  label="Type of Inquiry *"
                  name="type"
                  options={["General Question", "Partnership", "Pricing", "Support"]}
                />
                <Field label="Subject *" type="text" name="subject" />
              </div>

              <div>
                <Label>Your Message *</Label>
                <textarea
                  rows={6}
                  className="w-full rounded-lg border border-slate-300/70 bg-white/80 px-3 py-2 outline-none backdrop-blur dark:border-slate-700 dark:bg-slate-900/60"
                />
              </div>

              <div className="mt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-slate-300/60 px-4 py-2 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

/* Form atoms */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
      {children}
    </label>
  );
}
function Field(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }
) {
  const { label, ...rest } = props;
  return (
    <div>
      <Label>{label}</Label>
      <input
        {...rest}
        className="w-full rounded-lg border border-slate-300/70 bg-white/80 px-3 py-2 outline-none backdrop-blur dark:border-slate-700 dark:bg-slate-900/60"
      />
    </div>
  );
}
function Select({
  label,
  options,
  ...rest
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: string[];
}) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        {...rest}
        className="w-full appearance-none rounded-lg border border-slate-300/70 bg-white/80 px-3 py-2 outline-none backdrop-blur dark:border-slate-700 dark:bg-slate-900/60"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
