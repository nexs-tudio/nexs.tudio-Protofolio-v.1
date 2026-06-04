import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { VideoPanel } from "@/components/video-panel";
import {
  caseStudies,
  pricingPackages,
  processSteps,
  services,
  techStack,
  trustSignals,
} from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden px-5 pb-12 pt-32 md:pt-40">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_38%,rgba(240,24,159,0.24),transparent_24rem),radial-gradient(circle_at_80%_52%,rgba(87,217,255,0.3),transparent_28rem),radial-gradient(circle_at_52%_20%,rgba(139,76,255,0.28),transparent_34rem),linear-gradient(90deg,rgba(3,2,7,0.97),rgba(21,5,42,0.72),rgba(3,2,7,0.96))]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(139,76,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(139,76,255,0.07)_1px,transparent_1px)] bg-[size:58px_58px] [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />
        <span className="floating-dot left-[7%] top-[48%]" />
        <span className="floating-dot bottom-[14%] left-[28%] h-7 w-7 bg-[radial-gradient(circle,#fff,var(--pink)_38%,transparent_72%)] shadow-[0_0_34px_rgba(240,24,159,0.78)]" />
        <span className="floating-leaf right-[8%] top-[31%]" />
        <span className="floating-dot right-[13%] top-[70%]" />

        <div className="section-shell relative">
          <p className="pointer-events-none absolute left-0 top-24 -z-10 hidden select-none text-[10vw] font-extrabold leading-none text-white/[0.035] lg:block">
            NEXS
          </p>

          <div className="grid min-h-[calc(100svh-9rem)] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-[680px]">
              <p className="mb-5 inline-flex rounded-full border border-cyan/25 bg-white/[0.05] px-4 py-2 font-mono text-[11px] font-semibold uppercase text-green shadow-[0_0_30px_rgba(87,217,255,0.16)]">
                Colombo software studio
              </p>
              <h1 className="text-5xl font-extrabold leading-[0.95] text-foreground md:text-7xl">
                Software that works. Shipped fast.
              </h1>
              <p className="mt-6 max-w-[560px] text-lg leading-8 text-muted">
                nexs.tudio builds full-stack products, APIs, dashboards, and
                cloud-ready systems for teams that need serious delivery.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" className="soft-pulse">
                  Start a project
                  <ArrowRight size={17} />
                </ButtonLink>
                <ButtonLink href="/work" variant="secondary">
                  View work style
                </ButtonLink>
              </div>
              <div className="mt-9 flex flex-wrap gap-3 text-sm text-muted">
                {["Full-stack apps", "Backend APIs", "Analytics dashboards"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 backdrop-blur"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="relative flex min-h-[500px] items-center justify-center lg:justify-end">
              <div className="hero-orbit left-[6%] top-[4%] h-[520px] w-[520px]" />
              <div className="hero-orbit left-[20%] top-[18%] h-[350px] w-[350px]" />
              <div className="absolute right-0 top-8 hidden rounded-full bg-[linear-gradient(135deg,var(--pink),var(--violet),var(--cyan))] p-px lg:block">
                <div className="rounded-full bg-background/75 px-4 py-2 font-mono text-[11px] uppercase text-muted backdrop-blur">
                  build / ship / scale
                </div>
              </div>

              <article className="relative flex h-[460px] w-full max-w-[520px] items-center justify-center">
                <div className="logo-ring logo-ring-one" />
                <div className="logo-ring logo-ring-two" />
                <div className="logo-ring logo-ring-three" />
                <div className="logo-orbital-shadow" />
                <div className="logo-object">
                  <Image
                    src="/assets/nexstudio_icon_transparent.png"
                    alt="nexs.tudio N mark"
                    width={420}
                    height={420}
                    priority
                    className="h-72 w-72 object-contain md:h-[22rem] md:w-[22rem]"
                  />
                </div>
                <div className="absolute -bottom-1 left-1/2 z-10 w-[min(100%,420px)] -translate-x-1/2 rounded-full border border-white/12 bg-background/45 px-5 py-3 text-center backdrop-blur-xl">
                  <p className="font-mono text-xs uppercase text-green">
                    Brand-led engineering
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white/[0.025] py-5">
        <div className="section-shell flex flex-wrap gap-2">
          {techStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/12 bg-white/[0.035] px-3 py-2 font-mono text-xs text-muted transition hover:border-cyan/40 hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <SectionHeading
          eyebrow="What we build"
          title="Choose a focused build track and get a working release."
          body="Each offer is designed around a business outcome, not a vague list of features. Clients should understand what they are buying within seconds."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug}>
              <article className="neon-surface group min-h-[360px] rounded-[2rem] p-7 transition duration-300 hover:-translate-y-2">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] text-cyan transition group-hover:border-pink/35 group-hover:text-pink">
                    {index === 0 ? <Layers3 size={22} /> : null}
                    {index === 1 ? <ShieldCheck size={22} /> : null}
                    {index === 2 ? <Sparkles size={22} /> : null}
                    {index === 3 ? <Rocket size={22} /> : null}
                  </div>
                  <span className="font-mono text-sm text-amber">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-8 font-mono text-xs uppercase text-green">
                  {service.eyebrow}
                </p>
                <h3 className="mt-3 text-3xl font-extrabold">{service.title}</h3>
                <p className="mt-4 leading-7 text-muted">{service.details}</p>
                <ul className="mt-6 grid gap-2">
                  {service.outcomes.slice(0, 3).map((outcome) => (
                    <li key={outcome} className="flex gap-3 text-sm text-muted">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-green" size={16} />
                      {outcome}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-2">
                  {service.stack.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/12 bg-white/[0.035] px-3 py-1.5 font-mono text-[11px] text-dim transition group-hover:border-cyan/35 group-hover:text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <ButtonLink
                  href="/services"
                  variant="ghost"
                  className="mt-7 min-h-0 px-0 text-sm text-green hover:text-foreground"
                >
                  Explore track
                  <ArrowRight size={15} />
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white/[0.02] py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            compact
            eyebrow="Why clients choose us"
            title="Professional delivery signals before the first call."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trustSignals.map((signal, index) => (
              <Reveal key={signal.title}>
                <article className="rounded-[1.6rem] border border-white/12 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan/35 hover:bg-white/[0.06]">
                  <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(240,24,159,0.3),rgba(87,217,255,0.18))] text-foreground">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-extrabold">{signal.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{signal.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <SectionHeading
          compact
          eyebrow="Capability cases"
          title="Show clients the outcomes, not just the stack."
        />
        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <article className="neon-surface h-full overflow-hidden rounded-[2.4rem]">
              <VideoPanel
                src="/assets/video/product-morph.mp4"
                poster="/assets/nexstudio_launch_post.png"
                label="Abstract product morph preview"
                className="border-0"
              />
              <div className="p-8">
                <p className="mb-3 font-mono text-xs font-semibold uppercase text-green">
                  Featured build path
                </p>
                <h3 className="max-w-2xl text-4xl font-extrabold leading-tight">
                  From idea to usable MVP without losing weeks in planning fog.
                </h3>
                <p className="mt-4 max-w-2xl leading-8 text-muted">
                  Discovery, UX structure, frontend, backend, database, and
                  deployment are shaped as one release plan. The client sees
                  working software early and can steer priorities.
                </p>
              </div>
            </article>
          </Reveal>
          <div className="grid gap-4">
            {caseStudies.map((item) => (
              <Reveal key={item.slug}>
                <article className="neon-surface rounded-[1.8rem] p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-mono text-xs font-semibold uppercase text-green">
                      {item.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.stack.slice(0, 2).map((stack) => (
                        <span
                          key={stack}
                          className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] text-muted"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="mt-5 text-2xl font-extrabold">{item.title}</h3>
                  <div className="mt-5 grid gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase text-amber">
                        Client problem
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted">{item.summary}</p>
                    </div>
                    <div className="rounded-[1.2rem] border border-pink/25 bg-pink/[0.055] p-4">
                      <p className="font-mono text-[11px] uppercase text-pink">
                        Business result
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted">{item.outcome}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white/[0.02] py-20 md:py-28">
        <div className="section-shell">
        <SectionHeading
          eyebrow="How projects run"
          title="Clear steps, weekly progress, no mystery build."
          body="A simple delivery rhythm makes clients feel safe: scope, system plan, weekly review, launch handoff."
        />
        <ol className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.title}>
              <li className="min-h-72 rounded-[1.8rem] border border-white/12 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-green/35">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-amber/35 bg-amber/10 font-mono text-sm text-amber">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 text-2xl font-extrabold">{step.title}</h3>
                <p className="mt-4 leading-7 text-muted">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
          <SectionHeading
            compact
            eyebrow="Packages"
            title="Make pricing feel clear without locking every project."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {pricingPackages.map((plan) => (
              <Reveal key={plan.name}>
                <article
                  className={
                    plan.featured
                    ? "neon-surface relative overflow-hidden rounded-[2rem] p-7"
                      : "rounded-[2rem] border border-white/12 bg-white/[0.04] p-7 backdrop-blur transition hover:-translate-y-1 hover:border-cyan/30"
                  }
                >
                  {plan.featured ? (
                    <p className="absolute right-5 top-5 rounded-full border border-pink/35 bg-pink/10 px-3 py-1.5 font-mono text-[11px] uppercase text-pink">
                      popular
                    </p>
                  ) : null}
                  <h3 className="text-2xl font-extrabold">{plan.name}</h3>
                  <p className="mt-4 text-3xl font-extrabold text-foreground">{plan.price}</p>
                  <p className="mt-4 leading-7 text-muted">{plan.summary}</p>
                  <ul className="mt-6 grid gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-muted">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-green" size={17} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href="/contact"
                    variant={plan.featured ? "primary" : "secondary"}
                    className="mt-7 w-full"
                  >
                    Discuss {plan.name}
                    <ArrowRight size={16} />
                  </ButtonLink>
                </article>
              </Reveal>
            ))}
          </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <div className="neon-surface overflow-hidden rounded-[2.4rem] p-7 md:p-10">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-pink/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-cyan/15 blur-3xl" />
          <p className="mb-4 font-mono text-xs font-semibold uppercase text-green">
            Start the conversation
          </p>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.03] md:text-6xl">
                Ready to turn the idea into a working system?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                Share the business goal, timeline, and what already exists. We
                will reply with the most practical first step for your build.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
                {["Reply with next steps", "Scope recommendation", "Budget fit check"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-2"
                  >
                    <ClipboardCheck size={15} className="text-green" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <ButtonLink href="/contact">
              Send project brief
              <ArrowRight size={17} />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
