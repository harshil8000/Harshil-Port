// @flow strict
"use client";

import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get theme from localStorage or default to dark
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-24 right-8 p-3 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow-primary z-40 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <FiSun className={`absolute inset-0 w-6 h-6 text-yellow-400 transition-all duration-300 ${
          theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"
        }`} />
        <FiMoon className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-300 ${
          theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
        }`} />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-700">
        {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
}

export default ThemeToggle;