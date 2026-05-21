import type { Metadata } from "next";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { ApplyForm } from "./apply-form";

export const metadata: Metadata = {
  title: "Apply to join",
  description:
    "Apply for membership in the CBT Society of Southern California. The application takes about ten minutes.",
};

export default function ApplyPage() {
  return (
    <>
      <Section tone="gradient" size="md">
        <div className="max-w-3xl">
          <EyebrowLabel>Apply for membership</EyebrowLabel>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
            Join the Society.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-foreground/80">
            The application takes about ten minutes. We will follow up within five business days to
            confirm your membership and (for professional applicants) verify your license status.
          </p>
        </div>
      </Section>

      <Section tone="default" size="md">
        <div className="mx-auto max-w-3xl">
          <ApplyForm />
        </div>
      </Section>
    </>
  );
}
