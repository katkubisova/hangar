# HANGAR — Project Architecture

Prototype reference for the unified HANGARGYMS website.  
All data is hardcoded — no backend, no API calls.

---

## Stack

| | Version | Notes |
|---|---|---|
| Next.js | 16.2.6 | App Router. Newer than most tutorials reference — read `AGENTS.md` before writing Next.js code |
| React | 19.2.4 | |
| TypeScript | 5 | |
| Tailwind CSS | 4 | CSS-first config via `app/globals.css` — no `tailwind.config.js` |
| shadcn/ui | 4.9.0 | Style: `base-nova`. Uses `@base-ui/react` as primitives (not Radix). Most online shadcn examples use Radix — don't copy them blindly |
| lucide-react | installed | Icon library. Use for all icons |

---

## What's already set up

- `lib/utils.ts` — `cn()` utility for merging Tailwind classes
- `components/ui/button.tsx` — shadcn Button component
- `app/globals.css` — full shadcn design token system (colors, radius, dark mode) via CSS variables
- `app/layout.tsx` — Geist font wired in, globals imported. **Navbar and Footer not yet added.**
- `components.json` — shadcn config with aliases: `@/components`, `@/lib`, `@/hooks`

---

## Routes

| Page | File | Gym selector? |
|---|---|---|
| Home | `app/page.tsx` | No |
| Visit Us | `app/visit/page.tsx` | Yes |
| Events & Activities | `app/events/page.tsx` | Yes |
| Hangar Cafe | `app/cafe/page.tsx` | Yes |
| News list | `app/news/page.tsx` | No |
| News article | `app/news/[slug]/page.tsx` | No |
| Our Team | `app/about/team/page.tsx` | No |
| Careers list | `app/about/careers/page.tsx` | No |
| Career position | `app/about/careers/[slug]/page.tsx` | No |
| Contact | `app/contact/page.tsx` | Yes |
| Privacy Policy | `app/privacy-policy/page.tsx` | No |
| Cookie Policy | `app/cookie-policy/page.tsx` | No |
| Visitor Rules | `app/visitor-rules/page.tsx` | No |

Note: there is no `/about` page — the nav "About" item is a dropdown only. Add `app/about/page.tsx` with a redirect to `/about/team`, or leave it as a 404. Decide before building the nav.

---

## Folder Structure

```
app/
  page.tsx
  visit/page.tsx
  events/page.tsx
  cafe/page.tsx
  news/
    page.tsx
    [slug]/page.tsx
  about/
    team/page.tsx
    careers/
      page.tsx
      [slug]/page.tsx
  contact/page.tsx
  privacy-policy/page.tsx
  cookie-policy/page.tsx
  visitor-rules/page.tsx
  layout.tsx                        # Add <Navbar /> and <Footer /> here
  globals.css

components/
  ui/                               # shadcn components (auto-generated, don't edit)
  layout/
    Navbar.tsx                      # Logo, nav links, About dropdown, language switcher
    Footer.tsx
  shared/
    GymSelector.tsx                 # Tab/pill row — used on Visit, Events, Cafe, Contact
    Hero.tsx                        # Full-width hero: image, headline, subtext, optional CTA
  home/
    GymCard.tsx                     # Location card: image, status badge, hours, CTA
  visit/
    PricesSection.tsx               # Price categories with collapsible rows
    FAQSection.tsx                  # Accordion FAQ
  events/
    ActivityCard.tsx
  news/
    ArticleCard.tsx
    ArticleFilter.tsx
  about/
    TeamMemberCard.tsx
    BenefitCard.tsx                 # "Why work at Hangar" cards on Careers list

hooks/                              # React hooks (referenced in components.json aliases)

lib/
  data/                             # Hardcoded placeholder data — one file per content type
    gyms.ts                         # export const gyms: Gym[]
    articles.ts                     # export const articles: Article[]
    team.ts                         # export const teamMembers: TeamMember[]
    positions.ts                    # export const positions: Position[]
    activity-categories.ts          # export const activityCategories: ActivityCategory[]
    faq.ts                          # export const faqItems: FAQItem[]
  types/
    index.ts                        # All TypeScript types
  utils.ts                          # cn() — already exists

public/
  images/                           # Placeholder images
  # Delete the default Next.js SVGs: file.svg, globe.svg, next.svg, vercel.svg, window.svg
```

---

## Key Patterns

### Gym Selector

Used on `/visit`, `/events`, `/cafe`, `/contact`. Pages that use it must be Client Components (`"use client"`) because they hold local state.

Use shadcn **Tabs** component as the base. `"coming-soon"` gym tabs are rendered but with `disabled` and a muted style.

