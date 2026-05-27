# Daniel Wilson — Portfolio

Portfolio profissional com Next.js 15, TypeScript, Tailwind CSS, GSAP, tema claro/escuro e bilíngue PT/EN.

## Rodando localmente

```bash
npm install
npm run dev
```

## Personalizando

Todo o conteúdo está em **`lib/data.ts`** — edite só esse arquivo.

### Sua foto
1. Coloque em `public/images/avatar.jpg`
2. Em `components/sections/About.tsx`, descomente o `<Image>` e comente o placeholder.

### Screenshots dos projetos
1. Coloque em `public/images/projects/nome.png`
2. Em `components/sections/Projects.tsx`, descomente o `<Image>`.

### Adicionar projetos
Em `lib/data.ts`, adicione no array `projects`:
```ts
{
  slug: "meu-projeto",
  title: "Meu Projeto",
  featured: false,
  tags: ["Next.js"],
  description: { en: "...", pt: "..." },
  longDescription: { en: "...", pt: "..." },
  image: "/images/projects/meu-projeto.png",
  liveUrl: "https://...",
  repoUrl: "https://github.com/...",
}
```

### CV em PDF
Coloque em `public/cv-daniel-wilson.pdf`.

## Deploy no GitHub Pages

1. Crie o repo no GitHub
2. Se o repo NÃO for `seuuser.github.io`, edite `.github/workflows/deploy.yml`:
   `NEXT_PUBLIC_BASE_PATH: /nome-do-repo`
3. Settings → Pages → Source: **GitHub Actions**
4. Push na branch `main` — o deploy é automático.

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
# portifolio-daniel-wilson
