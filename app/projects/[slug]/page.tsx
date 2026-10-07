import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const serif = {
  fontFamily: 'Georgia, "Times New Roman", serif',
};

const sans = {
  fontFamily: "Arial, Helvetica, sans-serif",
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const sectionNumber = (index: number) =>
    String(index + 1).padStart(2, "0");

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#292824] selection:bg-[#dce6df]">
      <main className="mx-auto max-w-6xl px-6 pb-16 pt-8 sm:px-10 sm:pt-12">
        {/* Publication masthead */}
        <div
          className="flex flex-wrap items-center justify-between gap-5 border-b border-[#292824]/25 pb-5"
          style={sans}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[#605e57] transition hover:text-[#365b4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#365b4b]"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Back to projects
          </Link>

          <p
            className="text-[10px] uppercase tracking-[0.24em] text-[#77746b] sm:text-xs"
            style={sans}
          >
            Santiago Segovia · Project studies
          </p>
        </div>

        <article aria-labelledby="project-title">
          {/* Title and author information */}
          <header className="mx-auto max-w-4xl pb-12 pt-14 text-center sm:pb-16 sm:pt-20">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <span
                className="text-[10px] uppercase tracking-[0.24em] text-[#365b4b] sm:text-xs"
                style={sans}
              >
                Technical project report
              </span>

              <span aria-hidden="true" className="text-[#aaa69a]">
                /
              </span>

              <span
                className="text-[10px] uppercase tracking-[0.18em] text-[#77746b] sm:text-xs"
                style={sans}
              >
                {project.status}
              </span>
            </div>

            <h1
              id="project-title"
              className="mt-7 text-4xl font-normal leading-[1.12] tracking-[-0.035em] text-[#252520] sm:text-5xl lg:text-6xl"
              style={serif}
            >
              {project.title}
            </h1>

            <p
              className="mt-7 text-lg italic text-[#56554e]"
              style={serif}
            >
              Santiago Segovia
            </p>

            <p
              className="mt-2 text-xs tracking-wide text-[#77746b]"
              style={sans}
            >
              {project.date}
            </p>

            <div className="mx-auto mt-8 h-px w-16 bg-[#365b4b]/50" />

            <p
              className="mx-auto mt-6 max-w-2xl text-xs leading-6 text-[#77746b]"
              style={sans}
            >
              <strong className="font-semibold text-[#514f48]">
                Technologies
              </strong>
              {" — "}
              {project.tags.join(" · ")}
            </p>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 border-b border-[#365b4b]/40 pb-1 text-xs text-[#365b4b] transition hover:border-[#365b4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#365b4b]"
                style={sans}
              >
                View source on GitHub
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
          </header>

          {/* Abstract */}
          <div className="grid gap-x-12 lg:grid-cols-[180px_minmax(0,1fr)]">
            <div aria-hidden="true" className="hidden lg:block" />

            <section
              aria-labelledby="abstract-heading"
              className="border-y border-[#292824]/25 py-8 sm:py-10"
            >
              <h2
                id="abstract-heading"
                className="text-xs font-semibold uppercase tracking-[0.22em] text-[#365b4b]"
                style={sans}
              >
                Abstract
              </h2>

              <p
                className="mt-4 max-w-[70ch] text-lg leading-[1.85] text-[#47463f] sm:text-xl"
                style={serif}
              >
                {project.description}
              </p>
            </section>
          </div>

          <div className="mt-10 grid items-start gap-12 lg:mt-14 lg:grid-cols-[180px_minmax(0,1fr)]">
            {/* Marginal contents */}
            <aside className="lg:sticky lg:top-10">
              <nav aria-label="Project sections">
                <p
                  className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a867b]"
                  style={sans}
                >
                  Contents
                </p>

                <ol className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-1 lg:gap-y-4">
                  {project.sections.map((section, index) => (
                    <li key={`contents-${index}`}>
                      <a
                        href={`#section-${index + 1}`}
                        className="group flex items-baseline gap-3 text-xs leading-5 text-[#77746b] transition hover:text-[#365b4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#365b4b]"
                        style={sans}
                      >
                        <span
                          className="shrink-0 text-[10px] tabular-nums text-[#a09b8e] group-hover:text-[#365b4b]"
                          style={sans}
                        >
                          {sectionNumber(index)}
                        </span>

                        <span style={sans}>{section.heading}</span>
                      </a>
                    </li>
                  ))}
                </ol>

                <div className="mt-7 hidden h-px w-8 bg-[#292824]/25 lg:block" />
              </nav>
            </aside>

            {/* Continuous article */}
            <div className="min-w-0">
              {project.sections.map((section, index) => (
                <section
                  id={`section-${index + 1}`}
                  aria-labelledby={`heading-${index + 1}`}
                  key={`section-${index}`}
                  className="scroll-mt-10 pb-12 sm:pb-16"
                >
                  <div className="flex items-baseline gap-4 sm:gap-5">
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-sm tabular-nums text-[#648071]"
                      style={serif}
                    >
                      {sectionNumber(index)}.
                    </span>

                    <h2
                      id={`heading-${index + 1}`}
                      className="text-2xl font-normal leading-tight tracking-[-0.02em] text-[#292824] sm:text-3xl"
                      style={serif}
                    >
                      {section.heading}
                    </h2>
                  </div>

                  <div className="mt-5 space-y-5 sm:mt-6">
                    {section.text
                      .split(/\n\s*\n/)
                      .filter((paragraph) => paragraph.trim())
                      .map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="max-w-[72ch] text-[17px] leading-[1.95] text-[#514f48] sm:text-lg"
                          style={serif}
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </section>
              ))}

              {/* Closing mark */}
              <div
                aria-hidden="true"
                className="flex items-center justify-center gap-3 pb-12 text-[#8a867b]"
              >
                <div className="h-px w-8 bg-[#292824]/20" />
                <span style={serif}>∎</span>
                <div className="h-px w-8 bg-[#292824]/20" />
              </div>
            </div>
          </div>
        </article>

        <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-[#292824]/25 pt-6">
          <p
            className="text-[10px] uppercase tracking-[0.18em] text-[#8a867b]"
            style={sans}
          >
            Santiago Segovia · Research & development
          </p>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs text-[#365b4b] transition hover:text-[#233f32] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#365b4b]"
            style={sans}
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Explore other projects
          </Link>
        </footer>
      </main>
    </div>
  );
}