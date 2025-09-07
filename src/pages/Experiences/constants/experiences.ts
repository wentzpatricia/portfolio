export interface Experience {
  id: string;
  company: string;
  positionKey: string;
  periodKey: string;
  descriptionKeys: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "unicred",
    company: "UNICRED",
    positionKey: "experiences.unicred.position",
    periodKey: "experiences.unicred.period",
    descriptionKeys: [
      "experiences.unicred.description1",
      "experiences.unicred.description2",
      "experiences.unicred.description3",
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
    positionKey: "experiences.identityMatrix.position",
    periodKey: "experiences.identityMatrix.period",
    descriptionKeys: [
      "experiences.identityMatrix.description1",
      "experiences.identityMatrix.description2",
      "experiences.identityMatrix.description3",
      "experiences.identityMatrix.description4",
    ],
    technologies: ["React", "TypeScript", "Figma", "Tailwind", "GIT"],
  },
  {
    id: "infinity",
    company: "Infinity",
    positionKey: "experiences.infinity.position",
    periodKey: "experiences.infinity.period",
    descriptionKeys: [
      "experiences.infinity.description1",
      "experiences.infinity.description2",
      "experiences.infinity.description3",
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
    positionKey: "experiences.evoOne.position",
    periodKey: "experiences.evoOne.period",
    descriptionKeys: [
      "experiences.evoOne.description1",
      "experiences.evoOne.description2",
      "experiences.evoOne.description3",
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
    positionKey: "experiences.ilegra.position",
    periodKey: "experiences.ilegra.period",
    descriptionKeys: [
      "experiences.ilegra.description1",
      "experiences.ilegra.description2",
      "experiences.ilegra.description3",
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
