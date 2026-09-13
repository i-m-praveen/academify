import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureDeepDive } from "@/components/sections/FeatureDeepDive";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, softwareApplicationSchema } from "@/lib/schema";
import { platformHero, platformSections } from "@/content/platform";

export const metadata: Metadata = {
  title: "Platform Overview",
  description:
    "Explore Academify's question bank management, test engine, Olympiad hosting, and analytics capabilities for institutional clients.",
  alternates: { canonical: "/platform" },
  openGraph: { url: "/platform", title: "Platform Overview | Academify" },
};

export default function PlatformPage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <Breadcrumbs items={[{ name: "Platform", url: "/platform" }]} />
      <PageHero
        eyebrow={platformHero.eyebrow}
        title={platformHero.title}
        description={platformHero.description}
      />
      {platformSections.map((section, index) => (
        <FeatureDeepDive key={section.id} section={section} reverse={index % 2 === 1} />
      ))}
      <CtaBanner
        title="See the full platform in a live walkthrough"
        description="Book a demo and we'll walk your team through question bank setup, test delivery, and analytics reporting."
        cta={{ label: "Request a Demo", href: "/contact" }}
      />
    </>
  );
}
