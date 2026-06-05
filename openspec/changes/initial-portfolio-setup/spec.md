# Initial Portfolio Setup — Specification

## Purpose
Single-page portfolio: Spanish copy from typed source; desktop fixed sidebar; mobile overlay nav.

## Requirements

### Requirement: Brand palette tokens
The system MUST define in `globals.css`: `--background #0c1a3a`, `--surface #142850`, `--border #1e3a5f`, `--foreground #f0f2f5`, `--muted-foreground #8ba4c4`, `--primary #c9a84c`, `--secondary #0ea5e9`.

#### Scenario: Palette available
- GIVEN the page renders
- WHEN UI styles resolve
- THEN components reference the CSS variables

### Requirement: Typed content model
All Spanish copy MUST be sourced from typed `src/content/portfolio.ts`.

**Minimum fields**: `hero`, `about`, `experience.items[4]`, `projects.featured[2]`, `skills{technical[],soft[]}`, `languages[]`, `contact{email,social[]}`.

#### Scenario: Missing optional fields
- GIVEN `about.photo` or `project.image` is absent
- WHEN the section renders
- THEN a placeholder renders without layout breakage

### Requirement: Shell + navigation
Desktop MUST provide fixed left sidebar (logo, nav, socials, vertical email) and right scrollable main. Mobile MUST provide a hamburger overlay. Nav MUST anchor to all sections and highlight active (`aria-current="true"`).

#### Scenario: Overlay keyboard
- GIVEN the mobile overlay is open
- WHEN Escape is pressed
- THEN it closes and focus returns to the trigger

### Requirement: States, a11y baseline, motion
Interactive elements MUST support default/hover/active/focus-visible. Page MUST include skip-to-content, single H1 in Hero, logical headings, visible focus, and respect `prefers-reduced-motion: reduce`.

**Loading**: None.

#### Scenario: Skip link
- GIVEN a keyboard user activates “Skip to content”
- WHEN the action occurs
- THEN focus moves to the main content start

---

## Section Specifications

### Requirement: Hero
| Item | Spec |
|---|---|
| Purpose | Greeting + role/title + primary CTAs |
| Layout | Desktop: large text + CTA row; Mobile: stacked CTAs |
| States | Global states |
| Data | `hero{greeting,name,title,summary,ctas[{label,href,kind}]}` |
| A11y | H1; CTA labels explicit |
| Motion | Optional mild entrance |
| Edge | Long title wraps; CTAs 0–2 |

#### Scenario: Hero renders
- GIVEN hero content exists
- WHEN the page loads
- THEN the hero renders greeting/title and available CTAs

### Requirement: About
| Item | Spec |
|---|---|
| Purpose | CV-based intro |
| Layout | Desktop: text + optional photo; Mobile: text then photo |
| States | Global states |
| Data | `about{heading,paragraphs[],photo?{src,alt?}}` |
| A11y | Photo has `alt` or decorative `alt=""` |
| Motion | None required |
| Edge | 0 paragraphs allowed |

#### Scenario: About renders
- GIVEN about content exists
- WHEN About renders
- THEN paragraphs render in order and photo placeholder is used if missing

### Requirement: Experience
| Item | Spec |
|---|---|
| Purpose | Timeline (Inventu, Politécnico, Taura, Waterpolo) |
| Layout | Desktop: timeline/cards; Mobile: single column |
| States | Cards MAY elevate; links use global states |
| Data | `experience.items[{org,role,start,end,location?,highlights[]}]` |
| A11y | List semantics; dates SHOULD use `<time>` |
| Motion | Optional stagger; reduced-motion safe |
| Edge | Empty highlights omit list |

#### Scenario: Experience renders
- GIVEN 4 items exist
- WHEN Experience renders
- THEN each item shows org/role/date range and highlights if present

### Requirement: Projects
| Item | Spec |
|---|---|
| Purpose | 2 featured projects (WaterpoloGER, Catálogo Claudio) |
| Layout | Desktop: image + content card; Mobile: image above |
| States | Card hover MAY change surface; links use global states |
| Data | `projects.featured[{name,description,image?,techStack[],links{demo?,repo?,other?}}]` |
| A11y | Image has alt or decorative; icon links aria-label |
| Motion | Small hover transforms; reduced-motion safe |
| Edge | Missing image/links hide only that part |

#### Scenario: Projects renders
- GIVEN featured projects exist
- WHEN Projects renders
- THEN name/description/tech stack and available links render per project

### Requirement: Skills & Languages
| Item | Spec |
|---|---|
| Purpose | Technical + soft skills; language level |
| Layout | Desktop: grouped layout; Mobile: stacked |
| States | Cosmetic hover; links use global states |
| Data | `skills{technical[],soft[]}`, `languages[{name,level}]` |
| A11y | Group headings; lists use `<ul>` |
| Motion | None required |
| Edge | Empty group omitted |

#### Scenario: Skills & languages render
- GIVEN skills and languages exist
- WHEN the section renders
- THEN groups render as labeled lists and empty groups are omitted

### Requirement: Contact
| Item | Spec |
|---|---|
| Purpose | Email + social links |
| Layout | Desktop: email + icons; Mobile: tap-friendly rows |
| States | Global states |
| Data | `contact{email,social[{kind:'github'|'linkedin'|'instagram'|'whatsapp',href,label}]}` |
| A11y | Email is `mailto:`; icons aria-label |
| Motion | Hover only |
| Edge | Missing social kind omitted |

#### Scenario: Contact renders
- GIVEN contact data exists
- WHEN Contact renders
- THEN email and socials render and are keyboard accessible
