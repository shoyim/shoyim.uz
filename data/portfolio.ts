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
  image?: string;
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

export interface PortfolioData {
  profile: {
    name: string;
    avatar: string;
    callsign: string;
    title: string;
    bio: string;
    location: string;
    status: string;
    domain: string;
    github: string;
    linkedin: string;
    telegramChannel: string;
    telegramUser: string;
    email: string;
    stats: { label: string; value: string; unit: string; detail: string }[];
  };
  projects: Project[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: 'Shoyim Obloqulov',
    avatar: '/images/profile.jpg',
    callsign: 'SHOYIM.UZ',
    title: 'Senior Full-Stack Engineer & System Architect',
    bio: "PHP/Laravel, Python/Django, Next.js, Vue.js va yuqori yuklamali tarqatilgan tizimlar bo'yicha mutaxassis. Algoritmik tizimlar, Telegram ekotizimlari va ochiq kodli paketlar (Open-Source) muallifi.",
    location: 'Samarqand, O‘zbekiston',
    status: 'SYSTEM_READY // AVAILABLE FOR SELECT CONTRACTS',
    domain: 'https://shoyim.uz',
    github: 'https://github.com/shoyim',
    linkedin: 'https://www.linkedin.com/in/shoyim-obloqulov-9409b2296/',
    telegramChannel: 'https://t.me/shoyim_portfolio',
    telegramUser: 'https://t.me/shoyim',
    email: 'contact@shoyim.uz',
    stats: [
      { label: 'Tajriba', value: '5+', unit: 'yil', detail: 'Full-stack & DevOps' },
      { label: 'Loyihalar', value: '40+', unit: 'dona', detail: 'Web, bot va servislar' },
      { label: 'Open Source', value: '25+', unit: 'repo', detail: 'GitHub & Packagist' },
      { label: 'Uptime & Barqarorlik', value: '99.9%', unit: 'SLA', detail: 'Yuqori yuklamali tizimlar' },
    ],
  },

