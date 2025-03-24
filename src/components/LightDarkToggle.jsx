import { useState } from "react";

const LightDarkToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="text-gray-800 dark:text-white focus:outline-none"
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default LightDarkToggle;