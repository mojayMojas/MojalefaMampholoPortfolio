import { profile, stats } from '../data.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-card glass glass-strong">
        <div className="hero-copy">
          <p className="status">
            <span className="status-dot" aria-hidden="true" />
            {profile.status}
          </p>
          <h1>{profile.headline}</h1>
          <p className="lead">{profile.intro}</p>
          <div className="hero-actions">
            <a className="btn" href={profile.resume} download={profile.resumeFileName}>
              Download resume
            </a>
            <a className="btn btn-ghost" href="#projects">
              See my work
            </a>
          </div>
        </div>

        <figure className="hero-photo">
          <div className="photo-ring">
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="360" height="360" />
          </div>
          <figcaption className="photo-tag glass">
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
            <span className="muted">{profile.location}</span>
          </figcaption>
        </figure>
      </div>

      <dl className="stats">
        {stats.map((s) => (
          <div className="stat glass" key={s.label}>
            <dt>{s.label}</dt>
            <dd>{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
