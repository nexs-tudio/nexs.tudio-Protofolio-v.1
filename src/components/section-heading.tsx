type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  compact?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  compact = false,
}: SectionHeadingProps) {
  return (
    <div
      className={
        compact
          ? "mb-10 max-w-3xl"
          : "mb-10 grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.55fr)] md:items-end"
      }
    >
      <div>
        <p className="mb-4 font-mono text-xs font-semibold uppercase text-green">
          {eyebrow}
        </p>
        <h2 className="max-w-4xl text-4xl font-extrabold leading-[1.03] text-foreground md:text-6xl">
          {title}
        </h2>
      </div>
      {body ? <p className="text-base leading-8 text-muted md:text-lg">{body}</p> : null}
    </div>
  );
}
