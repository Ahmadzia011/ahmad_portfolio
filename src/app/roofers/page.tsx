{/*
  /roofers — landing page for ahmadzia.site
  ------------------------------------------------------------------
  DROP-IN:
  - Next.js App Router: save as  app/roofers/page.tsx
  - Next.js Pages Router: save as  pages/roofers.tsx  (remove the `metadata` export)
  - Requires: Tailwind CSS + lucide-react (both already used on ahmadzia.site)
  - Fonts/colors inherit from the site's globals (Archivo body, paper/ink/dark
    theme). All colors below use arbitrary hex values matching the site's
    compiled theme tokens, so this works even without the named tokens.
  - No client JS: FAQ uses native <details>. No animations beyond hover states.
*/}

import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DFW Roofers — Stop Losing Jobs to Missed Calls | Ahmad Zia",
  description:
    "I help Dallas–Fort Worth roofing companies catch every missed call and turn it into a booked estimate. Free missed-revenue audit.",
};

const WHATSAPP = "https://wa.me/923279683075";
const EMAIL = "mailto:ahmadzia.devs@gmail.com";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-[#A1A1A1]">
      {children}
    </p>
  );
}

function CtaButton({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-xl px-7 py-4 text-[16px] font-semibold tracking-tight transition-all duration-200 hover:scale-[1.03] active:scale-95 ${
        light
          ? "bg-[#F2EFEB] text-[#111111] border border-[#737373] hover:bg-transparent hover:text-[#F2EFEB]"
          : "bg-black text-white border border-[#737373] hover:bg-transparent hover:text-black"
      }`}
    >
      {children}
      <ArrowUpRight className="h-5 w-5" strokeWidth={2.25} />
    </a>
  );
}

const pains = [
  {
    n: "01",
    title: "Missed calls",
    body: "Most callers don't leave a voicemail — they just call the next company on Google. Every crew day has a window where nobody can pick up.",
  },
  {
    n: "02",
    title: "Slow quotes",
    body: "The roofer who responds first wins the job most of the time. If your estimate takes two days, someone else's took two hours.",
  },
  {
    n: "03",
    title: "Silent reviews",
    body: "Unanswered bad reviews tell every future customer you don't care — even the ones you fixed. Your competitors' replies are winning jobs right now.",
  },
];

const systems = [
  {
    n: "01",
    title: "Missed-call text-back",
    body: "Someone calls while you're on a roof? They get a text in under a minute: “Sorry we missed you — want a free estimate?” The conversation starts without you lifting a finger.",
  },
  {
    n: "02",
    title: "Instant estimate booking",
    body: "Your website and Google profile get a booking path that works at 11pm on a Sunday. The customer picks a time — you wake up to a full calendar.",
  },
  {
    n: "03",
    title: "Review engine",
    body: "Every finished job automatically asks for a Google review. Bad ones get flagged to you first, so you can fix them before they go public.",
  },
  {
    n: "04",
    title: "Follow-up that never forgets",
    body: "Quotes that went quiet get polite, automatic follow-ups. Most roofers leave 20–30% of their revenue sitting in quotes nobody chased.",
  },
];

const steps = [
  {
    n: "01",
    title: "Free audit",
    body: "I inspect your website, reviews, and response setup and send you a one-page report: where jobs are leaking and what it's costing you. Free, no call required.",
  },
  {
    n: "02",
    title: "Install",
    body: "You approve the plan. I set everything up in days, not months — connected to your existing number and website.",
  },
  {
    n: "03",
    title: "You work, it books",
    body: "Estimates land on your calendar while you're on the job. You just show up and close.",
  },
];

const faqs = [
  {
    q: "Do I need a new website?",
    a: "No. I work with what you have. If your site needs a small fix to capture leads, I'll tell you exactly what — most take an afternoon.",
  },
  {
    q: "I'm not tech-savvy. Will I have to learn software?",
    a: "No. If you can answer a text message, you can run this. I set it up, you just get the bookings.",
  },
  {
    q: "How fast does it work?",
    a: "Most installs are live within a week. The missed-call text-back starts catching jobs on day one.",
  },
  {
    q: "What does it cost?",
    a: "Depends on which systems you need. The audit is free and the quote is fixed — no hourly billing, no surprises.",
  },
  {
    q: "Why roofers? Why DFW?",
    a: "Because I've studied this market specifically — I know where DFW roofers lose jobs, and I built these systems for exactly those leaks.",
  },
];

export default function RoofersPage() {
  return (
    <main className="bg-[#F2EFEB] text-[#111111] antialiased">
      {/* ————— Floating nav pill (mirrors site nav) ————— */}
      <header className="fixed left-1/2 top-5 z-50 -translate-x-1/2">
        <nav className="flex items-center gap-6 rounded-full bg-[#F2EFEB]/70 py-3 pl-6 pr-3 shadow-lg backdrop-blur-md">
          <a href="/" className="text-[14px] font-medium tracking-tight">
            Ahmad Zia
          </a>
          <a
            href="#audit"
            className="rounded-full bg-black px-5 py-2 text-[14px] font-medium text-white transition-transform duration-200 hover:scale-105"
          >
            Free audit
          </a>
        </nav>
      </header>

      {/* ————— 01 · HERO (paper) ————— */}
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-28 text-center">
        <Eyebrow>
          <span className="text-[#525252]">/ FOR DFW ROOFING COMPANIES</span>
        </Eyebrow>
        <h1 className="mt-6 max-w-5xl text-[clamp(2.75rem,7vw,6rem)] font-extrabold uppercase leading-[0.95] tracking-tighter">
          Every missed call is a roof you&apos;ll never sell.
        </h1>
        <p className="mt-8 max-w-2xl text-[17px] font-light leading-relaxed text-[#525252]">
          You&apos;re on a roof, under a house, or driving between jobs when the
          phone rings. That caller doesn&apos;t leave a voicemail — they call
          the next roofer on Google. I install a simple system that catches
          every missed call, answers in seconds, and books the estimate for
          you. While you&apos;re working.
        </p>
        <div className="mt-10">
          <CtaButton href="#audit">Get my free missed-revenue audit</CtaButton>
        </div>
        <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.1em] text-[#737373]">
          Takes 2 minutes · No call required
        </p>
      </section>

      {/* ————— 02 · THE PROBLEM (dark) ————— */}
      <section className="bg-[#101010] py-28 text-[#F2EFEB] md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>/ THE PROBLEM</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] font-extrabold tracking-tight">
            Your best jobs are going to whoever answers first.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pains.map((p) => (
              <div
                key={p.n}
                className="rounded-2xl border border-[#2A2B2E] bg-[#17181A] p-8 transition-colors duration-200 hover:border-[#737373]"
              >
                <p className="font-mono text-[12px] tracking-[0.1em] text-[#737373]">
                  {p.n}
                </p>
                <h3 className="mt-4 text-[24px] font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed text-[#CDCCC8]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— 03 · WHAT I INSTALL (dark) ————— */}
      <section className="bg-[#101010] pb-28 text-[#F2EFEB] md:pb-40">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>/ WHAT I INSTALL</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] font-extrabold tracking-tight">
            Four systems. One result: no lead left behind.
          </h2>
          <div className="mt-14 divide-y divide-white/20 border-y border-white/20">
            {systems.map((s) => (
              <div
                key={s.n}
                className="group grid gap-4 py-8 transition-colors duration-200 md:grid-cols-[80px_1fr_2fr] md:items-baseline"
              >
                <p className="font-mono text-[14px] tracking-[0.1em] text-[#737373]">
                  {s.n}
                </p>
                <h3 className="text-[24px] font-semibold tracking-tight transition-transform duration-200 group-hover:translate-x-1">
                  {s.title}
                </h3>
                <p className="max-w-2xl text-[16px] leading-relaxed text-[#A1A1A1]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.1em] text-[#737373]">
            No new software for you to learn — it runs on the phone you already
            carry.
          </p>
        </div>
      </section>

      {/* ————— 04 · HOW IT WORKS (dark, 3-col) ————— */}
      <section className="bg-[#101010] pb-28 text-[#F2EFEB] md:pb-40">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>/ HOW IT WORKS</Eyebrow>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:divide-x md:divide-white/20">
            {steps.map((s, i) => (
              <div key={s.n} className={i > 0 ? "md:pl-10" : ""}>
                <p className="font-mono text-[14px] tracking-[0.1em] text-[#737373]">
                  {s.n}
                </p>
                <h3 className="mt-4 text-[24px] font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed text-[#CDCCC8]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— 05 · AUDIT CTA (dark, statement) ————— */}
      <section
        id="audit"
        className="bg-[#101010] pb-28 text-center text-[#F2EFEB] md:pb-40"
      >
        <div className="mx-auto max-w-5xl px-6">
          <Eyebrow>/ FREE AUDIT</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.5rem,6vw,5rem)] font-extrabold uppercase leading-[0.95] tracking-tighter">
            Find out what you&apos;re losing. Free.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] font-light leading-relaxed text-[#CDCCC8]">
            I&apos;ll audit your business the same way I&apos;d audit any DFW
            roofer — website, reviews, response gaps — and show you the number.
            If nothing&apos;s leaking, I&apos;ll tell you that too.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton href={WHATSAPP} light>
              WhatsApp me for the audit
            </CtaButton>
            <CtaButton href={EMAIL} light>
              Email me instead
            </CtaButton>
          </div>
        </div>
      </section>

      {/* ————— 06 · FAQ (paper) ————— */}
      <section className="mx-auto max-w-4xl px-6 py-28 md:py-40">
        <Eyebrow>
          <span className="text-[#525252]">/ FAQ</span>
        </Eyebrow>
        <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold tracking-tight">
          Fair questions.
        </h2>
        <div className="mt-12 divide-y divide-black/15 border-y border-black/15">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[20px] font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="font-mono text-[16px] text-[#737373] transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-[#525252]">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ————— 07 · CONTACT (dark) ————— */}
      <section className="bg-[#101010] py-28 text-[#F2EFEB] md:py-40">
        <div className="mx-auto max-w-6xl px-6">
          <Eyebrow>/ CONTACT</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] font-extrabold tracking-tight">
            Let&apos;s find your leaks.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <a
              href={WHATSAPP}
              className="rounded-2xl border border-[#2A2B2E] bg-[#17181A] p-8 transition-colors duration-200 hover:border-[#737373]"
            >
              <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-[#737373]">
                Fastest
              </p>
              <p className="mt-3 flex items-center gap-2 text-[24px] font-semibold tracking-tight">
                WhatsApp <ArrowUpRight className="h-5 w-5" />
              </p>
              <p className="mt-2 text-[16px] text-[#A1A1A1]">
                +92 327 9683075
              </p>
            </a>
            <a
              href={EMAIL}
              className="rounded-2xl border border-[#2A2B2E] bg-[#17181A] p-8 transition-colors duration-200 hover:border-[#737373]"
            >
              <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-[#737373]">
                Or email
              </p>
              <p className="mt-3 flex items-center gap-2 text-[24px] font-semibold tracking-tight">
                Email <ArrowUpRight className="h-5 w-5" />
              </p>
              <p className="mt-2 text-[16px] text-[#A1A1A1]">
                ahmadzia.devs@gmail.com
              </p>
            </a>
          </div>
          <p className="mt-12 text-center font-mono text-[12px] uppercase tracking-[0.1em] text-[#737373]">
            © 2026 Ahmad Zia · DFW Roofing Growth
          </p>
        </div>
      </section>
    </main>
  );
}
