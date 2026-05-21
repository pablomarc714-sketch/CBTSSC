import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock } from "lucide-react";
import type { Event } from "@/seed/events";
import { formatShortDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function EventCard({ event }: { event: Event }) {
  const { month, day } = formatShortDate(event.date);

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={event.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div
          className="absolute left-4 top-4 flex flex-col items-center rounded-xl bg-card/95 px-3 py-2 shadow-sm"
          aria-hidden
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-secondary">
            {month}
          </span>
          <span className="font-serif text-xl leading-none text-foreground">{day}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="primary">{event.category}</Badge>
          <Badge variant="outline">{event.format}</Badge>
          {event.ceHours ? <Badge variant="muted">{event.ceHours} CE</Badge> : null}
        </div>
        <h3 className="mt-3 font-serif text-xl leading-snug text-foreground group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <p className="mt-2.5 text-sm text-muted-foreground line-clamp-2">{event.description}</p>
        <div className="mt-5 grid gap-1.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-secondary" /> {event.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-secondary" />
            {new Date(event.date).toLocaleString("en-US", {
              weekday: "short",
              hour: "numeric",
              minute: "2-digit",
              timeZoneName: "short",
            })}
          </span>
        </div>
      </div>
    </Link>
  );
}

export function EventDateBadge({ date }: { date: string }) {
  const { month, day } = formatShortDate(date);
  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-card px-3 py-2 shadow-sm">
      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-secondary">
        {month}
      </span>
      <span className="font-serif text-2xl leading-none text-foreground">{day}</span>
      <Calendar className="sr-only" aria-hidden />
    </div>
  );
}
