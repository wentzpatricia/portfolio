import { useEffect, useState, ReactNode } from "react";
import { ThemeContext, ThemeContextType } from "../contexts/ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    
    localStorage.setItem("@dark-mode-react-tailwind:theme-1.0.0", newTheme);
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem(
      "@dark-mode-react-tailwind:theme-1.0.0"
    );

    if (themeFromLocalStorage) {
      setTheme(themeFromLocalStorage);
      document.documentElement.classList.toggle(
        "dark",
        themeFromLocalStorage === "dark"
      );
    }
  }, []);

  const value: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
