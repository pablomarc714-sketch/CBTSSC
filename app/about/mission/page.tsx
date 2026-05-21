import type { Metadata } from "next";
import { Section, EyebrowLabel } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Mission & values",
  description: "The mission, vision, and core values of the CBT Society of Southern California.",
};

export default function MissionPage() {
  return (
    <>
      <Section tone="gradient" size="lg">
        <div className="max-w-3xl">
          <EyebrowLabel>Mission</EyebrowLabel>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
            We advance evidence-based mental health care in Southern California.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Through training, community, and public education, we support the clinicians who provide
            cognitive behavioral therapy across our region — and we make CBT understandable for the
            public.
          </p>
        </div>
      </Section>

      <Section tone="default" size="md">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          <div>
            <EyebrowLabel>Vision</EyebrowLabel>
            <h2 className="mt-3 font-serif text-3xl text-foreground">
              A region where high-quality CBT is the standard of care.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Anyone in Southern California seeking psychotherapy should be able to find a
              well-trained CBT clinician — regardless of where they live, what insurance they hold,
              or what language they speak.
            </p>
          </div>
          <div>
            <EyebrowLabel>Purpose</EyebrowLabel>
            <h2 className="mt-3 font-serif text-3xl text-foreground">
              We strengthen the workforce that delivers it.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Through continuing education, peer consultation, and a public-facing directory, we
              support our members in delivering thoughtful, measurement-based care.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted" size="md">
        <div className="max-w-3xl mx-auto text-center">
          <EyebrowLabel>Core values</EyebrowLabel>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground">
            Five commitments that shape the Society.
          </h2>
        </div>
        <ol className="mx-auto mt-12 max-w-3xl space-y-6">
          {[
            ["01", "Evidence-based practice", "We center clinical decisions on the best available research and the realities of each client's life."],
            ["02", "Cultural humility", "Effective therapy adapts. We support clinicians in delivering culturally responsive care."],
            ["03", "Accessible expertise", "We make training affordable and our public-facing materials clear and useful."],
            ["04", "Mentorship across career stages", "Students, early-career clinicians, and senior practitioners all belong here."],
            ["05", "Honesty about limits", "CBT is one effective approach among several. We are clear about what it can and cannot do."],
          ].map(([num, title, body]) => (
            <li key={num} className="flex gap-6 rounded-2xl bg-card p-6 shadow-sm border border-border">
              <span className="font-serif text-3xl text-secondary leading-none mt-1 shrink-0">
                {num}
              </span>
              <div>
                <h3 className="font-serif text-xl text-foreground">{title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
