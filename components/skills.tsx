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
        name: "Node.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
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

const languages = [
  {
    name: "Spanish",
    code: "ES",
    level: "Native",
    description: "Native proficiency",
    percentage: 100,
    card:
      "from-amber-500/15 via-card to-red-500/10 border-amber-500/20 hover:border-amber-400/50",
    badge:
      "border-amber-400/30 bg-amber-400/10 text-amber-400",
    icon: "bg-gradient-to-br from-amber-400 to-red-500 text-white",
    bar: "bg-gradient-to-r from-amber-400 via-orange-500 to-red-500",
  },
  {
    name: "English",
    code: "EN",
    level: "C1",
    description: "Advanced / Fluent",
    percentage: 90,
    card:
      "from-blue-500/15 via-card to-cyan-500/10 border-blue-500/20 hover:border-blue-400/50",
    badge:
      "border-blue-400/30 bg-blue-400/10 text-blue-400",
    icon: "bg-gradient-to-br from-blue-400 to-cyan-500 text-white",
    bar: "bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-500",
  },
  {
    name: "Portuguese",
    code: "PT",
    level: "B1",
    description: "Intermediate",
    percentage: 60,
    card:
      "from-emerald-500/15 via-card to-lime-500/10 border-emerald-500/20 hover:border-emerald-400/50",
    badge:
      "border-emerald-400/30 bg-emerald-400/10 text-emerald-400",
    icon: "bg-gradient-to-br from-emerald-400 to-lime-500 text-white",
    bar: "bg-gradient-to-r from-emerald-400 via-green-400 to-lime-500",
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
        {/* Section title */}
        <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground">
          <span className="font-mono text-lg text-primary">03.</span>
          Skills & Technologies
          <span className="ml-4 hidden h-px flex-1 bg-border sm:block" />
        </h2>

        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          Technologies and tools I use to build modern web applications,
          backend services, responsive interfaces, and maintainable software
          solutions.
        </p>

        {/* Technologies */}
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
                    className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-secondary hover:shadow-lg"
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

        {/* Languages */}
        <div className="mt-20">
          <div className="mb-7">
            <h3 className="font-mono text-sm text-primary">
              Languages
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Communication skills for local and international environments.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {languages.map((language) => (
              <article
                key={language.name}
                className={`group rounded-xl border bg-gradient-to-br p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${language.card}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl font-mono text-xs font-bold shadow-md ${language.icon}`}
                    >
                      {language.code}
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground">
                        {language.name}
                      </h4>

                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {language.description}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1 font-mono text-xs font-bold ${language.badge}`}
                  >
                    {language.level}
                  </span>
                </div>

                <div className="mt-6">
                  <div className="h-2.5 overflow-hidden rounded-full bg-background/60">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${language.bar}`}
                      style={{ width: `${language.percentage}%` }}
                    />
                  </div>

                  <div className="mt-2 flex justify-between font-mono text-[10px] text-muted-foreground">
                    <span>Beginner</span>
                    <span>Advanced</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mt-20">
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