import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-background/80 py-8">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="font-display inline-flex items-center gap-3 text-lg font-extrabold">
          <Image
            src="/assets/nexstudio_icon_black.png"
            alt=""
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span>
            nexs<span className="text-violet">.</span>tudio
          </span>
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm text-muted" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-dim">Software engineering studio. Colombo, Sri Lanka.</p>
      </div>
    </footer>
  );
}
