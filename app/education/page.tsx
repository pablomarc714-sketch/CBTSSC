import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/cards/event-card";
import { getUpcomingEvents } from "@/seed/events";

export const metadata: Metadata = {
  title: "Continuing education",
  description: "CE workshops, webinars, and our annual fall conference for licensed clinicians.",
};

export default function EducationPage() {
  const upcoming = getUpcomingEvents(3);

  return (
    <>
      <Section tone="gradient" size="md">
        <div className="max-w-3xl">
          <EyebrowLabel>Continuing education</EyebrowLabel>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
            Rigorous training, designed by working clinicians.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-foreground/80">
            Our continuing education programming offers APA-approved CE credit for psychologists
            and qualifies for CE credit through BBS for LCSWs, MFTs, and LPCCs in California.
          </p>
        </div>
      </Section>

      <Section tone="default" size="md">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <EyebrowLabel>Program tracks</EyebrowLabel>
            <h2 className="mt-3 font-serif text-3xl text-foreground">
              Three ways we deliver training.
            </h2>
          </div>
          <dl className="grid gap-5 sm:grid-cols-3">
            {[
              ["Workshops", "Single- or multi-day intensives on specific protocols (ERP, CBT-I, CPT, and more)."],
              ["Webinars", "Hour-long lunchtime sessions on emerging topics in clinical CBT."],
              ["Conferences", "Our flagship fall conference at UCLA plus a spring research symposium."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <dt className="font-serif text-lg text-foreground">{title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="muted" size="md">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <EyebrowLabel>Upcoming</EyebrowLabel>
            <h2 className="mt-3 font-serif text-3xl text-foreground">Next on the calendar</h2>
          </div>
          <Button asChild variant="ghost">
            <Link href="/events">
              See all events <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      </Section>

      <Section tone="default" size="sm">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-sm">
          <h2 className="font-serif text-2xl text-foreground">CE accreditation</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            The CBT Society of Southern California is approved by the American Psychological
            Association to sponsor continuing education for psychologists. The Society maintains
            responsibility for this program and its content. Programs are also approved by the
            California Board of Behavioral Sciences (provider #PCE-XXXX).
          </p>
        </div>
      </Section>
    </>
  );
}
