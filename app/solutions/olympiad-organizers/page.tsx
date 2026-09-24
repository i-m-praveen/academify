import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { UseCaseGrid } from "@/components/sections/UseCaseGrid";
import { Walkthrough } from "@/components/sections/Walkthrough";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { olympiadSolution } from "@/content/solutions";

export const metadata: Metadata = {
  title: "For Olympiad Organizers",
  description:
    "Run proctored online Olympiad sittings with webcam proctoring, live candidate monitoring, finalized rankings, and Excel reports.",
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
      <Walkthrough walkthrough={olympiadSolution.walkthrough} />
      <CtaBanner
        title="Plan your next Olympiad sitting with Academify"
        description="Talk to us about proctoring, live monitoring, and results — well before your exam date."
        cta={{ label: "Request a Demo", href: "/contact" }}
      />
    </>
  );
}
