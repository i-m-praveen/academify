import type { LucideIcon } from "lucide-react";
import { BarChart3, Layers, ListChecks, Trophy } from "lucide-react";

export const hero = {
  headline: "Assessment infrastructure institutions can build on",
  subheadline:
    "Academify powers large-scale Olympiads, institutional question banks, daily practice, and analytics — one platform your institution or organization can run assessments on, at any scale.",
  primaryCta: { label: "Request a Demo", href: "/contact" },
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
};

export const trustBar = {
  label: "Trusted by institutions across India",
  logos: [
    "[LOGO: Partner Institute 1]",
    "[LOGO: Partner Institute 2]",
    "[LOGO: Partner Institute 3]",
    "[LOGO: Partner Institute 4]",
    "[LOGO: Partner Institute 5]",
  ],
};

export type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export const capabilities: Capability[] = [
  {
    icon: Trophy,
    title: "Olympiad Hosting",
    description:
      "Run white-labeled Olympiads for your institution or client base, including seasonal editions, at national scale.",
    href: "/solutions/olympiad-organizers",
  },
  {
    icon: Layers,
    title: "Question Bank Management",
    description:
      "Build and maintain a tagged, reusable question repository your teams can draw on across every test format.",
    href: "/platform",
  },
  {
    icon: ListChecks,
    title: "Daily Practice & Milestone Tests",
    description:
      "Deliver daily-practice sets and periodic milestone tests to keep students on a measurable improvement track.",
    href: "/solutions/institutes",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Give institutes and clients score trends, percentile comparisons, and exportable reports out of the box.",
    href: "/platform",
  },
];

export const howItWorks = {
  eyebrow: "How it works",
  title: "From onboarding to insight, in four steps",
  description:
    "Academify is built so institutional clients can go from signed agreement to a fully delivered assessment program without custom engineering work.",
  steps: [
    {
      number: "01",
      title: "Client onboarding",
      description:
        "We configure your branded environment, user roles, and access levels for your institution or organization.",
    },
    {
      number: "02",
      title: "Question bank setup",
      description:
        "Import or author your question repository, tagged by subject, difficulty, and reuse across test types.",
    },
    {
      number: "03",
      title: "Test delivery",
      description:
        "Launch timed, proctored assessments — from a single-institute practice test to a nationwide Olympiad.",
    },
    {
      number: "04",
      title: "Analytics",
      description:
        "Review performance dashboards, percentile breakdowns, and exportable reports as results come in.",
    },
  ],
};

export const productVisual = {
  eyebrow: "Product",
  title: "One dashboard for every stakeholder",
  description:
    "Administrators, institute coordinators, and students each get a purpose-built view into the same underlying assessment data.",
  placeholderLabel: "[SCREENSHOT: Analytics dashboard]",
};

export const testimonials = [
  {
    quote:
      "[Placeholder testimonial] Academify let us run our institute's Olympiad program without building any of the underlying testing infrastructure ourselves.",
    name: "[Placeholder Name]",
    role: "[Placeholder Title, Placeholder Institute]",
  },
  {
    quote:
      "[Placeholder testimonial] The question bank tagging alone saved our academic team weeks of manual work every term.",
    name: "[Placeholder Name]",
    role: "[Placeholder Title, Placeholder Institute]",
  },
  {
    quote:
      "[Placeholder testimonial] Analytics gave our coordinators a clear, exportable view of student performance across every test cycle.",
    name: "[Placeholder Name]",
    role: "[Placeholder Title, Placeholder Institute]",
  },
];

export const stats = [
  { value: "0,00,000+", label: "Students assessed (placeholder)" },
  { value: "000+", label: "Institutes onboarded (placeholder)" },
  { value: "0,000+", label: "Tests conducted (placeholder)" },
  { value: "00+", label: "Client organizations (placeholder)" },
];

export const finalCta = {
  title: "Ready to see Academify in action?",
  description:
    "Talk to our team about how Academify can support your institution's assessment program or your organization's Olympiad.",
  cta: { label: "Request a Demo", href: "/contact" },
};
