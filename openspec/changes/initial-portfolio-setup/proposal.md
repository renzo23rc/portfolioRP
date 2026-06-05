# Proposal: Initial Portfolio Setup (Renzo Portela)

## Intent

Build a professional, single-page Spanish-language portfolio for Renzo Portela, inspired by brittanychiang.com, with a fixed left sidebar and scrollable main content.

## Scope

### In Scope
- Next.js App Router project scaffold (React 19), Tailwind CSS v4, shadcn/ui, Framer Motion.
- Single-page layout: fixed left sidebar + right main sections (responsive; mobile becomes top drawer/overlay nav).
- Dark theme using brand palette (#0c1a3a bg, #142850 surface, #c9a84c accent, #0ea5e9 secondary).
- Sections with Spanish copy: Hero, About, Experience, Projects, Skills, Languages, Contact.
- Sidebar: logo/monogram, vertical navigation (anchors), social icons, and vertical email.
- Static content stored in a typed data file; no backend.
- Baseline SEO + accessibility (metadata, headings, focus states, reduced-motion support).

### Out of Scope
- Blog, CMS, authentication, API routes, database.
- Admin/editing UI for content.

## Capabilities

### New Capabilities
- `portfolio-app-shell`: App layout, global styles, and responsive shell (sidebar + main).
- `portfolio-content-model`: Typed data source for all portfolio content (Spanish copy + links).
- `portfolio-sections`: Implement sections and anchor targets (Hero/About/Experience/Projects/Skills/Languages/Contact).
- `portfolio-navigation`: Sidebar navigation, active section highlighting, and mobile navigation.
- `portfolio-theming`: Brand color tokens, typography decisions, and component styling conventions.
- `portfolio-motion`: Entry/scroll animations and reduced-motion fallbacks.
- `portfolio-seo-a11y`: Metadata, semantics, keyboard navigation, and contrast checks.

### Modified Capabilities
None (no existing specs).

## Approach

- Scaffold with `create-next-app` (App Router). Configure Tailwind v4 and shadcn/ui.
- Implement design system tokens (CSS variables) for brand colors; build components with shadcn/ui primitives.
- Create `src/content/portfolio.ts` (or similar) as the single source of truth for Spanish copy and links.
- Build sections as composable components; add Framer Motion animations with a global “prefers-reduced-motion” guard.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `app/` | New | Layout, page, metadata, routing (single-page anchors). |
| `src/components/` | New | Sidebar, nav, section components, UI wrappers. |
| `src/content/portfolio.ts` | New | Hardcoded Spanish content + links. |
| `tailwind.config.*` / `globals.css` | New/Modified | Theme tokens, typography, base styles. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| “Next.js 16” availability/tooling mismatch | Med | Pin to a known stable Next.js version during scaffolding; document chosen version. |
| Visual polish gap vs reference | Med | Build tokens + spacing scale first; iterate section-by-section with consistent rhythm. |
| Motion hurts performance/accessibility | Low/Med | Use small transforms only; respect reduced motion; test Lighthouse. |

## Rollback Plan

Revert to a minimal static single-page without Framer Motion and without advanced sidebar behaviors (keep content + styling tokens), using git revert of the motion/nav commits.

## Dependencies

- Node.js + npm/pnpm.
- shadcn/ui initialization and icon set selection.

## Success Criteria

- [ ] `npm run build` succeeds locally.
- [ ] Single-page portfolio renders correctly on mobile/tablet/desktop.
- [ ] All required sections and links are present; Spanish copy matches provided content.
- [ ] Sidebar/nav works (anchors + keyboard); reduced-motion supported.
