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
    <header className="fixed left-1/2 top-3 z-50 w-[min(1080px,calc(100%_-_20px))] -translate-x-1/2 rounded-[1.7rem] border border-white/12 bg-background/62 px-3 py-2 shadow-[0_22px_70px_rgba(0,0,0,0.42),0_0_42px_rgba(240,24,159,0.1)] backdrop-blur-2xl md:top-4 md:rounded-full">
      <div className="flex min-h-12 items-center justify-between gap-3">
        <Link
          href="/"
          className="font-display inline-flex items-center gap-3 whitespace-nowrap text-base font-extrabold text-foreground md:text-lg"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/assets/nexstudio_icon_black.png"
            alt=""
            width={34}
            height={34}
            className="rounded-full ring-1 ring-pink/35 shadow-[0_0_22px_rgba(139,76,255,0.22)]"
            priority
          />
          <span>
            nexs<span className="text-violet">.</span>tudio
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 text-sm text-muted lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "rounded-full bg-white/[0.08] px-3.5 py-2 text-foreground shadow-[0_0_24px_rgba(240,24,159,0.12)]"
                    : "rounded-full px-3.5 py-2 transition hover:bg-white/[0.055] hover:text-foreground"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="font-display hidden min-h-11 items-center justify-center rounded-full border border-pink/45 bg-[linear-gradient(135deg,rgba(240,24,159,0.22),rgba(87,217,255,0.08))] px-5 text-sm font-bold transition hover:border-cyan/50 hover:bg-white/[0.08] sm:inline-flex"
        >
          Start a project
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/[0.04] text-foreground lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <nav className="grid gap-2 pb-2 pt-3 lg:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full bg-white/[0.06] px-4 py-3 text-sm font-semibold text-muted"
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
