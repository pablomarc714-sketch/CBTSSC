import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { ContactForm } from "./contact-form";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with the CBT Society of Southern California — for membership questions, media inquiries, or feedback on our programs.",
};

export default function ContactPage() {
  return (
    <>
      <Section tone="gradient" size="md">
        <div className="max-w-3xl">
          <EyebrowLabel>Contact</EyebrowLabel>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
            We would love to hear from you.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-foreground/80">
            Questions about membership, event registration, our therapist directory, or
            partnerships — send us a note and we'll respond within two business days.
          </p>
        </div>
      </Section>

      <Section tone="default" size="md">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-2xl text-foreground">Send a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              For clinical emergencies, please use the crisis resources at the bottom of the page.
              This form is not monitored for emergencies.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-serif text-lg text-foreground">Office</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 mt-0.5 text-secondary" />
                  <span>
                    {SITE.address.street}
                    <br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-secondary" />
                  <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-secondary" />
                  <a href={`tel:${SITE.phone}`} className="hover:text-primary">
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="h-4 w-4 mt-0.5 text-secondary" />
                  <span>Mon–Fri, 9 am – 5 pm Pacific</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <iframe
                title="Map of the CBTSSC office in downtown Los Angeles"
                src="https://www.google.com/maps?q=1100+Wilshire+Boulevard+Los+Angeles&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full"
              />
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
