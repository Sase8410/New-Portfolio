import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const serif = {
  fontFamily: 'Georgia, "Times New Roman", serif',
};

const mono = {
  fontFamily: '"Courier New", monospace',
};

function ProjectIllustration({ title }: { title: string }) {
  const name = title.toLowerCase();

  const isMatrix = /lu|sparse|matrix/.test(name);
  const isAnalytics = /smash|analytics|performance/.test(name);
  const isSearch = /amazon|review|search|opinion/.test(name);
  const isSofa = /sofa/.test(name);

  return (
    <svg
      viewBox="0 0 240 150"
      fill="none"
      aria-hidden="true"
      className="h-auto w-full text-blue-500"
    >
      {/* Small coordinate grid */}
      <g stroke="currentColor" strokeOpacity="0.08">
        {[30, 60, 90, 120, 150, 180, 210].map((x) => (
          <path key={`x-${x}`} d={`M${x} 15V135`} />
        ))}

        {[30, 60, 90, 120].map((y) => (
          <path key={`y-${y}`} d={`M15 ${y}H225`} />
        ))}
      </g>

      {isMatrix ? (
        <>
          {/* Lower and upper triangular patterns */}
          <g
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
          >
            <path d="M33 36H27V108H33 M99 36H105V108H99" />
            <path d="M141 36H135V108H141 M207 36H213V108H207" />
          </g>

          {Array.from({ length: 4 }, (_, row) =>
            Array.from({ length: 4 }, (_, col) => (
              <rect
                key={`lower-${row}-${col}`}
                x={38 + col * 16}
                y={43 + row * 16}
                width="8"
                height="8"
                rx="1"
                fill="currentColor"
                opacity={col <= row ? 0.7 : 0.1}
              />
            ))
          )}

          {Array.from({ length: 4 }, (_, row) =>
            Array.from({ length: 4 }, (_, col) => (
              <rect
                key={`upper-${row}-${col}`}
                x={146 + col * 16}
                y={43 + row * 16}
                width="8"
                height="8"
                rx="1"
                fill="currentColor"
                opacity={col >= row ? 0.7 : 0.1}
              />
            ))
          )}

          <circle cx="120" cy="75" r="2" fill="#ec4899" />

          <text
            x="120"
            y="132"
            textAnchor="middle"
            fill="currentColor"
            fontSize="12"
            fontFamily="Georgia, serif"
            fontStyle="italic"
          >
            A = LU
          </text>
        </>
      ) : isAnalytics ? (
        <>
          <path
            d="M35 25V115H215"
            stroke="currentColor"
            strokeOpacity="0.4"
          />

          <ellipse
            cx="90"
            cy="88"
            rx="38"
            ry="22"
            stroke="currentColor"
            strokeDasharray="3 5"
            strokeOpacity="0.35"
          />

          <ellipse
            cx="169"
            cy="53"
            rx="36"
            ry="24"
            stroke="#ec4899"
            strokeDasharray="3 5"
            strokeOpacity="0.4"
          />

          {[
            [65, 94],
            [80, 79],
            [91, 97],
            [105, 84],
            [112, 96],
            [77, 101],
          ].map(([x, y], index) => (
            <circle
              key={`blue-${index}`}
              cx={x}
              cy={y}
              r="3.5"
              fill="currentColor"
              fillOpacity="0.75"
            />
          ))}

          {[
            [149, 57],
            [163, 42],
            [178, 63],
            [185, 47],
            [160, 66],
            [174, 51],
          ].map(([x, y], index) => (
            <circle
              key={`pink-${index}`}
              cx={x}
              cy={y}
              r="3.5"
              fill="#ec4899"
              fillOpacity="0.7"
            />
          ))}
        </>
      ) : isSearch ? (
        <>
          <path
            d="M40 25V115H215"
            stroke="currentColor"
            strokeOpacity="0.3"
          />

          <path
            d="M40 115L177 38 M169 39L177 38L173 46"
            stroke="currentColor"
            strokeWidth="2"
          />

          <path
            d="M40 115L198 79 M190 75L198 79L192 85"
            stroke="#ec4899"
            strokeWidth="2"
          />

          <path
            d="M89 87A56 56 0 0 1 95 102"
            stroke="currentColor"
            strokeOpacity="0.6"
          />

          <g
            fill="currentColor"
            fontFamily="Georgia, serif"
            fontSize="14"
            fontStyle="italic"
          >
            <text x="182" y="34">q</text>
            <text x="204" y="79">d</text>
            <text x="101" y="92">θ</text>
          </g>
        </>
      ) : isSofa ? (
        <>
          <path
            d="M25 124H206V20 M25 76H158V20"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />

          <path
            d="M124 109
               C111 96 119 72 143 56
               C166 40 189 49 193 69
               L176 90
               C170 78 159 77 149 86
               C140 95 144 103 150 109
               Z"
            fill="currentColor"
            fillOpacity="0.12"
            stroke="currentColor"
            strokeWidth="1.5"
          />

          <path
            d="M90 102C108 101 115 83 129 69"
            stroke="#ec4899"
            strokeDasharray="4 5"
            strokeWidth="1.5"
          />
        </>
      ) : (
        <>
          <path
            d="M25 78H220 M120 20V130"
            stroke="currentColor"
            strokeOpacity="0.3"
          />

          <path
            d="M25 93
               C45 93 48 40 72 40
               S99 113 123 113
               S151 43 175 43
               S200 91 220 91"
            stroke="currentColor"
            strokeWidth="2"
          />

          <circle cx="123" cy="113" r="4" fill="#ec4899" />

          <text
            x="192"
            y="27"
            fill="currentColor"
            fontSize="13"
            fontFamily="Georgia, serif"
            fontStyle="italic"
          >
            f(x)
          </text>
        </>
      )}
    </svg>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative z-20 px-6 py-20 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <header className="mb-10 sm:mb-14">
          <p
            className="text-xs uppercase tracking-[0.24em] text-blue-500"
            style={mono}
          >
            Selected work
          </p>

          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2
                id="projects-heading"
                className="text-4xl font-normal tracking-tight text-slate-900 sm:text-5xl"
                style={serif}
              >
                A collection of investigations.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Exploring computation, mathematical structure, and
                patterns in data.
              </p>
            </div>

            <span
              className="pb-1 text-xs text-slate-400"
              style={mono}
            >
              {String(projects.length).padStart(2, "0")} projects
            </span>
          </div>
        </header>

        {/* Open research index */}
        <div className="border-t border-slate-900/20">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group relative border-b border-slate-900/15 py-8 sm:py-10"
            >
              <div className="grid items-start gap-5 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-6 lg:grid-cols-[56px_minmax(0,1fr)_220px] lg:gap-8">
                {/* Entry number */}
                <span
                  aria-hidden="true"
                  className="pt-1 text-sm text-blue-500/70"
                  style={mono}
                >
                  {String(index + 1).padStart(2, "0")}
                  <span className="text-pink-400">.</span>
                </span>

                {/* Project information */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <p
                      className="text-[11px] leading-5 text-slate-500"
                      style={mono}
                    >
                      {project.date}
                    </p>

                    <span
                      aria-hidden="true"
                      className="text-slate-300"
                    >
                      /
                    </span>

                    <span
                      className="text-[10px] uppercase tracking-[0.13em] text-slate-500"
                      style={mono}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3
                    className="mt-3 text-2xl font-normal leading-tight tracking-tight text-slate-900 sm:text-3xl"
                    style={serif}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-baseline gap-3 decoration-blue-300 decoration-1 underline-offset-8 transition-colors hover:text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-blue-500"
                      style={serif}
                    >
                      {project.title}

                      <ArrowUpRight
                        size={20}
                        aria-hidden="true"
                        className="shrink-0 self-center text-blue-400 transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                      />
                    </Link>
                  </h3>

                  <p className="mt-4 max-w-[65ch] text-sm leading-7 text-slate-600 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <p
                      className="text-[11px] leading-5 text-slate-500"
                      style={mono}
                    >
                      {project.tags.join(" / ")}
                    </p>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source for ${project.title} on GitHub`}
                        className="inline-flex items-center gap-1 text-xs text-pink-500 underline-offset-4 transition hover:text-pink-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
                      >
                        Source code
                        <ArrowUpRight size={12} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Decorative mathematical sketch */}
                <div className="hidden self-center opacity-60 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 lg:block">
                  <ProjectIllustration title={project.title} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <p
          className="mt-5 text-right text-[10px] tracking-wide text-slate-400"
          style={mono}
        >
          Mathematical sketches are illustrative.
        </p>
      </div>
    </section>
  );
}