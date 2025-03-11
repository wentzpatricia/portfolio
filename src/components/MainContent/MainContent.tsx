import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";

const MainContent = () => {
  return (
    <main className="w-full md:pt-20 md:px-15 flex flex-col pt-15 px-5">
      <Home />
      <About />
    </main>
  );
};

export default MainContent;
