import { useEffect, useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, MoveUpRight } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'

const projects = [
  { id: 'shellsentry', name: 'ShellSentry', number: '01', category: 'Security', kind: 'terminal', description: 'A simulated incident-response lab. Follow the evidence, reconstruct the attack, then explain what happened.', stack: 'React · TypeScript · AI Copilot', repo: 'https://github.com/aarav-malviya9/shellsentry', url: '' },
  { id: 'phishlighter', name: 'PhishLighter', number: '02', category: 'Security', kind: 'highlight', description: 'An AI detector that shows the psychological tricks hiding in emails and messages—not just suspicious links.', stack: 'AI · Social engineering · Browser', repo: 'https://github.com/aarav-malviya9/phishlighter', url: '' },
  { id: 'lemonrag', name: 'LemonRAG', number: '03', category: 'AI, local-first', kind: 'orbit', description: 'A private document Q&A assistant. Retrieval and generation stay on your machine, powered by Lemonade Server.', stack: 'Python · RAG · AMD Lemonade', repo: 'https://github.com/aarav-malviya9/lemonrag', url: '' },
  { id: 'tradin-terminal', name: 'Tradin Terminal', number: '04', category: 'Systems', kind: 'chart', description: 'A professional financial terminal for advanced trading and analysis.', stack: 'TypeScript · Finance', repo: 'https://github.com/aarav-malviya9/tradin-terminal', url: 'https://financial-terminal-pearl.vercel.app' },
  { id: 'zenith-launcher', name: 'Zenith', number: '05', category: 'Product', kind: 'zenith', description: 'A minimalist Android launcher built around a quieter, more intentional relationship with your phone.', stack: 'Kotlin · Android', repo: 'https://github.com/aarav-malviya9/zenith-launcher', url: 'https://zenith-minimalist-launcher.netlify.app/' },
]

const thoughts = [
  'A little curiosity can change the shape of a product.',
  'The useful thing is usually the interesting thing.',
  'Build it carefully. Let people make it theirs.',
  'Software should leave people with more agency.',
]

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Aarav Malviya — Building with a point of view' },
      { name: 'description', content: 'Aarav Malviya is a 15-year-old developer in India, building AI, security, and thoughtful software.' },
    ],
  }),
  component: Portfolio,
})

function ProjectMark({ kind }: { kind: string }) {
  if (kind === 'terminal') return <div className="mark-terminal"><span>SIMULATED CASE / 07</span><i>root@lab:~$ trace --attack</i><i className="mark-dim">suspicious process → persistence</i><i className="mark-red">▰ evidence linked</i><b>DETECT&nbsp; / &nbsp;INVESTIGATE&nbsp; / &nbsp;LEARN</b></div>
  if (kind === 'highlight') return <div className="mark-message"><span>SAMPLE MESSAGE</span><p>Your account will be <em>locked in 10 minutes</em> unless you verify now.</p><small>ARTIFICIAL URGENCY&nbsp; ↗</small></div>
  if (kind === 'orbit') return <div className="mark-orbit"><div className="orbit-core">LOCAL<br />ONLY</div><i /><i /><span>YOUR DOCS<br />STAY YOURS</span></div>
  if (kind === 'chart') return <div className="mark-chart"><div className="chart-head"><span>MARKET TOOLS / STUDY</span><span>CHART STUDY</span></div><svg viewBox="0 0 360 150" role="img" aria-label="Abstract market chart illustration"><path d="M0 116 38 108 65 119 94 73 127 86 158 45 188 67 222 28 250 41 285 19 318 38 360 10" fill="none" stroke="currentColor" strokeWidth="3"/><path d="M0 132h360M0 95h360M0 58h360M0 21h360" stroke="currentColor" opacity=".15" /></svg><span>ANALYSIS VIEW · ILLUSTRATION</span></div>
  return <div className="mark-zenith"><span>zenith</span><div className="zenith-sun" /><small>A quieter phone.<br />A sharper life.</small></div>
}

