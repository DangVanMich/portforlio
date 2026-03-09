import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-heading">
        <span className="section-kicker">Skills</span>
        <h2 className="section-title">Core technologies I use to design, build, and ship backend solutions.</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => (
          <article key={category.title} className="card">
            <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
