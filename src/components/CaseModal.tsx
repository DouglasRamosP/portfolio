import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { CaseStudy } from "@/data/projects";
import { Icon } from "./Icon";
import styles from "./CaseModal.module.css";

type Props = {
  study: CaseStudy;
  onClose: () => void;
};

export function CaseModal({ study, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    document.body.classList.add("modal-open");
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], video, [tabindex]:not([tabindex="-1"])',
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-open");
      previous?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${study.id}-title`}
        ref={modalRef}
      >
        <button
          className={styles.close}
          type="button"
          aria-label="Fechar detalhes do projeto"
          onClick={onClose}
          ref={closeRef}
        >
          <Icon name="close" />
        </button>

        <div className={styles.body}>
          <section className={styles.hero}>
            <div>
              <span className="kicker">{study.status}</span>
              <h2 id={`${study.id}-title`}>{study.name}</h2>
              <p className={styles.subtitle}>{study.subtitle}</p>
              <p className={styles.description}>{study.description}</p>
              <div className="tags">
                {study.heroTags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>

            <div className={styles.panel}>
              <div className={styles.videoFrame}>
                <video controls playsInline preload="metadata" src={study.video.src} />
              </div>
              <p>{study.video.caption}</p>
            </div>
          </section>

          <div className={styles.grid}>
            {study.sections.map((section) => (
              <section className={styles.panel} key={section.title}>
                <h3>{section.title}</h3>
                {section.text && <p className="section__description" style={{ marginTop: 0 }}>{section.text}</p>}
                {section.items && (
                  <ul className="bullets">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.tags && (
                  <div className="tags" style={{ marginTop: 0 }}>
                    {section.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          <p className={styles.note}>{study.note}</p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
