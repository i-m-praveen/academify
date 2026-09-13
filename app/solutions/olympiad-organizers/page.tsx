import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { UseCaseGrid } from "@/components/sections/UseCaseGrid";
import { CaseStudyBlock } from "@/components/sections/CaseStudyBlock";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { olympiadSolution } from "@/content/solutions";

export const metadata: Metadata = {
  title: "For Olympiad Organizers",
  description:
    "Host white-labeled Olympiads at scale, including seasonal editions, with Academify's assessment infrastructure.",
  alternates: { canonical: "/solutions/olympiad-organizers" },
  openGraph: {
    url: "/solutions/olympiad-organizers",
    title: "For Olympiad Organizers | Academify",
  },
};

export default function OlympiadOrganizersSolutionPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Solutions", url: "/solutions/olympiad-organizers" },
          { name: "For Olympiad Organizers", url: "/solutions/olympiad-organizers" },
        ]}
      />
      <PageHero
        eyebrow={olympiadSolution.hero.eyebrow}
        title={olympiadSolution.hero.title}
        description={olympiadSolution.hero.description}
      />
      <UseCaseGrid useCases={olympiadSolution.useCases} />
      <CaseStudyBlock
        label={olympiadSolution.caseStudy.label}
        summary={olympiadSolution.caseStudy.summary}
      />
      <CtaBanner
        title="Plan your next Olympiad edition with Academify"
        description="Talk to us about seasonal cycles, white-labeling, and scale — before your next registration window opens."
        cta={{ label: "Request a Demo", href: "/contact" }}
      />
    </>
  );
}
