import { skills } from '../data.js'

export default function About() {
  return (
    <>
      <section className="section" id="about" aria-labelledby="about-title">
        <h2 id="about-title">About me</h2>
        <div className="about-grid">
          <div className="glass pad">
            <p>
              I am a full-stack developer who is keen about the latest trends of tech: where innovations are unlimited.
            </p>
            <p>
              My recent work is a local Farming marketing system, a Secure and Scalable System that allows the local farmers to sell
              and market their farm products to Customers with ease, integrated online payment system to make the processes smooth and easy to trace,and enforcing food Security.
            </p>
          </div>
          <div className="glass pad">
            <h3>What I focus on</h3>
            <ul className="plain-list">
              <li>Easy to use, Scalable, tested Systems</li>
              <li>Accessible user interfaces that work on any screen</li>
              <li>APIs that are easy to debug</li>
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
