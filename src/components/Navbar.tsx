import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'
import type { Language } from '../i18n/translations'

const languages: Language[] = ['ru', 'en']

export default function Navbar() {
  const { language, setLanguage, t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const renderLanguageButton = (code: Language) => {
    const isActive = language === code

    return (
      <button
        key={code}
        type="button"
        onClick={() => setLanguage(code)}
        aria-pressed={isActive}
        style={{
          border: '1px solid var(--color-border)',
          cursor: 'pointer',
          padding: '6px 10px',
          borderRadius: '8px',
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          color: isActive ? 'var(--color-primary)' : 'var(--color-muted)',
          background: isActive ? 'var(--color-primary-dim)' : 'transparent',
          transition: 'all 0.2s ease',
        }}
      >
        {code}
      </button>
    )
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(8, 12, 24, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em' }}
          >
            <span className="gradient-text">{t.profile.firstName}</span>
            <span style={{ color: 'var(--color-text)' }}>{t.profile.lastName}</span>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
            {t.navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    color: isActive ? 'var(--color-primary)' : 'var(--color-muted)',
                    background: isActive ? 'var(--color-primary-dim)' : 'transparent',
                    transition: 'all 0.2s ease',
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--color-text)'
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)'
                  }}
                >
                  {link.label}
                </button>
              )
            })}
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: '6px' }}
              aria-label={t.navbar.languageLabel}
            >
              {languages.map(renderLanguageButton)}
            </div>
            <button
              className="btn-primary"
              style={{ marginLeft: '8px', padding: '9px 22px', fontSize: '0.875rem' }}
              onClick={() => handleNavClick('#contact')}
            >
              {t.navbar.hireMe}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text)',
              display: 'none',
              padding: '8px',
            }}
            className="mobile-menu-btn"
            aria-label={t.navbar.toggleMenuAria}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(8, 12, 24, 0.97)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--color-border)',
            padding: '16px 24px 24px',
          }}
        >
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            {languages.map(renderLanguageButton)}
          </div>
          {t.navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '14px 0',
                fontFamily: 'var(--font-heading)',
                fontWeight: 500,
                fontSize: '1.1rem',
                color: activeSection === link.href.slice(1) ? 'var(--color-primary)' : 'var(--color-text)',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            className="btn-primary"
            style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}
            onClick={() => handleNavClick('#contact')}
          >
            {t.navbar.hireMe}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
