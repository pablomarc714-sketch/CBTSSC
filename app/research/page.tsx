import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Research",
  description: "Research initiatives and publications from CBTSSC members.",
};

const HIGHLIGHTS = [
  {
    title: "Quarterly research roundup",
    body: "Plain-language summaries of recent peer-reviewed CBT studies — written for working clinicians.",
    href: "/blog?category=Research",
    cta: "Read latest roundup",
  },
  {
    title: "Annual research symposium",
    body: "Each November our student and trainee chapter hosts a half-day research symposium with posters and lightning talks.",
    href: "/events",
    cta: "See event details",
  },
  {
    title: "Implementation research network",
    body: "An informal network of members studying how to bring evidence-based CBT into routine care settings.",
    href: "/contact",
    cta: "Get involved",
  },
];

export default function ResearchPage() {
  return (
    <>
      <Section tone="gradient" size="md">
        <div className="max-w-3xl">
          <EyebrowLabel>Research</EyebrowLabel>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
            Bridging research and practice in Southern California.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-foreground/80">
            Many of our members hold dual roles as clinicians and researchers. The Society's
            research programming exists to make that work more visible — and more useful to
            day-to-day practice.
          </p>
        </div>
      </Section>

      <Section tone="default" size="md">
        <ul className="grid gap-5 md:grid-cols-3">
          {HIGHLIGHTS.map((h) => (
            <li
              key={h.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="font-serif text-xl text-foreground">{h.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">{h.body}</p>
              <Button asChild variant="outline" className="mt-6 self-start">
                <Link href={h.href}>
                  {h.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
