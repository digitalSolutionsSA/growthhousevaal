import React, { useState, useEffect } from 'react'
import './App.css'
import logoVaal from './assets/logo_vaal.png'
import ghvImage from './assets/GHV.webp'
import fifteenYears from './assets/15years.webp'
import {
  Shield, FileText, PiggyBank, TrendingUp, Heart, Car, ScrollText,
  Menu, X, ChevronDown,
  Phone, Mail, MapPin, ArrowRight, CheckCircle
} from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Risk Planning',
    description:
      'Get certainty and clarity on your current and future financial wellbeing through comprehensive risk planning. We support you and your business with customisable benefits covering life-changing events including death, disability, loss of income and severe illness.',
  },
  {
    icon: FileText,
    title: 'Estate Planning',
    description:
      'We ensure complete peace of mind in the event of you passing away. We offer specialised estate planning to protect and safeguard your legacy, ensuring your assets are distributed according to your wishes.',
  },
  {
    icon: PiggyBank,
    title: 'Retirement Planning',
    description:
      'We help you ensure that you save enough to maintain your lifestyle in retirement. We offer a full range of retirement plans and strategies tailored to your goals and timeline.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Planning',
    description:
      'We offer a suite of products that cater for all your financial goals, whether for the creation or preservation of wealth, short or long term. We have a solution to fit every need.',
  },
  {
    icon: Heart,
    title: 'Medical Funds',
    description:
      'We provide you with a selection of medical fund options to best suit your health and financial needs at any stage of life, along with additional protection against unforeseen medical costs.',
  },
  {
    icon: Car,
    title: 'Short-term Insurance',
    description:
      'We offer comprehensive short-term insurance solutions for both commercial and personal needs — covering your business assets, vehicles, property and more with world-class service and competitive pricing.',
  },
  {
    icon: ScrollText,
    title: 'Wills',
    description:
      'A valid Will is one of the most important documents you will ever sign. We guide you through drafting a legally sound Will that clearly reflects your intentions and protects your loved ones.',
  },
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo">
          <img src={logoVaal} alt="GrowthHouse Vaal" width="180" height="48" />
        </a>
        <ul className="navbar__links">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="navbar__link">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn--outline-nav">Get Advice</a>
        <button className="navbar__hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="navbar__mobile">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="navbar__mobile-link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--orange" onClick={() => setOpen(false)}>Get Advice</a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${ghvImage})` }}>
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow">GrowthHouse Vaal Branch</p>
        <h1 className="hero__title">
          Make Your Next Financial Decision
          <span className="hero__title--accent"> Your Best</span>
        </h1>
        <p className="hero__sub">Partnering for your success — locally in the Vaal region</p>
        <div className="hero__ctas">
          <a href="#services" className="btn btn--orange">Our Services <ArrowRight size={18} /></a>
          <a href="#contact" className="btn btn--ghost">Contact Us</a>
        </div>
      </div>
      <a href="#about" className="hero__scroll"><ChevronDown size={28} /></a>
    </section>
  )
}

function About() {
  const highlights = [
    'Expert financial advice across the spectrum',
    'Tailor-made solutions for individuals & businesses',
    'Long-lasting client relationships',
    'Both online and face-to-face consultations available',
  ]

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div className="about__visual">
            <div className="about__bg-block">
              <img
                src={fifteenYears}
                alt="15 Years of Excellence"
                className="about__bg-image"
                loading="lazy"
                decoding="async"
                width="600"
                height="500"
              />
            </div>
            <div className="about__card about__card--1">
              <span className="about__stat">15+</span>
              <span className="about__stat-label">Years of Excellence</span>
            </div>
            <div className="about__card about__card--2">
              <span className="about__stat">500+</span>
              <span className="about__stat-label">Satisfied Clients</span>
            </div>
          </div>
          <div className="about__text">
            <p className="section__eyebrow">About Us</p>
            <h2 className="section__title">A Dynamic, Multi-Faceted Brokerage</h2>
            <p className="about__body">
              GrowthHouse is a dynamic, multi-faceted brokerage that offers clients expert financial advice
              and tailor-made solutions across the financial services spectrum. With a trusted brand, you can
              expect exceptional service with relevant advice and long-lasting relationships.
            </p>
            <p className="about__body">
              GrowthHouse Vaal proudly serves the Vaal region, bringing together a diverse range of financial
              skills and expertise to help you and your family make sound, informed financial decisions.
            </p>
            <ul className="about__highlights">
              {highlights.map((h) => (
                <li key={h}>
                  <CheckCircle size={18} className="about__check" />
                  {h}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn--orange mt-6">
              Speak to an Adviser <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow section__eyebrow--light">What We Do</p>
          <h2 className="section__title section__title--white">Financial Advice Includes</h2>
          <p className="section__subtitle">
            Comprehensive financial solutions tailored to your unique needs and goals.
          </p>
        </div>
        <div className="services__grid">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="service-card">
                <div className="service-card__icon"><Icon size={28} /></div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
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

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src={logoVaal} alt="GrowthHouse Vaal" className="footer__logo" loading="lazy" width="160" height="42" />
            <p className="footer__tagline">
              Partnering for your success in the Vaal region. Expert financial advice tailored to your life.
            </p>
          </div>
          <div className="footer__col">
            <p className="footer__heading">Quick Links</p>
            <ul className="footer__links">
              {navLinks.map((l) => (
                <li key={l.label}><a href={l.href} className="footer__link">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__heading">Services</p>
            <ul className="footer__links">
              {services.slice(0, 5).map((s) => (
                <li key={s.title}><a href="#services" className="footer__link">{s.title}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__heading">Contact</p>
            <ul className="footer__links">
              <li><a href="tel:+27161234567" className="footer__link">+27 16 123 4567</a></li>
              <li><a href="mailto:vaal@growthhouse.co.za" className="footer__link">vaal@growthhouse.co.za</a></li>
              <li><span className="footer__link">Vaal Region, Gauteng</span></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} GrowthHouse Vaal. All rights reserved.</p>
          <p>Part of the GrowthHouse Group | FSP Licence No. XXXXX</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}