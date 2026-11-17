import { projects } from '../data.js'

export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">Selected projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article className="glass pad project" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <p className="highlight">{p.highlight}</p>
            <ul className="chips">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <a className="text-link" href={p.href} target="_blank" rel="noreferrer">
              View on GitHub<span className="sr-only"> ({p.title})</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
