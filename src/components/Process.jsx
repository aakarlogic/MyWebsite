import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react'
import SectionHeader from './SectionHeader.jsx'

const steps = [
  { icon: Lightbulb, title: 'Idea & Planning', text: 'We understand your business, goals and users, then plan the right solution.' },
  { icon: PenTool, title: 'Design', text: 'Clean, modern UI/UX designs you review and approve before we build.' },
  { icon: Code2, title: 'Development', text: 'Fast, secure and scalable code, with regular updates on progress.' },
  { icon: Rocket, title: 'Launch & Support', text: 'We go live, test everything, and stay with you for support and growth.' },
]

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container">
        <SectionHeader
          eyebrow="Our process"
          title="How We"
          highlight="Work"
          text="A simple, transparent process — so you always know what is happening with your project."
        />
        <ol className="process__steps">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="process__step reveal" style={{ '--delay': `${i * 120}ms` }}>
              <span className="process__num">{String(i + 1).padStart(2, '0')}</span>
              <div className="process__icon"><Icon size={26} strokeWidth={1.6} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
