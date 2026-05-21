import type { Metadata } from "next";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our history",
  description: "Three decades of advancing evidence-based mental health care in Southern California.",
};

const MILESTONES = [
  {
    year: "1994",
    title: "The Society is founded",
    body: "A group of fourteen clinicians and academics meet at UCLA to charter a regional society dedicated to cognitive behavioral therapy.",
  },
  {
    year: "1998",
    title: "First annual fall conference",
    body: "The Society holds its first multi-day fall conference, an event that continues today as our flagship gathering.",
  },
  {
    year: "2003",
    title: "Peer consultation program launches",
    body: "Monthly disorder-specific consultation groups begin meeting, eventually growing to serve members across SoCal each month.",
  },
  {
    year: "2009",
    title: "Public-facing therapist directory",
    body: "We launch our member directory, helping members of the public find appropriately trained CBT clinicians in their area.",
  },
  {
    year: "2015",
    title: "Student and trainee chapter",
    body: "A formal student and early-career chapter is established, hosting its own annual research symposium.",
  },
  {
    year: "2020",
    title: "Telehealth rapid-response training",
    body: "Within weeks of the pandemic, the Society delivers free training to help members transition to high-quality remote care.",
  },
  {
    year: "2024",
    title: "30th anniversary",
    body: "The Society celebrates three decades of supporting evidence-based mental health care across Southern California.",
  },
];

export default function HistoryPage() {
  return (
    <>
      <Section tone="gradient" size="lg">
        <div className="max-w-3xl">
          <EyebrowLabel>History</EyebrowLabel>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
            Three decades of practice.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            A brief look at the milestones that shaped the Society — and the clinicians who shaped
            them.
          </p>
        </div>
      </Section>

      <Section tone="default" size="md">
        <ol className="relative mx-auto max-w-4xl">
          <div
            className="absolute left-1/2 top-2 bottom-2 hidden w-px -translate-x-1/2 bg-border md:block"
            aria-hidden
          />
          {MILESTONES.map((m, i) => {
            const right = i % 2 === 1;
            return (
              <li
                key={m.year}
                className={cn(
                  "relative mb-12 last:mb-0 md:grid md:grid-cols-2 md:gap-10",
                  right ? "md:[direction:rtl]" : ""
                )}
              >
                <div
                  className={cn(
                    "rounded-2xl border border-border bg-card p-6 shadow-sm md:[direction:ltr]",
                    right ? "md:col-start-2" : ""
                  )}
                >
                  <p className="font-serif text-3xl text-secondary">{m.year}</p>
                  <h3 className="mt-2 font-serif text-xl text-foreground">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                </div>
                <span
                  className="absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-secondary md:block"
                  aria-hidden
                />
              </li>
            );
          })}
        </ol>
      </Section>
    </>
  );
}
