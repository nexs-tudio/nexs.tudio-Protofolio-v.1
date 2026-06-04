import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-pink/70 bg-[linear-gradient(135deg,var(--pink),var(--violet)_52%,var(--cyan))] text-foreground shadow-[0_18px_54px_rgba(240,24,159,0.28)] hover:shadow-[0_20px_70px_rgba(87,217,255,0.28)]",
  secondary:
    "border-line bg-white/[0.055] text-foreground hover:border-cyan/50 hover:bg-white/[0.09]",
  ghost: "border-transparent text-muted hover:text-foreground",
};

export function ButtonLink({
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 text-sm font-bold transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
