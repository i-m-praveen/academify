import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import { Reveal } from "@/components/ui/Reveal";
import type { PlatformSection } from "@/content/platform";

export function FeatureDeepDive({
  section,
  reverse = false,
}: {
  section: PlatformSection;
  reverse?: boolean;
}) {
  return (
    <section id={section.id} className="scroll-mt-20 border-b border-border py-16 sm:py-20">
      <Container
        className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            {section.eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-ink">
            {section.title}
          </h2>
          <p className="mt-4 text-lg text-ink-muted">{section.description}</p>
          <ul className="mt-6 space-y-3">
            {section.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm text-ink">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        <Reveal>
          <PlaceholderVisual label={section.placeholderLabel} />
        </Reveal>
      </Container>
    </section>
  );
}
