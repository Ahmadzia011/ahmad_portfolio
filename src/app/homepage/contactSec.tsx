import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Send, ExternalLink } from "lucide-react";
import Link from "next/link";
import { SITE_EMAIL } from "@/src/constants/site.constants";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const [isOpeningEmail, setIsOpeningEmail] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpeningEmail(true);

    const subject = encodeURIComponent(`Project enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`,
    );

    window.location.href = `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`;
    window.setTimeout(() => setIsOpeningEmail(false), 1500);
  };

  return (
    <section
      id="contact-section"
      className="w-full scroll-mt-10 bg-dark py-32 font-archivo text-soft md:py-40"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6">
        <div className="grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="flex flex-col space-y-8">
            <div className="space-y-6 rounded-3xl border border-panel-border bg-panel p-8">
              <h3 className="text-2xl leading-tight text-paper md:text-3xl">
                Let&apos;s build something extraordinary together.
              </h3>

              <p className="text-sm leading-relaxed text-soft">
                Focused on delivering high-impact, modern web applications,
                custom components, and scalable digital solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="group flex h-36 flex-col justify-between rounded-2xl border border-panel-border bg-panel p-6 transition-colors duration-300 hover:border-neutral-500"
              >
                <div className="flex items-center justify-between text-paper">
                  <Mail className="size-5" />
                  <ArrowUpRight className="size-4 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-soft/60">
                    Email
                  </p>
                  <p className="truncate pt-1 text-sm font-semibold text-paper">
                    {SITE_EMAIL}
                  </p>
                </div>
              </a>

              <div className="flex h-36 flex-col justify-between rounded-2xl border border-panel-border bg-panel p-6">
                <div className="text-paper">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-soft/60">
                    Location
                  </p>
                  <p className="pt-1 text-sm font-semibold text-paper">
                    Remote / Global
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-3 overflow-hidden rounded-2xl border border-panel-border bg-panel p-6 md:flex-row md:items-center">
              <span className="font-mono text-xs uppercase tracking-wider text-soft/60">
                Next step
              </span>
              <div className="flex gap-6 text-sm font-semibold text-paper">
                <Link
                  href="/projects"
                  className="group flex items-center gap-1 transition-colors hover:text-neutral-400"
                >
                  <span>Selected work</span>
                  <ArrowUpRight className="size-3.5 opacity-60 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="group flex items-center gap-1 transition-colors hover:text-neutral-400"
                >
                  <span>Email directly</span>
                  <ExternalLink className="size-3.5 opacity-60 transition-opacity group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-panel-border bg-panel p-8 shadow-2xl md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="font-mono text-xs uppercase tracking-wider text-paper/80"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-panel-border bg-dark px-4 py-3.5 text-sm text-paper outline-none transition-colors placeholder:text-soft/30 focus:border-neutral-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="font-mono text-xs uppercase tracking-wider text-paper/80"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-panel-border bg-dark px-4 py-3.5 text-sm text-paper outline-none transition-colors placeholder:text-soft/30 focus:border-neutral-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="font-mono text-xs uppercase tracking-wider text-paper/80"
                >
                  Message
                </label>
                <textarea
                  required
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  className="w-full resize-none rounded-xl border border-panel-border bg-dark p-4 text-sm text-paper outline-none transition-colors placeholder:text-soft/30 focus:border-neutral-500"
                />
              </div>

              <p className="text-xs leading-relaxed text-soft/55">
                Submitting opens your email app with this message prepared.
                Nothing is sent without your confirmation.
              </p>

              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-neutral-200 py-4 text-sm font-semibold text-neutral-900 shadow-sm transition-all duration-200 hover:bg-neutral-300 active:scale-95"
              >
                {isOpeningEmail ? (
                  <span>Opening email app…</span>
                ) : (
                  <>
                    <span>Prepare Email</span>
                    <Send className="size-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
