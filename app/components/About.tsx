"use client";

import { useInView } from "../hooks/useInView";

export default function About() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section id="sobre" ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Sobre Mim</span>
        </h2>
        <div className="space-y-6 text-lg text-(--text-muted)">
          {/* par. 1 — entra da esquerda */}
          <p
            className={`transition-all duration-700 delay-[0ms] ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            Olá! Sou <strong className="text-foreground">Matheus Fellipe Fernandes Lima</strong>, profissional da área de Tecnologia da Informação, formado em{" "}
            <strong className="text-foreground">Análise e Desenvolvimento de Sistemas</strong> e atualmente cursando{" "}
            <strong className="text-foreground">Ciência da Computação</strong>, com foco no desenvolvimento de software e na construção de soluções tecnológicas.
          </p>
          {/* par. 2 — entra da direita */}
          <p
            className={`transition-all duration-700 delay-[150ms] ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            Tenho conhecimentos em{" "}
            <strong className="text-foreground">Java, Spring Boot, desenvolvimento de APIs REST, programação orientada a objetos, bancos de dados SQL e NoSQL, Git e integração entre sistemas</strong>.
            Também possuo habilidades no desenvolvimento frontend, utilizando{" "}
            <strong className="text-foreground">Next.js, React e TypeScript</strong>, o que me permite trabalhar tanto na construção de interfaces modernas e responsivas quanto na implementação de funcionalidades no backend.
          </p>
          {/* par. 3 — entra de baixo */}
          <p
            className={`transition-all duration-700 delay-[300ms] ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Venho aplicando meus conhecimentos em projetos próprios e no desenvolvimento de soluções práticas para meu portfólio, explorando boas práticas de programação, organização de código, persistência de dados e integração entre frontend e backend.
            Além disso, minha experiência profissional em TI contribui para minha capacidade de analisar problemas, buscar soluções eficientes e compreender as necessidades dos usuários.
          </p>
          {/* par. 4 — entra da esquerda com fade */}
          <p
            className={`transition-all duration-700 delay-[450ms] ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            Sou uma pessoa dedicada, proativa, curiosa e comprometida com o aprendizado contínuo. Gosto de enfrentar desafios, explorar novas tecnologias e transformar ideias em soluções funcionais.
            Atualmente, busco uma oportunidade na área de desenvolvimento de software, especialmente com foco em{" "}
            <strong className="text-foreground">backend Java</strong>, na qual possa contribuir com meus conhecimentos, adquirir experiência profissional na área e evoluir junto à equipe.
          </p>

          <div
            className={`mt-10 transition-all duration-700 delay-[600ms] ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-5">
              Experiência Profissional
            </h3>

            <article className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-linear-to-br from-zinc-50 to-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-zinc-300">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_45%)]" />

              <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <p className="text-sm md:text-base font-medium text-indigo-600 mb-1">
                    Freelance • mar. 2024 – o momento · 2 anos 8 meses
                  </p>
                  <h4 className="text-xl md:text-2xl font-bold text-foreground">
                    Engenheiro de Software
                  </h4>
                  <p className="text-(--text-muted) mt-1">
                    Antarez • Remoto • São Paulo, Brasil
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

              <div className="relative mt-6 pt-5 border-t border-zinc-200">
                <p className="font-semibold text-foreground mb-3">Principais responsabilidades e tecnologias:</p>
                <ul className="flex flex-wrap gap-2">
                  {[
                    "APIs com Java e Spring Boot",
                    "Interfaces com React e Next.js",
                    "SQL + MongoDB",
                    "Docker",
                    "Git",
                    "Clean Code",
                  ].map((tag) => (
                    <li key={tag} className="rounded-full border border-zinc-300 px-3 py-1 text-sm text-zinc-700">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Segunda experiência */}
            <article className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-linear-to-br from-zinc-50 to-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-zinc-300 mt-6">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_45%)]" />

              <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <p className="text-sm md:text-base font-medium text-indigo-600 mb-1">
                    Tempo integral • out. 2024 – o momento · 2 anos 1 mês
                  </p>
                  <h4 className="text-xl md:text-2xl font-bold text-foreground">
                    Técnico em Informática
                  </h4>
                  <p className="text-(--text-muted) mt-1">
                    ParaopebaNet • No local • Paraopeba, Minas Gerais
                  </p>
                </div>
              </div>

              <div className="relative space-y-4 text-base md:text-lg leading-relaxed text-(--text-muted)">
                <p>
                  Responsável pelo suporte técnico e atendimento aos usuários, atuando na configuração, manutenção e resolução de problemas em computadores, notebooks, impressoras, roteadores e switches. Experiência com instalação e configuração de equipamentos de rede, gerenciamento de conexões e diagnóstico de problemas relacionados a protocolos TCP/IP, DHCP e DNS.
                </p>
                <p>
                  Atuação na manutenção e configuração de sistemas e dispositivos, incluindo instalação de softwares, configuração de periféricos, montagem e manutenção de computadores e suporte a usuários em ambiente corporativo. Realização de troubleshooting de hardware, software e infraestrutura de rede, buscando identificar e solucionar falhas de forma ágil e eficiente.
                </p>
                <p>
                  Participação na implementação e manutenção de soluções internas de TI, contribuindo para a melhoria contínua da infraestrutura tecnológica, organização do ambiente e otimização dos processos internos. Experiência também com suporte remoto, atendimento técnico e acompanhamento de chamados, garantindo maior disponibilidade e continuidade dos serviços de TI.
                </p>
              </div>

              <div className="relative mt-6 pt-5 border-t border-zinc-200">
                <p className="font-semibold text-foreground mb-3">Principais responsabilidades e tecnologias:</p>
                <ul className="flex flex-wrap gap-2">
                  {["Suporte Técnico", "Redes TCP/IP", "DHCP & DNS", "Hardware", "Troubleshooting", "Suporte Remoto", "Infraestrutura de TI"].map((tag) => (
                    <li key={tag} className="rounded-full border border-zinc-300 px-3 py-1 text-sm text-zinc-700">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
