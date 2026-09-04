import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Carousel } from "@/components/Carousel";
import { CaseModal } from "@/components/CaseModal";
import { Icon } from "@/components/Icon";
import { crmCase, publishedProjects, workProjects } from "@/data/projects";
import styles from "./Projects.module.css";

export function Projects() {
  const [caseOpen, setCaseOpen] = useState(false);

  return (
    <section id="projetos" className="section" aria-labelledby="projetos-title">
      <div className="section__content">
        <SectionHeading
          id="projetos-title"
          kicker="Projetos"
          title="Produtos reais que mostram minha evolução prática."
          description="Plataformas SaaS em que atuo hoje, aplicações publicadas e produtos em desenvolvimento, com foco em arquitetura consistente, usabilidade e contexto real de negócio."
          centered
        />

        <div className={styles.block}>
          <div className={styles.blockHead}>
            <span className="label">Atuação atual · Sourei</span>
            <p>
              Produtos em produção com clientes ativos. Contribuições listadas a partir do histórico
              real de desenvolvimento, sem expor dados sensíveis.
            </p>
          </div>

          <div className={styles.workGrid}>
            {workProjects.map((project) => (
              <article className={styles.work} key={project.name}>
                <div className="meta">
                  <span>{project.period}</span>
                  <span>Associado à {project.org}</span>
                </div>
                <h3>{project.name}</h3>
                <p className={styles.tagline}>{project.tagline}</p>
                <p>{project.description}</p>
                <span className={styles.role}>
                  <Icon name="code" size={16} />
                  {project.role}
                </span>
                <span className={styles.contribTitle}>Minhas contribuições</span>
                <ul className={styles.contrib}>
                  {project.contributions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <div className="tags">
                  {project.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.blockHead}>
            <span className="label">Projetos publicados</span>
            <p>Aplicações disponíveis publicamente, com foco em execução, interface e experiência de uso.</p>
          </div>

          <Carousel label="Projetos publicados">
            {publishedProjects.map((project) => (
              <a
                className={styles.card}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.name}
              >
                <div className={styles.thumb}>
                  <img src={project.image} alt={project.alt} loading="lazy" />
                </div>
                <div className={styles.body}>
                  <div className="meta">
                    <span>{project.kind}</span>
                    <span>{project.stack}</span>
                  </div>
                  <h3>
                    {project.name}
                    <Icon name="external" size={16} />
                  </h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </Carousel>
        </div>

        <div className={styles.block}>
          <div className={styles.blockHead}>
            <span className="label">Em andamento</span>
            <p>Produtos em evolução com foco forte em modelagem de negócio, operação e arquitetura pronta para crescer.</p>
          </div>

          <div className={styles.caseGrid}>
            <button
              className={`${styles.card} ${styles.caseButton}`}
              type="button"
              aria-haspopup="dialog"
              onClick={() => setCaseOpen(true)}
            >
              <div className={styles.thumb}>
                <img src={crmCase.image} alt={crmCase.alt} loading="lazy" />
                <span className={styles.thumbBadge}>{crmCase.status}</span>
              </div>
              <div className={styles.body}>
                <div className="meta">
                  <span>{crmCase.status}</span>
                  <span>{crmCase.stackLine}</span>
                </div>
                <h3>{crmCase.name}</h3>
                <p>{crmCase.summary}</p>
                <div className="tags">
                  {crmCase.cardTags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <span className={styles.callout}>
                  <Icon name="pointer" size={16} />
                  Abrir case com vídeo e detalhes do produto
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {caseOpen && <CaseModal study={crmCase} onClose={() => setCaseOpen(false)} />}
    </section>
  );
}
