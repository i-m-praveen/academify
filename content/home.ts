import type { LucideIcon } from "lucide-react";
import { BarChart3, Layers, MonitorCheck, ShieldCheck } from "lucide-react";

export const hero = {
  headline: "Secure online exams for Olympiads and institutions",
  subheadline:
    "Academify is a computer-based testing platform: build a question bank, publish sectioned timed tests, proctor and monitor every candidate live, and release finalized results with rankings and Excel reports.",
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
    icon: ShieldCheck,
    title: "Proctored Online Exams",
    description:
      "Webcam snapshots with face checks, fullscreen enforcement, and tab-switch detection keep every sitting fair.",
    href: "/platform#proctoring",
  },
  {
    icon: MonitorCheck,
    title: "Live Candidate Monitoring",
    description:
      "Watch every candidate's progress and violation flags in real time while the exam is running.",
    href: "/platform#proctoring",
  },
  {
    icon: Layers,
    title: "Question Bank & Test Builder",
    description:
      "Organize questions by subject, topic, and difficulty, then build sectioned tests with negative marking and shuffling.",
    href: "/platform#question-bank",
  },
  {
    icon: BarChart3,
    title: "Results & Reports",
    description:
      "Finalize results to compute ranks, review every student's answers, and export full reports to Excel.",
    href: "/platform#results",
  },
];

export const howItWorks = {
  eyebrow: "How it works",
  title: "From setup to finalized results, in four steps",
  description:
    "Academify covers the full exam cycle, so your team can run a proctored test without stitching together separate tools.",
  steps: [
    {
      number: "01",
      title: "Set up users and classes",
      description:
        "Bulk-upload students from CSV, organize them into classes and sections, and assign admin and teacher roles.",
    },
    {
      number: "02",
      title: "Build your question bank",
      description:
        "Add questions one at a time or upload them from Excel, organized by subject, topic, subtopic, and difficulty.",
    },
    {
      number: "03",
      title: "Publish and proctor the test",
      description:
        "Create a sectioned, timed test, publish it to the right students, and monitor candidates live as they sit it.",
    },
    {
      number: "04",
      title: "Finalize and report",
      description:
        "Finalize results to compute ranks, then share section-wise reports and export them to Excel.",
    },
  ],
};

export const productVisual = {
  eyebrow: "Product",
  title: "One platform for administrators, teachers, and students",
  description:
    "Admins run exams and reports, teachers manage questions and tests, and students get a focused exam screen and their own results.",
  placeholderLabel: "[SCREENSHOT: Admin dashboard with exam statistics and score distribution]",
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
    "Book a walkthrough of the question bank, exam screen, live proctoring, and results workflow, set up for your institution or Olympiad.",
  cta: { label: "Request a Demo", href: "/contact" },
};
