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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header>
      <nav className="main-nav">
        <a href="/" className="logo">
          KT colectivo
        </a>
        <button
          ref={hamburgerRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-button"
        >
          <Hamburger />
        </button>
      </nav>
      <nav
        ref={menuRef}
        className={`mobile-menu ${
          isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        }`}
      >
        <ul className="menu-list">
          <li>
            <a href="#bazar-shop" onClick={() => setIsMenuOpen(false)}>
              Bazar Shop
            </a>
          </li>
          <li>
            <a href="#stickers" onClick={() => setIsMenuOpen(false)}>
              Stickers
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#plushies" onClick={() => setIsMenuOpen(false)}>
              Peluches
            </a>
          </li>
          <li>
            <a href="#keychains" onClick={() => setIsMenuOpen(false)}>
              Llaveros
            </a>
          </li>
          <li>
            <a href="#art" onClick={() => setIsMenuOpen(false)}>
              Arte
            </a>
          </li>
          <li>
            <a
              href="#sacrificio-barbarico"
              onClick={() => setIsMenuOpen(false)}
            >
              Sacrificio Barbárico
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
