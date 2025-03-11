const About = () => {
  const img = "../../../src/assets/img/about.jpg";
  return (
    <section
      id="about"
      className="mt-20 p-8 w-full flex flex-wrap  bg-medium-red-violet-950 text-medium-red-violet-50"
    >
      <figure className=" w-full md:w-2/5 min-w-[300px] min-h-[300px]">
        <img src={img} alt="imagem de perfil de patricia moraes" />
      </figure>
      <div className="w-full md:w-3/5 ">adasd</div>
    </section>
  );
};

export default About;
