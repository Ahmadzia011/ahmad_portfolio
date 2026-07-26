
import { useScroll, useTransform, motion, useMotionValueEvent, useMotionValue, easeInOut, color } from "framer-motion";
import { ArrowUpRight, Circle } from "lucide-react";
import { useRef } from "react";

export default function HeroSec() {
  const containerRef = useRef(null);
  const constraintsRef = useRef(null);

  // Track how far the page has scrolled inside the target section.
  const { scrollYProgress } = useScroll({
    // Watch the container section for scroll progress.
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Map scroll progress to a scale value, making the element grow as the user scrolls.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);
  // Map scroll progress to a rotation value, creating the 3D-style flip effect.
  const rotateY = useTransform(scrollYProgress, [0, 1], [1, 180]);

  return (
    <>
      <section
        ref={constraintsRef}
        className=" min-h-screen flex flex-col justify-start items-center pt-50 pb-10 text-center"
      >
        <motion.img
          src={"/3dIcon.avif"}
          className=" z-10 absolute h-40 left-80 top-60 cursor-pointer"
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
          className="z-10 h-40 absolute right-80 bottom-70 rotate-20 cursor-pointer"
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
        <div className="">
          
          <h1 className=" w-[60vw] pointer-events-none font-extrabold text-[#111111] text-[178px] leading-[0.95] uppercase">
            full stack <br />developer
          </h1>
        </div>



        <div className=" min-h-[27vh] w-[60vw] flex justify-between items-end px-2">
          <div className="font-archivo font-bold text-[#111111] text-[68px] leading-none tracking-tight normal-case">
            ©2026
          </div>
          <div className="pt-10 font-mono text-sm uppercase tracking-widest text-[#111111]/70">
            / BUILDING HIGH-IMPACT WEB EXPERIENCES
          </div>
        </div>
      </section>

      <section
        ref={containerRef}
        className="min-h-[120vh] flex justify-center"
      >
        <div className="w-[20vw] pt-50 flex items-center">
          <div className="wrap-normal w-[15vw] space-y-30">
            <h1 className="font-archivo font-bold text-[#111111] text-3xl md:text-4xl leading-tight tracking-tight normal-case">
              Engineered for Growth.
            </h1>
            <p className="font-sans md:text-lg text-neutral-600 text-base leading-relaxed space-y-4">
              Building production-ready SaaS platforms, custom AI systems, and high-converting web applications engineered for founders and scaling teams.
            </p>
          </div>
        </div>
        <div className=""> {/* this is too avoid the sticky parent have a flex postioned parent */}

          <div className="sticky top-190 -translate-y-95">

            <motion.div
              className=" h-60 w-50 perspective-[1000px]"
              style={{
                scale,
              }}
            >

              <motion.div
                style={{
                  rotateY,
                }}
                className="relative h-full w-full rounded-xl transform-3d"
              >

                <img
                  src="/heroSectionMan.png"
                  alt="Front"
                  className=" h-full w-full rounded-xl object-cover"
                />

                <div className="absolute inset-0 h-full w-full backface-hidden rotate-y-180">
                  <img
                    src={"/heroSectionMan.png"}
                    alt="Back"
                    className=" h-full w-full rounded-xl object-cover "
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div id="hero-section" className="w-[23vw] pt-51 flex items-center space-y-100 font-light text-lg">
          <div className="pl-30 space-y-5 ">
            <p className="font-sans text-neutral-600 text-base leading-relaxed space-y-4 ">
              Modern products require seamless execution. From full-stack Next.js applications and secure database backends to intelligent RAG chatbots, every system is crafted with clean architecture and zero technical bloat.
              <br />
              <br />
              Focus stays on speed, reliability, and business outcomes—delivering scalable digital products that keep your launch on schedule and optimized for conversions.
            </p>
            <button className=" flex items-center justify-around w-30 border border-neutral-500 text-sm rounded-xl p-2 cursor-pointer bg-black text-white transition-all ease-in-out duration-400 hover:bg-transparent hover:text-black">
              Get Started
              <ArrowUpRight size={20} />
            </button>

          </div>
        </div>
      </section>
    </>

  );
}
