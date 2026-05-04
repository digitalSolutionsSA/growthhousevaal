import fifteenYears from '../assets/15years.png'
import { ArrowRight, CheckCircle } from 'lucide-react'

const highlights = [
  'Expert financial advice across the spectrum',
  'Tailor-made solutions for individuals & businesses',
  'Long-lasting client relationships',
  'Both online and face-to-face consultations available',
]

export default function About() {
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