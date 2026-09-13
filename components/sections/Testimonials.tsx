import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/content/home";

export function Testimonials() {
  return (
    <section className="border-y border-border bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Social proof"
          title="What our clients say"
          description="Placeholder quotes shown in the final layout — real testimonials to be swapped in via /content/home.ts."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <figure className="flex h-full flex-col rounded bg-page p-6">
                <Quote className="h-6 w-6 text-primary/40" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm text-ink">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <p className="font-semibold text-ink">{testimonial.name}</p>
                  <p className="text-ink-muted">{testimonial.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
