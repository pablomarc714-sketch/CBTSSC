import type { Metadata } from "next";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { DisclaimerBanner } from "@/components/cards/disclaimer-banner";
import { DirectorySearch } from "./directory-search";

export const metadata: Metadata = {
  title: "Find a CBT therapist",
  description:
    "Search our directory of Southern California cognitive behavioral therapy clinicians by location, specialty, and insurance.",
};

export default function FindTherapistPage() {
  return (
    <>
      <Section tone="gradient" size="md">
        <div className="max-w-3xl">
          <EyebrowLabel>Public directory</EyebrowLabel>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
            Find a CBT therapist in Southern California.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-foreground/80">
            Search by region, clinical specialty, insurance, and telehealth availability. All
            listed clinicians are members of the CBT Society of Southern California.
          </p>
        </div>
      </Section>

      <Section tone="default" size="md">
        <DisclaimerBanner className="mb-10">
          <strong className="font-medium">A note on this directory.</strong> Listing in our
          directory indicates Society membership and self-reported areas of practice. It is not a
          referral endorsement or a guarantee of fit. We encourage you to interview a few clinicians
          before deciding. If you are in crisis, please use the resources at the bottom of the page.
        </DisclaimerBanner>
        <DirectorySearch />
      </Section>
    </>
  );
}
