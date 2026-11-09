import logoLight from "../assets/logo-light.webp";
import logoDark from "../assets/logo-dark.webp";

type LogoProps = { className?: string };

/**
 * Wordmark Vibe Social com troca automatica no dark mode.
 * - logo-light.webp -> tema claro (logo escuro/colorido)
 * - logo-dark.webp  -> tema escuro (logo claro/branco)
 * Se estiverem invertidos, troque os imports.
 */
export default function Logo({ className = "h-8 w-auto" }: LogoProps) {
  return (
    <>
      <img src={logoLight} alt="Vibe Social" className={`${className} dark:hidden`} />
      <img
        src={logoDark}
        alt=""
        aria-hidden="true"
        className={`${className} hidden dark:block`}
      />
    </>
  );
}
