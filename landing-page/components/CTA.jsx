export default function CTA() {
  return (
    <div className="bg-brand text-brand-ink text-center rounded-3xl mx-5 md:mx-70 mb-16 md:mb-[88px] px-5 py-12 md:px-8 md:py-[72px] cursor-pointer transition-transform hover:-translate-y-px w-full md:w-auto">
      <h2 className="font-display text-[32px] md:text-[44px] mb-3.5">Ready to start?</h2>
      <p className="opacity-85 max-w-[440px] mx-auto text-[15px] mb-8">Join 18,000+ creators and 2,400+ brands already using Influblast to build better partnerships.</p>
      <div className="flex flex-col md:flex-row justify-center gap-3.5">
        <button className="inline-flex items-center justify-center gap-2 px-7 py-[15px] rounded-[10px] bg-brand-ink text-brand font-bold text-[15px] cursor-pointer border-none transition-transform hover:-translate-y-px w-full md:w-auto">Create free account</button>
        <button className="inline-flex items-center justify-center gap-2 px-7 py-[15px] rounded-[10px] bg-transparent text-brand-ink border-[1.5px] border-white/40 font-bold text-[15px] cursor-pointer transition-colors hover:bg-white hover:text-black hover:-translate-y-px  w-full md:w-auto">Sign in</button>
      </div>
    </div>
  );
}
