import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle, Loader2, CheckCircle2 } from 'lucide-react'
import { EMAIL, PHONE, WHATSAPP_NUMBER, WEB3FORMS_KEY } from '../config.js'

const services = [
  'Website Development',
  'Web Application Development',
  'Mobile App Development',
  'UI/UX Design',
  'API Integration',
  'Maintenance & Support',
]

const emptyForm = { name: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const openMailApp = () => {
    const subject = encodeURIComponent(`New enquiry: ${form.service || 'General'} - ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!WEB3FORMS_KEY) {
      openMailApp()
      setStatus('success')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New enquiry: ${form.service || 'General'} - ${form.name}`,
          from_name: 'Aakar Logic Website',
          ...form,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message)
      setStatus('success')
      setForm(emptyForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        <div className="contact__info reveal">
          <span className="pill"><Mail size={18} /> Get in Touch</span>
          <h2>Have an idea? Let&apos;s give it a digital shape.</h2>
          <p className="contact__lead">
            Tell us about your project and we&apos;ll get back to you with ideas and a free quote.
          </p>
          <div className="contact__cards">
            <a className="contact-card" href={`tel:${PHONE.replace(/\s/g, '')}`}>
              <span className="contact-card__icon"><Phone size={20} /></span>
              <span><small>Call us</small>{PHONE}</span>
            </a>
            <a className="contact-card" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
              <span className="contact-card__icon contact-card__icon--wa"><MessageCircle size={20} /></span>
              <span><small>WhatsApp</small>Chat with us</span>
            </a>
            <a className="contact-card" href={`mailto:${EMAIL}`}>
              <span className="contact-card__icon"><Mail size={20} /></span>
              <span><small>Email</small>{EMAIL}</span>
            </a>
            <div className="contact-card">
              <span className="contact-card__icon"><MapPin size={20} /></span>
              <span><small>Location</small>Mumbai, Maharashtra</span>
            </div>
          </div>

          <div className="next-steps">
            <h3>What happens next?</h3>
            <ol>
              <li><b>1</b><span>We review your message and requirements.</span></li>
              <li><b>2</b><span>We schedule a free consultation call.</span></li>
              <li><b>3</b><span>You get a clear proposal with timeline and quote.</span></li>
            </ol>
          </div>
        </div>

        <form className="contact__form reveal" onSubmit={submit}>
          <h3>Send us a message</h3>
          <label>
            Your Name
            <input name="name" value={form.name} onChange={update} required placeholder="Full name" />
          </label>
          <div className="form-row">
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={update} required placeholder="you@company.com" />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" value={form.phone} onChange={update} placeholder="+91" />
            </label>
          </div>
          <label>
            Service
            <select name="service" value={form.service} onChange={update}>
              <option value="">Select a service</option>
              {services.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows="4" value={form.message} onChange={update} required placeholder="Tell us about your project..." />
          </label>
          <button type="submit" className="btn btn--primary btn--block" disabled={status === 'sending'}>
            {status === 'sending' ? (
              <>Sending <Loader2 size={17} className="spin" /></>
            ) : (
              <>Send Message <Send size={17} /></>
            )}
          </button>
          {status === 'success' && (
            <p className="form-note form-note--ok">
              <CheckCircle2 size={16} />
              {WEB3FORMS_KEY ? "Thank you! We'll get back to you soon." : 'Your email app should open to send the message.'}
            </p>
          )}
          {status === 'error' && (
            <p className="form-note form-note--err">
              Something went wrong. Please WhatsApp or call us at {PHONE}.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
