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

// The inline script in index.html applies the saved theme before first paint. React starts in light mode
// so the prerendered markup and the first client render match, then adopts the theme already on <html>.
// Styling uses Tailwind's `dark:` variants, so nothing flashes while this state catches up.
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
    setThemeLoaded(true);
  }, []);

  useEffect(() => {
    if (!themeLoaded) return;
    applyTheme(darkMode);
    try {
      localStorage.setItem("darkMode", String(darkMode));
    } catch {
      // Theme still works when browser storage is unavailable.
    }
  }, [darkMode, themeLoaded]);

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
