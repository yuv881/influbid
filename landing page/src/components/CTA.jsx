import React from 'react';

export default function CTA() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto border-t border-brand-border/40 flex justify-center">
      {/* Glow effect card */}
      <div className="glass-panel-orange max-w-3xl w-full rounded-[32px] p-7 sm:p-16 flex flex-col items-center text-center shadow-xl shadow-brand-orange/5 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-brand-orange/10 rounded-full blur-[50px] pointer-events-none"></div>

        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
          READY TO START?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
          Join 18,000+ creators and 2,400+ brands already using Influblast to build better partnerships.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4">
          <a
            href="#create-account"
            className="bg-brand-orange hover:bg-brand-orangeHover text-white px-8 py-4 rounded-xl font-heading text-xs sm:text-sm font-black tracking-widest transition-all duration-300 w-full sm:w-auto transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-orange/25"
          >
            CREATE FREE ACCOUNT
          </a>
          <a
            href="#signin"
            className="bg-brand-dark hover:bg-brand-cardHover text-white border border-brand-border hover:border-gray-500 px-8 py-4 rounded-xl font-heading text-xs sm:text-sm font-black tracking-widest transition-all duration-300 w-full sm:w-auto transform hover:scale-105 active:scale-95"
          >
            SIGN IN
          </a>
        </div>
      </div>
    </section>
  );
}
