import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { VideoPanel } from "@/components/video-panel";
import { caseStudies, pricingPackages, processSteps, services, techStack } from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden px-5 pb-16 pt-36 md:pt-44">
        <video
          aria-label="Abstract nexs.tudio hero background"
          autoPlay
          className="absolute inset-0 -z-30 h-full w-full object-cover opacity-20"
          loop
          muted
          playsInline
          poster="/assets/nexstudio_launch_post.png"
        >
          <source src="/assets/video/hero-flow.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_42%,rgba(139,76,255,0.34),transparent_32rem),linear-gradient(90deg,rgba(3,2,7,0.94),rgba(3,2,7,0.62),rgba(3,2,7,0.94))]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(139,76,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(139,76,255,0.07)_1px,transparent_1px)] bg-[size:58px_58px] [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

        <div className="section-shell relative min-h-[calc(100vh-11rem)]">
          <p className="pointer-events-none absolute left-1/2 top-8 -z-10 hidden -translate-x-1/2 select-none whitespace-nowrap text-[11vw] font-extrabold leading-none text-white/[0.035] lg:block">
            NEXS.TUDIO
          </p>

          <div className="grid min-h-[calc(100vh-11rem)] items-center gap-7 lg:grid-cols-[0.48fr_0.92fr_0.65fr]">
            <article className="order-2 overflow-hidden rounded-lg border border-line bg-panel/50 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur md:order-1">
              <div className="relative aspect-[0.82] min-h-80">
                <video
                  aria-label="Software studio motion card"
                  autoPlay
                  className="h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                  poster="/assets/nexstudio_launch_post.png"
                >
                  <source src="/assets/video/product-morph.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,2,7,0.72),transparent_56%)]" />
                <ButtonLink
                  href="/work"
                  variant="secondary"
                  className="absolute bottom-5 left-5 min-h-10 rounded-full px-4 text-xs"
                >
                  See work
                  <ArrowRight size={14} />
                </ButtonLink>
              </div>
            </article>

            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-lg border border-line bg-panel/40 shadow-[0_35px_110px_rgba(0,0,0,0.5)] backdrop-blur">
                <video
                  aria-label="nexs.tudio cinematic product preview"
                  autoPlay
                  className="aspect-[1.05] min-h-[420px] w-full object-cover opacity-90"
                  loop
                  muted
                  playsInline
                  poster="/assets/nexstudio_launch_post.png"
                >
                  <source src="/assets/video/hero-flow.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent,rgba(3,2,7,0.58)_72%),linear-gradient(to_top,rgba(3,2,7,0.88),transparent_52%)]" />
                <div className="absolute left-6 top-6 rounded-full border border-line bg-background/35 px-3 py-2 font-mono text-[11px] uppercase text-muted backdrop-blur">
                  build / ship / scale
                </div>
                <h1 className="absolute bottom-7 left-6 max-w-[760px] text-5xl font-extrabold leading-[0.92] text-foreground md:text-7xl">
                  Software that works.
                  <span className="block text-violet">Shipped fast.</span>
                </h1>
              </div>
            </div>

            <aside className="order-3 grid gap-6">
              <div>
                <p className="mb-4 inline-flex rounded-full border border-line bg-white/[0.04] px-3 py-2 font-mono text-[11px] font-semibold uppercase text-green">
                  Colombo software studio
                </p>
                <h2 className="max-w-md text-4xl font-extrabold leading-[1.02] md:text-5xl">
                  Explore builds without limits.
                </h2>
                <p className="mt-6 leading-8 text-muted">
                  Full-stack web apps, APIs, analytics dashboards, and
                  cloud-ready systems for founders and businesses that need
                  serious delivery.
                </p>
              </div>

              <ButtonLink
                href="/contact"
                className="h-28 w-28 rounded-full px-4 text-center text-xs uppercase"
              >
                Start build
                <ArrowRight size={15} />
              </ButtonLink>

              <div className="rounded-lg border border-line bg-panel/60 p-5 backdrop-blur">
                <p className="font-mono text-xs uppercase text-amber">Launch focus</p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Premium motion, clear services, proof-style cases, and one
                  strong inquiry path.
                </p>
              </div>
            </aside>
          </div>

          <div className="grid gap-3 pt-6 md:grid-cols-3">
            {[
              ["Web applications", "Customer portals, admin systems, SaaS foundations."],
              ["API and backend", "Secure REST APIs, database design, integrations."],
              ["Analytics systems", "Dashboards, reports, data flows, automation."],
            ].map(([title, body]) => (
              <article
                key={title}
                className="rounded-lg border border-line bg-panel/65 p-5 backdrop-blur"
              >
                <p className="font-mono text-[11px] uppercase text-green">{title}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white/[0.025] py-5">
        <div className="section-shell flex flex-wrap gap-2">
          {techStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line px-3 py-2 font-mono text-xs text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <SectionHeading
          eyebrow="What we build"
          title="Production-focused software for teams that need momentum."
          body="Choose a focused build track, get clear milestones, and work with a technical partner who can take the product from idea to deployment."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.slug}>
              <article className="min-h-80 rounded-lg border border-line bg-panel/85 p-6 shadow-[0_20px_55px_rgba(0,0,0,0.24)] transition hover:-translate-y-1 hover:border-green/50">
                <span className="font-mono text-sm text-amber">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 text-2xl font-extrabold">{service.title}</h3>
                <p className="mt-4 leading-7 text-muted">{service.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white/[0.02] py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            compact
            eyebrow="Client-ready capabilities"
            title="Show the kind of outcomes clients can buy."
          />
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal className="lg:row-span-3">
              <article className="overflow-hidden rounded-lg border border-line bg-panel">
                <VideoPanel
                  src="/assets/video/product-morph.mp4"
                  poster="/assets/nexstudio_launch_post.png"
                  label="Abstract product morph preview"
                  className="border-0"
                />
                <div className="p-7">
                  <p className="mb-3 font-mono text-xs font-semibold uppercase text-green">
                    MVP sprint
                  </p>
                  <h3 className="text-3xl font-extrabold">Idea to usable product</h3>
                  <p className="mt-3 leading-7 text-muted">
                    Discovery, UX structure, frontend, backend, database, and
                    deployment in one focused build cycle.
                  </p>
                </div>
              </article>
            </Reveal>
            {caseStudies.map((item) => (
              <Reveal key={item.slug}>
                <article className="rounded-lg border border-line bg-panel/85 p-6">
                  <p className="mb-3 font-mono text-xs font-semibold uppercase text-green">
                    {item.category}
                  </p>
                  <h3 className="text-2xl font-extrabold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <SectionHeading
          eyebrow="How projects run"
          title="Clear steps, weekly progress, no mystery build."
        />
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.title}>
              <li className="min-h-72 rounded-lg border border-line bg-panel/85 p-6">
                <span className="font-mono text-sm text-amber">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 text-2xl font-extrabold">{step.title}</h3>
                <p className="mt-4 leading-7 text-muted">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-white/[0.02] py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            compact
            eyebrow="Starting packages"
            title="Simple entry points for serious builds."
          />
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
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <div className="rounded-lg border border-line bg-panel/85 p-7 md:p-10">
          <p className="mb-4 font-mono text-xs font-semibold uppercase text-green">
            Start the conversation
          </p>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.03] md:text-6xl">
                Tell us what you want to build.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                Share the business goal, timeline, and what already exists. A
                short, clear message is enough to start.
              </p>
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
