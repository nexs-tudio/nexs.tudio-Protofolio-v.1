"use client";

import { FaAws } from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Cloud } from "lucide-react";
import LogoLoop from "@/components/LogoLoop";

const technologyLogos = [
  {
    node: <SiJavascript style={{ color: "#B89B00" }} />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    hoverColor: "#B89B00",
  },
  {
    node: <SiTypescript style={{ color: "#3178C6" }} />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    hoverColor: "#3178C6",
  },
  {
    node: <SiReact style={{ color: "#149ECA" }} />,
    title: "React",
    href: "https://react.dev",
    hoverColor: "#149ECA",
  },
  {
    node: <SiNextdotjs style={{ color: "#0B1B33" }} />,
    title: "Next.js",
    href: "https://nextjs.org",
    hoverColor: "#0B1B33",
  },
  {
    node: <SiMongodb style={{ color: "#116149" }} />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
    hoverColor: "#116149",
  },
  {
    node: <FaAws style={{ color: "#232F3E" }} />,
    title: "AWS",
    href: "https://aws.amazon.com",
    hoverColor: "#232F3E",
  },
  {
    node: <Cloud className="text-[#0E7490]" aria-hidden="true" />,
    title: "Cloud infrastructure",
  },
  {
    node: <SiNodedotjs style={{ color: "#43853D" }} />,
    title: "Node.js",
    href: "https://nodejs.org",
    hoverColor: "#43853D",
  },
  {
    node: <SiPython style={{ color: "#3776AB" }} />,
    title: "Python",
    href: "https://www.python.org",
    hoverColor: "#3776AB",
  },
  {
    node: <SiPostgresql style={{ color: "#336791" }} />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
    hoverColor: "#336791",
  },
  {
    node: <SiTailwindcss style={{ color: "#0891B2" }} />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    hoverColor: "#0891B2",
  },
];

export function TechnologyLogoLoop() {
  return (
    <section
      className="relative left-1/2 w-screen -translate-x-1/2 border-y border-line bg-white py-4 sm:py-5"
      aria-labelledby="technology-stack-heading"
    >
      <h2
        id="technology-stack-heading"
        className="mb-3 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-dim"
      >
        Technologies we work with
      </h2>
      <LogoLoop
        logos={technologyLogos}
        speed={70}
        direction="left"
        logoHeight={24}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        labels="inline"
        fadeOut
        fadeOutWidth={0.08}
        draggable
        intro
        ariaLabel="Technologies and tools used by nexs.tudio"
        className="text-[#0B1B33]"
      />
    </section>
  );
}
