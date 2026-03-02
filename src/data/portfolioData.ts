export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools & Cloud';
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Dashboard Platform',
    description:
      'A real-time analytics platform powered by OpenAI APIs. Features live data visualization, custom report generation, and team collaboration tools.',
    image: 'https://picsum.photos/seed/dashboard/800/500',
    tags: ['React', 'TypeScript', 'OpenAI', 'Recharts', 'Node.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: '2',
    title: 'E-Commerce Storefront',
    description:
      'High-performance e-commerce solution with SSR, dynamic product filtering, cart management, and Stripe payment integration.',
    image: 'https://picsum.photos/seed/ecommerce/800/500',
    tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: '3',
    title: 'DevOps Monitoring Tool',
    description:
      'Infrastructure monitoring dashboard with real-time metrics, alerting system, and automated incident reports via Slack webhooks.',
    image: 'https://picsum.photos/seed/devops/800/500',
    tags: ['Vue.js', 'Python', 'Docker', 'Prometheus', 'Grafana'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: '4',
    title: 'Real-Time Chat App',
    description:
      'WebSocket-powered chat application with rooms, file sharing, end-to-end message encryption, and presence indicators.',
    image: 'https://picsum.photos/seed/chat/800/500',
    tags: ['React', 'Socket.io', 'Redis', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
];

export const skills: Skill[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Framer Motion', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'MongoDB', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'Redis', category: 'Backend' },
  { name: 'Docker', category: 'Tools & Cloud' },
  { name: 'AWS', category: 'Tools & Cloud' },
  { name: 'Git', category: 'Tools & Cloud' },
  { name: 'Figma', category: 'Tools & Cloud' },
  { name: 'Kubernetes', category: 'Tools & Cloud' },
  { name: 'CI/CD', category: 'Tools & Cloud' },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
];
