export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Practice" | "Research" | "Public Education" | "Society News";
  author: { name: string; credentials: string; affiliation: string; avatar?: string };
  publishedAt: string;
  readingTime: number;
  image: string;
  body?: string; // simple paragraphs for the placeholder layout
};

export const ARTICLES: Article[] = [
  {
    slug: "what-is-cbt-and-what-it-isnt",
    title: "What CBT is — and a few things it isn't",
    excerpt:
      "A plain-language primer on cognitive behavioral therapy, written for clients deciding whether CBT is right for them.",
    category: "Public Education",
    author: {
      name: "Eleanor Vasquez",
      credentials: "PhD, ABPP",
      affiliation: "UCLA",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "2026-04-22",
    readingTime: 6,
    image:
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80",
    body: "Cognitive behavioral therapy, or CBT, is one of the most studied forms of psychotherapy. It is short-term, structured, and focused on the present. Sessions are collaborative — clients and clinicians work together to identify patterns of thinking and behavior that maintain distress, and then experiment with new responses.\n\nCBT is not about positive thinking. It is also not the same as venting, advice-giving, or generic stress management. The strongest evidence for CBT is in the treatment of anxiety disorders, depression, OCD, PTSD, insomnia, and certain eating disorders.\n\nIf you are considering CBT, a few questions worth asking a prospective therapist: What does a typical course of treatment look like? How will we measure progress? What homework or between-session work is involved?",
  },
  {
    slug: "exposure-therapy-misconceptions",
    title: "Five common misconceptions about exposure therapy",
    excerpt:
      "Exposure-based treatments work, but myths about them keep many clinicians from offering them. Here's what the evidence actually says.",
    category: "Practice",
    author: {
      name: "Priya Shah",
      credentials: "PhD",
      affiliation: "VA Greater Los Angeles",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "2026-03-14",
    readingTime: 9,
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
    body: "Despite decades of research support, exposure therapy is still under-used in routine clinical practice. Surveys of community clinicians consistently identify a handful of concerns — many of which are not borne out by the data.\n\nMisconception one: exposure is harmful. Reviews of treatment dropout and adverse events suggest exposure-based therapies are no more likely to lead to deterioration than other evidence-based approaches.\n\nMisconception two: exposure requires a stable life. Most clients can benefit from exposure even when life circumstances are imperfect, provided the treatment is paced thoughtfully.",
  },
  {
    slug: "measurement-based-care",
    title: "Measurement-based care, without the friction",
    excerpt:
      "Three practical patterns from clinicians who routinely use brief outcome measures without losing the therapeutic relationship.",
    category: "Practice",
    author: {
      name: "Adaeze Okafor",
      credentials: "PhD, ABPP",
      affiliation: "Cedars-Sinai",
      avatar:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "2026-02-08",
    readingTime: 5,
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80",
    body: "Routine outcome monitoring is associated with better treatment response, but many clinicians find it cumbersome to implement. A small group of CBTSSC members shared what has worked for them.\n\nFirst, integrate measures into the rhythm of the session rather than treating them as separate paperwork. Two minutes of completion in the waiting room creates a natural starting point for the session.\n\nSecond, use measurement data as collaborative information, not as evaluation. Reviewing scores together with the client positions the data as a shared compass rather than a report card.",
  },
  {
    slug: "supervision-cbt-trainees",
    title: "What good CBT supervision looks like",
    excerpt:
      "Reflections from supervisors and trainees on what makes case consultation genuinely useful.",
    category: "Practice",
    author: {
      name: "Marcus Reyes",
      credentials: "PsyD",
      affiliation: "USC Keck School of Medicine",
      avatar:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "2026-01-20",
    readingTime: 7,
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "spring-2026-recap",
    title: "Spring 2026 conference recap",
    excerpt:
      "Highlights from our spring conference on adapting CBT for diverse populations across Southern California.",
    category: "Society News",
    author: {
      name: "Daniel Kim",
      credentials: "LCSW",
      affiliation: "Didi Hirsch Mental Health Services",
      avatar:
        "https://images.unsplash.com/photo-1559548331-f9cb98280344?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "2026-05-02",
    readingTime: 4,
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "research-roundup-q1",
    title: "Research roundup: notable CBT studies, Q1 2026",
    excerpt:
      "A quarterly look at recent peer-reviewed work shaping how we practice cognitive behavioral therapy.",
    category: "Research",
    author: {
      name: "Sara Lin",
      credentials: "PhD",
      affiliation: "UCLA Semel Institute",
      avatar:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "2026-04-08",
    readingTime: 8,
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getRecentArticles(limit?: number) {
  const sorted = [...ARTICLES].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
