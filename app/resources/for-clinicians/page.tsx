import Link from "next/link";
import type { Metadata } from "next";
import { FileText, ClipboardList, BookMarked, Download } from "lucide-react";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { DisclaimerBanner } from "@/components/cards/disclaimer-banner";

export const metadata: Metadata = {
  title: "Resources for clinicians",
  description:
    "Assessment measures, session protocols, and patient handouts curated for CBT clinicians.",
};

const TOOLKITS = [
  {
    icon: ClipboardList,
    title: "Assessment measures",
    body: "Public-domain measures (PHQ-9, GAD-7, PCL-5, OCI-R, ISI, and more) with scoring guides and clinical interpretation notes.",
    href: "#",
  },
  {
    icon: FileText,
    title: "Session protocols",
    body: "Brief reference protocols for CBT-I, ERP for OCD, CPT for PTSD, behavioral activation, and panic control therapy.",
    href: "#",
  },
  {
    icon: BookMarked,
    title: "Patient-facing handouts",
    body: "Plain-language psychoeducation materials and homework worksheets you can share with clients.",
    href: "#",
  },
  {
    icon: Download,
    title: "Supervision tools",
    body: "Adherence rating scales, fidelity checklists, and a consultation case-write-up template.",
    href: "#",
  },
];

export default function ForCliniciansPage() {
  return (
    <>
      <Section tone="gradient" size="md">
        <div className="max-w-3xl">
          <EyebrowLabel>For clinicians</EyebrowLabel>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
            Toolkits for evidence-based practice.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-foreground/80">
            Most resources are open to all clinicians. A few member-only protocols are flagged
            below.
          </p>
        </div>
      </Section>

      <Section tone="default" size="md">
        <ul className="grid gap-5 sm:grid-cols-2">
          {TOOLKITS.map((t) => (
            <li
              key={t.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-secondary">
                <t.icon className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="mt-5 font-serif text-xl text-foreground">{t.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">{t.body}</p>
              <Button asChild variant="outline" className="mt-6 self-start">
                <Link href={t.href}>Browse resources</Link>
              </Button>
            </li>
          ))}
        </ul>

        <DisclaimerBanner className="mt-10">
          These tools are educational. They are not a substitute for clinical training, supervision,
          or independent clinical judgment.
        </DisclaimerBanner>
      </Section>
    </>
  );
}
