import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "article";
  bleed?: boolean;
  tone?: "default" | "muted" | "accent" | "dark" | "gradient" | "cta";
  size?: "sm" | "md" | "lg";
};

const toneClass: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-background",
  muted: "bg-muted",
  accent: "bg-accent",
  dark: "bg-primary text-primary-foreground",
  gradient: "hero-gradient",
  cta: "cta-gradient",
};

const sizeClass: Record<NonNullable<SectionProps["size"]>, string> = {
  sm: "py-16 md:py-20",
  md: "py-20 md:py-24",
  lg: "py-24 md:py-32",
};

export function Section({
  as: Tag = "section",
  bleed = false,
  tone = "default",
  size = "md",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag className={cn(toneClass[tone], sizeClass[size], className)} {...props}>
      {bleed ? (
        children
      ) : (
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">{children}</div>
      )}
    </Tag>
  );
}

export function EyebrowLabel({
  children,
  className,
  tone = "secondary",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "secondary" | "muted";
}) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold uppercase tracking-[0.18em]",
        tone === "secondary" ? "text-secondary" : "text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
