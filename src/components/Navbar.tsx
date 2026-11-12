import { useEffect, useRef, useState, type MouseEvent } from "react";
import { navLinks } from "@/data/profile";
import { Icon } from "./Icon";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const destination = useRef<string | null>(null);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      if (destination.current) return;
      // Match the offset used by native anchor navigation, including direct hashes.
      const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      let current = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset + 16) {
          current = `#${section.id}`;
        }
      }

      // The last section can be too short to reach the activation line.
      const atBottom = window.scrollY > 0 &&
        Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 1;
      if (atBottom && sections.length) current = `#${sections[sections.length - 1].id}`;
      setActive(current);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateActiveSection);
    };

    const resumeTracking = () => {
      destination.current = null;
      scheduleUpdate();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) {
        resumeTracking();
      }
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("scrollend", resumeTracking);
    window.addEventListener("wheel", resumeTracking, { passive: true });
    window.addEventListener("touchstart", resumeTracking, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(document.body);
    updateActiveSection();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("scrollend", resumeTracking);
      window.removeEventListener("wheel", resumeTracking);
      window.removeEventListener("touchstart", resumeTracking);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, []);

  const navigateTo = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    event.preventDefault();
    destination.current = href;
    setOpen(false);
    setActive(href === "#inicio" ? "" : href);
    if (location.hash !== href) history.pushState(null, "", href);
    // Wait for the mobile menu to collapse before measuring the destination.
    requestAnimationFrame(() => {
      const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const top = Math.min(
        Math.max(0, scrollY + target.getBoundingClientRect().top - offset),
        Math.max(0, document.documentElement.scrollHeight - innerHeight),
      );
      if (Math.abs(scrollY - top) <= 1) destination.current = null;
      target.scrollIntoView({
        block: "start",
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      });
    });
  };

  return (
    <nav className={styles.nav} aria-label="Navegação principal">
      <a className={styles.brand} href="#inicio" onClick={(event) => navigateTo(event, "#inicio")}>
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
              aria-current={active === link.href ? "location" : undefined}
              className={link.href === "#contato" ? styles.cta : undefined}
              onClick={(event) => navigateTo(event, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
