import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "For the public",
  description: "Plain-language information about cognitive behavioral therapy.",
};

const TOPICS = [
  { title: "What is CBT?", body: "A short, plain-language overview of how cognitive behavioral therapy works." },
  { title: "What conditions does CBT treat?", body: "An honest look at the conditions with strong evidence — and a few where evidence is mixed." },
  { title: "What does a course of CBT look like?", body: "Number of sessions, structure, homework, and what 'good enough' progress means." },
  { title: "How to choose a CBT therapist", body: "Questions to ask, credentials to look for, and signs of a good fit." },
  { title: "CBT for children and teens", body: "Adaptations of CBT for younger clients and the role of parents and schools." },
  { title: "What if CBT isn't working?", body: "Honest considerations for when to adjust treatment or seek a second opinion." },
];

export default function ForPublicPage() {
  return (
    <>
      <Section tone="gradient" size="md">
        <div className="max-w-3xl">
          <EyebrowLabel>For the public</EyebrowLabel>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
            Understanding cognitive behavioral therapy.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-foreground/80">
            We write these guides for anyone considering CBT — clients, family members, primary
            care providers, and members of the public who want to understand a particular condition.
          </p>
        </div>
      </Section>

      <Section tone="default" size="md">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((t) => (
            <li
              key={t.title}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="font-serif text-lg text-foreground">{t.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-secondary">
                Coming soon
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl bg-accent/40 border border-secondary/20 p-6 text-center">
          <p className="text-base font-medium text-foreground">
            Looking for a CBT therapist?
          </p>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            Search our directory of Society-member clinicians across Southern California.
          </p>
          <Button asChild className="mt-5">
            <Link href="/resources/find-a-therapist">
              Open the directory <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
