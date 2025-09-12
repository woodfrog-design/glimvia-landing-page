"use client";

import { useState, useCallback } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Ticket, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  title: string;
  category: string;
  priority: string;
  description: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  supersetVersion: string;
  openForCall: boolean;
}

interface FormErrors {
  [key: string]: string;
}

interface SubmissionResult {
  success: boolean;
  ticketId?: string;
  error?: string;
}

export default function SupportTicket() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    category: "bug",
    priority: "medium",
    description: "",
    name: "",
    email: "",
    phone: "",
    organization: "",
    supersetVersion: "",
    openForCall: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [ticketId, setTicketId] = useState<string>("");
  const [submitError, setSubmitError] = useState<string>("");

  // Validation
  const validateField = useCallback((name: string, value: any): string => {
    switch (name) {
      case "title":
        if (!value?.toString().trim()) return "Ticket title is required";
        if (value.length < 5) return "Title must be at least 5 characters";
        if (value.length > 100) return "Title must be less than 100 characters";
        return "";
      case "description":
        if (!value?.toString().trim()) return "Issue description is required";
        if (value.length < 20) return "Please provide more details (minimum 20 characters)";
        if (value.length > 2000) return "Description must be less than 2000 characters";
        return "";
      case "email":
        if (!value?.toString().trim()) return "Email address is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address";
        return "";
      case "supersetVersion":
        if (!value?.toString().trim()) return "Superset version is required";
        if (!/^\d+\.\d+(\.\d+)?$/.test(value.trim()))
          return "Please enter a valid version format (e.g., 1.5.0)";
        return "";
      case "phone":
        if (value?.toString().trim()) {
          const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
          const cleanPhone = value.replace(/[\s\-\(\)]/g, "");
          if (!phoneRegex.test(cleanPhone)) return "Please enter a valid phone number";
        }
        return "";
      case "name":
        if (value?.toString().trim() && value.length < 2) return "Name must be at least 2 characters";
        if (value?.toString().length > 50) return "Name must be less than 50 characters";
        return "";
      case "organization":
        if (value?.toString().length > 100) return "Organization name must be less than 100 characters";
        return "";
      default:
        return "";
    }
  }, []);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) newErrors[key] = error;
    });
    if (formData.priority === "urgent" && !formData.phone.trim()) {
      newErrors.phone = "Phone number is required for urgent tickets";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, validateField]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      const checked = (e.target as HTMLInputElement).checked;
      const newValue = type === "checkbox" ? checked : value;

      setFormData((prev) => ({ ...prev, [name]: newValue }));

      if (errors[name]) {
        const fieldError = validateField(name, newValue);
        setErrors((prev) => ({ ...prev, [name]: fieldError }));
      }
    },
    [errors, validateField]
  );

  const generateTicketId = (): string => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `GLM-${timestamp}-${random}`;
  };

  const submitToFirebase = async (data: FormData): Promise<SubmissionResult> => {
    try {
      const ticketId = generateTicketId();
      const submissionData = {
        ...data,
        ticketId,
        timestamp: new Date(),
        status: "open",
        assignedTo: null,
        resolved: false,
        createdAt: new Date().toISOString(),
        userAgent: navigator.userAgent,
        ipAddress: "hidden",
        source: "web_form",
        metadata: {
          formVersion: "1.0",
          submissionSource: "support_page",
          browserTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
      };

      await addDoc(collection(db, "support_tickets"), submissionData);
      return { success: true, ticketId };
    } catch (error) {
      console.error("Firebase submission error:", error);
      let errorMessage = "An unexpected error occurred. Please try again.";
      if (error instanceof Error) {
        if (error.message.includes("permission-denied")) {
          errorMessage = "Permission denied. Please contact support directly.";
        } else if (error.message.includes("network")) {
          errorMessage = "Network error. Please check your connection and try again.";
        } else if (error.message.includes("unavailable")) {
          errorMessage = "Service temporarily unavailable. Please try again in a few minutes.";
        }
      }
      return { success: false, error: errorMessage };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const el = document.getElementById(firstErrorField);
        el?.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitError("");

    const result = await submitToFirebase(formData);

    if (result.success) {
      setSubmitStatus("success");
      setTicketId(result.ticketId || "");
      setTimeout(() => {
        setFormData({
          title: "",
          category: "bug",
          priority: "medium",
          description: "",
          name: "",
          email: "",
          phone: "",
          organization: "",
          supersetVersion: "",
          openForCall: false,
        });
        setSubmitStatus("idle");
        setTicketId("");
      }, 5000);
    } else {
      setSubmitStatus("error");
      setSubmitError(result.error || "Submission failed");
    }

    setIsSubmitting(false);
  };

  // Unified input/select/textarea styles (blue/slate only)
  const inputClassName = useCallback(
    (fieldName: string) => {
      const hasError = !!errors[fieldName];
      return `w-full rounded-lg px-3 py-2 bg-transparent outline-none ring-1 transition-all duration-200
        ${hasError
          ? "ring-blue-400 dark:ring-blue-500 focus:ring-2 focus:ring-blue-500"
          : "ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-blue-500 hover:ring-blue-200 dark:hover:ring-blue-700"}
        placeholder:text-slate-500 dark:placeholder:text-slate-400`;
    },
    [errors]
  );

  // Success screen
  if (submitStatus === "success") {
    return (
      <section className="relative max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="glass p-6 md:p-8 rounded-2xl text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">Ticket Submitted Successfully!</h1>
          <div className="mb-4">
            <p className="text-lg font-medium text-green-700 dark:text-green-400">Ticket ID: {ticketId}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Please save this ID for future reference</p>
          </div>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            We&apos;ve received your support request and will get back to you within 24-48 hours. You&apos;ll receive
            email updates at {formData.email}
          </p>
          <button
            onClick={() => setSubmitStatus("idle")}
            className="px-6 py-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-95 transition"
          >
            Submit Another Ticket
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="relative max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="hr-accent w-14 rounded-full bg-gradient-to-r from-blue-500 to-sky-600 h-1" />
        <h2 className="text-2xl md:text-3xl font-semibold">Support Ticket</h2>
      </div>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Submit a detailed support request. Our team typically responds within 24-48 hours.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 glass p-5 md:p-6 rounded-2xl space-y-5">
        {/* Ticket Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Ticket Title / Subject *
          </label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Brief summary of the issue (5-100 characters)"
            className={inputClassName("title")}
            maxLength={100}
          />
          <div className="flex justify-between items-center mt-1">
            {errors.title ? (
              <p className="text-sm text-blue-600 dark:text-blue-400">{errors.title}</p>
            ) : (
              <span className="text-xs text-slate-500">{formData.title.length}/100 characters</span>
            )}
          </div>
        </div>

        {/* Category & Priority */}
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-2">
              Category / Issue Type *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className={inputClassName("category")}
            >
              <option value="bug">Bug Report</option>
              <option value="feature-request">Feature Request</option>
              <option value="general">General Query</option>
              <option value="login-issue">Login Issue</option>
              <option value="dashboard-issue">Dashboard Issue</option>
              <option value="performance">Performance Issue</option>
              <option value="installation">Installation Help</option>
              <option value="integration">Integration Support</option>
            </select>
          </div>
          <div>
            <label htmlFor="priority" className="block text-sm font-medium mb-2">
              Priority Level *
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
              className={inputClassName("priority")}
            >
              <option value="low">Low - General inquiry</option>
              <option value="medium">Medium - Standard issue</option>
              <option value="high">High - Affects productivity</option>
              <option value="urgent">Urgent - Critical system down</option>
            </select>
          </div>
        </div>

        {/* Issue Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Issue Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder={
              "Please provide detailed information about the issue:\n- What were you trying to do?\n- What happened instead?\n- What did you expect to happen?\n- Steps to reproduce (if applicable)"
            }
            rows={8}
            className={inputClassName("description")}
            maxLength={2000}
          />
          <div className="flex justify-between items-center mt-1">
            {errors.description ? (
              <p className="text-sm text-blue-600 dark:text-blue-400">{errors.description}</p>
            ) : (
              <span className="text-xs text-slate-500">{formData.description.length}/2000 characters</span>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              className={inputClassName("name")}
              maxLength={50}
            />
            {errors.name && <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className={inputClassName("email")}
            />
            {errors.email && <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">{errors.email}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number {formData.priority === "urgent" && "*"}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 123-4567"
              className={inputClassName("phone")}
            />
            {errors.phone && <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="organization" className="block text-sm font-medium mb-2">
              Organization
            </label>
            <input
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              placeholder="Your company or organization"
              className={inputClassName("organization")}
              maxLength={100}
            />
            {errors.organization && (
              <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">{errors.organization}</p>
            )}
          </div>
        </div>

        {/* Technical Information */}
        <div className="grid md:grid-cols-2 gap-3 items-end">
          <div>
            <label htmlFor="supersetVersion" className="block text-sm font-medium mb-2">
              Apache Superset Version *
            </label>
            <input
              id="supersetVersion"
              name="supersetVersion"
              value={formData.supersetVersion}
              onChange={handleInputChange}
              placeholder="e.g., 3.1.0"
              className={inputClassName("supersetVersion")}
            />
            {errors.supersetVersion && (
              <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">{errors.supersetVersion}</p>
            )}
          </div>

          <label className="flex items-center gap-3 select-none p-2">
            <input
              type="checkbox"
              id="openForCall"
              name="openForCall"
              checked={formData.openForCall}
              onChange={handleInputChange}
              className="w-4 h-4 text-blue-600 bg-transparent border-2 border-slate-300 dark:border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-sm font-medium">Available for phone call?</span>
          </label>
        </div>

        {/* Submit Button + Errors */}
        <div className="pt-4 space-y-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full
                       bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium
                       hover:opacity-95 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Creating Ticket...</span>
              </>
            ) : (
              <>
                <Ticket className="w-5 h-5" />
                <span>Submit Support Ticket</span>
              </>
            )}
          </button>

          {submitStatus === "error" && (
            <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Submission Failed</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">{submitError}</p>
                <p className="text-xs text-blue-500 dark:text-blue-500 mt-2">
                  If the problem persists, please email us directly at support@glimvia.com
                </p>
              </div>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
