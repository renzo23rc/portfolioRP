# Tasks: Initial Portfolio Setup (Renzo Portela)

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~850–950 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 (scaffold + content + shell) → PR 2 (sections + nav) → PR 3 (polish + a11y) |
| Delivery strategy | ask-on-risk |
| Chain strategy | pending |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: pending
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Scaffold, config, content model, layout shell | PR 1 | Base: main. Includes globals.css, fonts, portfolio.ts, page.tsx skeleton |
| 2 | All sections, sidebar, mobile nav, active-section hook | PR 2 | Base: PR 1 branch. Bulk of component work |
| 3 | Motion polish, a11y audit, responsive fixes, SEO metadata | PR 3 | Base: PR 2 branch. Final pass |

## Phase 1: Project Scaffolding & Configuration

- [ ] 1.1 Run `create-next-app` with App Router, TypeScript, Tailwind CSS v4, ESLint. Pin Next.js to latest stable 16.x. Verify `npm run dev` starts.
- [ ] 1.2 Run `npx shadcn@latest init` (New York style, CSS variables). Install `framer-motion`, `lucide-react`. Verify `src/lib/utils.ts` with `cn()` exists.
- [ ] 1.3 Replace `app/globals.css` with Tailwind v4 `@import "tailwindcss"` and define all brand CSS variables (`--background`, `--foreground`, `--card`, `--primary`, `--secondary`, `--muted`, `--border`, etc.).
- [ ] 1.4 Configure Geist Sans + Geist Mono in `app/layout.tsx` via `next/font/google`. Apply font variables to `<html>`.

## Phase 2: Content Model

- [ ] 2.1 Create `src/content/portfolio.ts` with typed interfaces (`Hero`, `About`, `ExperienceItem`, `Project`, `Skills`, `Language`, `Contact`, `SocialLink`, `SocialKind`, `CTA`). Populate all Spanish copy: hero greeting/name/title/summary/CTAs, about paragraphs, 4 experience items (Inventu, Politécnico, Taura, Waterpolo), 2 featured projects (WaterpoloGER, Catálogo Claudio), technical + soft skills, languages, contact email, and social links (github, linkedin, instagram, whatsapp).

## Phase 3: Layout Shell & Navigation

- [ ] 3.1 Create `src/components/sidebar.tsx`: fixed left column (300px) with monogram, vertical nav anchor links, `social-links` component at bottom, rotated email text. Hidden below `md` breakpoint.
- [ ] 3.2 Create `src/components/mobile-nav.tsx`: hamburger button visible below `md`, full-screen overlay with nav links. Close on Escape key, return focus to trigger. `useState<boolean>` for open/close.
- [ ] 3.3 Create `src/hooks/use-active-section.ts`: `IntersectionObserver` hook watching `[data-section]` elements (threshold 0.3). Returns `activeSection: string`. Create `src/components/section-wrapper.tsx` that applies `data-section`, `id` anchor, and optional Framer `whileInView` reveal.
- [ ] 3.4 Update `app/layout.tsx` with CSS Grid shell (`grid-template-columns: 300px 1fr` on `md+`). Add skip-to-content link. Wire sidebar + mobile-nav + `<main>` with `id="main-content"`.

## Phase 4: Sections

- [ ] 4.1 Create `src/components/hero.tsx`: renders greeting, name as `<h1>`, title, summary, and CTA buttons (using shadcn `Button`). Import from `portfolio.hero`.
- [ ] 4.2 Create `src/components/about.tsx`: heading, paragraphs list, optional photo with placeholder fallback. Import from `portfolio.about`.
- [ ] 4.3 Create `src/components/experience.tsx`: timeline layout with 4 cards. Each shows org, role, `<time>` date range, highlights `<ul>`. Optional stagger animation. Import from `portfolio.experience`.
- [ ] 4.4 Create `src/components/projects.tsx`: 2 featured project cards with optional image, description, tech stack badges, and link icons (demo/repo). Import from `portfolio.projects`.
- [ ] 4.5 Create `src/components/skills.tsx`: grouped layout for technical skills, soft skills, and languages with level indicators. Empty groups omitted. Import from `portfolio.skills` and `portfolio.languages`.
- [ ] 4.6 Create `src/components/contact.tsx`: email `mailto:` link + social icon grid using `social-links`. Import from `portfolio.contact`.
- [ ] 4.7 Create `src/components/social-links.tsx`: reusable list of icon-links. Maps `SocialKind` to lucide icons. Accepts `variant` prop for sidebar vs inline usage. Shared by sidebar, contact, and any future footer.

## Phase 5: Polish & Integration

- [ ] 5.1 Wire all sections into `app/page.tsx`: compose Hero → About → Experience → Projects → Skills → Contact inside `SectionWrapper` components with correct `id` anchors.
- [ ] 5.2 Add `app/layout.tsx` metadata (title, description, Open Graph, Twitter card). Verify skip-to-content focuses `#main-content`. Audit heading hierarchy (single H1 in Hero, H2 per section).
- [ ] 5.3 Add `useReducedMotion()` guard to all Framer Motion animations. When reduced motion is preferred, disable `whileInView`, `initial`/`animate` transitions, and hover transforms.
- [ ] 5.4 Responsive pass: test at 375px, 768px, 1024px, 1440px. Fix sidebar condensing at tablet (50vw → overlay at mobile). Ensure tap targets ≥ 44px on mobile. Verify content `max-w-[1000px]` with comfortable padding.
