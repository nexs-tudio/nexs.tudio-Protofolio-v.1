import type { Metadata } from "next";
import { ClipboardCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send nexs.tudio a project brief for a website, full-stack app, API, dashboard, or system upgrade.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to build."
        body="Share the business goal, timeline, budget range, and what already exists. A short, clear message is enough to start."
        primaryHref="mailto:hello@nexs.tudio"
        primaryLabel="Email directly"
      />
      <section className="section-shell grid gap-8 py-20 md:grid-cols-[0.78fr_1fr] md:py-28">
        <div>
          <p className="mb-4 font-mono text-xs font-semibold uppercase text-green">
            Project inquiry
          </p>
          <h2 className="text-4xl font-extrabold leading-[1.05] md:text-5xl">
            The right first message is simple.
          </h2>
          <p className="mt-5 leading-8 text-muted">
            Tell us what the software should help your business do, what
            timeline you have in mind, and whether you already have designs,
            data, or an existing system.
          </p>
          <div className="mt-7 rounded-[1.5rem] border border-white/12 bg-white/[0.04] p-5">
            <p className="font-mono text-sm text-muted">hello@nexs.tudio</p>
          </div>
          <div className="mt-7 grid gap-3">
            {[
              "We reply with the best next step.",
              "You get a rough scope and budget fit.",
              "If it makes sense, we plan the first release.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.035] px-4 py-3 text-sm text-muted"
              >
                <ClipboardCheck size={16} className="shrink-0 text-green" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
