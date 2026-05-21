export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const PRIMARY_NAV: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our mission", href: "/about/mission", description: "Values and purpose" },
      { label: "Board of directors", href: "/about/board", description: "Meet our leadership" },
      { label: "History", href: "/about/history", description: "Three decades of practice" },
    ],
  },
  {
    label: "Membership",
    href: "/membership",
    children: [
      { label: "Overview", href: "/membership" },
      { label: "Benefits", href: "/membership/benefits" },
      { label: "Apply to join", href: "/membership/apply" },
    ],
  },
  { label: "Events", href: "/events" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Find a therapist", href: "/resources/find-a-therapist" },
      { label: "For clinicians", href: "/resources/for-clinicians" },
      { label: "For the public", href: "/resources/for-the-public" },
    ],
  },
  { label: "Education", href: "/education" },
  { label: "Blog", href: "/blog" },
];
