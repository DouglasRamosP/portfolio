import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "./Icon";
import styles from "./Carousel.module.css";

type Props = {
  label: string;
  children: ReactNode[];
};

export function Carousel({ label, children }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [atEnd, setAtEnd] = useState(false);
  const count = children.length;

  const getCards = () =>
    Array.from(viewportRef.current?.querySelectorAll<HTMLElement>("[data-card]") ?? []);

  const syncFromScroll = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const cards = getCards();
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    const end = maxScroll > 0 && viewport.scrollLeft >= maxScroll - 2;
    setAtEnd(end);

    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    cards.forEach((card, i) => {
      const dist = Math.abs(viewport.scrollLeft - card.offsetLeft);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setIndex(end ? count - 1 : best);
  }, [count]);

  const scrollTo = (i: number) => {
    const viewport = viewportRef.current;
    const cards = getCards();
    const target = cards[Math.min(Math.max(i, 0), count - 1)];
    if (!viewport || !target) return;
    viewport.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    syncFromScroll();
    viewport.addEventListener("scroll", syncFromScroll, { passive: true });
    window.addEventListener("resize", syncFromScroll);
    return () => {
      viewport.removeEventListener("scroll", syncFromScroll);
      window.removeEventListener("resize", syncFromScroll);
    };
  }, [syncFromScroll]);

  return (
    <div className={`${styles.carousel}${atEnd ? ` ${styles.atEnd}` : ""}`} aria-label={label}>
      <button
        className={`${styles.arrow} ${styles.prev}`}
        type="button"
        aria-label="Ver projetos anteriores"
        disabled={index === 0}
        onClick={() => scrollTo(index - 1)}
      >
        <Icon name="chevron-left" />
      </button>

      <div className={styles.viewport} ref={viewportRef} tabIndex={0}>
        <div className={styles.track}>
          {children.map((child, i) => (
            <div data-card key={i}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${styles.arrow} ${styles.next}`}
        type="button"
        aria-label="Ver próximos projetos"
        disabled={atEnd || index >= count - 1}
        onClick={() => scrollTo(index + 1)}
      >
        <Icon name="chevron-right" />
      </button>

      <div className={styles.dots} aria-hidden="true">
        {children.map((_, i) => (
          <span key={i} className={`${styles.dot}${i === index ? ` ${styles.dotActive}` : ""}`} />
        ))}
      </div>
    </div>
  );
}
