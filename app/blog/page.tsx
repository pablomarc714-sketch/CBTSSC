"use client";

import * as React from "react";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { ArticleCard } from "@/components/cards/article-card";
import { getRecentArticles } from "@/seed/articles";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Practice", "Research", "Public Education", "Society News"] as const;
type Cat = (typeof CATEGORIES)[number];

export default function BlogPage() {
  const [cat, setCat] = React.useState<Cat>("All");
  const all = React.useMemo(() => getRecentArticles(), []);
  const filtered = cat === "All" ? all : all.filter((a) => a.category === cat);

  return (
    <>
      <Section tone="gradient" size="md">
        <div className="max-w-3xl">
          <EyebrowLabel>Insights</EyebrowLabel>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
            Practice notes, research summaries, and plain-language education.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-foreground/80">
            Articles by Society members and invited contributors. Most pieces take 5–10 minutes to
            read.
          </p>
        </div>
      </Section>

      <Section tone="default" size="md">
        <div role="tablist" aria-label="Filter posts by category" className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((c) => {
            const active = c === cat;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={active}
                onClick={() => setCat(c)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm transition-colors",
                  active
                    ? "border-secondary bg-secondary text-secondary-foreground"
                    : "border-border bg-card text-foreground hover:border-secondary/40 hover:bg-accent/40"
                )}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8" aria-live="polite">
          {filtered.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </Section>
    </>
  );
}
