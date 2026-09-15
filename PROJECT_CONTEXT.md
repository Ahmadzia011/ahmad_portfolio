# Project Context

## 1. Project Summary

This repository is a personal portfolio and agency-style website for AhmadDevs built with Next.js 16 and React 19.

It is designed to showcase services, featured work, testimonials, and contact information in a high-polish landing page format rather than a product dashboard or SaaS app.

The likely audience is potential clients, founders, or hiring managers who want to evaluate the developer's visual style, motion work, and frontend execution.

The main user flow is:

visitor lands on the homepage -> scrolls through hero, services, projects, testimonials, and contact sections -> opens the mobile nav or uses anchored links -> reaches out by email or contact form.

There is also a separate `/shop` route, but it is a standalone experimental catalog-style page with mock product data rather than a real store.

## 2. Core Features

### Responsive portfolio homepage

Users see a single-page marketing homepage with a sticky navbar, animated hero, service storytelling, project gallery, testimonials, and a contact section.

Technical notes:

- The homepage is composed from section components under `src/app/homepage/`.
- The landing page root (`src/app/page.tsx`) renders the homepage dashboard.
- Layout styling is handled with Tailwind utility classes and custom theme tokens in `src/app/globals.css`.

Important files:

- `src/app/page.tsx`
- `src/app/homepage/page.tsx`
- `src/app/homepage/heroSec.tsx`
- `src/app/homepage/servicesSec.tsx`
- `src/app/homepage/featuredProjectsSec.tsx`
- `src/app/homepage/testimonialsSec.tsx`
- `src/components/ui/Navbar.tsx`
- `src/components/ui/Footer.tsx`

### Sticky navigation with mobile drawer

Users can jump to in-page sections with anchor links on desktop and a collapsible mobile menu on smaller screens.

Technical notes:

- The navbar is a client component because it manages open/closed state.
- Links target section IDs such as `#hero-section`, `#services-section`, and `#contact-section`.
- Mobile navigation uses Framer Motion for enter/exit animation.

Important files:

- `src/components/ui/Navbar.tsx`

### Motion-heavy hero section

Users get a visually animated intro with floating 3D-style images, scroll-linked transforms, and a sticky composition.

Technical notes:

- `framer-motion` drives rotation, scale, drag constraints, and scroll-based transforms.
- `useMediaQuery` changes behavior on mobile vs desktop.
- Images are served from the local `public/` folder.

Important files:

- `src/app/homepage/heroSec.tsx`
- `src/lib/mediaQuery.tsx`
- `public/3dIcon.avif`
- `public/3dIcon2.avif`
- `public/headshot.jpeg`

### Scroll-driven services section

Users scroll through four service states and the content updates based on scroll progress.

Technical notes:

- Service data lives in `src/constants/dashboard.constants.ts`.
- Framer Motion `useScroll`, `useSpring`, and `useMotionValueEvent` determine the active step.
- This is a client-side interaction with no backend fetch.

Important files:

- `src/app/homepage/servicesSec.tsx`
- `src/constants/dashboard.constants.ts`

### Featured projects section

Users scroll into an animated featured projects grid with a clipped foreground panel and background text reveal.

Technical notes:

- Project cards are rendered from the `PROJECTS` constant.
- Scroll progress controls clip-path, blur, opacity, and translation.
- The section is fully data-driven from local constants and remote image URLs.

Important files:

- `src/app/homepage/featuredProjectsSec.tsx`
- `src/constants/dashboard.constants.ts`

### Testimonials carousel

Users can click previous and next buttons to cycle through testimonials in a circular card layout.

Technical notes:

- The carousel uses local React state only.
- Card placement is derived from array index math.
- There is no CMS or API-backed content source.

Important files:

- `src/app/homepage/testimonialsSec.tsx`
- `src/constants/dashboard.constants.ts`

### Contact section

Users can open an email link, view location info, and submit a contact form UI.

Technical notes:

- The form is client-side only and does not send data to an API, email service, or database.
- Submit just flips local UI state to show a success message and clears the in-memory form object.
- Social links are placeholders and are not wired to real profiles.

Important files:

- `src/app/homepage/contactSec.tsx`
- `src/components/ui/Footer.tsx`

### Experimental shop route

Users can visit `/shop` to see a mock catalog UI with category filtering and cart-style header treatment.

Technical notes:

