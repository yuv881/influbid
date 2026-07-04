import { FaBolt } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 md:px-8 py-6 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 text-[13px] text-ink-soft">
      <div className="flex items-center gap-1.5 font-extrabold text-[14px] md:text-[15px] tracking-tight text-ink">
        <span className="w-7 h-7 md:w-[26px] md:h-[26px] rounded-lg bg-brand flex items-center justify-center text-brand-ink text-[14px] md:text-[13px]">
          <FaBolt />
        </span>
        INFLUBLAST
      </div>
      <div>© 2026 Influblast · Influencer Marketplace Platform</div>
      <div className="flex flex-wrap gap-4 md:gap-6">
        <a href="#" className="hover:text-ink transition-colors">Privacy</a>
        <a href="#" className="hover:text-ink transition-colors">Terms</a>
        <a href="#" className="hover:text-ink transition-colors">Contact</a>
      </div>
    </footer>
  );
}
