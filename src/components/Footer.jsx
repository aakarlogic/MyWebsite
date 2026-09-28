import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react'
import Logo from './Logo.jsx'
import { EMAIL, PHONE, WHATSAPP_NUMBER } from '../config.js'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'How We Work' },
  { href: '#why', label: 'Why Choose Us' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

const services = [
  'Website Development',
  'Web Applications',
  'Mobile Apps',
  'UI/UX Design',
  'API Integration',
  'Maintenance & Support',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light showTag />
          <p>
            We turn your ideas into powerful digital experiences — websites, web apps and mobile
            apps that help your business grow.
          </p>
          <p lang="mr" className="footer__marathi">विचारांना डिजिटल आकार</p>
        </div>

        <nav className="footer__col" aria-label="Quick links">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s}><a href="#services">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li><Phone size={16} /><a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a></li>
            <li>
              <MessageCircle size={16} />
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">WhatsApp us</a>
            </li>
            <li><Mail size={16} /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><MapPin size={16} /><span>Mumbai, Maharashtra</span></li>
          </ul>
          <a href="#contact" className="footer__cta">
            Start a project <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Aakar Logic. All rights reserved.</p>
        <p>Ideas • Code • Growth</p>
      </div>
    </footer>
  )
}
