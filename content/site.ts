export const siteConfig = {
  name: "Academify",
  legalName: "Academify",
  tagline: "Assessment infrastructure for institutions",
  description:
    "Academify is an assessment platform that powers Olympiads, institutional question banks, daily practice tests, and analytics for schools, coaching institutes, and education organizations.",
  url: "https://www.academify.example",
  ogImage: "/og-image.png",
  email: "hello@academify.example",
  phone: "+91 00000 00000",
  address: "Placeholder Address, City, State, India",
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
    description: "Daily practice, question banks, and analytics for your own students.",
  },
  {
    label: "For Olympiad Organizers",
    href: "/solutions/olympiad-organizers",
    description: "End-to-end, white-labeled Olympiad hosting at scale.",
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
