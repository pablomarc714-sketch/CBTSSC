import Image from "next/image";
import type { BoardMember } from "@/seed/board";

export function BoardMemberCard({ member }: { member: BoardMember }) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5">
        <Image
          src={member.photo}
          alt={`Portrait of ${member.name}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
        {member.role}
      </p>
      <h3 className="mt-1.5 font-serif text-lg leading-snug text-foreground">
        {member.name}, {member.credentials}
      </h3>
      <p className="mt-0.5 text-sm text-muted-foreground">{member.affiliation}</p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{member.bio}</p>
    </article>
  );
}
