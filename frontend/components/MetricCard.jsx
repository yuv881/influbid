export default function MetricCard({ label, value, subtitle, icon, highlight = false }) {
  return (
    <div className="bg-brand-card border border-brand-border rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-brand-orange/30 transition-all duration-300">
      <div className="flex justify-between items-center">
        <div className="text-[11.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft">{label}</div>
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${
          highlight 
            ? 'bg-[rgba(255,78,13,0.06)] border border-[rgba(255,78,13,0.15)] text-brand-orange' 
            : 'bg-brand-cardHover border border-brand-border text-auth-ink-soft'
        }`}>
          {icon}
        </div>
      </div>
      <div className="flex flex-col">
        <div className={`font-heading text-[32px] font-bold leading-none ${highlight ? 'text-brand-orange' : 'text-auth-ink'}`}>
          {value}
        </div>
        {subtitle && (
          <span className="text-[12.5px] font-bold text-auth-ink-soft mt-1">{subtitle}</span>
        )}
      </div>
    </div>
  );
}
