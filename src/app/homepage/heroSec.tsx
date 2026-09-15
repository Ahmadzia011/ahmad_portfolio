
import { useMediaQuery } from "@/src/lib/mediaQuery";
import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

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
          alt=""
          aria-hidden="true"
          className="z-10 absolute h-20 md:h-40 left-8 md:left-70 top-50 md:top-60 cursor-pointer"
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
          alt=""
          aria-hidden="true"
          className="z-10 h-20 md:h-40 absolute right-8 md:right-70 md:bottom-70 bottom-125 rotate-20 cursor-pointer"
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

          <div className="pointer-events-none w-full uppercase">
            <h1 className="text-5xl font-extrabold leading-none text-ink md:text-[178px]">
              full stack developer
            </h1>
          </div>
        </div>
        <div className="w-full px-[12%] md:min-h-[32vh] md:w-[60vw] flex justify-center items-center md:justify-between md:items-end md:px-2 pt-5">
          <div className="font-archivo text-2xl font-bold leading-none tracking-tight text-ink md:text-5xl">
            ©2026
          </div>
          <div className="pl-10 text-end font-mono text-xs uppercase text-ink/70 md:pl-0 md:text-sm md:tracking-widest">
            / BUILDING HIGH-IMPACT WEB EXPERIENCES
          </div>
        </div>
      </section>

      <section
        ref={containerRef}
        className="flex min-h-[90vh] justify-center md:min-h-[120vh]"
      >
        <div className="hidden w-[25vw] pt-50 md:flex items-center"> {/*Hidden on mobile view*/}
          <div className="w-[20vw] space-y-30 pr-5">
            <h1 className="font-archivo text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
              Engineered for Growth.
            </h1>
            <p className="font-sans md:text-[17px] md:font-light text-neutral-600 text-base leading-relaxed space-y-4">
              Building production-ready SaaS platforms, custom AI systems, and high-converting web applications engineered for founders and scaling teams.
            </p>
          </div>
        </div>
        <div className=""> {/* this is too avoid the sticky parent have a flex postioned parent */}
          <div className="sticky top-210 -translate-y-110 sm:-translate-y-125 md:top-250 md:-translate-y-95"> {/* Center Image  */}
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
                <Image
                  src="/headshot.jpeg"
                  alt="Portrait of Ahmad"
                  fill
                  unoptimized
                  className="h-full w-full rounded-xl object-cover"
                />
                <div className="absolute inset-0 h-full w-full backface-hidden rotate-y-180">
                  <Image
                    src={"/headshot.jpeg"}
                    alt=""
                    aria-hidden="true"
                    fill
                    unoptimized
                    className=" h-full w-full rounded-xl object-cover "
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute space-y-8 px-8 pt-75 sm:px-9 sm:pt-110 md:hidden">
          <p>Modern products require seamless execution. From full-stack Next.js applications and secure database backends to intelligent RAG chatbots, every system is crafted with clean architecture and zero technical bloat.<br /><br />
            Focus stays on speed, reliability, and business outcomes | delivering scalable digital products that keep your launch on schedule and optimized for conversions.
          </p>
          <a href="#contact-section" className=" md:hidden flex items-center justify-around w-35 border border-neutral-500 text-sm rounded-xl p-2 cursor-pointer bg-black text-white transition-all ease-in-out duration-400 hover:bg-transparent hover:text-black">
            Let&apos;s connect
            <ArrowUpRight size={20} className="" />
          </a>
        </div>

        <div id="hero-section" className="hidden w-[23vw] pt-51 md:flex items-center space-y-100 font-light text-lg"> {/*Hidden on mobile view*/}
          <div className="pl-30 space-y-5 ">
            <p className="font-sans text-neutral-600 text-[17px] leading-relaxed space-y-4 ">
              Modern products require seamless execution. From full-stack Next.js applications and secure database backends to intelligent RAG chatbots, every system is crafted with clean architecture and zero technical bloat.
              <br />
              <br />
              Focus stays on speed, reliability, and business outcomes | delivering scalable digital products that keep your launch on schedule and optimized for conversions.
            </p>
            <a href="#contact-section" className="flex items-center justify-around w-33 border border-neutral-500 text-sm rounded-xl p-2 cursor-pointer bg-black text-white transition-all ease-in-out duration-400 hover:bg-transparent hover:text-black">
              Let&apos;s connect
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
