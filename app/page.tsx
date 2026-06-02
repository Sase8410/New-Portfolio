"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

import { projects } from "@/data/projects";

import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ParticleBackground from "@/components/ParticleBackground";
import CoordinatePlane from "@/components/CoordinatePlane";
import FullPageGraph from "@/components/FullPageGraph";
import DesmosPanel from "@/components/DesmosPanel";

export default function Home() {
  const [desmosCollapsed, setDesmosCollapsed] = useState(true);
  const [graphIndex, setGraphIndex] = useState(0);

  const [emailOpen, setEmailOpen] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setMessageError(false);
  setErrorText("");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    setMessageError(true);
    setErrorText("Please complete all fields.");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    setMessageError(true);
    setErrorText("Please enter a valid email address.");
    return;
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (response.ok) {
      setMessageSent(true);
      setMessageError(false);
      setErrorText("");
      form.reset();
    } else {
      setMessageError(true);
      setErrorText("Failed to send message. Please try again later.");
    }
  } catch {
    setMessageError(true);
    setErrorText("Failed to send message. Please try again later.");
  }
};

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <CoordinatePlane />
      <FullPageGraph
        graphIndex={graphIndex}
        onCycleComplete={() => {
          setGraphIndex((current) => (current + 1));
        }}
      />

      <div className="hidden lg:block">
        <DesmosPanel
          collapsed={desmosCollapsed}
          setCollapsed={setDesmosCollapsed}
          formulaIndex={graphIndex}
          typingDelay={900}
        />
      </div>

      <nav
        className={`${ibmPlexMono.className} fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-[#2f2f2f] px-6 py-4 md:px-20 tracking-wide`}
      >
        <h1
          style={{ color: "white" }}
          className="text-xl font-semibold tracking-[0.2em]"
        >
          S. Segovia
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
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a href="#contact" className="transition hover:text-blue-300">
            Contact
          </a>
        </div>
      </nav>

      <div
        className={`relative z-20 grid w-full transition-all duration-500 ease-in-out ${
          desmosCollapsed
            ? "lg:grid-cols-[72px_minmax(0,1fr)]"
            : "lg:grid-cols-[72px_minmax(0,1fr)] 2xl:grid-cols-[420px_minmax(0,1fr)]"
        }`}
      >
        <div className="hidden lg:block" />

        <div className="min-w-0">
        <section
          id="hero"
          className="relative flex min-h-screen items-center px-5 pb-20 pt-28 sm:px-8 lg:px-20 lg:pb-24 lg:pt-40">
          <div className="relative z-20 w-full max-w-3xl rounded-3xl border border-black/10 bg-white/85 p-6 shadow-sm backdrop-blur-sm sm:p-8 lg:-translate-y-24">
            <motion.p
              className="mb-4 text-sm uppercase tracking-[0.4em] text-blue-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Santiago Segovia
            </motion.p>

            <motion.h1
              className="text-4xl font-bold leading-tight text-black sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              Mathematician & Computer Scientist.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              I design and build full-stack applications, machine learning systems, and computational tools driven by strong mathematical foundations.
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

        <section id="projects" className="relative z-20 px-5 py-16 sm:px-8 md:px-20 md:py-24">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-500">
            Proofs
          </p>

          <h2 className="mb-10 text-3xl font-bold text-black sm:text-4xl md:mb-12 md:text-5xl">
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
                className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5">
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-blue-500">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-black transition group-hover:text-blue-500 sm:text-3xl">
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
                  rel={
                    project.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-8 inline-block rounded-full border border-black/10 px-5 py-2 text-sm text-gray-700 transition hover:border-blue-500 hover:text-blue-500"
                >
                  View Details
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="relative z-20 px-5 py-16 sm:px-8 md:px-20 md:py-24">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-500">
            Connect the Points
          </p>

          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            Let’s build something meaningful.
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/Sase8410"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/10 bg-white px-6 py-3 text-gray-700 transition hover:border-blue-500 hover:text-blue-500"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/santiago-segovia"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/10 bg-white px-6 py-3 text-gray-700 transition hover:border-blue-500 hover:text-blue-500"
            >
              LinkedIn
            </a>

            <button
              onClick={() => {
                setMessageSent(false);
                setMessageError(false);
                setErrorText("");
                setEmailOpen(true);
              }}
              className="rounded-full border border-black/10 bg-white px-6 py-3 text-gray-700 transition hover:border-blue-500 hover:text-blue-500"
            >
              Email
            </button>
          </div>

          {emailOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/40 px-4 py-6 backdrop-blur-sm sm:px-6">
              <div className="w-full max-w-lg rounded-3xl border border-black/10 bg-white p-6 shadow-2xl sm:p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="w-full">
                    <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
                      Send a Message
                    </p>

                    <h3 className="mt-2 break-words text-base font-bold text-black sm:text-xl">
                      segoviasantiago945@gmail.com
                    </h3>
                  </div>

                  <button
                    onClick={() => {
                      setMessageSent(false);
                      setMessageError(false);
                      setErrorText("");
                      setEmailOpen(false);
                    }}
                    className="rounded-full border border-black/10 px-3 py-1 text-gray-500 transition hover:border-blue-500 hover:text-blue-500"
                  >
                    ✕
                  </button>
                </div>

                {messageError && (
                      <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm text-red-500">
                        {errorText}
                      </div>
                    )}

                {messageSent ? (
                  <div className="py-8 text-center">
                    <div className="mb-4 text-5xl text-blue-500">✓</div>

                    <h3 className="text-2xl font-bold text-black">
                      Message Sent
                    </h3>

                    <p className="mt-3 text-gray-600">
                      Thank you for reaching out.
                      <br />
                      I’ll get back to you as soon as possible.
                    </p>

                    <button
                      onClick={() => {
                        setMessageSent(false);
                        setMessageError(false);
                        setErrorText("");
                        setEmailOpen(false);
                      }}
                      className="mt-8 rounded-full bg-black px-6 py-3 text-white transition hover:opacity-80"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4"
                  >
                    <input
                      name="name"
                      placeholder="Name"
                      className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none transition focus:border-blue-500"
                    />

                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none transition focus:border-blue-500"
                    />

                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={5}
                      className="w-full resize-none rounded-2xl border border-black/10 px-4 py-3 outline-none transition focus:border-blue-500"
                    />

                    <button
                      type="submit"
                      className="w-full rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:opacity-80"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}
        </section>
      </div>
      </div>
    </main>
  );
}