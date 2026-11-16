"use client";
import { useEffect } from "react";

/** Comportamentos leves: sombra do header, destaque do menu da seção atual,
 *  fechar menu móvel ao navegar e esconder a barra fixa quando o formulário aparece. */
export default function Enhance() {
  useEffect(() => {
    const header = document.querySelector(".site-header");
    const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav a"));
    const byId = new Map(links.map((a) => [a.getAttribute("href")!.slice(1), a]));
    const spy = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          links.forEach((l) => l.removeAttribute("aria-current"));
          byId.get(e.target.id)?.setAttribute("aria-current", "true");
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    byId.forEach((_, id) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });

    const menu = document.querySelector<HTMLDetailsElement>(".menu");
    const closeMenu = () => menu?.removeAttribute("open");
    const menuLinks = Array.from(menu?.querySelectorAll("a") ?? []);
    menuLinks.forEach((a) => a.addEventListener("click", closeMenu));

    const bar = document.querySelector(".mbar");
    const visit = document.getElementById("visita");
    const hide = new IntersectionObserver(([e]) => bar?.classList.toggle("is-hidden", e.isIntersecting), { threshold: 0.2 });
    if (visit) hide.observe(visit);

    const fab = document.querySelector<HTMLDetailsElement>(".fab");
    const outside = (ev: Event) => {
      if (fab?.open && !fab.contains(ev.target as Node)) fab.removeAttribute("open");
    };
    document.addEventListener("click", outside);

    return () => {
      window.removeEventListener("scroll", onScroll);
      spy.disconnect();
      hide.disconnect();
      menuLinks.forEach((a) => a.removeEventListener("click", closeMenu));
      document.removeEventListener("click", outside);
    };
  }, []);
  return null;
}
