import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Testimonial } from "@/components/cards/testimonial";

export const metadata: Metadata = {
  title: "About the Society",
  description:
    "A non-profit professional society of CBT clinicians, researchers, and trainees across Southern California.",
};

const VALUES = [
  {
    title: "Evidence first",
    body: "We center clinical decisions on the best available research, while honoring the wisdom that comes from practice and the realities of each client's life.",
  },
  {
    title: "Generous to colleagues",
    body: "Our consultation groups, mentorship programs, and conferences exist because clinicians grow more in community than in isolation.",
  },
  {
    title: "Useful to the public",
    body: "We make CBT understandable for the people who might benefit from it — without overpromising what therapy can do.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section tone="gradient" size="lg">
        <div className="max-w-3xl">
          <EyebrowLabel>About</EyebrowLabel>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground">
            A professional home for evidence-based clinicians in Southern California.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            Founded in 1994 by a small group of clinicians and academics, the CBT Society of
            Southern California today supports more than 500 members across the region's hospitals,
            universities, and private practices.
          </p>
        </div>
      </Section>

      {/* Letter from the president */}
      <Section tone="default" size="md">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:items-start">
          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                alt="Portrait of Eleanor Vasquez, PhD"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-5 font-serif text-lg text-foreground">Eleanor Vasquez, PhD, ABPP</p>
            <p className="text-sm text-muted-foreground">President · UCLA Department of Psychiatry</p>
          </div>
          <div>
            <EyebrowLabel>A letter from the president</EyebrowLabel>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground">
              The work we do, and why it matters.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85">
              <p>
                When the Society was founded three decades ago, cognitive behavioral therapy was
                still an emerging tradition in much of Southern California. A handful of clinicians
                committed to building something durable — a place where rigorous practice could be
                refined, taught, and made accessible.
              </p>
              <p>
                Today our members work in academic medical centers, community clinics, the VA
                system, and private practices from Ventura to San Diego. They share a commitment to
                careful assessment, structured interventions, and ongoing measurement of what works.
              </p>
              <p>
                If you are a clinician considering membership, a trainee looking for community, or a
                member of the public trying to understand what CBT can offer — you're welcome here.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/membership/apply">
                Join the Society <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section tone="muted" size="md">
        <div className="max-w-2xl">
          <EyebrowLabel>Our values</EyebrowLabel>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground">
            What guides our work.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border-l-4 border-secondary bg-card p-7 shadow-sm"
            >
              <h3 className="font-serif text-xl text-foreground">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <Section tone="default" size="md">
        <div className="mx-auto max-w-3xl">
          <Testimonial
            quote="The Society's consultation groups have shaped how I practice more than any single training I've taken. Real cases, careful peers, sustained over years."
            author="Marcus Reyes, PsyD"
            role="Society member since 2014"
            avatar="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=200&q=80"
          />
        </div>
      </Section>

      {/* Quick links */}
      <Section tone="cta" size="md">
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            { href: "/about/mission", label: "Our mission", desc: "Vision, values, purpose" },
            { href: "/about/board", label: "Board of directors", desc: "Meet our leadership" },
            { href: "/about/history", label: "History", desc: "Three decades of practice" },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="font-serif text-lg text-foreground group-hover:text-primary">
                {c.label}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-secondary">
                Read more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
