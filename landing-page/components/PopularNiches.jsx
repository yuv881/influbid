export default function PopularNiches() {
  return (
    <section className="px-5 md:px-8 py-14 md:py-[88px]">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3 md:gap-4 mb-8 md:mb-11">
          <div>
            <span className="text-[12px] font-extrabold tracking-[0.12em] uppercase text-brand mb-2 md:mb-[18px] inline-block">Browse by category</span>
            <div className="font-display text-[28px] md:text-[34px] font-bold tracking-[-0.01em] transition-colors duration-300 hover:text-brand cursor-default">Popular niches</div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="aspect-3/4 rounded-xl bg-cover bg-center relative overflow-hidden flex items-end p-4 transition-transform hover:scale-105 cursor-pointer after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:from-40% after:to-black/70" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300')" }}><span className="relative z-10 text-white font-bold text-sm">Fitness</span></div>
          <div className="aspect-3/4 rounded-xl bg-cover bg-center relative overflow-hidden flex items-end p-4 transition-transform hover:scale-105 cursor-pointer after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:from-40% after:to-black/70" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300')" }}><span className="relative z-10 text-white font-bold text-sm">Beauty</span></div>
          <div className="aspect-3/4 rounded-xl bg-cover bg-center relative overflow-hidden flex items-end p-4 transition-transform hover:scale-105 cursor-pointer after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:from-40% after:to-black/70" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=300')" }}><span className="relative z-10 text-white font-bold text-sm">Technology</span></div>
          <div className="aspect-3/4 rounded-xl bg-cover bg-center relative overflow-hidden flex items-end p-4 transition-transform hover:scale-105 cursor-pointer after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:from-40% after:to-black/70" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300')" }}><span className="relative z-10 text-white font-bold text-sm">Food & Drink</span></div>
          <div className="aspect-3/4 rounded-xl bg-cover bg-center relative overflow-hidden flex items-end p-4 transition-transform hover:scale-105 cursor-pointer after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:from-40% after:to-black/70" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300')" }}><span className="relative z-10 text-white font-bold text-sm">Travel</span></div>
          <div className="aspect-3/4 rounded-xl bg-cover bg-center relative overflow-hidden flex items-end p-4 transition-transform hover:scale-105 cursor-pointer after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:from-40% after:to-black/70" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300')" }}><span className="relative z-10 text-white font-bold text-sm">Fashion</span></div>
        </div>
      </div>
    </section>
  );
}
