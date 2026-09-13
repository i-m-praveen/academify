type Align = "left" | "center";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Align;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-lg text-ink-muted">{description}</p>
      ) : null}
    </div>
  );
}
