import type { Metadata } from "next";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { BoardMemberCard } from "@/components/cards/board-member-card";
import { BOARD } from "@/seed/board";

export const metadata: Metadata = {
  title: "Board of directors",
  description: "Meet the clinicians and academics who lead the CBT Society of Southern California.",
};

export default function BoardPage() {
  return (
    <>
      <Section tone="gradient" size="lg">
        <div className="max-w-3xl">
          <EyebrowLabel>Leadership</EyebrowLabel>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
            Our board of directors.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Our board is composed of working clinicians and academic researchers from across
            Southern California. Members serve three-year terms and are elected by the Society's
            full membership.
          </p>
        </div>
      </Section>

      <Section tone="default" size="md">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {BOARD.map((m) => (
            <BoardMemberCard key={m.name} member={m} />
          ))}
        </div>
      </Section>

      <Section tone="muted" size="sm">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground">
            Committee membership is open to all members.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The Society operates standing committees in education, public outreach, research,
            membership, and student affairs. Members in good standing are warmly invited to
            participate.
          </p>
        </div>
      </Section>
    </>
  );
}
