/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Olá, eu sou{" "}
            <span className="gradient-text">Matheus Fellipe</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Desenvolvedor apaixonado por criar soluções elegantes
          </p>
          <p className="text-lg md:text-xl text-[var(--text-muted)] mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Ainda estou construindo minha experiência profissional, mas já tenho projetos interessantes no GitHub que demonstram minha paixão por programação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <button
              onClick={() => handleScrollTo("projetos")}
              className="px-8 py-4 bg-[var(--primary)] text-white rounded-lg font-semibold hover:bg-[var(--primary-dark)] transition-all duration-300 card-hover"
            >
              Ver Projetos
            </button>
            <button
              onClick={() => handleScrollTo("contato")}
              className="px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg font-semibold hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
