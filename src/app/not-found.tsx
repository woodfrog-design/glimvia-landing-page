// src/app/not-found.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found — Glimvia",
  description: "The page you’re looking for doesn’t exist or has moved.",
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center md:px-6">
      <div className="mb-4 inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs opacity-80">
        404 • Not found
      </div>
      <h1 className="mt-2 text-3xl font-semibold md:text-4xl">
        We can’t find that page
      </h1>
      <p className="mx-auto mt-3 max-w-prose text-slate-600 dark:text-slate-400">
        The link may be broken, or the page may have moved.
      </p>
      <div className="mt-6">
        <Link
          href="/"
          className="rounded-full bg-slate-900 px-5 py-2 text-white transition hover:opacity-95 active:scale-95 dark:bg-white dark:text-slate-900"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
