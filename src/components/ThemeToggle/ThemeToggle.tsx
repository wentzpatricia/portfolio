import { useEffect, useState } from "react";

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
    <button type="button" className="ml-2.5 p-1 hover:bg-medium-red-violet-800/50 rounded cursor-pointer" onClick={toggleTheme}>
      {theme === 'light' && '🌞'}
      {theme === 'dark' && '🌙'}
    </button>
  );
  
}