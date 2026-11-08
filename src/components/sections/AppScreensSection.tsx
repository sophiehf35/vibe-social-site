import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Screen { id: string; caption: string; src?: string; }

const SCREENS: Screen[] = [
  { id: "feed",        caption: "Feed" },
  { id: "depoimentos", caption: "Depoimentos" },
  { id: "perguntas",   caption: "Perguntas" },
  { id: "clubes",      caption: "Clubes" },
  { id: "votos",       caption: "Votos" },
  { id: "perfil",      caption: "Perfil" },
];

const PHONE_W = 280;
const GAP = 16;
const STEP = PHONE_W + GAP; // 296
const WRAP = 6 * STEP;      // 1776

export default function AppScreensSection() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const apply = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      itemRefs.current.forEach((item) => {
        if (!item) return;
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const dist = (itemCenter - center) / item.offsetWidth;
        const absDist = Math.min(Math.abs(dist), 2);
        item.style.transform = `perspective(1400px) rotateY(${-dist * 25}deg) scale(${1 - absDist * 0.15})`;
        item.style.opacity = String(1 - absDist * 0.4);
        item.style.zIndex = String(Math.round(100 - absDist * 10));
      });
    };

    // Início centralizado no 8 (index 2 do set do meio)
    requestAnimationFrame(() => {
      const el8 = itemRefs.current[8];
      if (el8) el.scrollLeft = el8.offsetLeft - el.clientWidth / 2 + PHONE_W / 2;
      apply();
    });

    let timer: number | undefined;
    const onScroll = () => {
      apply();
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const i6 = itemRefs.current[6];
        const i12 = itemRefs.current[12];
        if (!i6 || !i12) return;
        const wrapMin = i6.offsetLeft - el.clientWidth / 2 + PHONE_W / 2;
        const wrapMax = i12.offsetLeft - el.clientWidth / 2 + PHONE_W / 2;
        if (el.scrollLeft < wrapMin) el.scrollLeft += WRAP;
        else if (el.scrollLeft >= wrapMax) el.scrollLeft -= WRAP;
      }, 300);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    };
  }, []);

  function scrollByPage(dir: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * STEP, behavior: "smooth" });
  }

  const items = [...SCREENS, ...SCREENS, ...SCREENS];

  return (
    <section id="screens" className="py-24 px-5">
      <div className="max-w-[72rem] mx-auto">
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-bold text-app-text text-3xl md:text-4xl max-w-2xl mx-auto">
            Cada tela, um jeito de <span className="text-coral-500">se conectar</span>
          </h2>
          <p className="max-w-xl mx-auto leading-6 text-app-muted">
            Do feed aos depoimentos, tudo pensado pra você estar entre pessoas na mesma vibe.
          </p>
        </div>
      </div>

      <style>{`
        .screens-scroller::-webkit-scrollbar { display: none; }
        .coverflow-item .phone-frame { transition: transform 0.3s ease; }
        .coverflow-item:hover .phone-frame { transform: scale(1.08); }
        .coverflow-item:hover { z-index: 9999 !important; }
      `}</style>

      <div className="relative max-w-[880px] mx-auto">
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          aria-label="Telas anteriores"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-40 inline-flex items-center justify-center w-11 h-11 rounded-full border border-app-border bg-app-surface/95 backdrop-blur-sm text-app-text hover:bg-app-soft hover:border-coral-500/40 transition-colors shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          aria-label="Próximas telas"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-40 inline-flex items-center justify-center w-11 h-11 rounded-full border border-app-border bg-app-surface/95 backdrop-blur-sm text-app-text hover:bg-app-soft hover:border-coral-500/40 transition-colors shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      <div
        ref={scrollerRef}
        className="overflow-x-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          perspective: "1400px",
          perspectiveOrigin: "center center",
        }}
      >
        <div
          className="screens-scroller flex gap-4 w-max py-14"
          style={{ paddingLeft: `calc(50% - ${PHONE_W / 2}px)`, paddingRight: `calc(50% - ${PHONE_W / 2}px)` }}
        >
          {items.map((s, i) => (
            <button
              key={`${s.id}-${i}`}
              ref={(el) => { itemRefs.current[i] = el; }}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setLightboxIndex(i % SCREENS.length)}
              className="coverflow-item shrink-0 relative focus:outline-none"
              style={{ width: PHONE_W, willChange: "transform" }}
            >
              <div className="phone-frame rounded-[36px] p-2">
                {s.src ? (
                  <img
                    src={s.src}
                    alt={s.caption}
                    className="w-full aspect-[9/19.5] object-cover rounded-[28px] bg-app-bg"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full aspect-[9/19.5] rounded-[28px] bg-app-bg" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          style={{ animation: "fadeIn 0.2s ease-out" }}
          onClick={() => setLightboxIndex(null)}
        >
          <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 size-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
          >
            <X className="size-5" />
          </button>
          <div className="relative w-full max-w-[380px]" onClick={(e) => e.stopPropagation()}>
            <div className="phone-frame rounded-[44px] p-2">
              {SCREENS[lightboxIndex].src ? (
                <img
                  src={SCREENS[lightboxIndex].src}
                  alt={SCREENS[lightboxIndex].caption}
                  className="w-full aspect-[9/19.5] object-cover rounded-[36px]"
                />
              ) : (
                <div className="w-full aspect-[9/19.5] rounded-[36px] bg-app-bg" />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
