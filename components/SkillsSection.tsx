const skillGroups = [
  {
    title: "Languages",
    skills: [
      "Python",
      "C++",
      "CUDA",
      "MATLAB",
      "SQL",
      "JavaScript",
      "TypeScript",
      "PHP",
      "R",
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MariaDB",
      "Azure",
      "Git",
      "VS Code",
      "PyCharm",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "PyTorch",
      "scikit-learn",
      "pandas",
      "NumPy",
      "React",
      "Next.js",
      "Node.js",
      "CUDA",
      "cuBLAS",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-20 px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-24"
    >
      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-pink-400 sm:text-sm">
        Theorems
      </p>

      <h2 className="mb-10 max-w-4xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:mb-12 md:text-5xl">
        Technologies I use to turn ideas into systems.
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-black/10 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-6"
          >
            <h3 className="mb-4 text-xl font-semibold text-gray-900 sm:mb-5 sm:text-2xl">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-black/10 bg-gray-50 px-3 py-1 text-xs text-gray-600 sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}