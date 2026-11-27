import { profile } from "@/data/profile";
import { Icon } from "./Icon";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Douglas Pimenta. Portfólio desenvolvido com React, TypeScript e Vite.</p>

      <div className={styles.actions}>
        <a className={styles.cv} href={profile.cv} target="_blank" rel="noopener noreferrer">
          Ver currículo <Icon name="external" size={16} />
        </a>
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
      </div>
    </footer>
  );
}
