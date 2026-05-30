"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import { projects } from "@/data/projects";

import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ParticleBackground from "@/components/ParticleBackground";
import CoordinatePlane from "@/components/CoordinatePlane";
import FullPageGraph from "@/components/FullPageGraph";
import DesmosPanel from "@/components/DesmosPanel";

export default function Home() {
  const [desmosCollapsed, setDesmosCollapsed] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <CoordinatePlane />
      <FullPageGraph />

      <DesmosPanel
        collapsed={desmosCollapsed}
        setCollapsed={setDesmosCollapsed}
      />

      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-[#2f2f2f] px-6 py-4 md:px-20">
        <h1 className="text-xl font-semibold tracking-wide text-white">
          Santi.dev
        </h1>

        <div className="hidden gap-8 text-sm text-gray-200 md:flex">
          <a href="#about" className="transition hover:text-blue-300">
            About
          </a>
          <a href="#skills" className="transition hover:text-blue-300">
            Skills
          </a>
          <a href="#projects" className="transition hover:text-blue-300">
            Projects
          </a>
          <a
            href="/resume/Santiago-Segovia-Resume.pdf"
            className="transition hover:text-blue-300"
          >
            Resume
          </a>
          <a href="#contact" className="transition hover:text-blue-300">
            Contact
          </a>
        </div>
      </nav>

      <div
        className={`relative z-20 transition-all duration-500 ease-in-out ${
          desmosCollapsed ? "md:ml-[72px]" : "md:ml-[420px]"
        }`}
      >
        <section
          id="hero"
          className="relative flex min-h-screen items-center px-6 pb-24 pt-40 md:px-20"
        >
          <div className="relative z-20 max-w-3xl -translate-y-24 rounded-3xl border border-black/10 bg-white/75 p-8 shadow-sm backdrop-blur-sm">
            <motion.p
              className="mb-4 text-sm uppercase tracking-[0.4em] text-blue-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Mathematical Love Letter
            </motion.p>

            <motion.h1
              className="text-5xl font-bold leading-tight text-black md:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              Where mathematics meets software.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              I build elegant systems inspired by numerical analysis, machine
              learning, sparse matrices, algorithms, and the beauty of
              structure.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <a
                href="#projects"
                className="rounded-full border border-black/10 bg-black px-6 py-3 font-semibold text-white transition hover:opacity-80"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-gray-700 transition hover:border-blue-500 hover:text-blue-500"
              >
                Contact Me
              </a>

              <a
                href="/resume/Santiago-Segovia-Resume.pdf"
                download
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-gray-700 transition hover:border-blue-500 hover:text-blue-500"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </section>

        <AboutSection />

        <SkillsSection />

        <section id="projects" className="relative z-20 px-6 py-24 md:px-20">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-500">
            Proofs of Work
          </p>

          <h2 className="mb-12 text-4xl font-bold text-black md:text-5xl">
            Selected Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition hover:shadow-xl"
              >
                <div className="mb-5">
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-blue-500">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-3xl font-semibold text-black transition group-hover:text-blue-500">
                  {project.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 px-3 py-1 text-sm text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.link}
                  target={project.link.startsWith("http") ? "_blank" : undefined}
                  rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-8 inline-block rounded-full border border-black/10 px-5 py-2 text-sm text-gray-700 transition hover:border-blue-500 hover:text-blue-500"
                >
                  View Details
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="relative z-20 px-6 py-24 md:px-20">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-500">
            Connect the Points
          </p>

          <h2 className="text-4xl font-bold text-black">
            Let’s build something meaningful.
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            <a className="rounded-full border border-black/10 bg-white px-5 py-3 text-gray-700 transition hover:border-blue-500 hover:text-blue-500">
              GitHub
            </a>

            <a className="rounded-full border border-black/10 bg-white px-5 py-3 text-gray-700 transition hover:border-blue-500 hover:text-blue-500">
              LinkedIn
            </a>

            <a className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-gray-700 transition hover:border-blue-500 hover:text-blue-500">
              <Mail size={18} /> Email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}