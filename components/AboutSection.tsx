export default function AboutSection() {
  return (
    <section id="about" className="relative z-20 px-6 py-24 md:px-20">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-300">
        Origin
      </p>

      <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
        I'm a mathematics and computer science graduate from University of Houston.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-500">
        I have a strong passion for mathematics and computer science, and I enjoy expanding my knowledge in these fields, particularly in numerical analysis, machine learning, and data science. In my free time, I like to work on personal projects that allow me to showcase my skills, watch movies, play video games and football. 
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