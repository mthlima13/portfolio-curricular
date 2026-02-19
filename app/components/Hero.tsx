/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";

const STARS = [
  { left: "5%", top: "12%", size: "small", delay: 0 },
  { left: "15%", top: "8%", size: "medium", delay: 0.5 },
  { left: "25%", top: "25%", size: "small", delay: 1 },
  { left: "8%", top: "45%", size: "large", delay: 0.2 },
  { left: "22%", top: "60%", size: "small", delay: 1.5 },
  { left: "3%", top: "78%", size: "medium", delay: 0.8 },
  { left: "35%", top: "15%", size: "small", delay: 0.3 },
  { left: "42%", top: "35%", size: "large", delay: 1.2 },
  { left: "55%", top: "8%", size: "small", delay: 0.6 },
  { left: "65%", top: "22%", size: "medium", delay: 0.1 },
  { left: "75%", top: "40%", size: "small", delay: 1.8 },
  { left: "88%", top: "18%", size: "large", delay: 0.4 },
  { left: "92%", top: "55%", size: "medium", delay: 1 },
  { left: "78%", top: "70%", size: "small", delay: 0.7 },
  { left: "95%", top: "82%", size: "small", delay: 1.3 },
  { left: "85%", top: "90%", size: "medium", delay: 0.9 },
  { left: "12%", top: "88%", size: "small", delay: 0.2 },
  { left: "48%", top: "75%", size: "medium", delay: 1.6 },
  { left: "62%", top: "55%", size: "small", delay: 0.5 },
  { left: "38%", top: "85%", size: "large", delay: 1.1 },
  { left: "50%", top: "5%", size: "small", delay: 0.9 },
  { left: "18%", top: "32%", size: "medium", delay: 1.4 },
  { left: "72%", top: "58%", size: "small", delay: 0.4 },
  { left: "96%", top: "35%", size: "small", delay: 1.7 },
  { left: "30%", top: "92%", size: "medium", delay: 0.6 },
  { left: "6%", top: "68%", size: "small", delay: 1.2 },
  { left: "58%", top: "42%", size: "large", delay: 0.3 },
  { left: "80%", top: "12%", size: "small", delay: 1.5 },
  { left: "45%", top: "48%", size: "small", delay: 0.1 },
  { left: "10%", top: "28%", size: "medium", delay: 0.8 },
];

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
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-black">
      {/* Stellar background - full black space */}
      <div className="hero-stellar-bg" aria-hidden>
        <div className="starfield">
          {STARS.map((star, i) => (
            <div
              key={i}
              className={`star star--${star.size}`}
              style={{
                left: star.left,
                top: star.top,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
        </div>
        {/* Purple gradient glow around cube area */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139, 92, 246, 0.25), transparent 70%)",
          }}
          aria-hidden
        />
      </div>
      {/* Rotating purple gradient cube */}
      <div className="cube-container">
        <div className="cube">
          <div className="cube-face front" aria-hidden />
          <div className="cube-face back" aria-hidden />
          <div className="cube-face right" aria-hidden />
          <div className="cube-face left" aria-hidden />
          <div className="cube-face top" aria-hidden />
          <div className="cube-face bottom" aria-hidden />
        </div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-white">
            Olá, eu sou{" "}
            <span className="gradient-text-hero">Matheus Fellipe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Desenvolvedor em formação com foco em backend e desenvolvimento web.
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Desenvolvo projetos próprios utilizando tecnologias modernas, aplicando boas práticas, organização de código e construção de APIs e aplicações funcionais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <button
              onClick={() => handleScrollTo("projetos")}
              className="px-8 py-4 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-500 transition-all duration-300 card-hover"
            >
              Ver Projetos
            </button>
            <button
              onClick={() => handleScrollTo("contato")}
              className="px-8 py-4 border-2 border-violet-500 text-violet-400 rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition-all duration-300"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
