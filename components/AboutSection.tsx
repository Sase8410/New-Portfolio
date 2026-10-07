import Link from "next/link";
export default function AboutSection() {
  const interests = [
    "Numerical Methods",
    "Machine Learning",
    "Database Systems",
    "Parallel Computing",
    "Data Science",
    "Full-Stack Development",
  ];

  const vectorItems = [
    ["University", "University of Houston"],
    ["Degree", "Mathematics B.S. - Dec. 2025"],
    ["Degree", "Computer Science B.S. - Dec. 2025"],
    ["University", "John Hopkins University"],
    ["Degree", "Data Science M.S. - Dec. 2031"],
    ["Focus", "Numerical Analysis"],
    ["Focus", "Machine Learning"],
    ["Focus", "Scientific Computing"],
    ["Interest", "Data Engineering"],
    ["Goal", "Complete my Masters"],
  ];

  return (
    <section id="about" className="relative z-20 px-6 py-24 md:px-20">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-300">
        Origin
      </p>

      <div className="grid gap-16 xl:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
            I'm a mathematics and computer science graduate from University of
            Houston.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-500">
            I have a strong passion for mathematics and computer science, and I
            enjoy expanding my knowledge in these fields, particularly in
            numerical analysis, machine learning, and data science. In my free
            time, I like to work on personal projects that allow me to showcase
            my skills, read books, watch movies, play video games, and football.
          </p>

          <Link
            href="/personal"
            className="mt-8 inline-flex items-center gap-2 font-mono text-lg text-[#23395d] transition-all hover:translate-x-1"
          >
            profile.details() →
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-6xl font-bold text-black-300/70">
            Profile =
          </div>

          <div className="relative w-full max-w-xl px-8 py-6">
            <div className="absolute bottom-0 left-0 top-0 w-4 rounded-l-2xl border-y-2 border-l-2 border-[#1e3a5f]" />
            <div className="absolute bottom-0 right-0 top-0 w-4 rounded-r-2xl border-y-2 border-r-2 border-[#1e3a5f]" />

            <div className="space-y-4 px-4 font-mono text-sm md:text-base">
              {vectorItems.map(([label, value]) => (
                <div
                  key={`${label}-${value}`}
                  className="grid grid-cols-[95px_1fr] gap-4 border-b border-black/5 pb-3 last:border-b-0"
                >
                  <span className="text-black-300">{label}</span>
                  <span className="text-slate-400">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}