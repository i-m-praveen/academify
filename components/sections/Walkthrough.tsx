import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type WalkthroughContent = {
  eyebrow: string;
  title: string;
  description: string;
  steps: { title: string; description: string }[];
};

export function Walkthrough({ walkthrough }: { walkthrough: WalkthroughContent }) {
  return (
    <section className="border-t border-border bg-white py-16 sm:py-20">
      <Container className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={walkthrough.eyebrow}
          title={walkthrough.title}
          description={walkthrough.description}
        />
        <ol className="mt-12 space-y-8">
          {walkthrough.steps.map((step, index) => (
            <li key={step.title} className="flex gap-5">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-xlight font-heading text-sm font-bold text-primary">
                {index + 1}
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
