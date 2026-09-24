export const siteConfig = {
  name: "Academify",
  legalName: "Academify",
  tagline: "Secure online exams for Olympiads and institutions",
  description:
    "Academify is a computer-based testing (CBT) platform for Olympiads, schools, and coaching institutes: question banks, sectioned timed tests, webcam proctoring, live candidate monitoring, and finalized results with rankings and Excel reports.",
  url: "https://www.academify.example",
  ogImage: "/og-image.png",
  email: "hello@academify.example",
  phone: "+91 00000 00000",
  social: {
    linkedin: "https://www.linkedin.com/company/academify",
    twitter: "https://twitter.com/academify",
    facebook: "https://www.facebook.com/academify",
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
  { label: "Blog", href: "/blog" },
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
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};
