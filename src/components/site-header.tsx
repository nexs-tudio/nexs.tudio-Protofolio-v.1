"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/content/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed left-1/2 top-3 z-50 w-[min(1120px,calc(100%_-_20px))] -translate-x-1/2 rounded-lg border border-line bg-background/75 px-3 py-2 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl md:top-4">
      <div className="flex min-h-12 items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-3 whitespace-nowrap text-lg font-extrabold text-foreground"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/assets/nexstudio_icon_square.png"
            alt=""
            width={36}
            height={36}
            className="rounded-lg"
            priority
          />
          <span>
            nexs<span className="text-violet">.</span>tudio
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-muted md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "text-foreground" : "transition hover:text-foreground"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden min-h-11 items-center justify-center rounded-lg border border-violet/60 bg-white/[0.04] px-4 text-sm font-bold transition hover:bg-white/[0.07] md:inline-flex"
        >
          Start a project
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-white/[0.04] text-foreground md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <nav className="grid gap-2 pb-2 pt-3 md:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg bg-white/[0.04] px-3 py-3 text-sm font-semibold text-muted"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
