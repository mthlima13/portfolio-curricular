"use client";

import { useEffect, useState } from "react";

const technologies = [
  { name: "Java", icon: "☕", color: "from-orange-500 to-red-600" },
  { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-600" },
  { name: "TypeScript", icon: "📘", color: "from-blue-500 to-blue-700" },
  { name: "Next.js", icon: "⚡", color: "from-gray-800 to-black dark:from-gray-200 dark:to-white" },
];

export default function Skills() {
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

    const element = document.getElementById("tecnologias");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="tecnologias" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Tecnologias</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`card-hover bg-white dark:bg-[#1a1a1a] p-8 rounded-xl border border-[var(--border)] transition-all duration-500 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold text-center mb-2">{tech.name}</h3>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ${
                    mounted ? "w-full" : "w-0"
                  }`}
                  style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[var(--text-muted)] mt-12 text-lg">
          Essas são as tecnologias que uso com mais frequência em meus projetos
        </p>
      </div>
    </section>
  );
}
