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
      className="h-[65vh] bg-[#101010] w-screen overflow-hidden text-[#F2EFEB]"
    >
      <div className="w-[60vw] h-full mx-auto">
        <div className="flex h-1/2 text-[#F2EFEB] items-center justify-between">

          {/* Left Hero Statement */}
          <div className="w-1/2 pr-12 text-[52px] font-extrabold tracking-tight leading-none font-archivo">
            Scaling Start-ups for Growth.
          </div>

          {/* Quick Links Column */}
          <div className="w-1/2 pl-12 flex flex-col justify-center space-y-4">
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
                  className="bg-[#F2EFEB] text-[#111111] font-archivo font-medium py-2 px-4 rounded-md text-[15px] cursor-pointer hover:opacity-90 transition-opacity"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Big Background Typography (Untouched) */}
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
          className="-ml-15 font-archivo h-full pt-12 uppercase text-[400px] leading-[0.8] overflow-hidden font-bold text-[#1E1E1E] tracking-tighter select-none"
        >
          ahmd
        </motion.div>
      </div>
    </section>
  );
}