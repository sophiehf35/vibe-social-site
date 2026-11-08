import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = [
  {
    q: "O que é Vibe Social?",
    a: "Uma rede social mobile onde, além de curtir posts, você reconhece virtudes em quem convive com você. Vibes são interesses permanentes e depoimentos só podem ser deixados por amigos mútuos, com aprovação do alvo.",
  },
  {
    q: "Como funcionam as virtudes?",
    a: "Existem 6 virtudes: bondosa, estilosa, divertida, inteligente, criativa e corajosa. Ao ver um post, você pode dar um voto numa virtude específica. Só um voto por pessoa por post, e o voto substitui o anterior se você mudar de ideia. O que fica no perfil do autor é a soma dos votos recebidos.",
  },
  {
    q: "E as curtidas?",
    a: "Curtida existe também. É o jeito rápido de dizer que gostou do post. Mas o que diferencia o Vibe é que o perfil do autor agrega virtudes recebidas, não só curtidas. As duas coisas convivem.",
  },
  {
    q: "Como funcionam os depoimentos?",
    a: "Só amigos mútuos podem escrever. E cada depoimento passa pela sua aprovação antes de ficar visível. Editar um publicado volta pra fila. Você exclui quando quiser.",
  },
  {
    q: "Quando lança na Play Store?",
    a: "Estamos finalizando os testes. Entre na lista de espera pra ser avisada no dia do lançamento.",
  },
  {
    q: "Meus dados ficam onde?",
    a: "No seu aparelho, principalmente. O servidor guarda o mínimo pra sincronizar. Moderação de texto roda localmente — conteúdo bloqueado não sai do celular. Sem SDK de tracking de terceiros.",
  },
];

export default function FaqAccordion() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 px-5">
      <div className="wrapper max-w-[720px] mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-bold text-app-text text-3xl md:text-4xl">Dúvidas frequentes</h2>
          <p className="max-w-md mx-auto leading-6 text-app-muted">
            Se a sua não estiver aqui, é porque a gente ainda não pensou nela.
          </p>
        </div>
        <div className="space-y-2">
          {FAQ.map((item, i) => {
            const isActive = active === i;
            return (
              <div
                key={item.q}
                className={`bg-app-surface border rounded-2xl transition ${isActive ? "border-coral-500/40" : "border-app-border hover:border-app-border/80"}`}
              >
                <button
                  type="button"
                  onClick={() => setActive(isActive ? null : i)}
                  className="flex items-center justify-between w-full text-left px-6 py-5"
                  aria-expanded={isActive}
                >
                  <span className="text-app-text font-medium pr-4">{item.q}</span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition ${isActive ? "bg-coral-500 text-white" : "bg-app-soft text-app-muted"}`}>
                    {isActive ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                {isActive && (
                  <div className="px-6 pb-5 -mt-1">
                    <p className="text-app-muted leading-relaxed text-sm">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
