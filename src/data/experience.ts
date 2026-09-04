export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Sourei",
    role: "Product Owner | Full Stack Developer",
    period: "jul. 2026 – o momento",
    location: "Varginha, MG · Híbrido",
    current: true,
    summary:
      "Product Owner em um dos produtos da empresa, conciliando desenvolvimento de software com gestão e direcionamento do produto.",
    bullets: [
      "Acompanhamento e priorização de demandas, refinamento de requisitos e alinhamento entre stakeholders e equipe técnica.",
      "Organização do fluxo de desenvolvimento e acompanhamento das entregas.",
      "Atuação técnica contínua: decisões de arquitetura, integrações, investigação de problemas, code review e implementação de funcionalidades.",
    ],
    tags: ["Gestão de produtos", "Agile", "Arquitetura", "Code review"],
  },
  {
    company: "Sourei",
    role: "Desenvolvedor Full Stack",
    period: "abr. 2026 – o momento",
    location: "Varginha, MG · Híbrido",
    current: true,
    summary:
      "Desenvolvimento e manutenção de aplicações web full stack, no front-end e no back-end, com suporte à infraestrutura (DevOps).",
    bullets: [
      "Evolução das plataformas StayCloud e Wascer: novas funcionalidades, correções e integrações de ponta a ponta.",
      "Automação de processos, integrações com serviços externos e otimização de ambientes e serviços digitais.",
    ],
    tags: ["TypeScript", "SvelteKit", "Next.js", "NestJS", "DevOps"],
  },
];

export type EducationItem = {
  kind: "education" | "certification";
  title: string;
  institution: string;
  period: string;
  description: string;
};

export const education: EducationItem[] = [
  {
    kind: "education",
    title: "Sistemas de Informação",
    institution: "Graduação",
    period: "2019 – 2022",
    description:
      "Formação superior concluída, com base em engenharia de software, banco de dados, redes e gestão de projetos.",
  },
  {
    kind: "certification",
    title: "Full Stack Club",
    institution: "Certificações",
    period: "2025",
    description:
      "Next.js App Router, TypeScript, Drizzle ORM, autenticação, Stripe e arquitetura de aplicações full stack.",
  },
  {
    kind: "certification",
    title: "Alura",
    institution: "Certificações",
    period: "2024 – 2025",
    description:
      "Node.js assíncrono, APIs com Express, Postgres e Docker, Git/GitHub, JavaScript, HTML, CSS e dados com Python.",
  },
];
