// Shared heading used at the top of each section: small label, title, short intro.
export default function SectionHeader({ eyebrow, title, highlight, text, light = false, align = 'center' }) {
  return (
    <header className={`sh sh--${align} ${light ? 'sh--light' : ''} reveal`}>
      <span className="sh__eyebrow">{eyebrow}</span>
      <h2>
        {title} {highlight && <span>{highlight}</span>}
      </h2>
      {text && <p>{text}</p>}
    </header>
  )
}
