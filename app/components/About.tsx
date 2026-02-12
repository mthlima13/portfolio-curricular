"use client";

import { useEffect, useState } from "react";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMounted(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("sobre");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="sobre" className="py-20 px-4 bg-white dark:bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Sobre Mim</span>
        </h2>
        <div
          className={`space-y-6 text-lg text-[var(--text-muted)] transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p>
            Olá! Sou <strong className="text-[var(--foreground)]">Matheus Fellipe Fernandes Lima</strong>, um desenvolvedor em constante aprendizado e evolução.
          </p>
          <p>
            Embora ainda não tenha experiência profissional formal, dedico meu tempo ao desenvolvimento de projetos pessoais e ao estudo contínuo das melhores práticas de programação. Minha paixão pela tecnologia me motiva a criar soluções funcionais e bem estruturadas.
          </p>
          <p>
            Tenho diversos projetos no GitHub que demonstram meu conhecimento e dedicação. Cada projeto é uma oportunidade de aprender algo novo e aplicar conceitos importantes de desenvolvimento de software.
          </p>
          <p>
            Estou sempre aberto a novas oportunidades e desafios que me permitam crescer profissionalmente e contribuir com projetos interessantes.
          </p>
        </div>
      </div>
    </section>
  );
}
