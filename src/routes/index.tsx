import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Raghu Ram Dhigajarla — Software Developer at IBM",
      },
      {
        name: "description",
        content:
          "Portfolio of Raghu Ram Dhigajarla, a software developer at IBM building modern, reliable, and user-focused software.",
      },
      {
        property: "og:title",
        content: "Raghu Ram Dhigajarla — Software Developer at IBM",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Raghu Ram Dhigajarla, a software developer at IBM building modern, reliable, and user-focused software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Raghu Ram Dhigajarla — Software Developer at IBM",
      },
      {
        name: "twitter:description",
        content:
          "Portfolio of Raghu Ram Dhigajarla, a software developer at IBM building modern, reliable, and user-focused software.",
      },
    ],
  }),
});

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    title: "Contract Test Framework for Connectors",
    description:
      "Developed an automated testing framework to validate connector behavior, API correctness, and provider compatibility. Implemented mock validation and automated execution for connector test suites, improving reliability by 30%.",
    tags: ["JavaScript", "Shell", "HTML", "Git"],
    impact: "30% reliability improvement",
  },
  {
    title: "AI-Assisted Multi-Repository Dependency PR Validation",
    description:
      "Built an end-to-end automation system to validate and merge pull requests across multiple repositories. Integrated IBM BoB Agent to assess dependency upgrade safety and generate AI-driven merge recommendations with automated reviewer assignment.",
    tags: ["Agentic AI", "JavaScript", "Jenkins", "Git"],
    impact: "Reduced manual effort & accelerated PR approvals",
  },
  {
    title: "Enterprise API Integration Platform",
    description:
      "Designed and implemented scalable API integrations for enterprise applications including Slack, SharePoint, Milvus, and Wrike. Developed automation solutions for API schema generation, validation, and version compatibility verification.",
    tags: ["Java", "Node.js", "REST APIs", "OpenAPI"],
    impact: "40% reduction in manual review effort",
  },
];

const skills = [
  "Java",
  "Spring Boot",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "REST APIs",
  "Docker",
  "Jenkins",
  "Git",
  "OpenAPI",
  "SQL",
  "React",
  "CI/CD",
  "System Design",
];

const experience = [
  {
    company: "IBM",
    role: "Software Developer",
    period: "Dec 2023 – Present",
    location: "Kochi, India",
    highlights: [
      "Developed and maintained backend services and enterprise integrations using Java, Node.js, REST APIs, and IBM App Connect",
      "Designed and implemented scalable API integrations for enterprise applications including Slack, SharePoint, Milvus, and Wrike",
      "Developed automation solutions reducing manual review effort by 40%",
      "Automated CI/CD workflows using Docker, Jenkins, Git, and Shell scripting",
      "Mentored interns in connector development, providing technical guidance and code reviews",
    ],
  },
];

const education = [
  {
    school: "TKR College of Engineering and Technology",
    degree: "B.Tech. in Computer Science and Engineering",
    period: "Aug 2019 – Jun 2023",
    cgpa: "8.35/10",
  },
];

const achievements = [
  "Recognized by IBM App Connect leadership for improving connector development efficiency and automation",
  "Solved 250+ algorithmic problems on LeetCode, HackerRank, and GeeksforGeeks",
  "HackerRank Certifications: Java, Problem Solving",
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="font-display text-lg font-semibold tracking-tight">
            Raghu Ram.
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Let&apos;s talk
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] flex-col justify-center px-6 py-24 md:min-h-[80vh] md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Software Developer at IBM
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Building software that is clean, reliable, and ready to ship.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              I am Raghu Ram Dhigajarla, a software developer at IBM. I design and build
              modern applications, APIs, and cloud systems that help teams move faster
              without sacrificing quality.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-foreground/20 bg-transparent px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-foreground/5"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        {/* Current role band */}
        <section className="border-y border-border bg-secondary px-6 py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Currently
              </p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                Software Developer at IBM, Kochi
              </p>
            </div>
            <p className="max-w-md text-muted-foreground">
              Shipping production backends, designing scalable APIs, and automating CI/CD workflows while mentoring teams on modern engineering practices and connector development.
            </p>
          </div>
        </section>

        {/* Selected work */}
        <section id="work" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                Selected work
              </h2>
              <p className="max-w-md text-muted-foreground">
                A few projects that show how I approach product engineering.
              </p>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
                >
                  <h3 className="font-display text-xl font-semibold tracking-tight text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About / Skills / Experience */}
        <section id="about" className="bg-secondary px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  About
                </p>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                  Building reliable systems with modern practices.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  I focus on scalable backend architecture, clean code, and resilient systems. With 2.5+ years at IBM, I design REST APIs, automate CI/CD pipelines, mentor teams, and solve complex integration challenges. I care about code quality, testability, and long-term maintainability.
                </p>
              </div>
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Core skills & tools
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mt-20 border-t border-border pt-16">
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Professional experience
              </p>
              <div className="mt-8 space-y-8">
                {experience.map((exp) => (
                  <div key={exp.company} className="border-l-2 border-primary pl-6">
                    <div className="flex flex-col justify-between md:flex-row md:items-start">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {exp.company} • {exp.location}
                        </p>
                      </div>
                      <p className="mt-2 text-sm font-medium text-muted-foreground md:mt-0">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm leading-relaxed text-muted-foreground">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-16 border-t border-border pt-16">
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Education
              </p>
              <div className="mt-8 space-y-6">
                {education.map((edu) => (
                  <div key={edu.school} className="flex flex-col justify-between md:flex-row md:items-start">
                    <div>
                      <h3 className="font-display font-semibold text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {edu.school}
                      </p>
                    </div>
                    <div className="mt-2 text-right md:mt-0">
                      <p className="text-sm font-medium text-muted-foreground">
                        {edu.period}
                      </p>
                      <p className="text-sm text-primary">
                        CGPA: {edu.cgpa}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="mt-16 border-t border-border pt-16">
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Recognition & achievements
              </p>
              <ul className="mt-8 space-y-4">
                {achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1 text-primary">✓</span>
                    <span className="text-base leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Connect with me
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Let&apos;s collaborate and build great things.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              I&apos;m open to new opportunities, technical discussions, and collaborations on backend systems, APIs, and enterprise integrations. Reach out anytime.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:raghuramdhigajarla@gmail.com"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                raghuramdhigajarla@gmail.com
              </a>
              <a
                href="https://github.com/RaghuRam168"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-foreground/20 bg-transparent px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-foreground/5"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/raghu-ram-dhigajarla"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-foreground/20 bg-transparent px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-foreground/5"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Raghu Ram Dhigajarla. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with React, Tailwind CSS, and TanStack Start.
          </p>
        </div>
      </footer>
    </div>
  );
}
