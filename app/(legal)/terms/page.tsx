import type { Metadata } from "next";
import { Section, EyebrowLabel } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms of use for the CBT Society of Southern California website.",
};

export default function TermsPage() {
  return (
    <Section tone="default" size="md">
      <div className="mx-auto max-w-3xl">
        <EyebrowLabel>Legal</EyebrowLabel>
        <h1 className="mt-4 font-serif text-4xl text-foreground">Terms of use</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: April 2026</p>

        <div className="prose prose-lg mt-10">
          <p>
            By accessing the CBT Society of Southern California website, you agree to the terms
            below.
          </p>

          <h2>Educational use only</h2>
          <p>
            All content on this site is for educational and informational purposes. It is not a
            substitute for professional medical advice, diagnosis, or treatment. Always seek the
            advice of a qualified mental health provider with any questions you may have regarding a
            medical or psychological condition.
          </p>

          <h2>Therapist directory</h2>
          <p>
            Listing in our directory indicates Society membership and self-reported areas of
            practice. It does not constitute a referral endorsement or a guarantee of fit. We
            encourage members of the public to interview a few clinicians before deciding.
          </p>

          <h2>Membership</h2>
          <p>
            Membership in the Society is granted at the discretion of the membership committee.
            Annual dues are non-refundable. Members agree to abide by the Society's standards of
            professional conduct.
          </p>

          <h2>Intellectual property</h2>
          <p>
            All content is the property of the Society or its contributors and may not be
            reproduced without permission, except where excerpted for non-commercial educational use
            with attribution.
          </p>

          <p className="text-sm text-muted-foreground">
            <em>
              This page is provided for site scaffolding. Production terms should be drafted with
              appropriate legal review.
            </em>
          </p>
        </div>
      </div>
    </Section>
  );
}
