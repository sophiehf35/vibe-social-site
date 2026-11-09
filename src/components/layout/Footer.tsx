import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="border-t border-app-border bg-app-bg">
      <div className="wrapper py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo className="h-6 w-auto" />
        <span className="text-sm text-app-muted">© 2026 Vibe Social</span>
      </div>
    </footer>
  );
}
