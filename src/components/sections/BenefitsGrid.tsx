import { ShieldCheck, Fingerprint, Accessibility } from "lucide-react";

const PILLARS = [
  { num: "01", icon: ShieldCheck, accent: "coral" as const,
    title: "Combate ao ódio",
    description: "Moderação de texto roda no seu aparelho, offline. O que é tóxico nunca sai do celular. Bloqueio e silenciamento afetam feed, chat e notificação em toda a rede — sem exceção." },
  { num: "02", icon: Fingerprint, accent: "gold" as const,
    title: "Política anti-bot",
    description: "Verificação de identidade na entrada, sem SDK de tracking. Conta nova passa por triagem. Sem enxame de perfis falsos inflando número, sem engajamento comprado." },
  { num: "03", icon: Accessibility, accent: "green" as const,
    title: "Suporte acessível",
    description: "Alto contraste, navegação por teclado, leitor de tela. Canal de suporte humano, com resposta. Acessibilidade não é feature opcional — é padrão." },
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
            Três coisas que a gente levou <span className="text-gold-500">a sério</span>
          </h2>
          <p className="max-w-xl mx-auto leading-6 text-app-muted">Não é o que a rede te dá. É o que a rede te devolve.</p>
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
