import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { profile } from "@/data/profile";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contato" className="section section--dark" aria-labelledby="contato-title">
      <div className="section__content">
        <SectionHeading
          id="contato-title"
          kicker="Contato"
          title="Vamos construir algo útil juntos."
          description="Estou aberto a conexões, trocas de conhecimento e oportunidades em que eu possa contribuir com seriedade, energia e visão de crescimento."
          centered
        />

        <div className={styles.grid}>
          <a className={styles.card} href={`mailto:${profile.email}`}>
            <span className={styles.icon}>
              <Icon name="mail" size={22} />
            </span>
            <div>
              <strong>E-mail</strong>
              <span>{profile.email}</span>
            </div>
          </a>

          <a className={styles.card} href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <span className={styles.icon}>
              <Icon name="linkedin" size={22} />
            </span>
            <div>
              <strong>LinkedIn</strong>
              <span>Conectar e acompanhar minha jornada</span>
            </div>
          </a>

          <a className={styles.card} href={profile.github} target="_blank" rel="noopener noreferrer">
            <span className={styles.icon}>
              <Icon name="github" size={22} />
            </span>
            <div>
              <strong>GitHub</strong>
              <span>Repositórios, estudos e projetos em evolução</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
