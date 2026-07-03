import { useState } from 'react';
import { Menu, X, Zap, Sun, Moon } from 'lucide-react';
import { useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-brand-border backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <div className="flex items-center gap-2">
            <div className="bg-brand-orange text-gray-900 dark:text-white p-2 rounded-xl flex items-center justify-center shadow-lg shadow-brand-orange/20 animate-pulse">
              <Zap className="h-5 w-5 fill-current" />
            </div>
            <span className="font-heading text-xl font-black tracking-wider text-gray-900 dark:text-white">
              INFLUBLAST
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="font-heading text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white tracking-widest transition-colors">
              HOW IT WORKS
            </a>
            <a href="#features" className="font-heading text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white tracking-widest transition-colors">
              FEATURES
            </a>
            <a href="#categories" className="font-heading text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white tracking-widest transition-colors">
              CATEGORIES
            </a>

          </div>


          <div className="hidden md:flex items-center gap-6">
            <a href="/login" className="font-heading text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white tracking-widest transition-colors">
              SIGN IN
            </a>
            <a
              href="#get-started"
              className="bg-brand-orange hover:bg-brand-orangeHover text-gray-900 dark:text-white px-6 py-3 rounded-lg font-heading text-xs font-black tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-orange/25"
            >
              GET STARTED
            </a>
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 focus:outline-none transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
          </div>


          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 focus:outline-none transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden glass-panel border-b border-brand-border py-4 px-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            <a
              href="#how-it-works"
              onClick={() => setIsOpen(false)}
              className="font-heading text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white tracking-widest py-2"
            >
              HOW IT WORKS
            </a>
            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className="font-heading text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white tracking-widest py-2"
            >
              FEATURES
            </a>
            <a
              href="#categories"
              onClick={() => setIsOpen(false)}
              className="font-heading text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white tracking-widest py-2"
            >
              CATEGORIES
            </a>

            <hr className="border-brand-border" />
            <a
              href="/login"
              onClick={() => setIsOpen(false)}
              className="font-heading text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white tracking-widest py-2"
            >
              SIGN IN
            </a>
            <a
              href="#get-started"
              onClick={() => setIsOpen(false)}
              className="bg-brand-orange hover:bg-brand-orangeHover text-gray-900 dark:text-white text-center py-3 rounded-lg font-heading text-sm font-black tracking-widest transition-all duration-300"
            >
              GET STARTED
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
