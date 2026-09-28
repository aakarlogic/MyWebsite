export function LogoMark({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 4 96 96H70L50 54 30 96H4Z" fill="currentColor" />
      <path d="M30 96 50 54l11 22-15 20Z" fill="var(--accent)" />
    </svg>
  )
}

export default function Logo({ light = false, showTag = false }) {
  return (
    <a href="#home" className={`logo ${light ? 'logo--light' : ''}`} aria-label="Aakar Logic home">
      <LogoMark />
      <span className="logo__text">
        <strong>Aakar</strong>
        <span>Logic</span>
        {showTag && <em>Ideas • Code • Growth</em>}
      </span>
    </a>
  )
}
