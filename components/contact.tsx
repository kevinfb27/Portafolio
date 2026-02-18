import { GithubIcon, LinkedinIcon } from "./icons"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-mono text-sm text-primary">04. What&apos;s Next?</p>
        <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">Get In Touch</h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          I&apos;m currently looking for new opportunities to grow as a backend developer.
          Whether you have a question, a project idea, or just want to say hi, feel free to
          reach out!
        </p>

        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href="https://github.com/kevinfb27"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <GithubIcon className="h-5 w-5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-ivan-florez-10527k/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <LinkedinIcon className="h-5 w-5" />
            LinkedIn
          </a>
        </div>

        <a
          href="mailto:hello@example.com"
          className="mt-6 inline-flex items-center rounded-md border border-primary px-8 py-3 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
        >
          Say Hello
        </a>
      </div>
    </section>
  )
}
