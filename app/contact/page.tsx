import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { contactContent } from "@/content/contact";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a demo or get in touch with the Academify team about Olympiad hosting, question banks, or daily practice and analytics.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact Us | Academify" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", url: "/contact" }]} />
      <PageHero
        eyebrow={contactContent.hero.eyebrow}
        title={contactContent.hero.title}
        description={contactContent.hero.description}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Card className="p-6 sm:p-8">
            <h2 className="font-heading text-xl font-semibold text-ink">Request a demo</h2>
            <p className="mt-1 text-sm text-ink-muted">
              Fill out the form and our team will follow up within one business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="font-heading text-lg font-semibold text-ink">Direct contact</h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-sm text-ink-muted">
                  <Mail className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-primary focus-ring rounded-xs">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-ink-muted">
                  <Phone className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="hover:text-primary focus-ring rounded-xs"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-ink-muted">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                  {siteConfig.address}
                </li>
              </ul>
            </Card>
            <PlaceholderVisual label="[MAP: Office location]" aspect="aspect-[4/3]" />
          </div>
        </Container>
      </section>
    </>
  );
}
