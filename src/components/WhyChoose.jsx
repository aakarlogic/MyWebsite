import { Lightbulb, Target, ShieldCheck, Users } from 'lucide-react'
import SectionHeader from './SectionHeader.jsx'

const reasons = [
  { icon: Lightbulb, title: 'Creative & Practical Solutions', text: 'We blend creativity with technology.' },
  { icon: Target, title: 'On-Time Delivery', text: 'Your time matters to us.' },
  { icon: ShieldCheck, title: 'Quality & Clean Code', text: 'Built for performance and scale.' },
  { icon: Users, title: 'Personalized Support', text: "We're with you, at every step." },
]

// Each line is a list of [tokenType, text] pairs rendered in the laptop screen.
const codeLines = [
  [['kw', 'const '], ['fn', 'buildFuture'], ['p', ' = '], ['kw', 'async '], ['p', '(idea) => {']],
  [['p', '  '], ['kw', 'const '], ['p', 'design = '], ['kw', 'await '], ['fn', 'craftUI'], ['p', '(idea);']],
  [['p', '  '], ['kw', 'const '], ['p', 'app = '], ['fn', 'writeCleanCode'], ['p', '(design);']],
  [['p', '  '], ['kw', 'return '], ['fn', 'launch'], ['p', '(app, { '], ['str', "scale: 'unlimited'"], ['p', ' });']],
  [['p', '};']],
  [],
  [['cm', '// Your Vision. Our Logic.']],
  [['fn', 'buildFuture'], ['p', '('], ['str', "'your-business'"], ['p', ');']],
]

function Laptop() {
  return (
    <div className="laptop reveal" aria-hidden="true">
      <div className="laptop__screen">
        <div className="laptop__bar"><i /><i /><i /><span>aakar-logic.js</span></div>
        <pre>
          {codeLines.map((line, i) => (
            <div key={i} className="code-line">
              <b>{i + 1}</b>
              {line.map(([type, text], j) => (
                <span key={j} className={`tok-${type}`}>{text}</span>
              ))}
              {i === codeLines.length - 1 && <span className="caret" />}
            </div>
          ))}
        </pre>
      </div>
      <div className="laptop__base" />
    </div>
  )
}

export default function WhyChoose() {
  return (
    <section id="why" className="why">
      <div className="why__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0 60C240 20 480 20 720 50s520 60 720 0V120H0Z" fill="var(--navy)" />
        </svg>
      </div>
      <div className="container why__grid">
        <div>
          <SectionHeader
            eyebrow="Why us"
            title="Why Choose"
            highlight="Aakar Logic?"
            text="We combine creative design with solid engineering — and we stay with you after launch."
            light
            align="left"
          />
          <ul className="why__list">
            {reasons.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal">
                <Icon size={30} strokeWidth={1.5} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="script">Let&apos;s Build Something Great Together</p>
        </div>
        <Laptop />
      </div>
    </section>
  )
}
