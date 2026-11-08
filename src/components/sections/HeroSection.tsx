import { Sparkles, Heart, MessageSquare, Check } from "lucide-react";

function Subheading({ text }: { text: string }) {
  return (
    <div className="rounded-full mb-6 max-w-fit mx-auto bg-linear-to-r from-coral-500/40 to-gold-500/30 p-0.5">
      <div className="bg-app-bg py-2 text-sm items-center gap-2 px-5 inline-flex text-app-text/90 rounded-full">
        <Sparkles className="w-3.5 h-3.5 text-coral-500" />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="pt-16 relative overflow-hidden">
      <div className="max-w-[120rem] mx-auto relative">
        <div className="wrapper">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center pb-16">
              <Subheading text="Sua rede. Suas vibes." />
              <h1 className="text-app-text mx-auto font-bold mb-4 text-4xl sm:text-[50px] sm:leading-[64px] max-w-[740px]">
                Curtida é vaidade. <span className="text-coral-500">Virtude é memória.</span>
              </h1>
              <p className="max-w-[580px] text-center mx-auto text-app-muted text-base">
                Uma rede social onde você curte posts, mas também reconhece virtudes
                em quem convive com você. Vibes permanentes. Depoimentos só entre
                amigos mútuos. Moderação no seu aparelho.
              </p>
              <div className="mt-9 flex sm:flex-row flex-col gap-3 relative z-30 items-center justify-center">
                <button
                  disabled
                  className="gradient-btn h-12 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium cursor-not-allowed opacity-90"
                >
                  Em breve na Play Store
                </button>
                <a
                  href="#features"
                  className="h-12 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm border border-app-border bg-app-surface text-app-text hover:bg-app-soft transition"
                >
                  Ver como funciona
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-[360px] mx-auto relative">
            <div className="phone-frame rounded-[44px] p-2 relative z-30">
              <div className="bg-app-bg rounded-[36px] aspect-[9/19] p-4 flex flex-col overflow-hidden">
                <div className="h-6 w-24 bg-black rounded-full mx-auto mb-4" />
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-coral-500/20 border border-coral-500/30 flex items-center justify-center">
                      <Heart className="w-3.5 h-3.5 text-coral-500" fill="currentColor" />
                    </div>
                    <div>
                      <div className="text-[10px] text-app-text font-semibold">@sophie</div>
                      <div className="text-[8px] text-app-muted">vibe: música</div>
                    </div>
                  </div>
                  <MessageSquare className="w-4 h-4 text-app-muted" />
                </div>
                <div className="space-y-2.5 flex-1">
                  <div className="bg-app-surface rounded-2xl p-3 border border-app-border">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="text-[9px] bg-coral-500/15 text-coral-500 px-1.5 py-0.5 rounded-full">bondosa</span>
                      <span className="text-[9px] bg-gold-500/15 text-gold-500 px-1.5 py-0.5 rounded-full">criativa</span>
                    </div>
                    <p className="text-[10px] text-app-text leading-relaxed">Hoje a tarde foi boa demais. Fazia tempo que não ria assim.</p>
                    <div className="flex items-center gap-3 mt-2 text-[9px] text-app-muted">
                      <span className="flex items-center gap-0.5"><Heart className="w-2.5 h-2.5" /> 12 curtidas</span>
                      <span>3 virtudes</span>
                    </div>
                  </div>
                  <div className="bg-app-surface rounded-2xl p-3 border border-app-border">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="text-[9px] bg-green-500/15 text-green-500 px-1.5 py-0.5 rounded-full">inteligente</span>
                    </div>
                    <p className="text-[10px] text-app-text leading-relaxed">Alguém que eu confio disse que eu tô no caminho certo.</p>
                    <div className="flex items-center gap-3 mt-2 text-[9px] text-app-muted">
                      <span className="flex items-center gap-0.5"><Heart className="w-2.5 h-2.5" /> 5 curtidas</span>
                      <span>1 virtude</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-coral-500/10 border border-coral-500/20 rounded-full px-3 py-2 flex items-center justify-between">
                  <span className="text-[9px] text-coral-500">Virtudes que recebeu no perfil</span>
                  <Check className="w-3 h-3 text-coral-500" />
                </div>
              </div>
            </div>
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-coral-500/20 blur-[120px] pointer-events-none z-10" />
          </div>
        </div>
        <div className="hero-glow-bg pointer-events-none w-full h-64 absolute z-10 bottom-0" />
      </div>
    </section>
  );
}
