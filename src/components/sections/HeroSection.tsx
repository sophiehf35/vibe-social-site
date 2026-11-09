import { Sparkles, Mail, HelpCircle, Users, Star } from "lucide-react";

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
    <section id="hero" className="pt-0 md:pt-16 relative overflow-hidden bg-app-bg">
      <style>{`
        @keyframes hero-btn-pulse {
          0% { box-shadow: 0 0 0 0 rgba(255,107,107,0.55); }
          70% { box-shadow: 0 0 0 12px rgba(255,107,107,0); }
          100% { box-shadow: 0 0 0 12px rgba(255,107,107,0); }
        }
        .hero-btn-pulse { animation: hero-btn-pulse 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hero-btn-pulse { animation: none; }
        }
      `}</style>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(255,107,107,0.7)_0%,rgba(255,107,107,0.35)_15%,rgba(255,107,107,0.1)_30%,transparent_50%)]" />
      <div className="max-w-[120rem] w-full mx-auto relative z-10 min-h-[calc(100svh-4rem)] md:min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="wrapper">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center pb-0 md:pb-16">
              <Subheading text="Sua rede. Suas vibes." />
              <h1 className="text-app-text mx-auto font-bold mb-4 text-4xl sm:text-[50px] sm:leading-[64px] max-w-[740px]">
                Encontre pessoas que estão na mesma vibe
              </h1>
              <p className="max-w-[580px] text-center mx-auto text-app-muted text-base">
                Um lugar onde a afinidade aproxima, o respeito une e a rede cuida constantemente para que o ódio não encontre espaço
              </p>
              <div className="mt-9 flex relative z-30 items-center justify-center">
                <a
                  href="https://whatsapp.com/channel/0029VaEeaW342DcnJNTByj0U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn-pulse inline-flex items-center gap-3 md:gap-5 rounded-2xl border border-coral-500/70 bg-coral-500/20 pl-2.5 md:pl-3.5 pr-5 md:pr-[30px] py-2.5 md:py-3.5 text-app-text transition-colors hover:border-coral-500/40 hover:bg-coral-500/[0.12] max-w-[calc(100vw-40px)]"
                >
                  <span className="flex h-12 w-12 md:h-[68px] md:w-[68px] flex-shrink-0 items-center justify-center rounded-[14px] bg-coral-500 text-white">
                    <svg className="w-6 h-6 md:w-9 md:h-9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </span>
                  <span className="flex flex-col text-left leading-[1.15]">
                    <span className="text-lg sm:text-xl md:text-[26px] font-bold tracking-[-0.02em] leading-tight">Quero entrar na vibe</span>
                    <span className="mt-1 md:mt-1.5 text-[11px] sm:text-xs md:text-[13px] opacity-70">Entre no canal e acompanhe o lançamento</span>
                  </span>
                </a>
              </div>
            </div>
              
          </div>

        </div>
        <div className="pointer-events-none max-[1100px]:hidden">
          <div className="absolute top-14 left-16 floating-1">
            <div className="relative inline-flex items-center gap-2 rounded-2xl border border-coral-500/30 bg-app-surface/90 px-4 py-2.5">
              <Mail className="h-4 w-4 text-coral-500" />
              <span className="text-sm font-medium text-app-text">Envie depoimentos</span>
              <svg viewBox="0 0 24 24" className="absolute h-4 w-4 text-coral-500/70 -bottom-3 -right-4 rotate-[90deg]" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M20.8103 5.94919C21.5951 4.19841 19.8016 2.40485 18.0508 3.18969L3.64527 9.64735C1.52435 10.5981 1.43336 13.5756 3.49228 14.6541L6.508 16.2337C7.04568 16.5154 7.48464 16.9543 7.76628 17.492L9.34594 20.5077C10.4244 22.5666 13.4019 22.4757 14.3527 20.3547L20.8103 5.94919Z"/></svg>
            </div>
          </div>
          <div className="absolute left-[145px] top-[368px] floating-2 max-[1240px]:left-[80px]">
            <div className="relative inline-flex items-center gap-2 rounded-2xl border border-coral-500/30 bg-app-surface/90 px-4 py-2.5">
              <HelpCircle className="h-4 w-4 text-coral-500" />
              <span className="text-sm font-medium text-app-text">Faça perguntas</span>
              <svg viewBox="0 0 24 24" className="absolute h-4 w-4 text-coral-500/70 -top-3 -right-4 rotate-0" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M20.8103 5.94919C21.5951 4.19841 19.8016 2.40485 18.0508 3.18969L3.64527 9.64735C1.52435 10.5981 1.43336 13.5756 3.49228 14.6541L6.508 16.2337C7.04568 16.5154 7.48464 16.9543 7.76628 17.492L9.34594 20.5077C10.4244 22.5666 13.4019 22.4757 14.3527 20.3547L20.8103 5.94919Z"/></svg>
            </div>
          </div>
          <div className="absolute right-16 top-[108px] floating-3">
            <div className="relative inline-flex items-center gap-2 rounded-2xl border border-coral-500/30 bg-app-surface/90 px-4 py-2.5">
              <Users className="h-4 w-4 text-coral-500" />
              <span className="text-sm font-medium text-app-text">Entre em clubes</span>
              <svg viewBox="0 0 24 24" className="absolute h-4 w-4 text-coral-500/70 -bottom-3 -left-4 -scale-x-100 -rotate-[90deg]" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M20.8103 5.94919C21.5951 4.19841 19.8016 2.40485 18.0508 3.18969L3.64527 9.64735C1.52435 10.5981 1.43336 13.5756 3.49228 14.6541L6.508 16.2337C7.04568 16.5154 7.48464 16.9543 7.76628 17.492L9.34594 20.5077C10.4244 22.5666 13.4019 22.4757 14.3527 20.3547L20.8103 5.94919Z"/></svg>
            </div>
          </div>
          <div className="absolute top-[386px] right-[200px] floating-4 max-[1240px]:right-[80px] max-[1350px]:right-[150px] max-[1500px]:right-[200px]">
            <div className="relative inline-flex items-center gap-2 rounded-2xl border border-coral-500/30 bg-app-surface/90 px-4 py-2.5">
              <Star className="h-4 w-4 text-coral-500" />
              <span className="text-sm font-medium text-app-text">Envie votos</span>
              <svg viewBox="0 0 24 24" className="absolute h-4 w-4 text-coral-500/70 -top-3 -left-4 -scale-x-100 rotate-0" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M20.8103 5.94919C21.5951 4.19841 19.8016 2.40485 18.0508 3.18969L3.64527 9.64735C1.52435 10.5981 1.43336 13.5756 3.49228 14.6541L6.508 16.2337C7.04568 16.5154 7.48464 16.9543 7.76628 17.492L9.34594 20.5077C10.4244 22.5666 13.4019 22.4757 14.3527 20.3547L20.8103 5.94919Z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
