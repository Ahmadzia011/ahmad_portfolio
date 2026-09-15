import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/src/components/ui/Navbar";
import Footer from "@/src/components/ui/Footer";
import ProjectCard from "@/src/components/projects/ProjectCard";
import { PROJECTS } from "@/src/data/projects";

export const metadata: Metadata = {
  title: "Selected Projects",
  description:
    "Explore selected web, SaaS, AI, and product design work by Ahmad Zia.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navbar />

      <header className="mx-auto flex min-h-[22vh] w-[88vw] max-w-7xl flex-col justify-between pb-10 pt-24 md:pt-32">
        <div className="flex items-center justify-between border-b border-black/20 pb-4 font-mono text-xs uppercase tracking-widest text-neutral-600">
          <span>/ Selected work</span>
          <span>{PROJECTS.length.toString().padStart(2, "0")} case studies</span>
        </div>

        <div className="py-16 md:py-24">
          <h1 className="max-w-6xl text-6xl font-bold uppercase leading-none tracking-tighter sm:text-8xl md:text-9xl">
            Projects
          </h1>
        </div>
      </header>

      <section
        id="project-grid"
        aria-label="Project case studies"
        className="mx-auto grid w-[88vw] max-w-7xl scroll-mt-10 grid-cols-1 gap-x-8 gap-y-20 pb-20 pt-10 md:grid-cols-2 md:gap-y-28"
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.slug} project={project} priority={index < 2} />
        ))}
      </section>

      <Footer />
    </main>
  );
}
