import { Home, LayoutGrid, HelpCircle, Mail } from 'lucide-react'
import useActiveSection from '../useActiveSection.js'
import { WHATSAPP_NUMBER } from '../config.js'

const hrefs = ['#home', '#services', '#process', '#why', '#faq', '#contact']
// Sections without their own tab light up the nearest one.
const tabFor = { '#process': '#services', '#why': '#services' }

const message = encodeURIComponent("Hi Aakar Logic, I'd like to discuss a project.")

function Tab({ href, icon: Icon, label, active }) {
  return (
    <a href={href} className={`mbar__tab ${active ? 'is-active' : ''}`} aria-current={active ? 'true' : undefined}>
      <Icon size={21} strokeWidth={active ? 2.3 : 1.8} />
      <span>{label}</span>
    </a>
  )
}

// App-style bottom navigation, shown on phones only.
export default function MobileBar() {
  const section = useActiveSection(hrefs)
  const active = tabFor[section] || section

  return (
    <nav className="mbar" aria-label="Mobile navigation">
      <Tab href="#home" icon={Home} label="Home" active={active === '#home'} />
      <Tab href="#services" icon={LayoutGrid} label="Services" active={active === '#services'} />
      <a
        className="mbar__wa"
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.3.6 4.5 1.8 6.4L3 29l7.2-1.9c1.8 1 3.8 1.5 5.9 1.5 7 0 12.7-5.6 12.7-12.6S23 3 16 3Zm0 23.1c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-4.3 1.1 1.1-4.1-.3-.4a10.4 10.4 0 0 1-1.6-5.5C5.2 9.8 10 5.1 16 5.1s10.7 4.7 10.7 10.5S22 26.1 16 26.1Zm5.9-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4Z"
          />
        </svg>
      </a>
      <Tab href="#faq" icon={HelpCircle} label="FAQ" active={active === '#faq'} />
      <Tab href="#contact" icon={Mail} label="Contact" active={active === '#contact'} />
    </nav>
  )
}
