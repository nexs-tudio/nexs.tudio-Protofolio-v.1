import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { contactDetails } from "@/content/site";

const studioLinks = [
  { label: "About the studio", href: "/about" },
  { label: "Selected work", href: "/work" },
];

const serviceLinks = [
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/pricing" },
];

const footerLinkClass =
  "text-sm leading-6 text-slate-300 transition-colors hover:text-[#67E8F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07111F] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_0%,rgba(14,116,144,0.16),transparent_32rem)]" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid min-h-28 items-center border-b border-white/10 py-6 sm:grid-cols-[minmax(0,320px)_1fr] sm:py-7">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-3 rounded-sm text-lg font-extrabold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]"
            aria-label="nexs.tudio home"
          >
            <Image
              src="/assets/nexstudio_icon_transparent.png"
              alt=""
              width={38}
              height={38}
              className="rounded-full"
            />
            <span>
              nexs<span className="text-[#22D3EE]">.</span>tudio
            </span>
          </Link>
          <p className="mt-4 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400 sm:mt-0 sm:justify-self-end">
            Independent software studio <span className="px-2 text-[#22D3EE]">/</span>
            Colombo, Sri Lanka
          </p>
        </div>

        <div className="grid gap-10 py-10 md:grid-cols-2 md:gap-8 lg:grid-cols-[minmax(220px,1.1fr)_minmax(130px,0.7fr)_minmax(130px,0.7fr)_minmax(260px,1fr)] lg:gap-10 lg:py-12">
          <div className="max-w-sm">
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Digital products, thoughtfully built
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              We bring your brand, services, and customer experience together
              in software made to represent and grow your business.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#67E8F9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]"
            >
              Start a conversation
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <nav aria-label="Studio links">
            <h2 className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Studio
            </h2>
            <ul className="grid gap-2.5">
              {studioLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services and pricing">
            <h2 className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              What we do
            </h2>
            <ul className="grid gap-2.5">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Get in touch
            </h2>
            <ul className="grid gap-3">
              <li>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className={`inline-flex items-start gap-2.5 ${footerLinkClass}`}
                >
                  <Mail size={15} className="mt-1 shrink-0 text-[#22D3EE]" aria-hidden="true" />
                  {contactDetails.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactDetails.phone}`}
                  className={`inline-flex items-center gap-2.5 ${footerLinkClass}`}
                >
                  <Phone size={15} className="shrink-0 text-[#22D3EE]" aria-hidden="true" />
                  {contactDetails.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contactDetails.whatsapp[0].replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2.5 ${footerLinkClass}`}
                >
                  <MessageCircle size={15} className="shrink-0 text-[#22D3EE]" aria-hidden="true" />
                  WhatsApp
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2.5 ${footerLinkClass}`}
                >
                  <ExternalLink size={15} className="shrink-0 text-[#22D3EE]" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} nexs.tudio. All rights reserved.</p>
          <p className="font-mono text-[9px] uppercase tracking-[0.12em]">
            Built with care in Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
