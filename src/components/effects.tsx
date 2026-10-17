"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Page-level motion: cursor spotlight, card glow, magnetic buttons, scroll
 * progress, timeline rail fill and scroll reveal. Re-runs on route change so
 * new pages animate in.
 */
export function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let magnet: HTMLElement | null = null;

    const onMove = (e: PointerEvent) => {
      root.style.setProperty("--mx", `${e.clientX}px`);
      root.style.setProperty("--my", `${e.clientY}px`);
      const target = e.target as Element | null;

      const card = target?.closest?.<HTMLElement>(".glow");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--x", `${e.clientX - r.left}px`);
        card.style.setProperty("--y", `${e.clientY - r.top}px`);
      }

      if (reduce) return;
      const next = target?.closest?.<HTMLElement>(".magnetic") ?? null;
      if (magnet && magnet !== next) magnet.style.transform = "";
      magnet = next;
      if (magnet) {
        const r = magnet.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        magnet.style.transform = `translate(${dx * 0.18}px, ${dy * 0.3}px)`;
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const rail = document.querySelector<HTMLElement>(".timeline");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const max = root.scrollHeight - window.innerHeight;
        root.style.setProperty("--page", String(max > 0 ? window.scrollY / max : 0));
        root.style.setProperty("--scroll", String(window.scrollY));
        if (rail) {
          const r = rail.getBoundingClientRect();
          const p = (window.innerHeight * 0.6 - r.top) / r.height;
          rail.style.setProperty("--fill", String(Math.min(1, Math.max(0, p))));
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    document
      .querySelectorAll("[data-reveal]:not(.in)")
      .forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
