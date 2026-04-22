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

          <div className="mt-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-5">
              Experiência Profissional
            </h3>

            <article className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80 bg-linear-to-br from-zinc-50 to-white dark:from-zinc-900/60 dark:to-zinc-900/30 p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-600">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_45%)]" />

              <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <p className="text-sm md:text-base font-medium text-indigo-600 dark:text-indigo-400 mb-1">
                    Freelancer • Atual
                  </p>
                  <h4 className="text-xl md:text-2xl font-bold text-foreground">
                    Desenvolvedor de Software Jr
                  </h4>
                  <p className="text-(--text-muted) mt-1">
                    Antarez • Remoto • São Paulo
                  </p>
                </div>
              </div>

              <div className="relative space-y-4 text-base md:text-lg leading-relaxed text-(--text-muted)">
                <p>
                  Atuo como desenvolvedor fullstack freelancer, participando do desenvolvimento e manutenção de aplicações web modernas, utilizando Java com Spring Boot no backend e Next.js/React no frontend.
                </p>
                <p>
                  No backend, fui responsável pela criação de APIs RESTful robustas, implementação de regras de negócio e integração com bancos de dados relacionais (SQL) e não relacionais (MongoDB), garantindo performance e escalabilidade das aplicações.
                </p>
                <p>
                  No frontend, desenvolvi interfaces dinâmicas e responsivas com foco em experiência do usuário, utilizando boas práticas de componentização, tipagem e organização de código.
                </p>
                <p>
                  Também utilizei Docker para containerização das aplicações, facilitando a padronização de ambientes e o processo de deploy.
                </p>
              </div>

              <div className="relative mt-6 pt-5 border-t border-zinc-200 dark:border-zinc-700">
                <p className="font-semibold text-foreground mb-3">Principais responsabilidades e tecnologias:</p>
                <ul className="flex flex-wrap gap-2">
                  <li className="rounded-full border border-zinc-300 dark:border-zinc-600 px-3 py-1 text-sm text-zinc-700 dark:text-zinc-200">Java + Spring Boot</li>
                  <li className="rounded-full border border-zinc-300 dark:border-zinc-600 px-3 py-1 text-sm text-zinc-700 dark:text-zinc-200">React + Next.js</li>
                  <li className="rounded-full border border-zinc-300 dark:border-zinc-600 px-3 py-1 text-sm text-zinc-700 dark:text-zinc-200">SQL + MongoDB</li>
                  <li className="rounded-full border border-zinc-300 dark:border-zinc-600 px-3 py-1 text-sm text-zinc-700 dark:text-zinc-200">Docker</li>
                  <li className="rounded-full border border-zinc-300 dark:border-zinc-600 px-3 py-1 text-sm text-zinc-700 dark:text-zinc-200">Git</li>
                  <li className="rounded-full border border-zinc-300 dark:border-zinc-600 px-3 py-1 text-sm text-zinc-700 dark:text-zinc-200">Clean Code</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
