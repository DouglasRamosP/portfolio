import { useEffect, useRef, useState, type MouseEvent } from "react";
import { navLinks, profile } from "@/data/profile";
import { Icon } from "./Icon";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => section !== null)
      .reverse();

    let frame = 0;

    function updateActiveSection() {
      frame = 0;
      const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const atBottom = scrollY > 0 &&
        Math.ceil(scrollY + innerHeight) >= document.documentElement.scrollHeight - 1;
      const current = atBottom
        ? sections[0]
        : sections.find((section) => section.getBoundingClientRect().top <= offset + 16);
      setActive(current ? `#${current.id}` : "");
    }

    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(updateActiveSection);
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(document.body);
    updateActiveSection();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, []);

  function handleLink(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    if (open || event.detail === 0) {
      const section = document.getElementById(event.currentTarget.hash.slice(1));
      if (section) {
        section.tabIndex = -1;
        section.focus({ preventScroll: true });
      }
    }

    setOpen(false);
  }

  return (
    <header className={styles.header}>
      <nav
        className={styles.nav}
        aria-label="Navegação principal"
        onKeyDown={(event) => {
          if (open && event.key === "Escape") {
            setOpen(false);
            toggle.current?.focus();
          }
        }}
      >
        <a className={styles.brand} href="#inicio" onClick={handleLink}>
          {profile.name}
        </a>

        <button
          className={styles.toggle}
          type="button"
          ref={toggle}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Fechar" : "Menu"}
          <Icon name={open ? "close" : "menu"} size={20} />
        </button>

        <ul id="nav-links" className={`${styles.links}${open ? ` ${styles.open}` : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "location" : undefined}
                className={link.href === "#contato" ? styles.cta : undefined}
                onClick={handleLink}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
