import type { Metadata } from "next";
import Image from "next/image";
import { Layers3, Lightbulb, Rocket } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { techStack } from "@/content/site";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Meet nexs.tudio, an independent Colombo-based digital studio turning business ideas into thoughtfully designed, dependable software.",
};

const studioPrinciples = [
  {
    title: "Understand",
    body: "We start with your business, your people, and the problem worth solving.",
    Icon: Lightbulb,
    tone: "text-[#D96824] bg-[#FFF1E7]",
  },
  {
    title: "Design & build",
    body: "We bring product thinking and engineering together in one focused team.",
    Icon: Layers3,
    tone: "text-[#6D5BD0] bg-[#F0EDFF]",
  },
  {
    title: "Move forward",
    body: "We launch a useful first version, then help it grow with your business.",
    Icon: Rocket,
    tone: "text-[#0E7490] bg-[#E6F9FD]",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet the studio"
        title="We are nexs.tudio."
        body="We turn your business ideas into thoughtful digital experiences—bringing strategy, design, and engineering together to build software that represents your business and helps it grow."
        animateTitle
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
              From full-stack products and customer-facing websites to
              dashboards and backend systems, we make the complex feel clear.
              You work directly with the founder through each step, with
              progress you can see and decisions grounded in your goals.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {studioPrinciples.map(({ title, body, Icon, tone }) => (
                <div
                  key={title}
                  className="group rounded-lg border border-line bg-panel-strong p-4 transition duration-300 hover:-translate-y-1 hover:border-[#22D3EE]/60 hover:shadow-[0_12px_30px_rgba(11,27,51,0.08)]"
                >
                  <Icon
                    size={20}
                    aria-hidden="true"
                    className={`mb-4 rounded-md p-1 ${tone} transition-transform duration-300 group-hover:scale-110`}
                  />
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
