import { SectionHeading } from "@/components/SectionHeading";
import { Icon, type IconName } from "@/components/Icon";
import { profile } from "@/data/profile";
import styles from "./About.module.css";

const pillars: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "layers",
    title: "Visão de produto",
    text: "Priorização por impacto no cliente, urgência e risco. Alinhamento de requisitos e contratos de API com engenharia, produto e marketing.",
  },
  {
    icon: "wrench",
    title: "Engenharia com responsabilidade",
    text: "Migrações graduais, testes dos cenários de falha e code review para evoluir sistemas sem interromper a operação.",
  },
  {
    icon: "compass",
    title: "Base em infraestrutura",
    text: "Experiência com redes, servidores, segurança e backup que amplia meu olhar sobre disponibilidade e sustentação de software.",
  },
];

export function About() {
  return (
    <section id="sobre" className="section" aria-labelledby="sobre-title">
      <div className={`section__content ${styles.grid}`}>
        <div>
          <SectionHeading
            id="sobre-title"
            kicker="Sobre mim"
            title="Da infraestrutura ao produto, com foco em resolver problemas reais."
            description="Comecei no suporte técnico, assumi responsabilidades de infraestrutura no SESI/SENAI e avancei para o desenvolvimento de plataformas SaaS. Hoje, concilio Product Ownership e desenvolvimento full stack na StayCloud, conectando necessidades do negócio a decisões de arquitetura e entregas verificáveis."
          />

          <div className={styles.pillars}>
            {pillars.map((p) => (
              <div className={styles.pillar} key={p.title}>
                <span className={styles.pillarIcon}>
                  <Icon name={p.icon} size={22} />
                </span>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.profile}>
            <img src="/images/avatar.svg" alt="Avatar de Douglas Pimenta" width={132} height={132} />
            <div>
              <h3>{profile.fullName}</h3>
              <p>{profile.role}</p>
              <p>{profile.location}</p>
            </div>
          </div>

          <div className={styles.text}>
            <p>
              Minha formação técnica no CEFET-MG e o bacharelado em Sistemas de Informação pelo
              UNIS sustentam uma atuação que vai da conectividade às aplicações. No SESI/SENAI,
              trabalhei com redes, servidores, backup e orientação de estagiários de TI.
            </p>
            <p>
              Na Sourei, contribuí com StayCloud e Wascer e passei a concentrar minha atuação
              na StayCloud. Me motiva investigar problemas complexos, aprofundar conhecimentos e
              criar soluções úteis para as pessoas. Uso IA como apoio ao desenvolvimento, com revisão crítica, testes e
              validação das soluções antes da entrega.
            </p>
          </div>

          <div className="tags">
            <span>TypeScript</span>
            <span>React & Next.js</span>
            <span>SvelteKit</span>
            <span>Node.js & NestJS</span>
            <span>PostgreSQL</span>
            <span>Docker & Kubernetes</span>
            <span>Product Ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
}
