export const platformHero = {
  eyebrow: "Platform",
  title: "A single platform for every stage of assessment",
  description:
    "From building a question repository to delivering a proctored test to reporting on results — Academify covers the full assessment lifecycle for institutional clients.",
};

export type PlatformSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  placeholderLabel: string;
};

export const platformSections: PlatformSection[] = [
  {
    id: "question-bank",
    eyebrow: "Question Bank",
    title: "One repository, tagged for reuse",
    description:
      "Institutions build a living question bank that grows more valuable every term, instead of starting from scratch for every test.",
    bullets: [
      "Tag questions by subject, topic, and difficulty level",
      "Reuse the same bank across practice tests, milestones, and Olympiads",
      "Version control and review workflow for question authors",
      "Bulk import from spreadsheets or existing question sets",
    ],
    placeholderLabel: "[SCREENSHOT: Question bank tagging interface]",
  },
  {
    id: "test-engine",
    eyebrow: "Test Engine",
    title: "Reliable, timed delivery at any scale",
    description:
      "The same delivery engine that runs a single classroom quiz can run a multi-state Olympiad sitting, without changing how you author tests.",
    bullets: [
      "Timed sections with configurable auto-submit",
      "Continuous auto-save so no student loses progress",
      "Tab-switch detection and other anti-cheat basics",
      "Support for objective, multi-select, and numeric-answer formats",
    ],
    placeholderLabel: "[SCREENSHOT: Test-taking interface]",
  },
  {
    id: "olympiad-hosting",
    eyebrow: "Olympiad Hosting",
    title: "Multi-client, white-labeled, and seasonal",
    description:
      "Run Olympiads for multiple client organizations at once, each fully white-labeled, including recurring seasonal editions like summer and winter cycles.",
    bullets: [
      "Per-client branding across registration, testing, and reporting",
      "Support for recurring seasonal editions on a fixed calendar",
      "Isolated data and question banks per client organization",
      "Scales from a single school to a nationwide sitting",
    ],
    placeholderLabel: "[SCREENSHOT: Multi-client Olympiad admin view]",
  },
  {
    id: "analytics",
    eyebrow: "Analytics",
    title: "Reporting your stakeholders will actually use",
    description:
      "Give institute coordinators and client administrators the reports they need without asking your team to build custom exports.",
    bullets: [
      "Score trends over time, by student, class, or cohort",
      "Percentile and cohort comparison across test sittings",
      "Exportable reports (CSV / PDF) for offline sharing",
      "Role-based dashboards for admins, coordinators, and students",
    ],
    placeholderLabel: "[SCREENSHOT: Analytics dashboard with percentile charts]",
  },
];
