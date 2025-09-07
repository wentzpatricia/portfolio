import Detail from "../../../src/assets/img/detail-home.svg?react";

const Home = () => {
  const handleDownload = () => {
    const fileUrl = "../../../public/doc/curriculo.pdf";

    const fileName = "curriculo_patricia.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <section id="home" className="flex flex-wrap justify-center">
      <div className="w-full md:w-3/5 py-25 px-8">
        <p className="pb-6 text-5xl md:text-9xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,var(--color-medium-red-violet-600),var(--color-medium-red-violet-700),var(--color-medium-red-violet-800),var(--color-medium-red-violet-900),var(--color-medium-red-violet-950))] bg-[length:200%_auto] animate-gradient">
            front-end
          </span>
        </p>
        <p className="pb-6 flex flex-col  md:text-2xl font-normal leading-relaxed text-justify">
          <span>
            Olá ✨, me chamo Patrícia e sou desenvolvedora front-end,
            especializada em criar interfaces digitais funcionais, responsivas e
            visualmente atraentes. Com atenção aos detalhes e foco em boas
            práticas de desenvolvimento, busco transformar ideias em
            experiências digitais que proporcionem valor e encantem os usuários.
            Tenho experiência com tecnologias modernas e estou constantemente
            aprendendo e evoluindo para entregar soluções cada vez mais
            eficientes e inovadoras. Gosto de colaborar em projetos desafiadores
            e contribuir para produtos que sejam tanto esteticamente agradáveis
            quanto fáceis de usar.
          </span>
        </p>

        <button
          onClick={handleDownload}
          type="button"
          className="mt-4 px-6 py-2 bg-medium-red-violet-800 text-medium-red-violet-50 font-medium rounded-lg cursor-pointer"
        >
          Baixar resumo
        </button>
      </div>
      <figure className="my-2 w-full md:w-2/5 min-w-[300px] min-h-[300px] p-4 hidden md:flex justify-center items-end relative text-medium-red-violet-700">
        <Detail className="absolute max-w-full max-h-full animate-rotate-diagonal" />
        <Detail className="absolute max-w-full max-h-full" />
      </figure>
    </section>
  );
};

export default Home;
