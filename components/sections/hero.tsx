import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EyebrowLabel } from "@/components/layout/section";

export function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-secondary-light/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-primary-light/15 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pt-20 pb-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:pt-28 lg:pb-32">
        <div>
          <EyebrowLabel>Southern California · since 1994</EyebrowLabel>
          <h1 className="mt-5 font-serif text-[2.6rem] leading-[1.05] text-foreground sm:text-5xl lg:text-[3.6rem]">
            Advancing evidence-based{" "}
            <span className="text-primary">mental health care</span> across Southern California.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
            We are a professional society of clinicians, researchers, and students dedicated to
            advancing cognitive behavioral therapy through training, community, and public
            education.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/membership/apply">
                Become a member <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/resources/find-a-therapist">Find a CBT therapist</Link>
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            500+ clinician members · 12+ events a year · 30 years of practice
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1200&q=80"
              alt="Two clinicians in conversation in a sunlit office"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -left-6 bottom-8 hidden max-w-xs rounded-2xl border border-border bg-card/95 p-5 shadow-lg backdrop-blur sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
              Next event
            </p>
            <p className="mt-1.5 font-serif text-base leading-snug text-foreground">
              Foundations of Exposure Therapy
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Jun 14 · USC Health Sciences Campus · 6 CE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
