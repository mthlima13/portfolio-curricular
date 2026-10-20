"use client";

import { useInView } from "../hooks/useInView";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";

const technologies = [
  { name: "Java",        icon: "☕",  level: 80, color: "from-indigo-500 to-indigo-700",   label: "Avançado" },
  { name: "Spring Boot", icon: "🌱",  level: 75, color: "from-indigo-400 to-indigo-600",   label: "Avançado" },
  { name: "TypeScript",  icon: "📘",  level: 70, color: "from-indigo-500 to-violet-600",   label: "Intermediário" },
  { name: "Next.js",     icon: "⚡",  level: 70, color: "from-neutral-600 to-neutral-800", label: "Intermediário" },
  { name: "React",       icon: "⚛️",  level: 65, color: "from-indigo-400 to-indigo-500",   label: "Intermediário" },
  { name: "SQL",         icon: "🗄️",  level: 75, color: "from-indigo-600 to-indigo-800",   label: "Avançado" },
  { name: "MongoDB",     icon: "🍃",  level: 60, color: "from-indigo-400 to-violet-500",   label: "Intermediário" },
  { name: "Docker",      icon: "🐳",  level: 55, color: "from-neutral-500 to-neutral-700", label: "Básico" },
  { name: "Git",         icon: "🔀",  level: 80, color: "from-indigo-500 to-indigo-700",   label: "Avançado" },
  { name: "Node.js",     icon: "🟢",  level: 60, color: "from-indigo-400 to-indigo-600",   label: "Intermediário" },
];

interface SkillCardProps {
  tech: (typeof technologies)[number];
  index: number;
  inView: boolean;
}

function SkillCard({ tech, index, inView }: SkillCardProps) {
  const count = useAnimatedCounter(tech.level, 1000 + index * 50, inView);

  // Direções alternadas: par entra da esquerda, ímpar da direita
  const slideClass = index % 2 === 0
    ? inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
    : inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8";

  return (
    <div
      className={`card-hover bg-white p-6 rounded-xl border border-(--border) transition-all duration-600 ${slideClass}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-3xl" aria-hidden="true">{tech.icon}</span>
          <h3 className="text-base font-bold">{tech.name}</h3>
        </div>
        <span className="text-sm font-semibold text-(--primary) tabular-nums">
          {count}%
        </span>
      </div>
      <p className="text-xs text-(--text-muted) mb-3">{tech.label}</p>
      <div
        role="progressbar"
        aria-label={`${tech.name}: ${tech.level}% — ${tech.label}`}
        aria-valuenow={tech.level}
        aria-valuemin={0}
        aria-valuemax={100}
        className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden"
      >
        <div
          className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000`}
          style={{
            width: inView ? `${tech.level}%` : "0%",
            transitionDelay: `${index * 0.07 + 0.3}s`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section id="tecnologias" ref={ref} className="py-20 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="gradient-text">Tecnologias</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <SkillCard key={tech.name} tech={tech} index={index} inView={inView} />
          ))}
        </div>
        <p
          className={`text-center text-(--text-muted) mt-12 text-lg transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Essas são as tecnologias que uso com mais frequência em meus projetos
        </p>
      </div>
    </section>
  );
}
