import { Container } from "@/components/ui/Container";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import { Reveal } from "@/components/ui/Reveal";
import { productVisual } from "@/content/home";

export function ProductVisual() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            {productVisual.eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {productVisual.title}
          </h2>
          <p className="mt-4 text-lg text-ink-muted">{productVisual.description}</p>
        </div>
        <Reveal>
          <PlaceholderVisual label={productVisual.placeholderLabel} />
        </Reveal>
      </Container>
    </section>
  );
}
