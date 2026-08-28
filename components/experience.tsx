const experiences = [
  {
    period: "2026",
    title: "Backend Developer",
    company: "Blood Donation Platform · Personal Project",
    description:
      "Developed a functional web platform prototype designed to connect hospitals with blood donors and improve the management of donation requests. Designed the system architecture, database model, and the core flow of the platform's main functionalities.",
    tags: [
      "Backend Development",
      "System Architecture",
      "Database Design",
      "Web Development",
    ],
  },
  {
    period: "Sep 2025 — Dec 2025",
    title: "Backend Developer",
    company: "Financial Analysis Web Platform · Proyecto Up",
    description:
      "Worked on a financial analysis web project, processing and analyzing information related to income, expenses, and financial trends. Tracked sprint progress and project deliverables using Jira Software and collaborated with the development team to improve coordination and activity management.",
    tags: [
      "Backend Development",
      "Data Analysis",
      "Jira",
      "Agile",
      "Team Collaboration",
    ],
  },
  {
    period: "Mar 2025 — Jun 2025",
    title: "Web Developer",
    company: "Student Dropout Analysis Platform · Proyecto Up",
    description:
      "Analyzed and processed academic data to identify patterns and factors associated with student dropout. Implemented data visualizations to support the interpretation of results and applied statistical logic to evaluate dropout risk.",
    tags: [
      "Web Development",
      "Data Analysis",
      "Data Visualization",
      "Statistics",
    ],
  },
  {
    period: "2025",
    title: "Software Developer",
    company: "Hackathon Project · TalentoTech Bootcamp",
    description:
      "Contributed to the development of a web application for managing and organizing academic and work schedules. Collaborated on the application's logic and system component integration while applying responsive design and usability principles.",
    tags: [
      "Web Development",
      "Application Logic",
      "Responsive Design",
      "Teamwork",
    ],
  },
  {
    period: "2024",
    title: "Frontend Developer",
    company: "EasyJob · TalentoTech Bootcamp",
    description:
      "Designed intuitive interfaces for a web application focused on managing job opportunities. Improved the user experience through responsive design and created interface prototypes and navigation flows using Figma.",
    tags: [
      "Frontend Development",
      "Responsive Design",
      "Figma",
      "UI/UX",
    ],
  },
]

const education = [
  {
    period: "Present",
    title: "Systems Engineering",
    institution: "Universidad de Pamplona",
    location: "Villa del Rosario, Norte de Santander",
    description:
      "Undergraduate Systems Engineering student developing skills in software development, databases, algorithms, web technologies, and software engineering through academic and practical projects.",
    tags: [
      "Software Engineering",
      "Databases",
      "Web Development",
      "Algorithms",
      "Programming",
    ],
  },
]

const courses = [
  {
    period: "In Progress",
    title: "Application and Cloud Services Programming",
    institution: "SENA",
    description:
      "Training focused on application development and the use of cloud-based services.",
  },
  {
    period: "Jan 2026",
    title: "Universidad de Java",
    institution: "Udemy",
    description:
      "Advanced Java training covering object-oriented programming and Java development concepts.",
  },
  {
    period: "Dec 2025",
    title: "SQL Course",
    institution: "Udemy",
    description:
      "Training focused on relational databases, SQL queries, and database management.",
  },
  {
    period: "Jun 2025 — Jul 2025",
    title: "Data Analysis Bootcamp",
    institution: "TalentoTech Oriente",
    description:
      "Bootcamp focused on data analysis, interpretation, processing, and practical data-driven problem solving.",
  },
  {
    period: "Apr 2025",
    title: "Data Analysis Fundamentals",
    institution: "Coursera",
    description:
      "Introduction to fundamental concepts and practices used in data analysis.",
  },
  {
    period: "Dec 2024",
    title: "Professional Git & GitHub",
    institution: "Platzi",
    description:
      "Training in Git version control, GitHub workflows, branches, repositories, and collaborative development.",
  },
  {
    period: "Oct 2024 — Nov 2024",
    title: "Basic Programming Bootcamp",
    institution: "TalentoTech Oriente",
    description:
      "Bootcamp focused on programming fundamentals, logical thinking, and introductory software development.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Experience */}
        <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground">
          <span className="font-mono text-lg text-primary">04.</span>
          Experience
          <span className="ml-4 hidden h-px flex-1 bg-border sm:block" />
        </h2>

        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          Professional, academic, and personal projects where I&apos;ve applied
          software development, data analysis, responsive design, and
          collaborative development practices.
        </p>

        <div className="mt-10 space-y-5">
          {experiences.map((experience) => (
            <article
              key={`${experience.title}-${experience.period}`}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex flex-col gap-4 sm:flex-row">
                <p className="shrink-0 pt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground sm:w-40">
                  {experience.period}
                </p>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {experience.title}
                  </h3>

                  <p className="mt-1 font-mono text-sm text-primary">
                    {experience.company}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {experience.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            Education
            <span className="ml-3 hidden h-px flex-1 bg-border sm:block" />
          </h3>

          <div className="mt-8">
            {education.map((item) => (
              <article
                key={item.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40"
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <p className="shrink-0 pt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground sm:w-40">
                    {item.period}
                  </p>

                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h4>

                    <p className="mt-1 font-mono text-sm text-primary">
                      {item.institution}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.location}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Courses & Certifications */}
        <div className="mt-20">
          <h3 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            Courses & Certifications
            <span className="ml-3 hidden h-px flex-1 bg-border sm:block" />
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Additional training focused on software development, databases,
            version control, cloud technologies, and data analysis.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {courses.map((course) => (
              <article
                key={`${course.title}-${course.institution}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                      {course.title}
                    </h4>

                    <p className="mt-1 font-mono text-xs text-primary">
                      {course.institution}
                    </p>
                  </div>

                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {course.period}
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}