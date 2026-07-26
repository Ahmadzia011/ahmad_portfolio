
"use client"
import { useState } from 'react';

// Mock product matrix with structural depth
const PRODUCTS = [
  {
    id: 'z-01',
    name: 'Ergonomic Matrix Keyboard',
    category: 'Hardware Architecture',
    price: '$249.00',
    description: 'Split-plane mechanical layout optimized for prolonged technical execution.',
    tag: 'Premium Focus'
  },
  {
    id: 'z-02',
    name: 'Radial Flare Desk Mat',
    category: 'Workspace Linens',
    price: '$65.00',
    description: 'High-density textile surface embedded with subtle grid matrix alignment lines.',
    tag: 'Grid Overlay'
  },
  {
    id: 'z-03',
    name: 'Pistachio Glow Accent Light',
    category: 'Ambient Optics',
    price: '$180.00',
    description: 'Calibrated ambient lighting casting a soft 93C572 radial flare across vertical surfaces.',
    tag: 'Limited Edition'
  },
  {
    id: 'z-04',
    name: 'Blueprint Component Track',
    category: 'Desktop Organizers',
    price: '$115.00',
    description: 'Asymmetrical anodized aluminum tray with micro-metric engraving scales.',
    tag: 'Structural'
  }
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1E2B24] font-sans antialiased relative overflow-hidden selection:bg-[#93C572] selection:text-[#1E2B24]">
      
      {/* Background Matrix Overlay & Ambient Flares */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e2b2405_1px,transparent_1px),linear-gradient(to_bottom,#1e2b2405_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#93C572] opacity-[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#1F3D30] opacity-[0.04] blur-[100px] pointer-events-none" />

      {/* 1. Frosted Glass Pill Navigation Bar */}
      <header className="sticky top-6 z-50 flex justify-center px-4 w-full">
        <nav className="flex items-center justify-between w-full max-w-4xl h-14 px-6 rounded-full border border-[#1E2B24]/10 bg-[#FAF9F5]/70 backdrop-blur-md shadow-[0_8px_32px_0_rgba(30,43,36,0.03)]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#93C572] rounded-sm rotation-45" />
            <span className="font-mono text-xs tracking-widest uppercase font-bold text-[#1F3D30]">ZYNTRA // SYS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider">
            <a href="#" className="hover:text-[#93C572] transition-colors">Architecture</a>
            <a href="#" className="text-[#1F3D30] font-bold border-b border-[#93C572] pb-0.5">Catalog</a>
            <a href="#" className="hover:text-[#93C572] transition-colors">Manifesto</a>
          </div>
          <button className="relative px-4 py-1.5 rounded-full font-mono text-xs uppercase bg-[#1E2B24] text-[#FAF9F5] hover:bg-[#1F3D30] transition-all">
            Cart [0]
          </button>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32 relative z-10">
        
        {/* 2. Editorial Header & Structural Metrics */}
        <div className="border-b border-[#1E2B24]/10 pb-8 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] tracking-widest text-[#1F3D30]/60 uppercase mb-2">
              [ Grid System Matrix v1.04 ]
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1E2B24] max-w-xl leading-none">
              Workspace Core Elements.
            </h1>
          </div>
          <p className="text-sm text-[#1F3D30]/80 max-w-xs font-mono leading-relaxed">
            Tangible equipment mapped directly to premium productivity ergonomics and spatial layout utility.
          </p>
        </div>

        {/* 3. Filter Row (Subtle Blueprint Styling) */}
        <div className="flex flex-wrap items-center gap-3 mb-12 font-mono text-xs">
          {['All', 'Hardware Architecture', 'Workspace Linens', 'Ambient Optics'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 border rounded-none transition-all duration-200 ${
                activeCategory === cat
                  ? 'border-[#1E2B24] bg-[#1E2B24] text-[#FAF9F5]'
                  : 'border-[#1E2B24]/10 text-[#1F3D30]/70 hover:border-[#1E2B24]/40 hover:text-[#1E2B24]'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* 4. Asymmetrical Editorial-Grade Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {PRODUCTS.filter(p => activeCategory === 'All' || p.category === activeCategory).map((product, idx) => {
            // Alternating layouts dynamically to generate an asymmetrical structural aesthetic
            const isLargeCard = idx % 3 === 0;
            return (
              <div 
                key={product.id}
                className={`group bg-[#1E2B24]/[0.02] border border-[#1E2B24]/10 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#1F3D30]/30 hover:bg-[#1E2B24]/[0.03] ${
                  isLargeCard ? 'md:col-span-8' : 'md:col-span-4'
                }`}
              >
                <div>
                  {/* Top card parameters / blueprint metadata */}
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#1F3D30]/50 mb-6 border-b border-[#1E2B24]/5 pb-2">
                    <span>ID // {product.id}</span>
                    <span className="bg-[#1F3D30]/5 px-2 py-0.5 text-[#1E2B24] uppercase tracking-wider">{product.tag}</span>
                  </div>

                  {/* Wireframe Box Placeholder (Evokes technical design architecture) */}
                  <div className="w-full aspect-[16/10] bg-[#1F3D30]/5 border border-[#1E2B24]/5 mb-6 flex items-center justify-center p-4 relative overflow-hidden group-hover:border-[#93C572]/30 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#93C572]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                    <span className="font-mono text-[10px] tracking-widest text-[#1F3D30]/30 uppercase group-hover:text-[#1E2B24]/60 transition-colors">
                      [ Hardware Render Container ]
                    </span>
                  </div>

                  <span className="font-mono text-xs uppercase tracking-wider text-[#93C572] font-semibold">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold mt-1 text-[#1E2B24] tracking-tight group-hover:text-[#1F3D30]">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#1F3D30]/70 mt-2 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Pricing / Action split container */}
                <div className="mt-8 pt-4 border-t border-[#1E2B24]/5 flex items-center justify-between">
                  <span className="text-xl font-bold font-mono text-[#1E2B24]">
                    {product.price}
                  </span>
                  <button className="px-5 py-2 font-mono text-xs uppercase bg-transparent border border-[#1E2B24] text-[#1E2B24] relative overflow-hidden z-10 transition-colors group-hover:border-[#93C572] group-hover:text-[#1E2B24] before:absolute before:inset-0 before:bg-[#93C572] before:translate-y-full hover:before:translate-y-0 before:transition-transform before:-z-10 before:duration-200">
                    Acquire Component
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}