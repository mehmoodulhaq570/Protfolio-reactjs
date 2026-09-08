import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context for Dark Mode
const DarkModeContext = createContext();

const applyTheme = (isDark) => {
  document.documentElement.classList.toggle("dark", isDark);
  document.body.classList.toggle("dark", isDark);
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
};

// Custom Hook to use Dark Mode Context
export const useDarkMode = () => useContext(DarkModeContext);

// Dark Mode Provider Component
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("darkMode");
      const initialTheme = savedTheme !== null
        ? savedTheme === "true"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(initialTheme);
      return initialTheme;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    applyTheme(darkMode);
    try {
      localStorage.setItem("darkMode", String(darkMode));
    } catch {
      // Theme still works when browser storage is unavailable.
    }
  }, [darkMode]);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const nextMode = !prevMode;
      applyTheme(nextMode);
      return nextMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
