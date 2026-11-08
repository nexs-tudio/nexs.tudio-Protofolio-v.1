import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { AudienceCards } from "@/components/audience-cards";
import DotGrid from "@/components/DotGrid";
import { ProcessTimeline } from "@/components/process-timeline";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import RippleGrid from "@/components/RippleGrid";
import SplitText from "@/components/SplitText";
import { TechnologyLogoLoop } from "@/components/technology-logo-loop";
import { VideoPanel } from "@/components/video-panel";
import {
  caseStudies,
  pricingPackages,
  services,
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

      <section className="section-shell py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="flex flex-col items-start lg:sticky lg:top-32 lg:self-start">
            <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-green">
              What we build
            </p>
            <h2 className="max-w-md text-3xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-4xl">
              <SplitText
                text="Software built around your next step."
                className="font-display"
                effect="rise"
                splitType="words"
                delay={80}
                duration={0.85}
                staggerFrom="start"
                trigger="view"
                hoverEffect="none"
                loop={false}
                mask={false}
                threshold={0.1}
                rootMargin="-80px"
                textAlign="left"
                tag="span"
              />
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted md:text-base">
              Practical software services, shaped around your business goals
              and the next useful release.
            </p>
            <ButtonLink href="/contact" className="mt-6">
              Discuss your project
              <ArrowRight size={16} />
            </ButtonLink>
          </div>

          <div className="divide-y divide-line border-y border-line">
            {services.map((service, index) => (
              <Reveal key={service.slug}>
                <Link
                  href="/services"
                  className="group grid gap-4 py-6 outline-none transition-colors focus-visible:bg-[#F4F8FB]/70 sm:grid-cols-[48px_minmax(0,1fr)_auto] sm:items-start sm:gap-5 md:py-7"
                >
                  <span className="pt-1 font-mono text-xs tracking-[0.12em] text-dim">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-green">
                      {service.eyebrow}
                    </span>
                    <span className="mt-1.5 block text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-[#0E7490] sm:text-xl">
                      {service.title}
                    </span>
                    <span className="mt-2 block max-w-2xl text-sm leading-6 text-muted">
                      {service.summary}
                    </span>
                    <span className="mt-3 flex flex-wrap gap-2">
                      {service.stack.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-line bg-white px-2.5 py-1 font-mono text-[10px] text-dim transition-colors group-hover:border-cyan/40"
                        >
                          {item}
                        </span>
                      ))}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="hidden text-dim transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0E7490] sm:mt-1 sm:block"
                    size={19}
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-line bg-[#F7FAFC] py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-30" aria-hidden="true">
          <DotGrid
            baseColor="#3a3446"
            activeColor="#0E7490"
            shape="circle"
            dotSize={5}
            gap={18}
            proximity={140}
            strength={1}
            bounce={0.6}
            tension={0.4}
            returnDuration={0.8}
            shockRadius={320}
            shockStrength={5}
            swell={0.8}
            stretch={0.5}
            glow={0.5}
            fade={0}
            intro
            opacity={0.3}
            mouseInteraction
            clickShock
          />
        </div>
        <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-green">
              Why trust us
            </p>
            <h2 className="max-w-lg text-3xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-4xl">
              Thoughtful engineering, grounded in research.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted md:text-base">
              We&apos;re a founder-led software studio—not a marketing agency
              reselling promises. Our work is shaped by formal academic
              training, research, and hands-on engineering, so we take time to
              understand the problem before recommending what to build.
            </p>
            <a
              href="https://sadumina-rathnayaka-prof-v1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0B1B33] bg-[#0B1B33] px-5 text-sm font-bold text-white transition-colors hover:border-[#0E7490] hover:bg-[#0E7490] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E7490]"
            >
              Meet the founder
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="divide-y divide-line border-y border-line bg-white/85 px-5 backdrop-blur-sm sm:px-7">
            {[
              {
                number: "01",
                title: "Academic foundation",
                body: "A degree-backed technical perspective informs how we evaluate ideas and engineering trade-offs.",
              },
              {
                number: "02",
                title: "Research-led thinking",
                body: "We investigate the problem and its context before settling on a solution or stack.",
              },
              {
                number: "03",
                title: "Direct founder involvement",
                body: "You work directly with the founder—from early discovery through implementation and handoff.",
              },
            ].map((point) => (
              <Reveal key={point.number}>
                <article className="group grid gap-3 py-5 sm:grid-cols-[44px_minmax(0,1fr)] sm:gap-5 sm:py-6">
                  <span className="pt-1 font-mono text-xs tracking-[0.12em] text-[#0E7490]">
                    {point.number}
                  </span>
                  <div>
                    <h3 className="text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-[#0E7490] md:text-lg">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-sm leading-6 text-muted">
                      {point.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-24">
        <SectionHeading
          compact
          eyebrow="Capability cases"
          title="Practical software for real operational needs."
          animateTitle
          titleClassName="text-2xl md:text-4xl"
        />
        <Reveal>
          <article className="grid overflow-hidden rounded-[1.8rem] border border-line bg-[#F7FAFC] shadow-[0_12px_36px_rgba(11,27,51,0.06)] md:grid-cols-[0.8fr_1.2fr]">
            <VideoPanel
              src="/assets/video/product-morph.mp4"
              poster="/assets/nexstudio_launch_post.png"
              label="Abstract product morph preview"
              className="h-full min-h-56 border-0 md:min-h-80"
            />
            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-green">
                A practical first release
              </p>
              <h3 className="mt-3 max-w-xl text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
                From early idea to a product people can use.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                Discovery, UX structure, frontend, backend, database, and
                deployment come together in one clear release plan. Build and
                review working software early, then shape the next steps around
                what matters most.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Discovery", "Product UX", "Full-stack build", "Launch"].map(
                  (phase) => (
                    <span
                      key={phase}
                      className="rounded-full border border-line bg-white px-3 py-1.5 font-mono text-[10px] text-dim"
                    >
                      {phase}
                    </span>
                  ),
                )}
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-10 border-y border-line">
          {caseStudies.map((item, index) => (
            <Reveal key={item.slug}>
              <article className="grid gap-4 border-b border-line py-6 last:border-b-0 sm:grid-cols-[52px_minmax(0,1fr)_minmax(0,0.9fr)] sm:items-start sm:gap-6 md:py-7">
                <span className="pt-1 font-mono text-xs tracking-[0.12em] text-[#0E7490]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-green">
                    {item.category}
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold tracking-tight text-foreground md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.summary}
                  </p>
                </div>
                <div className="sm:pl-4">
                  <p className="text-sm leading-6 text-muted">{item.outcome}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.stack.slice(0, 3).map((stack) => (
                      <span
                        key={stack}
                        className="rounded-full border border-line bg-white px-2.5 py-1 font-mono text-[10px] text-dim"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-line bg-panel-strong py-16 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(14,116,144,0.22)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
          aria-hidden="true"
        />
        <div className="section-shell relative z-10">
          <SectionHeading
            compact
            eyebrow="How projects run"
            title="We build more than a website."
            body="We create a thoughtful digital representation of your business—bringing your brand, services, and customer experience together in a platform designed to earn trust and support growth. Our clear, collaborative process turns that vision into a product, step by step."
            animateTitle
            titleClassName="text-2xl md:text-4xl"
            bodyClassName="text-sm leading-7 md:text-base md:leading-8"
          />
          <ProcessTimeline />
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
