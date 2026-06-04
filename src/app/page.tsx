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
      <section className="relative min-h-screen overflow-hidden px-5 pb-10 pt-28 md:pt-36">
        <video
          aria-label="Abstract software studio background"
          autoPlay
          className="absolute inset-0 -z-30 h-full w-full object-cover opacity-30"
          loop
          muted
          playsInline
          poster="/assets/nexstudio_launch_post.png"
        >
          <source src="/assets/video/hero-flow.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_42%,rgba(139,76,255,0.34),transparent_22rem),radial-gradient(circle_at_84%_32%,rgba(87,217,255,0.16),transparent_18rem),linear-gradient(180deg,rgba(3,2,7,0.72),rgba(3,2,7,0.96)_78%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,transparent_calc(25%-1px),rgba(255,255,255,0.1)_25%,transparent_calc(25%+1px),transparent_calc(50%-1px),rgba(255,255,255,0.1)_50%,transparent_calc(50%+1px),transparent_calc(75%-1px),rgba(255,255,255,0.1)_75%,transparent_calc(75%+1px))]" />
        <span className="floating-dot left-[48%] top-[7%]" />
        <span className="floating-dot right-[20%] top-[18%] h-3 w-3 bg-[radial-gradient(circle,#fff,var(--pink)_38%,transparent_72%)] shadow-[0_0_34px_rgba(240,24,159,0.78)]" />
        <span className="floating-leaf right-[7%] top-[17%]" />

        <div className="section-shell relative grid min-h-[calc(100svh-8rem)] grid-rows-[1fr_auto]">
          <div className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.25fr_0.8fr]">
            <div className="max-w-xs self-center">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.055] backdrop-blur">
                <Image
                  src="/assets/nexstudio_icon_transparent.png"
                  alt=""
                  width={42}
                  height={42}
                  className="h-10 w-10 object-contain"
                  priority
                />
              </div>
              <p className="font-mono text-[11px] uppercase leading-6 text-muted">
                We recently made this studio official. Now we build digital
                systems for founders, teams, and growing businesses.
              </p>
            </div>

            <div className="relative flex min-h-[430px] items-center justify-center text-center">
              <div className="hero-orbit left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2" />
              <div className="hero-orbit left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2" />
              <div className="logo-object absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 opacity-80">
                <Image
                  src="/assets/nexstudio_icon_transparent.png"
                  alt="nexs.tudio N mark"
                  width={320}
                  height={320}
                  priority
                  className="h-48 w-48 object-contain md:h-64 md:w-64"
                />
              </div>
              <div className="relative z-10">
                <p className="mb-6 font-mono text-xs uppercase text-green">
                  build / ship / scale
                </p>
                <h1 className="font-display text-6xl font-extrabold leading-none text-foreground md:text-8xl lg:text-9xl">
                  nexs<span className="text-violet">.</span>tudio
                </h1>
                <ButtonLink
                  href="/contact"
                  className="soft-pulse mx-auto mt-8 h-24 w-24 px-4 text-center text-xs uppercase"
                >
                  Start
                  <br />
                  Project
                </ButtonLink>
              </div>
            </div>

            <aside className="self-end pb-8 lg:self-center lg:pb-0">
              <p className="mb-5 text-3xl font-extrabold leading-tight md:text-4xl">
                Be part of something built right.
              </p>
              <p className="max-w-sm text-sm leading-7 text-muted">
                Premium interfaces, clean backend systems, dashboards, APIs,
                and deployment support in one focused software studio.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/work" variant="secondary" className="min-h-10 px-4 text-xs">
                  Explore work
                </ButtonLink>
                <ButtonLink href="/services" variant="ghost" className="min-h-10 px-0 text-xs">
                  Scroll to explore
                  <ArrowRight size={14} />
                </ButtonLink>
              </div>
            </aside>
          </div>

          <div className="grid gap-6 border-t border-white/10 pt-8 md:grid-cols-[0.78fr_1fr_0.8fr]">
            <h2 className="text-4xl font-extrabold leading-none md:text-5xl">
              Who we are?
            </h2>
            <p className="max-w-lg text-base leading-8 text-muted">
              We create software products that look polished, feel simple to
              use, and stay practical to maintain after launch.
            </p>
            <div className="grid grid-cols-3 gap-2 text-center font-mono text-[11px] uppercase text-muted">
              {["Apps", "APIs", "Dashboards"].map((item) => (
                <span key={item} className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-2">
                  {item}
                </span>
              ))}
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
