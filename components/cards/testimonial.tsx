import Image from "next/image";
import { Quote } from "lucide-react";

type Props = {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
};

export function Testimonial({ quote, author, role, avatar }: Props) {
  return (
    <figure className="relative rounded-2xl border border-border bg-card p-8 shadow-sm">
      <Quote
        className="absolute right-6 top-6 h-8 w-8 text-secondary/20"
        aria-hidden
      />
      <blockquote className="font-serif text-xl leading-relaxed text-foreground/90">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        {avatar ? (
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-muted">
            <Image src={avatar} alt="" fill sizes="40px" className="object-cover" />
          </div>
        ) : (
          <div className="grid h-10 w-10 place-items-center rounded-full bg-accent text-secondary font-medium">
            {author.charAt(0)}
          </div>
        )}
        <div className="text-sm">
          <p className="font-medium text-foreground">{author}</p>
          <p className="text-muted-foreground">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
