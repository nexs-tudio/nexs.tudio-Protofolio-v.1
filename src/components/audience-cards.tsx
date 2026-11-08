const audiences = [
  {
    number: "01",
    title: "Founders",
    outcome: "MVPs & product foundations",
    description:
      "Turn a promising idea into a focused first product, without overbuilding before launch.",
  },
  {
    number: "02",
    title: "Growing businesses",
    outcome: "Business systems & automation",
    description:
      "Replace time-consuming manual processes with software shaped around the way your team works.",
  },
  {
    number: "03",
    title: "Product teams",
    outcome: "Apps, APIs & dashboards",
    description:
      "Extend your team with practical engineering for the features, integrations, and data your product needs.",
  },
] as const;

export function AudienceCards() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {audiences.map((audience) => (
        <article
          key={audience.number}
          className="relative h-full min-h-48 overflow-hidden rounded-2xl border border-line bg-white/90 p-4 shadow-[0_8px_24px_rgba(11,27,51,0.045)] md:p-5"
        >
          <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan to-[#0E7490] opacity-70" />
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E6F9FD] font-mono text-[11px] text-[#0E7490]">
            {audience.number}
          </span>
          <h3 className="mt-4 text-sm font-bold text-foreground">
            {audience.title}
          </h3>
          <p className="mt-1 text-xs font-medium leading-5 text-[#0E7490]">
            {audience.outcome}
          </p>
          <p className="mt-3 border-t border-line pt-3 text-xs leading-5 text-muted">
            {audience.description}
          </p>
        </article>
      ))}
    </div>
  );
}
