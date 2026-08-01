
import { useMediaQuery } from "@/src/lib/mediaQuery";
import { useScroll, useTransform, motion, useMotionValueEvent, useMotionValue, easeInOut, color, useSpring } from "framer-motion";
import { ArrowUpRight, Circle } from "lucide-react";
import { useRef } from "react";

export default function HeroSec() {
  const containerRef = useRef(null);
  const constraintsRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  // Track how far the page has scrolled inside the target section.
  const { scrollYProgress } = useScroll({
    // Watch the container section for scroll progress.
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    restDelta: 0.001
  })

  // Map scroll progress to a scale value, making the element grow as the user scrolls.
  const scale = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 1.5 : 1.7]);
  // Map scroll progress to a rotation value, creating the 3D-style flip effect.
  const rotateY = useTransform(scrollYProgress, [0, 1], [1, 180]);

  return (
    <>
      <section
        ref={constraintsRef}
        className="min-h-screen md:flex md:flex-col justify-start items-center pt-40 md:pt-50 pb-10 text-center overflow-hidden"
      >
        <motion.img
          src={"/3dIcon.avif"}
          className="z-10 absolute h-20 md:h-40 left-70 top-50 md:top-60 cursor-pointer"
          drag
          dragConstraints={constraintsRef}
          animate={{
            rotate: 180,
            scale: 1.1,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 20,
            ease: "easeInOut",
          }}
        ></motion.img>
        <motion.img
          src={"/3dIcon2.avif"}
          className="z-10 h-20 md:h-40 absolute right-70 md:bottom-70 bottom-125 rotate-20 cursor-pointer"
          drag
          dragConstraints={constraintsRef}
          animate={{
            rotate: 180,
            scale: 1.1,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 20,
            ease: "easeInOut",
          }}
        ></motion.img>
        <div className="overflow-hidden">

          <h1 className="w-screen md:w-[60vw] pointer-events-none font-extrabold text-[#111111] text-5xl md:text-[178px] leading-[0.95] uppercase">
            full stack developer
          </h1>
        </div>
        <div className="w-screen px-[12%] md:min-h-[32vh] md:w-[60vw] flex justify-center items-center md:justify-between md:items-end md:px-2 pt-5">
          <div className="font-archivo font-bold text-[#111111] text-2xl md:text-5xl leading-none tracking-tight normal-case">
            ©2026
          </div>
          <div className="font-mono text-end text-xs md:text-sm uppercase md:tracking-widest text-[#111111]/70 pl-10 md:pl-0">
            / BUILDING HIGH-IMPACT WEB EXPERIENCES
          </div>
        </div>
      </section>

      <section
        ref={containerRef}
        className="xs:min-h-[90vh] md:min-h-[120vh] flex justify-center"
      >
        <div className="hidden w-[25vw] pt-50 md:flex items-center"> {/*Hidden on mobile view*/}
          <div className="wrap-normal w-[20vw] space-y-30 pr-5">
            <h1 className="font-archivo font-bold text-[#111111] text-3xl md:text-4xl leading-tight tracking-tight normal-case">
              Engineered for Growth.
            </h1>
            <p className="font-sans md:text-[17px] md:font-light text-neutral-600 text-base leading-relaxed space-y-4">
              Building production-ready SaaS platforms, custom AI systems, and high-converting web applications engineered for founders and scaling teams.
            </p>
          </div>
        </div>
        <div className=""> {/* this is too avoid the sticky parent have a flex postioned parent */}
          <div className="sticky top-210 md:top-250 xs:-translate-y-110 sm:-translate-y-125 md:-translate-y-95"> {/* Center Image  */}
            <motion.div
              className=" h-60 w-50 perspective-[1000px]"
              style={{
                scale
              }}
              >
              <motion.div
                style={{
                  rotateY,
                }}
                className="relative h-full w-full rounded-xl transform-3d"
              >
                <img
                  src="/backside.png"
                  alt="Front"
                  className="h-full w-full rounded-xl object-cover"
                />
                <div className="absolute inset-0 h-full w-full backface-hidden rotate-y-180">
                  <img
                    src={"/backside.png"}
                    alt="Back"
                    className=" h-full w-full rounded-xl object-cover "
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="md:hidden absolute xs:pt-75 sm:pt-110 xs:px-8 sm:px-9 space-y-8 ">
          <p>Modern products require seamless execution. From full-stack Next.js applications and secure database backends to intelligent RAG chatbots, every system is crafted with clean architecture and zero technical bloat.<br /><br />
            Focus stays on speed, reliability, and business outcomes—delivering scalable digital products that keep your launch on schedule and optimized for conversions.
          </p>
          <button className=" md:hidden flex items-center justify-around w-35 border border-neutral-500 text-sm rounded-xl p-2 cursor-pointer bg-black text-white transition-all ease-in-out duration-400 hover:bg-transparent hover:text-black">
            Let's connect
            <ArrowUpRight size={20} />
          </button>
        </div>

        <div id="hero-section" className="hidden w-[23vw] pt-51 md:flex items-center space-y-100 font-light text-lg"> {/*Hidden on mobile view*/}
          <div className="pl-30 space-y-5 ">
            <p className="font-sans text-neutral-600 text-[17px] leading-relaxed space-y-4 ">
              Modern products require seamless execution. From full-stack Next.js applications and secure database backends to intelligent RAG chatbots, every system is crafted with clean architecture and zero technical bloat.
              <br />
              <br />
              Focus stays on speed, reliability, and business outcomes—delivering scalable digital products that keep your launch on schedule and optimized for conversions.
            </p>
            <button className="flex items-center justify-around w-33 border border-neutral-500 text-sm rounded-xl p-2 cursor-pointer bg-black text-white transition-all ease-in-out duration-400 hover:bg-transparent hover:text-black">
              Let's connect
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}