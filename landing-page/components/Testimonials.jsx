import React from 'react';
import { FaStar } from 'react-icons/fa6';

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    quote: "I landed 3 campaigns in my first month. The eligibility filtering is a game changer. I only apply for campaigns that fit my audience, saving hours of pitching.",
    author: "Sarah Jenkins",
    role: "Fitness Creator • 45K followers",
  },
  {
    id: 2,
    rating: 5,
    quote: "We got 31 bids in 48 hours for our serum launch. The transparent bidding lets us compare creators side-by-side. No agency middle-men or hidden markups.",
    author: "David Chang",
    role: "Founder at Lumière Skin",
  },
  {
    id: 3,
    rating: 5,
    quote: "The platform is brutally transparent. I know exactly what brands expect, and getting paid takes days instead of months. The team dashboard tracks everything.",
    author: "Elena Rostova",
    role: "Travel & Lifestyle Creator",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto border-t border-brand-border/40">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="font-heading text-xs font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">
          TESTIMONIALS
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-1 uppercase tracking-tight">
          WHAT THEY SAY
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="glass-panel hover:border-brand-orange/20 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-orange/5"
          >
            <div>
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="h-4 w-4 text-brand-orange fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-light italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>

            {/* Author */}
            <div className="mt-8 border-t border-brand-border/40 pt-4">
              <span className="block text-sm font-extrabold text-gray-900 dark:text-white">
                {testimonial.author}
              </span>
              <span className="block text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                {testimonial.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
