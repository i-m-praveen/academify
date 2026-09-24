import { Container } from "@/components/ui/Container";
import { audienceBar } from "@/content/home";

export function AudienceBar() {
  return (
    <section className="border-b border-border bg-page py-10" aria-label={audienceBar.label}>
      <Container>
        <p className="text-center text-sm font-medium uppercase tracking-wide text-ink-muted">
          {audienceBar.label}
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {audienceBar.audiences.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 font-heading text-base font-semibold text-ink">
              <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary-xlight text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
