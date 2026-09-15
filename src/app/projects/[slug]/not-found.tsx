import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/src/components/ui/Navbar";
import Footer from "@/src/components/ui/Footer";

export default function ProjectNotFound() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navbar />
      <section className="mx-auto flex min-h-[70vh] w-[88vw] max-w-7xl flex-col justify-center border-b border-black/15 py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          / 404 | Project not found
        </p>
        <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-none tracking-tight md:text-8xl">
          This case study is no longer at this address.
        </h1>
        <Link
          href="/projects"
          className="mt-12 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper"
        >
          <ArrowLeft size={16} aria-hidden="true" /> Browse all projects
        </Link>
      </section>
      <Footer />
    </main>
  );
}
