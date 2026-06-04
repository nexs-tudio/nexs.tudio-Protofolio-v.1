import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  body,
  primaryHref = "/contact",
  primaryLabel = "Start a project",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line px-5 pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(139,76,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(139,76,255,0.08)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <div className="section-shell">
        <p className="mb-4 font-mono text-xs font-semibold uppercase text-green">
          {eyebrow}
        </p>
        <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.96] text-foreground md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{body}</p>
        <ButtonLink href={primaryHref} className="mt-8">
          {primaryLabel}
          <ArrowRight size={17} />
        </ButtonLink>
      </div>
    </section>
  );
}
