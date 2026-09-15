"use client";

import { useState } from "react";

const PRODUCTS = [
  {
    id: "z-01",
    name: "Ergonomic Matrix Keyboard",
    category: "Hardware Architecture",
    price: "$249.00",
    description:
      "Split-plane mechanical layout optimized for prolonged technical execution.",
    tag: "Premium Focus",
  },
  {
    id: "z-02",
    name: "Radial Flare Desk Mat",
    category: "Workspace Linens",
    price: "$65.00",
    description:
      "High-density textile surface embedded with subtle grid matrix alignment lines.",
    tag: "Grid Overlay",
  },
  {
    id: "z-03",
    name: "Pistachio Glow Accent Light",
    category: "Ambient Optics",
    price: "$180.00",
    description:
      "Calibrated ambient lighting casting a soft radial flare across vertical surfaces.",
    tag: "Limited Edition",
  },
  {
    id: "z-04",
    name: "Blueprint Component Track",
    category: "Desktop Organizers",
    price: "$115.00",
    description:
      "Asymmetrical anodized aluminum tray with micro-metric engraving scales.",
    tag: "Structural",
  },
] as const;

const CATEGORIES = [
  "All",
  "Hardware Architecture",
  "Workspace Linens",
  "Ambient Optics",
] as const;

export default function ShopPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof CATEGORIES)[number]>("All");

  const visibleProducts = PRODUCTS.filter(
    (product) =>
      activeCategory === "All" || product.category === activeCategory,
  );

  return (
    <div className="min-h-screen bg-shop-background font-sans text-shop-text">
      <header className="sticky top-6 z-50 flex w-full justify-center px-4">
        <nav className="flex h-14 w-full max-w-4xl items-center justify-between rounded-full border border-shop-text/10 bg-shop-background/80 px-6 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="size-3 rotate-45 rounded-sm bg-shop-accent" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-shop-deep">
              ZYNTRA // SYS
            </span>
          </div>

          <div className="hidden items-center gap-8 font-mono text-xs uppercase tracking-wider md:flex">
            <a href="#catalog" className="transition-colors hover:text-shop-accent">
              Architecture
            </a>
            <a href="#catalog" className="border-b border-shop-accent font-bold">
              Catalog
            </a>
            <a href="#catalog" className="transition-colors hover:text-shop-accent">
              Manifesto
            </a>
          </div>

          <button
            type="button"
            className="rounded-full bg-shop-text px-4 py-1.5 font-mono text-xs uppercase text-shop-background transition-colors hover:bg-shop-deep"
          >
            Cart [0]
          </button>
        </nav>
      </header>

      <main id="catalog" className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-20">
        <div className="mb-12 flex flex-col gap-6 border-b border-shop-text/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-shop-deep/60">
              [ Grid System Matrix v1.04 ]
            </p>
            <h1 className="max-w-xl text-4xl font-extrabold leading-none tracking-tight text-shop-text md:text-5xl">
              Workspace Core Elements.
            </h1>
          </div>
          <p className="max-w-xs font-mono text-sm leading-relaxed text-shop-deep/80">
            Tangible equipment mapped directly to premium productivity
            ergonomics and spatial layout utility.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center gap-3 font-mono text-xs">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`border px-4 py-2 transition-colors ${
                activeCategory === category
                  ? "border-shop-text bg-shop-text text-shop-background"
                  : "border-shop-text/10 text-shop-deep/70 hover:border-shop-text/40 hover:text-shop-text"
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {visibleProducts.map((product, index) => (
            <article
              key={product.id}
              className={`group flex flex-col justify-between border border-shop-text/10 bg-shop-text/5 p-6 transition-colors hover:border-shop-deep/30 md:col-span-4 ${
                index % 3 === 0 ? "md:col-span-8" : ""
              }`}
            >
              <div>
                <div className="mb-6 flex items-center justify-between border-b border-shop-text/10 pb-2 font-mono text-xs text-shop-deep/50">
                  <span>ID // {product.id}</span>
                  <span className="bg-shop-deep/5 px-2 py-0.5 uppercase tracking-wider text-shop-text">
                    {product.tag}
                  </span>
                </div>

                <div className="mb-6 flex aspect-video w-full items-center justify-center overflow-hidden border border-shop-text/10 bg-shop-deep/5 p-4 transition-colors group-hover:border-shop-accent/30">
                  <span className="font-mono text-xs uppercase tracking-widest text-shop-deep/40 transition-colors group-hover:text-shop-text/60">
                    [ Hardware Render Container ]
                  </span>
                </div>

                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-shop-accent">
                  {product.category}
                </span>
                <h2 className="mt-1 text-xl font-bold tracking-tight text-shop-text">
                  {product.name}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-shop-deep/70">
                  {product.description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-shop-text/10 pt-4">
                <span className="font-mono text-xl font-bold text-shop-text">
                  {product.price}
                </span>
                <button
                  type="button"
                  className="border border-shop-text px-5 py-2 font-mono text-xs uppercase text-shop-text transition-colors hover:border-shop-accent hover:bg-shop-accent"
                >
                  Acquire Component
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
