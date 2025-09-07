import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";
import Experiences from "../../pages/Experiences/Experiences";

const MainContent = () => {
  return (
    <main className="w-full md:pt-20 md:px-15 flex flex-col pt-15 px-5">
      <Home />
      <About />
      <Experiences />
    </main>
  );
};

export default MainContent;
