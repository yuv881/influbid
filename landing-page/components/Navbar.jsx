import { useState } from 'react';
import { FaBolt, FaMoon, FaSun } from 'react-icons/fa6';

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme') || 'light';
      return theme === 'dark' || document.documentElement.classList.contains('dark');
    }
    return false;
  });

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <header>
      <div className="logo">
        <span className="mark"><FaBolt /></span>INFLUBLAST
      </div>
      <nav>
        <a href="#">How it works</a>
        <a href="#">Features</a>
        <a href="#">Categories</a>
      </nav>
      <div className="header-right">
        <a href="#" style={{ fontSize: '14px', fontWeight: 600 }}>Sign in</a>
        <button className="btn btn-brand">Get started</button>
        <button className="theme-toggle" onClick={toggleTheme} id="themeBtn">
          {!isDark ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  );
}
