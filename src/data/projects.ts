export type WorkProject = {
  name: string;
  period: string;
  org: string;
  tagline: string;
  description: string;
  role: string;
  result?: string;
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
      "Plataforma de hospedagem com painel, checkout e integrações de faturamento e provisionamento. Atuo na evolução do produto e na migração gradual para o Commerce Core, um backend central em NestJS que unifica identidade e contas, mantendo o WHMCS como motor comercial.",
    role: "Full Stack Developer e Product Owner",
    result: "De 4 s para menos de 1 s na resolução de conta",
    contributions: [
      "Commerce Core: desenvolvimento em NestJS, Prisma e PostgreSQL e migração incremental com Strangler Pattern. Autenticação unificada com Magic Link, Google OAuth, 2FA e SSO, preservando os vínculos dos usuários.",
      "Performance: a resolução de conta caiu de cerca de 4 segundos para menos de 1 segundo, eliminando timeouts associados ao login. A leitura de métricas do Proxmox passou a ocorrer em segundo plano, sem travar o painel de VPS.",
      "Retenção: integração de jornadas e benefícios ao cancelamento, com retorno ao fluxo original em até 2 segundos se a API externa falhar. Entrega com 27 novos testes, preservando os cerca de 7.900 existentes, e ativação por configuração.",
      "Conversões: padronização do funil GA4/GTM entre painel e checkout, com valores conciliados com a fatura do WHMCS e deduplicação por pedido. O evento purchase representa a criação do pedido, sem significar confirmação do pagamento.",
      "Operação: provisionamento automático de contas, integrações com WHMCS, cPanel e ResellerClub, testes em CI e deploys em Docker sem indisponibilidade, com observabilidade via Sentry.",
    ],
    stack: [
      "SvelteKit 2",
      "Svelte 5",
      "TypeScript",
      "Tailwind CSS 4",
      "NestJS · Node.js",
      "Prisma · PostgreSQL",
      "Sentry · GitHub Actions",
      "GA4 · GTM",
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
    period: "Contribuição no Grupo Sourei",
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
    kind: "Projeto de formação",
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
    kind: "Projeto pessoal",
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
    kind: "Projeto pessoal",
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
  video?: { src: string; caption: string };
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
      text: "O produto já conta com base navegável, entidades estruturadas e regras centrais de domínio refletidas na interface. A próxima etapa é consolidar backend, dados persistentes, integrações e inteligência comercial.",
    },
  ],
  note: "Case apresentado sem expor nomes da empresa, clientes, fornecedores, valores reais ou regras operacionais sensíveis.",
};
