import { useState } from 'react';
import { Link } from 'react-router';
import { FaBolt, FaMoon, FaSun, FaBars, FaXmark } from 'react-icons/fa6';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <header className="flex items-center justify-between px-5 md:px-8 py-4 md:py-5 border-b border-line sticky top-0 bg-bg z-50 transition-colors duration-300">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-1.5 md:gap-2.5 font-extrabold text-[15px] md:text-[19px] tracking-tight text-ink no-underline">
        <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-brand flex items-center justify-center text-brand-ink text-sm md:text-base">
          <FaBolt />
        </span>
        <span>INFLUBLAST</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 text-sm font-semibold text-ink-soft">
        <a href="#" className="hover:text-ink transition-colors">How it works</a>
        <a href="#" className="hover:text-ink transition-colors">Features</a>
        <a href="#" className="hover:text-ink transition-colors">Categories</a>
      </nav>

      {/* Desktop Actions + Theme Toggle */}
      <div className="flex items-center gap-2 md:gap-4.5">
        <Link to="/login" className="hidden md:inline-block text-sm font-semibold hover:text-brand transition-colors text-ink">Sign in</Link>
        <Link to="/register" className="hidden md:inline-flex items-center justify-center gap-2 px-5.5 py-2.5 rounded-lg bg-brand text-brand-ink font-bold text-sm cursor-pointer border-none transition-transform hover:-translate-y-px no-underline">
          Get started
        </Link>
        
        {/* Theme Toggle Button */}
        <button 
          className="w-9 h-9 md:w-11 md:h-11 rounded-full border-[1.5px] border-line bg-surface cursor-pointer flex items-center justify-center text-sm md:text-base text-ink hover:bg-bg-alt transition-colors" 
          onClick={toggleTheme} 
          id="themeBtn"
          aria-label="Toggle Theme"
        >
          {!isDark ? <FaMoon /> : <FaSun />}
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="flex md:hidden w-9 h-9 rounded-full border-[1.5px] border-line bg-surface cursor-pointer items-center justify-center text-sm text-ink hover:bg-bg-alt transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-line px-5 py-6 flex flex-col gap-5 z-40 shadow-custom animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4.5 text-[15px] font-semibold text-ink-soft">
            <a href="#" className="hover:text-ink transition-colors py-1" onClick={() => setIsMenuOpen(false)}>How it works</a>
            <a href="#" className="hover:text-ink transition-colors py-1" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#" className="hover:text-ink transition-colors py-1" onClick={() => setIsMenuOpen(false)}>Categories</a>
          </nav>
          <div className="h-px bg-line my-1"></div>
          <div className="flex flex-col gap-3">
            <Link to="/login" className="flex items-center justify-center py-3 border border-line rounded-lg font-bold text-[14px] text-ink hover:bg-bg-alt transition-colors no-underline" onClick={() => setIsMenuOpen(false)}>
              Sign in
            </Link>
            <Link to="/register" className="flex items-center justify-center py-3 bg-brand text-brand-ink rounded-lg font-bold text-[14px] hover:opacity-95 transition-opacity no-underline" onClick={() => setIsMenuOpen(false)}>
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
