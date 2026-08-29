# AhmadDevs Portfolio & Agency Website

A modern, highly responsive, and premium portfolio and agency website built with **Next.js**, **React**, **Tailwind CSS**, and **Framer Motion**.

This project showcases a professional and sleek design with dynamic scroll animations, 3D card flips, sticky layouts, and seamless mobile responsiveness. 

## 🚀 Features

- **Mobile-First Responsiveness:** Flawless layout adapting gracefully to both desktop (anchored at `60vw`) and mobile (`w-full` stacks) devices without regressions.
- **Premium Animations:** High-end scroll-triggered animations, interactive hover states, 3D effects, and a smooth animated mobile hamburger dropdown powered by Framer Motion.
- **Modern UI Components:** Includes a sticky navigation bar, an infinite scrolling marquee, interactive featured project cards, and a fully functional contact form section.
- **Consistent Typography:** Uses the `Archivo` font across the entire application to ensure a cohesive and impactful aesthetic.
- **Dark-Themed Elegance:** Designed with a striking, high-contrast color palette, focusing on visual excellence and readability.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Library:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Marquee:** [React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee)

## 📁 Key Sections

1. **Hero Section:** High-impact introduction featuring 3D floating icons and a seamless sticky scroll animation highlighting services.
2. **Services:** An interactive vertical scrolling layout utilizing Framer Motion's `useScroll` to reveal dynamic content based on scroll progress.
3. **Featured Projects:** A sleek, animated matrix of past works that adapts from side-by-side grids to vertical stacks on mobile.
4. **Testimonials:** An interactive, draggable carousel displaying client feedback.
5. **Contact:** An intuitive form layout mixed with direct contact methods and social links.

## 💻 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 📱 Responsive Strategy

The architecture adheres strictly to a **zero desktop regression** rule:
- Base styles are defined using unprefixed Tailwind utility classes for mobile devices.
- Desktop layouts and constraints (such as `md:w-[60vw]`) are wrapped with Tailwind's `md:` and `lg:` prefixes.
- Overlapping elements, rigid viewport units (`vw`/`vh`), and absolute coordinates have been refactored dynamically to ensure horizontal scroll lock on all viewports while retaining Framer Motion logic.

## ⚙️ Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
