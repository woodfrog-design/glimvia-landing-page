"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="glass p-8 md:p-12 rounded-2xl">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold title-gradient leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
              Page Not Found
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass ring-1 ring-black/10 dark:ring-white/15 hover:bg-white/60 dark:hover:bg-white/5 transform transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Helpful Links */}
          <div className="border-t border-black/10 dark:border-white/10 pt-6">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Looking for something specific? Try these popular pages:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link
                href="/#about"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                About Glimvia
              </Link>
              <Link
                href="/#features"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Features
              </Link>
              <Link
                href="/support"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Support
              </Link>
              <Link
                href="/technical-specification"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Technical Specs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}