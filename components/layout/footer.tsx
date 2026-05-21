import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/utils";
import { NewsletterForm } from "@/components/sections/newsletter-form";

const COLUMNS = [
  {
    title: "About",
    items: [
      { label: "Our mission", href: "/about/mission" },
      { label: "Board of directors", href: "/about/board" },
      { label: "History", href: "/about/history" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Find a therapist", href: "/resources/find-a-therapist" },
      { label: "For clinicians", href: "/resources/for-clinicians" },
      { label: "For the public", href: "/resources/for-the-public" },
      { label: "Research", href: "/research" },
    ],
  },
  {
    title: "Membership",
    items: [
      { label: "Overview", href: "/membership" },
      { label: "Benefits", href: "/membership/benefits" },
      { label: "Apply", href: "/membership/apply" },
      { label: "Events", href: "/events" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
          <div>
            <Link href="/" className="font-serif text-2xl tracking-tight">
              {SITE.shortName}
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              {SITE.description}
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-primary-foreground/80">
              <p className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary-light" />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-secondary-light" />
                <a href={`mailto:${SITE.email}`} className="hover:text-primary-foreground">
                  {SITE.email}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-secondary-light" />
                <a href={`tel:${SITE.phone}`} className="hover:text-primary-foreground">
                  {SITE.phone}
                </a>
              </p>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-secondary-light">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {col.items.map((it) => (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-primary-foreground/15 pt-10 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-secondary-light">
              Newsletter
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/75">
              Quarterly updates on training, events, and the latest in evidence-based practice.
            </p>
          </div>
          <NewsletterForm variant="dark" />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. A 501(c)(3) non-profit.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-primary-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary-foreground">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-primary-foreground">
              Contact
            </Link>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-xs text-primary-foreground/55">
          The {SITE.shortName} website provides educational information and is not a substitute for
          professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified
          mental health provider.
        </p>
      </div>
    </footer>
  );
}
