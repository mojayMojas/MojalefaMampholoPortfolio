import { useState } from 'react'
import { profile } from '../data.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="glass glass-strong contact">
        <h2 id="contact-title">Let's work together</h2>
        <p className="lead">
          I am looking for a team where I can keep growing as a full-stack developer. Send me a
          message and I will respond with immidiate effect.
        </p>
        <div className="hero-actions">
          <a className="btn" href={`mailto:${profile.email}`}>
            Email {profile.email}
          </a>
          <button type="button" className="btn btn-ghost" onClick={copyEmail}>
            Copy email address
          </button>
          <a className="btn btn-ghost" href={profile.resume} download={profile.resumeFileName}>
            Download resume
          </a>
        </div>
        <p className="sr-only" role="status" aria-live="polite">
          {copied ? 'Email address copied' : ''}
        </p>
        {copied && <p className="copied">Email address copied</p>}
        <ul className="social">
          {profile.links.map((l) => (
            <li key={l.label}>
              <a className="text-link" href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a className="text-link" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
              {profile.phone}
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
