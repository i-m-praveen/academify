import type { LucideIcon } from "lucide-react";
import { BarChart3, Camera, Layers, MonitorCheck, Trophy, Users } from "lucide-react";

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
  caseStudy: {
    label: "[CASE STUDY: Placeholder Institute Name]",
    summary:
      "[Placeholder] A mid-sized coaching institute moved its question bank and mock tests onto Academify, replacing a mix of spreadsheets and printed tests.",
  },
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
  caseStudy: {
    label: "[CASE STUDY: Placeholder Olympiad Program]",
    summary:
      "[Placeholder] An Olympiad-conducting organization moved its competition onto Academify to run proctored online sittings and publish ranked results faster.",
  },
};
