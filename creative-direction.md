# Creative Direction — Gina's College of Advanced Aesthetics

**Version:** 1.0 | **Date:** 2026-05-28
**Reference brands:** Equinox, Aritzia, Rhode, Paul Mitchell

---

## Emotional Territory

The site should feel like the first time you walked into a serious gym, a flagship store, or a boutique hotel and thought: *this is the real thing.* Not warm and approachable — authoritative and aspirational. The visitor arrives uncertain. She leaves convinced this is the only school worth attending.

The feeling is earned credibility, not performed prestige. Gina's doesn't need to brag — 45 years, CIDESCO, an in-house client spa — the facts speak. The site's job is to let those facts land with weight.

---

## Visual Identity System

### Palette

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Primary | Navy | `#01426A` | Headings, navbar, CTA buttons, section backgrounds |
| Neutral | Black | `#000000` | Body text, borders, strong contrast moments |
| Base | White | `#FFFFFF` | Page backgrounds, card backgrounds, reverse text |
| Accent | Soft Blue | `#B1C6D9` | Decorative lines, image overlays, hover states |
| Surface | Light Gray | `#E9E9E9` | Section alternates, card backgrounds, dividers |
| Mid | Blue Gray | `#D4DDE5` | Input borders, secondary dividers, subtle tints |

**Color rules:**
- Hero section: deep navy background, white text. Signals authority immediately.
- Mechanism section: transitions from navy to white over 200px scroll (crossfade).
- Action section (CTA): back to deep navy. Full-bleed. No distractions.
- Never use more than 3 colors in a single section.
- Soft Blue is the accent only — never use it as a background for more than a decorative stripe.

### Typography System

**Display font:** NOHEMI (variable, 9 weights)
- Source: Awwwards free fonts collection
- Weight range: 100–900
- Use: Headlines, hero text, section titles, program card names
- Character: Neo-grotesque with fashion editorial proportions. Very high x-height, unusually wide at display sizes. Feels like a masthead.

**Body font:** Ranade (variable)
- Source: FontShare (free)
- Use: Body copy, labels, UI text, navigation, fine print
- Character: Quiet, elegant, zero competition with NOHEMI

**Font loading:** Self-hosted WOFF2. Place in `public/fonts/`. Use `@font-face` with `font-display: swap`.

**Scale:**
```
Hero headline:    clamp(72px, 10vw, 140px) — NOHEMI weight 700
Section heading:  clamp(40px, 5vw, 72px) — NOHEMI weight 600
Card title:       clamp(24px, 3vw, 36px) — NOHEMI weight 500
Body:             18px / 1.6 — Ranade weight 400
Label/UI:         13px / 1.4 — Ranade weight 500, uppercase, 0.08em tracking
```

**Headline character budget:**
- Hero: 15–35 characters max (forces punchy, grid-respecting headlines)
- Section: 30–55 characters
- Never let a headline wrap at mobile in an ugly place — write with line breaks in mind

### Spacing & Rhythm

- Base unit: 8px
- Section padding: 120px top/bottom (desktop), 72px (mobile)
- Grid: 12-column, 1440px max-width container, 24px gutters
- Cards: 24px internal padding, 16px gap between cards
- Generous whitespace — never crowded. Equinox uses breathing room as a design element. So does this site.

### Corner Radius

- Buttons: 4px (tight, editorial — not playful rounded)
- Cards: 8px
- Image containers: 0px (full bleed, or 12px for floating elements)
- Never more than 12px anywhere

### Shadow Philosophy

- No decorative shadows. No card drop shadows.
- Shadows only for focus states (0 0 0 3px `#B1C6D9`) and modal overlays (0 8px 40px rgba(0,0,0,0.3))

### Image Treatment

- Hero: High contrast, editorial. Women in clinical or educational settings — confident, professional, in motion.
- Programs: Product-style shots — tools, equipment, hands performing treatments. Clean backgrounds.
- Testimonials: Black & white portrait crops. 3:4 ratio. `object-position: top center`.
- No stock photo smiles. No posed groups. Real training environments or editorial-grade portraits.
- All images: `loading="lazy"` except LCP hero image. All with descriptive `alt` text.

