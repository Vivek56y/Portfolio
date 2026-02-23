import React from 'react'
import './App.css'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const skillsPrimary = [
  'C',
  'C++',
  'Python',
  'Java',
  'SQL',
  'Data Structures & Algorithms',
  'Node.js',
  'Express.js',
  'MongoDB',
  'React.js',
]

const skillsSecondary = [
  'HTML',
  'CSS',
  'JavaScript (ES6+)',
  'REST APIs',
  'Tailwind CSS',
  'MERN Stack',
  'Git',
  'GitHub',
  'VS Code',
  'Jupyter Notebook',
  'Vercel',
  'Netlify',
]

const projects = [
  {
  name: 'BusGo – Smart Bus Tracking System',
  description:
    'Full-stack MERN bus tracking platform with real-time location updates, secure authentication, and role-based access. Users can search routes and track buses, while admins can manage buses and routes through a dedicated dashboard.',
  tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Tailwind CSS'],
  live: 'https://bus-tracking-mern.vercel.app',
  github: 'https://github.com/yourusername/busgo',
}
  {
    name: 'Weather App',
    description:
      'Responsive weather application that fetches real-time data from the OpenWeatherMap API. Displays temperature, humidity and conditions with error handling for invalid inputs.',
    tech: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
    live: 'https://wheather-mocha.vercel.app/',
    github: 'https://github.com/Vivek56y/WHEATHER',
  },
  {
    name: 'Portfolio Website',
    description:
      'Personal portfolio website to showcase skills, education and projects, built with clean layout and responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://vivekyadav-swart.vercel.app/',
    github: 'https://github.com/Vivek56y/portpolio',
  },
  {
    name: 'Amazon Clone (UI)',
    description:
      'Front-end replica of the Amazon home page with focus on layout, product sections and responsive styling.',
    tech: ['HTML', 'CSS'],
    live: 'amazon-clone-jade-six.vercel.app',
    github: 'https://github.com/Vivek56y/Amazon-clone',
  },
  {
    name: 'Rock-Paper-Scissors Game',
    description:
      'Interactive browser-based Rock-Paper-Scissors game with real-time score logic and simple animations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    github: 'https://github.com/Vivek56y/rockpaperscesiorgame',
  },
]

