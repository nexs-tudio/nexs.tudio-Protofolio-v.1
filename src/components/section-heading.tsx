import SplitText from "@/components/SplitText";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  compact?: boolean;
  animateTitle?: boolean;
  titleClassName?: string;
  bodyClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  compact = false,
  animateTitle = false,
  titleClassName = "text-4xl md:text-6xl",
  bodyClassName = "text-base leading-8 md:text-lg",
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
        <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-green">
          {eyebrow}
        </p>
        <h2
          className={`max-w-4xl font-extrabold leading-[1.08] text-foreground ${titleClassName}`}
        >
          {animateTitle ? (
            <SplitText
              text={title}
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
          ) : (
            title
          )}
        </h2>
      </div>
      {body ? (
        <p className={`text-muted ${bodyClassName}`}>{body}</p>
      ) : null}
    </div>
  );
}
