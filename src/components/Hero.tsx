import { ArrowDown, Github, Linkedin, Twitter, Code2, Layers, Zap } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'

const stats = [
  { icon: Code2 },
  { icon: Layers },
  { icon: Zap },
]

export default function Hero() {
  const { t } = useI18n()

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
      className="dot-grid"
    >
      {/* Aurora blobs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div
          className="animate-aurora-1"
          style={{
            position: 'absolute',
            top: '10%',
            left: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(100, 224, 240, 0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="animate-aurora-2"
          style={{
            position: 'absolute',
            top: '40%',
            right: '-5%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="animate-aurora-3"
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '40%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(100, 224, 240, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(50px)',
          }}
        />
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '120px 24px 80px',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', alignItems: 'center' }} className="hero-grid">
          {/* Left: text content */}
          <div>
            {/* Available badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                border: '1px solid rgba(100, 224, 240, 0.3)',
                background: 'rgba(100, 224, 240, 0.08)',
                marginBottom: '32px',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px #22c55e' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 500 }}>
                {t.hero.availability}
              </span>
            </div>

            {/* Name + role */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                marginBottom: '8px',
                color: 'var(--color-text)',
              }}
            >
              {t.hero.headingPrefix}{' '}
              <span className="gradient-text">{t.profile.firstName} {t.profile.lastName}</span>
            </h1>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
                color: 'var(--color-muted)',
                marginBottom: '24px',
                letterSpacing: '-0.02em',
              }}
            >
              {t.hero.role}
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                lineHeight: 1.75,
                color: 'var(--color-muted)',
                maxWidth: '560px',
                marginBottom: '40px',
              }}
            >
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
              <button className="btn-primary" onClick={scrollToProjects}>
                {t.hero.ctaWork}
                <ArrowDown size={16} />
              </button>
              <button className="btn-outline" onClick={scrollToContact}>
                {t.hero.ctaContact}
              </button>
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <span style={{ color: 'var(--color-muted)', fontSize: '0.8rem', fontWeight: 500 }}>{t.hero.followMe}</span>
              <div style={{ width: '32px', height: '1px', background: 'var(--color-border)' }} />
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-muted)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = 'var(--color-primary)'
                    el.style.borderColor = 'var(--color-primary)'
                    el.style.background = 'var(--color-primary-dim)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = 'var(--color-muted)'
                    el.style.borderColor = 'var(--color-border)'
                    el.style.background = 'transparent'
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: floating stat cards */}
          <div className="hero-stats" style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '220px' }}>
            {stats.map(({ icon: Icon }, i) => (
              <div
                key={i}
                className="glass-card animate-float"
                style={{
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  animationDelay: `${i * 0.6}s`,
                  animationDuration: `${3.5 + i * 0.5}s`,
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: i % 2 === 0 ? 'var(--color-primary-dim)' : 'var(--color-accent-dim)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-accent)',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--color-text)', lineHeight: 1 }}>
                    {t.hero.stats[i].value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-muted)', marginTop: '4px' }}>
                    {t.hero.stats[i].label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--color-muted)',
          fontSize: '0.75rem',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
        }}
        onClick={scrollToProjects}
      >
        <span>{t.hero.scrollDown}</span>
        <ArrowDown size={16} style={{ animation: 'float 2s ease-in-out infinite' }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-stats { flex-direction: row !important; flex-wrap: wrap; min-width: unset !important; }
          .hero-stats > div { flex: 1; min-width: 160px; }
        }
      `}</style>
    </section>
  )
}
