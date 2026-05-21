import type { Metadata } from "next";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { EventCard } from "@/components/cards/event-card";
import { EVENTS } from "@/seed/events";

export const metadata: Metadata = {
  title: "Workshops",
  description: "Single- and multi-day clinical workshops produced by the Society.",
};

export default function WorkshopsPage() {
  const workshops = EVENTS.filter((e) => e.category === "Workshop");

  return (
    <>
      <Section tone="gradient" size="md">
        <div className="max-w-3xl">
          <EyebrowLabel>Workshops</EyebrowLabel>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
            Hands-on clinical training.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-foreground/80">
            Workshops include lecture, demonstration, and small-group role play. Most offer 6–20
            hours of CE credit.
          </p>
        </div>
      </Section>

      <Section tone="default" size="md">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      </Section>
    </>
  );
}
