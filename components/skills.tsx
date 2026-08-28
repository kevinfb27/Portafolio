import Image from "next/image"

const categories = [
  {
    title: "Frontend",
    items: [
      {
        name: "JavaScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "HTML5",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },

  {
    title: "Backend",
    items: [
      {
        name: "Java",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      },
      {
        name: "Spring Boot",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      },
      {
        name: "Python",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
    ],
  },

  {
    title: "Databases",
    items: [
      {
        name: "PostgreSQL",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "SQLite",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
      },
    ],
  },

  {
  title: "Development Tools",
  items: [
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      name: "Postman",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
  ],
},

  {
    title: "IDEs & Design",
    items: [
      {
        name: "VS Code",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      },
      {
        name: "IntelliJ IDEA",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
      },
      {
        name: "Figma",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      },
    ],
  },
]

const coreSkills = [
  "RESTful API Design",
  "Object-Oriented Programming",
  "Clean Code & SOLID",
  "Responsive Web Design",
  "Layered Architecture",
  "Database Design",
  "CRUD Operations",
  "Git & Version Control",
  "Data Structures & Algorithms",
  "Agile / Scrum",
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground">
          <span className="font-mono text-lg text-primary">02.</span>
          Skills & Technologies
          <span className="ml-4 hidden h-px flex-1 bg-border sm:block" />
        </h2>

        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          Technologies and tools I use to build modern web applications,
          backend services, and maintainable software solutions.
        </p>

        <div className="mt-10 space-y-10">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 font-mono text-sm text-primary">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-secondary"
                  >
                    <Image
                      src={tech.src}
                      alt={`${tech.name} logo`}
                      width={40}
                      height={40}
                      className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
                      unoptimized
                    />

                    <span className="text-center text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="mb-5 font-mono text-sm text-primary">
            Core Competencies
          </h3>

          <ul className="grid gap-3 sm:grid-cols-2">
            {coreSkills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <span className="font-mono text-primary">{">"}</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}