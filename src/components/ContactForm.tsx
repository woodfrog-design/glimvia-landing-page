"use client";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const isValidPhone = (raw: string) => {
  if (!raw.trim()) return true; // optional
  const normalized = raw.replace(/[^0-9+]/g, "");
  const digits = normalized.startsWith("+") ? normalized.slice(1) : normalized;
  return /^[1-9][0-9]{7,14}$/.test(digits); // 8–15 digits
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "",
    phone: ""
  });

  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string>("");
  const [submittedEmail, setSubmittedEmail] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) return alert("Please enter your name");
    if (!formData.email.trim() || !formData.email.includes("@"))
      return alert("Please enter a valid email address");
    if (!formData.subject.trim()) return alert("Please enter a subject");
    if (!formData.message.trim()) return alert("Please enter your message");
    if (!isValidPhone(formData.phone)) {
      setPhoneError("Please enter a valid phone like +12125551234");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitError("");

    try {
      await addDoc(collection(db, "contact_forms"), {
        ...formData,
        timestamp: new Date(),
        status: "new",
        ip: "hidden",
        userAgent: navigator.userAgent
      });

      // GA event (no-op if blocked)
      // @ts-ignore
      window.gtag?.("event", "generate_lead", {
        form_name: "contact",
        method: "firestore",
      });

      setSubmittedEmail(formData.email);
      setSubmitStatus("success");

      // optional: clear fields after success
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        inquiryType: "",
        phone: ""
      });
      setPhoneError(null);
    } catch (error: any) {
      console.error("Error saving contact form:", error);
      setSubmitStatus("error");
      setSubmitError(error?.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === "phone") {
      setPhoneError(value && !isValidPhone(value) ? "Please enter a valid phone like +12125551234" : null);
    }
  };

  // Success screen
  if (submitStatus === "success") {
    return (
      <section className="relative max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="glass p-6 md:p-8 rounded-2xl text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">Message sent!</h1>
          <p className="text-slate-700 dark:text-slate-300 mb-2">
            Thanks for reaching out. We’ll reply at <span className="font-medium">{submittedEmail || "your email"}</span>.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            You can close this message or send another inquiry.
          </p>
          <button
            onClick={() => setSubmitStatus("idle")}
            className="px-6 py-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-95 transition"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex items-center gap-3">
        <div className="hr-accent w-14 rounded-full bg-gradient-to-r from-green-500 to-blue-600 h-1" />
        <h2 className="text-2xl md:text-3xl font-semibold">Contact Us</h2>
      </div>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Have questions about Glimvia? We'd love to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 glass p-5 md:p-6 rounded-2xl space-y-4">
        <div className="grid md:grid-cols-2 gap-3">
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name *"
            required
            className="w-full rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-green-500"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address *"
            type="email"
            required
            className="w-full rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <input
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Company/Organization"
            className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-green-500"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone (+12125551234)"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={`rounded-lg px-3 py-2 bg-transparent ring-1 outline-none focus:ring-2 ${
              phoneError ? "ring-red-400 focus:ring-red-500" : "ring-black/10 focus:ring-green-500 dark:ring-white/15"
            }`}
          />
        </div>
        {phoneError && <p className="text-sm text-red-500">{phoneError}</p>}

        <div className="grid md:grid-cols-2 gap-3">
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleInputChange}
            className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-green-500"
          >
            <option value="">Type of Inquiry</option>
            <option value="general">General Information</option>
            <option value="partnership">Partnership</option>
            <option value="enterprise">Enterprise Solutions</option>
            <option value="media">Media/Press</option>
            <option value="technical">Technical Questions</option>
            <option value="other">Other</option>
          </select>
          <input
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject *"
            required
            className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-green-500"
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message *"
          rows={6}
          required
          className="w-full rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-green-500"
        />

        <div className="pt-2 space-y-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full
                       bg-slate-900 text-white dark:bg-white dark:text-slate-900
                       hover:opacity-95 active:scale-95 disabled:opacity-50 transition"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending…</span>
              </>
            ) : (
              <span>Send Message</span>
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
