"use client";

import { ArrowUpRight } from "lucide-react";
import { FeaturedProjects } from "./featuredProjectsSec";
// Testimonials are intentionally kept in the codebase but hidden until verified client feedback is available.
// import { Testimonials } from "./testimonialsSec";
import Services from "./servicesSec";
import HeroSec from "./heroSec";
import ContactSection from "./contactSec";
import Marquee from "react-fast-marquee";
import Footer from "@/src/components/ui/Footer";
import Navbar from "@/src/components/ui/Navbar";
import ProcessSection from "./processSec";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <HeroSec />

      <Services />

      <FeaturedProjects />
      {/* <Testimonials /> */}
      <ProcessSection />

      <Marquee pauseOnHover speed={70} className="overflow-hidden bg-dark">
        <div className="flex select-none items-center space-x-5 pr-20 text-paper">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex space-x-3 last:space-x-0 ">
              <h2 className="text-4xl font-semibold tracking-tight text-paper md:pb-4 md:text-8xl">
                Get In Touch
              </h2>
              <ArrowUpRight className="size-10 md:size-24" />
            </div>
          ))}
        </div>
      </Marquee>

      <ContactSection />
      <Footer />
    </div>
  );
}
