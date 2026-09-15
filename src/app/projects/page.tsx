import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
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

      <header className="mx-auto w-[88vw] max-w-7xl pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="flex items-center justify-between border-y border-black/20 py-4 font-mono text-xs uppercase tracking-widest text-neutral-600">
          <span>/ Selected work</span>
          <span>{PROJECTS.length.toString().padStart(2, "0")} case studies</span>
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-12 md:items-end md:gap-8 md:py-24">
          <h1 className="text-6xl font-bold uppercase leading-none tracking-tighter sm:text-8xl md:col-span-8 md:text-9xl">
            Projects
          </h1>

          <div className="border-l border-black/20 pl-6 md:col-span-4 md:pl-8">
            <p className="text-lg leading-relaxed text-neutral-600 md:text-xl">
              Digital products, AI systems, and web experiences built from
              strategy through production.
            </p>
            <a
              href="#project-grid"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider transition-opacity hover:opacity-60"
            >
              Explore the work
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <section
        id="project-grid"
        aria-label="Project case studies"
        className="mx-auto grid w-[88vw] max-w-7xl scroll-mt-24 grid-cols-1 gap-x-8 gap-y-20 border-t border-black/20 pb-24 pt-12 md:grid-cols-2 md:gap-y-28 md:pb-32 md:pt-16"
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.slug} project={project} priority={index < 2} />
        ))}
      </section>

      <Footer />
    </main>
  );
}
