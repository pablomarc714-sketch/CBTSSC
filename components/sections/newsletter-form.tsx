"use client";

import * as React from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = { variant?: "light" | "dark" };

export function NewsletterForm({ variant = "light" }: Props) {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [email, setEmail] = React.useState("");
  const isDark = variant === "dark";

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <form onSubmit={onSubmit} className="w-full" noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div
        className={cn(
          "flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-0 sm:rounded-full sm:p-1.5",
          isDark
            ? "sm:bg-primary-foreground/10 sm:border sm:border-primary-foreground/20"
            : "sm:bg-card sm:border sm:border-input sm:shadow-sm"
        )}
      >
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="you@example.com"
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? "newsletter-error" : undefined}
          className={cn(
            "flex-1 rounded-full px-4 py-2.5 text-sm focus-visible:outline-none",
            isDark
              ? "bg-transparent text-primary-foreground placeholder:text-primary-foreground/55"
              : "bg-card text-foreground placeholder:text-muted-foreground/70"
          )}
        />
        <button
          type="submit"
          className={cn(
            "inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
            isDark
              ? "bg-secondary-light text-foreground hover:bg-secondary-light/90"
              : "bg-primary text-primary-foreground hover:bg-primary-light"
          )}
        >
          {status === "success" ? (
            <>
              <Check className="h-4 w-4" /> Subscribed
            </>
          ) : (
            <>
              Subscribe <ArrowRight className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      </div>
      {status === "error" ? (
        <p
          id="newsletter-error"
          role="alert"
          aria-live="polite"
          className={cn(
            "mt-2 text-xs",
            isDark ? "text-secondary-light" : "text-destructive"
          )}
        >
          Please enter a valid email address.
        </p>
      ) : null}
      <p
        className={cn(
          "mt-2.5 text-xs",
          isDark ? "text-primary-foreground/55" : "text-muted-foreground"
        )}
      >
        We send a few thoughtful updates a year. Unsubscribe anytime.
      </p>
    </form>
  );
}
