import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 bg-zinc-200 dark:bg-zinc-700 shadow-md"
      aria-label="Toggle dark mode"
    >
      <div className="transition-transform duration-300 transform scale-100 dark:scale-0">
        <Sun className="w-5 h-5 text-yellow-500" />
      </div>
      <div className="absolute transition-transform duration-300 transform scale-0 dark:scale-100">
        <Moon className="w-5 h-5 text-white" />
      </div>
    </button>
  );
};
