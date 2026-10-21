export const siteConfig = {
  name: "Academify",
  legalName: "Academify",
  tagline: "Secure online exams for Olympiads and institutions",
  description:
    "Academify is a computer-based testing (CBT) platform for Olympiads, schools, and coaching institutes: question banks, sectioned timed tests, webcam proctoring, live candidate monitoring, and finalized results with rankings and Excel reports.",
  url: "https://www.academify.online",
  ogImage: "/og-image.png",
  email: "teamacademify@gmail.com",
  phone: "+91-6388783545",
  social: {
    linkedin: "",
    twitter: "",
    facebook: "",
  },
  // TODO: Replace with real GA4 / Plausible tracking ID before launch.
  analyticsId: "",
} as const;

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: NavLink[] = [
  { label: "Platform", href: "/platform" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const solutionsNav: NavLink[] = [
  {
    label: "For Institutes",
    href: "/solutions/institutes",
    description: "Question banks, class-wise tests, and detailed student reports.",
  },
  {
    label: "For Olympiad Organizers",
    href: "/solutions/olympiad-organizers",
    description: "Proctored Olympiad sittings with live monitoring and ranked results.",
  },
];

export const footerNav = {
  product: [
    { label: "Platform Overview", href: "/platform" },
    { label: "For Institutes", href: "/solutions/institutes" },
    { label: "For Olympiad Organizers", href: "/solutions/olympiad-organizers" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
