import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { techStack } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About nexs.tudio, a Colombo-based software engineering studio building practical products and systems.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A small studio for practical, shipped software."
        body="nexs.tudio is built around a simple promise: understand the business problem, design the system clearly, and ship software that people can actually use."
      />
      <section className="section-shell grid gap-8 py-20 md:grid-cols-[0.85fr_1fr] md:py-28">
        <Reveal>
          <div className="overflow-hidden rounded-lg border border-line bg-panel">
            <Image
              src="/assets/nexstudio_launch_post.png"
              alt="nexs.tudio launch visual"
              width={1080}
              height={1080}
              className="aspect-square object-cover"
            />
          </div>
        </Reveal>
        <Reveal>
          <div className="rounded-lg border border-line bg-panel/85 p-7 md:p-9">
            <p className="mb-4 font-mono text-xs font-semibold uppercase text-green">
              Studio position
            </p>
            <h2 className="text-4xl font-extrabold leading-[1.05] md:text-5xl">
              Technical enough for engineering, clear enough for business.
            </h2>
            <p className="mt-5 leading-8 text-muted">
              The studio focuses on full-stack web applications, backend
              systems, dashboards, and launch-ready cloud architecture. The goal
              is not to add more process than needed. The goal is to remove
              ambiguity and get the useful version live.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                ["Build", "Product thinking plus implementation."],
                ["Ship", "Weekly visible progress and practical launch steps."],
                ["Scale", "Architecture that can grow without becoming messy."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-lg border border-line bg-white/[0.035] p-4">
                  <h3 className="font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
      <section className="border-t border-line py-16">
        <div className="section-shell">
          <p className="mb-5 font-mono text-xs font-semibold uppercase text-green">
            Working stack
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line px-3 py-2 font-mono text-xs text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
