const experiences = [
  {
    period: "2024 — Present",
    title: "Backend Developer",
    company: "Freelance / Personal Projects",
    description:
      "Designing and implementing RESTful APIs using Java and Spring Boot. Building layered architecture applications with clean code principles, integrating with MySQL databases and following agile practices.",
    tags: ["Java", "Spring Boot", "MySQL", "REST API", "Git"],
  },
  {
    period: "2023 — Present",
    title: "Systems Engineering Student",
    company: "University",
    description:
      "Studying core computer science fundamentals including data structures, algorithms, software engineering principles, and database management. Active participant in collaborative projects using agile methodologies.",
    tags: ["Data Structures", "Algorithms", "Software Engineering", "Agile"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground">
          <span className="font-mono text-lg text-primary">03.</span>
          Experience
          <span className="ml-4 hidden h-px flex-1 bg-border sm:block" />
        </h2>

        <div className="mt-10 space-y-2">
          {experiences.map((exp) => (
            <a
              key={exp.title}
              href="#"
              className="group block rounded-lg p-5 transition-colors hover:bg-secondary/60"
            >
              <div className="flex flex-col gap-4 sm:flex-row">
                <p className="shrink-0 pt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground sm:w-36">
                  {exp.period}
                </p>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary">
                    {exp.title}{" "}
                    <span className="text-primary">
                      {"· "}
                      {exp.company}
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
