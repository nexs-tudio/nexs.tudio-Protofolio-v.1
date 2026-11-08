"use client";

import { useRef, type RefObject } from "react";
import {
  ArrowRight,
  CodeXml,
  PanelsTopLeft,
  Rocket,
  SearchCheck,
  type LucideIcon,
} from "lucide-react";
import { useReducedMotion } from "motion/react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Reveal } from "@/components/reveal";
import { processSteps } from "@/content/site";

type ProcessStep = (typeof processSteps)[number];

function ProcessNode({
  step,
  index,
  Icon,
  nodeRef,
  description,
  iconClassName,
}: {
  step: ProcessStep;
  index: number;
  Icon: LucideIcon;
  nodeRef: RefObject<HTMLDivElement | null>;
  description: string;
  iconClassName: string;
}) {
  return (
    <Reveal className="h-full">
      <article
        className="relative z-0 flex h-full min-h-[260px] flex-col items-center rounded-[1.5rem] border border-line bg-white p-6 text-center shadow-[0_8px_24px_rgba(11,27,51,0.045)] transition hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[0_14px_32px_rgba(11,27,51,0.08)] md:min-h-[280px] md:p-7"
        role="listitem"
      >
        <div
          ref={nodeRef}
          className={`relative z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white text-white shadow-[0_0_0_5px_white] ${iconClassName}`}
          aria-hidden="true"
        >
          <Icon size={20} strokeWidth={1.8} />
        </div>
        <p className="mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-green">
          Step {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 min-h-12 text-lg font-bold leading-6 tracking-tight text-foreground md:text-xl">
          {step.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">
          {description}
        </p>
      </article>
    </Reveal>
  );
}

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const buildRef = useRef<HTMLDivElement>(null);
  const launchRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <div
      ref={containerRef}
      className="relative grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5"
      role="list"
    >
      <div
        className="pointer-events-none absolute inset-0 z-20 hidden xl:block"
        aria-hidden="true"
      >
        <span className="absolute left-1/4 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#22D3EE]/50 bg-white text-[#0E7490] shadow-[0_5px_16px_rgba(14,116,144,0.15)]">
          <ArrowRight size={17} strokeWidth={2.5} />
        </span>
        <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#A99AF5]/60 bg-white text-[#6D5BD0] shadow-[0_5px_16px_rgba(109,91,208,0.16)]">
          <ArrowRight size={17} strokeWidth={2.5} />
        </span>
        <span className="absolute left-3/4 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#F6B27E]/60 bg-white text-[#D96824] shadow-[0_5px_16px_rgba(232,122,50,0.16)]">
          <ArrowRight size={17} strokeWidth={2.5} />
        </span>
      </div>
      {!reduceMotion ? (
        <>
          <AnimatedBeam
            className="hidden xl:block"
            containerRef={containerRef}
            fromRef={scopeRef}
            toRef={designRef}
            pathColor="#0E7490"
            pathWidth={2}
            pathOpacity={0.16}
            gradientStartColor="#22D3EE"
            gradientStopColor="#0E7490"
            duration={3.5}
          />
          <AnimatedBeam
            className="hidden xl:block"
            containerRef={containerRef}
            fromRef={designRef}
            toRef={buildRef}
            pathColor="#0E7490"
            pathWidth={2}
            pathOpacity={0.16}
            gradientStartColor="#22D3EE"
            gradientStopColor="#0E7490"
            duration={3.5}
            delay={0.45}
          />
          <AnimatedBeam
            className="hidden xl:block"
            containerRef={containerRef}
            fromRef={buildRef}
            toRef={launchRef}
            pathColor="#0E7490"
            pathWidth={2}
            pathOpacity={0.16}
            gradientStartColor="#22D3EE"
            gradientStopColor="#0E7490"
            duration={3.5}
            delay={0.9}
          />
        </>
      ) : null}

      <div className="h-full">
        <ProcessNode
          step={processSteps[0]}
          index={0}
          Icon={SearchCheck}
          nodeRef={scopeRef}
          description="Align on your users, goals, and first-release priorities."
          iconClassName="bg-[#0E7490] shadow-[0_0_0_5px_white,0_8px_18px_rgba(14,116,144,0.22)]"
        />
      </div>
      <div className="h-full">
        <ProcessNode
          step={processSteps[1]}
          index={1}
          Icon={PanelsTopLeft}
          nodeRef={designRef}
          description="Map the product experience, system, and delivery plan."
          iconClassName="bg-[#6D5BD0] shadow-[0_0_0_5px_white,0_8px_18px_rgba(109,91,208,0.22)]"
        />
      </div>
      <div className="h-full">
        <ProcessNode
          step={processSteps[2]}
          index={2}
          Icon={CodeXml}
          nodeRef={buildRef}
          description="Review working software and refine as the product takes shape."
          iconClassName="bg-[#E87A32] shadow-[0_0_0_5px_white,0_8px_18px_rgba(232,122,50,0.22)]"
        />
      </div>
      <div className="h-full">
        <ProcessNode
          step={processSteps[3]}
          index={3}
          Icon={Rocket}
          nodeRef={launchRef}
          description="Deploy, document, and hand over a system ready to grow."
          iconClassName="bg-[#23845B] shadow-[0_0_0_5px_white,0_8px_18px_rgba(35,132,91,0.22)]"
        />
      </div>
    </div>
  );
}
