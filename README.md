<div align="center">

# ✦ Firmansyah — Personal Portfolio

**A modern, minimal portfolio website built with Next.js 16 & Tailwind CSS.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## 📸 Preview

> Dark mode · Bento grid layout · Glassmorphism UI

---

## ✨ Features

- **Bento Grid** — dynamic card layout for sections (Hero, About, Projects, Clock, Connect)
- **Project Detail Pages** — per-project page with tech stack, use case, and prev/next navigation
- **Marquee Projects** — animated scrolling showcase of all works
- **Digital Clock** — real-time local clock in the bento card
- **Satoshi Font** — clean & modern sans-serif typography
- **Dark Mode** — dark-first design, consistent neutral palette
- **Glassmorphism** — subtle blur, border, and shadow effects throughout
- **SEO Ready** — metadata per page via Next.js `generateMetadata`

---

## 🗂️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout (font, metadata)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles & Satoshi font
│   ├── not-found.tsx       # Custom 404 page
│   └── project/
│       └── [slug]/
│           └── page.tsx    # Dynamic project detail page
│
├── components/
│   ├── bento-demo.tsx      # Main bento grid composition
│   ├── my-self.tsx         # Hero/intro card
│   ├── about-me.tsx        # About Me card with tech stack
│   ├── projects.tsx        # Marquee project list
│   ├── lets-connect.tsx    # Social links card
│   ├── blog-bento.tsx      # Blog link card
│   ├── icon.tsx            # Shared icon components
│   ├── client/
│   │   ├── digital-clock.tsx   # Real-time clock (client)
│   │   └── current-path.tsx    # Pathname display (client)
│   ├── magicui/
│   │   ├── bento-grid.tsx      # BentoCard & BentoGrid primitives
│   │   ├── marquee.tsx         # Infinite marquee animation
│   │   └── animated-shiny-text.tsx
│   └── ui/
│       └── button.tsx          # shadcn/ui Button
│
├── lib/
│   ├── data.ts             # Projects data source
│   └── utils.ts            # `cn()` utility
│
└── public/
    └── github.svg
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org/) | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Radix UI Icons](https://www.radix-ui.com/icons) | Icon set |
| [Lucide React](https://lucide.dev/) | Additional icons |
| [Satoshi Font](https://www.fontshare.com/fonts/satoshi) | Typography |
| [shadcn/ui](https://ui.shadcn.com/) | UI primitives (Button) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 18`
- npm / bun

### Installation

```bash
# Clone the repo
git clone https://github.com/arufars/portofolio-self.git
cd portofolio-self

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

---

## 📦 Adding a New Project

Edit [`lib/data.ts`](./lib/data.ts) and add a new entry to the `projects` array:

```ts
{
  slug: "my-new-project",       // used as URL: /project/my-new-project
  name: "My New Project",
  body: "Short description shown in the card.",
  description: "Full description shown on the detail page.",
  useCase: "Who is this for and why it was built.",
  techStack: ["Next.js", "TypeScript"],
  link: "https://your-live-url.com", // use "#" if not deployed yet
}
```

---

## 📄 License

MIT © [Firmansyah](https://github.com/arufars)
