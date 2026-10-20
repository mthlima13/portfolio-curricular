"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Parallax: move a foto levemente para cima conforme rola
  const parallaxOffset = scrollY * 0.25;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-white">
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div
          className={`flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <h1
              className={`text-5xl md:text-6xl font-bold mb-6 text-neutral-900 transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Olá, eu sou{" "}
              <span className="gradient-text-hero">Matheus Fellipe</span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-neutral-600 mb-4 transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Desenvolvedor em formação com foco em backend e desenvolvimento web.
            </p>
            <p
              className={`text-lg text-neutral-500 mb-10 max-w-xl transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Desenvolvo projetos próprios utilizando tecnologias modernas, aplicando boas práticas, organização de código e construção de APIs e aplicações funcionais.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-all duration-700 delay-[400ms] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <button
                onClick={() => handleScrollTo("projetos")}
                className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition-all duration-300 card-hover"
              >
                Ver Projetos
              </button>
              <button
                onClick={() => handleScrollTo("contato")}
                className="px-8 py-4 border-2 border-indigo-500 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                Entre em Contato
              </button>
            </div>
          </div>

          {/* Foto com parallax */}
          <div
            ref={photoRef}
            className={`flex-shrink-0 flex justify-center md:justify-end transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transform: `translateY(-${parallaxOffset}px)` }}
          >
            <div className="relative w-64 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/curriculo.png"
                alt="Foto de Matheus Fellipe Fernandes Lima"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll — seta animada */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-all duration-700 delay-700 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <span className="text-xs text-neutral-400 tracking-widest uppercase mb-1">
          scroll
        </span>
        <div className="flex flex-col items-center gap-0.5 animate-bounce">
          <svg
            className="w-5 h-5 text-indigo-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <svg
            className="w-5 h-5 text-indigo-300 opacity-60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
