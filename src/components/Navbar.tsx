import { Hamburger } from "../assets/icons/Hamburger";
import { useState, useRef, useEffect } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen && !hamburgerRef) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#bazar-shop", label: "Bazar" },
    { href: "#stickers", label: "Stickers" },
    { href: "#services", label: "Servicios" },
    { href: "#plushies", label: "Peluches" },
    { href: "#keychains", label: "Llaveros" },
    { href: "#art", label: "Arte" },
    { href: "#sacrificio-barbarico", label: "Sacrificio Barbárico" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <header>
      <nav className="main-nav">
        <a href="/" className="logo">
          KT colectivo
        </a>

        {/* Desktop links: hidden on small screens, visible on lg and above */}
        <ul className="items-center hidden gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href}>
                <p>{l.label}</p>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger: visible on small screens only */}
        <button
          ref={hamburgerRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-button lg:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <Hamburger />
        </button>
      </nav>

      {/* Mobile menu (keeps original behavior) */}
      <nav
        ref={menuRef}
        className={`mobile-menu ${
          isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        }`}
      >
        <ul className="menu-list">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setIsMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
