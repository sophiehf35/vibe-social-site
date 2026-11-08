import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-app-border bg-app-bg">
      <div className="wrapper py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-app-text font-semibold">
          <span className="w-8 h-8 rounded-full bg-coral-500/15 border border-coral-500/30 flex items-center justify-center">
            <Heart className="w-3.5 h-3.5 text-coral-500" fill="currentColor" />
          </span>
          Vibe Social
        </div>
        <div className="flex items-center gap-6 text-sm text-app-muted">
          <a href="#features" className="hover:text-app-text transition">Diferenciais</a>
          <a href="#faq" className="hover:text-app-text transition">Dúvidas</a>
          <span>© 2026 Vibe Social</span>
        </div>
      </div>
    </footer>
  );
}
