import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About Me", href: "#hero-section" },
    { label: "Services", href: "#services-section" },
    { label: "Projects", href: "#projects-section" },
    { label: "Testimonials", href: "#testimonials-section" },
  ];

  return (
    <section
      id="contact-section"
      className="relative overflow-hidden min-h-[22vh] md:min-h-0 md:h-[55vh] bg-[#101010] w-full text-[#F2EFEB] flex flex-col justify-between pt-12 md:pt-0"
    >
      <div className="w-[88vw] md:w-[60vw] h-full mx-auto flex flex-col justify-between">
        
        {/* ================= UPPER SECTION ================= */}
        <div className="flex flex-col md:flex-row h-auto md:h-1/2 text-[#F2EFEB] items-start md:items-center justify-between gap-10 md:gap-0 my-auto">
          
          {/* Left Hero Statement */}
          <div className="w-full md:w-1/2 md:pr-12 text-3xl sm:text-4xl md:text-[52px] font-extrabold tracking-tight leading-[1.1] md:leading-none font-archivo">
            Scaling Start-ups for Growth.
          </div>

          {/* Quick Links Column */}
          <div className="w-full md:w-1/2 md:pl-12 flex flex-col justify-center space-y-4 pt-6 md:pt-0 border-t border-neutral-800/80 md:border-t-0">
            <div className="font-archivo text-xs md:text-sm font-medium tracking-widest text-neutral-400 uppercase">
              / QUICK LINKS
            </div>

            <div className="flex flex-wrap gap-2.5 max-w-md">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#F2EFEB] text-[#111111] font-archivo font-medium py-2 px-4 rounded-md text-[13px] sm:text-[15px] cursor-pointer hover:opacity-90 transition-opacity"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* ================= BIG BACKGROUND TYPOGRAPHY ================= */}
        <div className="w-full overflow-hidden flex justify-center md:justify-center items-end pt-10 md:pt-0">
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
            className="ml-0 md:-ml-15 font-archivo h-auto md:h-full pt-4 md:pt-12 uppercase text-[28vw] sm:text-[24vw] md:text-[380px] leading-[0.75] md:leading-[0.8] overflow-hidden font-bold text-[#1E1E1E] tracking-tighter select-none pointer-events-none text-center md:text-left"
          >
            ahmd
          </motion.div>
        </div>

      </div>
    </section>
  );
}