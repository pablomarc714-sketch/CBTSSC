# CBT Society of Southern California — Website

A modern, professional informational website for the **CBT Society of Southern California (CBTSSC)** — a non-profit professional society of CBT clinicians, researchers, and students.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and shadcn-style components on Radix primitives.

---

## Quick start

```bash
# install
pnpm install

# develop
pnpm dev          # http://localhost:3000

# typecheck
pnpm typecheck

# production build
pnpm build
pnpm start
```

Requires Node 20+ and pnpm 11+. (Corepack can enable pnpm without a global install: `corepack enable pnpm`.)

---

## Tech stack

| Layer            | Choice                                                      |
| ---------------- | ----------------------------------------------------------- |
| Framework        | Next.js 15 (App Router, server components by default)       |
| Language         | TypeScript (strict)                                         |
| Styling          | Tailwind CSS v4 (CSS-first `@theme` config in globals.css)  |
| Components       | shadcn/ui patterns on `@radix-ui` primitives                |
| Icons            | `lucide-react`                                              |
| Animations       | `framer-motion` (mobile nav, count-up stats)                |
| Forms            | `react-hook-form` + `zod`                                   |
| Fonts            | `next/font` — Fraunces (serif headings), Inter (body)       |
| Package manager  | pnpm                                                        |
| Deploy target    | Vercel-ready                                                |

---

## Project structure

```
app/                         # App Router routes
  layout.tsx                 # Root layout, fonts, metadata, JSON-LD
  page.tsx                   # Home
  globals.css                # Design tokens + Tailwind v4 theme
  sitemap.ts / robots.ts     # SEO
  about/                     # About + sub-pages
  membership/                # Overview, benefits, multi-step apply form
  events/                    # Listing + dynamic [slug] detail
  resources/                 # Hub + find-a-therapist + for-clinicians / public
  education/                 # CE overview + workshops
  research/
  blog/                      # Index + dynamic [slug] article
  contact/
  (legal)/privacy            # Route group — kept out of URL
  (legal)/terms

components/
  ui/                        # Button, Input, Textarea, Label, Badge, Dialog
  layout/                    # Header, MobileNav, Footer, Section, CrisisStrip
  cards/                     # EventCard, ArticleCard, TherapistCard,
                             # BoardMemberCard, Testimonial, DisclaimerBanner
  sections/                  # Hero, TrustStrip, StatBlock, NewsletterForm

lib/
  utils.ts                   # cn(), formatDate(), SITE constants

seed/                        # Mock data exports (events, board, therapists, articles)

public/
  favicon.svg
```

---

## Design system

All design tokens live as CSS variables in `app/globals.css` and are exposed to Tailwind through `@theme inline`. Use Tailwind class names (`bg-primary`, `text-secondary`, `border-border`, `font-serif`) — never raw hex.

### Palette

| Token              | Value     | Use                                  |
| ------------------ | --------- | ------------------------------------ |
| `--primary`        | `#1E3A5F` | Deep clinical blue — primary CTAs, headings, footer |
| `--primary-light`  | `#3B6FA0` | Hover state for primary              |
| `--secondary`      | `#2D6A4F` | Forest healing green — secondary CTAs, link underlines, focus rings |
| `--secondary-light`| `#52B788` | Soft sage — highlights, success      |
| `--accent`         | `#D8E9DC` | Pale mint — section backgrounds, badges |
| `--muted`          | `#E8EEF4` | Cool gray-blue — alternating sections |
| `--background`     | `#FAFBFC` | Page background — off-white          |
| `--foreground`     | `#0A1628` | Near-black navy text                 |

### Typography

* **Headings (h1–h4)**: Fraunces serif, `letter-spacing: -0.02em`, `line-height: 1.1`
* **Body**: Inter, 16px base, generous line-height
* **Eyebrows**: Small caps green labels above section headings, via the `<EyebrowLabel />` component

### Spacing

