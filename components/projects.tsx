import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { GithubIcon } from "./icons"

type Project = {
  title: string
  type: string
  role: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  image?: string
  comingSoon?: boolean
}

const projects: Project[] = [
  {
  title: "LinguaGo",
  type: "Personal Project",
  role: "Full Stack Development",
  description:
    "Language learning platform designed to provide an interactive learning experience through vocabulary, flashcards, structured courses, progress tracking, and exercises. The project combines frontend development, backend logic, authentication, and database management in a complete web application.",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
  ],
  github: "https://github.com/kevinfb27/lingo",
  demo: "https://linguago-k.vercel.app/",
  image: "/projects/linguago.png",
},

  {
    title: "KShop",
    type: "Coming Soon",
    role: "Full Stack Development",
    description:
      "Reusable e-commerce platform designed to provide businesses with a customizable online catalog, product management, WhatsApp integration, and interaction metrics through a flexible and scalable architecture.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "E-commerce",
    ],
    comingSoon: true,
  },

  {
    title: "Scentuoso",
    type: "Freelance Project",
    role: "Web Development",
    description:
      "Modern perfume e-commerce prototype where users can explore fragrances, featured offers, and products for men and women through a clean and responsive interface.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/kevinfb27/Scentuoso",
    demo: "https://scentuoso.vercel.app",
    image: "/projects/scentuoso.png",
  },

  {
    title: "Pintuherramientas",
    type: "Freelance Project",
    role: "Web Development",
    description:
      "E-commerce prototype for a tools store designed to showcase products, their features, and detailed information through a modern and responsive user experience.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/kevinfb27/Pintuherramientas",
    demo: "https://pintuherramientas.vercel.app",
    image: "/projects/pintuherramientas.png",
  },
]

const collaborationProjects: Project[] = [
  {
    title: "ChatFlow - CRM WhatsApp",
    type: "1st Place Hackathon Winner Project",
    role: "Development Team",
    description:
      "CRM-style application developed as part of a hackathon, where the project achieved first place. The platform organizes customer information obtained through WhatsApp conversations and displays key metrics such as active contacts, new customers, chat status, and monthly trends to support customer management and analysis.",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "CRM",
    ],
    github: "https://github.com/JhonEscobarC/ChatFlow",
    demo: "https://v0-chat-flow-mu.vercel.app",
    image: "/projects/chatflow.png",
  },

  {
    title: "Financial Control App",
    type: "Collaborative Project",
    role: "Development Team",
    description:
      "Financial management application with complete CRUD operations over a relational database. The system allows users to manage income, expenses, and transactions while generating PDF reports with balances and financial statistics.",
    technologies: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "PDF",
    ],
    github: "https://github.com/JhonEscobarC/app-financiera",
    demo: "https://v0-financial-management-app-theta.vercel.app/dashboard",
    image: "/projects/finance-control.png",
  },

  {
    title: "EasyJob",
    type: "Collaborative Hackathon Project",
    role: "Frontend Development",
    description:
      "Collaborative web application created during a hackathon to help connect technical talent with job opportunities. I contributed to the frontend development, responsive interface design, and user experience of the platform.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Figma",
    ],
    github: "https://github.com/kevinfb27/EasyJob",
    demo: "https://gabriela359.github.io/EasyJob/",
    image: "/projects/easyjob.png",
  },
]

function ProjectCard({ project }: { project: Project }) {
  const previewLink = project.demo ?? project.github

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
      {/* Project Preview */}
      {project.comingSoon ? (
        <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-border bg-secondary/40">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/15" />

          <div className="relative px-6 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              In Development
            </p>

            <h3 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
              {project.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              E-commerce Platform
            </p>

            <span className="mt-5 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary">
              Coming Soon
            </span>
          </div>
        </div>
      ) : (
        <a
          href={previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-video overflow-hidden border-b border-border bg-secondary"
          aria-label={`View ${project.title}`}
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
              {project.demo ? "View Live Project" : "View Project"}
            </span>
          </div>
        </a>
      )}

      {/* Project Information */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-xs text-primary">
              {project.type}
            </p>

            <h3 className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {project.role}
            </p>
          </div>

          {!project.comingSoon && (
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
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

        {/* Project Links */}
        {project.comingSoon ? (
          <div className="mt-6 border-t border-border pt-5">
            <p className="font-mono text-xs text-primary">
              Currently in development
            </p>
          </div>
        ) : (
          <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-border pt-5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                <GithubIcon className="h-4 w-4" />
                Source Code
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Own Projects */}
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm text-primary">
            02. Some things I&apos;ve built
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            A selection of applications where I&apos;ve applied frontend,
            backend, database, and software engineering skills to build
            functional and modern web solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

        {/* Collaborative Projects */}
        <div className="mt-24">
          <div className="mb-10">
            <p className="mb-2 font-mono text-sm text-primary">
              Teamwork & Contributions
            </p>

            <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Projects I Collaborated On
            </h3>

            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Applications where I contributed as part of a development team,
              participating in the design, implementation, and construction of
              the final product.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {collaborationProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </div>
        </div>

        {/* GitHub */}
        <div className="mt-14 text-center">
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