- Products are hard-coded in the page file.
- Filtering is handled entirely in local component state.
- There is no checkout, cart persistence, or payment flow.

Important files:

- `src/app/shop/page.tsx`

### Reusable UI primitives and utilities

The repository includes a small set of reusable shared utilities.

Technical notes:

- `src/components/ui/button.tsx` wraps `@base-ui/react/button` with class-variance-authority variants.
- `lib/utils.ts` provides the `cn` class name helper.
- `src/lib/lenis.tsx` adds smooth scrolling behavior globally.
- `src/lib/mediaQuery.tsx` provides a browser media query hook for responsive motion logic.

Important files:

- `components/ui/button.tsx`
- `lib/utils.ts`
- `src/lib/lenis.tsx`
- `src/lib/mediaQuery.tsx`

## 3. User Journey

### Primary visitor flow

1. Visitor opens `/`.
2. `src/app/page.tsx` renders the homepage dashboard.
3. The sticky navbar offers anchor links to the major sections.
4. The hero introduces the developer brand and visual style.
5. The services section explains the kinds of work offered.
6. The featured projects section presents portfolio examples.
7. The testimonials section adds social proof.
8. The contact/footer area provides email access and a form UI.

### Mobile visitor flow

1. Visitor opens the site on a small screen.
2. The navbar collapses into a hamburger menu.
3. Section interactions remain intact, but motion ranges and scale values adapt via `useMediaQuery`.
4. The contact form and CTA controls remain touch-friendly.

### Secondary route flow

1. Visitor opens `/shop`.
2. They browse the mock catalog cards.
3. They filter products by category.
4. There is no real add-to-cart or checkout flow.

## 4. Technical Architecture

### Frontend

- Framework: Next.js 16 App Router
- React version: React 19
- Rendering pattern: mostly client-driven sections composed inside an App Router shell
- Styling: Tailwind CSS v4 with global theme tokens in `src/app/globals.css`
- Animation and interaction: Framer Motion, Lenis, react-fast-marquee
- Icons: lucide-react
- UI primitives: Base UI button wrapper and shared `cn` utility
- Fonts: `Inter` and `Archivo` from `next/font/google`, plus a Google Fonts CSS import for `Bitcount Grid Double`

Deployment and build configuration:

- `next.config.ts` is currently empty.
- Scripts are limited to `dev`, `build`, `start`, and `lint` in `package.json`.
- There is no custom hosting or environment configuration committed in the repo.

Routing structure:

- `/` is defined by `src/app/page.tsx`
- the main homepage content lives in `src/app/homepage/page.tsx`
- `/shop` is defined by `src/app/shop/page.tsx`

State management:

- Local `useState` for mobile nav, testimonial carousel, contact form, and shop filters
- Framer Motion hooks for scroll progress and animated transitions
- A custom `useMediaQuery` hook for viewport-aware behavior

Important components:

- `src/components/ui/Navbar.tsx`
- `src/components/ui/Footer.tsx`
- `src/app/homepage/heroSec.tsx`
- `src/app/homepage/servicesSec.tsx`
- `src/app/homepage/featuredProjectsSec.tsx`
- `src/app/homepage/testimonialsSec.tsx`
- `src/app/homepage/contactSec.tsx`
- `src/app/shop/page.tsx`

### Backend

There is no custom backend layer in this repository.

What is not present:

- no `src/app/api` route handlers
- no server actions
- no database client or ORM
- no authentication system
- no payment integration
- no email sending service
- no AI or LLM integration

The application is effectively a frontend marketing site with one extra static route.

### Database

There is no database configured or referenced in the codebase.

What is not present:

- no Prisma
- no Drizzle
- no Supabase
- no MongoDB client
- no Postgres/MySQL connection layer

All displayed content is stored in local constants or inline arrays.

### External Services

The codebase uses a small number of external libraries and content sources, but not business integrations.

- Framer Motion for animation and scroll-linked UI
- Lenis for smooth scrolling
- React Fast Marquee for the animated contact divider
- lucide-react for icons
- Base UI for the shared button primitive
- Google Fonts via `next/font/google`
- Remote images from Framerusercontent and Unsplash in the testimonial and project data

What is not present:

- Stripe
- Clerk
- NextAuth
- Supabase auth
- OpenAI
- Gemini
- LangChain
- LangGraph
- vector search
- cloud file upload

## 5. Architecture / Data Flow

