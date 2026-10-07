# Pixelforge - React agency website

React 19 + Vite + React Router. No external fonts, images or scripts, so nothing can be
blocked by an ad-blocker (no `ERR_BLOCKED_BY_CLIENT`).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the build
```

## Structure

```
src/
  data/site.js       <- ALL text, prices, team, services (edit here to rebrand)
  components/        <- Navbar, Footer, Layout, cards, Reveal, Icon ...
  pages/             <- Home, About, Services, Packages, Team, Contact, NotFound
  hooks/usePageTitle.js
  index.css          <- design tokens + all styles
```

## To do before going live

- Replace placeholder content in `src/data/site.js` (name, email, team, testimonials, prices).
- Connect the contact form: see the `TODO` in `src/pages/Contact.jsx`
  (Firebase, Formspree, EmailJS or your own API).
- For Vercel, add a `vercel.json` with a rewrite to `/index.html` so deep links like `/about` work on refresh:
  `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`
