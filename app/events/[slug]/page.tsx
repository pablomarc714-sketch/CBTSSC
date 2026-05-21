import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Calendar, MapPin, Clock, ArrowLeft } from "lucide-react";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EVENTS, getEventBySlug } from "@/seed/events";
import { formatDate, SITE } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event not found" };
  return {
    title: event.title,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: [event.image],
    },
  };
}

export default async function EventDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    startDate: event.date,
    endDate: event.endDate ?? event.date,
    eventAttendanceMode:
      event.format === "Virtual"
        ? "https://schema.org/OnlineEventAttendanceMode"
        : event.format === "Hybrid"
          ? "https://schema.org/MixedEventAttendanceMode"
          : "https://schema.org/OfflineEventAttendanceMode",
    location: { "@type": "Place", name: event.location, address: event.location },
    organizer: { "@type": "Organization", name: SITE.name, url: SITE.url },
    image: event.image,
  };

  return (
    <>
      <article>
        <div className="relative h-72 w-full overflow-hidden sm:h-96">
          <Image
            src={event.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-10 lg:px-8">
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 text-sm text-background/90 hover:text-background"
            >
              <ArrowLeft className="h-4 w-4" /> All events
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{event.category}</Badge>
              <Badge variant="outline" className="bg-background/15 text-background border-background/30">
                {event.format}
              </Badge>
              {event.ceHours ? (
                <Badge variant="outline" className="bg-background/15 text-background border-background/30">
                  {event.ceHours} CE
                </Badge>
              ) : null}
            </div>
            <h1 className="mt-3 max-w-3xl font-serif text-3xl text-background sm:text-4xl lg:text-5xl">
              {event.title}
            </h1>
          </div>
        </div>

        <Section tone="default" size="md">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
            <div>
              <EyebrowLabel>About the event</EyebrowLabel>
              <p className="mt-4 text-lg leading-relaxed text-foreground/85">{event.description}</p>
              {event.longDescription ? (
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {event.longDescription}
                </p>
              ) : null}

              {event.speakers?.length ? (
                <>
                  <h2 className="mt-12 font-serif text-2xl text-foreground">Speakers</h2>
                  <ul className="mt-5 space-y-4">
                    {event.speakers.map((s) => (
                      <li key={s.name} className="rounded-2xl border border-border bg-card p-5">
                        <p className="font-serif text-lg text-foreground">
                          {s.name}, {s.credentials}
                        </p>
                        <p className="text-sm text-muted-foreground">{s.affiliation}</p>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>

            <aside className="self-start lg:sticky lg:top-28">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="font-serif text-xl text-foreground">Event details</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-start gap-2.5">
                    <Calendar className="h-4 w-4 mt-0.5 text-secondary" />
                    <span>
                      {formatDate(event.date)}
                      {event.endDate ? ` – ${formatDate(event.endDate)}` : ""}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Clock className="h-4 w-4 mt-0.5 text-secondary" />
                    <span>
                      {new Date(event.date).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        timeZoneName: "short",
                      })}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin className="h-4 w-4 mt-0.5 text-secondary" />
                    <span>{event.location}</span>
                  </li>
                </ul>
                {event.registrationUrl ? (
                  <Button asChild className="mt-6 w-full">
                    <a href={event.registrationUrl}>Register now</a>
                  </Button>
                ) : null}
                {event.ceHours ? (
                  <p className="mt-4 text-xs text-muted-foreground">
                    {event.ceHours} CE credit hours available for psychologists, social workers, and
                    MFTs licensed in California.
                  </p>
                ) : null}
              </div>
            </aside>
          </div>
        </Section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
