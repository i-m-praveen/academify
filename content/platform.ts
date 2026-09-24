export const platformHero = {
  eyebrow: "Platform",
  title: "One CBT platform, from question bank to finalized results",
  description:
    "Author questions, build sectioned tests, deliver them in a secure exam screen, proctor and monitor candidates live, then finalize results and export reports — all in Academify.",
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
    title: "One repository, organized for reuse",
    description:
      "Build a question bank once and draw on it for every test, instead of starting from scratch each time.",
    bullets: [
      "Organize questions by class, subject, topic, and subtopic",
      "Tag every question with a difficulty level: easy, medium, or hard",
      "MCQ, text, and match-the-column question types",
      "Bulk upload from a ready-made Excel template",
    ],
    placeholderLabel: "[SCREENSHOT: Question bank list with subject/topic filters]",
  },
  {
    id: "test-builder",
    eyebrow: "Test Builder",
    title: "Sectioned tests with your marking scheme",
    description:
      "Set up a test the way your exam actually works — multiple sections, your own marks, and your own rules.",
    bullets: [
      "Multiple sections per test, each with its own questions",
      "Configurable marks per question and negative marking",
      "Optionally shuffle question order and answer options",
      "Schedule and publish to a whole class, a section, or individual students",
    ],
    placeholderLabel: "[SCREENSHOT: Test builder with sections and marking settings]",
  },
  {
    id: "exam-experience",
    eyebrow: "Student Experience",
    title: "An exam screen students find familiar",
    description:
      "A clean, mobile-responsive exam interface modelled on the computer-based exams students will sit later.",
    bullets: [
      "Section tabs and a question palette showing answered, unanswered, and marked questions",
      "Mark for Review and Clear Response on every question",
      "Answers saved as students go, with automatic submission when time runs out",
      "A visual post-exam report with section-wise accuracy",
    ],
    placeholderLabel: "[SCREENSHOT: Student exam screen with question palette]",
  },
  {
    id: "proctoring",
    eyebrow: "Proctoring & Live Monitoring",
    title: "Exam integrity you can see as it happens",
    description:
      "Built-in remote proctoring flags suspicious behaviour during the exam, and a live monitor shows every candidate's status in one place.",
    bullets: [
      "Periodic webcam snapshots with face-presence and multiple-face checks",
      "Fullscreen enforcement and tab-switch detection",
      "Flags for dev tools, print-screen, page refresh, and network drops",
      "Live candidate monitor with a violation log for every candidate",
    ],
    placeholderLabel: "[SCREENSHOT: Live candidate monitor with violation flags]",
  },
  {
    id: "results",
    eyebrow: "Results & Reports",
    title: "Finalized results, ready to share",
    description:
      "When a sitting closes, finalize results to lock in scores, compute ranks, and open up reports for administrators and students.",
    bullets: [
      "Finalize Results workflow that computes cohort statistics and ranks",
      "Per-test score distribution, section-wise breakdown, and student ranking",
      "Per-student answer review, question by question, with time spent",
      "Full test reports exported to Excel",
    ],
    placeholderLabel: "[SCREENSHOT: Test report with score distribution and rankings]",
  },
  {
    id: "administration",
    eyebrow: "Administration",
    title: "Roles and controls for every team member",
    description:
      "Give each person the access they need, and onboard whole batches of students in minutes.",
    bullets: [
      "Super Admin, Admin, Teacher, and Student roles",
      "Choose which modules each role can see",
      "Bulk upload of users from CSV",
      "Your institution's logo across the platform",
    ],
    placeholderLabel: "[SCREENSHOT: User management and role settings]",
  },
];
