"use client";
import { X } from "lucide-react";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-0 flex items-start justify-end">
        <nav className="glass w-full sm:w-[420px] h-full p-8 flex flex-col gap-6">
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="self-end size-9 rounded-full bg-white/30 dark:bg-white/10 flex items-center justify-center"
          >
            <X size={18} />
          </button>
          <a href="#about" onClick={onClose} className="text-xl">
            About
          </a>
          <a href="#features" onClick={onClose} className="text-xl">
            Features
          </a>
          <a href="#experience" onClick={onClose} className="text-xl">
            Experience
          </a>
          <a href="#roadmap" onClick={onClose} className="text-xl">
            Roadmap
          </a>
          <a
            href="#cta"
            onClick={onClose}
            className="mt-4 inline-flex items-center justify-center rounded-full px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900"
          >
            Get the app
          </a>
        </nav>
      </div>
    </div>
  );
}