import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { AudienceBar } from "@/components/sections/AudienceBar";
import { CapabilitiesGrid } from "@/components/sections/CapabilitiesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductVisual } from "@/components/sections/ProductVisual";
import { Faq } from "@/components/sections/Faq";
import { StatsBar } from "@/components/sections/StatsBar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { faq, finalCta } from "@/content/home";
import { JsonLd, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} — Online Exam & CBT Platform`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: `${siteConfig.name} — Online Exam & CBT Platform`,
    description: siteConfig.description,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faq.items)} />
      <Hero />
      <AudienceBar />
      <CapabilitiesGrid />
      <HowItWorks />
      <ProductVisual />
      <StatsBar />
      <Faq />
      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        cta={finalCta.cta}
      />
    </>
  );
}
