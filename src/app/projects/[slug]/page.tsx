import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navbar />

      <header className="mx-auto w-[88vw] max-w-7xl pb-12 pt-20 md:pb-20 md:pt-28">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-black"
        >
          <ArrowLeft size={16} aria-hidden="true" /> All projects
        </Link>

        <div className="mt-14 grid gap-10 border-t border-black/20 pt-8 md:grid-cols-3 md:items-end md:gap-20">
          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              / {project.category}
            </p>
            <h1 className="mt-7 text-6xl font-bold uppercase leading-none tracking-tighter sm:text-8xl md:text-9xl">
              {project.title}
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-neutral-600 md:text-xl">
            {project.summary}
          </p>
        </div>
      </header>

      <section className="mx-auto w-[94vw] max-w-[1500px] px-0 md:w-[96vw]">
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-neutral-200 md:aspect-video md:rounded-4xl">
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
              className="object-cover object-top"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-neutral-900 p-8 text-center text-5xl font-semibold text-white md:text-8xl">
              {project.title}
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto grid w-[88vw] max-w-7xl gap-16 py-24 md:grid-cols-3 md:gap-24 md:py-36">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 self-start border-t border-black/20 pt-6 md:sticky md:top-32">
          <ProjectMeta label="Year" value={project.year} />
          <ProjectMeta label="Role" value={project.role} />
          <ProjectMeta label="Services" value={project.services.join(", ")} />
          <ProjectMeta label="Toolkit" value={project.stack.join(", ")} />
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            / Project overview
          </p>
          <h2 className="mt-8 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            {project.overview}
          </h2>
        </div>
      </section>

      <section className="bg-ink py-24 text-paper md:py-36">
        <div className="mx-auto grid w-[88vw] max-w-7xl gap-16 md:grid-cols-2 md:gap-24">
          <CaseStudyBlock index="01" title="The challenge" copy={project.challenge} />
          <CaseStudyBlock index="02" title="The approach" copy={project.approach} />
        </div>
      </section>

      <section className="mx-auto grid w-[88vw] max-w-7xl gap-16 py-24 md:grid-cols-2 md:gap-24 md:py-36">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            / The result
          </p>
          <h2 className="mt-8 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            A focused foundation designed to scale with the product.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
            {project.outcome}
          </p>
        </div>

        <div
          className="self-end rounded-3xl p-7 text-white md:p-9"
          style={{ backgroundColor: project.accent }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-white/70">
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
        </div>
      </section>

      <Link
        href={`/projects/${nextProject.slug}`}
        className="group block border-y border-black/15 bg-black/5 py-20 transition-colors hover:bg-black/10 md:py-28"
      >
        <div className="mx-auto flex w-[88vw] max-w-7xl items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              / Next project
            </p>
            <p className="mt-7 text-5xl font-semibold uppercase tracking-tighter md:text-8xl">
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
      <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink">{value}</p>
    </div>
  );
}

function CaseStudyBlock({ index, title, copy }: { index: string; title: string; copy: string }) {
  return (
    <article className="border-t border-white/25 pt-6">
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-neutral-500">
        <span>{title}</span>
        <span>{index}</span>
      </div>
      <p className="mt-10 text-xl leading-relaxed text-neutral-300 md:text-2xl">{copy}</p>
    </article>
  );
}
