"use client";
import { ArrowUpRight } from "lucide-react";
import { FeaturedProjects } from "./featuredProjectsSec";
import { Testimonials } from "./testimonialsSec";
import Services from "./servicesSec";
import Navbar from "../components/ui/Navbar";
import HeroSec from "./heroSec";
import Footer from "../components/ui/Footer";
import ContactSection from "./contactSec";
import Marquee from "react-fast-marquee";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <HeroSec />

      {/* <TextReveal /> */}
      <Services />

      <FeaturedProjects />
      <Testimonials />

      {/* ==================== Divider ====================*/}
      <Marquee pauseOnHover={true} speed={70} className="bg-[#101010]">
        <div className="flex items-center space-x-20 text-[#F2EFEB] pr-20 select-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>
              <h2 className="text-5xl md:text-8xl font-semibold text-[#F5F4EE] tracking-tight pb-4">
                Get In Touch
              </h2>
              <ArrowUpRight size={100} />
            </div>
          ))}
        </div>
      </Marquee>

      {/* ================================================= */}

      <ContactSection />
      {/* <Projects/> */}
      <Footer />
    </>
  );
}
