# Ghulam Mustafa — Portfolio Website

A premium, animated Next.js + Tailwind CSS portfolio site for a Guest
Posting & SEO expert.

## Tech stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — custom design tokens (colors, shadows, animations)
- **Framer Motion** — scroll reveals, hero entrance, animated counters
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.js        Root layout, fonts, SEO metadata
  page.js           Assembles all sections
  globals.css        Tailwind + custom utility classes
  robots.js / sitemap.js
components/
  Navbar.jsx
  Hero.jsx           Signature "Authority Climb" ranking graphic
  Stats.jsx           Animated counters
  About.jsx
  Services.jsx
  WhyChooseMe.jsx
  Portfolio.jsx
  Testimonials.jsx
  Process.jsx         Timeline
  Contact.jsx          Contact form
  Footer.jsx
  ui/
    Reveal.jsx        Scroll-triggered fade/slide wrapper
    Counter.jsx        Spring-animated number counter
public/
  profile.jpg          Profile photo
```

## Customizing

- **Colors / fonts**: edit `tailwind.config.js` (`navy`, `royal`, `ember`
  tokens) and the font imports in `app/layout.js`.
- **Copy**: all section content lives directly inside each component in
  `components/`.
- **Contact form**: `components/Contact.jsx` currently only sets local
  state on submit. Wire it up to a form service (e.g. Formspree, Resend)
  or create an API route at `app/api/contact/route.js` to actually send
  messages.
- **Profile photo**: replace `public/profile.jpg` with a new image (same
  filename, or update the `src` in `components/About.jsx`).

## Notes

- Respects `prefers-reduced-motion` for accessibility.
- Fully responsive from mobile through desktop.
- SEO metadata, `robots.js`, and `sitemap.js` are pre-configured — update
  the domain in `app/layout.js`, `app/robots.js`, and `app/sitemap.js` if
  it changes.
