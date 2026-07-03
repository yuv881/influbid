import React from 'react';
import { Target, Zap, Shield, BarChart3, Sparkles, Award } from 'lucide-react';

const featuresData = [
  {
    id: 1,
    icon: Target,
    title: "Precision Matching",
    description: "Companies set detailed eligibility conditions — follower count, engagement rate, niche, platform, age range, and location — so only qualified creators can apply.",
  },
  {
    id: 2,
    icon: Zap,
    title: "Competitive Bidding",
    description: "Creators submit proposals with their own rates, pitches, and deliverables. Brands pick the best fit, not just the lowest price.",
  },
  {
    id: 3,
    icon: Shield,
    title: "Verified Profiles",
    description: "Every creator account shows real metrics: follower count, engagement rate, past campaign history, and ratings from previous brands.",
  },
  {
    id: 4,
    icon: BarChart3,
    title: "Campaign Analytics",
    description: "Track bid activity, budget commitments, and campaign performance from your dashboard with live charts and status updates.",
  },
  {
    id: 5,
    icon: Sparkles,
    title: "Smart Eligibility",
    description: "Creators instantly see which campaigns they qualify for. Automatic eligibility checking eliminates wasted applications.",
  },
  {
    id: 6,
    icon: Award,
    title: "Transparent Ratings",
    description: "Post-campaign ratings build creator reputations over time. Better performance = more campaign wins.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 max-w-7xl mx-auto border-t border-brand-border/40">
      {/* Title Block */}
      <div className="text-center mb-16">
        <span className="font-heading text-xs font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">
          PLATFORM FEATURES
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-black text-gray-900 dark:text-white mt-1 uppercase tracking-tight">
          BUILT FOR RESULTS
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              className="glass-panel hover:border-brand-orange/20 rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-orange/5 group"
            >
              {/* Icon Container */}
              <div className="bg-brand-orange/10 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="h-6 w-6 text-brand-orange" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg font-extrabold text-gray-900 dark:text-white tracking-wide">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 font-normal leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
