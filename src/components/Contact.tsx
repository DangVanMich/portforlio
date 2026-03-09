export default function Contact() {
  return (
    <section id="contact" className="section-shell pb-24">
      <div className="card grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <span className="section-kicker">Contact</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something useful together.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-400">
            If you are looking for a backend developer to help design scalable
            services, clean APIs, or product infrastructure, feel free to reach
            out.
          </p>
        </div>

        <div className="space-y-4 text-slate-300">
          <p>
            <span className="font-semibold text-white">Email:</span>{" "}
            <a className="transition hover:text-cyan-400" href="mailto:your-email@example.com">
              your-email@example.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-white">GitHub:</span>{" "}
            <a
              className="transition hover:text-cyan-400"
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
            >
              github.com/your-username
            </a>
          </p>
          <p>
            <span className="font-semibold text-white">LinkedIn:</span>{" "}
            <a
              className="transition hover:text-cyan-400"
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/your-linkedin
            </a>
          </p>
          <a
            href="/cv.pdf"
            className="inline-flex rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
