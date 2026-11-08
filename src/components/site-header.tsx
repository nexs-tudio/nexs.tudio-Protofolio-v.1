"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/about" },
  { label: "Pricing", href: "/pricing" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [openFromPath, setOpenFromPath] = useState<string | null>(null);
  const isOpen = openFromPath === pathname;
  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0 : 0.28;

  useEffect(() => {
    if (!isOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenFromPath(null);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/65 text-[#0B1B33] shadow-[0_8px_30px_rgba(11,27,51,0.08)] backdrop-blur-2xl">
      <div className="h-[2px] bg-gradient-to-r from-[#0E7490] via-[#22D3EE] to-[#0B1B33]" />
      <div className="relative mx-auto flex min-h-[72px] max-w-[1440px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center gap-2.5 rounded-sm text-base font-extrabold tracking-tight text-[#0B1B33] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0E7490] md:text-lg"
          aria-label="nexs.tudio home"
          onClick={() => setOpenFromPath(null)}
        >
          <Image
            src="/assets/nexstudio_icon_black.png"
            alt=""
            width={34}
            height={34}
            className="rounded-full"
            priority
          />
          <span>
            nexs<span className="text-[#0E7490]">.</span>tudio
          </span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => {
            const isCurrent =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`group relative rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[#F4F8FB] hover:text-[#0E7490] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E7490] ${
                  isCurrent ? "text-[#0E7490]" : "text-[#526176]"
                }`}
                  onClick={() => setOpenFromPath(null)}
              >
                {item.label}
                <span
                  className={`absolute inset-x-4 bottom-1 h-px origin-left bg-[#22D3EE] transition-transform duration-200 ${
                    isCurrent ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            onClick={() => setOpenFromPath(null)}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-[#0B1B33] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#0E7490] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE] sm:px-5"
          >
            <span className="hidden sm:inline">Start a project</span>
            <span className="sm:hidden">Contact</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#D9E4EC] bg-white text-[#0B1B33] transition-colors hover:border-[#22D3EE] hover:bg-[#E6F9FD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E7490] lg:hidden"
            aria-controls="mobile-primary-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setOpenFromPath(isOpen ? null : pathname)}
          >
            {isOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.nav
            id="mobile-primary-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#E6EDF2] lg:hidden"
          >
            <div className="mx-auto grid max-w-[1440px] gap-1 px-4 py-3 sm:px-6">
              {navigation.map((item, index) => {
                const isCurrent =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

                return (
                  <motion.div
                    key={item.href}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration,
                      delay: shouldReduceMotion ? 0 : index * 0.04,
                    }}
                  >
                    <Link
                      href={item.href}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold ${
                        isCurrent
                          ? "bg-[#E6F9FD] text-[#0E7490]"
                          : "text-[#526176] hover:bg-[#F4F8FB] hover:text-[#0B1B33]"
                      }`}
                      onClick={() => setOpenFromPath(null)}
                    >
                      {item.label}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
