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
          className={`space-y-6 text-lg text-(--text-muted) transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p>
            Olá! Sou <strong className="text-foreground">Matheus Fellipe Fernandes Lima</strong>, desenvolvedor de software em formação, com foco em desenvolvimento backend utilizando Java e tecnologias relacionadas..
          </p>
          <p>
          Mesmo sem experiência profissional formal, venho construindo projetos próprios que aplicam conceitos de programação orientada a objetos, APIs REST, persistência de dados e boas práticas de engenharia de software.
          </p>
          <p>
          Embora meu foco seja o backend, também desenvolvo interfaces modernas e responsivas utilizando Next.js e TypeScript, o que me permite construir aplicações completas e bem integradas.

Mantenho um portfólio ativo no GitHub, onde desenvolvo soluções práticas que demonstram minha evolução técnica, organização de código e capacidade de resolver problemas reais.mento e dedicação. Cada projeto é uma oportunidade de aprender algo novo e aplicar conceitos importantes de desenvolvimento de software.
          </p>
          <p>
          Busco minha primeira oportunidade na área de desenvolvimento, onde eu possa aprender com profissionais experientes, contribuir com soluções eficientes e evoluir continuamente como desenvolvedor.
          </p>
        </div>
      </div>
    </section>
  );
}
