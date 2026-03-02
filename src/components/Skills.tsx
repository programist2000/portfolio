import {
  Code2, Server, Wrench, Globe, Database, Container,
  Cloud, GitBranch, Figma, Zap, Terminal, LayoutDashboard,
  Cpu, Box, Layers
} from 'lucide-react'
import { skills } from '../data/portfolioData'

const skillIcons: Record<string, React.FC<{ size?: number; color?: string }>> = {
  'React': Code2,
  'TypeScript': Cpu,
  'Next.js': Globe,
  'Vue.js': Layers,
  'Tailwind CSS': LayoutDashboard,
  'Framer Motion': Zap,
  'Node.js': Server,
  'Python': Terminal,
  'PostgreSQL': Database,
  'MongoDB': Database,
  'GraphQL': Box,
  'Redis': Server,
  'Docker': Container,
  'AWS': Cloud,
  'Git': GitBranch,
  'Figma': Figma,
  'Kubernetes': Wrench,
  'CI/CD': Wrench,
}

const categoryColors: Record<string, { bg: string; color: string; border: string; glow: string }> = {
  'Frontend': {
    bg: 'var(--color-primary-dim)',
    color: 'var(--color-primary)',
    border: 'rgba(100, 224, 240, 0.2)',
    glow: 'rgba(100, 224, 240, 0.1)',
  },
  'Backend': {
    bg: 'var(--color-accent-dim)',
    color: 'var(--color-accent)',
    border: 'rgba(167, 139, 250, 0.2)',
    glow: 'rgba(167, 139, 250, 0.1)',
  },
  'Tools & Cloud': {
    bg: 'rgba(34, 197, 94, 0.08)',
    color: '#4ade80',
    border: 'rgba(34, 197, 94, 0.2)',
    glow: 'rgba(34, 197, 94, 0.08)',
  },
}

const categories = ['Frontend', 'Backend', 'Tools & Cloud'] as const

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '2px', background: 'var(--color-primary)' }} />
          <span style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Skills
          </span>
        </div>
        <h2 className="section-heading" style={{ marginBottom: '16px' }}>
          My tech{' '}
          <span className="gradient-text">toolbox</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, color: 'var(--color-muted)', fontSize: '1.05rem', maxWidth: '520px', marginBottom: '64px', lineHeight: 1.7 }}>
          Technologies and tools I use to bring ideas to life — from frontend interfaces to backend infrastructure.
        </p>

        {/* Category sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {categories.map((category) => {
            const catSkills = skills.filter((s) => s.category === category)
            const colors = categoryColors[category]
            return (
              <div key={category}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <span
                    style={{
                      padding: '4px 14px',
                      borderRadius: '9999px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-heading)',
                      background: colors.bg,
                      color: colors.color,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    {category}
                  </span>
                  <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' }}>
                  {catSkills.map(({ name }) => {
                    const Icon = skillIcons[name] || Code2
                    return (
                      <div
                        key={name}
                        className="glass-card"
                        style={{
                          padding: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '12px',
                          textAlign: 'center',
                          transition: 'all 0.25s ease',
                          cursor: 'default',
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement
                          el.style.transform = 'translateY(-4px)'
                          el.style.borderColor = colors.border
                          el.style.boxShadow = `0 8px 24px ${colors.glow}`
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement
                          el.style.transform = 'translateY(0)'
                          el.style.borderColor = 'var(--color-border)'
                          el.style.boxShadow = 'none'
                        }}
                      >
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '14px',
                            background: colors.bg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: colors.color,
                          }}
                        >
                          <Icon size={22} />
                        </div>
                        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text)' }}>
                          {name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
