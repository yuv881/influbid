export default function Features() {
  return (
    <section className="bg-bg-alt px-5 md:px-8 py-14 md:py-[88px]">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3 md:gap-4 mb-8 md:mb-11">
          <div>
            <span className="text-[12px] font-extrabold tracking-[0.12em] uppercase text-brand mb-2 md:mb-[18px] inline-block">Platform features</span>
            <div className="font-display text-[28px] md:text-[34px] font-bold tracking-[-0.01em] transition-colors duration-300 hover:text-brand cursor-default">Built for results</div>
          </div>
        </div>
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0">
          <div className="min-w-[85vw] md:min-w-0 snap-center p-7 rounded-[14px] bg-surface border border-line transition-all hover:-translate-y-1 hover:shadow-custom">
            <div className="w-11 h-11 rounded-[10px] bg-[color-mix(in_srgb,var(--brand)_12%,transparent)] text-brand flex items-center justify-center mb-[18px] text-[19px]">◎</div>
            <h4 className="text-[16.5px] font-bold mb-2">Precision matching</h4>
            <p className="text-[13.5px] text-ink-soft leading-[1.6]">Brands set detailed eligibility — follower count, engagement, niche, platform, age, location.</p>
          </div>
          <div className="min-w-[85vw] md:min-w-0 snap-center p-7 rounded-[14px] bg-surface border border-line transition-all hover:-translate-y-1 hover:shadow-custom">
            <div className="w-11 h-11 rounded-[10px] bg-[color-mix(in_srgb,var(--brand)_12%,transparent)] text-brand flex items-center justify-center mb-[18px] text-[19px]">⚡</div>
            <h4 className="text-[16.5px] font-bold mb-2">Competitive bidding</h4>
            <p className="text-[13.5px] text-ink-soft leading-[1.6]">Creators submit proposals with their own rates. Brands pick the best fit, not the lowest price.</p>
          </div>
          <div className="min-w-[85vw] md:min-w-0 snap-center p-7 rounded-[14px] bg-surface border border-line transition-all hover:-translate-y-1 hover:shadow-custom">
            <div className="w-11 h-11 rounded-[10px] bg-[color-mix(in_srgb,var(--brand)_12%,transparent)] text-brand flex items-center justify-center mb-[18px] text-[19px]">🛡</div>
            <h4 className="text-[16.5px] font-bold mb-2">Verified profiles</h4>
            <p className="text-[13.5px] text-ink-soft leading-[1.6]">Every creator account shows real metrics: followers, engagement, campaign history, ratings.</p>
          </div>
          <div className="min-w-[85vw] md:min-w-0 snap-center p-7 rounded-[14px] bg-surface border border-line transition-all hover:-translate-y-1 hover:shadow-custom">
            <div className="w-11 h-11 rounded-[10px] bg-[color-mix(in_srgb,var(--brand)_12%,transparent)] text-brand flex items-center justify-center mb-[18px] text-[19px]">📊</div>
            <h4 className="text-[16.5px] font-bold mb-2">Campaign analytics</h4>
            <p className="text-[13.5px] text-ink-soft leading-[1.6]">Track bid activity, budget commitments, and performance with live dashboard charts.</p>
          </div>
          <div className="min-w-[85vw] md:min-w-0 snap-center p-7 rounded-[14px] bg-surface border border-line transition-all hover:-translate-y-1 hover:shadow-custom">
            <div className="w-11 h-11 rounded-[10px] bg-[color-mix(in_srgb,var(--brand)_12%,transparent)] text-brand flex items-center justify-center mb-[18px] text-[19px]">✓</div>
            <h4 className="text-[16.5px] font-bold mb-2">Smart eligibility</h4>
            <p className="text-[13.5px] text-ink-soft leading-[1.6]">Creators instantly see which campaigns they qualify for — no wasted applications.</p>
          </div>
          <div className="min-w-[85vw] md:min-w-0 snap-center p-7 rounded-[14px] bg-surface border border-line transition-all hover:-translate-y-1 hover:shadow-custom">
            <div className="w-11 h-11 rounded-[10px] bg-[color-mix(in_srgb,var(--brand)_12%,transparent)] text-brand flex items-center justify-center mb-[18px] text-[19px]">★</div>
            <h4 className="text-[16.5px] font-bold mb-2">Transparent ratings</h4>
            <p className="text-[13.5px] text-ink-soft leading-[1.6]">Post-campaign ratings build reputations over time. Better performance, more wins.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
