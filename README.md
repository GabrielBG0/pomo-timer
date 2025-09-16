# Pomo Timer

A simple Pomodoro timer web app built with Next.js. This project provides a minimal, focused timer UI so you can work in time-boxed sessions and take regular breaks — ideal when following the Pomodoro Technique.

Quick links
- Repository: https://github.com/GabrielBG0/pomo-timer
- Live (recommended): Deploy to Vercel for zero-config hosting

---

## Features

- Lightweight Next.js app (App Router)
- Easy to run locally with npm / yarn / pnpm / bun
- Start / pause / reset timer
- Configurable session and break lengths (edit in the UI)
- Optimized for modern browsers; ready to deploy to Vercel

(If you’d like, I can add screenshots, demo GIFs, or badges.)

---

## Getting started

Prerequisites
- Node.js 16+ (or your preferred supported version for Next.js)
- npm / yarn / pnpm / bun

1. Clone the repo
```bash
git clone https://github.com/GabrielBG0/pomo-timer.git
cd pomo-timer
```

2. Install dependencies (pick one)
```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 in your browser. The app uses the `app` directory — start editing `app/page.tsx` to modify the home page.

---

## Available scripts

Common scripts you should find in package.json:

- `dev` — start the Next.js development server
- `build` — build the app for production
- `start` — run the production build locally
- `lint` — run linter (if configured)
- `format` — run code formatter (if configured)

Example:
```bash
npm run build
npm start
```

---

## Deployment

The easiest way to deploy is Vercel:

1. Push your branch to GitHub
2. Import the repository to Vercel (https://vercel.com/new)
3. Use the default settings — Vercel detects Next.js automatically

You can also deploy to any provider that supports Node.js and Next.js builds.

---

## Roadmap / Ideas

- Add sound/notification options for session end
- Persist settings in localStorage
- Add keyboard shortcuts
- Provide presets (e.g., classic 25/5 Pomodoro)
