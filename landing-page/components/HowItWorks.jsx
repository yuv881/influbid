import { Link } from 'react-router';

export default function HowItWorks() {
  return (
    <section className="bg-bg-alt px-5 md:px-8 py-14 md:py-[88px]">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3 md:gap-4 mb-8 md:mb-11">
          <div>
            <span className="text-[12px] font-extrabold tracking-[0.12em] uppercase text-brand mb-2 md:mb-[18px] inline-block">How it works</span>
            <div className="font-display text-[28px] md:text-[34px] font-bold tracking-[-0.01em] transition-colors duration-300 hover:text-brand cursor-default">Two sides, one platform</div>
            <div className="text-ink-soft text-[15px] mt-2 max-w-[460px]">Built for brands and creators alike — each role gets its own clean workflow.</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="bg-surface border border-line rounded-[16px] p-9 shadow-custom transition-all hover:-translate-y-1">
            <span className="inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.08em] px-3 py-1.5 rounded-full mb-5 bg-[color-mix(in_srgb,var(--brand)_14%,transparent)] text-brand">For brands</span>
            <h3 className="font-display text-[24px] mb-[22px]">Post, filter, hire</h3>
            <div className="flex gap-4 mb-5">
              <span className="font-display font-bold text-[14px] text-ink-soft min-w-[26px]">01</span>
              <div>
                <h4 className="text-[15px] font-bold mb-1">Post your campaign</h4>
                <p className="text-[13.5px] text-ink-soft leading-[1.55]">Add product details, budget range, deadline, and content requirements. Takes under 5 minutes.</p>
              </div>
            </div>
            <div className="flex gap-4 mb-5">
              <span className="font-display font-bold text-[14px] text-ink-soft min-w-[26px]">02</span>
              <div>
                <h4 className="text-[15px] font-bold mb-1">Set bidder filters</h4>
                <p className="text-[13.5px] text-ink-soft leading-[1.55]">Define exactly who can apply — platform, follower range, engagement rate, niche, age, location.</p>
              </div>
            </div>
            <div className="flex gap-4 mb-5">
              <span className="font-display font-bold text-[14px] text-ink-soft min-w-[26px]">03</span>
              <div>
                <h4 className="text-[15px] font-bold mb-1">Review & accept</h4>
                <p className="text-[13.5px] text-ink-soft leading-[1.55]">Bids come in from qualified creators. Compare proposals and accept the best match.</p>
              </div>
            </div>
            <Link to="/register?role=company" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-brand text-brand-ink font-bold text-sm cursor-pointer border-none transition-transform hover:-translate-y-px w-full mt-3 no-underline">Post your first campaign →</Link>
          </div>
          <div className="bg-surface border border-line rounded-[16px] p-9 shadow-custom transition-all hover:-translate-y-1">
            <span className="inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.08em] px-3 py-1.5 rounded-full mb-5 bg-[color-mix(in_srgb,var(--creator)_14%,transparent)] text-creator">For creators</span>
            <h3 className="font-display text-[24px] mb-[22px]">Browse, pitch, win</h3>
            <div className="flex gap-4 mb-5">
              <span className="font-display font-bold text-[14px] text-ink-soft min-w-[26px]">01</span>
              <div>
                <h4 className="text-[15px] font-bold mb-1">Build your profile</h4>
                <p className="text-[13.5px] text-ink-soft leading-[1.55]">Add your platform, stats, niches, and bio. Auto-checked against campaign conditions.</p>
              </div>
            </div>
            <div className="flex gap-4 mb-5">
              <span className="font-display font-bold text-[14px] text-ink-soft min-w-[26px]">02</span>
              <div>
                <h4 className="text-[15px] font-bold mb-1">Browse eligible campaigns</h4>
                <p className="text-[13.5px] text-ink-soft leading-[1.55]">See exactly which campaigns you qualify for. No guessing, no wasted effort.</p>
              </div>
            </div>
            <div className="flex gap-4 mb-5">
              <span className="font-display font-bold text-[14px] text-ink-soft min-w-[26px]">03</span>
              <div>
                <h4 className="text-[15px] font-bold mb-1">Submit your bid</h4>
                <p className="text-[13.5px] text-ink-soft leading-[1.55]">Write your pitch, set your rate, and describe your deliverables.</p>
              </div>
            </div>
            <Link to="/register?role=influencer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-creator text-creator-ink font-bold text-sm cursor-pointer border-none transition-transform hover:-translate-y-px w-full mt-3 no-underline">Start browsing campaigns →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
