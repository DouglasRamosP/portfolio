import { SectionHeading } from "@/components/SectionHeading";
import { Icon, type IconName } from "@/components/Icon";
import { profile } from "@/data/profile";
import styles from "./About.module.css";

const pillars: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "layers",
    title: "Visão de produto",
    text: "Priorização de demandas, refinamento de requisitos e alinhamento entre stakeholders e time técnico.",
  },
  {
    icon: "wrench",
    title: "Engenharia com ownership",
    text: "Arquitetura limpa, código sustentável, code review e integrações de ponta a ponta em produtos com clientes ativos.",
  },
  {
    icon: "compass",
    title: "Evolução contínua",
    text: "Estudar, testar abordagens e construir projetos próprios para ampliar repertório e gerar impacto real.",
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
            title="Desenvolvimento full stack com responsabilidade técnica e compromisso com entregas."
            description="Sou Full-Stack Developer com foco em JavaScript, TypeScript, Node.js, React e Next.js, atuando no desenvolvimento de aplicações web, interfaces modernas e APIs com atenção à performance, escalabilidade, organização de código e experiência do usuário."
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
              Tenho perfil analítico, senso de ownership e facilidade para atuar de forma
              colaborativa, com comunicação clara, resolução de problemas e melhoria contínua dos
              processos e das entregas. Valorizo boas práticas, arquitetura limpa e um ambiente em
              que qualidade, evolução e trabalho em equipe caminham juntos.
            </p>
            <p>
              Tecnologia faz parte da minha rotina além do contexto profissional. Tenho interesse
              especial em produtos SaaS, dashboards, CRMs, integrações e aplicações que resolvam
              problemas reais de negócio.
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
