import NotebookBackground from "@/components/NotebookBackground";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProfilePage() {
  return (
    <NotebookBackground>
      <Link
  href="/"
  className="
    fixed
    left-6
    top-6
    z-50
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-black/10
    bg-white
    px-4
    py-2
    text-sm
    text-slate-600
    shadow-sm
    transition
    hover:border-pink-300
    hover:text-pink-500
  "
>
  <ArrowLeft size={16} />
  Home
</Link>
      <main className="mx-auto max-w-4xl px-6 py-24">

        <p className="text-center text-sm uppercase tracking-[0.3em] text-pink-300">
          Personal homepage
        </p>

        <h1 className="mt-4 text-center text-5xl font-bold">
          About me
        </h1>

        <p className="mt-6 text-center text-slate-500">
          Get to know me better :3
        </p>

        <div className="mx-auto max-w-4xl px-6 py-24 space-y-12 text-center">
          <section className="w-full rounded-3xl border border-black/10 bg-white/50 p-8">
            <h2 className="mb-4 text-3xl font-bold">Personal Story</h2>
            <p className="text-slate-600">I developed a passion for mathematics in my final year of high school, where my AP Calculus teacher inspired me to pursue further studies in the field. I went to UH, studying mathematics and computer science. It was here where I was introduced to Data Science. I fell in love with this field that I decided to pursue higher education in John Hopkins University to learn more about this field and to hopefully in the future, have real life impact. My parents are my main motivators, I want to make them proud and thank them for pushing me to continue studying as a first generation college student. They gave me the determination to keep going even when I doubted myself and thought I did not belong here. I have them to thank for all of my accomplishments in my life and where I am now. Currently, I am searching for opportunities as a data science intern.</p>
          </section>

          <div className="grid w-full gap-8 md:grid-cols-2">

            <section className="rounded-3xl border border-black/10 bg-white/50 p-8">
              <h2 className="mb-4 text-3xl font-bold">Hobbies & Interests</h2>
              <p className="text-slate-600">
                Outside of academics, I enjoy playing video games, whether it is fighting games or survival horror.
              </p>

              <div className="space-y-3 font-mono text-slate-700">
                <p>[ ] Fear and Hunger</p>
                <p>[ ] Counter Strike 2</p>
                <p>[ ] Persona 3</p>
                <p>[ ] Dead by Daylight</p>
                <p>[ ] Smash bros Ultimate</p>
                <p>[ ] Plants vs Zombies 2</p>
              </div>

              <p className="text-slate-600">
                I also enjoy studying chess and try my best to get better at it. On the sports side, I like to play futbol and basketball. Recently, I have been enjoying pickleball.
              </p>
            </section>

            <section className="rounded-3xl border border-black/10 bg-white/50 p-8">
              <h2 className="mb-4 text-3xl font-bold">Current Reading</h2>

              <p className="mb-6 text-slate-600">
                Currently, I am reading mathematical and computer science books.
                My main interest is in numerical analysis, artificial intelligence,
                mathematical modeling and data science/engineering.
              </p>

              <div className="space-y-3 font-mono text-slate-700">
                <p>[ ] Mathematical Modelling Techniques by Dover</p>
                <p>[ ] Understanding Analysis by Ross</p>
                <p>[ ] Programming Massively Parallel Processors by Kirk</p>
                <p>[ ] Designing Data-Intensive Applications by Kleppmann</p>
                <p>[ ] Hands-On Machine Learning by Aurélien Géron</p>
              </div>
            </section>

          </div>
        </div>

      </main>
    </NotebookBackground>
  );
}