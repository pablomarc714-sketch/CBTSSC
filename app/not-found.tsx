import Link from "next/link";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section tone="gradient" size="lg">
      <div className="mx-auto max-w-xl text-center">
        <EyebrowLabel>404</EyebrowLabel>
        <h1 className="mt-4 font-serif text-5xl text-foreground">Page not found.</h1>
        <p className="mt-4 text-base text-muted-foreground">
          The page you're looking for has been moved or no longer exists.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </Section>
  );
}
