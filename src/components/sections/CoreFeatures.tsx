import { MessageSquare, HelpCircle, Star, Users, Sparkles, Cake } from "lucide-react";

const FEATURES = [
  { icon: MessageSquare, title: "Depoimentos",
    description: "Só amigos mútuos escrevem sobre você. Cada depoimento passa pela sua aprovação antes de ir ao ar — e editar um já publicado volta pra fila. Você apaga quando quiser." },
  { icon: HelpCircle, title: "Perguntas",
    description: "Caixinha de perguntas abertas ou anônimas pra sua rede, com filtro de quem pode responder. Sem caixinha de ódio: moderação local roda antes do envio." },
  { icon: Star, title: "Votos",
    description: "Reconheça virtudes em quem convive com você: bondosa, criativa, inteligente, corajosa. 1 voto por pessoa por post — e o que fica no perfil são as virtudes recebidas." },
  { icon: Users, title: "Clubes",
    description: "Grupos por interesse, sem algoritmo empurrando. Entre nos clubes que fazem sentido pra você e converse com quem está na mesma vibe — de verdade." },
  { icon: Sparkles, title: "Vibes",
    description: "148 interesses permanentes que definem você. Sem hashtag que trending e esquece. Vibe que você escolhe hoje continua pesando daqui a um ano." },
  { icon: Cake, title: "Aniversários",
    description: "O dia de quem importa aparece pra você, na hora certa. Sem depender de algoritmo lembrando. Um parabéns que chega quando deve chegar." },
];

export default function CoreFeatures() {
  return (
    <section id="features" className="py-24 px-5">
      <div className="max-w-[72rem] mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-app-text text-3xl md:text-4xl max-w-2xl mx-auto">
            Seis jeitos de estar na <span className="text-coral-500">vibe</span>
          </h2>
          <p className="max-w-xl mx-auto leading-6 text-app-muted">Funcionalidades pensadas pra você se conectar sem o peso das redes de sempre.</p>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="bg-app-surface p-8 border border-app-border rounded-[20px] hover:border-coral-500/40 transition">
                <div className="core-feature-icon mb-6"><Icon className="w-7 h-7 text-coral-500" /></div>
                <h3 className="mb-3 text-app-text font-bold text-xl">{f.title}</h3>
                <p className="text-app-muted text-sm leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
