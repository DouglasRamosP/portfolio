import { useEffect, useState } from "react";
import { navLinks } from "@/data/profile";
import { Icon } from "./Icon";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.nav} aria-label="Navegação principal">
      <a className={styles.brand} href="#inicio" onClick={() => setOpen(false)}>
        <span aria-hidden="true" />
        Douglas Pimenta
      </a>

      <button
        className={styles.toggle}
        type="button"
        aria-expanded={open}
        aria-controls="nav-links"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name={open ? "close" : "menu"} />
      </button>

      <ul id="nav-links" className={`${styles.links}${open ? ` ${styles.open}` : ""}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={link.href === "#contato" ? styles.cta : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
