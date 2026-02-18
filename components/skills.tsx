import Image from "next/image"

const categories = [
  {
    title: "Languages",
    items: [
      { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Spring Boot", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "SQLite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Power BI", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    ],
  },
  {
    title: "IDEs",
    items: [
      { name: "IntelliJ IDEA", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
      { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    ],
  },
]

const coreSkills = [
  "RESTful API Design",
  "Clean Code & SOLID",
  "Layered Architecture",
  "Data Structures & Algorithms",
  "CRUD Operations",
  "Query Optimization",
  "Agile / Scrum",
  "Team Collaboration",
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground">
          <span className="font-mono text-lg text-primary">02.</span>
          Skills & Technologies
          <span className="ml-4 hidden h-px flex-1 bg-border sm:block" />
        </h2>

        <div className="mt-10 space-y-10">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 font-mono text-sm text-primary">{category.title}</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-secondary hover:-translate-y-0.5"
                  >
                    <Image
                      src={tech.src}
                      alt={`${tech.name} logo`}
                      width={40}
                      height={40}
                      className="h-10 w-10 transition-transform group-hover:scale-110"
                      unoptimized
                    />
                    <span className="text-center text-xs font-medium text-muted-foreground group-hover:text-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="mb-4 font-mono text-sm text-primary">Core Competencies</h3>
          <ul className="grid grid-cols-2 gap-2">
            {coreSkills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="text-primary">{">"}</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
