import type { PointerEvent } from "react";

export function moveScene(event: PointerEvent<HTMLElement>) {
  if (event.pointerType !== "mouse" || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const scene = event.currentTarget;
  const { left, top, width, height } = scene.getBoundingClientRect();
  scene.style.setProperty("--pointer-x", ((event.clientX - left) / width - 0.5).toFixed(3));
  scene.style.setProperty("--pointer-y", ((event.clientY - top) / height - 0.5).toFixed(3));
}

export function resetScene(event: PointerEvent<HTMLElement>) {
  event.currentTarget.style.removeProperty("--pointer-x");
  event.currentTarget.style.removeProperty("--pointer-y");
}