const App = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-slate-950 to-background text-slate-100">
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accentLight shadow-glow">
              <span className="text-lg font-semibold text-white">VY</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide">Vivek Yadav</p>
              <p className="text-xs text-slate-400">Full Stack Developer (MERN)</p>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 sm:flex">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="transition-colors hover:text-accentLight"
              >
                {section.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 sm:pt-20">
        {/* Hero */}
        <section
          id="hero"
          className="grid gap-10 border-b border-slate-800/60 pb-16 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center md:pb-20 md:pt-4"
        >
          <div className="space-y-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-accentLight">
              Full Stack MERN Developer
            </p>
            <h1 className="mb-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              I craft{' '}
              <span className="bg-gradient-to-r from-accentLight via-accent to-accentSoft bg-clip-text text-transparent">
                clean
              </span>{' '}
              &amp;{' '}
              <span className="bg-gradient-to-r from-accent via-accentSoft to-accentLight bg-clip-text text-transparent">
                scalable
              </span>{' '}
              web applications.
            </h1>
            <p className="mb-6 max-w-xl text-sm text-slate-400 sm:text-base">
              I&apos;m Vivek Yadav, a full stack MERN developer. I build fast, reliable web apps using MongoDB,
              Express, React and Node.js, styled with Tailwind CSS and deployed on platforms like Vercel and
              Netlify.
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToSection('projects')}
                className="rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white shadow-glow transition hover:bg-accentSoft"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-accent hover:text-accentLight"
              >
                Contact Me
              </button>
              <span className="text-xs text-slate-500">Available for freelance &amp; full-time roles</span>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              {['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind', 'Vercel'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Side card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5 shadow-xl shadow-black/50 md:translate-y-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-medium text-slate-400">Tech Snapshot</p>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open to work
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="space-y-2">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.12em]">Backend</p>
                <ul className="space-y-1">
                  <li>Node.js / Express</li>
                  <li>MongoDB</li>
                  <li>REST APIs</li>
                  <li>Auth &amp; Security</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.12em]">Frontend</p>
                <ul className="space-y-1">
                  <li>React (Hooks)</li>
                  <li>Tailwind CSS</li>
                  <li>Responsive UI</li>
                  <li>Vercel / Netlify</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-slate-800/80 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40 px-3 py-2 text-[11px] text-slate-400">
              <p className="font-medium text-slate-200">
                Current focus:{' '}
                <span className="text-accentLight">
                  scalable Node.js backends &amp; clean React UIs
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-b border-slate-800/60 py-14 sm:py-18">
          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start">
            <div>
              <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">About</h2>
              <p className="text-sm text-slate-400 sm:text-base">
                I&apos;m a full stack developer who enjoys turning ideas into reliable products. I build RESTful APIs
                with Node.js and Express, persist data with MongoDB, and craft responsive, accessible frontends with
                React and Tailwind CSS.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <p className="text-xs font-medium text-slate-400">What I care about</p>
                <p className="mt-2 text-sm text-slate-200">
                  Clean architecture, predictable APIs, performance, and developer experience. I love working on
                  projects end-to-end: backend, frontend, and deployment.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <p className="text-xs font-medium text-slate-400">Tooling</p>
                <p className="mt-2 text-sm text-slate-200">
                  Comfortable with Git &amp; GitHub, VS Code, environment management, and deploying full stack
                  projects on Vercel and Netlify.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-b border-slate-800/60 py-14 sm:py-18">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white sm:text-xl">Skills &amp; Stack</h2>
              <p className="mt-1 text-sm text-slate-400">
                Technologies I use most often to design, build and ship full stack web applications.
              </p>
            </div>
            <p className="text-xs text-slate-500">MERN-focused, with modern tooling &amp; deployment.</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 sm:p-7">
            <div className="grid gap-6 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2fr)] md:items-stretch">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Core stack</p>
                <div className="flex flex-wrap gap-2">
                  {skillsPrimary.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-gradient-to-r from-accentSoft/20 via-accent/10 to-accentLight/20 px-3 py-1 text-xs font-medium text-accentLight ring-1 ring-accent/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-400">
                  These are the main technologies I rely on to build production-ready APIs and frontends.
                </p>
              </div>

              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Supporting tools</p>
                <div className="flex flex-wrap gap-2">
                  {skillsSecondary.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700/80 bg-slate-950 px-3 py-1 text-xs text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume */}
        <section id="resume" className="border-b border-slate-800/60 py-14 sm:py-18">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white sm:text-xl">Resume</h2>
              <p className="mt-1 max-w-xl text-sm text-slate-400">
                Want a quick overview of my experience, skills and projects? Download my resume as a PDF and keep it
                handy while reviewing my work.
              </p>
            </div>
            <div>
              <a
                href="/VIVEK YADAV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white shadow-glow transition hover:bg-accentSoft"
              >
                <span>Download Resume</span>
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-b border-slate-800/60 py-14 sm:py-18">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-semibold text-white sm:text-xl">Selected Projects</h2>
            <p className="text-xs text-slate-500">
              Real-world projects showcasing backend &amp; frontend skills.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/40 p-5 transition hover:border-accent/70 hover:bg-slate-950/80 hover:shadow-glow"
              >
                <div>
                  <h3 className="mb-1.5 text-sm font-semibold text-white sm:text-base">{project.name}</h3>
                  <p className="mb-3 text-xs text-slate-400 sm:text-sm">{project.description}</p>
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-3 text-xs">
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-1 text-accentLight hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                    <span aria-hidden>↗</span>
                  </a>
                  <span className="h-1 w-1 rounded-full bg-slate-700" />
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1 text-slate-300 hover:text-accentLight hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pt-12 sm:pt-16">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-white sm:text-xl">Contact</h2>
            <p className="mt-1 text-sm text-slate-400">
              Have an opportunity, freelance project, or collaboration in mind? Let&apos;s connect.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1 text-sm text-slate-300">
              <p>
                Email:{' '}
                <a
                  href="mailto:vahir7315@gmail.com"
                  className="text-accentLight hover:underline"
                >
                  vahir7315@gmail.com
                </a>
              </p>
              <p>Phone: <span className="text-slate-200">+91 63985 57995</span></p>
              <p>
                LinkedIn:{' '}
                <a
                  href="https://www.linkedin.com/in/vivek-yadav-83275524b/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accentLight hover:underline"
                >
                  linkedin.com/in/vivek-yadav-83275524b
                </a>
              </p>
              <p>
                GitHub:{' '}
                <a
                  href="https://github.com/Vivek56y"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accentLight hover:underline"
                >
                  github.com/Vivek56y
                </a>
              </p>
            </div>
            <div className="text-xs text-slate-500">
              Update the LinkedIn and GitHub URLs with your real profiles in <code>App.jsx</code>.
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-slate-800/80 pt-6 text-sm text-slate-400">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Vivek Yadav
              </p>
              <p className="text-sm text-slate-300">Full Stack MERN Developer</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-400 transition hover:text-accentLight"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-slate-400 transition hover:text-accentLight"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-slate-400 transition hover:text-accentLight"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-400 transition hover:text-accentLight"
              >
                Contact
              </button>
            </div>
          </div>

          <p className="mt-4 text-[11px] text-slate-500">
            © {new Date().getFullYear()} Vivek Yadav. Built with React &amp; Tailwind CSS.
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
