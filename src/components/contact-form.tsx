"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { budgetRanges, services, timelines } from "@/content/site";

type Status = {
  type: "idle" | "success" | "error";
  message: string;
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      projectType: String(formData.get("projectType") ?? ""),
      budgetRange: String(formData.get("budgetRange") ?? ""),
      timeline: String(formData.get("timeline") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Could not send the inquiry.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Your project brief was sent. We will reply soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Could not send the inquiry. Please email hello@nexs.tudio.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="grid gap-4 rounded-lg border border-line bg-panel/90 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:p-7"
      onSubmit={handleSubmit}
    >
      <label className="hidden">
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-muted">
          Name
          <input
            name="name"
            required
            autoComplete="name"
            className="min-h-12 rounded-lg border border-line bg-white/[0.045] px-3 text-foreground outline-none transition focus:border-green/70"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-muted">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="min-h-12 rounded-lg border border-line bg-white/[0.045] px-3 text-foreground outline-none transition focus:border-green/70"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-muted">
        Project type
        <select
          name="projectType"
          required
          className="min-h-12 rounded-lg border border-line bg-panel-strong px-3 text-foreground outline-none transition focus:border-green/70"
        >
          <option value="">Select one</option>
          {services.map((service) => (
            <option key={service.slug}>{service.title}</option>
          ))}
        </select>
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-muted">
          Budget range
          <select
            name="budgetRange"
            required
            className="min-h-12 rounded-lg border border-line bg-panel-strong px-3 text-foreground outline-none transition focus:border-green/70"
          >
            <option value="">Select one</option>
            {budgetRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-muted">
          Timeline
          <select
            name="timeline"
            required
            className="min-h-12 rounded-lg border border-line bg-panel-strong px-3 text-foreground outline-none transition focus:border-green/70"
          >
            <option value="">Select one</option>
            {timelines.map((timeline) => (
              <option key={timeline}>{timeline}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-muted">
        What do you need?
        <textarea
          name="message"
          rows={6}
          required
          className="resize-y rounded-lg border border-line bg-white/[0.045] px-3 py-3 text-foreground outline-none transition focus:border-green/70"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-violet/70 bg-[linear-gradient(135deg,var(--violet),#5b8cff)] px-5 text-sm font-bold text-foreground shadow-[0_16px_48px_rgba(139,76,255,0.28)] transition hover:shadow-[0_18px_60px_rgba(139,76,255,0.36)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send size={17} />
        {isSubmitting ? "Sending..." : "Send project brief"}
      </button>

      <p
        className={
          status.type === "error"
            ? "min-h-6 text-sm text-amber"
            : "min-h-6 text-sm text-green"
        }
        aria-live="polite"
      >
        {status.message}
      </p>
    </form>
  );
}
