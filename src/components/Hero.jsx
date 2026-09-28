import { ArrowRight, Sparkles, CheckCircle2, Zap, Smartphone, ShieldCheck } from 'lucide-react'

function Mountain() {
  return (
    <svg className="hero__mountain" viewBox="0 0 460 220" aria-hidden="true">
      <defs>
        <linearGradient id="mt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8a9ab8" />
          <stop offset="1" stopColor="#c9d3e6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 200 120 120 170 140 250 20 300 80 330 60 460 180 380 150 330 110 300 130 250 70 200 150 150 150 110 150Z" fill="url(#mt)" />
      <path d="M250 20 270 70 255 60 240 95 230 60Z" fill="#fff" opacity=".8" />
    </svg>
  )
}

// A small illustrated "website in a browser" that shows what we build.
function BrowserMockup() {
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock__bar">
        <i /><i /><i />
        <span className="mock__url">yourbusiness.com</span>
      </div>
      <div className="mock__body">
        <div className="mock__nav">
          <span className="mock__logo" />
          <span /><span /><span />
          <span className="mock__btn" />
        </div>
        <div className="mock__hero">
          <div>
            <span className="mock__line mock__line--lg" />
            <span className="mock__line mock__line--lg mock__line--accent" />
            <span className="mock__line" />
            <span className="mock__line mock__line--sm" />
            <span className="mock__cta" />
          </div>
          <div className="mock__chart">
            {[40, 65, 50, 80, 60, 95].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="mock__cards">
          <span /><span /><span />
        </div>
      </div>
    </div>
  )
}

const trust = ['Free consultation', 'On-time delivery', 'Ongoing support']

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="blob blob--1" />
        <span className="blob blob--2" />
        <span className="hero__grid-lines" />
      </div>

      <div className="container hero__grid">
        <div className="hero__content reveal">
          <span className="badge">
            <span className="badge__dot" />
            <Sparkles size={15} /> Now taking new projects
          </span>
          <h1>
            Website &amp; Software Development Solutions
            <span> for Your Business</span>
          </h1>
          <p className="hero__lead">
            At Aakar Logic, we turn your ideas into powerful digital experiences. From stunning
            websites to scalable applications, we build solutions that help your business grow.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Start Your Project <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn--ghost">Our Services</a>
          </div>
          <ul className="hero__trust">
            {trust.map((t) => (
              <li key={t}><CheckCircle2 size={18} /> {t}</li>
            ))}
          </ul>
        </div>

        <div className="hero__visual reveal">
          <Mountain />
          <BrowserMockup />
          <div className="float-chip float-chip--1"><Zap size={16} /> Fast &amp; SEO-ready</div>
          <div className="float-chip float-chip--2"><Smartphone size={16} /> Mobile-first</div>
          <div className="float-chip float-chip--3"><ShieldCheck size={16} /> Secure &amp; scalable</div>
          <div className="hero__tagcard">
            <p className="hero__tagline">Your Vision. Our Logic. <strong>Better Digital Tomorrow.</strong></p>
            <p className="hero__marathi" lang="mr">विचारांना डिजिटल आकार</p>
          </div>
        </div>
      </div>
    </section>
  )
}
