export const siteConfig = {
  name: "Daniel Wilson",
  role: {
    en: "Front-End Developer",
    pt: "Desenvolvedor Front-End",
  },
  location: "Carapicuíba, SP — Brasil",
  email: "danielcawil94@gmail.com",
  phone: "(11) 94636-3724",
  linkedin: "https://linkedin.com/in/danielwilsonalves",
  github: "https://github.com/Daniel25778",
  avatar: "/avatar.jpg", // <- Coloque sua foto em public/images/avatar.jpg
  cvPath: "/cv-daniel.pdf", // <- coloque o nome do seu arquivo aqui (deve estar na pasta public)
};
 
export const nav = {
  en: [
    { label: "About",       href: "#about" },
    { label: "Experience",  href: "#experience" },
    { label: "Projects",    href: "#projects" },
    { label: "Skills",      href: "#skills" },
    { label: "Contact",     href: "#contact" },
  ],
  pt: [
    { label: "Sobre",       href: "#about" },
    { label: "Experiência", href: "#experience" },
    { label: "Projetos",    href: "#projects" },
    { label: "Habilidades", href: "#skills" },
    { label: "Contato",     href: "#contact" },
  ],
};

export const hero = {
  en: {
    greeting: "Hello, I'm",
    tagline: "I craft clean, scalable front-end experiences.",
    description:
      "4 years building high-quality React, Next.js and TypeScript applications. Passionate about clean architecture, SOLID principles and meaningful user interfaces.",
    cta: "View my work",
    ctaSecondary: "Download CV",
  },
  pt: {
    greeting: "Olá, sou",
    tagline: "Crio experiências front-end limpas e escaláveis.",
    description:
      "4 anos construindo aplicações de alta qualidade com React, Next.js e TypeScript. Apaixonado por arquitetura limpa, princípios SOLID e interfaces significativas.",
    cta: "Ver projetos",
    ctaSecondary: "Baixar CV",
  },
};

export const about = {
  en: {
    title: "About me",
    paragraphs: [
      "I'm a Front-End Developer based in São Paulo with 4 years of experience specialised in React, Next.js and TypeScript. I care deeply about clean code, not just as a concept but as a daily practice — Clean Architecture, SOLID and Atomic Design are the lenses through which I approach every codebase.",
      "Throughout my career I've progressively taken on more technical responsibility, ultimately leading the front-end development of a national platform in partnership with SEBRAE and MDIC, targeting 200 thousand companies across Brazil.",
      "I'm also comfortable with mobile development (React Native), prototyping in Figma, and writing tests with Vitest and Testing Library. I thrive in collaborative environments where knowledge-sharing and quality are taken seriously.",
    ],
  },
  pt: {
    title: "Sobre mim",
    paragraphs: [
      "Sou desenvolvedor Front-End baseado em São Paulo com 4 anos de experiência especializado em React, Next.js e TypeScript. Me importo muito com código limpo, não só como conceito, mas como prática diária — Clean Architecture, SOLID e Atomic Design são as lentes pelas quais abordo cada projeto.",
      "Ao longo da carreira assumi progressivamente mais responsabilidade técnica, chegando a liderar o desenvolvimento front-end de uma plataforma nacional em parceria com SEBRAE e MDIC, com meta de atingir 200 mil empresas no Brasil.",
      "Também tenho experiência com desenvolvimento mobile (React Native), prototipação no Figma e escrita de testes com Vitest e Testing Library. Trabalho bem em ambientes colaborativos onde troca de conhecimento e qualidade são levadas a sério.",
    ],
  },
};

export type Experience = {
  company: string;
  role: { en: string; pt: string };
  period: string;
  type: { en: string; pt: string };
  bullets: { en: string[]; pt: string[] };
};

