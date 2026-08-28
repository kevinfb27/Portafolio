import { Download } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./icons"

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto w-full max-w-4xl">
        <p className="mb-4 font-mono text-sm text-primary">
          Hi, my name is
        </p>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Kevin Flórez.
        </h1>

        <h2 className="mt-2 text-3xl font-bold text-primary/80 sm:text-4xl lg:text-5xl">
          Software Developer.
        </h2>

        <p className="mt-4 text-pretty text-xl font-medium text-muted-foreground sm:text-2xl lg:text-3xl">
          I build modern and scalable web applications.
        </p>

        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Systems Engineering student focused on software development, with
          experience building backend applications and modern web interfaces.
          I work with{" "}
          <span className="font-medium text-primary">Java</span>,{" "}
          <span className="font-medium text-primary">Spring Boot</span>,{" "}
          <span className="font-medium text-primary">JavaScript</span>,{" "}
          <span className="font-medium text-primary">TypeScript</span>,{" "}
          <span className="font-medium text-primary">React</span>, and{" "}
          <span className="font-medium text-primary">Next.js</span>, applying
          software engineering principles to create maintainable and efficient
          solutions.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "Java",
            "Spring Boot",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "PostgreSQL",
          ].map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs text-primary"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/kevinfb27"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <GithubIcon className="h-6 w-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/kevin-ivan-florez-10527k/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>

          <a
            href="/Kevin-Ivan-Florez-CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md border border-primary px-4 py-2.5 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>

          <a
            href="#projects"
            className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-primary px-5 py-2.5 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}