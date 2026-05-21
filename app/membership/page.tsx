import Link from "next/link";
import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Three membership tiers for CBT clinicians, students, and allied professionals across Southern California.",
};

const TIERS = [
  {
    name: "Professional",
    price: 195,
    cadence: "/year",
    description: "For licensed clinicians delivering CBT in any setting.",
    highlights: [
      "Discounted CE workshops and conferences",
      "Listing in the public therapist directory",
      "Access to monthly peer consultation groups",
      "Quarterly Society journal",
      "Member voting and committee participation",
    ],
    featured: true,
    cta: "Apply as Professional",
  },
  {
    name: "Student",
    price: 45,
    cadence: "/year",
    description: "For doctoral students, interns, and supervised trainees.",
    highlights: [
      "Discounted CE and student rates at conferences",
      "Annual research symposium participation",
      "Mentorship program matching",
      "Quarterly Society journal",
    ],
    cta: "Apply as Student",
  },
  {
    name: "Affiliate",
    price: 95,
    cadence: "/year",
    description: "For researchers and allied professionals supporting CBT in SoCal.",
    highlights: [
      "Conference and workshop access",
      "Quarterly Society journal",
      "Network of CBT clinicians and academics",
      "Standing committee participation",
    ],
    cta: "Apply as Affiliate",
  },
];

export default function MembershipPage() {
  return (
    <>
      <Section tone="gradient" size="lg">
        <div className="max-w-3xl">
          <EyebrowLabel>Membership</EyebrowLabel>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground">
            A professional home for evidence-based clinicians.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            Membership in the Society connects you to peers across Southern California's hospitals,
            universities, and private practices — and to a calendar of training that sustains your
            growth as a clinician.
          </p>
        </div>
      </Section>

      <Section tone="default" size="md">
        <div className="grid gap-6 md:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={cn(
                "relative flex flex-col rounded-3xl border bg-card p-8 transition-all duration-300",
                t.featured
                  ? "border-secondary/40 shadow-lg lg:scale-[1.03]"
                  : "border-border hover:shadow-md"
              )}
            >
              {t.featured ? (
                <span className="absolute -top-3 left-8 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-secondary-foreground shadow-sm">
                  Most members
                </span>
              ) : null}
              <h3 className="font-serif text-2xl text-foreground">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-5xl text-foreground">${t.price}</span>
                <span className="text-sm text-muted-foreground">{t.cadence}</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm flex-1">
                {t.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                    <span className="text-foreground/85">{h}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8"
                variant={t.featured ? "primary" : "outline"}
              >
                <Link href="/membership/apply">{t.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          All membership fees support educational programming, the public directory, and the
          Society's operations. CBTSSC is a registered 501(c)(3) non-profit.
        </p>
      </Section>

      <Section tone="muted" size="md">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:items-start">
          <div>
            <EyebrowLabel>Requirements</EyebrowLabel>
            <h2 className="mt-3 font-serif text-3xl text-foreground">
              Who can become a member.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We welcome applicants whose work supports the practice or study of cognitive
              behavioral therapy in any Southern California setting.
            </p>
          </div>
          <dl className="grid gap-6 sm:grid-cols-2">
            {[
              ["Professional", "An active California license (PsyD, PhD, MD, LCSW, LMFT, LPCC, or equivalent) and current practice of CBT."],
              ["Student", "Enrollment in an accredited graduate or doctoral mental health training program."],
              ["Affiliate", "A research, academic, or allied health role substantively engaged with CBT in SoCal."],
              ["Verification", "We verify license status during application review. Student status is verified through your training program."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl bg-card p-6 border border-border">
                <dt className="font-serif text-lg text-foreground">{title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="cta" size="md">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
            Ready to apply?
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            Our application takes about ten minutes and walks you through credentials, contact
            information, and payment.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/membership/apply">
              Start your application <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
