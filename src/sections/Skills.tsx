import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { coreStack, skillGroups } from "@/data/skills";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section id="habilidades" className="section" aria-labelledby="habilidades-title">
      <div className="section__content">
        <SectionHeading
          id="habilidades-title"
          kicker="Habilidades"
          title="Stack que uso para construir e operar produtos SaaS."
          description="Do front-end à infraestrutura: interfaces, APIs, dados, mensageria, containers e integrações com plataformas de hosting e billing, além de gestão de produto."
          centered
        />

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <article className={styles.group} key={group.title}>
              <div className={styles.head}>
                <span className={styles.icon}>
                  <Icon name={group.icon} size={24} />
                </span>
                <h3>{group.title}</h3>
              </div>
              <p>{group.description}</p>
              <div className="tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.core} aria-label="Stack principal">
          {coreStack.map((tool) => (
            <span className={styles.tool} key={tool.name}>
              {tool.logo && <img src={tool.logo} alt="" loading="lazy" />}
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
