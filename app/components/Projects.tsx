"use client";

import Image from "next/image";
import { useInView } from "../hooks/useInView";
import GitHubIcon from "./GitHubIcon";

const projects = [
  {
    title: "IronFit",
    repoUrl: "https://github.com/mthlima13/ironmind-ai",
    description:
      "Aplicativo Android de treinamento físico que combina registro rápido de séries, planejamento de programas, análise de desempenho e recordes calculados de forma consistente no backend.",
    screenshot: "/projects/ironfit.png",
    stack: ["React Native", "Expo", "TypeScript", "Java", "Spring Boot", "MongoDB"],
  },
];

const stackColors: Record<string, string> = {
  Java:         "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Spring Boot":"bg-indigo-50 text-indigo-600 border-indigo-200",
  "Next.js":    "bg-neutral-100 text-neutral-700 border-neutral-300",
  TypeScript:   "bg-indigo-50 text-indigo-700 border-indigo-200",
  React:        "bg-indigo-50 text-indigo-600 border-indigo-200",
  PostgreSQL:   "bg-indigo-50 text-indigo-700 border-indigo-200",
  "React Native":"bg-indigo-50 text-indigo-600 border-indigo-200",
  Expo:         "bg-indigo-50 text-indigo-600 border-indigo-200",
  MongoDB:      "bg-neutral-100 text-neutral-700 border-neutral-300",
};

export default function Projects() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section id="projetos" ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Projetos</span>
        </h2>
        <div>
          <div className="grid gap-10 md:gap-12 mb-12">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block group transition-all duration-700 ${
                  inView
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-95"
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
                aria-label={`Ver repositório do projeto ${project.title} no GitHub`}
              >
                <div className="bg-linear-to-br from-(--primary)/10 to-(--secondary)/10 p-6 md:p-10 rounded-2xl border border-(--border) card-hover">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-(--primary) transition-colors">
                    {project.title}
                  </h3>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-4" aria-label="Tecnologias utilizadas">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                          stackColors[tech] ?? "bg-gray-100 text-gray-600 border-gray-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-(--text-muted) mb-6 max-w-3xl">
                    {project.description}
                  </p>

                  <div className="relative aspect-video rounded-lg overflow-hidden border border-(--border) bg-(--bg-muted) max-w-2xl">
                    <Image
                      src={project.screenshot}
                      alt={`${project.title} — preview`}
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
                      Preview indisponível
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-(--primary) font-medium">
                    <GitHubIcon />
                    Ver repositório no GitHub
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div
            className={`bg-linear-to-br from-(--primary)/10 to-(--secondary)/10 p-8 md:p-12 rounded-2xl border border-(--border) card-hover transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <div className="text-6xl mb-6" aria-hidden="true">💻</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Mais no GitHub
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
                <GitHubIcon />
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
