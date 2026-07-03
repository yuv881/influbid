import React from 'react';
import { ArrowRight, Briefcase, Users } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 max-w-7xl mx-auto border-t border-brand-border/40">
      {/* Title block */}
      <div className="text-center mb-16">
        <span className="font-heading text-xs font-bold text-gray-500 tracking-widest uppercase">
          HOW IT WORKS
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-black text-white mt-1 uppercase tracking-tight">
          TWO SIDES. ONE PLATFORM.
        </h2>
        <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
          Built equally for brands and creators. Each role has its own clean workflow.
        </p>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* For Brands (Orange) */}
        <div className="glass-panel-orange rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300">
          <div>
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-brand-orange/10 p-3 rounded-xl">
                <Briefcase className="h-6 w-6 text-brand-orange" />
              </div>
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-extrabold text-white tracking-wide">
                  FOR BRANDS
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-medium mt-0.5">
                  Post, filter, hire
                </p>
              </div>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-8 mb-10">
              {/* Step 1 */}
              <div className="flex gap-4">
                <span className="font-heading text-xs sm:text-sm font-black text-brand-orange bg-brand-orange/10 h-8 w-8 sm:h-9 sm:w-9 rounded-lg flex items-center justify-center shrink-0">
                  01
                </span>
                <div>
                  <h4 className="font-heading text-sm sm:text-base font-extrabold text-white">
                    Post Your Campaign
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed mt-1">
                    Add product details, budget range, deadline, and content requirements. Takes under 5 minutes.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <span className="font-heading text-xs sm:text-sm font-black text-brand-orange bg-brand-orange/10 h-8 w-8 sm:h-9 sm:w-9 rounded-lg flex items-center justify-center shrink-0">
                  02
                </span>
                <div>
                  <h4 className="font-heading text-sm sm:text-base font-extrabold text-white">
                    Set Bidder Filters
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed mt-1">
                    Define exactly who can apply — platform, follower range, engagement rate, niche, age, location.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <span className="font-heading text-xs sm:text-sm font-black text-brand-orange bg-brand-orange/10 h-8 w-8 sm:h-9 sm:w-9 rounded-lg flex items-center justify-center shrink-0">
                  03
                </span>
                <div>
                  <h4 className="font-heading text-sm sm:text-base font-extrabold text-white">
                    Review & Accept
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed mt-1">
                    Bids come in from qualified creators. Review pitches, compare proposals, and accept the best match.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <a
            href="#post-first-campaign"
            className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white py-4 rounded-xl font-heading text-xs sm:text-sm font-black tracking-widest transition-all duration-300 w-full transform hover:scale-[1.02] active:scale-95 group shadow-lg shadow-brand-orange/20"
          >
            POST YOUR FIRST CAMPAIGN
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* For Creators (Teal) */}
        <div className="glass-panel-teal rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:shadow-xl hover:shadow-brand-teal/5 transition-all duration-300">
          <div>
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-brand-teal/10 p-3 rounded-xl">
                <Users className="h-6 w-6 text-brand-teal" />
              </div>
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-extrabold text-white tracking-wide">
                  FOR CREATORS
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-medium mt-0.5">
                  Browse, pitch, win
                </p>
              </div>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-8 mb-10">
              {/* Step 1 */}
              <div className="flex gap-4">
                <span className="font-heading text-xs sm:text-sm font-black text-brand-teal bg-brand-teal/10 h-8 w-8 sm:h-9 sm:w-9 rounded-lg flex items-center justify-center shrink-0">
                  01
                </span>
                <div>
                  <h4 className="font-heading text-sm sm:text-base font-extrabold text-white">
                    Build Your Profile
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed mt-1">
                    Add your platform, stats, niches, and bio. Your profile is auto-checked against campaign conditions.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <span className="font-heading text-xs sm:text-sm font-black text-brand-teal bg-brand-teal/10 h-8 w-8 sm:h-9 sm:w-9 rounded-lg flex items-center justify-center shrink-0">
                  02
                </span>
                <div>
                  <h4 className="font-heading text-sm sm:text-base font-extrabold text-white">
                    Browse Eligible Campaigns
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed mt-1">
                    See exactly which campaigns you qualify for. No guessing, no wasted effort on campaigns you can't win.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <span className="font-heading text-xs sm:text-sm font-black text-brand-teal bg-brand-teal/10 h-8 w-8 sm:h-9 sm:w-9 rounded-lg flex items-center justify-center shrink-0">
                  03
                </span>
                <div>
                  <h4 className="font-heading text-sm sm:text-base font-extrabold text-white">
                    Submit Your Bid
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed mt-1">
                    Write your pitch, set your rate, and describe your deliverables. Stand out with a specific, genuine proposal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <a
            href="#start-browsing"
            className="flex items-center justify-center gap-2 bg-brand-tealDark hover:bg-brand-tealDark/80 border border-brand-teal/40 text-brand-teal py-4 rounded-xl font-heading text-xs sm:text-sm font-black tracking-widest transition-all duration-300 w-full transform hover:scale-[1.02] active:scale-95 group shadow-lg shadow-brand-teal/10"
          >
            START BROWSING CAMPAIGNS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
