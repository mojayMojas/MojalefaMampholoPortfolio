import { skills } from '../data.js'

export default function About() {
  return (
    <>
      <section className="section" id="about" aria-labelledby="about-title">
        <h2 id="about-title">About me</h2>
        <div className="about-grid">
          <div className="glass pad">
            <p>
              I am a full-stack developer who likes the whole path of a feature: the screen a person
              touches, the API behind it and the table where the data lands.
            </p>
            <p>
              My recent work is a clinic platform with online booking, a reception queue and a patient
              status page. I enjoy the small details that make software feel trustworthy, such as
              honest error messages, sensible empty states and flows that never lose someone's work.
            </p>
          </div>
          <div className="glass pad">
            <h3>What I focus on</h3>
            <ul className="plain-list">
              <li>Readable, tested code</li>
              <li>Accessible interfaces that work on any screen</li>
              <li>APIs that fail clearly and recover well</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="skills" aria-labelledby="skills-title">
        <h2 id="skills-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((g) => (
            <div className="glass pad" key={g.group}>
              <h3>{g.group}</h3>
              <ul className="chips">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