function Portfolio() {
  const [selected, setSelected] = useState('shellsentry')
  const [visits, setVisits] = useState(1)
  const [thought, setThought] = useState(thoughts[0])
  const focusProject = projects.find((project) => project.id === selected) ?? projects[0]

  useEffect(() => {
    const key = 'aarav-portfolio-visits'
    const count = Number(window.localStorage.getItem(key) || 0) + 1
    window.localStorage.setItem(key, String(count))
    const update = window.setTimeout(() => {
      setVisits(count)
      setThought(thoughts[(count - 1) % thoughts.length])
    }, 0)
    return () => window.clearTimeout(update)
  }, [])

  return (
    <main className="folio-shell">
      <header className="folio-nav">
        <a className="wordmark" href="#top" aria-label="Aarav Malviya, home">AM<span>®</span></a>
        <p className="nav-note">AN OPEN NOTEBOOK&nbsp; / &nbsp;INDIA</p>
        <nav aria-label="Main navigation"><a href="#work">Selected work</a><a href="#about">A little about</a><a className="nav-contact" href="https://github.com/aarav-malviya9" target="_blank" rel="noreferrer">Say hello <ArrowUpRight size={14} /></a></nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-topline"><span>DEVELOPER · MAKER · STILL CURIOUS</span><span className="visit-count">YOU FOUND YOUR WAY HERE&nbsp; / &nbsp;NO. {String(visits).padStart(2, '0')}</span></div>
        <div className="hero-main">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot" /> AARAV MALVIYA <span className="eyebrow-separator">—</span> 15, INDIA</p>
            <h1>I make<br />software with<br /><span className="hero-italic">a point of view.</span></h1>
            <p className="hero-description">Part builder’s notebook, part proof of work. I’m interested in what happens when useful ideas get a little more imagination.</p>
            <a className="text-link" href="#work">Take a look around <ArrowDownRight size={17} /></a>
          </div>
          <aside className="hero-feature" aria-live="polite">
            <div className="feature-head"><span>THE CURRENT THREAD</span><span>{focusProject.number} / 05</span></div>
            <div className="feature-art"><ProjectMark kind={focusProject.kind} /></div>
            <div className="feature-copy"><div><p className="micro-label">{focusProject.category.toUpperCase()}</p><h2>{focusProject.name}</h2></div><a href={focusProject.repo} target="_blank" rel="noreferrer" aria-label={`Open ${focusProject.name} repository`}><MoveUpRight size={20} /></a></div>
            <p className="feature-description">{focusProject.description}</p>
            <div className="thread-picker" aria-label="Choose a project to explore">{projects.map((project) => <button key={project.id} onClick={() => setSelected(project.id)} aria-pressed={selected === project.id} aria-label={`Show ${project.name}`}>{project.number}</button>)}</div>
          </aside>
        </div>
        <div className="hero-foot"><span>SCROLL A LITTLE. SEE WHAT'S HERE.</span><ArrowDown size={15} /><span className="hero-foot-right">A PERSONAL ARCHIVE, ALWAYS IN PROGRESS</span></div>
      </section>

      <div className="marquee" aria-label="Curiosity, care, and a little bit of play"><div className="marquee-track"><span>CURIOUS BY DEFAULT <b>·</b> BUILT WITH CARE <b>·</b> BETTER A LITTLE WEIRD <b>·</b> CURIOUS BY DEFAULT <b>·</b> BUILT WITH CARE <b>·</b> BETTER A LITTLE WEIRD <b>·</b></span></div></div>

      <section className="work-section" id="work">
        <div className="section-heading"><div><p className="eyebrow">01 — THINGS I’VE PUT INTO THE WORLD</p><h2>Selected <em>work.</em></h2></div><p className="section-aside">A handful of experiments in making technology feel more useful, more human, or just more fun.</p></div>
        <div className="project-grid">
          {projects.map((project, index) => <article className={`project-card project-card-${index + 1}${selected === project.id ? ' is-selected' : ''}`} key={project.id} onMouseEnter={() => setSelected(project.id)} onFocus={() => setSelected(project.id)}>
            <button className="project-select" onClick={() => setSelected(project.id)} aria-label={`Feature ${project.name}`} aria-pressed={selected === project.id}>
              <div className={`project-art project-art-${project.kind}`}><ProjectMark kind={project.kind} /><span className="art-index">{project.number} / 05</span></div>
              <div className="project-meta"><span>{project.category.toUpperCase()}</span><span>{project.stack}</span></div>
              <div className="project-title-row"><h3>{project.name}</h3><ArrowUpRight size={19} /></div>
              <p>{project.description}</p>
            </button>
            <div className="project-links"><a href={project.repo} target="_blank" rel="noreferrer"><Github size={14} /> Source <ArrowUpRight size={13} /></a>{project.url && <a href={project.url} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={13} /></a>}</div>
          </article>)}
        </div>
        <a className="all-work-link" href="https://github.com/aarav-malviya9?tab=repositories" target="_blank" rel="noreferrer">There’s more where these came from <span>Browse all repositories <ArrowUpRight size={15} /></span></a>
      </section>

      <section className="note-section" id="about">
        <div className="note-index"><span>02 / A SMALL INTRODUCTION</span><span>FIELD NOTE {String(visits).padStart(2, '0')}</span></div>
        <div className="note-body"><p className="note-kicker">A thought for this visit</p><blockquote key={thought}>{thought}</blockquote><p className="note-detail">I’m Aarav, a 15-year-old developer in India. Most days you’ll find me building, taking things apart, and following an idea just to see where it goes.</p><div className="note-bottom"><span>THIS NOTEBOOK REMEMBERS YOUR VISITS ON THIS DEVICE.</span><button onClick={() => setThought((current) => { const next = thoughts.filter((line) => line !== current); return next[Math.floor(Math.random() * next.length)] })}>Leave with another thought <ArrowUpRight size={14} /></button></div></div>
      </section>

      <footer className="folio-footer"><div><span className="footer-mark">AM<span>®</span></span><p>Made with curiosity<br />and an unreasonable number of tabs.</p></div><a className="footer-cta" href="https://github.com/aarav-malviya9" target="_blank" rel="noreferrer">Find me on GitHub <ArrowUpRight size={18} /></a><div className="footer-bottom"><span>© {new Date().getFullYear()} AARAV MALVIYA</span><span>STILL MAKING THINGS.</span><a href="#top">BACK TO THE TOP ↑</a></div></footer>
    </main>
  )
}
