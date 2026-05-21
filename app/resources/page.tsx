import Link from "next/link";
import type { Metadata } from "next";
import {
  Search,
  Users,
  BookOpen,
  Stethoscope,
  HeartPulse,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resources",
  description: "Resources for clinicians and the public — directory, toolkits, and crisis support.",
};

const RESOURCES = [
  {
    icon: Search,
    title: "Find a CBT therapist",
    body: "Search our directory of Society-member clinicians across SoCal by region, specialty, and insurance.",
    href: "/resources/find-a-therapist",
    audience: "For the public",
  },
  {
    icon: Stethoscope,
    title: "For clinicians",
    body: "Assessment measures, session protocols, and patient-facing handouts curated by our education committee.",
    href: "/resources/for-clinicians",
    audience: "For clinicians",
  },
  {
    icon: BookOpen,
    title: "Public education on CBT",
    body: "Plain-language guides to what CBT is, what it treats, and how to choose a therapist.",
    href: "/resources/for-the-public",
    audience: "For the public",
  },
  {
    icon: Users,
    title: "Peer consultation groups",
    body: "Monthly member-only consultation groups, organized by clinical specialty.",
    href: "/membership/benefits",
    audience: "For members",
  },
  {
    icon: HeartPulse,
    title: "Continuing education",
    body: "Society-produced workshops and webinars offering CE credit for licensed clinicians.",
    href: "/education",
    audience: "For clinicians",
  },
  {
    icon: Phone,
    title: "Crisis resources",
    body: "988, Crisis Text Line, and local Southern California crisis services. Available 24/7.",
    href: "#crisis",
    audience: "For everyone",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Section tone="gradient" size="md">
        <div className="max-w-3xl">
          <EyebrowLabel>Resources</EyebrowLabel>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
            Resources for clinicians and the public.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-foreground/80">
            Whether you are a working clinician, a student, or a member of the public considering
            CBT — start here.
          </p>
        </div>
      </Section>

      <Section tone="default" size="md">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r) => (
            <li key={r.title}>
              <Link
                href={r.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-secondary">
                  <r.icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                  {r.audience}
                </p>
                <h2 className="mt-1.5 font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                  {r.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">{r.body}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-secondary">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cta" size="md" id="crisis">
        <div className="mx-auto max-w-3xl">
          <EyebrowLabel>Crisis resources</EyebrowLabel>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground">
            If you or someone you know is in crisis.
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            Free, confidential support is available 24/7. If there is immediate danger to life,
            call 911.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["988 Suicide & Crisis Lifeline", "Call or text 988"],
              ["Crisis Text Line", "Text HOME to 741741"],
              ["LA County DMH Help Line", "(800) 854-7771"],
              ["Veterans Crisis Line", "Dial 988, then press 1"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl bg-card border border-border p-5">
                <dt className="font-medium text-foreground">{title}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{detail}</dd>
              </div>
            ))}
          </dl>
          <Button asChild variant="ghost" className="mt-8">
            <Link href="/resources/for-the-public">
              More resources for the public <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
