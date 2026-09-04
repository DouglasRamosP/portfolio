import { Navbar } from "@/components/Navbar";
import { Icon } from "@/components/Icon";
import { profile } from "@/data/profile";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <header className={styles.shell} id="inicio">
      <Navbar />

      <section className={styles.hero} aria-labelledby="intro-title">
        <div className={styles.badge}>
          <Icon name="code" size={16} />
          <span>
            <b>Full-Stack Developer</b> · Product Owner · Varginha, MG
          </span>
        </div>

        <h1 id="intro-title" className={styles.title}>
          Construo produtos SaaS <em>de ponta a ponta</em>, do front-end à infraestrutura, com
          visão de produto.
        </h1>

        <p className={styles.intro}>{profile.intro}</p>

        <div className={styles.actions}>
          <a className="btn btn--primary" href="#projetos">
            Ver projetos
          </a>
          <a className="btn btn--secondary" href="#contato">
            Falar comigo
          </a>
        </div>

        <div className={styles.highlights}>
          {profile.highlights.map((h) => (
            <div className={styles.highlight} key={h.value}>
              <strong>{h.value}</strong>
              <span>{h.text}</span>
            </div>
          ))}
        </div>
      </section>
    </header>
  );
}
