<div align="center">

<img src="public/favicon.svg" width="64" height="64" alt="Y16 Fitness Logo" />

# Y16 Fitness

**A modern personal fitness brand website — built to inspire motion.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-3B7BF6?style=for-the-badge&logo=vercel&logoColor=white)](https://y16fitness.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

![Y16 Fitness Preview](public/hero-model.jpg)

</div>

---

## ✨ Overview

**Y16 Fitness** is a fully animated, responsive single-page frontend for a personal fitness brand. It features a premium UI with glassmorphism cards, a custom magnetic cursor, scroll-triggered animations, and a clean dark/light aesthetic — all built production-ready with modern React tooling.

---

## 🚀 Live Demo

👉 **[https://y16fitness.vercel.app](https://y16fitness.vercel.app)**

> ⚠️ Replace this link with your actual deployed URL after hosting.

---

## 📸 Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Split layout with floating athlete, animated stat counters (500K+, 10K+), and 3 live data glass cards |
| 2 | **Health Metrics** | Interactive body-focus selector — click a category to reveal your personalized plan |
| 3 | **Nutrition** | Diet tab switcher with macro breakdown bars and an animated calorie tracker card |
| 4 | **Yoga Styles** | 3×2 dark card grid with YOGA watermark overlay, accent colors, and hover glow |
| 5 | **Events** | Dual infinite marquee banners + numbered event list with Reserve CTA |
| 6 | **Footer** | CTA band, social links, link grid, and oversized ghost brand wordmark |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | Component architecture & UI |
| **Vite 8** | Lightning-fast dev server & build tool |
| **Framer Motion 11** | All animations — scroll reveals, spring cursor, morphing, counters |
| **Tailwind CSS v4** | Utility-first responsive styling |
| **Lucide React** | Crisp SVG icon set |
| **Inter (Google Fonts)** | Clean, modern typography |

---

## 🎨 Design System

```
Background    #F0EFEB  — warm off-white
Dark          #0D0D12  — near-black for text & nav
Blue Accent   #3B7BF6  — CTAs, highlights, cursor
Blue Light    #6FA3FF  — gradient end
Muted Text    #6B7280  — body copy
Glass         rgba(255,255,255,0.22) + backdrop-blur(16px)
```

---

## ⚡ Features

- 🖱️ **Custom magnetic cursor** — dual-circle design; inner dot morphs to fill hovered buttons
- 🪟 **Glassmorphism cards** — frosted glass with hover tilt and blue glow
- 🔢 **Animated stat counters** — scroll-triggered number animation
- 🎞️ **Infinite marquee** — smooth CSS + Framer Motion seamless loop
- 📱 **Fully responsive** — 375px mobile → 1440px+ desktop
- 🔍 **SEO optimized** — Open Graph, Twitter Card, JSON-LD structured data, canonical URL
- 📦 **PWA ready** — `site.webmanifest` for "Add to Home Screen"
- ♿ **Accessible** — semantic HTML, aria labels, keyboard navigable

---

## 📁 Project Structure

```
Y16-fitness/
├── public/
│   ├── hero-model.jpg       ← Athlete image (replace with transparent PNG)
│   ├── favicon.svg
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── CustomCursor.jsx    ← Magnetic dual-circle cursor
│   │   │   ├── GlassCard.jsx       ← Reusable glass card + tilt
│   │   │   ├── Button.jsx          ← primary / outline / ghost variants
│   │   │   ├── StarburstSVG.jsx    ← 24-ray decorative ornament
│   │   │   ├── StatCounter.jsx     ← Scroll-triggered counter
│   │   │   └── MarqueeBanner.jsx   ← Infinite marquee
│   │   └── sections/
│   │       ├── Navbar.jsx
│   │       ├── HeroSection.jsx
│   │       ├── HealthMetrics.jsx
│   │       ├── NutritionSection.jsx
│   │       ├── YogaSection.jsx
│   │       ├── EventsSection.jsx
│   │       └── Footer.jsx
│   ├── data/content.js       ← All text/data in one place
│   ├── hooks/
│   │   ├── useScrollReveal.js
│   │   └── useCounter.js
│   ├── styles/index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🏃 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/Y16-fitness.git
cd Y16-fitness

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → http://localhost:5173/

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 🔧 Customization

All content lives in one file — no digging through components:

```js
// src/data/content.js
export const HERO = { headline: [...], stats: [...], ... }
export const NUTRITION = { tabs: [...], calories: {...}, ... }
export const EVENTS = [ { title: '...', date: '...', venue: '...' }, ... ]
// etc.
```

| What to change | File |
|---|---|
| Text, stats, event data | `src/data/content.js` |
| Colors & glass styles | `src/styles/index.css` → `@theme { }` block |
| Hero athlete image | Replace `public/hero-model.jpg` with a transparent PNG |
| Social links & brand name | `src/components/sections/Footer.jsx` |
| SEO title, description, OG image | `index.html` |

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

<div align="center">

## 💼 Want this for YOUR fitness brand?

> **Like this design? I can build a fully customized version of this site for your personal fitness brand, gym, coaching business, or wellness startup.**
>
> Custom logo · your color palette · your content · your domain · deployed & ready.

**📩 Get in touch:**

[![Email](https://img.shields.io/badge/Email-Contact%20Me-3B7BF6?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your@email.com)
[![Instagram](https://img.shields.io/badge/Instagram-@yourhandle-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/yourhandle)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourprofile)

*Response within 24 hours · Project turnaround 3–7 days*

---

Made with ❤️ and a lot of `npm run dev`

</div>
