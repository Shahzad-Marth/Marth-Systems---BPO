# Marth Systems — Project Documentation

> Enterprise BPO & Healthcare Operations Website
> **Domain:** https://marth.systems  
> **Stack:** React + Vite + Tailwind CSS + React Router + Framer Motion + MDX  
> **Deployment:** Vercel

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Folder Structure](#3-folder-structure)
4. [Component Architecture](#4-component-architecture)
5. [Page System](#5-page-system)
6. [Blog System (MDX)](#6-blog-system-mdx)
7. [SEO System](#7-seo-system)
8. [Design System](#8-design-system)
9. [Animation System](#9-animation-system)
10. [Responsiveness Guidelines](#10-responsiveness-guidelines)
11. [Content Management](#11-content-management)
12. [Image + Asset Management](#12-image--asset-management)
13. [Deployment Guide](#13-deployment-guide)
14. [AdSense + Indexing](#14-adsense--indexing)
15. [Performance Guidelines](#15-performance-guidelines)
16. [Accessibility Guidelines](#16-accessibility-guidelines)
17. [Maintenance Workflow](#17-maintenance-workflow)
18. [Future Scaling Recommendations](#18-future-scaling-recommendations)
19. [AI Development Guidelines](#19-ai-development-guidelines)
20. [Common Issues + Fixes](#20-common-issues--fixes)

---

## 1. Project Overview

### What It Is

Marth Systems is a static marketing website for a modern Business Process Outsourcing (BPO) and healthcare operations company. The site serves as the company's primary digital presence — driving leads, establishing authority, and communicating the brand's operational intelligence.

### Company Positioning

Marth Systems positions itself as a premium, enterprise-grade BPO provider. The website must reflect:

- **Operational intelligence** — not just outsourcing, but process optimization
- **Enterprise trust** — HIPAA-conscious, compliance-first, secure
- **Modern SaaS aesthetics** — clean, minimal, spacious, premium
- **Multi-industry capability** — healthcare, SaaS, e-commerce, startups, professional services

### Design Philosophy

The design takes inspiration from Stripe, Vercel, Linear, Deel, Rippling, and Notion. Core principles:

- Minimal but sophisticated
- Corporate without feeling outdated
- Spacious typography and layout
- Subtle, calm animations (no bouncing, no neon, no exaggeration)
- Trustworthy color palette (blue + navy + emerald accents)

### Architecture Philosophy

- **Static-first** — no server-side rendering; pure client-side SPA
- **Lazy-loaded routes** — every page is code-split at the route level
- **Data-driven content** — all page content lives in `src/data/` files, separated from components
- **Reusable components** — barrel exports, no giant JSX files, clean separation of concerns
- **SEO-optimized SPA** — client-side meta management via `react-helmet-async`-style custom SEO component

---

## 2. Tech Stack

| Technology | Purpose | Reasoning |
|---|---|---|
| **React 19** | UI framework | Component model, ecosystem, developer experience |
| **Vite 8** | Build tool | Fast HMR, native ES module dev server, optimized production builds |
| **Tailwind CSS 3** | Styling | Utility-first, consistent design tokens, no CSS files to maintain |
| **React Router 7** | Routing | Client-side SPA routing, lazy loading, hash link support |
| **Framer Motion 12** | Animations | Declarative motion API, layout animations, scroll-triggered reveals |
| **Lucide React** | Icons | Consistent, minimal SVG icon set with tree-shaking |
| **React Markdown** | Blog rendering | Renders `.mdx` files as Markdown (not compiled MDX) |
| **remark-gfm** | Markdown extras | GitHub-flavored Markdown tables, strikethrough, etc. |
| **Vercel** | Hosting | Zero-config deployment, SPA rewrite support, edge network |

### Scalability Notes

- The site is fully static and can handle any traffic volume through Vercel's CDN
- No database, no API servers, no authentication — zero backend dependencies
- All content is compile-time, making the site extremely fast and secure
- For future CMS integration, the `src/data/` layer can be replaced with API calls without changing the component layer

---

## 3. Folder Structure

```
marth-systems/
├── public/                    # Static files (served as-is at root)
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── favicon-96x96.png
│   ├── apple-touch-icon.png
│   ├── site.webmanifest
│   ├── robots.txt
│   ├── ads.txt
│   └── og/                    # Open Graph images (one per page)
│       ├── home.png
│       ├── about.png
│       ├── services.png
│       ├── industries.png
│       ├── why-us.png
│       ├── case-studies.png
│       ├── blog.png
│       └── contact.png
│
├── src/
│   ├── assets/                # Static assets imported by components
│   │   ├── favicon.svg
│   │   ├── favicon.ico
│   │   └── ...                # Duplicate of public/ (can be cleaned up)
│   │
│   ├── components/
│   │   ├── layout/            # Persistent chrome: Navbar, Footer
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── common/            # Cross-cutting concerns: SEO, SkipLink, StructuredData
│   │   │   ├── SEO.jsx
│   │   │   ├── SkipLink.jsx
│   │   │   ├── StructuredData.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── ui/                # Primitive reusable UI atoms
│   │   │   ├── Button.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── Section.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   ├── Badge.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── sections/          # Page-section-level components (home page)
│   │   │   ├── Hero.jsx
│   │   │   ├── TrustMetrics.jsx
│   │   │   ├── Workflow.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Industries.jsx
│   │   │   ├── TrustBadges.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── FinalCTA.jsx
│   │   │   └── index.js
│   │   │
│   │   └── blog/              # Blog-specific components
│   │       ├── BlogCard.jsx
│   │       ├── Breadcrumb.jsx
│   │       ├── TableOfContents.jsx
│   │       ├── RelatedPosts.jsx
│   │       └── index.js
│   │
│   ├── pages/                 # One file per route (lazy-loaded)
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Industries.jsx
│   │   ├── WhyUs.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Contact.jsx
│   │   ├── Privacy.jsx
│   │   ├── Terms.jsx
│   │   └── NotFound.jsx
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx     # Root layout with Navbar/Footer/Outlet
│   │
│   ├── routes/
│   │   └── index.jsx          # React Router configuration
│   │
│   ├── data/                  # Static content data (no API dependency)
│   │   ├── navigation.js      # Nav links, footer links, contact info, social links
│   │   ├── services.js        # Service categories
│   │   ├── industries.js      # Industry definitions
│   │   ├── whyUs.js           # Advantages + philosophy steps
│   │   ├── caseStudies.js     # Case study data
│   │   ├── testimonials.js    # Derived from case studies + trust badges
│   │   ├── blog.js            # Blog post metadata (slug, title, excerpt, date, etc.)
│   │   └── blogCategories.js  # Category taxonomy
│   │
│   ├── hooks/
│   │   ├── useScrollPosition.js
│   │   ├── useLockBodyScroll.js
│   │   └── index.js
│   │
│   ├── utils/
│   │   ├── seo.js             # Meta tag management, JSON-LD schema generation
│   │   ├── blog.js            # Blog post loading, heading extraction, date formatting
│   │   ├── animations.js      # Framer Motion variants (fadeUp, staggerContainer, etc.)
│   │   └── cn.js              # Tailwind class merge utility
│   │
│   ├── content/
│   │   └── blog/              # MDX blog post files
│   │       ├── *.mdx          # (10+ blog posts, see #6)
│   │       └── ...
│   │
│   ├── components/
│   │   └── seo/               # SEO configuration constants
│   │       └── seoConfig.js
│   │
│   ├── index.css              # Tailwind directives + base styles
│   └── main.jsx               # React entry point
│
├── vercel.json                # Vercel deployment config
├── vite.config.js             # Vite config + sitemap plugin
├── tailwind.config.js         # Tailwind theme extension
├── postcss.config.js          # PostCSS config (Tailwind + Autoprefixer)
├── eslint.config.js           # ESLint flat config
├── .env.example               # Environment variable template
├── .env                       # Actual env vars (create from .env.example)
└── package.json
```

### Folder Rules

| Folder | Contains | Should NOT contain |
|---|---|---|
| `src/pages/` | One default-export component per route | Shared components, data fetching, business logic |
| `src/components/` | Pure presentational/reusable components | Page-specific logic, data imports from outside |
| `src/data/` | Static content arrays and objects | Components, hooks, API calls |
| `src/utils/` | Pure functions with no side effects | JSX, components, state management |
| `src/hooks/` | Custom React hooks | Components, data files |
| `src/content/` | MDX blog post files | Anything other than `.mdx` files |
| `public/` | Files served at root URL | Files that need import/bundling |
| `src/assets/` | Imported images/files used by components | Files also in `public/` (duplicates should be avoided) |

---

## 4. Component Architecture

### Component Categories

#### UI Components (`src/components/ui/`)
Primitive, highly reusable atoms.

| Component | Purpose |
|---|---|
| `Button` | CTA links and form submit buttons. Accepts `to`, `variant`, `size` |
| `Container` | Max-width centered wrapper. Accepts `size` prop (`sm`, `md`, `lg`, `full`) |
| `Section` | Full-width section with padding and background. Accepts `background`, `containerSize`, `id` |
| `SectionHeader` | Consistent heading + description block with optional badge |
| `Badge` | Small label/tag (e.g. "About", "What We Do") |

#### Layout Components (`src/components/layout/`)
Persistent chrome rendered on every page.

| Component | Purpose |
|---|---|
| `Navbar` | Sticky header with blur-on-scroll, desktop nav links, mobile hamburger menu |
| `Footer` | Dark footer with company info, link columns, social icons, legal links |

#### Common Components (`src/components/common/`)
Cross-cutting utilities.

| Component | Purpose |
|---|---|
| `SEO` | Manages `<title>`, meta tags, OG tags, JSON-LD schema. Returns `null` |
| `SkipLink` | Accessible skip-to-content link (hidden, visible on focus) |
| `StructuredData` | Injects Organization + Website JSON-LD schemas |

#### Section Components (`src/components/sections/`)
Large self-contained sections used on the Home page.

| Component | Used on |
|---|---|
| `Hero` | Home |
| `TrustMetrics` | Home |
| `Workflow` | Home |
| `Services` | Home |
| `Industries` | Home |
| `TrustBadges` | Home |
| `Testimonials` | Home |
| `FinalCTA` | Home |

#### Blog Components (`src/components/blog/`)
Blog-specific reusable parts.

| Component | Purpose |
|---|---|
| `BlogCard` | Blog listing card (category, title, excerpt, date) |
| `Breadcrumb` | Breadcrumb navigation with aria-label |
| `TableOfContents` | Sticky sidebar TOC (h2/h3 only) |
| `RelatedPosts` | Related articles grid (excludes current slug) |

### Naming Conventions

- **Files:** PascalCase (e.g., `Navbar.jsx`, `useScrollPosition.js`)
- **Exports:** Default exports only for components, named exports for utilities and data
- **Barrel files:** Every component category has an `index.js` re-exporting all components as named exports

### Barrel Export Pattern

```js
// src/components/ui/index.js
export { default as Container } from "./Container";
export { default as Button } from "./Button";
export { default as Badge } from "./Badge";
export { default as Section } from "./Section";
export { default as SectionHeader } from "./SectionHeader";
```

### Import Pattern

```jsx
// Import from barrel files (not individual files)
import { Container, Badge, Button, Section } from "../components/ui";
import { SEO } from "../components/common";
import { fadeUp, staggerContainer } from "../utils/animations";
```

### Component Structure Rules

- One component per file
- Default export only
- Keep components under 200 lines; extract sub-components into separate files if needed
- Use `cn()` utility for conditional class merging
- All animations should use Framer Motion variants from `src/utils/animations.js`

---

## 5. Page System

### Routing Architecture

All routes are defined in `src/routes/index.jsx` using React Router v7's `createBrowserRouter`. Every page is lazy-loaded with `React.lazy()` and wrapped in a `Suspense` fallback.

```jsx
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
// ... all 12 pages
```

### Route Table

| Route | Page Component | Lazy-loaded |
|---|---|---|
| `/` | `Home.jsx` | Yes |
| `/about` | `About.jsx` | Yes |
| `/services` | `Services.jsx` | Yes |
| `/industries` | `Industries.jsx` | Yes |
| `/why-us` | `WhyUs.jsx` | Yes |
| `/case-studies` | `CaseStudies.jsx` | Yes |
| `/blog` | `Blog.jsx` | Yes |
| `/blog/:slug` | `BlogPost.jsx` | Yes |
| `/contact` | `Contact.jsx` | Yes |
| `/privacy` | `Privacy.jsx` | Yes |
| `/terms` | `Terms.jsx` | Yes |
| `*` | `NotFound.jsx` | Yes |

### How to Add a New Page

1. Create the page file in `src/pages/` (e.g., `src/pages/Pricing.jsx`)
2. Follow the standard page pattern:

```jsx
import { motion } from "framer-motion";
import { SEO } from "../components/common";
import { Container, Badge, Button, Section } from "../components/ui";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing"
        description="Marth Systems pricing..."
        canonical="https://marth.systems/pricing"
      />
      {/* Page content */}
    </>
  );
}
```

3. Add a lazy import in `src/routes/index.jsx`:

```jsx
const Pricing = lazy(() => import("../pages/Pricing"));
```

4. Add the route entry:

```jsx
{ path: "pricing", element: wrap(Pricing) },
```

5. Add links in `src/data/navigation.js` (navbar or footer)

### Dynamic Routes

Blog posts use a dynamic slug route: `/blog/:slug`. The `BlogPost.jsx` component reads the slug from `useParams()` and looks it up in the blog data.

### Hash Link Navigation

The site supports hash-based anchor navigation (e.g., `/services#healthcare`, `/industries#healthcare-clinics`). The `MainLayout.jsx` includes a retry-based scroll handler that waits up to 3 seconds for the target element to mount.

```jsx
// MainLayout.jsx — hash scroll handler
useEffect(() => {
  if (!hash) return;
  const retry = setInterval(() => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      clearInterval(retry);
    }
  }, 100);
  setTimeout(() => clearInterval(retry), 3000);
}, [pathname, hash]);
```

Target elements must have an `id` attribute and `scroll-mt-24` class for navbar offset.

---

## 6. Blog System (MDX)

### Architecture

Blog posts are stored as `.mdx` files in `src/content/blog/` but are treated as **raw Markdown**, not compiled MDX. The Vite glob import uses `query: "?raw"` to load file contents as plain strings, which are then rendered by `react-markdown`.

### Blog Post Metadata

Blog post metadata is defined in `src/data/blog.js` (NOT in frontmatter). Each post entry:

```js
{
  slug: "healthcare-credentialing-best-practices",
  title: "Healthcare Credentialing Best Practices for Modern Medical Practices",
  excerpt: "A practical guide to healthcare credentialing...",
  date: "2026-06-08",
  author: "Marth Systems",
  category: "Healthcare Operations",
  tags: ["healthcare", "credentialing", "compliance"],
  readTime: "8 min read",
}
```

### Adding a New Blog Post

1. Add an entry to `src/data/blog.js` with the correct slug
2. Create the content file at `src/content/blog/{slug}.mdx`
3. The first line of the MDX file must be `---` (frontmatter delimiter) — it gets stripped by `stripFrontmatter()`. All actual metadata lives in `blog.js`.

### MDX Content Structure

```mdx
---
<!-- Frontmatter is stripped but must be present (even if empty) -->

Blog content goes here. Use standard Markdown:

## Section Heading

Paragraph text with **bold** and *italic*.

### Sub-section

- List item 1
- List item 2

> Blockquote for emphasis.

[Link text](https://example.com)
```

### Blog Components

- **`BlogCard`** — Used on `/blog` listing page. Shows category pill, title, excerpt, read time, date
- **`TableOfContents`** — Sticky sidebar on `/blog/:slug`. Parses h2/h3 from markdown content
- **`RelatedPosts`** — Shows 3 most recent posts (excluding current). Currently ordered by date, not category relevance
- **`Breadcrumb`** — Blog > Post Title breadcrumb navigation

### Blog Post SEO

Each blog post automatically generates:
- Page title: `{post.title} — Marth Systems`
- Meta description from `post.excerpt`
- Canonical URL: `https://marth.systems/blog/{slug}`
- Open Graph tags
- Article JSON-LD schema
- Breadcrumb JSON-LD schema

---

## 7. SEO System

### Meta Tag Management

All meta tags are managed client-side by the `SEO` component (`src/components/common/SEO.jsx`). It uses a custom solution (not `react-helmet-async`) that directly manipulates `document.head`.

### SEO Component Usage

```jsx
<SEO
  title="About"                       // Appended with " — Marth Systems"
  description="Company description"   // Falls back to SITE_CONFIG.description
  image="/og/about.png"               // Path relative to domain root
  canonical="https://marth.systems/about"
  article={{                          // Optional: for blog posts
    publishedTime: "2026-06-08",
    author: "Marth Systems",
    tags: ["healthcare", "bpo"],
  }}
  breadcrumbs={[                      // Optional: for breadcrumb schema
    { name: "Blog", path: "/blog" },
    { name: "Post Title", path: "/blog/post-slug" },
  ]}
/>
```

### What SEO Manages

| Property | Source |
|---|---|
| `<title>` | `{title} — Marth Systems` or default |
| `meta[name="description"]` | `description` prop or site default |
| `meta[name="keywords"]` | `keywords` prop (comma-joined array) |
| `meta[property="og:title"]` | Same as `<title>` |
| `meta[property="og:description"]` | Same as description |
| `meta[property="og:url"]` | `canonical` prop or current URL |
| `meta[property="og:image"]` | `image` prop with base URL prepended |
| `meta[property="og:type"]` | `"article"` if article prop provided, else `"website"` |
| `meta[name="twitter:card"]` | `"summary_large_image"` |
| `meta[name="twitter:title"]` | Same as `<title>` |
| `meta[name="twitter:description"]` | Same as description |
| `link[rel="canonical"]` | `canonical` prop |
| `script[type="application/ld+json"]` | BreadcrumbList + Article schemas (if provided) |

### Structured Data (JSON-LD)

Three types of structured data are injected:

1. **Organization** — Company name, URL, logo, address, phone, social links
2. **WebSite** — Site name and URL
3. **BreadcrumbList** — Per-page breadcrumb navigation
4. **Article** — Per-blog-post article metadata (headline, description, publish date, author)

All schemas are generated by `src/utils/seo.js`.

### Sitemap

Automatically generated at build time by a custom Vite plugin in `vite.config.js`. Written to `dist/sitemap.xml`. Includes:

- All static routes (/, /about, /services, /industries, /why-us, /case-studies, /blog, /contact, /privacy, /terms)
- All blog posts with `lastmod` dates

### Robots.txt

Located at `public/robots.txt`. Allows all crawlers and points to the sitemap.

```
User-agent: *
Allow: /

Sitemap: https://marth.systems/sitemap.xml
```

### Adding OG Images

1. Create a 1200×630 PNG image
2. Place it in `public/og/` (e.g., `public/og/pricing.png`)
3. Reference it in the page's SEO component: `image="/og/pricing.png"`

---

## 8. Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `brand-blue` | `#2563EB` | Primary actions, links, accents |
| `brand-blue-accent` | `#3B82F6` | Hover states |
| `brand-navy` | `#0F172A` | Primary text, dark backgrounds |
| `brand-emerald` | `#10B981` | Success states, positive metrics |
| `surface` | `#FFFFFF` | Main background |
| `surface-alt` | `#F8FAFC` | Alternate section backgrounds |
| `surface-blue-soft` | `#EFF6FF` | Hero/header gradients |
| `ink` | `#0F172A` | Primary text |
| `ink-secondary` | `#475569` | Body text |
| `ink-muted` | `#64748B` | Secondary/muted text |
| `border` | `#E2E8F0` | Borders, dividers |

Using Tailwind: `text-brand-blue`, `bg-surface-alt`, `text-ink-secondary`, `border-border`, etc.

### Typography

| Style | Size | Weight | Line Height |
|---|---|---|---|
| Hero heading | 56px | 700 | 1.1 |
| Section heading | 40px | 600 | 1.2 |
| Subheading | 22px | 400 | 1.4 |
| Body | 18px | 400 | 1.6 |
| Small | 14px | 400 | 1.5 |

Font: **Inter** (loaded from Google Fonts via `<link>` in `index.html`).

Tailwind classes: `text-hero`, `text-section-heading`, `text-subheading`, `text-body`, `text-sm`.

### Spacing System

| Token | Value | Usage |
|---|---|---|
| `section-padding` | `py-28` (desktop), `py-20` (tablet), `py-16` (mobile) | Section vertical padding |
| `max-w-container` | `80rem` (1280px) | Max content width |
| Container padding | `px-6`, `px-8`, `px-10` (responsive) |

The `section-padding` class is defined in `src/index.css`.

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `rounded-card` | `1.5rem` (24px) | Cards, sections |
| `rounded-button` | `0.75rem` (12px) | Buttons |

### Shadows

| Token | Value |
|---|---|
| `shadow-card` | `0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)` |
| `shadow-card-hover` | `0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04)` |
| `shadow-nav` | `0 1px 3px 0 rgb(0 0 0 / 0.04)` |

---

## 9. Animation System

### Philosophy

Animations should feel **calm, professional, smooth, and elegant**. Never use bouncing effects, neon glow, exaggerated motion, or childish interactions.

### Framer Motion Variants

All animation variants are defined in `src/utils/animations.js`:

```js
export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});
```

### Usage Pattern

```jsx
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/animations";

// Single element fade-in
<motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
  {children}
</motion.div>

// Staggered children
<motion.div variants={staggerContainer(0.1, 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
  {items.map(item => (
    <motion.div key={item.id} variants={fadeUp}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Animation Rules

- Use `viewport={{ once: true, margin: "-60px" }}` on all scroll-triggered animations to prevent re-triggering
- Duration: 0.3–0.6s (calm, not rushed)
- Easing: `easeOut` for most entrances
- Stagger delays: 0.04–0.12s between items
- Do NOT animate: layout shifts, large elements moving significant distances, elements entering from off-screen (prefer fade-up)

### Performance Notes

- Framer Motion uses hardware-accelerated transforms (`translate`, `scale`, `opacity`) — safe for performance
- `viewport={{ once: true }}` ensures animations fire once and don't waste resources
- Animations are disabled on `prefers-reduced-motion` via Framer Motion's built-in support

---

## 10. Responsiveness Guidelines

### Breakpoints

Tailwind's default breakpoints (mobile-first):

| Breakpoint | Min Width | Target |
|---|---|---|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Ultra-wide |

### Mobile-First Approach

All CSS should be written mobile-first:

```jsx
// Correct: mobile-first
className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"

// Wrong: Desktop-first
// className="grid gap-6 grid-cols-3 max-lg:grid-cols-2"
```

### Responsive Typography

```jsx
// Hero heading: fluid from 36px on mobile to 56px on desktop
<h1 className="text-4xl sm:text-5xl lg:text-hero">Heading</h1>

// Section heading: fluid from 24px to 40px
<h2 className="text-2xl sm:text-3xl lg:text-section-heading">Section Title</h2>
```

### Grid Patterns

- **3-column grids** → stack on mobile, 2 columns on tablet, 3 on desktop: `grid gap-6 sm:grid-cols-2 lg:grid-cols-3`
- **2-column layouts** → stack on mobile, side-by-side on tablet+: `grid gap-10 lg:grid-cols-5` (with col-span)
- **Single column content** → always center with max-width: `mx-auto max-w-3xl`

### Navbar

- Desktop (>1024px): horizontal nav links + CTA button
- Mobile (<1024px): hamburger menu → full-width slide-in panel
- Sticky with backdrop blur on scroll

---

## 11. Content Management

### Where Content Lives

All text content is stored in **data files** (`src/data/`), not in components. This separation means:

- Content can be edited without touching component code
- A future CMS can replace data files while components remain unchanged
- Content is easy to review and update

### Content File Map

| File | Content |
|---|---|
| `src/data/navigation.js` | Navbar links, footer links, contact info, social links |
| `src/data/services.js` | Service categories with descriptions, services list, highlights |
| `src/data/industries.js` | Industry definitions with pain points, solutions, benefits |
| `src/data/whyUs.js` | Advantages, philosophy/process steps |
| `src/data/caseStudies.js` | Case study entries with challenges, solutions, outcomes |
| `src/data/testimonials.js` | Derived from case studies + trust badges |
| `src/data/blog.js` | Blog post metadata (titles, excerpts, dates, tags) |

### Editing Navigation

To add/remove/edit navbar or footer links, edit `src/data/navigation.js`:

```js
export const navLinks = [
  { label: "Services", path: "/services" },
  // Add new link:
  { label: "Pricing", path: "/pricing" },
];
```

### Hash Anchor Links

For links to specific sections on a page, use hash anchors:

```js
{ label: "Healthcare Operations", path: "/services#healthcare" }
```

The target element must have a matching `id`:
```jsx
<motion.div id="healthcare" className="scroll-mt-24">
```

### Editing the Footer

The Footer component at `src/components/layout/Footer.jsx` renders:
- Company branding + description (hardcoded)
- Link columns (driven by `footerLinks` in `navigation.js`)
- Contact info (driven by `contactInfo` in `navigation.js`)
- Social icons (driven by `socialLinks` in `navigation.js`)
- Legal links (driven by `footerLinks.resources`)

---

## 12. Image + Asset Management

### Public Directory

All files in `public/` are served at the root URL:

| File | URL | Purpose |
|---|---|---|
| `favicon.ico` | `/favicon.ico` | Browser tab icon |
| `favicon.svg` | `/favicon.svg` | SVG favicon (modern browsers) |
| `favicon-96x96.png` | `/favicon-96x96.png` | PNG favicon |
| `apple-touch-icon.png` | `/apple-touch-icon.png` | iOS home screen icon |
| `site.webmanifest` | `/site.webmanifest` | PWA manifest |
| `robots.txt` | `/robots.txt` | Crawler rules |
| `ads.txt` | `/ads.txt` | AdSense authorization |
| `og/home.png` | `/og/home.png` | Homepage OG image |
| `og/about.png` | `/og/about.png` | About page OG image |
| (etc.) | | |

### OG Image Requirements

- **Format:** PNG
- **Dimensions:** 1200×630 pixels (OG standard)
- **Location:** `public/og/{page-name}.png`
- **Referenced in:** Each page's `<SEO image="/og/{page-name}.png" />`

### Favicon Setup

The site uses multiple favicon formats for broad compatibility:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

### Image Optimization Rules

- All images (especially OG images) should be compressed (PNG quant or JPEG)
- Keep OG images under 200KB each
- Hero image was removed; the site uses CSS-generated visuals instead
- Avoid importing large images through Vite (they become part of the JS bundle)

---

## 13. Deployment Guide

### Prerequisites

- Node.js 18+
- A Vercel account
- The project's GitHub repository

### Build Command

```bash
npm run build
```

This produces a `dist/` directory with:
- `index.html` (entry point)
- `assets/` (hashed JS/CSS bundles)
- `sitemap.xml` (auto-generated)
- All files from `public/` copied to root

### Local Development

```bash
npm run dev
# Starts at http://localhost:5173
```

### Vercel Deployment

The `vercel.json` config handles SPA routing:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This catch-all rewrite ensures all routes (including `/blog/post-slug`, `/services#healthcare`, etc.) serve `index.html` and let React Router handle the client-side routing.

#### Static Asset Caching

```json
{
  "source": "/(.*)\\.(?:(?:png|jpg|jpeg|gif|webp|svg|ico|xml|txt))$",
  "headers": [
    { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
  ]
}
```

### Deployment Steps

1. Push to the `main` branch (or merge a PR)
2. Vercel auto-deploys from the connected GitHub repository
3. Verify deployment at https://marth.systems
4. Check the sitemap at https://marth.systems/sitemap.xml
5. Check `robots.txt` at https://marth.systems/robots.txt

### Environment Variables

Only one environment variable is needed:

| Variable | Purpose |
|---|---|
| `VITE_WEB3FORMS_KEY` | Web3Forms API key for contact form submissions |

Create a `.env` file in the project root:

```
VITE_WEB3FORMS_KEY=your_actual_key_here
```

**Important:** The `.env` file is NOT committed to Git (it's in `.gitignore`). Add it to Vercel's Environment Variables section in the project dashboard.

---

## 14. AdSense + Indexing

### AdSense Setup

1. The site includes the AdSense meta tag in `index.html`:
   ```html
   <meta name="google-adsense-account" content="ca-pub-8684958562988579" />
   ```
2. The `ads.txt` file at `public/ads.txt` authorizes the AdSense account:
   ```
   google.com, pub-8684958562988579, DIRECT, f08c47fec0942fa0
   ```

### Google Search Console

1. Add the domain property: `https://marth.systems`
2. DNS verification is handled through the domain registrar
3. Submit the sitemap URL: `https://marth.systems/sitemap.xml`
4. Monitor indexing status in the Search Console dashboard

### Indexing Checklist

- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] Sitemap submitted to Google Search Console
- [ ] All pages return HTTP 200 (not 404 for SPA routes)
- [ ] No `noindex` directives on public pages
- [ ] OG images load correctly in social previews
- [ ] Meta descriptions present on all pages

---

## 15. Performance Guidelines

### Current Performance Status

The site is optimized for high Lighthouse scores:

- **Route splitting:** Every page is a separate lazy-loaded chunk
- **Code splitting:** Blog, privacy, and terms pages are independent bundles
- **Static assets:** Cached aggressively (1 year, immutable) on Vercel's CDN
- **Minimal dependencies:** Only React, Router, Framer Motion, and Markdown renderer
- **Fonts:** Inter loaded from Google Fonts with `preconnect` hints

### Optimization Rules

1. **Never import large libraries** — each additional KB affects load time
2. **Use route-level code splitting** — always use `React.lazy()` for new pages
3. **Avoid large images in `src/assets/`** — they become part of the JS bundle
4. **Use `loading="lazy"`** on images below the fold
5. **Keep animations GPU-accelerated** — only animate `transform` and `opacity`
6. **Avoid layout shifts** — set explicit dimensions on images and embeds
7. **Monitor bundle size** — run `npm run build` and check the chunk sizes

### Bundle Size Budget

| Chunk Type | Target Max Size |
|---|---|
| Main entry (`index-*.js`) | < 500 KB |
| Home page | < 50 KB |
| Blog listing | < 100 KB |
| Blog post (with MD) | < 200 KB |
| All other pages | < 15 KB each |

---

## 16. Accessibility Guidelines

### Standards

The site follows WCAG 2.1 AA guidelines.

### What's Implemented

- **Skip link** — hidden link at top of page to skip to main content
- **Semantic HTML** — `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<header>` used appropriately
- **Heading hierarchy** — `h1` → `h2` → `h3` in correct order on all pages
- **ARIA labels** — navbar, mobile menu, social links, form fields
- **Icons** — all decorative icons use `aria-hidden="true"`
- **Form labels** — all form inputs have `<label>` with `htmlFor`
- **Focus states** — visible focus rings on all interactive elements
- **Color contrast** — all text/background combinations meet AA contrast ratios
- **Error announcements** — form errors use `role="alert"`
- **Reduced motion** — Framer Motion respects `prefers-reduced-motion`

### Accessibility Checklist for New Components

- [ ] All interactive elements are keyboard-focusable
- [ ] All images have descriptive `alt` text (or `alt=""` for decorative)
- [ ] Custom components have appropriate ARIA roles
- [ ] Color is not the only means of conveying information
- [ ] Touch targets are at least 44×44px on mobile
- [ ] Form inputs have visible labels (not just placeholders)

---

## 17. Maintenance Workflow

### Weekly Tasks

- Check Google Search Console for indexing errors
- Review contact form submissions (Web3Forms dashboard)
- Update blog posts if needed
- Monitor Vercel deployment logs

### Monthly Tasks

- Review and update service/industry content
- Check for dependency updates (`npm outdated`)
- Review Lighthouse scores
- Update OG images if branding changes

### How to Make Changes Safely

1. **Content changes only:** Edit the relevant file in `src/data/` and rebuild
2. **Component changes:** Edit the component, verify with `npm run build`, test in dev server
3. **New pages:** Follow the [How to Add a New Page](#how-to-add-a-new-page) workflow
4. **New blog posts:** Follow the [Adding a New Blog Post](#adding-a-new-blog-post) workflow

### Git Workflow

```bash
# Create a feature branch
git checkout -b feature/new-blog-post

# Make changes and test
npm run build

# Commit
git add .
git commit -m "Add blog post: Healthcare Credentialing Best Practices"

# Push and create PR
git push origin feature/new-blog-post
```

### Debugging Strategy

| Symptom | Likely Cause | Check |
|---|---|---|
| Page shows blank | Route not defined or lazy import failed | `src/routes/index.jsx` |
| Hash link doesn't scroll | Target element not mounted yet / wrong ID | `MainLayout.jsx` scroll handler, element `id` |
| Contact form doesn't submit | `VITE_WEB3FORMS_KEY` not set | `.env` file, Vercel env vars |
| Animation not playing | `viewport={{ once: true }}` already triggered | Refresh page, clear cache |
| Build fails | Unused import, syntax error, missing export | `npm run build` output |
| Wrong OG image on social | Cache, fallback to default | Check page's `<SEO image="..." />` |
| Styling not applied | Tailwind class not in content paths | `tailwind.config.js` content array |

---

## 18. Future Scaling Recommendations

### CMS Integration

If the site grows beyond ~20 pages or requires non-developer content editing:

1. Add a headless CMS (Sanity, Contentful, Strapi)
2. Replace `src/data/` files with API calls in a data-fetching utility
3. Components stay unchanged — they consume the same data shapes

### Multilingual Support

1. Install `react-intl` or `next-intl`
2. Create translation files for each language
3. Add a language switcher to the navbar
4. Update SEO to include `hreflang` tags

### Authentication (Client Portal)

1. Add a route group with a layout wrapper
2. Use Vercel Edge Middleware or a lightweight auth solution (Auth0, Clerk)
3. Protected routes redirect unauthenticated users to `/login`

### Analytics

The site currently has no analytics. Recommended additions:

- **Vercel Analytics** — simple, privacy-friendly, first-party
- **Google Analytics 4** — for detailed traffic analysis, but requires cookie consent

### Blog Enhancements

- Add **reading time estimation** (currently hardcoded in data)
- Add **featured images** per post (thread through blog data → BlogCard → OG image)
- Add **category pages** (`/blog/category/healthcare`)
- Add **search** (client-side search with Fuse.js)
- Add **pagination** for blog listing

### Performance Monitoring

- Set up Lighthouse CI for automated performance regression testing
- Use Vercel Analytics to monitor real-user metrics (CLS, LCP, INP)
- Regularly audit bundle size with `vite-bundle-visualizer`

---

## 19. AI Development Guidelines

### Architecture Constraints

- **No server-side rendering** — the site is a pure client-side SPA. Do not add Next.js, Gatsby, or any SSR framework without a full project rewrite
- **No backend** — all content is compile-time static data. Do not add databases, REST APIs, or authentication
- **No CSS-in-JS** — use Tailwind utility classes only. Do not add styled-components, Emotion, or CSS modules
- **No state management library** — React's built-in state + context is sufficient for this site's complexity

### Design Consistency Rules

- Always use colors from the Tailwind theme (`text-brand-blue`, `bg-surface-alt`, etc.) — never hardcode hex values
- Always use spacing tokens (`section-padding`, `px-6`, `gap-6`, etc.) — never arbitrary values
- Always use the animation variants from `src/utils/animations.js` — never write inline Framer Motion variants
- Always use the `cn()` utility for conditional class merging — never template literals

### Naming Standards

| Entity | Convention | Example |
|---|---|---|
| Component files | PascalCase | `Navbar.jsx`, `TrustMetrics.jsx` |
| Data files | camelCase | `navigation.js`, `caseStudies.js` |
| Utility files | camelCase | `seo.js`, `animations.js` |
| Hook files | camelCase with `use` prefix | `useScrollPosition.js` |
| CSS classes | Tailwind utilities only | — |
| Image files | kebab-case | `web-app-manifest-192x192.png` |
| Blog slugs | kebab-case | `healthcare-credentialing-best-practices` |

### Prohibited Patterns

- ❌ No `console.log` in production code
- ❌ No inline styles (`style={{}}`) — use Tailwind classes
- ❌ No hardcoded text in components — text belongs in `src/data/` files
- ❌ No duplicate icon imports — import only what's used
- ❌ No index as React `key` — use stable identifiers
- ❌ No large component files (>300 lines) — extract sub-components
- ❌ No direct DOM manipulation outside `useEffect`
- ❌ No class components — use functional components with hooks

### Reusable Component Standards

- Every component must have a single responsibility
- Props should use primitive types (string, number, boolean) or simple objects
- Components should not import data directly from `src/data/` — data should be passed as props
- Use the barrel import pattern (`import { Button, Container } from "../components/ui"`)
- No default exports in barrel files — use named re-exports
- Each component directory must have an `index.js` barrel file

### Page Creation Checklist

When creating a new page, verify:

- [ ] Lazy import added in `src/routes/index.jsx`
- [ ] Route entry added in the router config
- [ ] `<SEO>` component with `title`, `description`, `canonical` props
- [ ] OG image created at `public/og/{page-name}.png`
- [ ] Correct heading hierarchy (`h1` → `h2` → `h3`)
- [ ] All `.map()` calls have stable `key` props
- [ ] All `<img>` tags have descriptive `alt` text
- [ ] Navigation updated if the page should be discoverable
- [ ] Sitemap updated (add to `staticRoutes` in `vite.config.js`)

---

## 20. Common Issues + Fixes

### Vite Issues

**Issue:** `"Module not found"` during build
**Fix:** Check the import path. All paths are relative (no `@/` alias). Case-sensitive on Linux/CI.

**Issue:** Hot module replacement not working
**Fix:** Check the file extension — Vite only watches `.jsx`, `.js`, `.tsx`, `.ts` files by default.

### React Router Issues

**Issue:** 404 on page refresh in production
**Fix:** Ensure `vercel.json` has the catch-all rewrite:
```json
{ "source": "/(.*)", "destination": "/index.html" }
```

**Issue:** Hash links not scrolling
**Fix:** Check that:
1. The target element has an `id` attribute
2. The link path matches exactly (e.g., `/services#healthcare`)
3. The element is mounted when the scroll attempt fires (the retry handler in `MainLayout.jsx` waits up to 3 seconds)

### Tailwind Issues

**Issue:** Custom class not applying (e.g., `text-brand-blue` doesn't work)
**Fix:** Verify the color is defined in `tailwind.config.js`'s `theme.extend.colors` and that the file path is in the `content` array.

**Issue:** Class used but not generated in production build
**Fix:** Tailwind purges unused classes. The class must exist as a complete string in a file listed in `content`. Dynamic class construction (e.g., `` `text-${color}` ``) will be purged — use full class names or `cn()`.

### MDX Issues

**Issue:** Blog post content not showing
**Fix:** Check that:
1. The slug in `blog.js` matches the filename in `src/content/blog/`
2. The glob pattern in `utils/blog.js` matches the correct directory
3. The `.mdx` file has valid content after the frontmatter delimiter

**Issue:** Frontmatter leaking into rendered content
**Fix:** The `stripFrontmatter()` function in `utils/blog.js` removes content between `---` delimiters. Ensure the regex still matches the file's content.

### SEO Issues

**Issue:** Wrong page title in search results
**Fix:** Check the `<SEO title="..." />` prop on the page. The title format is `{title} — Marth Systems`.

**Issue:** OG image not showing in social previews
**Fix:** Use the Facebook Sharing Debugger or Twitter Card Validator to check. Common issues:
- Image path needs full URL (starts with `/og/...`)
- Image is too large (>300KB)
- Image dimensions are not 1200×630

**Issue:** Sitemap not including new pages
**Fix:** Add the page to the `staticRoutes` array in `vite.config.js`, then rebuild.

### Contact Form Issues

**Issue:** Form submission fails silently
**Fix:** Check that:
1. `.env` file exists with `VITE_WEB3FORMS_KEY`
2. The key is valid (test at web3forms.com)
3. If deploying, the env var is set in Vercel's dashboard
4. Check browser console for CORS or network errors

**Issue:** Form shows "success" but no email received
**Fix:** Verify the Web3Forms dashboard for submission logs. The key might be pointing to a different email address.

### Vercel Deployment Issues

**Issue:** Deployment fails
**Fix:** Check the build logs. Common causes:
- Missing `.env` variables
- Build command fails
- ESLint errors (run `npm run lint` locally)

**Issue:** Site deploys but shows blank page
**Fix:** Check browser console for JavaScript errors. Common causes:
- Missing dependency
- Syntax error not caught by build
- Runtime error in a lazy-loaded component

---

*Document generated for Marth Systems — https://marth.systems*
*Last updated: 2026*
