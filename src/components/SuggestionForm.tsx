"use client";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const CATEGORY_OPTIONS = ["new-feature", "ui-ux", "performance", "integration", "other"];

export default function SuggestionForm() {
  const [formData, setFormData] = useState({
    title: "",
    categories: [] as string[],
    description: "",
    useCase: "",
    name: "",
    email: "",
    priority: "",
    wantsUpdates: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string>("");

  const toggleCategory = (c: string) =>
    setFormData((p) => ({
      ...p,
      categories: p.categories.includes(c)
        ? p.categories.filter((x) => x !== c)
        : [...p.categories, c],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return alert("Please enter a title for your suggestion");
    if (!formData.description.trim()) return alert("Please describe your suggestion");
    if (!formData.email.trim() || !formData.email.includes("@"))
      return alert("Please enter a valid email address");
    if (formData.categories.length === 0) return alert("Please select at least one category");

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitError("");

    try {
      await addDoc(collection(db, "suggestions"), {
        ...formData,
        category: formData.categories[0], // legacy single field
        timestamp: new Date(),
        status: "new",
        votes: 0,
        userAgent: navigator.userAgent,
      });

      // GA event (no-op if blocked)
      // @ts-ignore
      window.gtag?.("event", "feature_suggestion_submitted", {
        categories: formData.categories.join(","),
        priority: formData.priority || "unspecified",
        wants_updates: formData.wantsUpdates ? "yes" : "no",
      });

      setSubmitStatus("success");

      // clear for next entry
      setFormData({
        title: "",
        categories: [],
        description: "",
        useCase: "",
        name: "",
        email: "",
        priority: "",
        wantsUpdates: false,
      });
    } catch (error: any) {
      console.error("Error saving suggestion:", error);
      setSubmitStatus("error");
      setSubmitError(error?.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Success screen
  if (submitStatus === "success") {
    return (
      <section className="relative max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="glass p-6 md:p-8 rounded-2xl text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">Suggestion submitted!</h1>
          <p className="text-slate-700 dark:text-slate-300 mb-2">
            Thanks for helping improve Glimvia. We appreciate your ideas.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            You can close this message or submit another suggestion.
          </p>
          <button
            onClick={() => setSubmitStatus("idle")}
            className="px-6 py-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-95 transition"
          >
            Submit another suggestion
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="suggestion" className="relative max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex items-center gap-3">
        <div className="hr-accent w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 h-1" />
        <h2 className="text-2xl md:text-3xl font-semibold">Share Your Ideas</h2>
      </div>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Help us improve Glimvia by sharing your feature suggestions and ideas.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 glass p-5 md:p-6 rounded-2xl space-y-4">
        <div className="grid md:grid-cols-2 gap-3">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Feature/Improvement Title *"
            required
            className="w-full rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Priority Level</option>
            <option value="nice-to-have">Nice to Have</option>
            <option value="important">Important</option>
            <option value="critical">Critical</option>
          </select>
        </div>

        {/* Multi-select categories */}
        <div>
          <label className="mb-2 block text-sm font-medium">Categories *</label>
          <div className="flex flex-wrap gap-2">
            {CATEGORY_OPTIONS.map((opt) => {
              const active = formData.categories.includes(opt);
              return (
                <button
                  type="button"
                  key={opt}
                  onClick={() => toggleCategory(opt)}
                  aria-pressed={active}
                  className={`rounded-full px-3 py-1 text-sm ring-1 transition ${
                    active
                      ? "bg-blue-600 text-white ring-blue-600"
                      : "bg-transparent text-slate-700 ring-black/10 hover:bg-slate-100 dark:text-slate-200 dark:ring-white/15 dark:hover:bg-slate-800"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your suggestion in detail *"
          rows={5}
          required
          className="w-full rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="useCase"
          value={formData.useCase}
          onChange={handleChange}
          placeholder="How would this help you? (Use case/scenario)"
          rows={3}
          className="w-full rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid md:grid-cols-2 gap-3">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            type="email"
            required
            className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <label className="inline-flex items-center gap-2 text-sm">
          <input
            name="wantsUpdates"
            type="checkbox"
            checked={formData.wantsUpdates}
            onChange={handleChange}
            className="accent-blue-600"
          />
          I'd like updates on this suggestion
        </label>

        <div className="pt-2 space-y-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full
                       bg-slate-900 text-white dark:bg-white dark:text-slate-900
                       hover:opacity-95 active:scale-95 disabled:opacity-50 transition"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting…</span>
              </>
            ) : (
              <span>Submit Suggestion</span>
            )}
          </button>

          {submitStatus === "error" && (
            <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Submission Failed</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">{submitError}</p>
                <p className="text-xs text-blue-500 dark:text-blue-500 mt-2">
                  If the problem persists, please email us at support@glimvia.com
                </p>
              </div>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
