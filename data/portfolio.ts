export interface Project {
  id: string;
  title: string;
  category: 'opensource' | 'web' | 'bot' | 'ai';
  categoryLabel: string;
  description: string;
  fullDetails: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  telegramPostUrl?: string;
  stars?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; note: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Shoyim Obloqulov',
    callsign: 'SHOYIM.UZ',
    title: 'Senior Full-Stack Engineer & System Architect',
    bio: "PHP/Laravel, Python/Django, Next.js, Vue.js va yuqori yuklamali tarqatilgan tizimlar bo'yicha mutaxassis. Algoritmik musobaqalar ishtirokchisi va ochiq kodli paketlar (Open-Source) muallifi.",
    location: 'Samarqand, O‘zbekiston',
    status: 'SYSTEM_READY // AVAILABLE FOR SELECT CONTRACTS',
    domain: 'https://shoyim.uz',
    github: 'https://github.com/shoyim',
    telegramChannel: 'https://t.me/shoyim_portfolio',
    telegramUser: 'https://t.me/shoyim',
    email: 'contact@shoyim.uz',
    stats: [
      { label: 'Tajriba', value: '5+', unit: 'yil', detail: 'Full-stack & DevOps' },
      { label: 'Loyihalar', value: '40+', unit: 'dona', detail: 'Web, bot va servislar' },
      { label: 'Open Source', value: '15+', unit: 'repo', detail: 'Packagist & GitHub' },
      { label: 'Uptime & Barqarorlik', value: '99.9%', unit: 'SLA', detail: 'Yuqori yuklamali tizimlar' },
    ],
  },

  projects: [
    {
      id: 'laravel-uz-lang',
      title: 'laravel-uz-lang (Laravel Uzbek Language Pack)',
      category: 'opensource',
      categoryLabel: 'Open Source / Packagist',
      description: 'Laravel freymvorki uchun O‘zbek tili rasmiy lokalizatsiyasi va transliteratsiya paketi.',
      fullDetails:
        'Laravel ekotizimidagi barcha rasmiy autentifikatsiya, validatsiya, parollar va xatolik xabarlarini to‘liq o‘zbek tiliga (lotin va kirill yozuvlarida) o‘giruvchi ochiq kodli paket. O‘nlab dasturchilar tomonidan loyihalarga integratsiya qilingan.',
      technologies: ['PHP', 'Laravel', 'Composer', 'Packagist', 'PHPUnit'],
      githubUrl: 'https://github.com/shoyim/laravel-uz-lang',
      telegramPostUrl: 'https://t.me/shoyim_portfolio',
      stars: '50+ Installs',
      featured: true,
    },
    {
      id: 'django-codecompare',
      title: 'Django CodeCompare (Plagiarism & Similarity Engine)',
      category: 'opensource',
      categoryLabel: 'Open Source & Algorithms',
      description: 'Dasturlash topshiriqlari va yechimlarini kod o‘xshashligi (AST & Token similarity) bo‘yicha tahlil qiluvchi anti-plagiat servisi.',
      fullDetails:
        'Online judge va o‘quv platformalari uchun yaratilgan kod tahlili dvigateli. Kodni leksik tokenlarga ajratib, o‘zgaruvchilar nomi o‘zgarganda ham strukturaviy o‘xshashlikni 99% aniqlikda aniqlaydi.',
      technologies: ['Python', 'Django', 'AST', 'Levenshtein', 'Docker'],
      githubUrl: 'https://github.com/shoyim/django-codecompare',
      telegramPostUrl: 'https://t.me/shoyim_portfolio',
      featured: true,
    },
    {
      id: 'speednetwork',
      title: 'SpeedNetwork Diagnostic Tool',
      category: 'web',
      categoryLabel: 'Web & System Tools',
      description: 'Serverlar va mijozlar orasidagi tarmoq tezligi, ping, jitter va paket yo‘qotilishini millisekundlarda o‘lchovchi tahlil tizimi.',
      fullDetails:
        'Asinxron WebSocket protokoli orqali real vaqtda tarmoq yuklamasini tahlil qiluvchi va vizual grafiklar chizuvchi yuqori unumdorlikka ega servis.',
      technologies: ['TypeScript', 'Vue.js / Next.js', 'WebSockets', 'Go / Node'],
      githubUrl: 'https://github.com/shoyim/speednetwork',
      telegramPostUrl: 'https://t.me/shoyim_portfolio',
      featured: true,
    },
    {
      id: 'ai-test-rag',
      title: 'AI Test-RAG Engine',
      category: 'ai',
      categoryLabel: 'AI & Machine Learning',
      description: 'RAG (Retrieval-Augmented Generation) asosida o‘quv materiallari bo‘yicha avtomatik testlar va tahliliy javoblar yaratuvchi tizim.',
      fullDetails:
        'Katta hajmdagi texnik hujjatlar va darsliklarni vektor bazasiga indekslab, ular asosida xatosiz, manbaga tayangan holda imtihon testlari va yechimlar hosil qiladi.',
      technologies: ['Python', 'LangChain', 'FastAPI', 'ChromaDB', 'OpenAI'],
      githubUrl: 'https://github.com/shoyim/ai-test-rag',
      telegramPostUrl: 'https://t.me/shoyim_portfolio',
      featured: true,
    },
    {
      id: 'samcoding-judge',
      title: 'SamCoding Online Judge & LMS',
      category: 'web',
      categoryLabel: 'High-Load Platform',
      description: 'SamDU IT Markazi va olimpiadachilar uchun kodlarni qumloqda (sandbox) avtomatlashtirilgan tekshirish platformasi.',
      fullDetails:
        'Bir vaqtning o‘zida yuzlab foydalanuvchilar yuborgan C++, Python, Java yechimlarini xavfsiz izolyatsiyalangan konteynerlarda bajarib, vaqt va xotira chegaralarini nazorat qiluvchi kompleks platforma.',
      technologies: ['Laravel', 'PostgreSQL', 'Docker', 'Redis Queue', 'Vue.js'],
      liveUrl: 'https://shoyim.uz',
      telegramPostUrl: 'https://t.me/shoyim_portfolio',
      featured: true,
    },
    {
      id: 'corporate-telegram-erp',
      title: 'FinTech & ERP Telegram Bot Platformasi',
      category: 'bot',
      categoryLabel: 'Telegram Ecosystem',
      description: 'Kompaniya xodimlari, buyurtmalar oqimi va to‘lov tizimlarini (Click / Payme) integratsiya qilgan avtomatlashtirilgan bot-tizim.',
      fullDetails:
        'Ko‘p bosqichli FSM holatlarini boshqarish, asinxron Celery/Redis navbatlari, admin boshqaruv paneli va real-vaqt hisobotlarni generatsiya qiluvchi korporativ yechim.',
      technologies: ['Python', 'Aiogram', 'Django ORM', 'Redis', 'PostgreSQL'],
      telegramPostUrl: 'https://t.me/shoyim_portfolio',
      featured: false,
    },
    {
      id: 'dev-contest-helper',
      title: 'CP Contest Automation & Parser',
      category: 'opensource',
      categoryLabel: 'Open Source',
      description: 'Musobaqa dasturchilari uchun masalalarni RoboContest va Codeforces platformalaridan bir klikda yuklovchi utilita.',
      fullDetails:
        'Terminal orqali ishlovchi yengil skriptlar to‘plami: test ma’lumotlarini avtomatik yuklab, yechim fayllarini mahalliy kompyuterda kompilyatsiya qilib, testlardan o‘tkazadi.',
      technologies: ['Python', 'Bash', 'Competitive Companion API'],
      githubUrl: 'https://github.com/shoyim',
      telegramPostUrl: 'https://t.me/shoyim_portfolio',
      featured: false,
    },
  ] as Project[],

  skills: [
    {
      title: 'Backend & Systems',
      icon: 'Server',
      skills: [
        { name: 'PHP / Laravel', level: 95, note: 'Microservices, Packages, Eloquent, Queues' },
        { name: 'Python / Django / FastAPI', level: 90, note: 'Async, REST API, Celery, RAG' },
        { name: 'Go / Node.js', level: 75, note: 'High concurrency, CLI tools, Sockets' },
        { name: 'PostgreSQL & MySQL', level: 90, note: 'Indexing, Query Optimization, Sharding' },
        { name: 'Redis', level: 85, note: 'Caching, Pub/Sub, Rate Limiting' },
      ],
    },
    {
      title: 'Frontend & UI Engineering',
      icon: 'Layout',
      skills: [
        { name: 'TypeScript & JavaScript', level: 90, note: 'Strict typing, Modern ESNext' },
        { name: 'Next.js 14/15 (App Router)', level: 88, note: 'SSR, Server Actions, SEO' },
        { name: 'Vue.js 3 / Nuxt', level: 85, note: 'Composition API, Pinia, Inertia.js' },
        { name: 'Tailwind CSS & HUD Design Systems', level: 95, note: 'Design Tokens, Cyber/Modern Themes' },
      ],
    },
    {
      title: 'DevOps, Cloud & Architecture',
      icon: 'Terminal',
      skills: [
        { name: 'Docker & Docker Compose', level: 90, note: 'Isolated sandboxes, Multi-stage builds' },
        { name: 'Linux / Bash Scripting', level: 88, note: 'Ubuntu/Debian, Systemd, Performance' },
        { name: 'Nginx & Reverse Proxy', level: 85, note: 'SSL, Load balancing, Websocket proxy' },
        { name: 'Git & CI/CD Pipelines', level: 90, note: 'GitHub Actions, Automated releases' },
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      period: '2022 — HOZIRGACHA',
      role: 'Senior Full-Stack Developer & Tech Lead',
      company: 'Mustaqil Shartnomalar & Maslahatchi',
      location: 'O‘zbekiston / Masofaviy',
      description: 'Yirik mijozlar uchun murakkab web platformalar, Telegram ekotizimlari va backend infratuzilmasini noldan qurish.',
      achievements: [
        '100,000+ faol foydalanuvchiga ega Telegram bot va web xizmatlarni muvaffaqiyatli ishlab chiqish va qo‘llab-quvvatlash',
        'Ochiq kodli kutubxonalarni yaratish va Packagist/GitHub da xalqaro hamjamiyatga taqdim etish',
        'Backend serverlar kechikishini (latency) Redis va DB indeksatsiyasi orqali 45% ga qisqartirish',
      ],
      tech: ['Laravel', 'Django', 'Next.js', 'PostgreSQL', 'Docker', 'Redis'],
    },
    {
      period: '2020 — 2022',
      role: 'Software Engineer',
      company: 'SamDU Axborot Texnologiyalari Markazi',
      location: 'Samarqand',
      description: 'Universitet ichki elektron ta’lim tizimlari, test sinovlari va dasturlash olimpiadasi serverlarini boshqarish.',
      achievements: [
        'Talabalarning dasturlash masalalarini tekshiruvchi avtomatlashgan judge tizimini ishlab chiqish',
        '15,000 dan ortiq talabalar uchun imtihon tizimining uzluksiz ishlashini ta’minlash',
      ],
      tech: ['PHP', 'Python', 'Vue.js', 'MySQL', 'Linux'],
    },
  ] as ExperienceItem[],
};
