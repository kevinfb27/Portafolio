import { GithubIcon, LinkedinIcon } from "./icons"

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 font-mono text-sm text-primary">Hi, my name is</p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Kevin Florez.
        </h1>
        <h2 className="mt-1 text-3xl font-bold text-primary/80 sm:text-4xl lg:text-5xl">
          Java Developer.
        </h2>
        <p className="mt-3 text-xl font-medium text-muted-foreground sm:text-2xl lg:text-3xl text-pretty">
          I build robust backend solutions.
        </p>
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          Systems Engineering student specialized in backend development, with strong
          foundations in software engineering, data structures, and problem solving.
          Experienced in designing and implementing RESTful applications using{" "}
          <span className="text-primary">Java</span>,{" "}
          <span className="text-primary">Spring</span>, and{" "}
          <span className="text-primary">Spring Boot</span>.
        </p>

        <div className="mt-10 flex items-center gap-5">
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
            href="#contact"
            className="ml-2 inline-flex items-center rounded-md border border-primary px-5 py-2.5 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
