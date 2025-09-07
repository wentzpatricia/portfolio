import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../../contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="p-2 hover:bg-medium-red-violet-800/50 cursor-pointer border border-medium-red-violet-950/20 rounded-lg transition-colors"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 text-medium-red-violet-700" />
      ) : (
        <MoonIcon className="h-5 w-5 text-medium-red-violet-700" />
      )}
    </button>
  );
}
