/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Início", id: "inicio" },
    { label: "Sobre", id: "sobre" },
    { label: "Tecnologias", id: "tecnologias" },
    { label: "Projetos", id: "projetos" },
    { label: "Contato", id: "contato" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, "inicio")}
            className={`text-xl font-bold transition-all duration-300 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="gradient-text">MF</span>
          </a>
          <ul className="hidden md:flex gap-6 items-center">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-sm font-medium text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors duration-300 ${
                    mounted ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <button className="text-[var(--text-muted)] hover:text-[var(--primary)]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
