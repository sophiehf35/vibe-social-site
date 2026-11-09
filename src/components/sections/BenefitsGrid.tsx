import { ShieldCheck, Bot, Headphones } from "lucide-react";

const PILLARS = [
  { num: "01", icon: ShieldCheck, accent: "coral" as const,
    title: "Combate ao ódio",
    description: "Reclamar do chefe, do time, do dia ruim? Tudo bem, é humano. Xingar, ameaçar ou atacar alguém? Não publica. A diferença entre desabafo e ataque é clara, e a gente não finge que não vê." },
  { num: "02", icon: Bot, accent: "gold" as const,
    title: "Política anti-bot",
    description: "Automação não se finge de gente aqui. Script que curte em massa, conta que posta no piloto automático, engajamento comprado: nada disso passa pela entrada. O que você vê é comportamento de gente." },
  { num: "03", icon: Headphones, accent: "green" as const,
    title: "Suporte acessível",
    description: "Ticket com resposta de verdade, pra todo mundo. Chat direto com o time, pra quem assina. Nada de robô te empurrando pra uma FAQ que não responde." },
];

const ACCENTS = {
  coral: { iconBg: "bg-coral-500/15 border-coral-500/30", iconText: "text-coral-500", num: "text-coral-500/10" },
  gold:  { iconBg: "bg-gold-500/15 border-gold-500/30",   iconText: "text-gold-500",   num: "text-gold-500/10" },
  green: { iconBg: "bg-green-500/15 border-green-500/30", iconText: "text-green-500",  num: "text-green-500/10" },
};

export default function BenefitsGrid() {
  return (
    <section id="missao" className="py-24 px-5">
      <div className="max-w-[72rem] mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-app-text text-3xl md:text-4xl max-w-2xl mx-auto">
            Nossa missão nada <span className="text-gold-500">popular</span>
          </h2>
          <p className="max-w-xl mx-auto leading-6 text-app-muted">
            Três coisas que a gente não negocia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            const a = ACCENTS[p.accent];
            return (
              <div key={p.title} className="bg-app-surface border border-app-border rounded-[20px] p-10 relative overflow-hidden">
                <div className={`absolute top-6 right-6 text-[80px] font-black leading-none select-none ${a.num}`}>{p.num}</div>
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 ${a.iconBg}`}>
                  <Icon className={`w-5 h-5 ${a.iconText}`} />
                </div>
                <h3 className="font-bold text-app-text text-2xl mb-3">{p.title}</h3>
                <p className="text-app-muted leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
