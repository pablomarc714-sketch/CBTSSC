"use client";

import * as React from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TherapistCard } from "@/components/cards/therapist-card";
import { cn } from "@/lib/utils";
import {
  THERAPISTS,
  SPECIALTY_OPTIONS,
  INSURANCE_OPTIONS,
  REGION_OPTIONS,
} from "@/seed/therapists";

export function DirectorySearch() {
  const [q, setQ] = React.useState("");
  const [region, setRegion] = React.useState<string | null>(null);
  const [specialty, setSpecialty] = React.useState<string | null>(null);
  const [insurance, setInsurance] = React.useState<string | null>(null);
  const [telehealthOnly, setTelehealthOnly] = React.useState(false);
  const [acceptingOnly, setAcceptingOnly] = React.useState(false);
  const [showFilters, setShowFilters] = React.useState(false);

  const results = React.useMemo(() => {
    return THERAPISTS.filter((t) => {
      if (q.trim()) {
        const term = q.toLowerCase();
        const hay =
          `${t.name} ${t.credentials} ${t.city} ${t.specialties.join(" ")} ${t.bio}`.toLowerCase();
        if (!hay.includes(term)) return false;
      }
      if (region && t.region !== region) return false;
      if (specialty && !t.specialties.includes(specialty)) return false;
      if (insurance && !t.insurance.includes(insurance)) return false;
      if (telehealthOnly && !t.telehealth) return false;
      if (acceptingOnly && !t.acceptingNewPatients) return false;
      return true;
    });
  }, [q, region, specialty, insurance, telehealthOnly, acceptingOnly]);

  const activeFiltersCount =
    (region ? 1 : 0) +
    (specialty ? 1 : 0) +
    (insurance ? 1 : 0) +
    (telehealthOnly ? 1 : 0) +
    (acceptingOnly ? 1 : 0);

  function clearAll() {
    setQ("");
    setRegion(null);
    setSpecialty(null);
    setInsurance(null);
    setTelehealthOnly(false);
    setAcceptingOnly(false);
  }

  return (
    <div>
      <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Search by name, specialty, or city</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name, specialty, or city"
              className="pl-10 h-12"
            />
          </label>
          <Button
            type="button"
            variant="outline"
            className="h-12"
            onClick={() => setShowFilters((s) => !s)}
            aria-expanded={showFilters}
            aria-controls="directory-filters"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
            {activeFiltersCount > 0 ? (
              <span className="ml-1 rounded-full bg-secondary px-1.5 py-0.5 text-[10px] font-semibold text-secondary-foreground">
                {activeFiltersCount}
              </span>
            ) : null}
          </Button>
        </div>

        <div
          id="directory-filters"
          className={cn("overflow-hidden transition-all", showFilters ? "mt-6" : "mt-0 max-h-0")}
        >
          {showFilters ? (
            <div className="grid gap-6 md:grid-cols-3">
              <FilterGroup label="Region" value={region} setValue={setRegion} options={REGION_OPTIONS} />
              <FilterGroup
                label="Specialty"
                value={specialty}
                setValue={setSpecialty}
                options={SPECIALTY_OPTIONS}
              />
              <FilterGroup
                label="Insurance"
                value={insurance}
                setValue={setInsurance}
                options={INSURANCE_OPTIONS}
              />
              <div className="md:col-span-3 flex flex-wrap items-center gap-4 border-t border-border pt-5">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={telehealthOnly}
                    onChange={(e) => setTelehealthOnly(e.target.checked)}
                    className="h-4 w-4 rounded border-input text-secondary focus:ring-secondary"
                  />
                  Telehealth available
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptingOnly}
                    onChange={(e) => setAcceptingOnly(e.target.checked)}
                    className="h-4 w-4 rounded border-input text-secondary focus:ring-secondary"
                  />
                  Accepting new patients
                </label>
                {activeFiltersCount > 0 ? (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="ml-auto text-xs font-medium text-secondary hover:underline inline-flex items-center gap-1"
                  >
                    <X className="h-3 w-3" /> Clear filters
                  </button>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm" aria-live="polite">
        <p className="text-muted-foreground">
          {results.length === 0
            ? "No therapists match your filters."
            : `${results.length} ${results.length === 1 ? "therapist" : "therapists"} found`}
        </p>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {results.map((t) => (
          <TherapistCard key={t.slug} therapist={t} />
        ))}
      </div>
    </div>
  );
}

function FilterGroup<T extends string>({
  label,
  value,
  setValue,
  options,
}: {
  label: string;
  value: string | null;
  setValue: (v: string | null) => void;
  options: readonly T[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => setValue(active ? null : opt)}
              aria-pressed={active}
              className={cn(
                "rounded-full border px-3 py-1 text-xs transition-colors",
                active
                  ? "border-secondary bg-secondary text-secondary-foreground"
                  : "border-border bg-card text-foreground hover:border-secondary/50 hover:bg-accent/40"
              )}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
