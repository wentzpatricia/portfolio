import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import { navigationItems } from "../../constants/menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(navigationItems[0].href);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveItem(`#${id}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled && !isMobileMenuOpen
          ? "bg-medium-red-violet-200/80 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        handleSmoothScroll={handleSmoothScroll}
        activeItem={activeItem}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        handleSmoothScroll={handleSmoothScroll}
        activeItem={activeItem}
        onClose={toggleMobileMenu}
      />
    </header>
  );
};

export default Header;
