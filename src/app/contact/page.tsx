import type { Metadata } from "next";
import {
  ArrowUpRight,
  ExternalLink,
  Mail,
  MessageCircle,
  Phone,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { contactDetails } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Meet the founder of nexs.tudio and get in touch by email, WhatsApp, phone, or LinkedIn about your project.",
};

const contactCards = [
  {
    title: "Email",
    value: contactDetails.email,
    description: "Share a little about what you have in mind.",
    href: `mailto:${contactDetails.email}`,
    icon: Mail,
    tone: "bg-[#E6F9FD] text-[#0E7490]",
  },
  {
    title: "WhatsApp",
    value: "Start a conversation",
    description: contactDetails.whatsapp.join("  ·  "),
    href: `https://wa.me/${contactDetails.whatsapp[0].replace("+", "")}`,
    icon: MessageCircle,
    tone: "bg-[#E8F7EF] text-[#23845B]",
  },
  {
    title: "Phone",
    value: contactDetails.phone,
    description: "Call us to talk through your project.",
    href: `tel:${contactDetails.phone}`,
    icon: Phone,
    tone: "bg-[#FFF1E7] text-[#D96824]",
  },
  {
    title: "LinkedIn",
    value: "nexs.tudio company page",
    description: "Connect with the studio on LinkedIn.",
    href: contactDetails.linkedin,
    icon: ExternalLink,
    tone: "bg-[#EAF2FF] text-[#3B6FC4]",
  },
] satisfies {
  title: string;
  value: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tone: string;
}[];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let’s talk"
        title="Have an idea? Let’s make it real."
        body="Tell us what you’re building, what’s getting in the way, or where you’d like to go next. We’ll find the right way to move it forward together."
        primaryHref={`mailto:${contactDetails.email}`}
        primaryLabel="Tell us about your project"
        animateTitle
      />
      <section className="section-shell pt-10 md:pt-14">
        <div className="relative overflow-hidden rounded-2xl border border-[#D9E4EC] bg-white/85 p-6 shadow-[0_8px_30px_rgba(11,27,51,0.05)] md:flex md:items-center md:justify-between md:gap-8 md:p-8">
          <div className="absolute -right-14 -top-20 h-52 w-52 rounded-full bg-[#22D3EE]/10 blur-3xl" />
          <div className="relative flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E6F9FD] text-[#0E7490]">
              <UserRound size={22} aria-hidden="true" />
            </span>
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-green">
                Founder-led, from day one
              </p>
              <h2 className="mt-2 text-xl font-bold tracking-tight text-foreground md:text-2xl">
                Meet the founder behind nexs.tudio.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                You’ll work directly with the founder—not get passed between
                layers of account management. Get to know the person who will
                help shape and build your project.
              </p>
            </div>
          </div>
          <div className="relative mt-5 flex shrink-0 flex-wrap gap-3 pl-16 md:mt-0 md:pl-0">
            <a
              href="https://sadumina-rathnayaka-prof-v1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line bg-white px-5 text-sm font-bold text-foreground transition hover:border-[#22D3EE] hover:bg-[#F0FBFD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E7490]"
            >
              Meet the founder
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${contactDetails.email}?subject=${encodeURIComponent("A message for the nexs.tudio founder")}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0B1B33] px-5 text-sm font-bold text-white transition hover:bg-[#0E7490] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
            >
              Contact the founder
              <Mail size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section className="section-shell py-14 md:py-20">
        <div className="mb-8 grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-green">
              Choose your channel
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Start wherever feels natural.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted md:text-right">
            A short note is enough to get started. We’ll take it from there.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactCards.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={item.title === "LinkedIn" || item.title === "WhatsApp" ? "_blank" : undefined}
                rel={item.title === "LinkedIn" || item.title === "WhatsApp" ? "noreferrer" : undefined}
                className="group relative flex min-h-44 flex-col justify-between overflow-hidden rounded-2xl border border-line bg-white/80 p-6 shadow-[0_8px_30px_rgba(11,27,51,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#22D3EE]/60 hover:shadow-[0_16px_36px_rgba(11,27,51,0.1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E7490] md:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.tone} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="mt-1 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0E7490]"
                  />
                </div>
                <div className="mt-7">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-green">
                    {item.title}
                  </p>
                  <p className="mt-2 break-words text-lg font-bold text-foreground">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="relative mt-8 overflow-hidden rounded-2xl bg-[#0B1B33] p-6 text-white md:p-8">
          <div className="absolute -right-12 -top-20 h-56 w-56 rounded-full bg-[#22D3EE]/15 blur-3xl" />
          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#67E8F9]">
                A good place to begin
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200">
                Share what your business does, the challenge you’re facing, and
                what a successful outcome would look like. No polished brief
                needed—just start the conversation.
              </p>
            </div>
            <a
              href={`mailto:${contactDetails.email}?subject=${encodeURIComponent("Let’s talk about a project")}`}
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[#0B1B33] transition hover:bg-[#CFFAFE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
            >
              Email the studio
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <p className="relative mt-5 border-t border-white/15 pt-4 text-xs leading-5 text-slate-400">
            Prefer a direct message? Reach out through the channels above. Your
            project details stay in the conversation you choose.
          </p>
        </div>
      </section>
    </>
  );
}
