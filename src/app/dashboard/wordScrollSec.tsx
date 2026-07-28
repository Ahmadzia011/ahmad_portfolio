"use client";

import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

const paragraph = "From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use, driven by clarity, structured systems, and intentional design.";

export default function TextReveal() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start start" starts when the section hits the top of the screen
    // "end end" ends when the bottom of the section leaves the screen
    offset: ["start start", "end end"], 
  });

  const words = paragraph.split(" ");

  return (
    // 1. We keep the scroll height of 200vh here and make it relative
    <section ref={containerRef} className="relative h-[170vh] bg-transparent">
      
      {/* 2. This container sticks to the top and is exactly screen-sized */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-10">
          <p className="flex flex-wrap justify-around text-4xl md:text-[36px] font-semibold leading-tight tracking-tight">
            {words.map((word, i) => { 
              const start = i / words.length;
              const end = start + 1 / words.length;
              
              return (
                <Word 
                  key={i} 
                  word={word} 
                  progress={scrollYProgress} 
                  range={[start, end]} 
                />
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

function Word({word, progress, range}:{word:string, progress:MotionValue<number>, range:number[]}) {
  // Animates smoothly from gray to black as the range is hit
  const color = useTransform(progress, range, ["#d1d5db", "#111111"]);

  return (
    <motion.span 
      style={{ color }} 
      className="mr-5 lg:mr-3 mt-1.5"
    >
      {word}
    </motion.span>
  );
}