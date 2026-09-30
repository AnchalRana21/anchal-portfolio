import { Logo } from "@/components/Icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks } from "@/lib/data";

export function Header() {
  return (
    <header className="site">
      <nav className="container" aria-label="Main">
        <a className="brand" href="#top">
          <Logo />
          <span className="wordmark">
            Anchal<span className="cursor" />
          </span>
        </a>
        <div className="nav-links label">
          {navLinks.map((l, i) => (
            <a key={l.href} href={l.href} aria-current={i === 0 ? "page" : undefined}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <ThemeToggle />
          <a className="btn" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
