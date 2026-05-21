"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, SITE } from "@/lib/utils";
import { PRIMARY_NAV } from "./nav-config";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "bg-background/85 backdrop-blur-lg border-b border-border/60 shadow-sm"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:h-20 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE.shortName} home`}>
            <Logo />
            <span className="hidden font-serif text-base font-medium tracking-tight text-foreground sm:inline">
              {SITE.shortName}
            </span>
          </Link>

          <nav className="hidden lg:flex" aria-label="Primary">
            <ul className="flex items-center gap-1">
              {PRIMARY_NAV.map((item) => (
                <li key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-foreground/85 hover:text-foreground hover:bg-muted/60 transition-colors"
                  >
                    {item.label}
                    {item.children ? (
                      <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                    ) : null}
                  </Link>
                  {item.children ? (
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100 absolute left-0 top-full pt-2 transition-all duration-150 z-50">
                      <div className="min-w-[260px] rounded-2xl border border-border bg-card p-2 shadow-lg">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block rounded-xl px-3 py-2.5 hover:bg-muted/70"
                          >
                            <div className="text-sm font-medium text-foreground">{c.label}</div>
                            {c.description ? (
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {c.description}
                              </div>
                            ) : null}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/login"
              className="text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              Member login
            </Link>
            <Button asChild size="sm">
              <Link href="/membership/apply">Join the Society</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted"
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>
      <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
    </>
  );
}

function Logo() {
  return (
    <span
      className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm"
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3c-3 4-5 6.5-5 10a5 5 0 0 0 10 0c0-3.5-2-6-5-10Z"
          fill="currentColor"
          opacity="0.85"
        />
        <circle cx="12" cy="14" r="2" fill="#52B788" />
      </svg>
    </span>
  );
}
