# AhmadDevs Portfolio Website

A modern portfolio and agency-style website built with Next.js 16, React 19, Tailwind CSS, and Framer Motion.

## What Is Included

- Responsive landing page with hero, services, featured projects, testimonials, and contact sections
- Sticky navigation with a mobile menu
- Scroll-based animations and smooth scrolling
- A separate experimental `/shop` route with mock catalog filtering
- Shared UI primitives and utility helpers

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis
- lucide-react
- react-fast-marquee

## Project Structure

- `src/app/page.tsx` routes `/` to the homepage experience
- `src/app/homepage/` contains the main landing page sections
- `src/app/shop/page.tsx` contains the standalone shop demo
- `src/components/ui/` contains shared UI pieces like the navbar, footer, and button primitive
- `src/constants/` contains the data used by the homepage sections

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes

- This repository is primarily a frontend portfolio site.
- The contact form and shop page are client-side demos and do not connect to a backend service.
