# Daniel Wilson — Portfolio

![Demo](./public/portfolio.gif)

Portfolio profissional com Next.js 15, TypeScript, Tailwind CSS, GSAP, tema claro/escuro e bilíngue PT/EN.

## Stack

- Next.js 15 (static export)
- TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger
- next-themes
- Fraunces (display) + DM Sans (body) + JetBrains Mono

## Estrutura

```
portfolio/
├── app/
│   ├── globals.css        # Design tokens (CSS vars)
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/  (Navbar, Footer, ThemeProvider)
│   └── sections/ (Hero, About, Experience, Projects, Skills, Contact)
├── lib/
│   ├── data.ts   ← EDITE AQUI
│   └── lang.tsx
└── public/
    ├── images/avatar.jpg
    ├── images/projects/
    └── cv-daniel-wilson.pdf
```
