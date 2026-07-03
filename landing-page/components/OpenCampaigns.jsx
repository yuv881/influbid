import React from 'react';
import { ArrowRight } from 'lucide-react';
import runnerImg from '../assets/runner.jpg';
import serumImg from '../assets/serum.jpg';
import dashboardImg from '../assets/dashboard.jpg';
import coldbrewImg from '../assets/coldbrew.jpg';

const campaignData = [
  {
    id: 1,
    image: runnerImg,
    brand: "Norde Athletics",
    title: "Norde Pro Runner X7",
    budget: "$800–$3,500",
    bids: 14,
  },
  {
    id: 2,
    image: serumImg,
    brand: "Lumière Skin",
    title: "Vitamin C Serum Pro",
    budget: "$1,500–$8,000",
    bids: 31,
  },
  {
    id: 3,
    image: dashboardImg,
    brand: "Techflow SaaS",
    title: "Techflow AI Workspace",
    budget: "$2,000–$12,000",
    bids: 8,
  },
  {
    id: 4,
    image: coldbrewImg,
    brand: "Café Ritual",
    title: "Single-Origin Cold Brew Kit",
    budget: "$400–$2,000",
    bids: 22,
  },
];

export default function OpenCampaigns() {
  return (
    <section id="campaigns" className="py-20 px-4 max-w-7xl mx-auto border-t border-brand-border/40">
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="font-heading text-xs font-bold text-brand-teal tracking-widest uppercase">
            LIVE NOW
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white mt-1 uppercase tracking-tight">
            OPEN CAMPAIGNS
          </h2>
        </div>
        <a
          href="#all-campaigns"
          className="font-heading text-xs font-bold text-brand-orange hover:text-brand-orangeHover tracking-widest flex items-center gap-1 transition-colors group"
        >
          VIEW ALL
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {campaignData.map((campaign) => (
          <div
            key={campaign.id}
            className="glass-panel hover:border-brand-orange/20 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-orange/5 group"
          >
            {/* Image Wrapper */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-dark">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                {/* Live Indicator */}
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border border-brand-teal/20 bg-brand-teal/5 text-brand-teal text-[10px] font-bold tracking-widest uppercase mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-teal animate-pulse"></span>
                  LIVE
                </div>

                {/* Brand and Title */}
                <span className="block text-xs font-medium text-gray-500 tracking-wide">
                  {campaign.brand}
                </span>
                <h3 className="text-white font-semibold text-base sm:text-lg mt-1 tracking-tight group-hover:text-brand-orange transition-colors">
                  {campaign.title}
                </h3>
              </div>

              {/* Budget and Bids */}
              <div className="flex items-center justify-between border-t border-brand-border/40 mt-6 pt-4">
                <span className="font-heading text-sm font-extrabold text-brand-teal">
                  {campaign.budget}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {campaign.bids} bids
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
