import type { Metadata } from "next";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { EventsFiltered } from "./events-filtered";

export const metadata: Metadata = {
  title: "Events & training",
  description:
    "Workshops, conferences, webinars, and peer consultation groups from the CBT Society of Southern California.",
};

export default function EventsPage() {
  return (
    <>
      <Section tone="gradient" size="md">
        <div className="max-w-3xl">
          <EyebrowLabel>Events</EyebrowLabel>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
            Training and community across the year.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-foreground/80">
            Continuing education workshops, an annual fall conference, monthly peer consultation
            groups, and free public webinars — across SoCal and online.
          </p>
        </div>
      </Section>

      <Section tone="default" size="md">
        <EventsFiltered />
      </Section>
    </>
  );
}