```tsx
"use client";

const [selectedGym, setSelectedGym] = useState(gyms[0]);

<GymSelector gyms={gyms} selected={selectedGym} onChange={setSelectedGym} />
// sections below receive selectedGym as a prop
```

### shadcn Component Mapping

| UI pattern | shadcn component |
|---|---|
| Gym selector tabs | `Tabs` |
| Price categories (collapsible) | `Accordion` |
| FAQ | `Accordion` |
| About nav dropdown | `NavigationMenu` |
| Career application form fields | `Input`, `Textarea`, `Checkbox`, `Button` |
| Contact form | `Input`, `Textarea`, `Checkbox`, `Button` |
| Status badges (Open / Coming soon) | `Badge` |
| Article category filter | `Select` |

Install components as needed: `npx shadcn@latest add <name>`

### Images

Use `next/image` for all images. For placeholder content, use URLs from `https://picsum.photos` (e.g. `https://picsum.photos/seed/brno/800/600`). If external image domains are needed, add them to `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "picsum.photos" }],
  },
};
```

### Layout

`app/layout.tsx` wraps all pages. Add `<Navbar />` and `<Footer />` here once built — no page needs its own layout wrapper.

### Data Files

Each file in `lib/data/` exports a typed array. Pages import directly — no async, no fetching.

```ts
// lib/data/gyms.ts
import type { Gym } from "@/lib/types";

export const gyms: Gym[] = [ ... ];
```

---

## TypeScript Types

Lives in `lib/types/index.ts`.

```ts
export type GymStatus = "open" | "coming-soon" | "hidden";

export type Gym = {
  id: string;
  name: string;
  city: string;
  slug: string;
  status: GymStatus;
  heroImage: string;
  shortDescription: string;
  address: string;
  companyName: string;
  companyId: string;
  taxId: string;
  openingHours: OpeningHours[];
  email: string;
  phone: string;
  mapEmbedUrl: string;
  directionsText: string;
  directionsVideoUrl?: string;
  registrationUrl: string;
  bookingUrl: string;
  prices: PriceCategory[];
  consentFormUrl?: string;
  visitorRulesUrl?: string;
  cafeMenuUrl?: string;
  cafeMenuThumbnail?: string;
  displayOrder: number;
};

export type OpeningHours = {
  label: string;   // e.g. "Mon–Fri"
  open: string;    // e.g. "07:00"
  close: string;   // e.g. "22:00"
  note?: string;
};

export type PriceCategory = {
  title: string;
  footnote?: string;
  rows: PriceRow[];
};

export type PriceRow = {
  label: string;
  price: string;
  note?: string;
};

export type Article = {
  title: string;
  subtitle: string;
  slug: string;
  category: string;
  author: Author;
  heroImage: string;
  body: string;          // HTML string — rendered with dangerouslySetInnerHTML in prototype
  publishedDate: string; // ISO date string
  readTime: number;      // minutes
  relatedSlugs?: string[];
};

export type Author = {
  name: string;
  photo: string;
};

export type TeamMember = {
  name: string;
  photo: string;
  position: string;
  gymSlug: string;
  bio: string;
  email?: string;
  displayOrder: number;
};

export type Position = {
  title: string;
  slug: string;
  gymSlug: string;
  employmentType: "full-time" | "part-time" | "contract";
  roleDescription: string; // HTML string
  contactPerson: ContactPerson;
  status: "open" | "closed";
};

export type ContactPerson = {
  name: string;
  role: string;
  phone: string;
  email: string;
};

export type ActivityCategory = {
  name: string;
  image: string;
  description: string;
  displayOrder: number;
};

export type FAQItem = {
  question: string;
  answer: string;
  gymSlugs: string[] | "all";
  displayOrder: number;
};

export type BenefitCard = {
  title: string;
  text: string;
  icon: string;
  displayOrder: number;
};
```

---

## Gyms in Scope

| Gym | Slug | Status |
|---|---|---|
| Hangar Brno | `brno` | Open |
| Hangar Ostrava | `ostrava` | Open |
| Hangar Praha | `praha` | Coming soon |
| Hangar Plzeň | `plzen` | Coming soon |
| Hangar Olomouc | `olomouc` | Coming soon |

---

## Out of Scope (Prototype)

- Backend, CMS, API calls
- Form submission (rendered as static UI only)
- i18n / language switching (switcher present in UI but non-functional)
- Cookie consent banner
- Analytics
- PDF downloads (link elements are rendered but href can be `#`)
- Real Google Maps embeds (use a static image placeholder)
- Authentication, booking system integration
