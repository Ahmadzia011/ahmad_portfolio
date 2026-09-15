import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/src/components/ui/Navbar";
import Footer from "@/src/components/ui/Footer";
import { getProject, PROJECTS } from "@/src/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const currentIndex = PROJECTS.findIndex((item) => item.slug === project.slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const projectNumber = (currentIndex + 1).toString().padStart(2, "0");
  const projectCount = PROJECTS.length.toString().padStart(2, "0");

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navbar />

      <header className="mx-auto w-[88vw] max-w-7xl pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="flex items-center justify-between border-y border-black/20 py-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-black"
          >
            <ArrowLeft size={16} aria-hidden="true" /> All projects
          </Link>
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Case study {projectNumber} / {projectCount}
          </span>
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-12 md:items-end md:gap-8 md:py-24">
          <div className="md:col-span-8">
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              / {project.category} | {project.year}
            </p>
            <h1 className="mt-7 text-5xl font-bold uppercase leading-none tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
              {project.title}
            </h1>
          </div>

          <div className="border-l border-black/20 pl-6 md:col-span-4 md:pl-8">
            <p className="text-lg leading-relaxed text-neutral-600 md:text-xl">
              {project.summary}
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto w-[88vw] max-w-7xl">
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-neutral-200 md:aspect-video">
          {project.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={project.image}
              aria-label={`${project.title} project demonstration`}
              className="h-full w-full object-cover object-top"
            >
              <source src={project.video} type="video/mp4" />
            </video>
          ) : project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} project interface`}
              fill
              priority
              sizes="96vw"
              className={`${project.image === "/projects/CryptoSentry_1.png" ? "object-fill" : "object-cover"} object-top`}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-neutral-900 p-8 text-center text-5xl font-semibold text-white md:text-8xl">
              {project.title}
            </div>
          )}
        </div>
      </section>

      <section id="project-overview" className="border-b border-black/20">
        <div className="mx-auto grid w-[88vw] max-w-7xl py-20 md:py-28">

          <article className="pb-20">
            <SectionLabel>Project overview</SectionLabel>
            <p className="mt-6 max-7-3xl text-lg leading-relaxed text-neutral-600 md:text-xl">
              {project.overview}
            </p>
          </article>

          <aside>
            <SectionLabel>Project details</SectionLabel>
            <dl className="mt-8 grid grid-cols-[1fr_2fr_2fr_2fr] gap-x-1 gap-y-10 border-t border-black/20 pt-6">
              <ProjectMeta label="Year" value={project.year} />
              <ProjectMeta label="Role" value={project.role} />
              <ProjectMeta label="Services" value={project.services.join(", ")} />
              <ProjectMeta label="Toolkit" value={project.stack.join(", ")} />
            </dl>
          </aside>

        </div>
      </section>

      <section id="project-process" className="bg-ink py-20 text-paper md:py-28">
        <div className="mx-auto w-[88vw] max-w-7xl">
          <div className="max-w-4xl">
            <SectionLabel light>Process</SectionLabel>
            <h2 className="mt-8 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              From challenge to working product.
            </h2>
          </div>

          <div className="mt-14 grid divide-y divide-white/20 border-t border-white/20 pt-10 md:grid-cols-2 md:divide-x md:divide-y-0">
            <CaseStudyBlock
              index="01"
              title="The challenge"
              copy={project.challenge}
            />
            <CaseStudyBlock
              index="02"
              title="The approach"
              copy={project.approach}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[88vw] max-w-7xl gap-16 py-24 md:grid-cols-12 md:gap-8 md:py-32">
        <article className="md:col-span-7">
          <SectionLabel>The result</SectionLabel>
          <h2 className="mt-8 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            A focused foundation designed to scale with the product.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
            {project.outcome}
          </p>
        </article>

        <aside className="self-end rounded-3xl bg-panel p-7 text-paper md:col-span-5 md:p-9">
          <div
            className="h-1 w-16 rounded-full"
            style={{ backgroundColor: project.accent }}
          />
          <p className="mt-8 font-mono text-xs uppercase tracking-widest text-white/70">
            Project highlights
          </p>
          <ul className="mt-10 space-y-5">
            {project.highlights.map((highlight, index) => (
              <li key={highlight} className="flex gap-5 border-t border-white/30 pt-5 text-lg font-medium">
                <span className="font-mono text-xs text-white/60">0{index + 1}</span>
                {highlight}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <Link
        href={`/projects/${nextProject.slug}`}
        className="group block border-y border-black/15 bg-black/5 py-20 transition-colors hover:bg-black/10 md:py-28"
      >
        <div className="mx-auto flex w-[88vw] max-w-7xl items-end justify-between gap-8">
          <div>
            <SectionLabel>Next project</SectionLabel>
            <p className="mt-7 text-4xl font-semibold uppercase tracking-tighter sm:text-5xl md:text-8xl">
              {nextProject.title}
            </p>
          </div>
          <span className="mb-2 flex size-14 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-transform group-hover:rotate-45 md:size-20">
            <ArrowUpRight aria-hidden="true" />
          </span>
        </div>
      </Link>

      <Footer />
    </main>
  );
}

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-widest text-neutral-500">
        {label}
      </dt>
      <dd className="mt-2 text-base leading-relaxed text-ink">{value}</dd>
    </div>
  );
}

function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-widest ${
        light ? "text-neutral-400" : "text-neutral-500"
      }`}
    >
      / {children}
    </p>
  );
}

function CaseStudyBlock({
  index,
  title,
  copy,
}: {
  index: string;
  title: string;
  copy: string;
}) {
  return (
    <article className="py-10 first:pt-0 last:pb-0 md:px-10 md:py-0 md:first:pl-0 md:last:pr-0">
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-neutral-500">
        <span>/ Phase</span>
        <span>{index}</span>
      </div>
      <h3 className="mt-8 text-2xl font-semibold text-paper md:text-3xl">
        {title}
      </h3>
      <p className="mt-5 text-lg leading-relaxed text-neutral-300 md:text-xl">
        {copy}
      </p>
    </article>
  );
}
