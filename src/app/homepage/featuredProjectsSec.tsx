import { PROJECTS } from "@/src/constants/dashboard.constants";
import { useMediaQuery } from "@/src/lib/mediaQuery";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export function FeaturedProjects() {
  const projectsContainer = useRef(null);
  
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isSmallMobile = useMediaQuery('(max-width: 375px)');

  
  const { scrollYProgress } = useScroll({
    target: projectsContainer,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const RANGE = isMobile ? [0.2, 0.3, 0.4, 0.8] : [0.1, 0.2, 0.3, 0.8];

  const topInset = useTransform(smoothProgress, RANGE, [
    isMobile ? "26%" : "45%",
    isMobile ? "26%" : "45%",
    isMobile ? "26%" : "45%",
    "-60%",
  ]);

  const rightInset = useTransform(smoothProgress, RANGE, [
    isMobile ? "23%" : "50%",
    isMobile ? "23%" : "43%",
    isMobile ? "23%" : "43%",
    "-30%",
  ]);
  const bottomInset = useTransform(smoothProgress, RANGE, [
    isMobile ? "73.5%" : "49%",
    isMobile ? "72%" : "49%",
    isMobile ? "55%" : "49%",
    "-20%",
  ]);

  const leftInset = useTransform(smoothProgress, RANGE, [
    isMobile ? "22%" : "50%",
    isMobile ? "22%" : "50%",
    isMobile ? "22%" : "50%",
    "-30%",
  ]);

  const translate1 = useTransform(
    smoothProgress,
    [0.1, isMobile ? 0.4 : 0.3, 1],
    [0, -25, -2200]
  );
  const translate2 = useTransform(
    smoothProgress,
    [0.1, 0.2, 0.3, 1],
    [0, isMobile ? 20 : 140, isMobile ? 30 : 170, 2200]
  );

  const opacity = useTransform(smoothProgress, [0, 0.1], [0, 1.4]);
  const blur = useTransform(smoothProgress, [0, 0.3], [2, 0]);

  const clipPath = useMotionTemplate`inset(${topInset} ${rightInset} ${bottomInset} ${leftInset} round 3px)`;
  const filter = useMotionTemplate`blur(${blur}px)`;

  

  return (
    <section
      id="projects-section"
      ref={projectsContainer}
      className="relative min-h-[350vh] mask-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.2)_15%,rgba(0,0,0,0.7)_35%,black_60%)] "
    >
      <div className="sticky top-10 min-h-screen overflow-hidden">
        {/* Background Revealed Text */}
        <motion.section className="max-w-scren absolute uppercase tracking-tighter bg-[#101010] text-[#F2EFEB] space-x-1 md:space-x-5 w-full min-h-screen flex flex-col md:flex-row justify-center xs:leading-13 text-[43px] sm:text-5xl md:text-7xl font-semibold font-archivo items-center sm:pt-5 px-4">
          <motion.div style={isMobile ? {translateY: translate1} : { translateX: translate1 }}>featured</motion.div>
          <motion.div style={isMobile ? {translateY: translate2} : { translateX: translate2 }}>PROJECTS</motion.div>
        </motion.section>

        {/* Foreground Content Card Grid */}
        <motion.section
          style={{
            clipPath,
            opacity,
            filter,
          }}
          className="w-full bg-[#F2EFEB] min-h-screen flex flex-col justify-between py-8 md:py-[5vh] items-center overflow-y-auto md:overflow-hidden"
        >
          {/* SECTION HEADER IDENTIFIER */}
          <div className="w-[85vw] md:w-[60vw] mx-auto pt-25 md:pt-23 pb-5 flex justify-between items-center">
            <span className="font-archivo text-xs md:text-sm font-medium tracking-widest text-[#111111]/60 uppercase">
              / PROJECTS
            </span>
               <button className=" space-x-5 hover:  flex items-center justify-around w-20 md:w-30 border border-neutral-500 md:text-sm text-xs rounded-xl p-2 cursor-pointer bg-black text-white transition-all ease-in-out duration-400 hover:bg-transparent hover:text-black">
                View All 
              <ArrowUpRight size={13} className=""/>
            </button>

          </div>

          <div className="flex-1 w-full flex items-center justify-center my-auto px-6">
            <div className="w-[85vw] md:w-[60vw] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-5">
                {PROJECTS.map((project, index) => (
                  <div
                    key={index}
                    className="space-y-2 cursor-pointer group w-full"
                  >
                    <div className="h-[28vh] sm:h-[32vh] md:h-[32vh] overflow-hidden rounded-2xl md:rounded-3xl">
                      <img
                        src={project.image}
                        alt={`${project.title} Project`}
                        className="h-full w-full object-cover object-top transition duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-archivo text-xl sm:text-2xl md:text-[24px] font-semibold text-[#111111] tracking-tight pt-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 text-sm md:text-[12px] font-normal">
                      {project.category}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}