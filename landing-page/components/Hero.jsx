import { ArrowRight, Briefcase, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 px-4 overflow-hidden flex flex-col items-center text-center">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-teal/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto z-10 flex flex-col items-center">

        {/* Big Impact Headings */}
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none text-gray-900 dark:text-white select-none">
          BRANDS MEET
        </h1>
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none text-brand-orange select-none mt-2 filter drop-shadow-[0_0_15px_rgba(255,78,13,0.1)]">
          CREATORS
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          Companies post campaigns. Creators bid. The best match wins. No agencies, no fixed rates — just transparent, merit-based competition.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4">
          <a
            href="#post-campaign"
            className="flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-orangeHover text-gray-900 dark:text-white px-8 py-4 rounded-xl font-heading text-xs sm:text-sm font-black tracking-widest transition-all duration-300 w-full sm:w-auto transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-orange/30 group"
          >
            <Briefcase className="h-4 w-4" />
            POST A CAMPAIGN
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#find-campaigns"
            className="flex items-center justify-center gap-3 bg-brand-dark hover:bg-brand-cardHover text-gray-900 dark:text-white border border-brand-border hover:border-gray-500 px-8 py-4 rounded-xl font-heading text-xs sm:text-sm font-black tracking-widest transition-all duration-300 w-full sm:w-auto transform hover:scale-105 active:scale-95 group"
          >
            <Users className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:hover:text-white" />
            FIND CAMPAIGNS
            <ArrowRight className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:hover:text-white transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
