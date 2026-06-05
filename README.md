<div align="center">

# ✦ Gender & Society PH ✦

### *Understanding Gender, Empowering Society — a modern, interactive journey through Philippine gender topics*

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TanStack Start](https://img.shields.io/badge/TanStack_Start-1.0-FF4154?style=flat-square&logo=react-query&logoColor=white)](https://tanstack.com/start)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Motion-12-FF0080?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion)

[**Live Preview**](https://gensocph.vercel.app/) · [**Pages**](#-pages) · [**Quiz Features**](#-interactive-features)

</div>

---

## 🌸 Overview

**Gender & Society PH** is an elegant, interactive web experience that explores gender across Philippine **history, family, labor, academe, media, and law**. It pairs research-grade content with a glassmorphic lavender aesthetic, fluid motion, and gamified learning — turning dense civic topics into a journey anyone can follow.

> *"Understanding gender begins with seeing society clearly."*

---

## ✨ Highlights

- 🎨 **Glassmorphic lavender design** — soft OKLCH palette, gradient blobs, floating nav
- 📚 **Dedicated pages** — each pillar gets its own focused space
- 🃏 **Swipe-to-learn deck** — Tinder-style cards with 50+ bite-sized facts
- ✨ **Fun Fact Generator** — random Philippine gender trivia at the tap of a button
- 🏆 **Knowledge Quiz** — multi-set quiz with live scoring & achievements
- 📱 **Fully responsive** — graceful on mobile, tablet, and desktop
- ⚡ **Lightning-fast** — Vite 7 + TanStack Start with SSR + smart preloading
- ♿ **Accessible** — semantic HTML, keyboard-friendly, screen-reader aware

---

## 🗺️ Pages

Each page has its own route, metadata, and dedicated section component.

| # | Page | Route | What's Inside |
|---|---|---|---|
| 1 | **Home** | `/` | Hero, overview, featured pillars, and pathways into the site |
| 2 | **History** | `/history` | From pre-colonial `babaylan` and bilateral kinship to 1937 women's suffrage and beyond |
| 3 | **GAD** | `/gad` | Gender & Development frameworks, the Magna Carta of Women (RA 9710), 5% GAD budget rule |
| 4 | **Family** | `/family` | Matriarchal tendencies, the *ilaw ng tahanan*, extended-family co-parenting, evolving roles |
| 5 | **Labor** | `/labor` | OFW realities, the wage gap, *Batas Kasambahay*, and women in the modern workforce |
| 6 | **Academe** | `/academe` | Higher-ed enrollment trends, K–12 gender lens, UP Center for Women's & Gender Studies |
| 7 | **Media** | `/media` | Representation in OPM, TV, cinema, and the queer icons reshaping mainstream culture |
| 8 | **Laws** | `/laws` | A guided reference to RA 9262, RA 11313, RA 8353, RA 11648, RA 11210, the SOGIE Bill, and more |
| 9 | **Interactive** | `/interactive` | Three gamified learning experiences — see below ⬇️ |
| 10 | **Resources** | `/resources` | Curated readings, citations, and links for deeper study |
| 11 | **Members** | `/members` | The team behind the project, with photos, roles, and socials |

---

## 🎮 Interactive Features

The `/interactive` page is the heart of the gamified learning experience. It pairs three modes designed for short attention spans:

### 🃏 1. Swipe to Learn

A Tinder-style card deck of **50+ bite-sized facts** spanning **Laws, History, Culture, Family, Labor, Academe, Media, and Now** — each tagged for context.

| Detail | Value |
|---|---|
| Cards in deck | 50 |
| Categories | Fact · Law · History · Culture · Family · Labor · Academe · Media · Now |
| Interaction | Drag horizontally → swipe past **120px** to advance |
| Visual stack | Top 5 cards rendered with depth, scale, and rotation |
| Looping | Cards recycle to the bottom — infinite deck |
| Animation | Powered by **Framer Motion** (`useMotionValue`, `useTransform`) |
| SSR-safe | Deterministic order on first paint, shuffled after hydration |


---

### ✨ 2. Fun Fact Generator

Hit one button → get a random nugget of Philippine gender history, law, or trivia.

- Pulls from the curated `FUN_FACTS` list in `src/lib/site-data.ts`
- Animated transition between facts (`AnimatePresence` mode="wait")
- **SSR-safe**: shows the first fact on initial paint, randomizes on client
- Button: *Blow My Mind* ✨

---

### 🏆 3. Knowledge Quiz

A multi-set quiz that randomly serves one of several question packs on every load.

| Feature | Behavior |
|---|---|
| Source | `QUIZ_SETS` in `src/lib/site-data.ts` (multiple shuffled packs) |
| Questions per round | Defined per set (typically **10**) |
| Format | Multiple choice — 4 options per question |
| Feedback | Instant green ✓ / red ✗ highlight, with a 900ms reveal pause |
| Live score | Tracked in header: `Question X of N · Score: Y` |
| Progress bar | Animated gradient bar that fills as you go |
| Result screen | Trophy icon, big `score/total`, percentage, and a tier message: |
| | • **≥ 80%** → *Outstanding!* |
| | • **≥ 50%** → *Nice work — keep learning!* |
| | • **< 50%** → *Plenty more to explore.* |
| Replay | "Try again" button picks a **new random quiz set** |

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | TanStack Start v1 (React 19, SSR) |
| **Language** | TypeScript 5 (strict) |
| **Styling** | Tailwind CSS v4 + custom OKLCH tokens |
| **Animation** | Framer Motion 12 |
| **UI Primitives** | shadcn/ui · Radix UI |
| **Icons** | Lucide React |
| **Bundler** | Vite 7 |
| **Runtime** | Bun |

---

## 📁 Project Structure

```
src/
├── assets/
│   └── members/           → Team photos
├── components/
│   ├── FloatingNav.tsx    → Always-accessible top navigation
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── PageShell.tsx      → Consistent page wrapper (eyebrow, icon, title)
│   ├── Section.tsx        → Section + SectionHeader primitives
│   ├── sections/          → One section component per page
│   │   ├── HistorySection.tsx
│   │   ├── GADSection.tsx
│   │   ├── FamilySection.tsx
│   │   ├── LaborSection.tsx
│   │   ├── AcademeSection.tsx
│   │   ├── MediaSection.tsx
│   │   ├── LawsSection.tsx
│   │   ├── InteractiveSection.tsx   ← Swipe deck, Fact generator, Quiz
│   │   ├── ResourcesSection.tsx
│   │   └── IntroSection.tsx
│   └── ui/                → shadcn primitives
├── hooks/                 → Custom React hooks
├── lib/
│   └── site-data.ts       → NAV_ITEMS, MEMBERS, FUN_FACTS, QUIZ_SETS, photos
├── routes/                → File-based routing (TanStack)
│   ├── __root.tsx         → App shell + <Outlet />
│   ├── index.tsx          → Home
│   └── *.tsx              → One file = one page
└── styles.css             → Design tokens & global styles
```

---

## 🎨 Design System

Colors live as **semantic tokens** in `src/styles.css` using **OKLCH** for perceptual accuracy.

```css
--primary:      oklch(0.52 0.22 285);   /* deep violet */
--primary-glow: oklch(0.72 0.17 300);   /* lilac glow  */
--lavender:     oklch(0.92 0.04 295);   /* soft mist   */
--lilac:        oklch(0.82 0.09 300);   /* highlight   */
--background:   oklch(0.99 0.005 290);  /* near-white  */
--ink:          oklch(0.18 0.04 270);   /* deep ink    */
```

Use the utilities `.glass`, `.glass-strong`, `.gradient-text`, `.gradient-primary`, `.shadow-glow`, `.animate-float`, and `.animate-blob` for the signature look.

---

## 🧩 Adding Quiz Questions or Facts

Both quiz sets and fun facts are pure data — edit `src/lib/site-data.ts`:

```ts
// Add a new fun fact
export const FUN_FACTS = [
  // ...existing facts
  "Your new fact here.",
];

// Add a new quiz set (one of many random packs)
export const QUIZ_SETS = [
  // ...existing sets
  [
    {
      q: "Your question here?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: 2, // index of the correct option
    },
    // ...more questions
  ],
];
```

---

## 📜 License

Released for educational purposes. Cavite State University - Imus Campus
---

<div align="center">

© 2026 Gender & Society PH Team.


</div>
