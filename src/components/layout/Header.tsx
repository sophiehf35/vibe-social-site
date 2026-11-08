import { Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-app-bg/80 border-b border-app-border">
      <div className="wrapper py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-app-text font-bold text-lg">
          <span className="w-9 h-9 rounded-full bg-coral-500/15 border border-coral-500/30 flex items-center justify-center">
            <Heart className="w-4 h-4 text-coral-500" fill="currentColor" />
          </span>
          Vibe Social
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-app-muted">
          <a href="#features" className="hover:text-app-text transition">Diferenciais</a>
          <a href="#benefits" className="hover:text-app-text transition">Como funciona</a>
          <a href="#faq" className="hover:text-app-text transition">Dúvidas</a>
        </nav>
        <button
          disabled
          className="px-4 py-2 text-xs rounded-full bg-app-surface border border-app-border text-app-muted cursor-not-allowed"
          title="Em breve"
        >
          Em breve na Play Store
        </button>
      </div>
    </header>
  );
}
