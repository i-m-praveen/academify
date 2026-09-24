import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faq } from "@/content/home";

export function Faq() {
  return (
    <section className="border-y border-border bg-white py-20 sm:py-28">
      <Container className="mx-auto max-w-3xl">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} description={faq.description} />
        <div className="mt-12 divide-y divide-border rounded border border-border">
          {faq.items.map((item) => (
            <details key={item.question} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-ink focus-ring rounded-xs [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  className="h-5 w-5 flex-shrink-0 text-ink-muted transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm text-ink-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
