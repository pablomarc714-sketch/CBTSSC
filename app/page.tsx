import Link from "next/link";
import { ArrowRight, GraduationCap, Users, BookOpen } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { TrustStrip } from "@/components/sections/trust-strip";
import { StatGrid } from "@/components/sections/stat-block";
import { EventCard } from "@/components/cards/event-card";
import { ArticleCard } from "@/components/cards/article-card";
import { NewsletterForm } from "@/components/sections/newsletter-form";
import { Button } from "@/components/ui/button";
import { getUpcomingEvents } from "@/seed/events";
import { getRecentArticles } from "@/seed/articles";

const PILLARS = [
  {
    icon: GraduationCap,
    title: "Education",
    body: "Continuing education workshops, conferences, and supervised consultation groups for clinicians at every career stage.",
  },
  {
    icon: Users,
    title: "Community",
    body: "A connected network of CBT clinicians, researchers, and trainees from across Southern California's hospitals and universities.",
  },
  {
    icon: BookOpen,
    title: "Public resources",
    body: "Plain-language education on CBT, a member therapist directory, and trusted referral information for the public.",
  },
];

const STATS = [
  { value: 500, suffix: "+", label: "Members", description: "Clinicians, researchers, and students across SoCal." },
  { value: 30, suffix: "+", label: "Years", description: "Of supporting evidence-based practice." },
  { value: 12, label: "Events / year", description: "Workshops, conferences, and consultation groups." },
];

export default function HomePage() {
  const events = getUpcomingEvents(3);
  const articles = getRecentArticles(3);

  return (
    <>
      <Hero />

      <Section tone="default" size="sm">
        <TrustStrip />
      </Section>

      {/* Three pillars */}
      <Section tone="muted" size="md">
        <div className="max-w-2xl">
          <EyebrowLabel>What we do</EyebrowLabel>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground">
            Three commitments at the heart of the Society.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our work is grounded in the conviction that high-quality, evidence-based mental health
            care should be accessible — and that requires investing in the clinicians who provide it.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-secondary">
                <p.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-serif text-xl text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section tone="default" size="md">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-16">
          <div>
            <EyebrowLabel>The Society in numbers</EyebrowLabel>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground">
              A community three decades in the making.
            </h2>
          </div>
          <StatGrid stats={STATS} />
        </div>
      </Section>

      {/* Upcoming events */}
      <Section tone="accent" size="md">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <EyebrowLabel>Upcoming</EyebrowLabel>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground">
              Events and training
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              Workshops and conferences offering CE credit for psychologists, social workers, and
              marriage and family therapists.
            </p>
          </div>
          <Button asChild variant="ghost" className="self-start sm:self-auto">
            <Link href="/events">
              See all events <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      </Section>

      {/* Latest articles */}
      <Section tone="default" size="md">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <EyebrowLabel>Insights</EyebrowLabel>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground">
              From the Society blog
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              Practice notes, research summaries, and plain-language education on CBT.
            </p>
          </div>
          <Button asChild variant="ghost" className="self-start sm:self-auto">
            <Link href="/blog">
              Read more <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </Section>

      {/* Membership CTA */}
      <Section tone="cta" size="md">
        <div className="mx-auto max-w-3xl text-center">
          <EyebrowLabel>Join us</EyebrowLabel>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground">
            A professional home for evidence-based clinicians.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/80">
            Members receive discounted CE, listing in our public directory, access to monthly peer
            consultation groups, and a quarterly journal.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/membership/apply">Apply for membership</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/membership/benefits">See member benefits</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Newsletter */}
      <Section tone="default" size="sm">
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <EyebrowLabel>Stay in touch</EyebrowLabel>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-foreground">
              A quarterly note from the Society.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              New training opportunities, research highlights, and Society news — nothing else.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </Section>
    </>
  );
}
