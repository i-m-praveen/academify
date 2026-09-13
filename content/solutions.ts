import type { LucideIcon } from "lucide-react";
import { BarChart3, ClipboardList, Globe2, Layers, Repeat, ShieldCheck } from "lucide-react";

export type UseCase = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const institutesSolution = {
  hero: {
    eyebrow: "For Institutes",
    title: "Daily practice, question banks, and analytics — under your own name",
    description:
      "Schools and coaching institutes use Academify to run their own practice-testing program: build a shared question bank, deliver daily and milestone tests, and see exactly where each student stands.",
  },
  useCases: [
    {
      icon: Layers,
      title: "Build a lasting question bank",
      description:
        "Your teaching staff tag and organize questions once, then reuse them across daily practice, milestones, and mock tests.",
    },
    {
      icon: ClipboardList,
      title: "Run daily practice at scale",
      description:
        "Assign short daily-practice sets automatically, without manually creating and distributing a new test every day.",
    },
    {
      icon: Repeat,
      title: "Track progress with milestone tests",
      description:
        "Schedule periodic milestone tests to check retention and readiness ahead of major exams or Olympiads.",
    },
    {
      icon: BarChart3,
      title: "See performance clearly",
      description:
        "Coordinators get cohort-level dashboards; students and parents get individual progress reports.",
    },
  ] as UseCase[],
  caseStudy: {
    label: "[CASE STUDY: Placeholder Institute Name]",
    summary:
      "[Placeholder] A mid-sized coaching institute consolidated its question bank and daily-practice workflow onto Academify, replacing a mix of spreadsheets and printed tests.",
  },
};

export const olympiadSolution = {
  hero: {
    eyebrow: "For Olympiad Organizers",
    title: "Run your Olympiad end-to-end, fully white-labeled",
    description:
      "Academify gives Olympiad-conducting organizations the infrastructure to run branded competitions at scale — registration, delivery, and results — without building a testing platform in-house.",
  },
  useCases: [
    {
      icon: Globe2,
      title: "Fully white-labeled experience",
      description:
        "Your branding, your domain presence, your certificates — Academify runs underneath as the assessment engine.",
    },
    {
      icon: Repeat,
      title: "Seasonal editions, handled natively",
      description:
        "Configure recurring seasonal cycles — such as summer and winter editions — as first-class, repeatable programs.",
    },
    {
      icon: ShieldCheck,
      title: "Built for scale and integrity",
      description:
        "Timed delivery, auto-save, and anti-cheat basics designed to hold up across thousands of simultaneous participants.",
    },
    {
      icon: BarChart3,
      title: "Results and reporting, ready to share",
      description:
        "Generate percentile rankings, merit lists, and exportable reports for participating institutions immediately after each sitting.",
    },
  ] as UseCase[],
  caseStudy: {
    label: "[CASE STUDY: Placeholder Olympiad Program]",
    summary:
      "[Placeholder] An Olympiad-conducting organization moved a multi-city competition onto Academify to support seasonal editions without added engineering overhead.",
  },
};
