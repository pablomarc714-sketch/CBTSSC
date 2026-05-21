import { EyebrowLabel } from "@/components/layout/section";

const AFFILIATES = [
  "UCLA",
  "USC",
  "Cedars-Sinai",
  "UC San Diego",
  "VA Greater Los Angeles",
  "Kaiser Permanente",
];

export function TrustStrip() {
  return (
    <div>
      <EyebrowLabel tone="muted" className="block text-center">
        Trusted by clinicians at
      </EyebrowLabel>
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
        {AFFILIATES.map((name) => (
          <li
            key={name}
            className="font-serif text-base tracking-wide text-foreground/70 sm:text-lg"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
