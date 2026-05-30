export default function AboutSection() {
  return (
    <section id="about" className="relative z-20 px-6 py-24 md:px-20">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-300">
        Origin
      </p>

      <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
        I’m a mathematics and computer science graduate building at the
        intersection of algorithms, data, and numerical intelligence.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-500">
        My work is driven by a love for structure: sparse matrices, numerical
        methods, machine learning, image processing, CUDA programming, databases,
        and full-stack systems. I enjoy turning abstract mathematical ideas into
        practical software that can be tested, optimized, and understood.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
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
            className="rounded-3xl border border-black/10 bg-white p-5 text-gray-700 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}