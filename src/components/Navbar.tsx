import { useState, useEffect } from 'react'
import logoVaal from '../assets/logo_vaal.png'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
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