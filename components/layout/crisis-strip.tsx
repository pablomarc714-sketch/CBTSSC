"use client";

import * as React from "react";
import { LifeBuoy, Phone, MessageSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function CrisisStrip() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="fixed bottom-4 right-4 z-30 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2.5 text-sm font-medium shadow-lg hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          aria-label="Open crisis resources"
        >
          <LifeBuoy className="h-4 w-4 text-secondary-light" aria-hidden />
          <span>In crisis? Get help now</span>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>If you or someone you know is in crisis</DialogTitle>
          <DialogDescription>
            Free, confidential support is available 24/7. If there is immediate danger to life, call
            911.
          </DialogDescription>
        </DialogHeader>
        <ul className="mt-2 space-y-3">
          <ResourceRow
            icon={<Phone className="h-4 w-4" />}
            title="988 Suicide & Crisis Lifeline"
            detail="Call or text 988"
            href="tel:988"
          />
          <ResourceRow
            icon={<MessageSquare className="h-4 w-4" />}
            title="Crisis Text Line"
            detail="Text HOME to 741741"
            href="sms:741741?&body=HOME"
          />
          <ResourceRow
            icon={<Phone className="h-4 w-4" />}
            title="LA County DMH Help Line"
            detail="(800) 854-7771 — local Southern California support"
            href="tel:8008547771"
          />
          <ResourceRow
            icon={<Phone className="h-4 w-4" />}
            title="Veterans Crisis Line"
            detail="Dial 988, then press 1"
            href="tel:988"
          />
        </ul>
        <p className="mt-2 text-xs text-muted-foreground">
          The CBTSSC is not an emergency or treatment service. These resources are independent of
          our organization.
        </p>
      </DialogContent>
    </Dialog>
  );
}

function ResourceRow({
  icon,
  title,
  detail,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center gap-3 rounded-xl border border-border bg-card p-3.5 hover:border-secondary/60 hover:bg-accent/40 transition-colors"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-secondary shrink-0">
          {icon}
        </span>
        <span>
          <span className="block text-sm font-medium text-foreground">{title}</span>
          <span className="block text-xs text-muted-foreground">{detail}</span>
        </span>
      </a>
    </li>
  );
}
