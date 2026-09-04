import type { IconName } from "@/components/Icon";

export type SkillGroup = {
  title: string;
  icon: IconName;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    icon: "layers",
    description:
      "Interfaces componentizadas, acessíveis e responsivas, com estado bem organizado e boa experiência de uso.",
    items: [
      "React 19",
      "Next.js (App Router)",
      "SvelteKit / Svelte 5",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui · Radix",
      "TanStack Query",
      "Zustand",
      "React Hook Form + Zod",
      "HTML · CSS",
    ],
  },
  {
    title: "Back-end & APIs",
    icon: "server",
    description:
      "APIs REST, workers assíncronos, autenticação e integrações com serviços externos.",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "PHP (WHMCS)",
      "REST · Webhooks",
      "JWT · SSO · OAuth",
      "Keycloak",
      "Socket.IO · SSE",
      "Cron · Filas",
    ],
  },
  {
    title: "Dados & Infra",
    icon: "database",
    description:
      "Modelagem relacional, cache, mensageria e provisionamento de ambientes em containers.",
    items: [
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "Drizzle ORM",
      "Redis",
      "RabbitMQ · Bull",
      "Docker",
      "Kubernetes",
      "AWS S3",
      "Linux",
    ],
  },
  {
    title: "Integrações & Produto",
    icon: "compass",
    description:
      "Integrações de hosting e billing, gestão de produto e práticas de engenharia no dia a dia.",
    items: [
      "WHMCS · cPanel/WHM",
      "Proxmox",
      "Google Tag Manager",
      "Gateways de pagamento",
      "Git · GitHub",
      "CI/CD",
      "Code review",
      "Scrum · Kanban",
      "Product Ownership",
    ],
  },
];

export type Tool = { name: string; logo?: string; icon?: IconName };

export const coreStack: Tool[] = [
  { name: "TypeScript", logo: "/images/typescript-icon.png" },
  { name: "React", logo: "/images/react-icon.png" },
  { name: "Next.js", logo: "/images/nextjs-icon.png" },
  { name: "JavaScript", logo: "/images/js-icon.png" },
  { name: "HTML", logo: "/images/html-icon.png" },
  { name: "CSS", logo: "/images/css-icon.png" },
];
