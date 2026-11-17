// All demo content lives here. Edit this file to make the portfolio yours.

const base = import.meta.env.BASE_URL

export const profile = {
  name: 'Mojalefa Mampholo',
  role: 'Full-stack developer',
 headline: 'I develop modern, scalable software solutions that drive real-world impact.',
intro:
  'I develop high-quality web applications using React, Java and Spring Boot, building responsive user interfaces, robust APIs and well-structured database solutions. I focus on clean architecture, application performance, security and delivering reliable software that meets business needs.',
location: 'Johannesburg, South Africa',
  email: 'mampholomojalefa04@gmail.com',
  phone: '+27 66 467 0894',
  status: 'Open to junior and mid-level roles',
  // To use your own photo: put it in /public (for example profile.jpg) and change this line.
  photo: `${base}avatar.svg`,
  resume: `${base}Mojalefa_Resume.pdf`,
  resumeFileName: 'Mojalefa_Resume.pdf',
  links: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
}

export const stats = [
  { value: '3+', label: 'years building web apps' },
  { value: '12', label: 'projects shipped' },
  { value: '98', label: 'Lighthouse accessibility score on the clinic app' },
]

export const skills = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'CSS', 'Accessibility'] },
  { group: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'Express', 'REST APIs'] },
  { group: 'Data', items: ['PostgreSQL', 'Prisma', 'JPA / Hibernate', 'Redis'] },
  { group: 'Tooling', items: ['Git and GitHub', 'Docker', 'Jest and Vitest', 'Playwright', 'CI/CD'] },
]

export const projects = [
  {
    title: 'ClinicFlow',
    summary:
      'Appointment booking and live queue system for medical practices. Patients pick from open time slots and follow their place in line.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma'],
    highlight: 'Cut front-desk check-in time by about a third in pilot testing.',
    href: 'https://github.com/',
  },
  {
    title: 'LedgerLite',
    summary:
      'Personal budgeting app with category budgets, recurring bills and a monthly summary that explains where the money went.',
    tags: ['React', 'Spring Boot', 'PostgreSQL'],
    highlight: 'Secure sign-in with JWT and role-based access.',
    href: 'https://github.com/',
  },
  {
    title: 'StockKeep',
    summary:
      'Inventory tracker for small shops with low-stock alerts, barcode lookup and CSV import and export.',
    tags: ['React', 'Java', 'Spring Boot', 'Docker'],
    highlight: 'Runs from a single docker compose command.',
    href: 'https://github.com/',
  },
  {
    title: 'CampusConnect',
    summary:
      'Student events board where societies post events and students RSVP, with reminders and a calendar view.',
    tags: ['React', 'Express', 'MongoDB'],
    highlight: 'Used by 6 student societies during the pilot term.',
    href: 'https://github.com/',
  },
]

export const experience = [
  {
    role: 'Student Mentor',
    org: 'Tshwane University of Technology',
    period: 'feb 2025 to December 2025',
    points: [
      'Offer academic and professional personal guidance to students.',
      'Offer tutorial sessions for underperforming students.',
      'provide technical monitoring to Lab Computers - During Open Lab Study Hours.',
    ],
  },
  {
    role: 'Software Developer Intern',
    org: 'Vhuthelu Resources',
    period: 'July 2026 - December 2026',
    points: [
      'Software Development and IT support diagnosing issues on systems.',
      ' Hosting and maintaining websites and mobile applications.',
      'Managing and working with databases',
      'Penetration testing and security auditing of applications and systems.',
    ],
  },
  {
    role: 'diploma Computer Science',
    org: 'Tshwane University of Technology',
    period: '2021 to 2026',
    points: ['Software development major. Final-year project: private Hospital patient management system.'],
  },
]
