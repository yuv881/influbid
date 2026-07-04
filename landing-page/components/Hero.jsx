export default function Hero() {
  return (
    <section className="text-center relative overflow-hidden px-5 md:px-8 pt-16 md:pt-24 pb-12 md:pb-16">
      <span className="text-[12px] font-extrabold tracking-[0.12em] uppercase text-gold mb-[18px] inline-block">Merit-based influencer marketing</span>
      <h1 className="font-display text-[clamp(42px,7vw,84px)] leading-[0.98] font-bold tracking-[-0.02em]">
        Brands meet<br />
        <span className="text-brand italic">creators.</span>
      </h1>
      <p className="max-w-[560px] mx-auto mt-[26px] mb-[36px] text-ink-soft text-[17px] leading-[1.6]">
        Companies post campaigns. Creators bid. The best match wins — no agencies, no fixed rates, just transparent competition.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-3.5 mb-12 md:mb-[72px]">
        <button className="inline-flex items-center justify-center gap-2 px-7 py-[15px] rounded-[10px] bg-brand text-brand-ink font-bold text-[15px] cursor-pointer border-none transition-transform hover:-translate-y-px w-full md:w-auto">Post a campaign →</button>
        <button className="inline-flex items-center justify-center gap-2 px-7 py-[15px] rounded-[10px] bg-transparent text-ink border-[1.5px] border-line font-bold text-[15px] cursor-pointer transition-transform hover:-translate-y-px w-full md:w-auto">Find campaigns →</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-[14px] overflow-hidden max-w-[940px] mx-auto">
        <div className="bg-surface p-7 text-left">
          <div className="font-display text-[32px] font-bold text-ink">2,400+</div>
          <div className="text-[13px] text-ink-soft mt-1">Active campaigns</div>
        </div>
        <div className="bg-surface p-7 text-left">
          <div className="font-display text-[32px] font-bold text-ink">$4.2M</div>
          <div className="text-[13px] text-ink-soft mt-1">Paid to creators</div>
        </div>
        <div className="bg-surface p-7 text-left">
          <div className="font-display text-[32px] font-bold text-ink">18K+</div>
          <div className="text-[13px] text-ink-soft mt-1">Verified creators</div>
        </div>
        <div className="bg-surface p-7 text-left">
          <div className="font-display text-[32px] font-bold text-ink">94%</div>
          <div className="text-[13px] text-ink-soft mt-1">Match rate</div>
        </div>
      </div>
    </section>
  );
}