### Grid Personality

Swiss/Bauhaus. Asymmetric tension on the hero (headline takes 8 of 12 columns, right space left open). Cards snap to a strict grid — no irregular masonry. Numbers and stats are typographically large and serve as layout anchors.

---

## Motion Design Language

### Primary Easing

`cubic-bezier(0.22, 1, 0.36, 1)` — luxury deceleration. Every animation uses this curve unless otherwise specified.

### Duration Scale

| Name | Multiplier | Value |
|------|-----------|-------|
| Micro | 0.5x | 200ms |
| Standard | 1x | 400ms |
| Dramatic | 2x | 800ms |
| Cinematic | 3x | 1200ms |

### Enter Direction

Elements enter from below (translateY: 40px → 0) and fade in (opacity: 0 → 1). This guides the eye downward toward the primary CTA at bottom. No left-right entries except for horizontal stat lines in Beat 2.

### Stagger Rhythm

| Level | Delay |
|-------|-------|
| Character (SplitText) | 0.02s |
| Word | 0.06s |
| Element (icon + label + desc) | 0.12s |
| Section elements | 0.25s |

### Exit Behavior

When sections scroll past: fade to 0.4 opacity + scale to 0.97. Subtle recede. Creates depth without complexity.

### Scroll Sync Rules

- **Scroll-synced (GSAP ScrollTrigger scrub):** hero image parallax, transition stat line (Beat 1→2), program cards scale recede (Beat 4→5)
- **Intersection-triggered (once):** all fade-ups, headline reveals, counter animations, testimonial reveals
- Never mix paradigms in a single section.

### GSAP Choreography Groups

| Section | Group | Elements | Timing |
|---------|-------|----------|--------|
| Hero | Group A | Badge + headline | SplitText chars, 0.02s stagger |
| Hero | Group B | Subhead + CTA | 400ms after Group A |
| Hero | Group C | Stat bar (scroll-linked) | Fades in as hero exits |
| Tension | Group A | Eyebrow + headline | On intersect, 300ms |
| Tension | Group B | 3 stat cards | Staggered 120ms each |
| Mechanism | Group A | Section label | On intersect |
| Mechanism | Group B | Differentiator cards | 120ms stagger |
| Programs | Group A | Header | On intersect |
| Programs | Group B | Program cards | 100ms stagger |
| Proof | Group A | Quote marks (decorative) | Scale from 0.8 |
| Proof | Group B | Testimonial cards | 150ms stagger |
| Action | Group A | Headline | SplitText word reveal |
| Action | Group B | CTA buttons | 400ms after Group A |

---

## Content Production System

### Voice

Clinical confidence meets human warmth. Short sentences. No filler. Specificity is credibility — "45 years" not "decades of experience," "CIDESCO" not "internationally recognized." Never corporate. Never breathless. Occasionally direct and a little blunt (à la Equinox).

### Hero Headline Formula

**Structure:** `[Result] + [Differentiator]`
- "Train Where the Industry Recruits"
- "45 Years. One Standard."
- "Graduate Ready. Hired First."

**Rules:**
- Max 35 characters
- Present tense or active imperative
- Never start with "The" or "A"
- Must be readable at 100px in one line on desktop

### Section Heading Pattern

**Declarative fragments.** All section headlines follow the same structure: statement of fact, zero fluff.
- "Four Things No Other School Can Say"
- "Your Career Starts the Day You Graduate"
- "Real Clients. Real Training. From Day One."

### Body Copy Rules

- Max 2 sentences per paragraph
- Max 2 paragraphs per section supporting block
- Every sentence must earn its place — if it restates the headline, delete it
- Lead with the benefit, end with the proof or specificity

### CTA Language

