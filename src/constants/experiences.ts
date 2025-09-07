export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: "evo-one",
    company: "Evo One",
    position: "Frontend Developer",
    period: "Mar de 2023 - atualmente",
    description: "Desenvolvimento de interfaces modernas e responsivas utilizando React e TypeScript. Trabalho com equipes ágeis para criar soluções digitais inovadoras que atendem às necessidades dos clientes. Responsável pela implementação de componentes reutilizáveis e otimização de performance.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Git"]
  },
  {
    id: "ilegra",
    company: "Ilegra",
    position: "Desenvolvedora Frontend",
    period: "Jan de 2022 - Fev de 2023",
    description: "Desenvolvimento de aplicações web utilizando Angular e React. Colaboração em projetos de grande escala para clientes corporativos. Implementação de testes unitários e integração com APIs REST. Participação em code reviews e mentoria de desenvolvedores júnior.",
    technologies: ["Angular", "React", "JavaScript", "SCSS", "Jest", "Cypress"]
  },
  {
    id: "kinghost",
    company: "KingHost",
    position: "Desenvolvedora Frontend Júnior",
    period: "Jun de 2021 - Dez de 2021",
    description: "Primeira experiência profissional como desenvolvedora frontend. Desenvolvimento de landing pages e interfaces administrativas. Aprendizado de boas práticas de desenvolvimento e trabalho em equipe. Contribuição para melhorias na experiência do usuário.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"]
  }
];
