export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-heading">
        <span className="section-kicker">About Me</span>
        <h2 className="section-title">Building backend systems with clarity and scale in mind.</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card lg:col-span-2">
          <p className="text-base leading-8 text-slate-300">
            I am a backend developer who enjoys turning product ideas into clean,
            secure, and maintainable services. My main focus is building APIs,
            designing scalable architecture, and improving performance for
            real-world applications.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-400">
            My learning journey has been centered around Node.js, NestJS,
            databases, authentication, and system thinking. I am especially
            interested in smart learning platforms and products that solve
            meaningful problems for users.
          </p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-white">Focus Areas</h3>
          <ul className="mt-4 space-y-3 text-slate-400">
            <li>• Backend development</li>
            <li>• Scalable system design</li>
            <li>• API architecture</li>
            <li>• Smart learning products</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
