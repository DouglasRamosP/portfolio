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
      "Product Owner e desenvolvedor da StayCloud, conectando priorização de produto, arquitetura e implementação em uma plataforma de hospedagem e serviços digitais.",
    bullets: [
      "Priorização de demandas por impacto, risco e dependências, com alinhamento entre negócio, engenharia e marketing.",
      "Desenvolvimento do Commerce Core e migração gradual da autenticação, eliminando timeouts de login e reduzindo a resolução de conta de cerca de 4s para menos de 1s.",
      "Integrações de retenção e rastreamento de conversões com WHMCS, contratos documentados, testes automatizados e revisão de código.",
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
      "Entrada na Sourei como desenvolvedor full stack, com contribuições na StayCloud e na Wascer. Desde julho, concilio o desenvolvimento com Product Ownership na StayCloud.",
    bullets: [
      "Evolução das plataformas StayCloud e Wascer: novas funcionalidades, correções e integrações de ponta a ponta.",
      "Automação de processos, integrações com serviços externos e otimização de ambientes e serviços digitais.",
    ],
    tags: ["TypeScript", "SvelteKit", "Next.js", "NestJS", "DevOps"],
  },
  {
    company: "SESI / SENAI",
    role: "Responsável Técnico de Infraestrutura de TI",
    period: "fev. 2023 – o momento",
    location: "Varginha, MG",
    current: true,
    summary: "Sustentação de TI das três unidades SESI/SENAI de Varginha, com suporte remoto e presencial e orientação de estagiários.",
    bullets: [
      "Planejamento e execução da modernização de uma unidade, com switches gerenciáveis, VLANs, firewall e cobertura Wi-Fi em toda a unidade.",
      "Implantação de servidores e backup em NAS, centralizando a administração e ampliando a proteção e a capacidade de recuperação dos dados.",
      "Acompanhamento de redes, softwares corporativos e conectividade para apoiar a continuidade operacional.",
    ],
    tags: ["Redes · VLANs", "Firewall", "Servidores · NAS", "Orientação de estagiários"],
  },
  {
    company: "SESI",
    role: "Técnico de Suporte em TI",
    period: "fev. 2020 – fev. 2023",
    summary: "Atuação em suporte de TI, base da evolução para a responsabilidade técnica pela infraestrutura das unidades.",
    bullets: [],
    tags: ["Suporte técnico", "TI"],
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
    title: "Bacharelado em Sistemas de Informação",
    institution: "UNIS",
    period: "Concluído em 2022",
    description: "Formação superior que sustenta minha atuação em desenvolvimento, arquitetura e gestão de sistemas.",
  },
  {
    kind: "education",
    title: "Técnico em Tecnologia da Informação",
    institution: "CEFET-MG",
    period: "Concluído em 2018",
    description: "Base técnica para a trajetória em suporte, infraestrutura e desenvolvimento de software.",
  },
  {
    kind: "certification",
    title: "Formação Full Stack e Bootcamp E-commerce",
    institution: "Full Stack Club",
    period: "Formação complementar",
    description: "Desenvolvimento de aplicações full stack e e-commerce, com prática em interfaces, dados, autenticação e pagamentos.",
  },
  {
    kind: "certification",
    title: "APIs, desenvolvimento web e dados",
    institution: "Alura",
    period: "2024 – 2025",
    description: "Node.js, Express, PostgreSQL, Docker, autenticação, CI/CD e dados com Python.",
  },
  {
    kind: "certification",
    title: "Inglês técnico intermediário",
    institution: "Idioma",
    period: "Leitura técnica",
    description: "Leitura de documentação e materiais técnicos para apoiar o desenvolvimento de software.",
  },
];
