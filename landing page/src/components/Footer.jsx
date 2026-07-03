import React, { useState } from 'react';
import { Zap, ShieldCheck, X } from 'lucide-react';

export default function Footer() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(null);

  const handleCookieAccept = (accepted) => {
    setCookieConsent(accepted);
    setShowCookieSettings(false);
  };

  return (
    <footer className="bg-brand-dark py-8 border-t border-brand-border/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left side: Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-brand-orange text-white p-2 rounded-xl flex items-center justify-center shadow-lg shadow-brand-orange/20">
              <Zap className="h-4 w-4 fill-current" />
            </div>
            <span className="font-heading text-lg font-black tracking-wider text-white">
              INFLUBLAST
            </span>
          </div>

          {/* Center: Copyright */}
          <div className="text-center md:text-left text-xs text-gray-500 font-medium tracking-wide">
            © 2026 Influblast • Influencer Marketplace Platform
          </div>

          {/* Right side: Links */}
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-xs text-gray-500 hover:text-white transition-colors font-medium">
              Privacy
            </a>
            <a href="#terms" className="text-xs text-gray-500 hover:text-white transition-colors font-medium">
              Terms
            </a>
            <a href="#contact" className="text-xs text-gray-500 hover:text-white transition-colors font-medium">
              Contact
            </a>
          </div>

        </div>
      </div>

      {/* Floating Cookie Settings Trigger (matches bottom-left placement in screenshots) */}
      <div className="fixed bottom-4 left-4 z-40">
        <button
          onClick={() => setShowCookieSettings(true)}
          className="bg-brand-dark/95 hover:bg-brand-cardHover border border-brand-border hover:border-gray-500 text-gray-400 hover:text-white px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-wide transition-all duration-300 shadow-md backdrop-blur-md flex items-center gap-1.5"
        >
          <ShieldCheck className="h-3 w-3 text-brand-orange" />
          Manage cookies or opt out
        </button>
      </div>

      {/* Cookie Consent Modal/Drawer */}
      {showCookieSettings && (
        <div className="fixed bottom-4 left-4 z-50 max-w-sm w-full bg-brand-card border border-brand-border rounded-xl p-5 shadow-2xl animate-fadeIn backdrop-blur-lg">
          <div className="flex items-start justify-between gap-2 mb-3">
            <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
              Cookie Consent Settings
            </h5>
            <button
              onClick={() => setShowCookieSettings(false)}
              className="text-gray-500 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xxs sm:text-xs text-gray-400 font-normal leading-relaxed mb-4">
            We use cookies to optimize performance, customize analytics metrics, and personalize campaign match matching services.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => handleCookieAccept(true)}
              className="flex-1 bg-brand-orange hover:bg-brand-orangeHover text-white py-2 rounded-lg font-heading text-[10px] font-black tracking-widest transition-all duration-300"
            >
              ACCEPT ALL
            </button>
            <button
              onClick={() => handleCookieAccept(false)}
              className="flex-1 bg-brand-dark hover:bg-brand-cardHover border border-brand-border text-gray-300 py-2 rounded-lg font-heading text-[10px] font-black tracking-widest transition-all duration-300"
            >
              OPT OUT
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
