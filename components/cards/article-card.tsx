import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/seed/articles";
import { formatDate } from "@/lib/utils";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4 rounded-2xl"
    >
      <div className="relative aspect-[5/3] overflow-hidden rounded-2xl bg-muted">
        <Image
          src={article.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="px-1 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
          {article.category}
        </p>
        <h3 className="mt-2.5 font-serif text-xl leading-snug text-foreground group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {article.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
          <span>{article.author.name}</span>
          <span aria-hidden>·</span>
          <span>{formatDate(article.publishedAt)}</span>
          <span aria-hidden>·</span>
          <span>{article.readingTime} min read</span>
        </div>
      </div>
    </Link>
  );
}
