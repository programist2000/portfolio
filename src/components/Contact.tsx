import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
]

export default function Contact() {
  const { t } = useI18n()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const contactInfo = [
    { icon: Mail, label: t.contact.infoLabels.email, value: t.contact.infoValues.email, href: `mailto:${t.contact.infoValues.email}` },
    { icon: MapPin, label: t.contact.infoLabels.location, value: t.contact.infoValues.location, href: null },
  ]

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    padding: '14px 16px',
    background: 'rgba(8, 12, 24, 0.6)',
    border: `1px solid ${focused === field ? 'var(--color-primary)' : 'var(--color-border)'}`,
    borderRadius: '12px',
    color: 'var(--color-text)',
    fontFamily: 'var(--font-body)',
    fontWeight: 300,
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxShadow: focused === field ? '0 0 0 3px rgba(100, 224, 240, 0.08)' : 'none',
  })

  return (
    <section id="contact" style={{ padding: '120px 24px', background: 'rgba(15, 22, 41, 0.4)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '2px', background: 'var(--color-primary)' }} />
          <span style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {t.contact.section}
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '16px' }}>
          <h2 className="section-heading">
            {t.contact.headingStart}{' '}
            <span className="gradient-text">{t.contact.headingAccent}</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, color: 'var(--color-muted)', maxWidth: '380px', lineHeight: 1.7, fontSize: '1rem' }}>
            {t.contact.intro}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '48px', alignItems: 'start' }} className="contact-grid">
          {/* Form */}
          <div className="glass-card" style={{ padding: '40px' }}>
            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', gap: '16px', textAlign: 'center' }}>
                <CheckCircle size={48} color="var(--color-primary)" />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.4rem', color: 'var(--color-text)' }}>
                  {t.contact.successTitle}
                </h3>
                <p style={{ color: 'var(--color-muted)', fontWeight: 300 }}>
                  {t.contact.successText}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.82rem', color: 'var(--color-muted)', marginBottom: '8px', letterSpacing: '0.03em' }}>
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('name')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.82rem', color: 'var(--color-muted)', marginBottom: '8px', letterSpacing: '0.03em' }}>
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('email')}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.82rem', color: 'var(--color-muted)', marginBottom: '8px', letterSpacing: '0.03em' }}>
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    required
                    placeholder={t.contact.messagePlaceholder}
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '140px' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '13px 32px' }}>
                  {t.contact.sendMessage}
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Contact info */}
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="glass-card"
                style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--color-primary-dim)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.78rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    {label}
                  </div>
                  {href ? (
                    <a href={href} style={{ color: 'var(--color-text)', fontWeight: 400, fontSize: '0.95rem', fontFamily: 'var(--font-body)', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-primary)' }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text)' }}
                    >
                      {value}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--color-text)', fontWeight: 400, fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.82rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                {t.contact.findOnline}
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px',
                      borderRadius: '12px',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-muted)',
                      transition: 'all 0.2s ease',
                      background: 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.color = 'var(--color-primary)'
                      el.style.borderColor = 'rgba(100, 224, 240, 0.4)'
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

            {/* Response time */}
            <div
              style={{
                padding: '20px',
                borderRadius: '12px',
                background: 'var(--color-primary-dim)',
                border: '1px solid rgba(100, 224, 240, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                {t.contact.responsePrefix}{' '}
                <strong style={{ color: 'var(--color-text)' }}>{t.contact.responseHighlight}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
