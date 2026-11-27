import { Icon } from "@/components/Icon";
import { profile } from "@/data/profile";
import { moveScene, resetScene } from "@/styles/pointerMotion";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.shell} id="inicio" aria-labelledby="intro-title">
      <div className={styles.hero}>
        <div className={styles.identity}>
          <p className={styles.role}>{profile.role}</p>
          <h1 id="intro-title" className={styles.title}>{profile.name}</h1>
        </div>

        <figure className={styles.portrait} onPointerMove={moveScene} onPointerLeave={resetScene}>
          <div className={styles.visual}>
            <div className={styles.field} />
            <img src="/images/avatar.svg" alt="Retrato de Douglas Pimenta" width={320} height={320} />
          </div>
          <figcaption>{profile.location}</figcaption>
        </figure>

        <div className={styles.summary}>
          <p className={styles.headline}>{profile.headline}</p>
          <p className={styles.intro}>{profile.intro}</p>
          <div className={styles.actions}>
            <a className={styles.projects} href="#projetos">
              Ver projetos <span aria-hidden="true">↓</span>
            </a>
            <a className={styles.cvLink} href={profile.cv} target="_blank" rel="noopener noreferrer">
              Ver currículo <Icon name="external" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
