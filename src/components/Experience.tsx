const experiences = [
  {
    year: "2025 - Present",
    title: "Building Smart Learning Platform",
    role: "Backend Developer",
    description:
      "Designing APIs, authentication flows, and service architecture for a scalable learning experience.",
  },
  {
    year: "2024",
    title: "Learning Backend Development",
    role: "Node.js, API Design, Databases",
    description:
      "Built backend fundamentals through hands-on projects focused on clean code, RESTful APIs, and database design.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-heading">
        <span className="section-kicker">Experience</span>
        <h2 className="section-title">A quick timeline of my backend learning and development journey.</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((item) => (
          <article key={item.year} className="card grid gap-4 md:grid-cols-[180px_1fr] md:items-start">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              {item.year}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm font-medium text-slate-300">{item.role}</p>
              <p className="mt-4 leading-7 text-slate-400">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
