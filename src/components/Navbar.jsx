import { useEffect, useState } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import Logo from './Logo.jsx'
import useActiveSection from '../useActiveSection.js'
import { PHONE, WHATSAPP_NUMBER } from '../config.js'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#why', label: 'Why Us' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]
const hrefs = links.map((l) => l.href)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(hrefs)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Stop the page scrolling behind the full-screen mobile menu.
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <Logo />
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href ? 'is-active' : ''}
              aria-current={active === l.href ? 'true' : undefined}
              style={{ '--i': i }}
              onClick={() => setOpen(false)}
            >
              <span className="nav__num">{String(i + 1).padStart(2, '0')}</span>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary btn--sm nav__cta" onClick={() => setOpen(false)}>
            Get in Touch
          </a>
          <div className="nav__mobile-contact">
            <a href={`tel:${PHONE.replace(/\s/g, '')}`}><Phone size={18} /> {PHONE}</a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> WhatsApp us
            </a>
          </div>
        </nav>
        <button className="nav__toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
