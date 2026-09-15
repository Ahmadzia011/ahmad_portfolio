"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FOOTER_LINKS } from "@/src/constants/site.constants";

export default function Footer() {
  return (
    <footer className="relative flex min-h-[25vh] w-full flex-col justify-between overflow-hidden bg-dark pt-12 text-paper md:h-[55vh] md:min-h-0 md:pt-30">
      <div className="mx-auto flex h-full w-[88vw] flex-col justify-between md:w-[60vw]">
        <div className="my-auto flex h-auto flex-col items-start justify-between gap-10 text-paper md:h-1/2 md:flex-row md:items-center md:gap-0">
          <div className="w-full font-archivo text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:w-1/2 md:pr-12 md:text-[52px] md:leading-none">
            Scaling Start-ups for Growth.
          </div>

          <div className="flex w-full flex-col justify-center space-y-4 border-t border-neutral-800/80 pt-6 md:w-1/2 md:border-t-0 md:pl-12 md:pt-0">
            <div className="font-archivo text-xs font-medium uppercase tracking-widest text-neutral-400 md:text-sm">
              / QUICK LINKS
            </div>

            <div className="flex max-w-md flex-wrap gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-md bg-paper px-4 py-2 font-archivo text-sm font-medium text-ink transition-transform hover:scale-105 active:scale-95"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full items-end justify-center overflow-hidden pt-10 md:pt-0">
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="pointer-events-none ml-0 h-auto select-none overflow-hidden pt-4 text-center font-archivo text-[28vw] font-bold uppercase leading-none tracking-tighter text-neutral-800 sm:text-[24vw] md:-ml-15 md:h-full md:pt-12 md:text-left md:text-[380px]"
          >
            ahmd
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
