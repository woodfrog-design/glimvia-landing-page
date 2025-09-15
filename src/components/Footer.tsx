"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl backdrop-saturate-150" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-100/40 to-transparent dark:from-slate-800/40 dark:to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/60 dark:bg-slate-700/60" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-12 pb-10">
        {/* ===== Top Grid ===== */}
        <div className="mb-10 grid gap-8 md:grid-cols-12">
          {/* Glimvia brand (links to top) */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <img
                src="/glimvia-logo-light.svg"
                alt="Glimvia"
                className="h-6 w-auto object-contain dark:hidden"
              />
              <img
                src="/glimvia-logo-dark.svg"
                alt="Glimvia"
                className="hidden h-6 w-auto object-contain dark:block"
              />
              <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                Glimvia
              </span>
            </Link>

            <div className="mt-3 leading-tight">
              <div className="text-[15px] font-medium text-slate-800/90 dark:text-slate-100/90">
                Monitor. Explore. Act.
              </div>
              <div className="text-sm font-light text-slate-600 dark:text-slate-400">
                Wherever business takes you.
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {/* Product */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
                Product
              </h4>
              <nav className="space-y-2">
                <a href="/#features" className="block text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Features</a>
                <a href="/#experience" className="block text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Experience</a>
                <a href="/#roadmap" className="block text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Roadmap</a>
                <a
                  href="https://www.notion.so/glimvia-technical-specification-document-v1-0-2602428418a880c098e5ed4de7269ee9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  Tech Specs
                  <ArrowUpRight size={12} strokeWidth={1.75} className="opacity-70" />
                </a>
              </nav>
            </div>

            {/* Resources */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
                Resources
              </h4>
              <nav className="space-y-2">
                <a href="/#faq" className="block text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">FAQ</a>
                <a href="/support" className="block text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Support</a>
                <a href="/contact" className="block text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Contact</a>
              </nav>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
                Company
              </h4>
              <nav className="space-y-2">
                <a href="/#about" className="block text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">About</a>
                <a
                  href="https://woodfrog.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  Woodfrog Tech
                  <ArrowUpRight size={12} strokeWidth={1.75} className="opacity-70" />
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-6 h-px w-full bg-slate-200 dark:bg-slate-700" />

        {/* ===== Logos row — side-by-side, clickable ===== */}
        <div className="mb-8 flex w-full items-start justify-between gap-4">
          {/* Woodfrog */}
          <div className="flex w-[45%] min-w-[150px] flex-col items-start text-left">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-500">
              Developed by
            </p>
            <a
              href="https://woodfrog.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="my-2 inline-flex items-center justify-start transition-opacity hover:opacity-85"
              aria-label="Woodfrog Tech"
            >
              <img
                src="/Woodfrog-logo-light.svg"
                alt="Woodfrog Tech"
                className="h-8 w-auto object-contain dark:hidden sm:h-10 md:h-12"
              />
              <img
                src="/Woodfrog-logo-dark.svg"
                alt="Woodfrog Tech"
                className="hidden h-8 w-auto object-contain dark:block sm:h-10 md:h-12"
              />
            </a>
            <p className="text-xs text-slate-600 dark:text-slate-400">with passion</p>
          </div>

          {/* Superset */}
          <div className="flex w-[45%] min-w-[150px] flex-col items-end text-right">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-500">
              Powered by
            </p>
            <a
              href="https://superset.apache.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="my-2 inline-flex items-center justify-end transition-opacity hover:opacity-85"
              aria-label="Apache Superset"
            >
              <img
                src="/superset-logo-horiz-light.svg"
                alt="Apache Superset"
                className="h-8 w-auto object-contain dark:hidden sm:h-10 md:h-12"
              />
              <img
                src="/superset-logo-horiz-dark.svg"
                alt="Apache Superset"
                className="hidden h-8 w-auto object-contain dark:block sm:h-10 md:h-12"
              />
            </a>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Independent client, not affiliated
            </p>
          </div>
        </div>

        {/* ===== Bottom area =====
           Mobile (default): 2 cols (left/right), then center on its own row.
           md+: 3 cols in one row (left / center / right). */}
        <div className="grid grid-cols-2 items-center gap-y-4 border-top border-t border-slate-200 pt-6 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-400 md:grid-cols-3">
          {/* Left */}
          <div className="justify-self-start">
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              <Link href="/privacy" className="hover:text-slate-800 dark:hover:text-slate-200">
                Privacy Notice
              </Link>
              <Link href="/terms" className="hover:text-slate-800 dark:hover:text-slate-200">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="justify-self-end text-right">
            © {new Date().getFullYear()} Glimvia. All rights reserved.
          </div>

          {/* Center → spans full width below on mobile, centered; normal center on md+ */}
          <div className="col-span-2 flex items-center justify-center gap-2 md:col-span-1 md:order-none">
            <span className="text-red-500">♥</span>
            <span>Made with care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
