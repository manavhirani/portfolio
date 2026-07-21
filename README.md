# Portfolio

Personal site for [Manav Hirani](https://manavhirani.vercel.app).

## Features

- **Dual UI modes** (toggle in the nav):
  - **Retro** – 2000s-style HTML (tables, `<font>`, marquee, ridge borders)
  - **Modern** – Next.js + Tailwind + shadcn-style components
- **Light / dark / system** theme toggle (works in both modes)
- **Timeline home** – resume-driven chronology (Sandisk · Astrid/Helix/Lattice, X-Map, education, publication)
- Blog posts pulled from the `manavhirani/blog` GitHub repo

## Develop

```bash
cd /Users/manav/Documents/minimal/portfolio
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port printed in the terminal).

Preferences for style mode are stored in `localStorage` under `portfolio-style-mode`.

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind · Radix/shadcn · MDX · Vercel Analytics
