import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { GithubIcon } from "./icons"

const projects = [
  {
    title: "Scentuoso",
    type: "Freelance Project",
    description:
      "Modern perfume e-commerce prototype where users can explore fragrances, featured offers, and products for men and women through a clean and responsive interface.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/kevinfb27/Scentuoso",
    demo: "https://scentuoso.vercel.app",
    image: "/projects/scentuoso.png",
    comingSoon: false,
  },
  {
    title: "Pintuherramientas",
    type: "Freelance Project",
    description:
      "E-commerce prototype for a tools store, designed to showcase products, their features, and detailed information through a modern and responsive user experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/kevinfb27/Pintuherramientas",
    demo: "https://pintuherramientas.vercel.app",
    image: "/projects/pintuherramientas.png",
    comingSoon: false,
  },
  {
    title: "EasyJob",
    type: "Hackathon Project",
    description:
      "Platform created during a hackathon to address employment challenges faced by TalentoTech graduates and help connect technical talent with job opportunities.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/kevinfb27/EasyJob",
    demo: "https://gabriela359.github.io/EasyJob/",
    image: "/projects/easyjob.png",
    comingSoon: false,
  },
  {
    title: "Lingo",
    type: "Coming Soon",
    description:
      "Language learning platform focused on vocabulary, flashcards, structured courses, progress tracking, and interactive exercises. Currently under active development.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    github: null,
    demo: null,
    image: null,
    comingSoon: true,
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm text-primary">
            Some things I&apos;ve built
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            A selection of projects where I&apos;ve applied my knowledge of
            software development, modern web technologies, backend development,
            and responsive interface design.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
            >
              {/* Project Preview */}
              {project.comingSoon ? (
                <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-border bg-secondary/40">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

                  <div className="relative text-center">
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
                      In Development
                    </p>

                    <h3 className="text-4xl font-bold tracking-tight text-foreground">
                      Lingo
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Language Learning Platform
                    </p>

                    <span className="mt-5 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary">
                      Coming Soon
                    </span>
                  </div>
                </div>
              ) : (
                <a
                  href={project.demo!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video overflow-hidden border-b border-border bg-secondary"
                  aria-label={`View ${project.title} live project`}
                >
                  <Image
                    src={project.image!}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-background/0 transition-colors duration-300 group-hover:bg-background/40">
                    <span className="translate-y-3 rounded-md bg-background/90 px-4 py-2 font-mono text-xs text-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      View Live Project
                    </span>
                  </div>
                </a>
              )}

              {/* Project Information */}
              <div className="flex h-full flex-col p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 font-mono text-xs text-primary">
                      {project.type}
                    </p>

                    <h3 className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                  </div>

                  {!project.comingSoon && (
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github!}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        <GithubIcon className="h-5 w-5" />
                      </a>

                      <a
                        href={project.demo!}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  )}
                </div>

                <p className="flex-1 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {project.comingSoon ? (
                  <div className="mt-6 border-t border-border pt-5">
                    <p className="font-mono text-xs text-primary">
                      Currently in development
                    </p>
                  </div>
                ) : (
                  <div className="mt-6 flex items-center gap-5 border-t border-border pt-5">
                    <a
                      href={project.github!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Source Code
                    </a>

                    <a
                      href={project.demo!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/kevinfb27"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary px-5 py-2.5 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
          >
            <GithubIcon className="h-4 w-4" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}