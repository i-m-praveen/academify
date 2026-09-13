import { Container } from "@/components/ui/Container";
import { stats } from "@/content/home";

export function StatsBar() {
  return (
    <section className="bg-primary py-16" aria-label="Academify by the numbers">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-white/70">
          Placeholder figures — to be replaced with verified numbers
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-heading text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </dd>
              <p className="mt-2 text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
