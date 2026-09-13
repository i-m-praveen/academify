import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export function CtaBanner({
  title,
  description,
  cta,
}: {
  title: string;
  description: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="rounded-lg bg-gradient-to-br from-primary to-primary-dark px-8 py-14 text-center shadow-md sm:px-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{description}</p>
          <div className="mt-8 flex justify-center">
            <LinkButton
              href={cta.href}
              size="lg"
              className="bg-white text-primary hover:bg-primary-xlight"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
