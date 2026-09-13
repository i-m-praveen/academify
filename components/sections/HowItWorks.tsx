import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { howItWorks } from "@/content/home";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          description={howItWorks.description}
        />
        <ol className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08}>
              <li className="relative rounded bg-page p-6">
                <span className="font-heading text-3xl font-bold text-primary/30">
                  {step.number}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
