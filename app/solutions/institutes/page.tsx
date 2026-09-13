import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { UseCaseGrid } from "@/components/sections/UseCaseGrid";
import { CaseStudyBlock } from "@/components/sections/CaseStudyBlock";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { institutesSolution } from "@/content/solutions";

export const metadata: Metadata = {
  title: "For Institutes",
  description:
    "Run daily practice tests, milestone assessments, and a shared question bank for your school or coaching institute with Academify.",
  alternates: { canonical: "/solutions/institutes" },
  openGraph: { url: "/solutions/institutes", title: "For Institutes | Academify" },
};

export default function InstitutesSolutionPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Solutions", url: "/solutions/institutes" },
          { name: "For Institutes", url: "/solutions/institutes" },
        ]}
      />
      <PageHero
        eyebrow={institutesSolution.hero.eyebrow}
        title={institutesSolution.hero.title}
        description={institutesSolution.hero.description}
      />
      <UseCaseGrid useCases={institutesSolution.useCases} />
      <CaseStudyBlock
        label={institutesSolution.caseStudy.label}
        summary={institutesSolution.caseStudy.summary}
      />
      <CtaBanner
        title="Bring your institute's testing program onto one platform"
        description="Request a demo to see the question bank, daily practice, and analytics workflow in action."
        cta={{ label: "Request a Demo", href: "/contact" }}
      />
    </>
  );
}
