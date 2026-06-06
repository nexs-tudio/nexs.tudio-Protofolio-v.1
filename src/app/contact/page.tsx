import type { Metadata } from "next";
import { ExternalLink, Mail, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { contactDetails } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact nexs.tudio by email, WhatsApp, phone, or LinkedIn for website, app, API, dashboard, and software system inquiries.",
};

const contactCards = [
  {
    title: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    icon: Mail,
  },
  {
    title: "WhatsApp",
    value: contactDetails.whatsapp.join(" / "),
    href: `https://wa.me/${contactDetails.whatsapp[0].replace("+", "")}`,
    icon: MessageCircle,
  },
  {
    title: "Phone",
    value: contactDetails.phone,
    href: `tel:${contactDetails.phone}`,
    icon: Phone,
  },
  {
    title: "LinkedIn",
    value: "nexs.tudio company page",
    href: contactDetails.linkedin,
    icon: ExternalLink,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact nexs.tudio directly."
        body="We do not collect project details through a website form. Reach us through email, WhatsApp, phone, or LinkedIn so your information stays private."
        primaryHref={`mailto:${contactDetails.email}`}
        primaryLabel="Email us"
      />
      <section className="section-shell py-20 md:py-28">
        <div className="grid gap-5 md:grid-cols-2">
          {contactCards.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={item.title === "LinkedIn" || item.title === "WhatsApp" ? "_blank" : undefined}
                rel={item.title === "LinkedIn" || item.title === "WhatsApp" ? "noreferrer" : undefined}
                className="neon-surface group rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-xs uppercase text-green">{item.title}</p>
                    <p className="mt-4 text-2xl font-extrabold text-foreground">
                      {item.value}
                    </p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.055] text-cyan transition group-hover:border-pink/35 group-hover:text-pink">
                    <Icon size={21} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-8 rounded-[2rem] border border-white/12 bg-white/[0.04] p-7">
          <p className="font-mono text-xs uppercase text-amber">Privacy note</p>
          <p className="mt-3 max-w-3xl leading-8 text-muted">
            This website does not include a project/contact form and does not
            store client project information. Please contact us directly using
            the details above.
          </p>
        </div>
      </section>
    </>
  );
}
