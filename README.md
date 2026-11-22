# Shoyim Obloqulov // Portfolio Platform (shoyim.uz)

> **HUD & Kiber-Brutalist Dizayn Tizimi asosida yaratilgan zamonaviy, ko‘p sahifali Next.js portfolio veb-sayti (Qora va Oq mavzular qo‘llab-quvvatlanadi).**

![Domain](https://img.shields.io/badge/Domain-shoyim.uz-0969da?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-Next.js%2016%20%7C%20Tailwind%20v4%20%7C%20TypeScript-1f2328?style=flat-square)
![Theme](https://img.shields.io/badge/Theme-Dark%20%26%20Light%20Modes-0969da?style=flat-square)
![Telegram](https://img.shields.io/badge/Portfolio%20Channel-@shoyim__portfolio-388ee2?style=flat-square)

---

## 📌 Loyiha Haqida

Ushbu portfolio veb-sayti O‘zbekistonlik Senior Full-stack dasturchi **Shoyim Obloqulov** ([github.com/shoyim](https://github.com/shoyim)) uchun ishlab chiqilgan. Sayt yuqori kontrastli qora (Dark) va toza oq (Light) mavzularini qo‘llab-quvvatlaydi, 0px o‘tkir burchakli muhandislik fasetlari (HUD corners) va texnik matritsa fonlari bilan boyitilgan.

- **Domen:** [https://shoyim.uz](https://shoyim.uz)
- **Telegram Portfolio:** [https://t.me/shoyim_portfolio](https://t.me/shoyim_portfolio)
- **GitHub:** [https://github.com/shoyim](https://github.com/shoyim)

---

## 🎨 Dizayn Tizimi (Design System Tokens)

Dizayn tizimi to‘liq `--portfolio-*` o‘zgaruvchilariga asoslangan bo‘lib, oq va qora mavzuda avtomatik moslashadi:

### 1. Qorong‘i Mavzu (Dark Mode — Standart — Pure Monochrome):
* `Body Background`: `#000000`
* `Surface / Paper`: `#080808`
* `Elevation 1 / 2`: `#111111` / `#1a1a1a`
* `Primary Accent`: `#ffffff` (Sof oq)
* `Chegaralar`: `rgba(255, 255, 255, 0.15)`

### 2. Yorug‘ Mavzu (Light Mode — Pure Monochrome):
* `Body Background`: `#ffffff`
* `Surface / Paper`: `#f8f8f8`
* `Elevation 1 / 2`: `#f0f0f0` / `#e4e4e4`
* `Primary Accent`: `#000000` (Sof qora)
* `Chegaralar`: `rgba(0, 0, 0, 0.16)`

### 3. Mavzuni O‘zgartirish (Theme Switcher):
* Navbar da joylashgan **Quyosh / Oy** tugmasi orqali rejim bir klikda almashadi va sozlama `localStorage` da saqlanadi.

---

## 📂 Sahifalar va Yo‘nalishlar

```
portfolio/
├── app/
│   ├── page.tsx               # Asosiy sahifa (Hero, Tajriba, Loyihalar, Stek, Aloqa)
│   ├── about/page.tsx         # Kengaytirilgan tarjimai hol va akademik ma'lumotlar
│   ├── projects/page.tsx      # Barcha loyihalar katalogi (Qidiruv va Kategoriya filtri)
│   ├── projects/[id]/page.tsx # Dinamik Case Study sahifalari (Texnik arxitektura)
│   ├── blog/page.tsx          # Texnik maqolalar arxivi
│   ├── blog/[slug]/page.tsx   # Alohida maqola o'qish (Kod bloklari, calloutlar)
│   ├── contact/page.tsx       # Interaktiv loyiha smetasi va Telegram dispatch
│   ├── globals.css            # `--portfolio-*` tokenlari, HUD burchaklar, to'rlar
│   └── layout.tsx             # Shriftlar, SEO va theme-flash oldini oluvchi script
├── components/
│   ├── ui/
│   │   ├── KepCard.tsx        # PortfolioCard HUD corners komponenti
│   │   ├── KepButton.tsx      # PortfolioButton o'tkir burchakli tugma
│   │   ├── Badge.tsx          # Status nishoni
│   │   └── Icons.tsx          # SVG vektor piktogrammalari
│   ├── Navbar.tsx             # Topnav, Theme switcher (Sun/Moon), navigatsiya
│   ├── Hero.tsx               # Bosh qism, metrikalar
│   ├── About.tsx              # Tajriba xronologiyasi
│   ├── Projects.tsx           # Loyihalar filtri va modal
│   ├── Skills.tsx             # Texnologiyalar matritsasi
│   ├── Contact.tsx            # Aloqa formasi
│   └── Footer.tsx             # Toza mualliflik footeri
├── data/
│   ├── portfolio.ts           # Loyihalar va kasbiy ma'lumotlar bazasi
│   └── blog.ts                # Texnik maqolalar bazasi
```

---

## 🚀 Ishga Tushirish

```bash
# O'rnatish
npm install

# Mahalliy serverni ishga tushirish (http://localhost:3000)
npm run dev

# Ishlab chiqarish buildi
npm run build
npm run start
```

---

## 📤 GitHub Repozitoriyga Yuklash

```bash
git add .
git commit -m "feat: clean up labels, add light/dark themes and rename tokens to portfolio"
git push -u origin main
```
