export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-20 px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-24"
    >
      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-pink-300 sm:text-sm">
        Origin
      </p>

      <h2 className="max-w-3xl text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl">
        I'm a mathematics and computer science graduate from University of
        Houston.
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-7 text-slate-500 sm:mt-8 sm:text-lg sm:leading-8">
        I have a strong passion for mathematics and computer science, and I
        enjoy expanding my knowledge in these fields, particularly in numerical
        analysis, machine learning, and data science. In my free time, I like to
        work on personal projects that allow me to showcase my skills, watch
        movies, play video games, and football.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[
          "Numerical Methods",
          "Machine Learning",
          "Database Systems",
          "Parallel Computing",
          "Data Science",
          "Full-Stack Development",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-black/10 bg-white/90 p-4 text-sm text-gray-700 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-5 sm:text-base"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}