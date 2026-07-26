
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export function FeaturedProjects() {
  const projectsContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: projectsContainer,
    offset: ["start start", "end end"],
  });

  // 1. Keep your useSpring setup intact right above these lines:
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80, // Slightly lowered stiffness makes it feel even silkier
    damping: 25, // Controlled friction prevents it from feeling too bouncy
    restDelta: 0.001,
  });

  const RANGE = [0, 0.2, 0.3, 0.8];

  const topInset = useTransform(smoothProgress, RANGE, [
    "43%",
    "43%",
    "43%",
    "-2%",
  ]);
  const rightInset = useTransform(smoothProgress, RANGE, [
    "50%",
    "43%",
    "43%",
    "0%",
  ]);
  const bottomInset = useTransform(smoothProgress, RANGE, [
    "52%",
    "52%",
    "52%",
    "0%",
  ]);
  const leftInset = useTransform(smoothProgress, RANGE, [
    "50%",
    "50%",
    "50%",
    "0%",
  ]);

  const translateX1 = useTransform(
    smoothProgress,
    [0, 0.3, 1],
    [0, -10, -1500]
  );
  const translateX2 = useTransform(
    smoothProgress,
    [0, 0.2, 0.3, 1],
    [0, 140, 150, 1300]
  );

  const opacity = useTransform(smoothProgress, [0, 0.1], [0, 1.4]);
  const blur = useTransform(smoothProgress, [0, 0.3], [2, 0]);

  // 3. Keep your template exactly as it is
  const clipPath = useMotionTemplate`inset(${topInset} ${rightInset} ${bottomInset} ${leftInset} round 1rem)`;
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    // this is the runway for animation
    <section
      id="projects-section"
      ref={projectsContainer}
      className="relative min-h-[300vh] [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.2)_15%,rgba(0,0,0,0.7)_35%,black_60%)]"
    >
      {/* this div is to make the inner container sticky */}
      <div className="sticky top-0 min-h-screen">

        {/* Background Revealed Text */}
        <motion.section className="absolute pt-13 uppercase overflow-hidden tracking-tighter bg-[#101010] text-[#F2EFEB] space-x-10 w-full min-h-screen flex justify-center text-4xl md:text-7xl font-semibold font-archivo items-center">
          <motion.div style={{ translateX: translateX1 }}>
            featured
          </motion.div>
          <motion.div style={{ translateX: translateX2 }}>
            PROJECTS
          </motion.div>
        </motion.section>

        {/* Foreground Content Card Grid */}
        <motion.section
          style={{
            clipPath,
            opacity,
            filter,
          }}
          className="w-full bg-[#F2EFEB] min-h-screen flex flex-col justify-between py-[5vh] items-center"
        >
          {/* SECTION HEADER IDENTIFIER */}
          <div className="w-[60vw] mx-auto pt-4 pb-2">
            <span className="font-archivo text-xs md:text-sm font-medium tracking-widest text-[#111111]/60 uppercase">
              / PROJECTS
            </span>
          </div>

          <div className="min-h-screen w-full flex items-center">
            <div className="w-[60vw] mx-auto space-y-12">

              {/* First Project Row */}
              <div className="flex justify-around">
                {/* First Row - First Column Card*/}
                <div className="space-y-2 cursor-pointer group">
                  <div className="h-[36vh] w-[27vw] overflow-hidden rounded-3xl">
                    <img
                      src={
                        "https://framerusercontent.com/images/VNXQLcPHw9VbVzy6BDpZ8pUsaU.png?scale-down-to=1024&width=1160&height=800"
                      }
                      alt="Damas Project"
                      className="h-full w-full object-cover object-top transition duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-archivo text-[28px] font-semibold text-[#111111] tracking-tight pt-2">
                    Damas
                  </h3>
                  <p className="text-neutral-600 text-[15px] font-normal">
                    Agency Framer Template
                  </p>
                </div>

                {/* First Row - Second Column Card */}
                <div className="space-y-2 cursor-pointer group">
                  <div className="h-[36vh] w-[27vw] overflow-hidden rounded-3xl">
                    <img
                      src={
                        "https://framerusercontent.com/images/WgEHVRrQs62rgxlzrnXJJ8rr4.png?scale-down-to=1024&width=1160&height=800"
                      }
                      alt="Najm Project"
                      className="h-full w-full object-cover object-top transition duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-archivo text-[28px] font-semibold text-[#111111] tracking-tight pt-2">
                    Najm
                  </h3>
                  <p className="text-neutral-600 text-[15px] font-normal">
                    SaaS Template
                  </p>
                </div>
              </div>

              {/* Second Project Row */}
              <div className="flex justify-around">
                {/* Second Row - First Column Card*/}
                <div className="space-y-2 cursor-pointer group">
                  <div className="h-[36vh] w-[27vw] overflow-hidden rounded-3xl">
                    <img
                      src={
                        "https://framerusercontent.com/images/I3azeVtkvdKBGl9TX38tUdXEb0.png?scale-down-to=1024&width=1160&height=800"
                      }
                      alt="Kavi Project"
                      className="h-full w-full object-cover object-top transition duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-archivo text-[28px] font-semibold text-[#111111] tracking-tight pt-2">
                    Kavi
                  </h3>
                  <p className="text-neutral-600 text-[15px] font-normal">
                    AI Framer Template
                  </p>
                </div>

                {/* Second Row - Second Column Card*/}
                <div className="space-y-2 cursor-pointer group">
                  <div className="h-[36vh] w-[27vw] overflow-hidden rounded-3xl">
                    <img
                      src={
                        "https://framerusercontent.com/images/1C3zqERGdc7pqPIbDxtBaD4VGiQ.png?scale-down-to=1024&width=4096&height=2824"
                      }
                      alt="PostWing Project"
                      className="h-full w-full object-cover object-top transition duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-archivo text-[28px] font-semibold text-[#111111] tracking-tight pt-2">
                    PostWing
                  </h3>
                  <p className="text-neutral-600 text-[15px] font-normal">
                    Social Media Scheduler
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}