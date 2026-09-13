import type { Metadata } from "next";
import { User } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Academify's mission to build assessment infrastructure for schools, coaching institutes, and Olympiad organizers.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About Us | Academify" },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", url: "/about" }]} />
      <PageHero
        eyebrow={aboutContent.hero.eyebrow}
        title={aboutContent.hero.title}
        description={aboutContent.hero.description}
      />

      <section className="py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
            {aboutContent.mission.title}
          </h2>
          <div className="mt-5 space-y-4">
            {aboutContent.mission.body.map((paragraph) => (
              <p key={paragraph} className="text-lg text-ink-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-white py-16 sm:py-20">
        <Container>
          <h2 className="text-center font-heading text-2xl font-bold text-ink sm:text-3xl">
            Our values
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {aboutContent.values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <div className="h-full rounded bg-page p-6">
                  <h3 className="font-heading text-lg font-semibold text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-center font-heading text-2xl font-bold text-ink sm:text-3xl">
            {aboutContent.team.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-ink-muted">
            {aboutContent.team.description}
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {aboutContent.team.members.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-xlight">
                  <User className="h-8 w-8 text-primary/60" aria-hidden="true" />
                </div>
                <p className="mt-3 text-sm font-semibold text-ink">{member.name}</p>
                <p className="text-xs text-ink-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Want to talk to our team directly?"
        description="We're happy to walk through how Academify could fit your institution or organization."
        cta={{ label: "Request a Demo", href: "/contact" }}
      />
    </>
  );
}
