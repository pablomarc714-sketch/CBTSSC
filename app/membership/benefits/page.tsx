import type { Metadata } from "next";
import {
  GraduationCap,
  Users,
  BookOpen,
  Globe,
  Compass,
  ScrollText,
  HeartHandshake,
  Mic,
} from "lucide-react";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { Testimonial } from "@/components/cards/testimonial";

export const metadata: Metadata = {
  title: "Member benefits",
  description: "What you get as a member of the CBT Society of Southern California.",
};

const BENEFITS = [
  {
    icon: GraduationCap,
    title: "Discounted continuing education",
    body: "Members receive 25–40% off all CE workshops, conferences, and webinars produced by the Society.",
  },
  {
    icon: Globe,
    title: "Public directory listing",
    body: "Professional members are listed in our public-facing therapist directory, used by thousands of SoCal residents annually.",
  },
  {
    icon: Users,
    title: "Peer consultation groups",
    body: "Monthly disorder-specific consultation groups, including OCD, PTSD, eating disorders, and adolescent CBT.",
  },
  {
    icon: BookOpen,
    title: "Quarterly Society journal",
    body: "Practice-focused articles, research summaries, and case discussions written by and for members.",
  },
  {
    icon: Mic,
    title: "Annual fall conference",
    body: "Member registration rates for our two-day flagship conference at UCLA each October.",
  },
  {
    icon: HeartHandshake,
    title: "Mentorship program",
    body: "One-to-one matching for student and early-career members seeking a senior clinician mentor.",
  },
  {
    icon: Compass,
    title: "Clinician toolkits",
    body: "Member-only access to a library of assessment measures, session protocols, and patient-facing handouts.",
  },
  {
    icon: ScrollText,
    title: "Voting and governance",
    body: "Professional members vote in board elections and may stand for committee or board service after two years.",
  },
];

export default function BenefitsPage() {
  return (
    <>
      <Section tone="gradient" size="lg">
        <div className="max-w-3xl">
          <EyebrowLabel>Member benefits</EyebrowLabel>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
            What you get when you join.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            Membership is designed around what we hear most from our community: rigorous training,
            real consultation, and connection to peers who care about the work.
          </p>
        </div>
      </Section>

      <Section tone="default" size="md">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <li
              key={b.title}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-secondary">
                <b.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-serif text-lg text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" size="md">
        <div className="mx-auto max-w-3xl">
          <Testimonial
            quote="The monthly OCD consultation group is genuinely the most valuable thing I do for my practice each month. I have learned more there than in any single training I've attended."
            author="Elena Rivera, PhD"
            role="Member since 2018 · Santa Monica"
            avatar="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
          />
        </div>
      </Section>
    </>
  );
}
