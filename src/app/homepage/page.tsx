"use client";
import { ArrowUpRight } from "lucide-react";
import { FeaturedProjects } from "./featuredProjectsSec";
import { Testimonials } from "./testimonialsSec";
import Services from "./servicesSec";
import HeroSec from "./heroSec";
import ContactSection from "./contactSec";
import Marquee from "react-fast-marquee";
import Footer from "@/src/components/ui/Footer";
import Navbar from "@/src/components/ui/Navbar";
import { useMediaQuery } from "@/src/lib/mediaQuery";

export default function Dashboard() {
    const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <section className="mx-0">
      <Navbar />
      <HeroSec />

      {/* <TextReveal /> */}
      <Services />

      <FeaturedProjects />
      <Testimonials />

      {/* ==================== Divider ====================*/}

      <Marquee pauseOnHover={true} speed={70} className="bg-[#101010] overflow-hidden">
        <div className="flex items-center space-x-5 text-[#F2EFEB] pr-20 select-none">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex space-x-3 last:space-x-0 ">
              <h2 className="text-4xl md:text-8xl font-semibold text-[#F5F4EE] tracking-tight md:pb-4">
                Get In Touch
              </h2>
              <ArrowUpRight size={isMobile ? 40 : 100} />
            </div>
          ))}
        </div>
      </Marquee>

      {/* ================================================= */}

      <ContactSection />
      {/* <Projects/> */}
      <Footer />
    </section>
  );
}
