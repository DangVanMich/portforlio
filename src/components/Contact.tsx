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
            <a className="transition hover:text-cyan-400" href="mailto:michdang.300103@gmail.com">
              michdang.300103@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-white">GitHub:</span>{" "}
            <a
              className="transition hover:text-cyan-400"
              href="https://github.com/DangVanMich"
              target="_blank"
              rel="noreferrer"
            >
              github.com/DangVanMich
            </a>
          </p>
          <a
            href="https://drive.google.com/file/d/164bJD01fomICWHAv8IVMYLdQqhomU-I_/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
}
