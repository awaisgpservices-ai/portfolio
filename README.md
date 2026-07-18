# Ghulam Mustafa — Portfolio Website

A premium, agency-grade portfolio site for a Guest Posting Expert & SEO
Specialist, built with **Next.js 14 (App Router)**, **Tailwind CSS**, and
**Framer Motion**.

## Tech stack

- Next.js 14 (App Router, `next/font`, `next/image`)
- Tailwind CSS (custom design tokens: navy / royal blue / ember orange)
- Framer Motion (scroll reveals, floating elements, animated counters)
- lucide-react (icon set)

## Project structure

```
rankorbit-portfolio/
├── app/
│   ├── layout.js        # Fonts, SEO metadata, root HTML shell
│   ├── page.js           # Assembles all sections
│   └── globals.css       # Design tokens, glassmorphism, buttons
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── WhyChooseMe.jsx
│   ├── Stats.jsx
│   ├── Portfolio.jsx
│   ├── Testimonials.jsx
│   ├── Process.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── public/
│   └── profile.jpg       # Profile photo
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Notes

- **Colors**: Dark Navy `#0B1F3A`, Royal Blue `#0A5CFF`, Ember Orange
  `#FF7A00` (CTA-only), White background — defined as Tailwind tokens in
  `tailwind.config.js` so they're reusable everywhere.
- **Fonts**: Poppins (display/headings) + Inter (body), loaded via
  `next/font/google` for automatic self-hosting and zero layout shift.
- **Contact form**: currently simulates a submit locally. Wire the
  `handleSubmit` function in `components/Contact.jsx` up to an API route,
  Formspree, or your email service of choice to receive real submissions.
- **Images**: replace `public/profile.jpg` to update the profile photo used
  in the hero and about sections.
- Respects `prefers-reduced-motion` and has visible keyboard focus states
  throughout.
