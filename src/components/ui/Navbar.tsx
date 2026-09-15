"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/src/constants/site.constants";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] flex min-h-[10vh] items-center justify-center px-4 pt-6 md:px-0 md:pt-10">
      <nav
        aria-label="Main navigation"
        className="relative z-[101] flex h-[7vh] w-full items-center justify-between rounded-full bg-paper/70 px-6 shadow-lg backdrop-blur-md md:w-[35vw] md:justify-center md:px-10"
      >
        <div className="hidden h-full w-full items-center justify-around md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-medium tracking-tight text-ink transition-all ease-in-out hover:scale-105 hover:opacity-75"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex w-full items-center justify-between md:hidden">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-archivo text-sm font-bold uppercase tracking-widest text-ink"
          >
            AHMD.
          </Link>
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="cursor-pointer p-1 text-ink transition-transform active:scale-95"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-4 right-4 top-[90%] z-[100] flex flex-col space-y-4 overflow-hidden rounded-3xl border border-neutral-300 bg-paper/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
          >
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
                className="border-b border-neutral-300/50 pb-3 last:border-0 last:pb-0"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-archivo text-xl font-semibold tracking-tight text-ink transition-colors hover:opacity-75"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
