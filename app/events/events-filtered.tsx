"use client";

import * as React from "react";
import { EventCard } from "@/components/cards/event-card";
import { EVENTS } from "@/seed/events";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Conference", "Workshop", "Webinar", "Consultation Group"] as const;
type Cat = (typeof CATEGORIES)[number];

export function EventsFiltered() {
  const [cat, setCat] = React.useState<Cat>("All");

  const sorted = React.useMemo(
    () =>
      [...EVENTS].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    []
  );
  const filtered = cat === "All" ? sorted : sorted.filter((e) => e.category === cat);

  return (
    <>
      <div
        role="tablist"
        aria-label="Filter events by category"
        className="flex flex-wrap items-center gap-2 border-b border-border pb-4"
      >
        {CATEGORIES.map((c) => {
          const active = cat === c;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={active}
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                active
                  ? "border-secondary bg-secondary text-secondary-foreground"
                  : "border-border bg-card text-foreground hover:border-secondary/40 hover:bg-accent/40"
              )}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {filtered.map((e) => (
          <EventCard key={e.slug} event={e} />
        ))}
      </div>
    </>
  );
}
