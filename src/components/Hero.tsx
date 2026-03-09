export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_30%),radial-gradient(circle_at_left,_rgba(99,102,241,0.16),_transparent_25%)]" />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Backend Developer
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Dang Van Mich.
            <span className="block text-slate-300">
              I build scalable APIs and backend systems.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I focus on NestJS, system design, and building reliable products for
            learning platforms and modern web applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/164bJD01fomICWHAv8IVMYLdQqhomU-I_/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              View CV
            </a>
            <a
              href="https://github.com/DangVanMich"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mx-auto flex h-72 w-72 items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl shadow-cyan-950/30 sm:h-80 sm:w-80">
          <div className="flex h-52 w-52 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 text-5xl font-bold tracking-[0.2em] text-cyan-400 sm:h-60 sm:w-60">
            DVM
          </div>
        </div>
      </div>
    </section>
  );
}
