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
            I&apos;m a <span className="text-foreground">Systems Engineering student</span>{" "}
            specialized in backend development, with strong foundations in software engineering,
            data structures, and problem solving.
          </p>
          <p>
            Experienced in designing and implementing{" "}
            <span className="text-primary">RESTful applications</span> using Java, Spring, and
            Spring Boot, following clean code principles and layered architecture.
          </p>
          <p>
            Familiar with relational databases{" "}
            <span className="text-foreground">(MySQL, SQL)</span> including schema design, CRUD
            operations, and query optimization.
          </p>
          <p>
            Comfortable working with{" "}
            <span className="text-primary">Git-based workflows</span>, collaborative
            development, and agile practices.
          </p>
          <p>
            <span className="text-foreground">Bilingual (Spanish & English)</span> with strong
            communication and teamwork skills.
          </p>
        </div>
      </div>
    </section>
  )
}
