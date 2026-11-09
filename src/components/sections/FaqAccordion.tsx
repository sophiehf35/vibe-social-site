import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = [
  {
    q: "O que é Vibe Social?",
    a: "Uma rede social pensada pra combater todo tipo de ódio e valorizar as qualidades de cada pessoa. Seu mural mostra as qualidades que os outros reconhecem em você, as suas vibes e os clubes que você frequenta. Um lugar onde dá vontade de estar.",
  },
  {
    q: "O que exibe no meu mural?",
    a: "As qualidades que as pessoas reconhecem em você, com o número de votos de cada uma. Também ficam ali as suas vibes e os clubes que você frequenta. É o seu retrato dentro da rede.",
  },
  {
    q: "Como funcionam as qualidades?",
    a: "São seis: bondosa, estilosa, divertida, inteligente, criativa e corajosa. Ao ver um post, você dá um voto numa qualidade específica. Um voto por pessoa por post, e ele substitui o anterior se você mudar de ideia. O que fica no mural do autor é a soma dos votos recebidos.",
  },
  {
    q: "Posso enviar perguntas para qualquer pessoa?",
    a: "Pode. Perguntas são abertas: qualquer usuário pode te mandar uma, mesmo que você não siga ele. Mas só vai pro seu perfil o que você escolher exibir.",
  },
  {
    q: "Como envio depoimentos?",
    a: "Só entre amigos. Você manda pra quem você tem amizade, e a pessoa decide se quer exibir no mural dela. Ela pode apagar quando quiser.",
  },
  {
    q: "Posso criar clubes?",
    a: "Pode. Qualquer pessoa pode criar um clube sobre o que te move e convidar gente com o mesmo interesse. Você cuida do espaço, define as regras e recebe quem quer entrar.",
  },
];

export default function FaqAccordion() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 px-5">
      <div className="max-w-[720px] mx-auto">
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
              <div key={item.q}
                className={`bg-app-surface border rounded-2xl transition ${isActive ? "border-coral-500/40" : "border-app-border hover:border-app-border/80"}`}>
                <button type="button" onClick={() => setActive(isActive ? null : i)}
                  className="flex items-center justify-between w-full text-left px-6 py-5" aria-expanded={isActive}>
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