Use the `<Section />` wrapper for consistent vertical rhythm. `size="sm"` (py-16/20), `"md"` (py-20/24, default), `"lg"` (py-24/32). `tone` controls the background: `default | muted | accent | dark | gradient | cta`.

### Components

| Component | When to use |
| --- | --- |
| `<Button variant="primary|secondary|outline|ghost|link">` | All CTAs. Primary = filled blue; outline = green-bordered secondary. |
| `<Section>` / `<EyebrowLabel>` | Page section scaffolding. |
| `<EventCard>` / `<ArticleCard>` / `<TherapistCard>` / `<BoardMemberCard>` | Card grids — already styled to spec. |
| `<StatGrid>` | Animated count-up on scroll into view. Respects `prefers-reduced-motion`. |
| `<DisclaimerBanner>` | Use on therapist directory, crisis pages, and any clinical content disclaimers. |
| `<CrisisStrip>` | Persistent footer link + modal with 988, Crisis Text Line, local SoCal resources. Mounted in root layout — do not duplicate. |

---

## Accessibility

* Semantic HTML throughout — single `<h1>` per page, proper landmarks (`<header>`, `<main>`, `<aside>`, `<footer>`).
* Skip-to-content link in root layout.
* Focus-visible rings use the secondary (green) color at 3px offset.
* Mobile nav is a true dialog (`role="dialog"`, `aria-modal`).
* All icon-only buttons have `aria-label`.
* Form errors are announced via `role="alert" aria-live="polite"`.
* `prefers-reduced-motion` cancels framer-motion and CSS animations.
* Image `alt` text is present on decorative-heavy contexts (empty string is intentional for purely decorative images per WCAG).

---

## SEO

* Per-page metadata via the Next.js Metadata API (`title` template: `%s · CBTSSC`).
* OpenGraph + Twitter card defaults on the root layout; per-route overrides on About, Events, Blog, etc.
* `MedicalOrganization` JSON-LD on the root layout.
* `Event` JSON-LD on event detail pages.
* `app/sitemap.ts` generates entries for static routes plus all events and articles.
* `app/robots.ts` allows all, points at sitemap.

---

## Forms

Two real forms ship:

1. **`/membership/apply`** — three-step form (personal info → credentials → review & submit) with `react-hook-form` + `zod`. Each step validates only its fields before allowing progression.
2. **`/contact`** — single-step form with topic select and message textarea.

Both surface inline errors with `aria-live="polite"` and show a success state after submission. Replace the placeholder submit handlers with your service of choice (Resend, Formspark, a Next.js Route Handler hitting your backend, etc.).

---

## Adding content

* **Events**: edit `seed/events.ts`. The listing, home page upcoming-events block, and dynamic `/events/[slug]` page all read from this file.
* **Board**: edit `seed/board.ts` — `app/about/board/page.tsx` reads from it.
* **Therapists**: edit `seed/therapists.ts`. The filter UI dynamically pulls specialty, insurance, and region options from this seed file.
* **Articles**: edit `seed/articles.ts`. For long-form posts, swap the `body` field for MDX rendering in `app/blog/[slug]/page.tsx`.

---

## Things you'll want to do before production

* [ ] Replace placeholder Unsplash imagery with real photography
* [ ] Wire form submit handlers to a backend or email service
* [ ] Configure a real domain in `lib/utils.ts → SITE.url`
* [ ] Generate a proper OpenGraph image (`/opengraph-image.png`)
* [ ] Replace `(provider #PCE-XXXX)` placeholder with the real BBS provider number
* [ ] Have privacy/terms reviewed by counsel
* [ ] Audit Lighthouse / Pa11y once real images are in place
* [ ] Decide on a CMS or keep MDX in repo — current setup is repo-only
* [ ] Run `pnpm approve-builds` and approve `sharp` if you want native image optimization

---

## License

Source code: MIT (see `LICENSE`). Content (copy, member data, etc.) © CBT Society of Southern California.
