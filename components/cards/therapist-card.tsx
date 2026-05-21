import Image from "next/image";
import { MapPin, Video, CheckCircle2 } from "lucide-react";
import type { Therapist } from "@/seed/therapists";
import { Badge } from "@/components/ui/badge";

export function TherapistCard({ therapist }: { therapist: Therapist }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-secondary/40">
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-muted">
          <Image
            src={therapist.photo}
            alt={`Portrait of ${therapist.name}`}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg leading-tight text-foreground">
            {therapist.name}, {therapist.credentials}
          </h3>
          {therapist.pronouns ? (
            <p className="text-xs text-muted-foreground">{therapist.pronouns}</p>
          ) : null}
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-secondary" />
            {therapist.city}, {therapist.region}
          </p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-foreground/85">{therapist.bio}</p>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-2">
          Specialties
        </p>
        <div className="flex flex-wrap gap-1.5">
          {therapist.specialties.map((s) => (
            <Badge key={s} variant="default">
              {s}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid gap-1.5 text-xs text-muted-foreground">
        <p>
          <span className="font-medium text-foreground/80">Insurance: </span>
          {therapist.insurance.join(", ")}
        </p>
        <p>
          <span className="font-medium text-foreground/80">Sees: </span>
          {therapist.populations.join(", ")}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/70 pt-4 text-xs">
        {therapist.telehealth ? (
          <span className="flex items-center gap-1.5 text-secondary">
            <Video className="h-3.5 w-3.5" /> Telehealth available
          </span>
        ) : null}
        {therapist.acceptingNewPatients ? (
          <span className="flex items-center gap-1.5 text-secondary">
            <CheckCircle2 className="h-3.5 w-3.5" /> Accepting new patients
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-muted-foreground">Waitlist only</span>
        )}
      </div>
    </article>
  );
}
