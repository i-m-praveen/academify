import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-[420px] bg-gradient-to-b from-primary-xlight to-transparent"
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted sm:text-xl">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LinkButton href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </LinkButton>
            <LinkButton href={hero.secondaryCta.href} variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
