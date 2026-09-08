import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeProvider';

export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { pathname, hash } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname, hash]);
  const links = [['About', 'about'], ['Research', 'research'], ['Projects', 'projects'], ['Experience', 'experience'], ['Contact', 'contact']];
  return <header className="site-header"><div className="header-inner"><Link to="/" className="brand" aria-label="Mehmood Ul Haq home">MH<span>.</span></Link><nav id="main-navigation" className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">{links.map(([label, id]) => <Link key={id} to={`/#${id}`} aria-current={hash === `#${id}` || pathname === `/${id}` ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}<Link to="/resume" className="nav-cv">CV <span aria-hidden="true">↗</span></Link></nav><div className="header-actions"><button className="icon-button" onClick={toggleDarkMode} aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'} aria-pressed={darkMode}>{darkMode ? '☀' : '☾'}</button><button className="menu-button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button></div></div></header>;
}