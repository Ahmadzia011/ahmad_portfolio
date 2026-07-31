
import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import { SECTIONS } from "@/src/constants/dashboard.constants";

export default function InteractiveScrollSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // 1. Measure scroll progress inside the runway section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,   // Slightly lowered stiffness makes it feel even silkier
    damping: 25,      // Controlled friction prevents it from feeling too bouncy
    restDelta: 0.0005
  });

  // 2. Map scroll progress (0.0 to 1.0) directly into active array index steps
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const step = 1 / SECTIONS.length;
    const newIndex = Math.min(
      Math.floor(latest / step),
      SECTIONS.length - 1
    );
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  return (
    // Runway height dictates how much scroll distance each slide takes
    <section id="services-section" ref={containerRef} className="relative min-h-[300vh] pt-10 bg-[#111111] text-[#F2EFEB] ">

      {/* Sticky container pins the 2-column view to the screen */}
      <div className=" sticky top-10 min-h-screen flex flex-col justify-center px-8 md:px-20 max-w-7xl mx-auto ">

        {/* SECTION HEADER IDENTIFIER */}
        <div className="w-full pb-2 ">
          <span className=" text-xs md:text-sm font-medium tracking-widest text-neutral-400 uppercase">
            / SERVICES
          </span>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20 w-full items-center">

          {/* LEFT COLUMN: Dynamic Active Content */}
          <div className="relative  sm:min-h-70 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-[#F2EFEB]">
                  {SECTIONS[activeIndex]?.title}
                </h2>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                  {SECTIONS[activeIndex]?.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {SECTIONS[activeIndex]?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 font-mono tracking-tight"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* RIGHT COLUMN: Navigation Rows Indicator */}
          <div className="flex flex-col space-y-4 ">
            {SECTIONS.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={item.id}
                  className={`group relative text-left py-3 sm:py-5 px-6 rounded-xl transition-all duration-300  flex items-center justify-between ${isActive
                    ? "bg-neutral-900  text-[#F2EFEB] shadow-xl"
                    : "bg-transparent text-neutral-500"
                    }`}
                >
                  {/* Left edge active indicator line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-3 bottom-3 w-1 bg-[#F2EFEB] rounded-r-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-sm ${isActive ? "text-[#F2EFEB]" : "text-neutral-600"}`}>
                      {item.id}
                    </span>
                    <span className=" text-sm sm:text-md md:text-lg tracking-tight">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </div>
    </section>
  );
}