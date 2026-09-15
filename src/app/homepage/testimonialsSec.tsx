
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/src/constants/dashboard.constants";
import Image from "next/image";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <>
      <motion.section
        id="testimonials-section"
        className="min-h-[120vh] w-full overflow-hidden bg-dark py-48"
      >
        <div className="max-w-6xl w-full mx-auto px-6 flex flex-col items-center">

          {/* SECTION HEADER IDENTIFIER */}
          <div className="w-full text-center pb-5">
            <h1 className=" text-xs md:text-sm font-medium tracking-widest text-neutral-400 uppercase">
              / TESTIMONIALS
            </h1>
          </div>

          <h2 className="pb-25 text-center text-2xl font-semibold uppercase tracking-tight text-paper md:text-5xl">
            What Clients Say
          </h2>

          {/* Card Stage Container */}
          <div className="relative w-full h-113 flex items-center justify-center">
            {TESTIMONIALS.map((testimonial, index) => {
              // Calculate relative offset from current active card
              let offset = index - activeIndex;

              // Handle infinite circular loop offset mapping
              const total = TESTIMONIALS.length;
              if (offset < -Math.floor(total / 2)) offset += total;
              if (offset > Math.floor(total / 2)) offset -= total;

              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              return (
                <motion.div
                  key={testimonial.id}
                  initial={false}
                  animate={{
                    x: offset * 280, // Horizontal displacement distance
                    scale: isCenter ? 1.05 : 0.9,
                    rotate: isLeft ? -10 : isRight ? 10 : 0,
                    opacity: isCenter ? 1 : isLeft || isRight ? 0.7 : 0,
                    filter: isCenter ? "blur(0px)" : "blur(2px)",
                    zIndex: isCenter ? 20 : isLeft || isRight ? 10 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 22,
                  }}
                  className="absolute flex h-104 w-80 select-none flex-col justify-between rounded-3xl border border-neutral-800 bg-panel p-8 text-paper shadow-2xl"
                >
                  <p className="text-base  leading-relaxed text-neutral-300">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center space-x-4 pt-4 border-t border-neutral-800">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover shrink-0"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold text-paper">
                        {testimonial.author}
                      </p>
                      <p className="text-xs font-medium text-neutral-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-6 pt-16">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-paper text-ink shadow-md transition-all hover:bg-neutral-300 active:scale-95"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-paper text-ink shadow-md transition-all hover:bg-neutral-300 active:scale-95"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </motion.section>
    </>
  );
}
