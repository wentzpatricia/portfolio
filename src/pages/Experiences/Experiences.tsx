import { useState } from "react";
import { experiences, Experience } from "./constants/experiences";

const Experiences = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience>(
    experiences[0]
  );

  return (
    <section
      id="experiences"
      className="py-12 px-5 md:px-24 bg-medium-gray-900 text-text"
    >
      <div className="max-w-[1600px] mx-auto">
        <header className="mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold relative">
            <span className="absolute -top-1 -left-1 w-12 h-12 border-2 border-medium-red-violet-600 rounded-full opacity-60"></span>
            Experiências
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
          <nav
            className="hidden lg:block space-y-4 lg:col-span-1"
            aria-label="Lista de experiências"
          >
            {experiences.map((experience) => (
              <button
                key={experience.id}
                className={`relative w-full  cursor-pointer text-left py-2 pl-4 transition-all duration-300 hover:pl-6 ${
                  selectedExperience.id === experience.id ? "pl-6" : ""
                }`}
                onClick={() => setSelectedExperience(experience)}
                aria-current={
                  selectedExperience.id === experience.id ? "true" : "false"
                }
              >
                {selectedExperience.id === experience.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-medium-red-violet-600 rounded-full"></div>
                )}
                <h3
                  className={`text-lg md:text-xl font-semibold transition-colors ${
                    selectedExperience.id === experience.id
                      ? "text-medium-red-violet-600"
                      : "text-text hover:text-medium-red-violet-400"
                  }`}
                >
                  {experience.company}
                </h3>
              </button>
            ))}
          </nav>

          <article className="bg-medium-gray-800 rounded-lg p-6 border border-medium-gray-700 lg:col-span-2">
            <header className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                <h3 className="text-xl md:text-2xl font-bold">
                  {selectedExperience.position}
                </h3>
                <time className="text-medium-red-violet-400 text-sm md:text-base">
                  {selectedExperience.period}
                </time>
              </div>
              <p className="text-medium-red-violet-600 text-base md:text-lg font-semibold">
                {selectedExperience.company}
              </p>
            </header>

            <ul className="list-disc list-inside mb-4 text-sm md:text-base leading-relaxed text-text">
              {selectedExperience.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {selectedExperience.technologies && (
              <footer>
                <h4 className="text-medium-red-violet-600 font-semibold text-sm mb-2">
                  Tecnologias utilizadas:
                </h4>
                <ul className="flex flex-wrap gap-2" role="list">
                  {selectedExperience.technologies.map((tech, index) => (
                    <li key={index}>
                      <span className="px-2 py-1 bg-medium-gray-700 text-medium-red-50 rounded text-xs border border-medium-gray-600">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </footer>
            )}
          </article>
        </div>

        <nav
          className="flex justify-center mt-6 lg:hidden"
          aria-label="Navegação mobile"
        >
          {experiences.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 mx-1 ${
                selectedExperience.id === experiences[index].id
                  ? "bg-medium-red-violet-600"
                  : "bg-medium-red-violet-900/50"
              }`}
              onClick={() => setSelectedExperience(experiences[index])}
              aria-label={`Ver experiência ${experiences[index].company}`}
            />
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Experiences;
