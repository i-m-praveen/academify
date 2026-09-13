import { Container } from "@/components/ui/Container";
import { trustBar } from "@/content/home";

export function TrustBar() {
  return (
    <section className="border-b border-border bg-page py-10" aria-label="Trusted by">
      <Container>
        <p className="text-center text-sm font-medium uppercase tracking-wide text-ink-muted">
          {trustBar.label}
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {trustBar.logos.map((logo) => (
            <li
              key={logo}
              className="flex h-10 w-32 items-center justify-center rounded-xs border border-dashed border-border bg-white text-[11px] font-medium text-ink-muted"
            >
              {logo}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
