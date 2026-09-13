import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { UseCase } from "@/content/solutions";

export function UseCaseGrid({ useCases }: { useCases: UseCase[] }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Reveal key={useCase.title} delay={index * 0.06}>
                <div className="flex h-full gap-4 rounded bg-white p-6 shadow-sm border border-border">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-primary-xlight text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-ink">
                      {useCase.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-muted">{useCase.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
