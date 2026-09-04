export type WorkProject = {
  name: string;
  period: string;
  org: string;
  tagline: string;
  description: string;
  role: string;
  contributions: string[];
  stack: string[];
};

export const workProjects: WorkProject[] = [
  {
    name: "StayCloud",
    period: "abr. 2026 – o momento",
    org: "Sourei",
    tagline: "Painel de controle para hospedagem web, cloud, VPS e serviços digitais",
    description:
      "Client area que unifica gestão de clientes, faturamento, provisionamento e suporte sobre o WHMCS. Ecossistema com painel principal, checkout dedicado, tema de autenticação, portal de documentação e um servidor MCP que expõe a API do WHMCS como ferramentas para agentes.",
    role: "Full Stack Developer e Product Owner",
    contributions: [
      "Autenticação e identidade: login OIDC com WHMCS, Google OAuth, SSO do client area e admin, 2FA via SSO e ciclo completo de logout/sessão com rollback controlado por ambiente.",
      "Checkout dedicado em SvelteKit: login delegado ao WHMCS com fallback legado, reaproveitamento de fatura em nova tentativa de pagamento e rastreamento de cliques de afiliados.",
      "Tema de autenticação e hooks em PHP no WHMCS (login, 2FA, reset de senha, consentimento OAuth), com separação por destino de publicação.",
      "Convites de equipe e onboarding com fluxo OIDC endurecido, integração cPanel/WHM (MySQL remoto) e otimização de I/O do coletor de métricas.",
      "Portal técnico de documentação (Next.js + Fumadocs) e contribuições no servidor MCP do WHMCS (config, auth admin, testes).",
    ],
    stack: [
      "SvelteKit 2",
      "Svelte 5",
      "TypeScript",
      "Tailwind CSS 4",
      "Node.js",
      "PHP / WHMCS",
      "MySQL",
      "Supabase (Postgres)",
      "Proxmox",
      "cPanel/WHM",
      "Iugu · Pagar.me",
      "Vitest · Playwright",
      "Docker · Kubernetes",
    ],
  },
  {
    name: "Wascer",
    period: "abr. 2025 – o momento",
    org: "Sourei",
    tagline: "SaaS de GTM Server-Side Hosting com provisionamento automático em Kubernetes",
    description:
      "Plataforma multi-tenant por workspace que provisiona containers dedicados de Google Tag Manager server-side, com domínio próprio, billing, métricas em tempo real e integrações Google. Back-end NestJS em monorepo (API, worker, data API e cron) e front-end Next.js.",
    role: "Full Stack Developer",
    contributions: [
      "Infraestrutura de internacionalização do dashboard (Context + JSON, helper server-side) e varredura completa de tradução EN/PT-BR em auth, containers, billing, integrações, afiliados e métricas.",
      "Seletor de idioma no header e no dashboard, com rotas segmentadas por locale.",
      "Fluxo de contact-sales com input telefônico internacional, país padrão por locale e máscara BR.",
      "Documentação de soluções integrada ao produto e evolução do front-end com shadcn/Radix, Zustand e TanStack Query.",
      "Atuação junto a serviços NestJS, Prisma/PostgreSQL, filas (RabbitMQ/Bull), Redis, Keycloak SSO e atualizações em tempo real via Socket.IO/SSE.",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui · Radix",
      "TanStack Query",
      "Zustand",
      "next-intl",
      "NestJS 11",
      "Prisma · PostgreSQL",
      "Redis",
      "RabbitMQ · Bull",
      "Kubernetes",
      "Keycloak",
      "AWS S3",
    ],
  },
];

export type PublishedProject = {
  name: string;
  url: string;
  image: string;
  alt: string;
  kind: string;
  stack: string;
  description: string;
  tags: string[];
};

export const publishedProjects: PublishedProject[] = [
  {
    name: "Wascer CMS",
    url: "https://cms.wascer.com/",
    image: "/images/wascer-cms-preview-generated.png",
    alt: "Preview do projeto Wascer CMS, central de ajuda com FAQ, documentação e blog",
    kind: "Projeto real",
    stack: "WordPress · Help Center · Bilíngue",
    description:
      "Central de ajuda publicada para a Wascer, com tema WordPress customizado, FAQ, documentação, blog, release notes, busca via REST API e navegação pensada para autoatendimento.",
    tags: ["Polylang", "REST API", "Dark Mode"],
  },
  {
    name: "BEWEAR Store",
    url: "https://bewear-bootcamp-taupe.vercel.app/",
    image: "/images/bewear-preview.png",
    alt: "Preview do projeto BEWEAR Store",
    kind: "Projeto real",
    stack: "Next.js · Drizzle · Stripe",
    description:
      "E-commerce com Next.js App Router, TypeScript, Drizzle ORM, Postgres, autenticação com Google, checkout via Stripe e base componentizada com shadcn/ui.",
    tags: ["App Router", "Postgres", "Webhooks"],
  },
  {
    name: "FinTrack",
    url: "https://dashboard-financeira-three.vercel.app/",
    image: "/images/fintrack-preview.svg",
    alt: "Preview do projeto FinTrack, dashboard financeiro conectado a API própria",
    kind: "Projeto real",
    stack: "React · API REST · JWT",
    description:
      "Dashboard financeiro full stack com cadastro, login, autenticação JWT, refresh de sessão, resumo por período e CRUD de transações consumindo uma API própria.",
    tags: ["React Query", "Prisma", "PostgreSQL"],
  },
  {
    name: "Task Manager",
    url: "https://task-manager-omega-beige.vercel.app/",
    image: "/images/task-manager-preview.png",
    alt: "Preview do projeto Task Manager",
    kind: "Projeto real",
    stack: "React · JSON Server · Vercel",
    description:
      "Gerenciador de tarefas com dashboard, separação por períodos do dia, atualização de status e acompanhamento visual de consumo de água.",
    tags: ["React Query", "CRUD", "UI Dashboard"],
  },
];

