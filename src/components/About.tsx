import { Download, MapPin, Coffee } from 'lucide-react'

const highlights = [
  'Building scalable web apps since 2019',
  'Obsessed with clean code & great UX',
  'Open-source contributor & tech blogger',
  'Remote-friendly, timezone-flexible',
]

const techCategories = [
  { label: 'React / Next.js', color: 'primary' },
  { label: 'TypeScript', color: 'primary' },
  { label: 'Node.js', color: 'accent' },
  { label: 'Python', color: 'accent' },
  { label: 'PostgreSQL', color: 'primary' },
  { label: 'Docker', color: 'accent' },
  { label: 'AWS', color: 'primary' },
  { label: 'Tailwind CSS', color: 'accent' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 24px', position: 'relative' }}>
      {/* Section label */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '2px', background: 'var(--color-primary)' }} />
          <span style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            About Me
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '80px', alignItems: 'center' }} className="about-grid">
          {/* Left: Text */}
          <div>
            <h2 className="section-heading" style={{ marginBottom: '24px', color: 'var(--color-text)' }}>
              Crafting digital experiences{' '}
              <span className="gradient-text">that matter</span>
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-muted)', marginBottom: '20px' }}>
              I'm a full-stack developer based in Berlin with a passion for turning complex problems
              into elegant, user-friendly solutions. I specialize in React and TypeScript on the frontend
              and Node.js / Python on the backend.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-muted)', marginBottom: '36px' }}>
              Whether it's a high-scale SaaS platform or a pixel-perfect landing page, I bring the same
              level of care and craftsmanship to every project.
            </p>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
              {highlights.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--color-muted)' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Tech pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
              {techCategories.map(({ label, color }) => (
                <span
                  key={label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    fontFamily: 'var(--font-heading)',
                    background: color === 'primary' ? 'var(--color-primary-dim)' : 'var(--color-accent-dim)',
                    color: color === 'primary' ? 'var(--color-primary)' : 'var(--color-accent)',
                    border: `1px solid ${color === 'primary' ? 'rgba(100,224,240,0.2)' : 'rgba(167,139,250,0.2)'}`,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            <a
              href="/resume.pdf"
              download
              className="btn-outline"
              style={{ display: 'inline-flex' }}
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Right: Image card */}
          <div style={{ position: 'relative' }}>
            {/* Glow behind card */}
            <div
              style={{
                position: 'absolute',
                inset: '-20px',
                background: 'radial-gradient(circle at 50% 50%, rgba(100, 224, 240, 0.1) 0%, transparent 70%)',
                borderRadius: '24px',
                pointerEvents: 'none',
              }}
            />
            <div
              className="glass-card glow-primary"
              style={{ overflow: 'hidden', position: 'relative' }}
            >
              <img
              src="https://picsum.photos/seed/developer/600/420"
                alt="Developer portrait"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              {/* Overlay info */}
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-muted)', fontSize: '0.85rem' }}>
                    <MapPin size={14} color="var(--color-primary)" />
                    <span>Berlin, Germany</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-muted)', fontSize: '0.85rem' }}>
                    <Coffee size={14} color="var(--color-accent)" />
                    <span>Coffee-powered</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="glass-card"
              style={{
                position: 'absolute',
                bottom: '80px',
                right: '-24px',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-text)' }}>
                Open to Work
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .about-grid > div:last-child { max-width: 480px; margin: 0 auto; width: 100%; }
        }
      `}</style>
    </section>
  )
}
