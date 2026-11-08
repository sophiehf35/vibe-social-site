import { Heart, Users, Shield, ArrowRight } from "lucide-react";

export default function BenefitsGrid() {
  return (
    <section id="benefits" className="py-24 px-5">
      <div className="max-w-[72rem] mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-app-text text-3xl md:text-4xl max-w-2xl mx-auto">
            Três coisas que a gente levou <span className="text-gold-500">a sério</span>
          </h2>
          <p className="max-w-xl mx-auto leading-6 text-app-muted">
            Não é o que a rede te dá. É o que a rede te devolve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-6 bg-app-surface border border-app-border rounded-[20px] p-10 relative overflow-hidden">
            <div className="absolute top-6 right-6 text-[80px] text-coral-500/10 font-black leading-none select-none">01</div>
            <div className="w-12 h-12 rounded-2xl bg-coral-500/15 border border-coral-500/30 flex items-center justify-center mb-6">
              <Heart className="w-5 h-5 text-coral-500" />
            </div>
            <h3 className="font-bold text-app-text text-2xl mb-3">O que fica no seu perfil</h3>
            <p className="text-app-muted leading-relaxed">
              Curtidas existem e são normais. Mas no perfil aparece o que outros
              reconheceram em você: suas virtudes. Bondosa, criativa, corajosa,
              inteligente, divertida, estilosa. Isso não some quando o post fica velho.
            </p>
          </div>

          <div className="lg:col-span-6 bg-coral-500 rounded-[20px] p-10 relative overflow-hidden">
            <div className="absolute top-6 right-6 text-[80px] text-white/10 font-black leading-none select-none">02</div>
            <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center mb-6">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-white text-2xl mb-3">Quem pode escrever sobre você</h3>
            <p className="text-white/80 leading-relaxed">
              Só amigos mútuos. E cada depoimento passa pela sua aprovação antes
              de ir ao ar. Editar um depoimento já publicado faz ele voltar pra
              fila de aprovação. Você pode recusar sem aviso ao autor.
            </p>
          </div>

          <div className="lg:col-span-12 bg-app-soft border border-app-border rounded-[20px] p-10 lg:flex lg:flex-row justify-between items-center gap-6">
            <div className="max-w-md relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center mb-6">
                <Shield className="w-5 h-5 text-gold-500" />
              </div>
              <h3 className="font-bold text-app-text text-2xl md:text-3xl mb-3">Privacidade em prática</h3>
              <p className="text-app-muted mb-6 leading-relaxed">
                Moderação de texto offline no seu aparelho. Sem SDK de tracking.
                Sem venda de dados. Bloqueio e silenciamento afetam feed, chat e
                notificação em toda a rede.
              </p>
              <a
                href="#faq"
                className="inline-flex items-center gap-2 text-sm font-medium text-coral-500 hover:text-coral-400 transition"
              >
                Ver dúvidas frequentes <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-6 lg:mt-0 flex-shrink-0 flex gap-2">
              <div className="w-20 h-20 rounded-2xl bg-coral-500/10 border border-coral-500/20 flex items-center justify-center text-3xl">🔒</div>
              <div className="w-20 h-20 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-3xl">🛡️</div>
              <div className="w-20 h-20 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-3xl">✨</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
