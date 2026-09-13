import { Container } from "@/components/ui/Container";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";

export function CaseStudyBlock({
  label,
  summary,
}: {
  label: string;
  summary: string;
}) {
  return (
    <section className="border-t border-border bg-white py-16 sm:py-20">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <PlaceholderVisual label={label} aspect="aspect-[4/3]" />
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            Case Study
          </p>
          <p className="text-lg text-ink-muted">{summary}</p>
        </div>
      </Container>
    </section>
  );
}
