import { useState } from 'react'
import { Plus, MessageCircle, Phone, HelpCircle, Layers, IndianRupee, Cpu, LifeBuoy } from 'lucide-react'
import { PHONE, WHATSAPP_NUMBER } from '../config.js'

const categories = [
  {
    id: 'general',
    label: 'General',
    icon: Layers,
    items: [
      {
        q: 'What services does Aakar Logic offer?',
        a: 'We build websites, custom web applications, Android & iOS mobile apps, UI/UX designs and API integrations — and we maintain and support them after launch.',
      },
      {
        q: 'Do you work only with clients in Mumbai?',
        a: 'No. We are based in Mumbai but work online with clients anywhere, using calls, WhatsApp and video meetings to keep you updated.',
      },
      {
        q: 'Will my website work on mobile phones?',
        a: 'Yes. Every website we build is fully responsive and works smoothly on mobiles, tablets and desktops.',
      },
      {
        q: 'Will my website show up on Google?',
        a: 'We build every site with SEO basics — fast loading, proper titles and descriptions, a sitemap and Google Search Console setup — so it is ready to be found.',
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing & Time',
    icon: IndianRupee,
    items: [
      {
        q: 'How much does a website cost?',
        a: 'It depends on the number of pages and features you need. Tell us about your project and we will share a clear, free quote with no hidden charges.',
      },
      {
        q: 'How long does it take to build a website?',
        a: 'A simple business website usually takes 1–3 weeks. Web and mobile applications take longer depending on features. We share a timeline before we start.',
      },
      {
        q: 'How does payment work?',
        a: 'We agree on the price and payment milestones before the project starts, so you always know what you are paying for and when.',
      },
      {
        q: 'Is the first consultation free?',
        a: 'Yes. Share your idea with us on a call or WhatsApp and we will suggest the best approach and a quote — free, with no obligation.',
      },
    ],
  },
  {
    id: 'technical',
    label: 'Technical',
    icon: Cpu,
    items: [
      {
        q: 'Which technologies do you use?',
        a: 'We choose the right tool for each project — HTML, CSS, React, Angular and Next.js for the web; Java, C#, ASP.NET, .NET Core, Node.js, Python and PHP for the backend; Flutter, Kotlin and Swift for mobile; and MySQL, SQL Server, PostgreSQL or MongoDB for data.',
      },
      {
        q: 'Do you help with domain, hosting and business email?',
        a: 'Yes. We help you choose and set up your domain name, hosting and a professional email like you@yourbusiness.com.',
      },
      {
        q: 'Who owns the website and source code?',
        a: 'You do. Once the project is complete and paid for, we hand over the source code and all account access to you.',
      },
      {
        q: 'Is my website secure?',
        a: 'We use HTTPS, secure coding practices and trusted hosting, and we keep your software up to date when you are on a support plan.',
      },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    icon: LifeBuoy,
    items: [
      {
        q: 'Can I update the website after it goes live?',
        a: 'Yes. We offer maintenance and support plans, and we can also build an admin panel so you can update content yourself.',
      },
      {
        q: 'Can I ask for changes during development?',
        a: 'Of course. We share progress regularly and include review rounds, so you can give feedback before anything goes live.',
      },
      {
        q: 'Can you improve or redesign my existing website?',
        a: 'Yes. We can redesign an old website, make it faster and mobile-friendly, or add new features to what you already have.',
      },
    ],
  },
]

export default function FAQ() {
  const [tab, setTab] = useState(categories[0].id)
  const [open, setOpen] = useState(0)
  const active = categories.find((c) => c.id === tab)

  const switchTab = (id) => {
    setTab(id)
    setOpen(0)
  }

  return (
    <section id="faq" className="faq">
      <div className="container faq__grid">
        <aside className="faq__intro reveal">
          <span className="faq__eyebrow"><HelpCircle size={16} /> FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <span className="faq__line" />
          <p>Quick answers to the questions our clients ask most before starting a project.</p>

          <div className="faq__help">
            <h3>Still have questions?</h3>
            <p>Talk to us directly — we&apos;re happy to help.</p>
            <div className="faq__help-actions">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="btn btn--ghost btn--sm">
                <Phone size={16} /> Call Us
              </a>
            </div>
          </div>
        </aside>

        <div className="faq__main reveal">
          <div className="faq__tabs" role="tablist" aria-label="FAQ categories">
            {categories.map(({ id, label, icon: Icon, items }) => (
              <button
                key={id}
                role="tab"
                aria-selected={tab === id}
                className={`faq__tab ${tab === id ? 'is-active' : ''}`}
                onClick={() => switchTab(id)}
              >
                <Icon size={16} /> {label}
                <span className="faq__count">{items.length}</span>
              </button>
            ))}
          </div>

          <div className="faq__list" role="tabpanel" key={tab}>
            {active.items.map(({ q, a }, i) => {
              const isOpen = open === i
              const qid = `faq-${tab}-q-${i}`
              const aid = `faq-${tab}-a-${i}`
              return (
                <div key={q} className={`faq__item ${isOpen ? 'is-open' : ''}`} style={{ '--delay': `${i * 60}ms` }}>
                  <button
                    id={qid}
                    className="faq__q"
                    aria-expanded={isOpen}
                    aria-controls={aid}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="faq__num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="faq__text">{q}</span>
                    <span className="faq__icon"><Plus size={18} /></span>
                  </button>
                  <div
                    id={aid}
                    className="faq__a"
                    role="region"
                    aria-labelledby={qid}
                    aria-hidden={!isOpen}
                    inert={isOpen ? undefined : ''}
                  >
                    <div><p>{a}</p></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