export const experiences: Experience[] = [
  {
    company: "SENAI São Paulo",
    role: { en: "Full Stack Systems Developer — Mid-level", pt: "Desenvolvedor de Sistemas Full Stack — Pleno" },
    period: "Feb 2025 – Mar 2026",
    type: { en: "Full-time", pt: "CLT" },
    bullets: {
      en: [
        "Led front-end development, taking ownership of technical decisions across all team deliverables.",
        "Built applications with Next.js, React and TypeScript using SSR and SSG strategies.",
        "Managed application state with Redux and React Query, improving performance and data consistency.",
        "Implemented 10+ REST API integrations per project, including authentication and access control flows.",
      ],
      pt: [
        "Fui o principal desenvolvedor front-end do time, assumindo protagonismo técnico nas entregas.",
        "Desenvolvi aplicações com Next.js, React e TypeScript utilizando SSR e SSG.",
        "Gerenciei estado com Redux e React Query, melhorando performance e controle de dados.",
        "Implementei mais de 10 integrações com APIs REST por projeto, incluindo autenticação e controle de acesso.",
      ],
    },
  },
  {
    company: "SENAI São Paulo",
    role: { en: "Front-End Systems Developer — Junior", pt: "Desenvolvedor de Sistemas Front-End — Júnior" },
    period: "Apr 2023 – Feb 2025",
    type: { en: "Full-time", pt: "CLT" },
    bullets: {
      en: [
        "Developed 20–50 reusable components for web and mobile applications.",
        "Identified and fixed bugs, improving application performance and stability.",
        "Collaborated on prototyping 10+ screens in Figma, bridging design and development.",
        "Participated in mobile development with React Native.",
      ],
      pt: [
        "Desenvolvi entre 20 e 50 componentes reutilizáveis para aplicações web e mobile.",
        "Identifiquei e corrigi bugs, contribuindo para a melhora de performance e estabilidade.",
        "Colaborei na prototipagem de mais de 10 telas no Figma.",
        "Participei do desenvolvimento mobile com React Native.",
      ],
    },
  },
  {
    company: "SENAI São Paulo",
    role: { en: "Full Stack Developer — Intern", pt: "Desenvolvedor Full Stack — Estagiário" },
    period: "Jun 2022 – Apr 2023",
    type: { en: "Internship", pt: "Estágio" },
    bullets: {
      en: [
        "Contributed to 2 internal projects in a small team (3 devs), handling front-end tasks.",
        "Built ~20 reusable components and documented the main ones in Storybook, reducing rework.",
        "Deepened understanding of Atomic Design and component architecture best practices.",
      ],
      pt: [
        "Contribuí no desenvolvimento de 2 projetos internos em time de 3 devs.",
        "Desenvolvi cerca de 20 componentes reutilizáveis, documentando os principais no Storybook.",
        "Estudei Atomic Design e boas práticas de componentização.",
      ],
    },
  },
];

export type Project = {
  slug: string;
  title: string;
  featured: boolean;
  tags: string[];
  description: { en: string; pt: string };
  longDescription: { en: string; pt: string };
  image: string; // path to /public/images/projects/
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "brasil-mais-produtivo",
    title: "Brasil Mais Produtivo",
    featured: true,
    tags: ["React", "TypeScript", "Tailwind", "Material UI", "Clean Architecture", "Figma"],
    description: {
      en: "National productivity platform in partnership with SEBRAE, SENAI and MDIC, targeting 200k companies and 93k in-person attendees by 2027.",
      pt: "Plataforma nacional de produtividade em parceria com SEBRAE, SENAI e MDIC, com meta de impactar 200 mil empresas e atender presencialmente mais de 93 mil até 2027.",
    },
    longDescription: {
      en: "I was the lead front-end developer for this national-scale platform offering free access to courses, materials and tools on management and productivity. I applied Clean Architecture, SOLID and Atomic Design throughout, and handled all Figma prototyping and usability presentations.",
      pt: "Fui o principal desenvolvedor front-end dessa plataforma de escala nacional com acesso gratuito a cursos, materiais e ferramentas sobre gestão e produtividade. Apliquei Clean Architecture, SOLID e Atomic Design, além de realizar toda a prototipagem no Figma.",
    },
    image: "https://cms.fiemt.ind.br/arquivos/ist/images/novobrasilmais%20produtivo.jpg",
    liveUrl: "https://www.plataformaprodutividade.com.br/",
    repoUrl: undefined,
  },
  // ─── Adicione seus próprios projetos abaixo ───────────────────────────────
  // {
  //   slug: "meu-projeto",
  //   title: "Meu Projeto",
  //   featured: false,
  //   tags: ["Next.js", "TypeScript"],
  //   description: { en: "...", pt: "..." },
  //   longDescription: { en: "...", pt: "..." },
  //   image: "/images/projects/meu-projeto.png",
  //   liveUrl: "https://...",
  //   repoUrl: "https://github.com/...",
  // },
];

export type Skill = {
  name: string;
  url: string;
  icon?: string;
};

