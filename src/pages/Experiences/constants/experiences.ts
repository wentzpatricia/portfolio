export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "unicred",
    company: "UNICRED",
    position: "Desenvolvedora Front-end – Meios de Pagamento e Pix",
    period: "Jun de 2024 - até o momento",
    description: [
      "Desenvolvimento de telas seguindo os protótipos do Figma, juntamente com a implementação de testes unitários.",
      "Utilização de TypeScript e React no front-end, além de Jest e Testing Library para testes unitários.",
      "Atuação em um projeto na área de meios de pagamento e Pix.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "GIT",
      "Jest",
      "Testing Library",
      "NestJS",
    ],
  },
  {
    id: "identity-matrix",
    company: "Identity Matrix",
    position: "Revisora Técnica Front-end Freelancer",
    period: "Mar de 2025 - Ago de 2025",
    description: [
      "Revisão de Pull Requests, garantindo qualidade do código, padronização e boas práticas de desenvolvimento.",
      "Criação de protótipos de telas no Figma, assegurando consistência entre design e implementação.",
      "Utilização de TypeScript e React no front-end.",
      "Atuação em um projeto voltado para captação de leads nos EUA.",
    ],
    technologies: ["React", "TypeScript", "Figma", "Tailwind", "GIT"],
  },
  {
    id: "infinity",
    company: "Infinity",
    position: "Desenvolvedora Front-end (Freelancer)",
    period: "Nov de 2023 - Jul de 2024",
    description: [
      "Elaboração e desenvolvimento de layouts de telas seguindo o template Metronic.",
      "Uso de Figma para prototipagem, Angular, TypeScript e RxJS para desenvolvimento e SCSS e Bootstrap para estilização.",
      "Atuação em um projeto white-label, sendo a principal responsável pelo front-end, organizando a arquitetura e criando componentes reutilizáveis e dinâmicos.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "RXJS",
      "Figma",
      "Bootstrap",
      "GIT",
      "SCSS",
      "HTML",
    ],
  },
  {
    id: "evo-one",
    company: "Evo One",
    position: "Desenvolvedora Front-end",
    period: "Mar de 2023 - Jun de 2024",
    description: [
      "Elaboração e desenvolvimento de layouts de telas.",
      "Uso de Figma para prototipagem, Angular, TypeScript e RxJS para desenvolvimento e SCSS, Angular Material e Bootstrap para estilização.",
      "Participação em um sistema white-label de monitoramento e registro de ocorrências, destinado a cidades, onde agentes recebiam e atendiam ocorrências criadas por cidadãos ou funcionários.",
    ],
    technologies: [
      "Angular",
      "HTML",
      "Typescript",
      "SCSS",
      "Figma",
      "Bootstrap",
      "RXJS",
      "GIT",
    ],
  },
  {
    id: "ilegra",
    company: "Ilegra",
    position: "Estagiária Jovem Talento",
    period: "Mar de 2022 - Mar de 2023",
    description: [
      "Participei de trilhas de aprendizado técnico com foco em JavaScript, TypeScript, Angular, React e SASS, além de desenvolver habilidades interpessoais por meio de feedback contínuo de profissionais seniores.",
      "Desenvolvi projetos práticos de front-end para consolidar o conhecimento técnico.",
      "Colaborei em um ambiente ágil, utilizando controle de versão com Git e seguindo as melhores práticas de desenvolvimento.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Typescript",
      "Javascript",
      "SASS",
      "Angular",
      "React",
      "Styled Components",
      "GIT",
    ],
  },
];
