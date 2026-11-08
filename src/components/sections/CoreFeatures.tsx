import { Heart, Sparkles, MessageSquare, Shield, Rss, Ban } from "lucide-react";

const FEATURES = [
  {
    icon: Heart,
    title: "Virtudes no perfil, não só números",
    description: "Curtida existe e é normal. Mas o que fica no seu perfil são as virtudes que outros reconheceram em você: bondosa, criativa, inteligente. 1 voto por pessoa por post.",
  },
  {
    icon: Sparkles,
    title: "Vibes permanentes",
    description: "148 interesses que definem você. Sem hashtag que trending e esquece. Vibe que você escolhe hoje continua pesando daqui a um ano.",
  },
  {
    icon: MessageSquare,
    title: "Depoimentos só entre amigos mútuos",
    description: "Ninguém que você não conhece pode escrever sobre você. Cada depoimento passa pela sua aprovação antes de ir ao ar. Você pode apagar quando quiser.",
  },
  {
    icon: Shield,
    title: "Moderação no seu aparelho",
    description: "O modelo de toxicidade roda localmente (offline). O que é bloqueado nunca sai do celular. Se o modelo local falhar, aí sim cai no servidor.",
  },
  {
    icon: Rss,
    title: "Feed cronológico. Personalização local.",
    description: "Sem algoritmo empurrando coisa por engajamento. Feed mostra em ordem de tempo. Re-rank por afinidade roda no seu device, não no servidor.",
  },
  {
    icon: Ban,
    title: "Sem anúncios. Sem vender seus dados.",
    description: "Sem banner, sem SDK de tracking, sem venda de perfil pra terceiro. Modelo de sustentação é via Free tier das plataformas.",
  },
];

export default function CoreFeatures() {
  return (
    <section id="features" className="py-24 px-5">
      <div className="max-w-[72rem] mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-app-text text-3xl md:text-4xl max-w-2xl mx-auto">
            O que muda no <span className="text-coral-500">Vibe Social</span>
          </h2>
          <p className="max-w-xl mx-auto leading-6 text-app-muted">
            Não é uma rede anti-curtida. É uma rede onde tem mais coisa além de curtida.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-app-surface p-8 border border-app-border rounded-[20px] hover:border-coral-500/40 transition"
              >
                <div className="core-feature-icon mb-6">
                  <Icon className="w-7 h-7 text-coral-500" />
                </div>
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
