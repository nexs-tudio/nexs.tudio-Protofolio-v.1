import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { VideoPanel } from "@/components/video-panel";
import { caseStudies } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Capability-based case studies showing the kinds of product, dashboard, and API outcomes nexs.tudio builds.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Capability cases that show what clients can buy."
        body="Until client case studies are ready to publish, this page presents realistic outcome tracks without pretending they are completed client work."
        primaryHref="/contact"
        primaryLabel="Discuss your case"
      />
      <section className="section-shell py-20 md:py-28">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="lg:row-span-3">
            <VideoPanel
              src="/assets/video/product-morph.mp4"
              poster="/assets/nexstudio_launch_post.png"
              label="Product interface morph animation"
              className="h-full min-h-[440px]"
            />
          </Reveal>
          {caseStudies.map((item) => (
            <Reveal key={item.slug}>
              <article className="rounded-lg border border-line bg-panel/85 p-7">
                <p className="mb-4 font-mono text-xs font-semibold uppercase text-green">
                  {item.category}
                </p>
                <h2 className="text-3xl font-extrabold">{item.title}</h2>
                <p className="mt-4 leading-8 text-muted">{item.summary}</p>
                <p className="mt-4 leading-8 text-muted">{item.outcome}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((stack) => (
                    <span
                      key={stack}
                      className="rounded-full border border-line px-3 py-2 font-mono text-xs text-muted"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/contact">
            Shape a project like this
            <ArrowRight size={17} />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
