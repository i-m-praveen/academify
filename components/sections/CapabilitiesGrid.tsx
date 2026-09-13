import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { capabilities } from "@/content/home";

export function CapabilitiesGrid() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Core capabilities"
          title="Everything a modern assessment program needs"
          description="Academify combines the pieces institutions and organizations usually stitch together from multiple vendors."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Reveal key={capability.title} delay={index * 0.08}>
                <Link
                  href={capability.href}
                  className="group flex h-full flex-col rounded bg-white p-6 shadow-sm border border-border transition-shadow hover:shadow-md focus-ring"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary-xlight text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-ink">
                    {capability.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-ink-muted">
                    {capability.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
