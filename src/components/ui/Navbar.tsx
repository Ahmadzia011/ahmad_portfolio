"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#hero-section" },
    { name: "Services", href: "#services-section" },
    { name: "Projects", href: "#projects-section" },
    { name: "Testimonials", href: "#testimonials-section" },
    { name: "Contact", href: "#contact-section" },
  ];

  return (
    <>
      <header className="sticky top-0 min-h-[10vh] z-100 flex justify-center items-center pt-6 md:pt-10 px-4 md:px-0">
        <nav className="w-full md:w-[35vw] h-[7vh] flex justify-between md:justify-center items-center rounded-full backdrop-blur-md shadow-lg px-6 md:px-10 bg-[#F2EFEB]/70 relative z-[101]">
          
          {/* Desktop Links */}
          <div className="hidden md:flex w-full h-full justify-around items-center">
            {links.map((link) => (
              <a
                key={link.name}
                className="text-[#111111] dark:text-[#F5F4EE] hover:opacity-75 transition-all ease-in-out hover:scale-105 tracking-tight font-medium"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Header */}
          <div className="flex md:hidden w-full justify-between items-center">
            <span className="text-[#111111] font-archivo font-bold tracking-widest uppercase text-sm">ahmd.</span>
            <button
              className="text-[#111111] p-1 focus:outline-none transition-transform active:scale-95 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[90%] left-4 right-4 bg-[#F2EFEB]/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 flex flex-col space-y-4 md:hidden border border-neutral-300 z-[100] overflow-hidden"
            >
              {links.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-archivo font-semibold text-[#111111] tracking-tight hover:opacity-75 transition-colors border-b border-neutral-300/50 pb-3 last:border-0 last:pb-0"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}