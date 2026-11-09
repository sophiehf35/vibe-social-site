import { MessageSquare, HelpCircle, Star, Users, Sparkles, Cake } from "lucide-react";

const FEATURES = [
  { icon: MessageSquare, title: "Depoimentos",
    description: "Um espaço pra quem te conhece dizer o que você significa. Só fica no seu perfil o que você quiser. Se mudar de ideia, apaga." },
  { icon: HelpCircle, title: "Perguntas",
    description: "Qualquer pessoa pode te perguntar. Mas só aparece no seu perfil o que você escolher mostrar. Curiosidade sim, exposição não." },
  { icon: Star, title: "Votos",
    description: "Suas qualidades ganham número no mural. Estiloso, divertido, criativo, bondoso: cada pessoa que reconhece soma ali." },
  { icon: Users, title: "Clubes",
    description: "Encontrar a sua turma fica fácil quando o assunto é o que te move. Clubes por interesse, com gente ali pelo mesmo motivo." },
  { icon: Sparkles, title: "Vibes",
    description: "As coisas que combinam com você aparecem onde você aparece. Quem bate o olho num post já sabe o que você gosta." },
  { icon: Cake, title: "Aniversários",
    description: "As datas de quem importa ficam sempre à vista. Você vê quem tá chegando e chega na hora certa, sem depender da rede." },
];

export default function CoreFeatures() {
  return (
    <section id="features" className="py-24 px-5">
      <div className="max-w-[72rem] mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-app-text text-3xl md:text-4xl max-w-2xl mx-auto">
            Seis jeitos de estar na <span className="text-coral-500">vibe</span>
          </h2>
          <p className="max-w-xl mx-auto leading-6 text-app-muted">
            O que você encontra quando abre o app.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="bg-app-surface p-8 border border-app-border rounded-[20px] hover:border-coral-500/40 transition">
                <div className="core-feature-icon mb-6"><Icon className="w-7 h-7 text-coral-500" /></div>
                <h3 className="mb-3 text-app-text font-bold text-xl">{f.title}</h3>
                <p className="text-app-muted text-sm leading-relaxed line-clamp-4 min-h-[91px]">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