  projects: [
    {
      id: 'crmedu-uz',
      title: 'CRMEDU — O‘quv Markazlari Uchun CRM Tizimi',
      category: 'web',
      categoryLabel: 'Web & SaaS Platform',
      description: 'O‘quv markazlari, talabalar davomati, to‘lovlar va kurslar oqimini avtomatlashtirilgan boshqaruvchi keng ko‘lamli ERP/CRM platformasi.',
      fullDetails:
        'PHP / Laravel va Nuxt freymvorklari asosida qurilgan maxsus CRM tizimi. Talabalar qabuli, guruhlar jadvali, oylik to‘lovlar monitoringi, xodimlar KPI ko‘rsatkichlari, SMS billing va filiallar integratsiyasini to‘liq o‘z ichiga oladi.',
      technologies: ['PHP', 'Laravel', 'Nuxt', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'http://crmedu.uz',
      telegramPostUrl: 'https://t.me/shoyim_portfolio/4',
      image: '/images/projects/tg-proj-1.jpg',
      featured: true,
    },
    {
      id: 'medterm-uz',
      title: 'MedTerm — Ko‘p Tilli Tibbiy Atamalar Lug‘ati',
      category: 'web',
      categoryLabel: 'Web & Medical Lexicon',
      description: 'Tibbiyot sohasi mutaxassislari va talabalari uchun tezkor qidiruvga ega ko‘p tilli interaktiv terminologik lug‘at platformasi.',
      fullDetails:
        'Go va Next.js texnologiyalarida ishlab chiqilgan, millisekundlarda minglab tibbiy atamalar ichidan qidiruvchi, morfologik tahlil va ko‘p tilli tarjima imkoniyatiga ega yuqori unumdorlikdagi lug‘at platformasi.',
      technologies: ['Go', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
      liveUrl: 'http://medterm.uz',
      telegramPostUrl: 'https://t.me/shoyim_portfolio/5',
      image: '/images/projects/tg-proj-2.jpg',
      featured: true,
    },
    {
      id: 'modellashtirish-uz',
      title: 'G‘ovakli Muhitda Suyuqlik Filtratsiyasi Modellashtirish Tizimi',
      category: 'web',
      categoryLabel: 'Scientific & Numerical Simulation',
      description: 'G‘ovakli muhitda g‘ayritabiiy suyuqlik filtratsiyasi xususiyatlarini hisoblash va vizualizatsiya qilish dasturiy muhiti.',
      fullDetails:
        'Python/Django va AdminLTE asosida yaratilgan ilmiy hisoblash platformasi. Murakkab differensial tenglamalarni yechish, suyuqlik bosimi dinamikasi va filtrlash koeffitsiyentlarini interaktiv grafiklarda real vaqtda hisoblab beradi.',
      technologies: ['Python', 'Django', 'AdminLTE', 'NumPy', 'Matplotlib'],
      liveUrl: 'http://modellashtirish.uz',
      telegramPostUrl: 'https://t.me/shoyim_portfolio/7',
      image: '/images/projects/tg-proj-4.jpg',
      featured: true,
    },
    {
      id: 'researchub-uz',
      title: 'ResearcHub — Ingliz Tilini Chuqur O‘rganish Platformasi',
      category: 'web',
      categoryLabel: 'EdTech Platform',
      description: 'Ingliz tilini akademik va mavzulashtirilgan holda chuqur o‘rganish, leksika va ilmiy matnlar bilan ishlash portali.',
      fullDetails:
        'Laravel, Tailwind CSS va Vue.js stekida barpo etilgan o‘quv platformasi. Foydalanuvchilar uchun bosqichma-bosqich testlar, ilmiy maqolalar lug‘ati va shaxsiy o‘zlashtirish tahlilini taqdim etadi.',
      technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
      liveUrl: 'http://researchub.uz',
      telegramPostUrl: 'https://t.me/shoyim_portfolio/9',
      image: '/images/projects/tg-proj-6.jpg',
      featured: false,
    },
    {
      id: 'beruniy-talim-uz',
      title: 'Beruniy Ta\'lim — Onlayn Kurslar va Imtihonlar Platformasi',
      category: 'web',
      categoryLabel: 'EdTech & Mobile Ecosystem',
      description: 'Maktab o‘quvchilari va abituriyentlar uchun onlayn video darslar, interaktiv topshiriqlar va mobil ilovaga ega ta\'lim ekotizimi.',
      fullDetails:
        'Backend uchun Laravel va Filament admin paneli, veb interfeys uchun Next.js/React, hamda mobil foydalanuvchilar uchun React Native texnologiyalarida to‘liq ishlab chiqilgan keng masshtabli EdTech loyiha.',
      technologies: ['Laravel', 'Filament', 'Next.js', 'React Native', 'PostgreSQL'],
      liveUrl: 'http://beruniy-talim.uz',
      telegramPostUrl: 'https://t.me/shoyim_portfolio/12',
      image: '/images/projects/tg-proj-9.jpg',
      featured: true,
    },
    {
      id: 'bolalar-informatikasi-uz',
      title: 'Bolalar Informatikasi — Interaktiv Ta\'lim Portali',
      category: 'web',
      categoryLabel: 'Interactive EdTech',
      description: 'Kichik yoshdagi bolalar uchun informatika va raqamli savodxonlikni interaktiv o‘yinlar va vizual topshiriqlar orqali o‘rgatish platformasi.',
      fullDetails:
        'React, Tailwind CSS, Laravel va Filament asosida qurilgan qulay interfeysli ta\'lim tizimi. Bolalar uchun algoritmlash asoslari, kompyuter savodxonligi va interaktiv viktorinalarni o‘z ichiga oladi.',
      technologies: ['React', 'Tailwind CSS', 'Laravel', 'Filament', 'MySQL'],
      liveUrl: 'http://bolalar-informatikasi.uz',
      telegramPostUrl: 'https://t.me/shoyim_portfolio/14',
      image: '/images/projects/tg-proj-11.jpg',
      featured: false,
    },
    {
      id: 'edu-martaba-uz',
      title: 'Edu Martaba — Ta\'lim va Kasbiy Rivojlanish Portali',
      category: 'web',
      categoryLabel: 'EdTech & Career Platform',
      description: 'O‘qituvchilar va pedagog xodimlar malakasini oshirish, kasbiy toifalar bo‘yicha attestatsiya materiallari portali.',
      fullDetails:
        'React, Tailwind CSS va Laravel asosida yaratilgan portal. O‘qituvchilar uchun attestatsiya sinovlari, metodik qo‘llanmalar va reyting tizimini boshqaradi.',
      technologies: ['React', 'Tailwind CSS', 'Laravel', 'MySQL'],
      liveUrl: 'http://edu-martaba.uz',
      telegramPostUrl: 'https://t.me/shoyim_portfolio/15',
      image: '/images/projects/tg-proj-12.jpg',
      featured: false,
    },
    {
      id: 'zkadr-uz',
      title: 'ZKadr — Kadrlar Salohiyatini Baholash Tizimi',
      category: 'web',
      categoryLabel: 'HR & Evaluation Platform',
      description: 'Tashkilot va korxonalarda xodimlar kompetensiyasi va samaradorligini (KPI) avtomatlashtirilgan tarzda baholash platformasi.',
      fullDetails:
        'Vue.js, Tailwind CSS va Laravel asosida yaratilgan korporativ HR tizimi. Xodimlarning bilim darajasi, psixologik va kasbiy testlarini tahlil qilib, tahliliy hisobotlar generatsiya qiladi.',
      technologies: ['Vue.js', 'Tailwind CSS', 'Laravel', 'PostgreSQL'],
      liveUrl: 'http://zkadr.uz',
      telegramPostUrl: 'https://t.me/shoyim_portfolio/16',
      image: '/images/projects/tg-proj-13.jpg',
      featured: true,
    },
    {
      id: 'aitests-uz',
      title: 'AITests — Sun\'iy Intellekt Asosidagi Test Sinovlari',
      category: 'ai',
      categoryLabel: 'AI & Testing Platform',
      description: 'Boshlang‘ich ta’lim nazariyasi va metodikasi bo‘yicha sun\'iy intellekt yordamida test topshiriqlarini tuzish va baholash platformasi.',
      fullDetails:
        'Sun\'iy intellekt algoritmlari yordamida pedagogik matnlardan test savollari, ko‘p variantli javoblar va tahliliy tushuntirishlar shakllantiruvchi zamonaviy veb platforma.',
      technologies: ['Next.js', 'Python', 'FastAPI', 'Tailwind CSS', 'PostgreSQL'],
      liveUrl: 'http://aitests.uz',
      telegramPostUrl: 'https://t.me/shoyim_portfolio/17',
      image: '/images/projects/tg-proj-14.jpg',
      featured: true,
    },
    {
      id: 'xayrullayev-xurshidjon-uz',
      title: 'Professor Xurshidjon Xayrullayev Ilmiy Portali',
      category: 'web',
      categoryLabel: 'Academic & Personal Portal',
      description: 'Filologiya fanlari doktori (DSc), professor Xurshidjon Xayrullayevning ilmiy asarlari, monografiyalari va maqolalari raqamli arxivi.',
      fullDetails:
        'Ilmiy nashrlar, kitoblar va dissertatsiyalarni kataloglashtirish, qidiruv va elektron o‘qish imkonini beruvchi akademik veb portal.',
      technologies: ['Next.js', 'Tailwind CSS', 'Laravel API', 'PostgreSQL'],
      liveUrl: 'https://xayrullayev-xurshidjon.uz',
      telegramPostUrl: 'https://t.me/shoyim_portfolio/18',
      image: '/images/projects/tg-proj-15.jpg',
      featured: false,
    },
    {
      id: 'tetra-journal-com',
      title: 'Tetra Journal — Xalqaro Ilmiy Tadqiqotlar Jurnali',
      category: 'web',
      categoryLabel: 'Scientific Journal Platform',
      description: 'Journal of Tourism, Economy, Technology, Research and Academia xalqaro ilmiy jurnali platformasi.',
      fullDetails:
        'OJS talablariga mos, xalqaro ilmiy maqolalarni qabul qilish, taqrizlash (peer-review) va DOI indeksatsiyasiga ega akademik jurnal nashriyot portali.',
      technologies: ['PHP', 'Laravel', 'Bootstrap / Tailwind', 'MySQL'],
      liveUrl: 'http://tetra-journal.com',
      telegramPostUrl: 'https://t.me/shoyim_portfolio/19',
      image: '/images/projects/tg-proj-16.jpg',
      featured: false,
    },
    {
      id: 'robostep-uz',
      title: 'RoboStep — Robototexnikani Qadamma-qadam O‘rganish',
      category: 'web',
      categoryLabel: 'STEM & Robotics Platform',
      description: 'Robototexnika, Arduino va mikrokontrollerlar dasturlashni amaliy mashg‘ulotlar orqali o‘rgatuvchi STEM ta\'lim platformasi.',
      fullDetails:
        'Robototexnika darsliklari, simulyatsiyalar, video kurslar va sxemalar bazasini o‘zida jamlagan interaktiv ta\'lim tizimi.',
      technologies: ['Next.js', 'Tailwind CSS', 'Laravel', 'Telegram Bot API'],
      liveUrl: 'http://robostep.uz',
      telegramPostUrl: 'https://t.me/shoyim_portfolio/20',
      image: '/images/projects/tg-proj-17.jpg',
      featured: true,
    },
    {
      id: 'patent-examora-uz',
      title: 'Examora Patent — Universitet Ixtirolari va Patentlar Reyestri',
      category: 'web',
      categoryLabel: 'Enterprise & Intellectual Property',
      description: 'Universitet olimlari va talabalari tomonidan olingan patentlar, ixtirolar va dasturiy guvohnomalari markazlashtirilgan tizimi.',
      fullDetails:
        'Intellektual mulk ob\'yektlarini ro‘yxatga olish, elektron guvohnomalarni verifikatsiya qilish, QR kodli tekshiruv va ilmiy yutuqlar statistikasini yurituvchi institutsional platforma.',
      technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'http://patent.examora.uz',
      telegramPostUrl: 'https://t.me/shoyim_portfolio/21',
      image: '/images/projects/tg-proj-18.jpg',
      featured: true,
    },
    {
      id: 'telegram-id-bot',
      title: 'Telegram ID & Meta Fetcher Bot',
      category: 'bot',
      categoryLabel: 'Telegram Bot & Open Source',
      description: 'Telegram foydalanuvchilari, kanallar, guruhlar va media fayllarning ichki identifikatorlarini tezkor aniqlovchi utilita bot.',
      fullDetails:
        'Aiogram / PyTelegramBotAPI asosida yaratilgan, yuqori tezlikda ishlovchi ochiq kodli Telegram bot. Katta guruhlar va kanallardagi admin operatsiyalari uchun foydali.',
      technologies: ['Python', 'Aiogram', 'Telegram API'],
      githubUrl: 'https://github.com/shoyim/telegram-id-bot',
      telegramPostUrl: 'https://t.me/shoyim_portfolio/10',
      featured: false,
    },
    {
      id: 'nometa-uz',
      title: 'NoMeta.uz — Savol Berish Madaniyati Loyihasi',
      category: 'web',
      categoryLabel: 'Community & Culture',
      description: 'Dasturchilar va IT jamoalarida vaqtni tejash uchun "meta savol" bermasdan, to‘g‘ridan-to‘g‘ri maqsadga o‘tish madaniyatini targ‘ib qiluvchi loyiha.',
      fullDetails:
        'Hamjamiyat a\'zolarining ish unumdorligini oshirish maqsadida yaratilgan minimalist tushuntirish sahifasi.',
      technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'http://nometa.uz',
      telegramPostUrl: 'https://t.me/shoyim_portfolio/11',
      featured: false,
    },
    {
      id: 'laravel-uz-lang',
      title: 'laravel-uz-lang (Laravel Uzbek Language Pack)',
      category: 'opensource',
      categoryLabel: 'Open Source / Packagist',
      description: 'Laravel freymvorki uchun O‘zbek tili rasmiy lokalizatsiyasi va transliteratsiya paketi (7+ Stars, 500+ yuklab olishlar).',
      fullDetails:
        'Laravel ekotizimidagi barcha rasmiy autentifikatsiya, validatsiya, parollar va xatolik xabarlarini to‘liq o‘zbek tiliga (lotin va kirill yozuvlarida) o‘giruvchi ochiq kodli paket. Packagist orqali global o‘rnatiladi.',
      technologies: ['PHP', 'Laravel', 'Composer', 'Packagist', 'PHPUnit'],
      githubUrl: 'https://github.com/shoyim/laravel-uz-lang',
      telegramPostUrl: 'https://t.me/shoyim_portfolio',
      stars: '7 Stars',
      featured: true,
    },
    {
      id: 'django-codecompare',
      title: 'Django CodeCompare & AST Analysis Engine',
      category: 'opensource',
      categoryLabel: 'Open Source & Algorithms',
      description: 'Dasturlash topshiriqlari va yechimlarini kod o‘xshashligi (AST & Token similarity) bo‘yicha tahlil qiluvchi anti-plagiat servisi.',
      fullDetails:
        'Online judge va o‘quv platformalari uchun yaratilgan kod tahlili dvigateli. Kodni leksik tokenlarga ajratib, o‘zgaruvchilar nomi o‘zgarganda ham strukturaviy o‘xshashlikni 99% aniqlikda aniqlaydi.',
      technologies: ['Python', 'Django', 'AST', 'Levenshtein', 'Docker'],
      githubUrl: 'https://github.com/shoyim/compiler',
      telegramPostUrl: 'https://t.me/shoyim_portfolio',
      stars: 'Engine',
      featured: true,
    },
    {
      id: 'speednetwork',
      title: 'SpeedNetwork — Stateless Internet Speed Test',
      category: 'opensource',
      categoryLabel: 'Open Source / Network Tool',
      description: 'Professional real-time internet speed test — database-less, stateless arxitektura va WebSockets.',
      fullDetails:
        'Hech qanday ma\'lumotlar bazasisiz, to‘liq xotirada asinxron WebSocket oqimlari orqali server va mijoz o‘rtasidagi yuklab olish, yuklash tezligi, jitter va ping ko‘rsatkichlarini real vaqtda o‘lchaydi.',
      technologies: ['TypeScript', 'Node.js', 'WebSockets', 'Tailwind CSS'],
      githubUrl: 'https://github.com/shoyim/speednetwork',
      telegramPostUrl: 'https://t.me/shoyim_portfolio',
      stars: 'Open Source',
      featured: true,
    },
    {
      id: 'uzbek-transliterator',
      title: 'uzbek-transliterator (Cyrillic <-> Latin)',
      category: 'opensource',
      categoryLabel: 'Open Source / Package',
      description: 'O‘zbek tili kirill alifbosidagi matnni lotinchaga va aksincha, murakkab grammatik qoidalarni inobatga olgan holda transliteratsiya qiluvchi PHP paketi.',
      fullDetails:
        'Tutuq belgisi (ʼ), "sh", "ch", "ye", "yu", "ya" kabi o‘ziga xos tovushlarni to‘g‘ri ajratuvchi va katta matnlarni yuqori tezlikda o‘giruvchi PHP kutubxonasi.',
      technologies: ['PHP', 'RegEx', 'Composer', 'CLI'],
      githubUrl: 'https://github.com/shoyim/uzbek-transliterator',
      stars: 'Open Source',
      featured: false,
    },
    {
      id: 'uzbek-speech-dataset',
      title: 'Uzbek Speech Dataset (Audio + Transcripts)',
      category: 'opensource',
      categoryLabel: 'Open Source / AI Dataset',
      description: 'TTS (Text-to-Speech) va ASR (Speech-to-Text) modellarini o‘qitish uchun o‘zbek tili audio yozuvlari va matn transkripsiyalari to‘plami.',
      fullDetails:
        'O‘zbek tili nutqini tanish va ovoz sintezi bo‘yicha sun\'iy intellekt modellarini o‘qitish maqsadida yig‘ilgan va normallashtirilgan ochiq dataset.',
      technologies: ['Python', 'Audio Processing', 'ASR / TTS', 'Data Science'],
      githubUrl: 'https://github.com/shoyim/uzbek-speech-dataset',
      stars: 'Dataset',
      featured: true,
    },
    {
      id: 'ai-test-rag',
      title: 'Offline AI Test RAG System',
      category: 'ai',
      categoryLabel: 'Open Source / AI System',
      description: 'PDF kitoblar va ilmiy manbalar bo‘yicha savol-javob qiluvchi va avtomatik test savollari generatsiya qiluvchi oflayn RAG tizimi.',
      fullDetails:
        'FastAPI va CLI ko‘rinishida ishlovchi RAG arxitekturasi: PDF hujjatlarni parse qilib, vektor ko‘rinishida saqlaydi va foydalanuvchi so‘rovlariga mos aniq imtihon testlarini tuzadi.',
      technologies: ['Python', 'FastAPI', 'RAG', 'ChromaDB', 'LLM'],
      githubUrl: 'https://github.com/shoyim/ai-test-rag',
      telegramPostUrl: 'https://t.me/shoyim_portfolio',
      stars: 'AI Project',
      featured: true,
    },
    {
      id: 'ai-presentation-generator-python',
      title: 'AI Presentation Generator (Python PPTX)',
      category: 'ai',
      categoryLabel: 'Open Source / Automation',
      description: 'Berilgan mavzu yoki matn asosida avtomatik ravishda chiroyli PowerPoint (.pptx) slaydlarini shakllantiruvchi sun\'iy intellekt vositasi.',
      fullDetails:
        'Python-pptx kutubxonasi va AI modeli yordamida har bir slayd uchun sarlavha, asosiy tezislar va mos vizual joylashuvlarni avtomatik tuzadi.',
      technologies: ['Python', 'python-pptx', 'OpenAI API', 'CLI'],
      githubUrl: 'https://github.com/shoyim/ai-presentation-generator-python',
      stars: 'Open Source',
      featured: false,
    },
    {
      id: 'avtotest',
      title: 'Avtotest — Haydovchilik Imtihoni Savollar Banki',
      category: 'opensource',
      categoryLabel: 'Open Source / Dataset & API',
      description: 'O‘zbekiston haydovchilik guvohnomasi imtihonlari uchun 600+ savollar, rasmlar va javob variantlarining tuzilgan JSON ma\'lumotlar bazasi.',
      fullDetails:
        'Dasturchilar va startaplar uchun yo‘l harakati qoidalariga oid barcha rasmiy testlarni qulay formatda taqdim etuvchi ochiq ma\'lumotlar to‘plami.',
      technologies: ['JSON', 'Dataset', 'Node.js', 'Open Data'],
      githubUrl: 'https://github.com/shoyim/avtotest',
      stars: 'Open Source',
      featured: false,
    },
    {
      id: 'php-validation',
      title: 'PHP Validation Library',
      category: 'opensource',
      categoryLabel: 'Open Source / Library',
      description: 'Frameworksiz PHP loyihalar uchun yengil, kengaytiriladigan va qat\'iy ma\'lumotlarni tekshirish (data validation) kutubxonasi.',
      fullDetails:
        'Email, telefon, uzunlik, tip va xavfsizlik filtrlari uchun qulay API ga ega mustaqil PHP validation kutubxonasi.',
      technologies: ['PHP', 'OOP', 'PHPUnit', 'Packagist'],
      githubUrl: 'https://github.com/shoyim/php-validation',
      stars: 'Library',
      featured: false,
    },
    {
      id: 'ob-havo-bot',
      title: 'Ob-Havo Telegram Boti (Geolocation & Forecast)',
      category: 'bot',
      categoryLabel: 'Telegram Bot',
      description: 'Foydalanuvchi joylashuviga (geolokatsiya) qarab aniq ob-havo ma\'lumotlari va harorat prognozlarini yuboruvchi qulay Telegram bot.',
      fullDetails:
        'PyTelegramBotApi va ob-havo API provayderlari bilan integratsiya qilingan asinxron bot. Foydalanuvchi yuborgan koordinatalar bo‘yicha atmosfera bosimi, namlik, shamol tezligi va kunlik ob-havo hisobotlarini shakllantiradi.',
      technologies: ['Python', 'PyTelegramBotApi', 'Weather API', 'Geolocation'],
      githubUrl: 'https://github.com/shoyim/ob-havo',
      telegramPostUrl: 'https://t.me/shoyim_portfolio',
      featured: false,
    },
  ],

  skills: [
    {
      title: 'Backend & Arxitektura',
      icon: 'Server',
      skills: [
        { name: 'PHP / Laravel', level: 95, note: 'Microservices, Packages, Eloquent, Queues' },
        { name: 'Python / Django / FastAPI', level: 90, note: 'REST APIs, Celery, AST, NLP/AI' },
        { name: 'Go (Golang)', level: 80, note: 'High-throughput microservices, Goroutines' },
        { name: 'PostgreSQL & MySQL', level: 90, note: 'Indexing, Optimization, Complex Joins' },
        { name: 'Redis', level: 88, note: 'Caching, Pub/Sub, Rate Limiting, Queues' },
      ],
    },
    {
      title: 'Frontend & UI Muhandisligi',
      icon: 'Layout',
      skills: [
        { name: 'Next.js 15 & 16 / React 19', level: 92, note: 'Server Components, Turbopack, SSR/SSG' },
        { name: 'Vue.js 3 / Nuxt', level: 88, note: 'Composition API, Pinia, SSR' },
        { name: 'TypeScript', level: 88, note: 'Type safety, generics, architecture' },
        { name: 'Tailwind CSS (v3 / v4)', level: 96, note: 'Responsive design, custom tokens, HUD/B&W UI' },
        { name: 'React Native', level: 78, note: 'Cross-platform mobile apps for EdTech' },
      ],
    },
    {
      title: 'DevOps, Tizimlar & Sun\'iy Intellekt',
      icon: 'Terminal',
      skills: [
        { name: 'Docker & Docker Compose', level: 90, note: 'Containerization, Multi-stage builds' },
        { name: 'Linux / Nginx', level: 88, note: 'Server management, SSL, Reverse proxy' },
        { name: 'Git & CI/CD Pipelines', level: 92, note: 'Automated testing, GitHub Actions' },
        { name: 'AI / RAG / LangChain', level: 82, note: 'Vector databases, LLM integration, embeddings' },
        { name: 'Telegram Bot API / Aiogram', level: 95, note: 'Enterprise bots, Webhooks, Payments' },
      ],
    },
  ],

  experience: [
    {
      period: '2023 — Hozirgacha',
      role: 'Senior Full-Stack Muhandis & Arxitektor',
      company: 'Mustaqil Pudratchi & Open Source',
      location: 'Masofaviy / Samarqand',
      description:
        'Yirik ta\'lim platformalari (Beruniy Ta\'lim, CRMEDU, MedTerm), intellektual mulk reyestrlari va ochiq kodli paketlarni ishlab chiqish, arxitekturasi va server optimallashtirish bo‘yicha yetakchi dasturchi.',
      achievements: [
        'laravel-uz-lang ochiq kodli paketini yaratib, 500+ marta yuklab olinishiga va hamjamiyat e\'tirofiga erishdi.',
        'MedTerm.uz va CRMEDU kabi yuqori unumdorlikka ega tizimlarni noldan arxitekturasini loyihalashtirdi va deploy qildi.',
        'Katta hajmdagi ilmiy va ta\'limiy loyihalarda AI/RAG test sinovlari tizimini ishlab chiqdi.',
      ],
      tech: ['Laravel', 'Go', 'Next.js', 'Python', 'Docker', 'PostgreSQL', 'Redis'],
    },
    {
      period: '2021 — 2023',
      role: 'Full-Stack Dasturchi',
      company: 'Axborot Tizimlari & EdTech Loyihalari',
      location: 'Samarqand, O‘zbekiston',
      description:
        'Talabalar va o‘quv markazlari uchun dasturiy ta\'minotlar, Telegram bot ekotizimlari va API xizmatlarini barpo etish.',
      achievements: [
        '10 dan ortiq tijoriy va ta\'limiy veb platformalarni muvaffaqiyatli ishlab chiqib, mijozlarga topshirdi.',
        'Telegram orqali to‘lov va kadrlar monitoringi tizimlarini avtomatlashtirdi.',
        'Ma\'lumotlar bazasi so‘rovlarini indekslash orqali yuklama vaqtini 40% ga qisqartirdi.',
      ],
      tech: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Aiogram', 'Tailwind CSS'],
    },
  ],
};
