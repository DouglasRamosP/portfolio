import { useCallback, useState } from "react";
import { CaseModal } from "@/components/CaseModal";
import { Icon } from "@/components/Icon";
import { crmCase, publishedProjects, workProjects } from "@/data/projects";
import { moveScene, resetScene } from "@/styles/pointerMotion";
import styles from "./Projects.module.css";

export function Projects() {
  const [caseOpen, setCaseOpen] = useState(false);
  const closeCase = useCallback(() => setCaseOpen(false), []);

  return (
    <section id="projetos" className={styles.section} aria-labelledby="projetos-title" tabIndex={-1}>
      <div className={styles.content}>
        <h2 id="projetos-title" className={styles.title}>Projetos</h2>

        <article className={styles.featured}>
          <div className={styles.featuredStage} onPointerMove={moveScene} onPointerLeave={resetScene}>
            <div className={styles.featuredMedia}>
              <img src={crmCase.image} alt={crmCase.alt} width={1600} height={1000} />
            </div>
          </div>
          <div className={styles.featuredBody}>
            <p className={styles.eyebrow}>{crmCase.status}</p>
            <h3>{crmCase.name}</h3>
            <p className={styles.description}>{crmCase.summary}</p>
            <p className={styles.stack}>{crmCase.stackLine}</p>
            <div className="tags">
              {crmCase.cardTags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <button
              className={styles.caseButton}
              type="button"
              aria-haspopup="dialog"
              onClick={() => setCaseOpen(true)}
            >
              {crmCase.video ? "Abrir case com vídeo" : "Abrir case"}
              <Icon name="chevron-right" size={18} />
            </button>
          </div>
        </article>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Experiência em produtos</h3>
          <div className={styles.grid}>
            {workProjects.map((project) => (
              <article className={styles.work} key={project.name}>
                <p className={styles.eyebrow}>{project.org} · {project.period}</p>
                <h4>{project.name}</h4>
                <p className={styles.tagline}>{project.tagline}</p>
                <p className={styles.description}>{project.description}</p>
                {project.result && (
                  <p className={styles.result}>{project.result}</p>
                )}
                <p className={styles.stack}>{project.role}</p>
                <details className={styles.details}>
                  <summary>Minhas contribuições <Icon name="chevron-right" size={16} /></summary>
                  <ul className="bullets">
                    {project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
                  </ul>
                  <div className="tags">
                    {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                </details>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Projetos publicados</h3>
          <div className={styles.grid}>
            {publishedProjects.map((project) => (
              <article key={project.name} className={styles.published}>
                <div className={styles.thumb}>
                  <img src={project.image} alt={project.alt} loading="lazy" />
                </div>
                <div className={styles.publishedBody}>
                  <p className={styles.eyebrow}>{project.kind}</p>
                  <h4>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.name} <Icon name="external" size={18} />
                    </a>
                  </h4>
                  <p className={styles.description}>{project.description}</p>
                  <p className={styles.stack}>{project.stack}</p>
                  <div className="tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {caseOpen && <CaseModal study={crmCase} onClose={closeCase} />}
    </section>
  );
}
