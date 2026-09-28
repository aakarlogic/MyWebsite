import { useRef, useState } from 'react'
import { Globe, Code2, Smartphone, PenSquare, Cloud, Settings, Check, ArrowRight } from 'lucide-react'
import SectionHeader from './SectionHeader.jsx'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    text: 'Modern, responsive and user-friendly websites.',
    points: ['Responsive on every device', 'SEO-ready & fast loading', 'Easy to update'],
  },
  {
    icon: Code2,
    title: 'Web Application Development',
    text: 'Custom web apps built for your unique needs.',
    points: ['Dashboards & admin panels', 'Secure login & user roles', 'Built to scale'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    text: 'Powerful apps for Android & iOS.',
    points: ['Android & iOS apps', 'Flutter or native', 'Play Store & App Store launch'],
  },
  {
    icon: PenSquare,
    title: 'UI/UX Design',
    text: 'Clean designs that create better experiences.',
    points: ['Wireframes & prototypes', 'Designs in Figma', 'User-focused flows'],
  },
  {
    icon: Cloud,
    title: 'API Integration',
    text: 'Connect your systems and automate your workflow.',
    points: ['Payment gateways', 'Third-party services', 'Workflow automation'],
  },
  {
    icon: Settings,
    title: 'Maintenance & Support',
    text: 'Keep your digital products running smoothly.',
    points: ['Bug fixes & updates', 'Backups & security', 'Performance checks'],
  },
]

export default function Services() {
  const gridRef = useRef(null)
  const [slide, setSlide] = useState(0)

  // On phones the grid becomes a swipe carousel; track which card is in view for the dots.
  const onScroll = () => {
    const el = gridRef.current
    const card = el?.firstElementChild
    if (!card) return
    const step = card.getBoundingClientRect().width + 14
    setSlide(Math.min(services.length - 1, Math.round(el.scrollLeft / step)))
  }

  const goTo = (i) => {
    const el = gridRef.current
    const card = el?.children[i]
    if (card) el.scrollTo({ left: card.offsetLeft - el.firstElementChild.offsetLeft, behavior: 'smooth' })
  }

  return (
    <section id="services" className="services">
      <div className="container">
        <SectionHeader
          eyebrow="What we do"
          title="Our"
          highlight="Services"
          text="Everything you need to take your business online — designed, built and supported by one team."
        />
        <div className="services__grid" ref={gridRef} onScroll={onScroll}>
          {services.map(({ icon: Icon, title, text, points }, i) => (
            <article key={title} className="service-card reveal" style={{ '--delay': `${i * 80}ms` }}>
              <div className="service-card__top">
                <div className="service-card__icon">
                  <Icon size={26} strokeWidth={1.7} />
                </div>
                <span className="service-card__num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul className="service-card__points">
                {points.map((p) => (
                  <li key={p}><Check size={15} strokeWidth={2.5} /> {p}</li>
                ))}
              </ul>
              <a href="#contact" className="service-card__link">
                Discuss your project <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
        <div className="services__dots" aria-hidden="true">
          <span className="services__count">{String(slide + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}</span>
          {services.map((s, i) => (
            <button key={s.title} className={i === slide ? 'is-active' : ''} onClick={() => goTo(i)} tabIndex={-1} />
          ))}
          <span className="services__hint">Swipe →</span>
        </div>
      </div>
    </section>
  )
}