| Type | Text |
|------|------|
| Primary | "Start Your Application" |
| Secondary | "Book a Free Career Consultation" |
| Micro | "Talk to an admissions advisor →" |

Never "Learn More." Never "Click Here." Never "Submit."

### Proof Copy (Testimonials — edited for impact)

- Liz M., Laser Specialist (Ottawa): "I am now employed as a laser specialist in one of the top medical spas in Ottawa. I would highly recommend Gina's College."
- Jessica T.: "I graduated at the top of my class — something I thought I would never achieve."
- Dawn N., Certified Nail Technician: "Our instructors went well above to make our experience exceptional."

Attribution format: **Name**, *Title* — always.

### Data Copy Format

- "45 years" not "forty-five years"
- "3 campuses" not "three campus locations"
- "CIDESCO" always in caps, never spelled out unless introducing it for the first time
- "OSAP-eligible" always hyphenated

---

## Site Architecture

### Homepage (single scroll)

6 sections matching the narrative map beats. See `narrative-map.md`.

### Navigation (simplified — critical for conversion)

**Current problem:** 40+ programs in the Duda nav creates decision paralysis.

**New structure:**
```
Gina's College (logo/home)
├── Programs
│   ├── Diploma Programs (4)
│   └── Certificate Programs (browse all)
├── Campuses
│   ├── Mississauga
│   ├── Waterloo
│   └── Ottawa
├── Student Clinic
├── About
└── Apply Now (CTA button — navy, always visible)
```

"Programs" opens a mega-menu with the 4 flagship diplomas featured, plus a "Browse all programs →" link. Certificate programs live on a filterable directory page — not all in nav.

### Page Types

| Type | Count | Template |
|------|-------|---------|
| Homepage | 1 | Custom, full GSAP |
| Diploma program pages | 4 | Rich, outcome-forward |
| Certificate program pages | ~40 | Leaner, consistent CMS template |
| Campus pages | 3 | Location + programs available |
| Student Clinic page | 1 | Service menu + booking CTA |
| About page | 1 | Story, team, accreditation |
| Blog | ongoing | Sanity CMS, editorial layout |
| Apply / Contact | 1 | Simple form, low friction |

### Sanity CMS Usage

- Program pages (all 44): `program` document type with fields: title, type (diploma/certificate), duration, description, outcomes, image, campus availability, CTA
- Blog posts: `post` document type with author, category, rich text body
- Testimonials: `testimonial` document type (reusable across homepage + program pages)

---

## Competitive Differentiation (Site-Level)

**What competitors do:** Template feel, crowded nav, passive copy ("learn more about our programs"), no income/career data, no proof of employer demand.

**What this site does differently:**
1. Income-forward — salary ranges and employer names appear above the fold in Beat 2
2. Proof density — CIDESCO badge, OSAP eligible, 45-year stat, and real graduate names all load in the first 30% of scroll
3. Navigation reduces choice — 4 diplomas featured, not 40+ programs in a dropdown
4. CTA is permanent — "Apply Now" button lives in the nav at all breakpoints, never scrolls away
5. Real clients, not classmates — the in-house spa differentiator appears in Beat 3 with visual proof

---

## Technical Notes

- **Stack:** Next.js 16.3.0, React 19, TypeScript, Tailwind CSS 3.4, GSAP 3.12.5, Lenis 1.1.14, Sanity CMS
- **GA tag:** G-FNP4PLP1JZ — load in `app/layout.tsx` via Script component, `strategy="afterInteractive"`
- **Fonts:** Self-hosted WOFF2 in `public/fonts/`. Preload both font files in `<head>`.
- **Images:** Next.js `<Image>` component for all images. `priority` on LCP hero image only.
- **Accessibility:** All interactive elements keyboard-navigable. ARIA labels on icon-only buttons. Color contrast ratio ≥ 4.5:1 for all text.
- **SEO redirects:** All old Duda URL paths → new Next.js routes in `vercel.json`
- **Mobile first:** All Tailwind classes written mobile-first, then `md:` and `lg:` overrides.
