import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-muted">{description}</p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
