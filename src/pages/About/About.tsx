import Github from "../../../src/assets/icons/github.svg?react";
import Linkedin from "../../../src/assets/icons/linkedin.svg?react";

const About = () => {
  const img = "../../../src/assets/img/about.jpg";

  return (
    <section
      id="about"
      className="mt-20 md:p-20 p-6 w-full flex flex-col lg:flex-row lg:justify-between bg-medium-red-violet-950 text-medium-red-violet-50"
    >
      <figure className="w-full mb-8 lg:mb-0 lg:w-3/12 flex items-center justify-center">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-auto">
          <img
            src={img}
            alt="imagem de perfil de Patricia Moraes"
            className="w-full h-full object-cover rounded-t-full"
          />

          <span className="absolute top-6 right-6 sm:top-10 sm:right-10 w-8 h-8 sm:w-12 sm:h-12 bg-medium-red-violet-600 rounded-t-2xl rounded-br-2xl"></span>

          <span className="absolute bottom-2 -left-2 sm:bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-medium-red-violet-400 rounded-tr-2xl rounded-bl-2xl"></span>
        </div>
      </figure>

      <div className="w-full lg:w-8/12 text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-justify flex flex-col justify-center">
        <h2 className="mb-5 text-2xl sm:text-3xl md:text-4xl font-extrabold">
          Um pouco sobre mim
        </h2>
        <p>
          Antes de me tornar desenvolvedora, fui professora de ballet clássico,
          dedicando minha vida à arte de contar histórias pelo movimento desde
          os 11 anos. A dança permanece como uma grande paixão e hobby
          essencial.
        </p>
        <p>
          Minha jornada na tecnologia começou em 2020, quando um primeiro
          contato com programação despertou minha curiosidade e me levou a
          ingressar no curso de Análise e Desenvolvimento de Sistemas no
          Senac-RS. Durante a faculdade, descobri minha vocação no
          desenvolvimento front-end, explorando tecnologias como Angular e React
          para criar interfaces intuitivas e eficientes.
        </p>
        <p>
          Atualmente, atuo como desenvolvedora front-end pleno na Unicred,
          desenvolvendo telas e testes unitários na área de meios de pagamento e
          Pix. Continuo estudando e aprimorando minhas habilidades para entregar
          soluções cada vez mais inovadoras e de qualidade.
        </p>
        <div className="flex mt-8 sm:mt-10">
          <a
            href="https://github.com/wentzpatricia"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer mr-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300"
          >
            <Github className="w-full h-full" />
          </a>
          <a
            href="https://www.linkedin.com/in/patriciawentzdemoraes"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer mr-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300"
          >
            <Linkedin className="w-full h-full" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
