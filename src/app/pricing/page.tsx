import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { pricingPackages } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Basic, Advanced, and Premium nexs.tudio packages quoted after project scope.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Choose the package level that fits your build."
        body="We do not publish fixed prices because every project scope, timeline, and technical requirement is different. After a short discussion, we recommend the right package and quote."
      />
      <section className="section-shell py-20 md:py-28">
        <div className="grid gap-4 lg:grid-cols-3">
          {pricingPackages.map((plan) => (
            <Reveal key={plan.name}>
              <article
                className={
                  plan.featured
                    ? "rounded-lg border border-violet/70 bg-[linear-gradient(135deg,rgba(139,76,255,0.18),rgba(84,242,181,0.04)),var(--panel-strong)] p-7"
                    : "rounded-lg border border-line bg-panel/85 p-7"
                }
              >
                <h2 className="text-3xl font-extrabold">{plan.name}</h2>
                <p className="mt-5 text-4xl font-extrabold text-foreground">{plan.price}</p>
                <p className="mt-5 leading-8 text-muted">{plan.summary}</p>
                <ul className="mt-7 grid gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-muted">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-green" size={17} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 rounded-lg border border-line bg-panel/85 p-7 md:p-9">
          <h2 className="text-3xl font-extrabold">Need help choosing?</h2>
          <p className="mt-4 max-w-2xl leading-8 text-muted">
            Contact us directly with the business goal, timeline, and current
            system status. We will recommend Basic, Advanced, or Premium based
            on the real scope.
          </p>
          <ButtonLink href="/contact" className="mt-6">
            Contact nexs.tudio
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
