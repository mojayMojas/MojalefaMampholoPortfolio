import { experience } from '../data.js'

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title">Experience and education</h2>
      <ol className="timeline">
        {experience.map((job) => (
          <li className="glass pad" key={job.role + job.org}>
            <div className="job-head">
              <h3>{job.role}</h3>
              <span className="period">{job.period}</span>
            </div>
            <p className="org">{job.org}</p>
            <ul className="plain-list">
              {job.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
