import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MessageCircle, Phone } from "lucide-react";
import { contactDetails, navItems } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-background/85 py-10">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <Link href="/" className="font-display inline-flex items-center gap-3 text-lg font-extrabold">
            <Image
              src="/assets/nexstudio_icon_black.png"
              alt=""
              width={38}
              height={38}
              className="rounded-full ring-1 ring-pink/30"
            />
            <span>
              nexs<span className="text-violet">.</span>tudio
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
            Software engineering studio. Colombo, Sri Lanka.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <nav className="flex flex-wrap gap-4 text-sm text-muted md:col-span-2" aria-label="Footer navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="grid gap-3 text-sm text-muted">
            <a href={`mailto:${contactDetails.email}`} className="inline-flex items-center gap-3 transition hover:text-foreground">
              <Mail size={16} className="text-green" />
              {contactDetails.email}
            </a>
            <a href={`tel:${contactDetails.phone}`} className="inline-flex items-center gap-3 transition hover:text-foreground">
              <Phone size={16} className="text-green" />
              {contactDetails.phone}
            </a>
          </div>

          <div className="grid gap-3 text-sm text-muted">
            <a
              href={`https://wa.me/${contactDetails.whatsapp[0].replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 transition hover:text-foreground"
            >
              <MessageCircle size={16} className="text-green" />
              {contactDetails.whatsapp.join(" / ")}
            </a>
            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 transition hover:text-foreground"
            >
              <ExternalLink size={16} className="text-green" />
              LinkedIn company page
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
