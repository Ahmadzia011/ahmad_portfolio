import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/src/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const thumbnail = project.thumbnail ?? project.image;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block focus-visible:outline-none"
      aria-label={`View the ${project.title} case study`}
    >
      <article className="space-y-5">
        <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-neutral-200 ring-1 ring-black/5 transition-transform duration-500 group-hover:-translate-y-1 group-focus-visible:-translate-y-1">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={`${project.title} project thumbnail`}
              fill
              priority={priority}
              sizes="(max-width: 768px) 92vw, 45vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-neutral-900 p-8 text-center text-3xl font-semibold text-white">
              {project.title}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute right-5 top-5 flex size-12 translate-y-2 items-center justify-center rounded-full bg-paper text-ink opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
            <ArrowUpRight size={20} aria-hidden="true" />
          </span>
        </div>

        <div className="flex items-start justify-between gap-5 border-t border-black/15 pt-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-neutral-600">{project.category}</p>
          </div>
          <span className="font-mono text-xs text-neutral-500">{project.year}</span>
        </div>
      </article>
    </Link>
  );
}
