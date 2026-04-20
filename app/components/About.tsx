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
          Embora meu foco seja o backend Java + Spring Boot, também desenvolvo interfaces modernas e responsivas utilizando Next.js e TypeScript, o que me permite construir aplicações completas e bem integradas.

Mantenho um portfólio ativo no GitHub, onde desenvolvo soluções práticas que demonstram minha evolução técnica, organização de código e capacidade de resolver problemas reais.
          </p>
          <p>
          Busco minha primeira oportunidade na área de desenvolvimento, onde eu possa aprender com profissionais experientes, contribuir com soluções eficientes e evoluir continuamente como desenvolvedor.
          </p>

          <div className="mt-10 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 bg-zinc-50 dark:bg-zinc-900/40">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Experiencia Profissional
            </h3>
            <p className="text-base md:text-lg text-(--text-muted) mb-2">
              <strong className="text-foreground">Desenvolvedor de Software Jr</strong> - Remoto - Sao Paulo
            </p>
            <p className="text-base md:text-lg text-(--text-muted) mb-4">
              <strong className="text-foreground">Empresa:</strong> Antarez
            </p>
            <p>
              Atuo como desenvolvedor fullstack freelancer, participando do desenvolvimento e manutencao de aplicacoes web modernas, utilizando Java com Spring Boot no backend e Next.js/React no frontend.
            </p>
            <p>
              No backend, fui responsavel pela criacao de APIs RESTful robustas, implementacao de regras de negocio e integracao com bancos de dados relacionais (SQL) e nao relacionais (MongoDB), garantindo performance e escalabilidade das aplicacoes.
            </p>
            <p>
              No frontend, desenvolvi interfaces dinamicas e responsivas com foco em experiencia do usuario, utilizando boas praticas de componentizacao, tipagem e organizacao de codigo.
            </p>
            <p>
              Tambem utilizei Docker para containerizacao das aplicacoes, facilitando a padronizacao de ambientes e o processo de deploy.
            </p>
            <p className="font-semibold text-foreground">Principais responsabilidades e tecnologias:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Desenvolvimento de APIs com Java e Spring Boot</li>
              <li>Criacao de interfaces com React e Next.js</li>
              <li>Integracao com bancos de dados SQL e MongoDB</li>
              <li>Containerizacao com Docker</li>
              <li>Versionamento de codigo com Git</li>
              <li>Aplicacao de boas praticas de desenvolvimento (Clean Code, organizacao em camadas, etc.)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
