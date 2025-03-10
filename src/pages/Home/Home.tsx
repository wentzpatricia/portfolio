import Detail from '../../../src/assets/img/detail-home.svg?react';


const Home = () => {

  const handleDownload = () => {

    const fileUrl = '../../../public/doc/curriculo.pdf';

    const fileName = 'curriculo_patricia.pdf';

    const link = document.createElement('a');
    link.href = fileUrl; 
    link.download = fileName; 

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

  };

  return(
    <section id="home" className="pt-20 flex flex-wrap justify-center">
      <div className="w-full md:w-3/5 py-25 px-8">
        <p className="pb-6 text-5xl md:text-9xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,var(--color-medium-red-violet-600),var(--color-medium-red-violet-700),var(--color-medium-red-violet-800),var(--color-medium-red-violet-900),var(--color-medium-red-violet-950))] bg-[length:200%_auto] animate-gradient">
          front-end
        </span>
        </p>
        <p className="pb-6 flex flex-col  md:text-2xl font-normal leading-relaxed text-justify">
          <span>Olá ✨, me chamo Patrícia e sou uma desenvolvedora front-end apaixonada por criar interfaces digitais funcionais, responsivas e visualmente atraentes.
          Com um olhar atento aos detalhes e foco em boas práticas de desenvolvimento, meu objetivo é transformar ideias em experiências digitais que encantem os usuários.
          Adoro trabalhar com tecnologias modernas e estou sempre em busca de aprender e evoluir na área.</span>
        </p>
        
        <button onClick={handleDownload} type="button" className="mt-4 px-6 py-2 bg-medium-red-violet-800 text-medium-red-violet-50 font-medium rounded-lg cursor-pointer">Baixar resumo</button>
      </div>
      <figure className="my-2 w-full md:w-2/5 min-w-[300px] min-h-[300px] p-4 flex justify-center items-center relative text-medium-red-violet-700">
        <Detail className="absolute max-w-full max-h-full animate-rotate-diagonal" />
        <Detail className="absolute max-w-full max-h-full" />
      </figure>
      
    </section>
  )
};

export default Home;
