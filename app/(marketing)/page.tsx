import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { CapabilitiesGrid } from "@/components/sections/CapabilitiesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductVisual } from "@/components/sections/ProductVisual";
import { Testimonials } from "@/components/sections/Testimonials";
import { StatsBar } from "@/components/sections/StatsBar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { finalCta } from "@/content/home";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} — Assessment Platform for Institutions`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: `${siteConfig.name} — Assessment Platform for Institutions`,
    description: siteConfig.description,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CapabilitiesGrid />
      <HowItWorks />
      <ProductVisual />
      <Testimonials />
      <StatsBar />
      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        cta={finalCta.cta}
      />
    </>
  );
}
