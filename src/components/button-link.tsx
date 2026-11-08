import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-[#0B1B33] bg-[#0B1B33] text-white shadow-[0_10px_28px_rgba(11,27,51,0.16)] hover:border-[#0E7490] hover:bg-[#0E7490] hover:shadow-[0_12px_32px_rgba(14,116,144,0.2)]",
  secondary:
    "border-line bg-panel-strong text-foreground hover:border-cyan/50 hover:bg-[#E6F9FD]",
  ghost: "border-transparent text-[#0E7490] hover:text-foreground",
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
