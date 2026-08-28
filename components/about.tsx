export function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground">
          <span className="font-mono text-lg text-primary">01.</span>
          About Me
          <span className="ml-4 hidden h-px flex-1 bg-border sm:block" />
        </h2>

        <div className="mt-8 space-y-4 leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a{" "}
            <span className="text-foreground">
              Systems Engineering student and Software Developer
            </span>{" "}
            focused on building modern, scalable, and maintainable web
            applications.
          </p>

          <p>
            My main backend experience is with{" "}
            <span className="text-primary">
              Java, Spring Boot, and RESTful APIs
            </span>
            , applying clean code principles, object-oriented programming, and
            layered architecture.
          </p>

          <p>
            On the frontend, I work with{" "}
            <span className="text-primary">
              JavaScript, TypeScript, React, Next.js, and Tailwind CSS
            </span>
            , allowing me to build complete web experiences from backend logic
            to responsive user interfaces.
          </p>

          <p>
            I also have experience working with relational databases such as{" "}
            <span className="text-foreground">PostgreSQL and MySQL</span>,
            including database design, CRUD operations, queries, and application
            integration.
          </p>

          <p>
            I&apos;m comfortable working with{" "}
            <span className="text-primary">Git and GitHub workflows</span>,
            collaborative development, version control, and agile practices.
          </p>

          <p>
            Beyond technical skills, I can communicate professionally in{" "}
            <span className="text-foreground">Spanish and fluent English</span>,
            and I also have an{" "}
            <span className="text-foreground">
              intermediate level of Portuguese
            </span>
            , which allows me to collaborate in multilingual and international
            environments.
          </p>
        </div>
      </div>
    </section>
  )
}