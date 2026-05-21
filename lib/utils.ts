import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string, opts?: Intl.DateTimeFormatOptions) {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    ...opts,
  }).format(d);
}

export function formatShortDate(date: Date | string) {
  const d = typeof date === "string" ? new Date(date) : date;
  return {
    month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    day: d.getDate().toString(),
  };
}

export const SITE = {
  name: "CBT Society of Southern California",
  shortName: "CBTSSC",
  url: "https://cbtssc.org",
  description:
    "A non-profit professional society advancing evidence-based cognitive behavioral therapy across Southern California through education, community, and public resources.",
  email: "hello@cbtssc.org",
  phone: "(213) 555-0142",
  address: {
    street: "1100 Wilshire Boulevard, Suite 700",
    city: "Los Angeles",
    state: "CA",
    zip: "90017",
  },
};
