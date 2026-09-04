import { profile } from "@/data/profile";
import { Icon } from "./Icon";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <>
      <a
        href={profile.cv}
        className={styles.cv}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Baixar currículo"
      >
        <Icon name="download" size={18} />
        <span>Baixar currículo</span>
      </a>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Douglas Pimenta. Portfólio desenvolvido com React, TypeScript e Vite.</p>

        <div className={styles.social}>
          <a href={`mailto:${profile.email}`} aria-label="Enviar e-mail">
            <Icon name="mail" size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Icon name="linkedin" size={18} />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Icon name="github" size={18} />
          </a>
        </div>
      </footer>
    </>
  );
}
