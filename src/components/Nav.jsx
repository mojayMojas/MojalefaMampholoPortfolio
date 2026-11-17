import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="nav-wrap">
      <nav className="nav glass" aria-label="Main">
        <a className="nav-brand" href="#top" aria-label="Back to top">
          {profile.name.split(' ')[0]}
        </a>
        <ul className="nav-links">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'is-active' : undefined} aria-current={active === id ? 'true' : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn-small" href={profile.resume} download={profile.resumeFileName}>
          Download resume
        </a>
      </nav>
    </header>
  )
}
