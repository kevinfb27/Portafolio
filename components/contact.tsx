import { GithubIcon, LinkedinIcon } from "./icons"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-sm text-primary">
          05. What&apos;s Next?
        </p>

        <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
          Let&apos;s Work Together
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
          I&apos;m open to software development opportunities, freelance
          projects, and collaborations where I can contribute with both backend
          and frontend technologies while continuing to grow as a developer.
        </p>

        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
          If you have an opportunity, a project idea, or simply want to connect,
          feel free to reach out through LinkedIn or GitHub.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/kevin-ivan-florez-10527k/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <LinkedinIcon className="h-5 w-5" />
            Connect on LinkedIn
          </a>

          <a
            href="https://github.com/kevinfb27"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <GithubIcon className="h-5 w-5" />
            View GitHub
          </a>
        </div>

        <p className="mt-10 font-mono text-xs text-muted-foreground">
          Open to local and remote opportunities.
        </p>
      </div>
    </section>
  )
}