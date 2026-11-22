# Shoyim Obloqulov // Portfolio Platform (shoyim.uz)

> **KEP.uz Dark Architecture (Cyber-IDE / HUD Design System) asosida yaratilgan zamonaviy Next.js portfolio veb-sayti.**

![Domain](https://img.shields.io/badge/Domain-shoyim.uz-93d7e2?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-Next.js%2016%20%7C%20Tailwind%20v4%20%7C%20TypeScript-0e121a?style=flat-square)
![Design](https://img.shields.io/badge/Design%20System-KEP.uz%20Dark-93d7e2?style=flat-square)
![Telegram](https://img.shields.io/badge/Portfolio%20Channel-@shoyim__portfolio-388ee2?style=flat-square)

---

## 📌 Loyiha Haqida

Ushbu portfolio veb-sayti O‘zbekistonlik Senior Full-stack dasturchi **Shoyim Obloqulov** ([github.com/shoyim](https://github.com/shoyim)) uchun ishlab chiqilgan. Saytning vizual tili va dizayn tizimi O‘zbekistondagi yetakchi dasturlash platformasi — **[KEP.uz](https://kep.uz)** qora mavzusi (Dark-first HUD / Terminal Aesthetic) asosida yaratilgan.

- **Domen:** [https://shoyim.uz](https://shoyim.uz)
- **Telegram Portfolio:** [https://t.me/shoyim_portfolio](https://t.me/shoyim_portfolio)
- **GitHub:** [https://github.com/shoyim](https://github.com/shoyim)

---

## 🎨 Dizayn Tizimi (KEP.uz Dark Architecture)

1. **Ranglar va Tokenlar:**
   - `Body Background`: `#0a0d14` (chuqur kosmik qora)
   - `Surface / Paper`: `#0e121a`
   - `Elevation 1 / 2`: `#131821` / `#1c2331`
   - `Primary Brand Accent`: `#93d7e2` (Ice Cyan)
   - `Secondary Accent`: `#d8c697` (Sand Gold)
   - `Border`: `rgba(255, 255, 255, 0.08)`
2. **HUD Corners Effekti:**
   - Kartochkalarning 4 ta burchagida `linear-gradient` orqali chizilgan 24px x 1px burchak fasetlari (`.kep-hud-corner`).
3. **Geometriya:**
   - O‘tkir qat'iy burchaklar (`rounded-none`).
4. **Tipografiya:**
   - UI: `Plus Jakarta Sans`
   - Monospace / Terminal: `JetBrains Mono`

---

## 🛠 Texnologik Stek

- **Freymvork:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + Custom KEP.uz CSS Tokens
- **Til:** TypeScript (Strict Mode)
- **Ikonkalar:** Lucide Icons & Custom SVG

---

## 📂 Loyiha Strukturasi

```
portfolio/
├── app/
│   ├── globals.css         # KEP.uz CSS o'zgaruvchilari, HUD Corners va dot-grid
│   ├── layout.tsx          # Shriftlar, SEO OpenGraph va metadata
│   └── page.tsx            # Asosiy sahifa
├── components/
│   ├── ui/
│   │   ├── KepCard.tsx     # HUD Corners kartochka komponenti
│   │   ├── KepButton.tsx   # O'tkir burchakli KEP tugmasi
│   │   ├── Badge.tsx       # Qat'iy chegara status nishoni
│   │   └── Icons.tsx       # Custom SVG vektor piktogrammalari
│   ├── Navbar.tsx          # Topnav navigatsiya va status
│   ├── Hero.tsx            # Terminal kirish va asosiy ko'rsatkichlar
│   ├── About.tsx           # Tajriba xronologiyasi (SamDU IT Markazi va h.k.)
│   ├── Projects.tsx        # Telegram @shoyim_portfolio ishlari va filter
│   ├── Skills.tsx          # Texnologiyalar matritsasi
│   ├── Contact.tsx         # Aloqa formasi va Telegram kanallari
│   └── Footer.tsx          # Telemetriya footer
├── data/
│   └── portfolio.ts        # Shoyim Obloqulovning barcha ma'lumotlar bazasi
└── package.json
```

---

## 🚀 Ishga Tushirish va O‘rnatish

### 1. Bog‘liqliklarni o‘rnatish
```bash
npm install
```

### 2. Dasturchi rejimida ishga tushirish (Local Dev)
```bash
npm run dev
```
Saytni brauzerda ochish: `http://localhost:3000`

### 3. Ishlab chiqarish uchun build qilish
```bash
npm run build
npm run start
```

---

## 📤 GitHub Repozitoriyga Yuklash (Git Workflow)

Loyiha kodi hozir `d:\portfolio` da to‘liq tayyor holatda. Uni GitHub profilingizga yuklash uchun quyidagi buyruqlarni bajaring:

```bash
# 1. Barcha fayllarni sahnaga qo'shish
git add .

# 2. Birinchi commitni amalga oshirish
git commit -m "feat: complete portfolio for shoyim.uz with KEP.uz dark architecture"

# 3. Asosiy tarmoqni main ga o'zgartirish
git branch -M main

# 4. O'zingizning GitHub repozitoriyangizni ulash (masalan: github.com/shoyim/portfolio)
git remote add origin https://github.com/shoyim/portfolio.git

# 5. GitHub ga yuklash
git push -u origin main
```

---

## 🌐 Domen va Vercel ga Bog‘lash (shoyim.uz)

1. [vercel.com](https://vercel.com) saytiga kiring.
2. `Import Project` tugmasini bosib, GitHub dagi `shoyim/portfolio` repozitoriyangizni tanlang.
3. Deploy tugmasini bosing.
4. **Settings -> Domains** bo‘limiga o‘tib, `shoyim.uz` va `www.shoyim.uz` domenlaringizni kiriting.
5. DNS provayderingizda quyidagi yozuvlarni kiriting:
   - `A` record: `@` -> `76.76.21.21`
   - `CNAME` record: `www` -> `cname.vercel-dns.com`
