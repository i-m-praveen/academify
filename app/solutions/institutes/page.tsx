import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { UseCaseGrid } from "@/components/sections/UseCaseGrid";
import { Walkthrough } from "@/components/sections/Walkthrough";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { institutesSolution } from "@/content/solutions";

export const metadata: Metadata = {
  title: "For Institutes",
  description:
    "Build a shared question bank, publish class-wise computer-based tests, and get section-wise student reports for your school or coaching institute.",
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
      <Walkthrough walkthrough={institutesSolution.walkthrough} />
      <CtaBanner
        title="Bring your institute's tests onto one platform"
        description="Request a demo to see the question bank, test publishing, and student reports in action."
        cta={{ label: "Request a Demo", href: "/contact" }}
      />
    </>
  );
}
