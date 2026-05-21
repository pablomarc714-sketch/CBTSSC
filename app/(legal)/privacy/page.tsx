import type { Metadata } from "next";
import { Section, EyebrowLabel } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How the CBT Society of Southern California handles your information.",
};

export default function PrivacyPage() {
  return (
    <Section tone="default" size="md">
      <div className="mx-auto max-w-3xl">
        <EyebrowLabel>Legal</EyebrowLabel>
        <h1 className="mt-4 font-serif text-4xl text-foreground">Privacy policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: April 2026</p>

        <div className="prose prose-lg mt-10">
          <p>
            The CBT Society of Southern California (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
            &ldquo;the Society&rdquo;) is committed to protecting your privacy. This page explains
            what information we collect, how we use it, and your choices.
          </p>

          <h2>Information we collect</h2>
          <p>
            We collect information you voluntarily provide when you join the Society, register for
            an event, subscribe to our newsletter, or contact us. This typically includes your name,
            email address, professional credentials, and (for professional members) license
            information.
          </p>

          <h2>How we use information</h2>
          <p>
            We use this information to administer your membership, communicate about events and
            Society news, verify professional eligibility, and maintain our public-facing therapist
            directory.
          </p>

          <h2>Sharing</h2>
          <p>
            We do not sell or rent your personal information. We share information with service
            providers (such as our email platform and payment processor) only as needed to operate
            the Society.
          </p>

          <h2>Your choices</h2>
          <p>
            You may unsubscribe from our newsletter at any time using the link in any message. You
            may request access to, correction of, or deletion of your information by writing to{" "}
            <a href="mailto:hello@cbtssc.org">hello@cbtssc.org</a>.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy may be directed to{" "}
            <a href="mailto:hello@cbtssc.org">hello@cbtssc.org</a>.
          </p>

          <p className="text-sm text-muted-foreground">
            <em>
              This page is provided for site scaffolding. A production privacy policy should be
              drafted with appropriate legal review.
            </em>
          </p>
        </div>
      </div>
    </Section>
  );
}
