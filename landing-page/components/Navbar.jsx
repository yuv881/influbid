import { useState } from 'react';
import { Link } from 'react-router';
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
    <header className="flex items-center justify-between px-5 md:px-8 py-4 md:py-5 border-b border-line sticky top-0 bg-bg z-50">
      <div className="flex items-center gap-1.5 md:gap-2.5 font-extrabold text-sm md:text-[19px] tracking-tight">
        <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-brand flex items-center justify-center text-brand-ink text-sm md:text-base"><FaBolt /></span>
        <span className="hidden md:inline">INFLUBLAST</span>
      </div>
      <nav className="hidden md:flex gap-8 text-sm font-semibold text-ink-soft">
        <a href="#" className="hover:text-ink transition-colors">How it works</a>
        <a href="#" className="hover:text-ink transition-colors">Features</a>
        <a href="#" className="hover:text-ink transition-colors">Categories</a>
      </nav>
      <div className="flex items-center gap-2 md:gap-4.5">
        <Link to="/login" className="text-sm font-semibold">Sign in</Link>
        <Link to="/register" className="inline-flex items-center justify-center gap-2 px-3 py-2 md:px-5.5 md:py-2.5 rounded-lg bg-brand text-brand-ink font-bold text-xs md:text-sm cursor-pointer border-none transition-transform hover:-translate-y-px">Get started</Link>
        <button className="w-9 h-9 md:w-11 md:h-11 rounded-full border-[1.5px] border-line bg-surface cursor-pointer flex items-center justify-center text-sm md:text-base" onClick={toggleTheme} id="themeBtn">
          {!isDark ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  );
}
