import { createContext, useContext, useState, useEffect } from 'react';
const DarkModeContext = createContext();
export const useDarkMode = () => useContext(DarkModeContext);
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    try { return localStorage.getItem('darkMode') === 'true'; } catch { return false; }
  });
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    document.body.classList.toggle('dark', darkMode);
    try { localStorage.setItem('darkMode', String(darkMode)); } catch { /* Theme still works when storage is unavailable. */ }
  }, [darkMode]);
  return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode: () => setDarkMode(value => !value) }}>{children}</DarkModeContext.Provider>;
}
