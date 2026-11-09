import { useEffect, useRef, useState } from "react";
import { Sun, Moon } from "lucide-react";
import Logo from "../Logo";

type Theme = "dark" | "light";

const NAV = [
  { id: "hero", label: "Entrar" },
  { id: "features", label: "Como funciona" },
  { id: "screens", label: "Galeria" },
  { id: "missao", label: "Missão" },
  { id: "faq", label: "Dúvidas" },
];

export default function Header() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [active, setActive] = useState<string>("hero");
  const navRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const stored = localStorage.getItem("vibe-theme");
    const t: Theme = stored === "light" || stored === "dark" ? stored : "dark";
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  // Scroll spy via IntersectionObserver — robusto com seções altas
  useEffect(() => {
    const ids = NAV.map(n => n.id);
    const els = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (!els.length) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visible.set(id, entry.intersectionRatio);
          } else {
            visible.delete(id);
          }
        }
        // Escolhe a seção mais visível; empate → a que aparece primeiro no DOM
        let best: string | null = null;
        let bestRatio = 0;
        for (const id of ids) {
          const ratio = visible.get(id) ?? 0;
          if (ratio > bestRatio) { bestRatio = ratio; best = id; }
        }
        if (best) setActive(best);
      },
      {
        // Linha de detecção logo abaixo do header sticky (64px)
        rootMargin: "-64px 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Indicador deslizante — recalcula quando ativo ou tamanho muda
  useEffect(() => {
    function recalc() {
      const nav = navRef.current;
      const el = linkRefs.current[active];
      if (!nav || !el) return;
      const navRect = nav.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicator({ left: elRect.left - navRect.left, width: elRect.width });
    }
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [active]);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("vibe-theme", next);
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-app-bg/80 border-b border-app-border">
      <div className="wrapper py-3 flex items-center justify-between gap-4">
        <a
          href="/"
          aria-label="Vibe Social — página inicial"
          className="flex items-center flex-shrink-0"
        >
          <Logo className="h-8 w-auto" />
        </a>

        <div ref={navRef} className="hidden md:flex relative items-center rounded-full bg-app-surface/70 border border-app-border/60 p-1">
          <div
            className="absolute top-1 bottom-1 rounded-full bg-app-bg shadow-sm transition-all duration-300 ease-out"
            style={{ left: indicator.left, width: indicator.width }}
            aria-hidden="true"
          />
          {NAV.map((it) => (
            <a
              key={it.id}
              ref={(el) => { linkRefs.current[it.id] = el; }}
              href={`#${it.id}`}
              onClick={() => setActive(it.id)}
              className={`relative z-10 text-sm px-4 py-1.5 rounded-full font-medium transition-colors ${
                active === it.id ? "text-app-text" : "text-app-muted hover:text-app-text"
              }`}
            >
              {it.label}
            </a>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-app-surface border border-app-border text-app-muted hover:text-app-text transition-colors flex-shrink-0"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
}