export const skillGroups: { label: { en: string; pt: string }; skills: Skill[] }[] = [
  {
    label: { en: "Front-End", pt: "Front-End" },
    skills: [
      { name: "React", url: "https://react.dev", icon: "https://react.dev/favicon.ico" },
      { name: "Next.js", url: "https://nextjs.org", icon: "https://nextjs.org/favicon.ico" },
      { name: "TypeScript", url: "https://www.typescriptlang.org", icon: "https://www.typescriptlang.org/favicon.ico" },
      { name: "JavaScript", url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/960px-JavaScript-logo.png" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com", icon: "https://tailwindcss.com/favicon.ico" },
      { name: "Material UI", url: "https://mui.com", icon: "https://img.icons8.com/color/1200/material-ui.jpg" },
      { name: "Redux", url: "https://redux.js.org", icon: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
      { name: "React Query", url: "https://tanstack.com/query/latest", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/react-query-icon-xjukes5xosrrwg3y3ics1f.png/react-query-icon-2dw36yx2b016w37mbipyn.png?_a=DATAiZAAZAA0" }
    ],
  },
  {
    label: { en: "Testing & Quality", pt: "Testes & Qualidade" },
    skills: [
      { name: "Vitest", url: "https://vitest.dev", icon: "https://vitest.dev/favicon.ico" },
      { name: "Jest", url: "https://jestjs.io", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOsYeOTYauafdERDWnI4WdMnpGPRFwsir0A&s" },
      { name: "Testing Library", url: "https://testing-library.com", icon: "https://images.seeklogo.com/logo-png/43/1/testing-library-logo-png_seeklogo-434973.png" },
      { name: "Selenium", url: "https://www.selenium.dev", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png" }
    ],
  },
  {
    label: { en: "Architecture", pt: "Arquitetura" },
    skills: [
      { name: "Clean Architecture", url: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" },
      { name: "SOLID", url: "https://en.wikipedia.org/wiki/SOLID" },
      { name: "Atomic Design", url: "https://bradfrost.com/blog/post/atomic-web-design/" },
      { name: "TDD", url: "https://martinfowler.com/bliki/TestDrivenDevelopment.html" }
    ],
  },
  {
    label: { en: "Mobile", pt: "Mobile" },
    skills: [
      { name: "React Native", url: "https://reactnative.dev", icon: "https://reactnative.dev/favicon.ico" },
      { name: "Kotlin", url: "https://kotlinlang.org", icon: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" }
    ],
  },
  {
    label: { en: "Back-End & DB", pt: "Back-End & BD" },
    skills: [
      { name: "Node.js", url: "https://nodejs.org", icon: "https://nodejs.org/favicon.ico" },
      { name: "TypeScript", url: "https://www.typescriptlang.org", icon: "https://www.typescriptlang.org/favicon.ico" },
      { name: "PostgreSQL", url: "https://www.postgresql.org", icon: "https://www.postgresql.org/favicon.ico" },
      { name: "MySQL", url: "https://www.mysql.com", icon: "https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png" }
    ],
  },
  {
    label: { en: "Design & Tools", pt: "Design & Ferramentas" },
    skills: [
      { name: "Figma", url: "https://www.figma.com", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/500px-Figma-logo.svg.png" },
      { name: "Storybook", url: "https://storybook.js.org", icon: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/storybook.png" },
      { name: "Swagger", url: "https://swagger.io", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/swagger.png" },
      { name: "Azure DevOps", url: "https://azure.microsoft.com/services/devops/", icon: "https://azure.microsoft.com/favicon.ico" },
    ],
  },
];

export const education = {
  main: [
    {
      institution: "FIAP – SP",
      degree: { en: "Systems Analysis and Development", pt: "Análise e Desenvolvimento de Sistemas" },
      period: "Feb 2022 – Dec 2024",
      logo: "https://s3.amazonaws.com/wpfiap/wp-content/uploads/2026/05/fiap-share-img.png",
      label: { en: "Download Certificate", pt: "Baixar certificado" },
      certificateUrl: "/diploma-facul.pdf",
    },
    {
      institution: "SENAI São Paulo",
      degree: { en: "Technical: Systems Development", pt: "Técnico em Desenvolvimento de Sistemas" },
      period: "Feb 2021 – Jun 2022",
      logo: "https://yt3.googleusercontent.com/wyGnsuVLCBoHStdhQ3Tj7Wr48yb_Oi2e1OmP2Rly99xB6wwe66T64bhCNDZkP5xxNHxF-lsE1A=s900-c-k-c0x00ffffff-no-rj",
      label: { en: "Download Certificate", pt: "Baixar certificado" },
      certificateUrl: "/diploma-facul.pdf",
    },
  ],
  complementary: [
    {
      name: { en: "Advanced React & Next.js", pt: "React Avançado & Next.js" },
      provider: "Cod3r",
      year: "2023",
      certificateUrl: "https://your-certificate-link.com",
    },
    {
      name: { en: "UI Design for Developers", pt: "UI Design para Desenvolvedores" },
      provider: "Origamid",
      year: "2022",
      certificateUrl: "https://your-certificate-link.com",
    }
  ]
};

export const contact = {
  en: {
    title: "Let's work together",
    subtitle: "Open to new opportunities and interesting challenges.",
    cta: "Send an email",
  },
  pt: {
    title: "Vamos trabalhar juntos",
    subtitle: "Aberto a novas oportunidades e desafios interessantes.",
    cta: "Enviar e-mail",
  },
};
