import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
} from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { AudienceCards } from "@/components/audience-cards";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import RippleGrid from "@/components/RippleGrid";
import SplitText from "@/components/SplitText";
import { TechnologyLogoLoop } from "@/components/technology-logo-loop";
import { VideoPanel } from "@/components/video-panel";
import {
  caseStudies,
  pricingPackages,
  processSteps,
  services,
  trustSignals,
} from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-6 pt-20 sm:px-5 md:pt-24 lg:pt-28">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.14),transparent_22rem),radial-gradient(circle_at_84%_32%,rgba(14,116,144,0.07),transparent_18rem),linear-gradient(180deg,#ffffff,#f4f8fb_92%)]" />
        <div className="pointer-events-none absolute inset-0 z-[1] opacity-40">
          <RippleGrid
            color="#0E7490"
            variant="lines"
            cellSize={48}
            lineWidth={1}
            glow={0.6}
            rippleStrength={1}
            rippleSpeed={1}
            rippleSize={1}
            autoRipple="center"
            rippleInterval={2.6}
            tilt={0}
            rotation={0}
            fade={0.5}
            opacity={0.65}
            mouseInteraction
            clickRipple
            intro
            lightMode={false}
            aria-hidden="true"
          />
        </div>
        <div className="section-shell relative z-10 grid gap-5">
          <div className="pointer-events-none absolute left-1/2 top-0 z-10 hidden -translate-x-1/2 xl:block">
            <div className="hero-status-pill max-w-[min(92vw,640px)] rounded-full border border-line bg-white/90 px-5 py-2.5 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-muted backdrop-blur-xl">
              <span className="text-green">Now booking focused builds</span>
              <span className="mx-3 text-dim/50">/</span>
              <span>Web apps, APIs, dashboards</span>
            </div>
          </div>
          <div className="grid items-center gap-6 py-3 sm:py-4 lg:grid-cols-[0.75fr_1.25fr_0.8fr] lg:gap-8 lg:py-4">
            <div className="mx-auto max-w-md self-center text-center lg:mx-0 lg:max-w-xs lg:text-left">
              <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-green">
                About the studio
              </p>
              <p className="text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl">
                A digital studio for what&apos;s next.
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Thoughtful digital products for founders, teams, and growing
                businesses.
              </p>
            </div>

            <div className="relative flex min-h-[220px] items-center justify-center text-center sm:min-h-[280px] md:min-h-[320px] lg:min-h-[350px]">
              <div className="hero-orbit left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 sm:h-[280px] sm:w-[280px] md:h-[340px] md:w-[340px] lg:h-[410px] lg:w-[410px]" />
              <div className="hero-orbit left-1/2 top-1/2 h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 sm:h-[190px] sm:w-[190px] md:h-[240px] md:w-[240px] lg:h-[270px] lg:w-[270px]" />
              <div className="logo-object absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 opacity-80 sm:top-[40%] lg:top-[42%]">
                <Image
                  src="/assets/nexstudio_icon_no_dot.png"
                  alt="nexs.tudio N mark"
                  width={320}
                  height={320}
                  priority
                  className="h-24 w-24 object-contain sm:h-36 sm:w-36 md:h-52 md:w-52 lg:h-64 lg:w-64"
                />
              </div>
              <div className="relative z-10 w-full">
                <p className="mb-4 font-mono text-[11px] uppercase text-green sm:mb-5 sm:text-xs">
                  build / ship / scale
                </p>
                <h1 className="brand-title font-display max-w-full whitespace-nowrap text-[clamp(2.75rem,14vw,8.25rem)] font-extrabold leading-none text-foreground">
                  <SplitText
                    text="nexs.tudio"
                    className="hero-wordmark"
                    effect="rise"
                    splitType="chars"
                    delay={50}
                    duration={1.25}
                    staggerFrom="start"
                    trigger="view"
                    hoverEffect="lift"
                    loop={false}
                    loopDelay={1.5}
                    mask={false}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    tag="span"
                  />
                </h1>
              </div>
            </div>

            <aside className="mx-auto max-w-md self-center text-center lg:mx-0 lg:self-center lg:text-left">
              <p className="mx-auto mb-4 max-w-md text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl lg:mx-0">
                Be part of something built right.
              </p>
              <p className="mx-auto max-w-sm text-sm leading-7 text-muted lg:mx-0">
                Premium interfaces, clean backend systems, dashboards, APIs,
                and deployment support in one focused software studio.
              </p>
            </aside>
          </div>

        </div>
      </section>

      <TechnologyLogoLoop />

      <section className="relative isolate overflow-hidden border-b border-line bg-[#F7FAFC] py-12 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-30" aria-hidden="true">
          <RippleGrid
            color="#0E7490"
            variant="lines"
            cellSize={48}
            lineWidth={1}
            glow={0.6}
            rippleStrength={0.8}
            rippleSpeed={1}
            rippleSize={1}
            autoRipple="center"
            rippleInterval={3.2}
            tilt={0}
            rotation={0}
            fade={0.5}
            opacity={0.55}
            mouseInteraction
            clickRipple
            intro
            lightMode={false}
          />
        </div>
        <div className="section-shell relative z-10 grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-center md:gap-10">
          <div>
            <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-green">
              Who we help
            </p>
            <h2 className="max-w-sm text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Built for teams ready to move forward.
            </h2>
          </div>
          <AudienceCards />
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
                  <div className="h-px w-16 bg-[linear-gradient(90deg,var(--green),transparent)]" />
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
                      className="rounded-full border border-line bg-panel-strong px-3 py-1.5 font-mono text-[11px] text-dim transition group-hover:border-cyan/50 group-hover:text-muted"
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

      <section className="border-y border-line bg-panel-strong py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            compact
            eyebrow="Why clients choose us"
            title="Professional delivery signals before the first call."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trustSignals.map((signal, index) => (
              <Reveal key={signal.title}>
                <article className="rounded-[1.6rem] border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[0_12px_32px_rgba(11,27,51,0.07)]">
                  <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#E6F9FD] text-[#0E7490]">
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
                          className="rounded-full border border-line bg-panel-strong px-3 py-1.5 font-mono text-[11px] text-muted"
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
                    <div className="rounded-[1.2rem] border border-cyan/35 bg-[#E6F9FD] p-4">
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

      <section className="border-y border-line bg-panel-strong py-20 md:py-28">
        <div className="section-shell">
        <SectionHeading
          eyebrow="How projects run"
          title="Clear steps, weekly progress, no mystery build."
          body="A simple delivery rhythm makes clients feel safe: scope, system plan, weekly review, launch handoff."
        />
        <ol className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.title}>
              <li className="min-h-72 rounded-[1.8rem] border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-cyan/50">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan/40 bg-[#E6F9FD] font-mono text-sm text-amber">
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
                    ? "neon-surface relative overflow-hidden rounded-[2rem] border-cyan/35 bg-[linear-gradient(145deg,#E6F9FD,#FFFFFF_58%)] p-7"
                      : "rounded-[2rem] border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[0_12px_32px_rgba(11,27,51,0.07)]"
                  }
                >
                  {plan.featured ? (
                    <p className="absolute right-5 top-5 rounded-full border border-cyan/40 bg-[#E6F9FD] px-3 py-1.5 font-mono text-[11px] uppercase text-pink">
                      recommended
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
                Contact us directly by email, WhatsApp, phone, or LinkedIn. We
                do not collect client project details through a website form.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
                {["Reply with next steps", "Scope recommendation", "Budget fit check"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-panel-strong px-3 py-2"
                  >
                    <ClipboardCheck size={15} className="text-green" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <ButtonLink href="/contact">
              View contact details
              <ArrowRight size={17} />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
