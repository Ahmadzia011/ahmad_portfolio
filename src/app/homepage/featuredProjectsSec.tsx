import { PROJECTS } from "@/src/data/projects";
import { useMediaQuery } from "@/src/lib/mediaQuery";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const FEATURED_PROJECTS = PROJECTS.slice(0, 4);

export function FeaturedProjects() {
  const projectsContainer = useRef(null);
  
  const isMobile = useMediaQuery('(max-width: 768px)');
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
      className="relative min-h-[260vh] mask-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.2)_15%,rgba(0,0,0,0.7)_35%,black_60%)] "
    >
      <div className="sticky top-10 min-h-screen overflow-hidden">
        {/* Background Revealed Text */}
        <motion.section className="absolute flex min-h-screen w-full flex-col items-center justify-center space-x-1 bg-dark px-4 font-archivo text-5xl font-semibold uppercase leading-tight tracking-tighter text-paper sm:pt-5 md:flex-row md:space-x-5 md:text-7xl">
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
          className="flex min-h-screen w-full flex-col items-center justify-between overflow-y-auto bg-paper py-8 md:overflow-hidden md:py-12"
        >
          {/* SECTION HEADER IDENTIFIER */}
          <div className="w-[85vw] md:w-[60vw] mx-auto pt-25 md:pt-23 pb-5 flex justify-between items-center">
            <span className="font-archivo text-xs font-medium uppercase tracking-widest text-ink/60 md:text-sm">
              / PROJECTS
            </span>
               <Link
                href="/projects"
                className="flex w-24 items-center justify-around rounded-xl border border-neutral-500 bg-black p-2 text-xs text-white transition-all duration-400 ease-in-out hover:bg-transparent hover:text-black md:w-30 md:text-sm"
               >
                View All 
                <ArrowUpRight size={13} aria-hidden="true" />
              </Link>

          </div>

          <div className="flex-1 w-full flex items-center justify-center my-auto px-6">
            <div className="w-[85vw] md:w-[60vw] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-5">
                {FEATURED_PROJECTS.map((project) => {
                  const thumbnail = project.thumbnail ?? project.image;

                  return (
                    <Link
                      href={`/projects/${project.slug}`}
                      key={project.slug}
                      className="group w-full cursor-pointer space-y-2"
                    >
                      <div className="relative h-[28vh] overflow-hidden rounded-2xl sm:h-[32vh] md:h-[32vh] md:rounded-3xl">
                        {thumbnail ? (
                          <Image
                            src={thumbnail}
                            alt={`${project.title} project thumbnail`}
                            fill
                            sizes="(max-width: 768px) 85vw, 30vw"
                            className="object-cover transition duration-300 ease-in-out group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-neutral-900 p-6 text-center text-2xl font-semibold text-white">
                            {project.title}
                          </div>
                        )}
                      </div>
                      <h3 className="pt-2 font-archivo text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="text-sm font-normal text-neutral-600 md:text-xs">
                        {project.category}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
