import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <span className="section-kicker">Projects</span>
        <h2 className="section-title">Selected work that reflects my backend engineering approach.</h2>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name} className="card flex h-full flex-col">
            <div className="mb-6 rounded-2xl border border-white/10 bg-slate-900/80 p-6">
              <div className="flex h-36 items-center justify-center rounded-xl border border-dashed border-cyan-400/25 bg-slate-950 text-sm uppercase tracking-[0.25em] text-slate-500">
                Screenshot Area
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
            <p className="mt-4 flex-1 leading-7 text-slate-400">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-slate-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                GitHub ↗
              </a>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-white transition hover:text-cyan-300"
                >
                  Live Demo ↗
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
