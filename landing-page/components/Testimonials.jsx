export default function Testimonials() {
  return (
    <section className="bg-bg-alt px-5 md:px-8 py-14 md:py-[88px]">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3 md:gap-4 mb-8 md:mb-11">
          <div>
            <span className="text-[12px] font-extrabold tracking-[0.12em] uppercase text-brand mb-2 md:mb-[18px] inline-block">Testimonials</span>
            <div className="font-display text-[28px] md:text-[34px] font-bold tracking-[-0.01em] transition-colors duration-300 hover:text-brand cursor-default">What they say</div>
          </div>
        </div>
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0">
          <div className="min-w-[85vw] md:min-w-0 snap-center bg-surface border border-line rounded-[14px] p-7 transition-all hover:-translate-y-1 hover:shadow-custom">
            <div className="text-gold text-[14px] mb-3.5 tracking-[2px]">★★★★★</div>
            <p className="text-[14.5px] leading-[1.65] text-ink italic mb-5">"I landed 3 campaigns in my first month. The eligibility filtering is a game changer — I only apply to campaigns that fit my audience."</p>
            <div className="text-[13.5px] font-bold">Sarah Jenkins<span className="block font-medium text-ink-soft text-[12.5px] mt-0.5">Fitness Creator · 45K followers</span></div>
          </div>
          <div className="min-w-[85vw] md:min-w-0 snap-center bg-surface border border-line rounded-[14px] p-7 transition-all hover:-translate-y-1 hover:shadow-custom">
            <div className="text-gold text-[14px] mb-3.5 tracking-[2px]">★★★★★</div>
            <p className="text-[14.5px] leading-[1.65] text-ink italic mb-5">"We got 31 bids in 48 hours for our serum launch. Transparent bidding lets us compare creators side-by-side, no hidden markups."</p>
            <div className="text-[13.5px] font-bold">David Chang<span className="block font-medium text-ink-soft text-[12.5px] mt-0.5">Founder at Lumière Skin</span></div>
          </div>
          <div className="min-w-[85vw] md:min-w-0 snap-center bg-surface border border-line rounded-[14px] p-7 transition-all hover:-translate-y-1 hover:shadow-custom">
            <div className="text-gold text-[14px] mb-3.5 tracking-[2px]">★★★★★</div>
            <p className="text-[14.5px] leading-[1.65] text-ink italic mb-5">"The platform is brutally transparent. I know exactly what brands expect, and payments take days instead of months."</p>
            <div className="text-[13.5px] font-bold">Elena Rostova<span className="block font-medium text-ink-soft text-[12.5px] mt-0.5">Travel & Lifestyle Creator</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