export type CaseSection = {
  title: string;
  text?: string;
  items?: string[];
  tags?: string[];
};

export type CaseStudy = {
  id: string;
  name: string;
  status: string;
  stackLine: string;
  image: string;
  alt: string;
  summary: string;
  cardTags: string[];
  subtitle: string;
  description: string;
  heroTags: string[];
  video: { src: string; caption: string };
  sections: CaseSection[];
  note: string;
};

export const crmCase: CaseStudy = {
  id: "crm-case",
  name: "CRM Operacional para loja de caminhões orientado à demanda",
  status: "Projeto em andamento",
  stackLine: "React 19 · Vite · Tailwind CSS v4",
  image: "/images/crm-preview.svg",
  alt: "Preview do projeto CRM operacional para gestão de negócios no setor de veículos pesados",
  summary:
    "Sistema interno voltado à operação comercial de uma empresa do setor de veículos pesados, com foco em demanda, funil, margem real, estoque e relacionamento. Nasceu em um nicho específico, mas com arquitetura preparada para outras operações comerciais complexas.",
  cardTags: ["Demanda primeiro", "Estoque", "Serviços", "Margem real"],
  subtitle:
    "Projeto em andamento para estruturar CRM, estoque, serviços e inteligência comercial em um único fluxo operacional.",
  description:
    "CRM operacional desenvolvido para atender uma operação comercial do segmento de veículos pesados, estruturado para organizar demanda, negociação, estoque, serviços e relacionamento comercial. O produto foi pensado com lógica reutilizável para outros cenários de negociação consultiva.",
  heroTags: ["B2B", "CRM", "Operação Comercial"],
  video: {
    src: "/movies/crm.mp4",
    caption:
      "Vídeo de navegação do CRM com foco em fluxo operacional, dashboard, módulos e validações.",
  },
  sections: [
    {
      title: "Problema de negócio",
      text: "Oportunidades comerciais desse setor podem nascer antes de existir estoque disponível, enquanto informações de cliente, empresa, produto, serviço e custo operacional ficam espalhadas. Isso dificulta enxergar funil, margem real, capital parado e prioridade comercial.",
    },
    {
      title: "Solução proposta",
      text: "Unificar CRM, estoque, serviços e inteligência comercial em um fluxo único, orientado à demanda. O sistema conecta venda, operação, relacionamento e leitura executiva para apoiar decisão comercial sem expor regras proprietárias da operação.",
    },
    {
      title: "O que já foi feito",
      items: [
        "CRM com módulos de dashboard, negócios, estoque, pessoas, empresas, serviços e inteligência.",
        "Navegação por rotas com arquitetura moderna e visual próximo de software de operação.",
        "CRUD com persistência local via JSON Server.",
        "Formulários com validação usando React Hook Form e Zod.",
        "Base de componentes em padrão shadcn/Radix para evolução do design system.",
        "Regra central refletida no produto: o negócio nasce da demanda, e não do estoque.",
        "Cálculo e leitura de margem real considerando serviços e custos operacionais.",
        "Alertas e indicadores executivos para funil, capital parado, serviços em aberto e oportunidades.",
      ],
    },
    {
      title: "Módulos do sistema",
      tags: ["Dashboard", "Negócios", "Estoque", "Pessoas", "Empresas", "Serviços", "Inteligência Comercial"],
    },
    {
      title: "Stack atual",
      tags: [
        "React 19",
        "Vite",
        "Tailwind CSS v4",
        "React Router",
        "React Hook Form",
        "Zod",
        "Radix UI",
        "class-variance-authority",
        "Sonner",
        "JSON Server",
        "ESLint · Prettier · Husky",
      ],
    },
    {
      title: "Roadmap",
      items: [
        "Backend em Node.js com API REST.",
        "Banco relacional ou NoSQL conforme a evolução do produto.",
        "IA e integrações externas para ampliar inteligência comercial.",
      ],
    },
    {
      title: "Regras de negócio expostas",
      items: [
        "O CRM é orientado à demanda.",
        "O negócio pode começar sem produto vinculado.",
        "Pessoas e empresas organizam o relacionamento comercial.",
        "Produtos podem entrar antes, durante ou depois da oportunidade.",
        "Serviços impactam a margem real da operação.",
      ],
    },
    {
      title: "Público-alvo",
      items: [
        "Lojas e revendas de caminhões e operação B2B do setor automotivo pesado.",
        "Gestores comerciais, vendedores consultivos e times de estoque e operação.",
        "Empresas que precisam integrar CRM, operação e margem.",
      ],
    },
    {
      title: "Escalabilidade",
      text: "A modelagem foi pensada para ser adaptável a outros mercados com dinâmica semelhante: máquinas e equipamentos, implementos rodoviários, veículos comerciais, revendas especializadas e operações B2B com vendas consultivas.",
    },
    {
      title: "Status atual e próximos passos",
      text: "O produto já conta com base navegável, entidades estruturadas, regras centrais de domínio refletidas na interface e demonstração funcional em vídeo. A próxima etapa é consolidar backend, dados persistentes, integrações e inteligência comercial.",
    },
  ],
  note: "Case apresentado sem expor nomes da empresa, clientes, fornecedores, valores reais ou regras operacionais sensíveis.",
};
