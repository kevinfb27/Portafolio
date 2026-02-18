import { GithubIcon, LinkedinIcon } from "./icons"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/kevinfb27"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-ivan-florez-10527k/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          Kevin Florez &middot; Built with passion & clean code
        </p>
      </div>
    </footer>
  )
}
