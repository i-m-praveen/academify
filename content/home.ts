import type { LucideIcon } from "lucide-react";
import { BarChart3, GraduationCap, Layers, MonitorCheck, School, ShieldCheck, Trophy } from "lucide-react";

export const hero = {
  headline: "Secure online exams for Olympiads and institutions",
  subheadline:
    "Academify is a computer-based testing platform: build a question bank, publish sectioned timed tests, proctor and monitor every candidate live, and release finalized results with rankings and Excel reports.",
  primaryCta: { label: "Request a Demo", href: "/contact" },
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
};

export const audienceBar = {
  label: "Built for",
  audiences: [
    { icon: School, label: "Schools" },
    { icon: GraduationCap, label: "Coaching institutes" },
    { icon: Trophy, label: "Olympiad organizers" },
  ] as { icon: LucideIcon; label: string }[],
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
  imageSrc: "/screenshots/admin-dashboard.png",
};

export const faq = {
  eyebrow: "FAQ",
  title: "Questions institutions ask us",
  description: "Straight answers about how exams run on Academify.",
  items: [
    {
      question: "Do students need a webcam?",
      answer:
        "Only if you turn on webcam proctoring for that test. Proctoring and fullscreen options are chosen test by test, so a routine class test can run without a camera while an Olympiad sitting uses full proctoring.",
    },
    {
      question: "What happens if a student's internet connection drops?",
      answer:
        "Answers are saved as the student goes, and a save that fails is retried automatically. The disconnection is recorded against the candidate so your team can review it afterwards.",
    },
    {
      question: "What if a student refreshes the page or their browser closes mid-exam?",
      answer:
        "They log back in and continue the same attempt with their saved answers. The timer keeps running from the original start time, and the page refresh is logged as a proctoring event.",
    },
    {
      question: "What happens when time runs out?",
      answer:
        "The test is submitted automatically with every answer the student has saved, so no one needs to click Submit at the last second.",
    },
    {
      question: "How strict is the proctoring?",
      answer:
        "You decide. Each test has a violation limit: candidates see a warning each time a counted violation is detected, and you can choose to auto-submit the test once the limit is reached. You also choose which violation types count toward that limit and which are only logged.",
    },
    {
      question: "Can we use our own questions?",
      answer:
        "Yes. Add questions one at a time or upload them in bulk from an Excel template, organized by class, subject, topic, subtopic, and difficulty. MCQ, text, and match-the-column question types are supported.",
    },
    {
      question: "Can students take tests on a phone?",
      answer:
        "Yes. The student exam screen is mobile-responsive, with the same section tabs, question palette, and Mark for Review options as on a desktop.",
    },
    {
      question: "When do students see their results?",
      answer:
        "You choose, test by test, whether students see their result. Ranks and peer comparison are only calculated and shown once you finalize results for that sitting.",
    },
  ],
};

export const stats = [
  { value: "12", label: "Proctoring violation types detected" },
  { value: "3", label: "Question types: MCQ, text, and match-the-column" },
  { value: "4", label: "User roles, from Super Admin to Student" },
  { value: "Excel", label: "Bulk question upload and full report export" },
];

export const finalCta = {
  title: "Ready to see Academify in action?",
  description:
    "Book a walkthrough of the question bank, exam screen, live proctoring, and results workflow, set up for your institution or Olympiad.",
  cta: { label: "Request a Demo", href: "/contact" },
};
