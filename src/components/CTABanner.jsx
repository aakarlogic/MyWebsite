import { ArrowRight, MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../config.js'

export default function CTABanner() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__card reveal">
          <div>
            <h2>Ready to start your project?</h2>
            <p>Get a free consultation today. Tell us your idea — we&apos;ll give it a digital shape.</p>
          </div>
          <div className="cta__actions">
            <a href="#contact" className="btn btn--light">
              Get a Free Quote <ArrowRight size={18} />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline-light"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
