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
    title: "Enterprise API Platform",
    description:
      "Scalable REST and GraphQL services powering internal IBM tools, focused on reliability and clean architecture.",
    tags: ["Node.js", "TypeScript", "GraphQL"],
  },
  {
    title: "Developer Experience Portal",
    description:
      "A documentation and onboarding hub that reduced new-team ramp-up time and improved cross-functional collaboration.",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Cloud Migration Toolkit",
    description:
      "Automation scripts and CLI tooling that streamlined containerized deployments across hybrid cloud environments.",
    tags: ["Python", "Docker", "Kubernetes"],
  },
];

const skills = [
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "GraphQL",
  "Cloud / Kubernetes",
  "System Design",
  "CI/CD",
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
                Software Developer at IBM
              </p>
            </div>
            <p className="max-w-md text-muted-foreground">
              Contributing to enterprise products, shipping production code, and helping
              teams build with modern engineering practices.
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

        {/* About / Skills */}
        <section id="about" className="bg-secondary px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  About
                </p>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                  Engineering with clarity.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  I care about code that is readable, systems that are resilient, and
                  interfaces that feel obvious. At IBM, I work on products used by real
                  people, balancing speed with long-term maintainability.
                </p>
              </div>
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Skills & tools
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
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Let&apos;s build something great.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              I am open to new opportunities, collaborations, and conversations about
              software engineering.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                hello@example.com
              </a>
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-foreground/20 bg-transparent px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-foreground/5"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/username"
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
