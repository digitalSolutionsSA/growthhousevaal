import React, { useState } from 'react'
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react'

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
                <p className="contact__info-label">Phone</p>
                <a href="tel:+27161234567" className="contact__info-value">+27 16 123 4567</a>
              </div>
            </div>
            <div className="contact__info-block">
              <div className="contact__info-icon"><Mail size={22} /></div>
              <div>
                <p className="contact__info-label">Email</p>
                <a href="mailto:vaal@growthhouse.co.za" className="contact__info-value">vaal@growthhouse.co.za</a>
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
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form__row">
                  <div className="form__group">
                    <label className="form__label">Full Name</label>
                    <input className="form__input" type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form__group">
                    <label className="form__label">Email Address</label>
                    <input className="form__input" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form__group">
                  <label className="form__label">Phone Number</label>
                  <input className="form__input" type="tel" name="phone" placeholder="+27 ..." value={form.phone} onChange={handleChange} />
                </div>
                <div className="form__group">
                  <label className="form__label">How can we help you?</label>
                  <textarea className="form__input form__textarea" name="message" placeholder="Tell us about your financial goals or enquiry..." value={form.message} onChange={handleChange} rows={5} required />
                </div>
                <button type="submit" className="btn btn--orange btn--full">
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}