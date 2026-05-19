import ghvImage from '../assets/GHV.webp'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
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