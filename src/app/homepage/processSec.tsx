const PROCESS = [
  {
    number: "01",
    title: "Frame the right problem",
    description:
      "We align on the audience, business goal, must-have scope, and what success should look like before production starts.",
  },
  {
    number: "02",
    title: "Design and build in sync",
    description:
      "Interface decisions stay grounded in real content and technical constraints, keeping the work fast, cohesive, and practical.",
  },
  {
    number: "03",
    title: "Refine, test, and ship",
    description:
      "Responsive behavior, accessibility, performance, and edge cases get reviewed before a clean production handoff.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process-section" className="bg-dark px-6 py-28 text-paper md:px-20 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="border-b border-white/20 pb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            / How I work
          </p>
        </div>

        <div className="grid md:grid-cols-3">
          {PROCESS.map((step) => (
            <article
              key={step.number}
              className="border-b border-white/20 py-10 md:border-b-0 md:border-r md:px-8 md:py-14 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="font-mono text-xs text-neutral-500">{step.number}</span>
              <h3 className="mt-14 text-2xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-5 leading-relaxed text-neutral-400">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
