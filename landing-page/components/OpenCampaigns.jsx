export default function OpenCampaigns() {
  return (
    <section className="px-5 md:px-8 py-14 md:py-[88px]">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3 md:gap-4 mb-8 md:mb-11">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-creator tracking-[0.08em] uppercase mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-creator shadow-[0_0_0_3px_color-mix(in_srgb,var(--creator)_25%,transparent)]"></span>Live now
            </span>
            <div className="font-display text-[28px] md:text-[34px] font-bold tracking-[-0.01em] transition-colors duration-300 hover:text-brand cursor-default">Open campaigns</div>
          </div>
          <a href="#" className="text-[13px] font-bold text-brand self-start md:self-auto">View all →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5.5">
          <div className="border border-line rounded-[14px] overflow-hidden bg-surface transition-all hover:-translate-y-1 hover:shadow-custom">
            <div className="h-[150px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400')" }}></div>
            <div className="p-4.5">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-creator tracking-[0.08em] uppercase mb-2.5"><span className="w-1.5 h-1.5 rounded-full bg-creator shadow-[0_0_0_3px_color-mix(in_srgb,var(--creator)_25%,transparent)]"></span>Live</div>
              <div className="text-[12px] text-ink-soft mb-1">Norde Athletics</div>
              <h4 className="text-[16px] font-bold mb-3.5 leading-[1.3]">Norde Pro Runner X7</h4>
              <div className="flex justify-between items-center border-t border-line pt-3 text-[13px]">
                <span className="text-creator font-bold">$800–$3,500</span>
                <span className="text-ink-soft">14 bids</span>
              </div>
            </div>
          </div>
          <div className="border border-line rounded-[14px] overflow-hidden bg-surface transition-all hover:-translate-y-1 hover:shadow-custom">
            <div className="h-[150px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400')" }}></div>
            <div className="p-4.5">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-creator tracking-[0.08em] uppercase mb-2.5"><span className="w-1.5 h-1.5 rounded-full bg-creator shadow-[0_0_0_3px_color-mix(in_srgb,var(--creator)_25%,transparent)]"></span>Live</div>
              <div className="text-[12px] text-ink-soft mb-1">Lumière Skin</div>
              <h4 className="text-[16px] font-bold mb-3.5 leading-[1.3]">Vitamin C Serum Pro</h4>
              <div className="flex justify-between items-center border-t border-line pt-3 text-[13px]">
                <span className="text-creator font-bold">$1,500–$8,000</span>
                <span className="text-ink-soft">31 bids</span>
              </div>
            </div>
          </div>
          <div className="border border-line rounded-[14px] overflow-hidden bg-surface transition-all hover:-translate-y-1 hover:shadow-custom">
            <div className="h-[150px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400')" }}></div>
            <div className="p-4.5">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-creator tracking-[0.08em] uppercase mb-2.5"><span className="w-1.5 h-1.5 rounded-full bg-creator shadow-[0_0_0_3px_color-mix(in_srgb,var(--creator)_25%,transparent)]"></span>Live</div>
              <div className="text-[12px] text-ink-soft mb-1">Techflow SaaS</div>
              <h4 className="text-[16px] font-bold mb-3.5 leading-[1.3]">Techflow AI Workspace</h4>
              <div className="flex justify-between items-center border-t border-line pt-3 text-[13px]">
                <span className="text-creator font-bold">$2,000–$12,000</span>
                <span className="text-ink-soft">8 bids</span>
              </div>
            </div>
          </div>
          <div className="border border-line rounded-[14px] overflow-hidden bg-surface transition-all hover:-translate-y-1 hover:shadow-custom">
            <div className="h-[150px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400')" }}></div>
            <div className="p-4.5">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-creator tracking-[0.08em] uppercase mb-2.5"><span className="w-1.5 h-1.5 rounded-full bg-creator shadow-[0_0_0_3px_color-mix(in_srgb,var(--creator)_25%,transparent)]"></span>Live</div>
              <div className="text-[12px] text-ink-soft mb-1">Café Ritual</div>
              <h4 className="text-[16px] font-bold mb-3.5 leading-[1.3]">Single-Origin Cold Brew Kit</h4>
              <div className="flex justify-between items-center border-t border-line pt-3 text-[13px]">
                <span className="text-creator font-bold">$400–$2,000</span>
                <span className="text-ink-soft">22 bids</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
