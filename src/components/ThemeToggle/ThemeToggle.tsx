import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export function ThemeToggle()  {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('@dark-mode-react-tailwind:theme-1.0.0', newTheme);
    setTheme(newTheme);

    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    const themeFromLocalStorage = 
      localStorage.getItem('@dark-mode-react-tailwind:theme-1.0.0');

    if (themeFromLocalStorage) {
      setTheme(themeFromLocalStorage);
      document.documentElement.classList.toggle('dark', themeFromLocalStorage === 'dark');
    }
  }, []);

  return (
    <button type="button" className="ml-2.5 p-1 
     hover:bg-medium-red-violet-800/50 rounded cursor-pointer" 
      onClick={toggleTheme}>
      {theme === 'dark' ? (<MoonIcon  className="h-6 w-6 text-medium-red-violet-700"/> ) : (<SunIcon className="h-6 w-6 text-medium-red-violet-700"/>)}
    </button>
  );
  
}