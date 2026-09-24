import type { LucideIcon } from "lucide-react";
import { BarChart3, Camera, Layers, MonitorCheck, Trophy, Users } from "lucide-react";
import type { WalkthroughContent } from "@/components/sections/Walkthrough";

export type UseCase = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const institutesSolution = {
  hero: {
    eyebrow: "For Institutes",
    title: "Question banks, class-wise tests, and clear reports for your students",
    description:
      "Schools and coaching institutes use Academify to run their own computer-based tests: build a shared question bank, publish tests to the right classes, and see exactly where each student stands.",
  },
  useCases: [
    {
      icon: Layers,
      title: "Build a lasting question bank",
      description:
        "Teachers organize questions by subject, topic, subtopic, and difficulty once, then reuse them across every test.",
    },
    {
      icon: Users,
      title: "Publish tests to the right students",
      description:
        "Assign a test to a whole class, a single section, or individual students, and schedule when it opens.",
    },
    {
      icon: MonitorCheck,
      title: "Prepare students for real CBT exams",
      description:
        "Section tabs, a question palette, Mark for Review, and negative marking mirror the computer-based exams students will face.",
    },
    {
      icon: BarChart3,
      title: "See performance clearly",
      description:
        "Admins get score distributions and section-wise breakdowns; students get their own post-exam report with section accuracy.",
    },
  ] as UseCase[],
  walkthrough: {
    eyebrow: "Walkthrough",
    title: "How a class test runs on Academify",
    description: "A typical unit test for one class, from question paper to student reports.",
    steps: [
      {
        title: "Pick questions from your bank",
        description:
          "A teacher filters the question bank by class, subject, topic, and difficulty, and builds a test with a section per subject.",
      },
      {
        title: "Set the rules",
        description:
          "Choose marks per question, turn on negative marking if your exam uses it, and set the duration.",
      },
      {
        title: "Publish to the class",
        description:
          "Publish the test to a whole class, one section, or selected students, with the window in which it opens.",
      },
      {
        title: "Students sit the test",
        description:
          "Students use the same exam screen they will meet in competitive CBT exams: section tabs, a question palette, and Mark for Review.",
      },
      {
        title: "Review the results",
        description:
          "Admins see score distribution and section-wise breakdowns, open any student's answers question by question, and export the report to Excel.",
      },
    ],
  } as WalkthroughContent,
};

export const olympiadSolution = {
  hero: {
    eyebrow: "For Olympiad Organizers",
    title: "Run proctored Olympiad sittings with confidence",
    description:
      "Academify gives Olympiad-conducting organizations a ready computer-based testing platform — secure delivery, remote proctoring, live monitoring, and ranked results — without building one in-house.",
  },
  useCases: [
    {
      icon: Camera,
      title: "Remote proctoring built in",
      description:
        "Webcam snapshots with face checks, fullscreen enforcement, and tab-switch detection flag suspicious behaviour during every sitting.",
    },
    {
      icon: MonitorCheck,
      title: "Live monitoring on exam day",
      description:
        "Follow every candidate's status and violation log in real time from a single live-monitor view.",
    },
    {
      icon: Trophy,
      title: "Finalized results and rankings",
      description:
        "Finalize results once the sitting closes to lock scores, compute ranks, and enable peer comparison.",
    },
    {
      icon: BarChart3,
      title: "Reports ready to share",
      description:
        "Score distribution, section-wise analysis, and per-student answer review — with full reports exported to Excel.",
    },
  ] as UseCase[],
  walkthrough: {
    eyebrow: "Walkthrough",
    title: "How a proctored Olympiad sitting runs on Academify",
    description: "From the question paper to published ranks, step by step.",
    steps: [
      {
        title: "Load candidates and questions",
        description:
          "Bulk-upload candidates from CSV and questions from Excel, organized by class, subject, topic, and difficulty.",
      },
      {
        title: "Build the paper and set proctoring",
        description:
          "Create a sectioned, timed test with your marking scheme and shuffling, then turn on webcam proctoring and fullscreen enforcement and set the violation limit.",
      },
      {
        title: "Publish to registered candidates",
        description:
          "Publish the test to the classes, sections, or individual candidates who are sitting it, with the window in which it opens.",
      },
      {
        title: "Monitor the sitting live",
        description:
          "Follow every candidate's status and violation log in real time while the sitting is in progress.",
      },
      {
        title: "Finalize results and publish ranks",
        description:
          "Review flagged candidates, finalize results to lock scores and compute ranks, then export the full report to Excel for participating schools.",
      },
    ],
  } as WalkthroughContent,
};
