export type Language = "en" | "ru";

export const languageStorageKey = "portfolio-language";

export const translations = {
  en: {
    profile: {
      firstName: "Alex",
      lastName: "Johnson",
    },
    navLinks: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    navbar: {
      hireMe: "Hire Me",
      toggleMenuAria: "Toggle menu",
      languageLabel: "Language",
    },
    hero: {
      availability: "Available for new projects",
      headingPrefix: "Hi, I'm",
      role: "Full Stack Developer & UI Engineer",
      description:
        "I build high-performance web applications with beautiful interfaces and solid architecture. Specializing in React, TypeScript, and modern full-stack solutions.",
      ctaWork: "View My Work",
      ctaContact: "Get In Touch",
      followMe: "Follow me",
      scrollDown: "Scroll down",
      stats: [
        { value: "50+", label: "Projects Built" },
        { value: "5+", label: "Years Experience" },
        { value: "20+", label: "Happy Clients" },
      ],
    },
    about: {
      section: "About Me",
      headingStart: "Crafting digital experiences",
      headingAccent: "that matter",
      paragraph1:
        "I'm a full-stack developer with a passion for turning complex problems into elegant, user-friendly solutions. I specialize in React and TypeScript on the frontend and Node.js / Python on the backend.",
      paragraph2:
        "Whether it's a high-scale SaaS platform or a pixel-perfect landing page, I bring the same level of care and craftsmanship to every project.",
      highlights: [
        "Building scalable web apps since 2019",
        "Obsessed with clean code and great UX",
        "Open-source contributor and tech blogger",
        "Remote-friendly, timezone-flexible",
      ],
      downloadResume: "Download Resume",
      imageAlt: "Developer portrait",
      location: "Chelyabinsk, Russia",
      coffeePowered: "Coffee-powered",
      openToWork: "Open to Work",
    },
    projects: {
      section: "Projects",
      headingStart: "Things I've",
      headingAccent: "built",
      allProjects: "All Projects",
      code: "Code",
      liveDemo: "Live Demo",
      featured: "Featured",
      items: {
        "1": {
          title: "AI Dashboard Platform",
          description:
            "A real-time analytics platform powered by OpenAI APIs. Features live data visualization, custom report generation, and team collaboration tools.",
        },
        "2": {
          title: "E-Commerce Storefront",
          description:
            "High-performance e-commerce solution with SSR, dynamic product filtering, cart management, and Stripe payment integration.",
        },
        "3": {
          title: "DevOps Monitoring Tool",
          description:
            "Infrastructure monitoring dashboard with real-time metrics, alerting system, and automated incident reports via Slack webhooks.",
        },
        "4": {
          title: "Real-Time Chat App",
          description:
            "WebSocket-powered chat application with rooms, file sharing, end-to-end message encryption, and presence indicators.",
        },
      },
    },
    skills: {
      section: "Skills",
      headingStart: "My tech",
      headingAccent: "toolbox",
      description:
        "Technologies and tools I use to bring ideas to life - from frontend interfaces to backend infrastructure.",
      categories: {
        Frontend: "Frontend",
        Backend: "Backend",
        "Tools & Cloud": "Tools & Cloud",
      },
    },
    contact: {
      section: "Contact",
      headingStart: "Let's work",
      headingAccent: "together",
      intro:
        "Have a project in mind or just want to say hi? I'm always open to discussing new opportunities.",
      successTitle: "Message sent!",
      successText:
        "Thanks for reaching out. I'll get back to you within 24 hours.",
      nameLabel: "Your Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "john@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      sendMessage: "Send Message",
      infoLabels: {
        email: "Email",
        location: "Location",
      },
      infoValues: {
        email: "razdv34@example.com",
        location: "Chelyabinsk, Russia",
      },
      findOnline: "Find me online",
      responsePrefix: "Usually responds within",
      responseHighlight: "24 hours",
    },
    footer: {
      builtWith: "Built with",
      using: "using React and Tailwind CSS",
    },
  },
  ru: {
    profile: {
      firstName: "RAZDVA",
      lastName: "34",
    },
    navLinks: [
      { label: "Обо мне", href: "#about" },
      { label: "Проекты", href: "#projects" },
      { label: "Навыки", href: "#skills" },
      { label: "Контакты", href: "#contact" },
    ],
    navbar: {
      hireMe: "Связаться",
      toggleMenuAria: "Открыть меню",
      languageLabel: "Язык",
    },
    hero: {
      availability: "Открыт к новым проектам",
      headingPrefix: "Привет, я",
      role: "Full Stack разработчик и UI-инженер",
      description:
        "Создаю быстрые веб-приложения с красивыми интерфейсами и надежной архитектурой. Специализируюсь на React, TypeScript и современных full-stack решениях.",
      ctaWork: "Смотреть работы",
      ctaContact: "Связаться",
      followMe: "Подписывайся",
      scrollDown: "Листай вниз",
      stats: [
        { value: "50+", label: "Сделанных проектов" },
        { value: "5+", label: "Лет опыта" },
        { value: "20+", label: "Довольных клиентов" },
      ],
    },
    about: {
      section: "Обо мне",
      headingStart: "Создаю цифровые решения",
      headingAccent: "с реальной пользой",
      paragraph1:
        "Я full-stack разработчик. Люблю превращать сложные задачи в понятные и удобные продукты. На фронтенде работаю с React и TypeScript, на бэкенде - с Node.js и Python.",
      paragraph2:
        "Будь то масштабная SaaS-платформа или аккуратный лендинг, в каждом проекте я держу высокий уровень качества и внимания к деталям.",
      highlights: [
        "Делаю масштабируемые веб-приложения с 2019 года",
        "Фокус на чистом коде и качественном UX",
        "Контрибьютор open-source и тех-блогер",
        "Комфортно работаю удаленно в разных таймзонах",
      ],
      downloadResume: "Скачать резюме",
      imageAlt: "Портрет разработчика",
      location: "Челябинск, Россия",
      coffeePowered: "Работаю на кофе",
      openToWork: "Открыт к работе",
    },
    projects: {
      section: "Проекты",
      headingStart: "То, что я",
      headingAccent: "собрал",
      allProjects: "Все проекты",
      code: "Код",
      liveDemo: "Демо",
      featured: "Рекомендованный",
      items: {
        "1": {
          title: "Платформа аналитики с AI",
          description:
            "Платформа аналитики в реальном времени на базе OpenAI API. Включает визуализацию данных, генерацию отчетов и инструменты командной работы.",
        },
        "2": {
          title: "E-Commerce витрина",
          description:
            "Производительное e-commerce решение с SSR, динамической фильтрацией каталога, корзиной и интеграцией Stripe.",
        },
        "3": {
          title: "DevOps мониторинг",
          description:
            "Панель мониторинга инфраструктуры с метриками в реальном времени, алертами и авто-отчетами об инцидентах в Slack.",
        },
        "4": {
          title: "Чат в реальном времени",
          description:
            "Чат-приложение на WebSocket с комнатами, отправкой файлов, end-to-end шифрованием сообщений и статусами присутствия.",
        },
      },
    },
    skills: {
      section: "Навыки",
      headingStart: "Мой технический",
      headingAccent: "стек",
      description:
        "Технологии и инструменты, с которыми я превращаю идеи в продукт - от интерфейсов до серверной инфраструктуры.",
      categories: {
        Frontend: "Фронтенд",
        Backend: "Бэкенд",
        "Tools & Cloud": "Инструменты и облако",
      },
    },
    contact: {
      section: "Контакты",
      headingStart: "Давай работать",
      headingAccent: "вместе",
      intro:
        "Есть идея проекта или просто хочешь написать? Всегда открыт к новым задачам и сотрудничеству.",
      successTitle: "Сообщение отправлено!",
      successText: "Спасибо за сообщение. Отвечу в течение 24 часов.",
      nameLabel: "Ваше имя",
      namePlaceholder: "Иван Иванов",
      emailLabel: "Email",
      emailPlaceholder: "razdva34@example.com",
      messageLabel: "Сообщение",
      messagePlaceholder: "Расскажите о вашем проекте...",
      sendMessage: "Отправить",
      infoLabels: {
        email: "Email",
        location: "Локация",
      },
      infoValues: {
        email: "razdva34@example.com",
        location: "Челябинск, Россия",
      },
      findOnline: "Я в сети",
      responsePrefix: "Обычно отвечаю в течение",
      responseHighlight: "24 часов",
    },
    footer: {
      builtWith: "Сделано с",
      using: "на React и Tailwind CSS",
    },
  },
} as const;

export type Translations = (typeof translations)[Language];