### Home page rendering flow

`src/app/page.tsx` -> `src/app/homepage/page.tsx` -> individual homepage sections.

The root layout loads global CSS, fonts, and the Lenis scrolling wrapper before the client sections render.

### Scroll-driven motion flow

Scroll position -> Framer Motion `useScroll` -> `useSpring` smoothing -> `useTransform` or `useMotionValueEvent` -> animated position, blur, clip-path, scale, or active section state.

This pattern appears in:

- `src/app/homepage/heroSec.tsx`
- `src/app/homepage/servicesSec.tsx`
- `src/app/homepage/featuredProjectsSec.tsx`

### Local interaction flow

User input -> React local state -> immediate UI update.

This pattern appears in:

- mobile menu open/close
- testimonial carousel next/prev
- contact form field edits and submit state
- shop category filtering

There is no server round trip for any of these flows.

### Content rendering flow

Local constant arrays -> `.map()` rendering -> repeated cards or sections.

This pattern appears in:

- `SECTIONS`
- `TESTIMONIALS`
- `PROJECTS`
- `/shop` product cards

### Contact flow

User enters data -> form submit handler -> local `submitted` state toggles -> message text changes.

There is no persistence, validation API, or email dispatch.

## 6. Interesting Engineering Decisions

### Decision: Client components are used only where interactivity is needed

What was implemented:

- `Navbar`, homepage sections, and `/shop` are client components because they rely on state, scroll hooks, or browser APIs.
- The root layout stays server-side and wraps the interactive shell.

Why it matters:

- This keeps the app aligned with App Router conventions and avoids marking the whole tree as client-only.

Where it exists:

- `src/app/layout.tsx`
- `src/app/homepage/page.tsx`
- `src/components/ui/Navbar.tsx`
- `src/app/shop/page.tsx`

### Decision: Scroll position drives the premium feel

What was implemented:

- The hero and featured projects sections react to scroll progress with transforms, blur, and clipping.
- The services section swaps content based on scroll position instead of click state.

Why it matters:

- The site feels more like a crafted portfolio experience than a standard brochure page.

Where it exists:

- `src/app/homepage/heroSec.tsx`
- `src/app/homepage/servicesSec.tsx`
- `src/app/homepage/featuredProjectsSec.tsx`

### Decision: Content is data-driven from local constants

What was implemented:

- Services, testimonials, and projects are stored in `src/constants/dashboard.constants.ts`.
- Sections map over those arrays rather than hardcoding repeated markup in multiple places.

Why it matters:

- It keeps the page structure easy to update and makes the portfolio examples reusable for marketing copy or future CMS migration.

Where it exists:

- `src/constants/dashboard.constants.ts`
- `src/app/homepage/servicesSec.tsx`
- `src/app/homepage/testimonialsSec.tsx`
- `src/app/homepage/featuredProjectsSec.tsx`

### Decision: Smooth scrolling is globally enabled with Lenis

What was implemented:

- `src/lib/lenis.tsx` initializes Lenis once in the app shell and destroys it on unmount.

Why it matters:

- It gives the site a more fluid, premium scroll feel and supports the motion-heavy sections.

Where it exists:

- `src/lib/lenis.tsx`
- `src/app/layout.tsx`

### Decision: Viewport-aware motion tuning

What was implemented:

- A custom `useMediaQuery` hook switches animation and layout logic between mobile and desktop.
- The featured projects section uses different transform ranges depending on viewport width.

Why it matters:

- The same motion design stays usable on small screens instead of being locked to desktop assumptions.

Where it exists:

- `src/lib/mediaQuery.tsx`
- `src/app/homepage/heroSec.tsx`
- `src/app/homepage/featuredProjectsSec.tsx`

### Decision: Reusable UI foundation exists even though the app is mostly bespoke

What was implemented:

- A Base UI button wrapper and `cn` helper are available for future extension.

Why it matters:

- The codebase can grow into more reusable component work without needing to rebuild the primitive layer.

Where it exists:

- `components/ui/button.tsx`
- `lib/utils.ts`

## Notes

- The repository also contains a few unused or experimental files that are not wired into the current homepage flow, including `src/app/homepage/prjectsSec.tsx` and `src/app/homepage/wordScrollSec.tsx`.
- The project metadata in `src/app/layout.tsx` is minimal, so if the site is meant to be published broadly, title and description are likely still a work in progress.
