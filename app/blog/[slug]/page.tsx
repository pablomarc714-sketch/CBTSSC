import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Section, EyebrowLabel } from "@/components/layout/section";
import { ArticleCard } from "@/components/cards/article-card";
import { ARTICLES, getArticleBySlug } from "@/seed/articles";
import { formatDate } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article>
        <Section tone="default" size="md">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
            <EyebrowLabel className="mt-8 block">{article.category}</EyebrowLabel>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
              {article.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              {article.author.avatar ? (
                <div className="relative h-9 w-9 overflow-hidden rounded-full bg-muted">
                  <Image
                    src={article.author.avatar}
                    alt=""
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className="flex flex-col">
                <span className="font-medium text-foreground">
                  {article.author.name}, {article.author.credentials}
                </span>
                <span className="text-xs">{article.author.affiliation}</span>
              </div>
              <span aria-hidden>·</span>
              <span>{formatDate(article.publishedAt)}</span>
              <span aria-hidden>·</span>
              <span>{article.readingTime} min read</span>
            </div>
          </div>

          <div className="relative mx-auto mt-12 aspect-[16/9] max-w-5xl overflow-hidden rounded-3xl bg-muted shadow-md">
            <Image
              src={article.image}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg mx-auto mt-12 max-w-3xl">
            {article.body ? (
              article.body.split("\n\n").map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <p>
                The full text of this article will appear here. In production, the body would be
                authored in MDX and rendered with a Tailwind typography theme tuned to the Society's
                visual style.
              </p>
            )}
          </div>
        </Section>
      </article>

      <Section tone="muted" size="md">
        <h2 className="font-serif text-2xl text-foreground">Continue reading</h2>
        <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {related.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </Section>
    </>
  );
}
