import React from 'react';

const nichesData = [
  {
    id: 1,
    name: "Fitness",
    count: "184 campaigns",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Beauty",
    count: "267 campaigns",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Technology",
    count: "95 campaigns",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Food & Drink",
    count: "142 campaigns",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Travel",
    count: "78 campaigns",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Fashion",
    count: "211 campaigns",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
  },
];

export default function PopularNiches() {
  return (
    <section id="categories" className="py-20 px-4 max-w-7xl mx-auto border-t border-brand-border/40">
      {/* Title block */}
      <div className="mb-12">
        <span className="font-heading text-xs font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">
          BROWSE BY CATEGORY
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-1 uppercase tracking-tight">
          POPULAR NICHES
        </h2>
      </div>

      {/* Niches List/Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {nichesData.map((niche) => (
          <a
            key={niche.id}
            href={`#niche-${niche.name.toLowerCase()}`}
            className="group relative aspect-[3/4] rounded-2xl overflow-hidden flex flex-col justify-end p-4 border border-brand-border/60 hover:border-brand-orange/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-orange/5"
          >
            {/* Background image */}
            <div className="absolute inset-0 bg-brand-dark">
              <img
                src={niche.image}
                alt={niche.name}
                className="object-cover w-full h-full opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
            </div>

            {/* Content info overlay */}
            <div className="relative z-10">
              <h3 className="font-heading text-base font-extrabold text-gray-900 dark:text-white tracking-wide group-hover:text-brand-orange transition-colors">
                {niche.name}
              </h3>
              <p className="text-[10px] text-gray-600 dark:text-gray-400 font-medium mt-0.5">
                {niche.count}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
