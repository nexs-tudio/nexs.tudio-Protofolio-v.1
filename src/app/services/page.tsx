import type { Metadata } from "next";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Cloud,
  Code2,
  PanelsTopLeft,
  ServerCog,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import SplitText from "@/components/SplitText";
import { TechnologyLogoLoop } from "@/components/technology-logo-loop";
import { services, type Service } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore nexs.tudio services for web apps, frontend product development, APIs, analytics dashboards, and cloud-ready architecture.",
};

const toneStyles = {
  cyan: {
    icon: "bg-[#E6F9FD] text-[#0E7490]",
    glow: "from-[#22D3EE]/15",
    tag: "border-[#0E7490]/15 bg-[#F0FBFD] text-[#0E7490]",
  },
  violet: {
    icon: "bg-[#F0EDFF] text-[#6D5BD0]",
    glow: "from-[#9B8AFB]/15",
    tag: "border-[#6D5BD0]/15 bg-[#F7F5FF] text-[#6352BF]",
  },
  blue: {
    icon: "bg-[#EAF2FF] text-[#3B6FC4]",
    glow: "from-[#76A7F7]/15",
    tag: "border-[#3B6FC4]/15 bg-[#F4F7FF] text-[#3B6FC4]",
  },
  orange: {
    icon: "bg-[#FFF1E7] text-[#D96824]",
    glow: "from-[#F6A46B]/15",
    tag: "border-[#D96824]/15 bg-[#FFF8F2] text-[#C45C1E]",
  },
  green: {
    icon: "bg-[#E8F7EF] text-[#23845B]",
    glow: "from-[#66C998]/15",
    tag: "border-[#23845B]/15 bg-[#F1FAF5] text-[#23845B]",
  },
} as const;

const serviceVisuals: Record<
  Service["slug"],
  { Icon: LucideIcon; tone: keyof typeof toneStyles }
> = {
  "full-stack-web-applications": {
    Icon: PanelsTopLeft,
    tone: "cyan",
  },
  "frontend-product-development": {
    Icon: Code2,
    tone: "violet",
  },
  "api-backend-systems": {
    Icon: ServerCog,
    tone: "blue",
  },
  "analytics-dashboards": {
    Icon: BarChart3,
    tone: "orange",
  },
  "cloud-ready-architecture": {
    Icon: Cloud,
    tone: "green",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Focused engineering tracks for real business software."
        body="From polished product interfaces to dependable backend systems, every service is shaped around a useful outcome and a clear path to launch."
        animateTitle
      />
      <TechnologyLogoLoop />

      <section className="section-shell py-14 md:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-green">
              What we can build together
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              One team, from interface to infrastructure.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">
            Choose a focused capability or bring us a challenge that needs a
            combination of these services.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:auto-rows-[minmax(230px,auto)] lg:grid-cols-3">
          {services.map((service, index) => {
            const visual = serviceVisuals[service.slug];
            const Icon = visual.Icon;
            const tone = toneStyles[visual.tone];
            const featured = service.slug === "full-stack-web-applications";

            return (
              <Reveal
                key={service.slug}
                className={
                  featured ? "h-full lg:col-span-2 lg:row-span-1" : "h-full"
                }
              >
                <article
                  className={`group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[1.65rem] border border-line bg-white p-6 shadow-[0_8px_28px_rgba(11,27,51,0.045)] transition duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[0_18px_42px_rgba(11,27,51,0.1)] md:p-7 ${
                    featured ? "lg:min-h-[340px] lg:p-8" : ""
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${tone.glow} to-transparent opacity-70 transition duration-300 group-hover:scale-110`}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tone.icon}`}
                    >
                      <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-dim">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div
                    className={`relative mt-5 flex flex-1 flex-col ${
                      featured ? "lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-8" : ""
                    }`}
                  >
                    <div className="flex flex-col items-start">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-green">
                        {service.eyebrow}
                      </p>
                      <h3
                        className={`mt-2 font-bold leading-tight tracking-tight text-foreground ${
                          featured ? "text-2xl md:text-3xl" : "text-xl"
                        }`}
                      >
                        <SplitText
                          text={service.title}
                          className="font-display"
                          effect="rise"
                          splitType="words"
                          delay={45}
                          duration={0.65}
                          staggerFrom="start"
                          trigger="view"
                          hoverEffect="none"
                          loop={false}
                          mask={false}
                          threshold={0.1}
                          rootMargin="-40px"
                          textAlign="left"
                          tag="span"
                        />
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted">
                        {service.details}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.stack.map((technology) => (
                          <span
                            key={technology}
                            className={`rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium ${tone.tag}`}
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/contact"
                        className="mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-semibold text-[#0E7490] transition-colors hover:text-[#0B1B33] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E7490]"
                      >
                        Discuss this service
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    </div>

                    {featured ? (
                      <div className="mt-6 hidden self-stretch rounded-2xl border border-line/80 bg-[#F7FAFC] p-4 lg:flex lg:flex-col">
                        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-dim">
                          Built for the full product journey
                        </p>
                        <div className="mt-4 grid flex-1 grid-cols-2 gap-2">
                          {service.outcomes.map((outcome, outcomeIndex) => (
                            <div
                              key={outcome}
                              className="flex min-w-0 items-start gap-2 rounded-xl border border-line/70 bg-white p-3"
                            >
                              <span
                                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                                  outcomeIndex % 2 === 0
                                    ? "bg-[#E6F9FD] text-[#0E7490]"
                                    : "bg-[#F0EDFF] text-[#6D5BD0]"
                                }`}
                              >
                                <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                              </span>
                              <span className="min-w-0 break-words text-xs leading-5 text-muted">
                                {outcome}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
