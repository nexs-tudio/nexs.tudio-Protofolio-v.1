import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore nexs.tudio services for full-stack apps, APIs, analytics dashboards, and cloud-ready architecture.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Focused engineering tracks for real business software."
        body="Each service is shaped around a launchable outcome, clear weekly progress, and a system that can be maintained after the first release."
      />
      <section className="section-shell py-20 md:py-28">
        <div className="grid gap-5">
          {services.map((service, index) => (
            <Reveal key={service.slug}>
              <article className="grid gap-8 rounded-lg border border-line bg-panel/85 p-6 md:grid-cols-[0.7fr_1fr] md:p-8">
                <div>
                  <p className="mb-4 font-mono text-xs font-semibold uppercase text-green">
                    {String(index + 1).padStart(2, "0")} / {service.eyebrow}
                  </p>
                  <h2 className="text-3xl font-extrabold md:text-5xl">{service.title}</h2>
                  <p className="mt-5 leading-8 text-muted">{service.details}</p>
                </div>
                <div>
                  <p className="mb-4 font-mono text-xs font-semibold uppercase text-amber">
                    Outcomes
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-3 text-muted">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-green" size={18} />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line px-3 py-2 font-mono text-xs text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
