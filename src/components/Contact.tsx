import React, { useState } from 'react'
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Get in Touch</p>
          <h2 className="section__title">Contact GrowthHouse Vaal</h2>
          <p className="section__subtitle section__subtitle--dark">
            Ready to make your next financial decision your best? Reach out to our Vaal team today.
          </p>
        </div>
        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__info-block">
              <div className="contact__info-icon"><Phone size={22} /></div>
              <div>
                <p className="contact__info-label">Office</p>
                <a href="tel:+27160040168" className="contact__info-value">016 004 0168</a>
              </div>
            </div>
            <div className="contact__info-block">
              <div className="contact__info-icon"><MessageCircle size={22} /></div>
              <div>
                <p className="contact__info-label">WhatsApp</p>
                <a
                  href="https://wa.me/27646864513"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__info-value"
                >
                  064 686 4513
                </a>
              </div>
            </div>
            <div className="contact__info-block">
              <div className="contact__info-icon"><Mail size={22} /></div>
              <div>
                <p className="contact__info-label">Email</p>
                <a href="mailto:armandt.debruyn@growthhouse.co.za" className="contact__info-value">
                  armandt.debruyn@growthhouse.co.za
                </a>
              </div>
            </div>
            <div className="contact__info-block">
              <div className="contact__info-icon"><MapPin size={22} /></div>
              <div>
                <p className="contact__info-label">Location</p>
                <p className="contact__info-value">Vaal Region, Gauteng, South Africa</p>
              </div>
            </div>
            <div className="contact__divider" />
            <p className="contact__hours-title">Office Hours</p>
            <p className="contact__hours">Monday – Friday: 08:00 – 17:00</p>
            <p className="contact__hours">Saturday: By appointment</p>
          </div>

          <div className="contact__form-wrap">
            {sent ? (
              <div className="contact__success">
                <CheckCircle size={48} className="contact__success-icon" />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. One of our advisers will contact you shortly.</p>
                <a
                  href="https://wa.me/27646864513"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    background: '#25D366',
                    color: '#fff',
                    borderRadius: '10px',
                    padding: '13px 20px',
                    fontSize: '15px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    marginTop: '8px',
                    boxShadow: '0 4px 16px rgba(37,211,102,0.4)',
                  }}
                >
                  <WhatsAppIcon />
                  Also chat on WhatsApp
                </a>
              </div>
            ) : (
              <>
                {/* Primary WhatsApp CTA */}
                <a
                  href="https://wa.me/27646864513"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    background: '#25D366',
                    color: '#fff',
                    borderRadius: '12px',
                    padding: '16px 24px',
                    fontSize: '17px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    width: '100%',
                    boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
                    letterSpacing: '0.01em',
                    marginBottom: '4px',
                    animation: 'wa-pulse 1.8s ease infinite',
                  }}
                >
                  <WhatsAppIcon />
                  Chat with us on WhatsApp
                </a>
                <style>{`
                  @keyframes wa-pulse {
                    0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.45); }
                    50%       { box-shadow: 0 4px 28px rgba(37,211,102,0.75), 0 0 0 6px rgba(37,211,102,0.15); }
                  }
                `}</style>

                <div className="contact__or-divider">
                  <span>or send a message</span>
                </div>

                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="form__row">
                    <div className="form__group">
                      <label className="form__label">Full Name</label>
                      <input
                        className="form__input"
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <label className="form__label">Email Address</label>
                      <input
                        className="form__input"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form__group">
                    <label className="form__label">Phone Number</label>
                    <input
                      className="form__input"
                      type="tel"
                      name="phone"
                      placeholder="+27 ..."
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form__group">
                    <label className="form__label">How can we help you?</label>
                    <textarea
                      className="form__input form__textarea"
                      name="message"
                      placeholder="Tell us about your financial goals or enquiry..."
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn--orange btn--full">
                    Send Message <ArrowRight size={18} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}