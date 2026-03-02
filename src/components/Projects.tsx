import { ExternalLink, Github } from 'lucide-react'
import { projects, type Project } from '../data/portfolioData'
import { useI18n } from '../i18n/useI18n'

function ProjectCard({
  project,
  wide = false,
  title,
  description,
  featuredLabel,
  codeLabel,
  liveDemoLabel,
}: {
  project: Project
  wide?: boolean
  title: string
  description: string
  featuredLabel: string
  codeLabel: string
  liveDemoLabel: string
}) {
  return (
    <div
      className="glass-card"
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: wide ? 'row' : 'column',
        transition: 'all 0.3s ease',
        cursor: 'default',
        gridColumn: wide ? 'span 2' : 'span 1',
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-4px)'
        el.style.borderColor = 'rgba(100, 224, 240, 0.4)'
        el.style.boxShadow = '0 8px 40px rgba(100, 224, 240, 0.12)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(0)'
        el.style.borderColor = 'var(--color-border)'
        el.style.boxShadow = 'none'
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', flexShrink: 0, height: wide ? '100%' : '220px', width: wide ? '45%' : '100%' }} className="project-img-wrap">
        <img
          src={project.image}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: wide
              ? 'linear-gradient(to right, transparent 60%, rgba(8,12,24,0.8) 100%)'
              : 'linear-gradient(to top, rgba(8,12,24,0.7) 0%, transparent 50%)',
          }}
        />
        {project.featured && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              padding: '4px 12px',
              background: 'rgba(100, 224, 240, 0.15)',
              border: '1px solid rgba(100, 224, 240, 0.4)',
              borderRadius: '9999px',
              color: 'var(--color-primary)',
              fontSize: '0.72rem',
              fontWeight: 600,
              fontFamily: 'var(--font-heading)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {featuredLabel}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: wide ? '1.5rem' : '1.2rem',
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-muted)', flex: 1 }}>
          {description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tech-pill">{tag}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '12px', paddingTop: '8px' }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-muted)',
              fontSize: '0.85rem',
              fontWeight: 500,
              fontFamily: 'var(--font-body)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-primary)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)' }}
          >
            <Github size={15} /> {codeLabel}
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-muted)',
              fontSize: '0.85rem',
              fontWeight: 500,
              fontFamily: 'var(--font-body)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-primary)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)' }}
          >
            <ExternalLink size={15} /> {liveDemoLabel}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { t } = useI18n()
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  const getLocalizedText = (project: Project) => {
    const localized = t.projects.items[project.id as keyof typeof t.projects.items]
    if (!localized) return { title: project.title, description: project.description }
    return { title: localized.title, description: localized.description }
  }

  return (
    <section id="projects" style={{ padding: '120px 24px', background: 'rgba(15, 22, 41, 0.4)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '2px', background: 'var(--color-primary)' }} />
          <span style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {t.projects.section}
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '16px' }}>
          <h2 className="section-heading">
            {t.projects.headingStart}{' '}
            <span className="gradient-text">{t.projects.headingAccent}</span>
          </h2>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            style={{ display: 'inline-flex' }}
          >
            <Github size={16} />
            {t.projects.allProjects}
          </a>
        </div>

        {/* Bento grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
          }}
          className="projects-grid"
        >
          {featured.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              wide={true}
              {...getLocalizedText(p)}
              featuredLabel={t.projects.featured}
              codeLabel={t.projects.code}
              liveDemoLabel={t.projects.liveDemo}
            />
          ))}
          {rest.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              wide={false}
              {...getLocalizedText(p)}
              featuredLabel={t.projects.featured}
              codeLabel={t.projects.code}
              liveDemoLabel={t.projects.liveDemo}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-grid > div { grid-column: span 1 !important; flex-direction: column !important; }
          .project-img-wrap { height: 220px !important; width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
