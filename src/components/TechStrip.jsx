import {
  siReact, siAngular, siNextdotjs, siJavascript, siTypescript, siHtml5, siCss, siOpenjdk, siDotnet,
  siNodedotjs, siPython, siPhp, siFlutter, siAndroid, siApple, siKotlin, siSwift, siMysql,
  siPostgresql, siMongodb, siFigma,
} from 'simple-icons'

// simple-icons no longer ships C# or SQL Server logos, so these two are drawn here.
const csharp = {
  hex: '9B4F96',
  jsx: (
    <>
      <path d="M12 1.5 21.1 6.75v10.5L12 22.5 2.9 17.25V6.75Z" fill="currentColor" />
      <text x="12" y="15.4" textAnchor="middle" fontSize="8.6" fontWeight="800" fontFamily="Arial, sans-serif" fill="#fff">C#</text>
    </>
  ),
}
const sqlServer = {
  hex: 'CC2927',
  jsx: (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </g>
  ),
}

// One mixed list so neighbouring logos have different colours.
// `color` overrides the brand colour where it is too light to read on white.
const tech = [
  { icon: siReact, name: 'React', type: 'Frontend' },
  { icon: siOpenjdk, name: 'Java', type: 'Backend', color: '#E76F00' },
  { icon: siAngular, name: 'Angular', type: 'Frontend', color: '#DD0031' },
  { icon: csharp, name: 'C#', type: 'Backend' },
  { icon: siDotnet, name: 'ASP.NET', type: 'Backend' },
  { icon: siFlutter, name: 'Flutter', type: 'Mobile' },
  { icon: siHtml5, name: 'HTML5', type: 'Frontend' },
  { icon: siNodedotjs, name: 'Node.js', type: 'Backend' },
  { icon: siJavascript, name: 'JavaScript', type: 'Language', color: '#D4B000' },
  { icon: sqlServer, name: 'SQL Server', type: 'Database' },
  { icon: siCss, name: 'CSS3', type: 'Frontend' },
  { icon: siDotnet, name: '.NET Core', type: 'Backend' },
  { icon: siAndroid, name: 'Android', type: 'Mobile' },
  { icon: siTypescript, name: 'TypeScript', type: 'Language' },
  { icon: siPython, name: 'Python', type: 'Backend' },
  { icon: siMysql, name: 'MySQL', type: 'Database' },
  { icon: siNextdotjs, name: 'Next.js', type: 'Frontend' },
  { icon: siApple, name: 'iOS', type: 'Mobile' },
  { icon: siPhp, name: 'PHP', type: 'Backend' },
  { icon: siMongodb, name: 'MongoDB', type: 'Database' },
  { icon: siKotlin, name: 'Kotlin', type: 'Mobile' },
  { icon: siPostgresql, name: 'PostgreSQL', type: 'Database' },
  { icon: siSwift, name: 'Swift', type: 'Mobile' },
  { icon: siFigma, name: 'Figma', type: 'UI/UX Design' },
]

function Item({ icon, name, type, color }) {
  return (
    <li className="tech__item" style={{ '--brand': color || `#${icon.hex}` }}>
      <span className="tech__logo">
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          {icon.jsx ?? <path d={icon.path} fill="currentColor" />}
        </svg>
      </span>
      <span className="tech__name">
        <strong>{name}</strong>
        <small>{type}</small>
      </span>
    </li>
  )
}

export default function TechStrip() {
  return (
    <section className="tech" aria-label="Technologies we use">
      <div className="container tech__head">
        <span className="tech__rule" />
        <p className="tech__title">
          Technologies we work with <b>{tech.length}+</b>
        </p>
        <span className="tech__rule" />
      </div>
      <div className="tech__viewport">
        <div className="tech__track">
          {/* The list is rendered twice so the scroll loops without a gap. */}
          <ul className="tech__list">
            {tech.map((t) => <Item key={t.name} {...t} />)}
          </ul>
          <ul className="tech__list" aria-hidden="true">
            {tech.map((t) => <Item key={t.name} {...t} />)}
          </ul>
        </div>
      </div>
    </section>
  )
}
