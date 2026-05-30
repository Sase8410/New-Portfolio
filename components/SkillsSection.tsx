const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "C++", "CUDA", "MATLAB", "SQL", "JavaScript", "TypeScript", "PHP", "R"],
  },
  {
    title: "Databases & Tools",
    skills: ["MySQL", "PostgreSQL", "MariaDB", "Azure", "Git", "VS Code", "PyCharm",],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["PyTorch", "scikit-learn", "pandas", "NumPy", "React", "Next.js", "Node.js", "CUDA", "cuBLAS",],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-20 px-6 py-24 md:px-20">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-400">
        Toolbox
      </p>

      <h2 className="mb-12 text-4xl font-bold text-gray-900 md:text-5xl">
        Technologies I use to turn ideas into systems.
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="mb-5 text-2xl font-semibold text-gray-900">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-black/10 bg-gray-50 px-3 py-1 text-sm text-gray-600"
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