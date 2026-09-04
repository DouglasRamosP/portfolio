import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { education, experience } from "@/data/experience";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="section section--dark"
      aria-labelledby="experiencia-title"
    >
      <div className={`section__content ${styles.grid}`}>
        <div>
          <SectionHeading
            id="experiencia-title"
            kicker="Experiência"
            title="Trajetória profissional, formação e evolução contínua."
            description="Atuação em produtos SaaS com clientes ativos, conciliando engenharia e direcionamento de produto, somada à formação acadêmica e à construção constante de projetos próprios."
          />

          <div className={styles.education}>
            {education.map((item) => (
              <article className={styles.edu} key={item.title}>
                <span className={styles.eduIcon}>
                  <Icon name={item.kind === "education" ? "graduation" : "certificate"} size={22} />
                </span>
                <div>
                  <span className={styles.eduLabel}>
                    {item.institution} · {item.period}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.timeline}>
          {experience.map((job) => (
            <article className={styles.item} key={`${job.company}-${job.role}`}>
              <div className={styles.head}>
                <div>
                  <span className={styles.company}>{job.company}</span>
                  <h3>{job.role}</h3>
                </div>
                <span className={`${styles.period}${job.current ? ` ${styles.current}` : ""}`}>
                  {job.period}
                </span>
              </div>
              {job.location && <p className={styles.location}>{job.location}</p>}
              <p className={styles.summary}>{job.summary}</p>
              <ul className={styles.bullets}>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="tags">
                {job.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
