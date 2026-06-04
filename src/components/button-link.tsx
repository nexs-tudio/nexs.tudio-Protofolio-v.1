import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-violet/70 bg-[linear-gradient(135deg,var(--violet),#5b8cff)] text-foreground shadow-[0_16px_48px_rgba(139,76,255,0.28)] hover:shadow-[0_18px_60px_rgba(139,76,255,0.36)]",
  secondary:
    "border-line bg-white/[0.04] text-foreground hover:border-green/50 hover:bg-white/[0.07]",
  ghost: "border-transparent text-muted hover:text-foreground",
};

export function ButtonLink({
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 text-sm font-bold transition ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
