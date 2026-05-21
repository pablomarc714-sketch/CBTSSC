"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRIMARY_NAV } from "./nav-config";
import { SITE } from "@/lib/utils";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function MobileNav({ open, onOpenChange }: Props) {
  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-foreground/40 lg:hidden"
            onClick={() => onOpenChange(false)}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm bg-card shadow-xl lg:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <span className="font-serif text-lg">{SITE.shortName}</span>
              <button
                onClick={() => onOpenChange(false)}
                className="rounded-full p-2 hover:bg-muted"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile primary">
              <ul className="space-y-1">
                {PRIMARY_NAV.map((item, idx) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx + 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => onOpenChange(false)}
                      className="block rounded-xl px-3 py-3 text-base font-medium hover:bg-muted"
                    >
                      {item.label}
                    </Link>
                    {item.children ? (
                      <ul className="ml-3 mt-0.5 mb-1 border-l border-border/70 pl-3 space-y-0.5">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              onClick={() => onOpenChange(false)}
                              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="border-t px-6 py-5 space-y-3">
              <Button asChild variant="primary" className="w-full">
                <Link href="/membership/apply" onClick={() => onOpenChange(false)}>
                  Join the Society
                </Link>
              </Button>
              <Link
                href="/login"
                onClick={() => onOpenChange(false)}
                className="block text-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Member login
              </Link>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
