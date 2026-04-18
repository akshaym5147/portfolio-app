# Akshay — Portfolio (Frontend)

A warm, developer-vibe portfolio site built with **React 19 + Tailwind CSS + shadcn/ui**.

All data is mocked in `src/mock.js` — swap it with your own info to personalize.

---

## Quick start

Requirements:

- **Node.js 18+**
- **Yarn** (recommended) or npm

```bash
# 1. install dependencies
yarn install

# 2. start the dev server
yarn start
```

The app runs at **http://localhost:3000**.

> The project uses CRACO to extend Create React App. No extra config needed.

---

## Build for production

```bash
yarn build
```

The static, deployable bundle is emitted to `build/`. You can drop it on Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3 — anywhere that serves static files.

---

## Project structure

```
src/
├── App.js                 # routes + layout
├── App.css                # global warm-theme styles (grain, caret, marquee)
├── index.css              # Tailwind layers + CSS variables
├── mock.js                # ⬅ All portfolio content lives here
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Testimonials.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx        # form saves messages to localStorage
│   ├── Footer.jsx
│   ├── SectionLabel.jsx
│   └── ui/                # shadcn components
└── hooks/
    └── use-toast.js
```

---

## Personalizing the site

Edit `src/mock.js`:

- `profile` — your name, role, email, socials, portrait image URL
- `aboutParagraphs` — the About copy
- `skills` — categories + skill levels
- `experience` — jobs (company, role, bullets, stack)
- `projects` — project cards (image, tags, description)
- `education` — degrees / programs
- `testimonials` — quotes
- `posts` — blog entries
- `navLinks` — nav items (labels + anchor hrefs)

Tweak colors & fonts:

- Palette: `tailwind.config.js` → `theme.extend.colors` (`cream`, `amber`, `ink`, etc.)
- Fonts: `src/index.css` → the `@import` URL from Google Fonts (currently Fraunces + Inter + JetBrains Mono)

---

## Notes

- The **contact form** is frontend-only and saves messages to `localStorage` under the key `akshay.portfolio.messages`. Replace `Contact.jsx`'s submit handler with a real API call if/when you add a backend.
- Images are pulled from Unsplash; swap URLs in `mock.js` for your own.
- Icons are from `lucide-react`.
- Toast notifications use `sonner`.

Enjoy!
