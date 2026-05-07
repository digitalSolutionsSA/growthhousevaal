import logoVaal from '../assets/logo-white.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Risk Planning',
  'Estate Planning',
  'Retirement Planning',
  'Investment Planning',
  'Medical Funds',
]

export default function Footer() {
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
              {services.map((s) => (
                <li key={s}><a href="#services" className="footer__link">{s}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__heading">Contact</p>
            <ul className="footer__links">
              <li><a href="tel:+27160040168" className="footer__link">016 004 0168</a></li>
              <li><a href="https://wa.me/27646864513" target="_blank" rel="noopener noreferrer" className="footer__link">WhatsApp: 064 686 4513</a></li>
              <li><a href="mailto:armandt.debruyn@growthhouse.co.za" className="footer__link">armandt.debruyn@growthhouse.co.za</a></li>
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