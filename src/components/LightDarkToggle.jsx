import { useEffect, useState } from "react";
import { SunMedium, Moon } from "lucide-react";

const LightDarkToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Load initial state from localStorage
    const savedMode = localStorage.getItem("theme");
    return savedMode === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="text-gray-800 dark:text-white focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <SunMedium className="w-6 h-6 transition-opacity duration-300 opacity-100" />
      ) : (
        <Moon className="w-6 h-6 transition-opacity duration-300 opacity-100" />
      )}
    </button>
  );
};

export default LightDarkToggle;
