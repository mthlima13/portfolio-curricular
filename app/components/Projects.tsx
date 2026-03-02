"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Projects() {
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

    const element = document.getElementById("projetos");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects = [
    {
      title: "Nutri Planner",
      repoUrl: "https://github.com/mthlima13/nutri-planner",
      description:
        "O Nutri Planner é uma plataforma moderna e inteligente para planejamento nutricional, focada em ajudar usuários a baterem suas metas de calorias e macros através de cardápios semanais personalizados, respeitando restrições alimentares.",
      screenshot: "/projects/nutri.png",
    },
    {
      title: "Pass Core - Gerenciador de Senhas",
      repoUrl: "https://github.com/mthlima13/pass-core",
      description:
        "Gerenciador de senhas seguro e intuitivo que permite armazenar e acessar credenciais com criptografia AES-256.",
      screenshot: "/projects/image.png",
    },
  ];

  return (
    <section id="projetos" className="py-20 px-4 bg-white dark:bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Projetos</span>
        </h2>
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Cards dos projetos em destaque */}
          <div className="grid gap-10 md:gap-12 mb-12">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-linear-to-br from-(--primary)/10 to-(--secondary)/10 dark:from-(--primary)/20 dark:to-(--secondary)/20 p-6 md:p-10 rounded-2xl border border-(--border) card-hover">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-(--primary) transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-(--text-muted) mb-6 max-w-3xl">
                    {project.description}
                  </p>
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-(--border) bg-(--bg-muted) max-w-2xl">
                    <Image
                      src={project.screenshot}
                      alt={`${project.title} - preview`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 672px"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        const fallback = target.nextElementSibling as HTMLElement | null;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center text-(--text-muted) text-sm bg-(--bg-muted)"
                      style={{ display: "none" }}
                    >
                      Preview
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-(--primary) font-medium">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Ver repositório no GitHub
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-linear-to-br from-(--primary)/10 to-(--secondary)/10 dark:from-(--primary)/20 dark:to-(--secondary)/20 p-8 md:p-12 rounded-2xl border border-(--border) card-hover">
            <div className="text-center">
              <div className="text-6xl mb-6">💻</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Projetos no GitHub
              </h3>
              <p className="text-lg text-(--text-muted) mb-8 max-w-2xl mx-auto">
                Estou constantemente desenvolvendo projetos pessoais e compartilhando meu código no GitHub. 
                Cada projeto representa um aprendizado e uma oportunidade de aplicar novas tecnologias e conceitos.
              </p>
              <a
                href="https://github.com/mthlima13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-(--primary) text-white rounded-lg font-semibold hover:bg-(--primary-dark) transition-all duration-300 card-hover"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Ver no GitHub
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-(--text-muted) mt-12 text-lg">
          Sinta-se à vontade para explorar meus repositórios e contribuir com feedback!
        </p>
      </div>
    </section>
  );
}
