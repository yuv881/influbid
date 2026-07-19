export default function CompanyBidCard({ bid, onAccept, onReject }) {
  const statusClass =
    bid.status === 'ACCEPTED' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' :
    bid.status === 'REJECTED' ? 'border-red-500/30 bg-red-500/10 text-red-400' :
    'border-yellow-500/30 bg-yellow-500/10 text-yellow-400';

  return (
    <div className="bg-brand-card border border-brand-border rounded-2xl p-5 flex flex-col gap-4">

      {/* Top Line header details */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-tealDark/30 border border-brand-tealDark/50 text-brand-teal flex items-center justify-center font-bold text-sm shadow-inner">
            {bid.avatar}
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-auth-ink text-[14.5px]">{bid.name}</span>
              <svg className="w-3.5 h-3.5 text-auth-ink-soft opacity-60 cursor-pointer hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>

            <div className="text-[12px] font-bold text-auth-ink-soft mt-0.5">
              {bid.username} &nbsp;&middot;&nbsp; {bid.platform}
            </div>
          </div>
        </div>

        {/* Status and Budget badge */}
        <div className="flex items-center gap-3">
          <span className={`text-[10px] font-extrabold tracking-wider border px-2 py-0.5 rounded uppercase ${statusClass}`}>
            {bid.status}
          </span>
          <span className="font-heading text-[16px] font-black text-brand-teal">
            {bid.budget}
          </span>
        </div>
      </div>

      {/* Bid stats row grid */}
      <div className="grid grid-cols-3 bg-brand-dark/50 border border-brand-border rounded-xl p-3 text-center">
        <div>
          <span className="text-[9.5px] font-extrabold tracking-[0.06em] text-auth-ink-soft uppercase block">FOLLOWERS</span>
          <span className="text-[14px] font-black text-auth-ink block mt-0.5">{bid.followers}</span>
        </div>
        <div className="border-x border-brand-border">
          <span className="text-[9.5px] font-extrabold tracking-[0.06em] text-auth-ink-soft uppercase block">ENGAGEMENT</span>
          <span className="text-[14px] font-black text-auth-ink block mt-0.5">{bid.engagement}</span>
        </div>
        <div>
          <span className="text-[9.5px] font-extrabold tracking-[0.06em] text-auth-ink-soft uppercase block">LOCATION</span>
          <span className="text-[14px] font-black text-auth-ink block mt-0.5">{bid.location}</span>
        </div>
      </div>

      {/* Pitch section */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[9.5px] font-extrabold tracking-[0.06em] text-auth-ink-soft uppercase">PITCH</span>
        <p className="text-[13px] font-semibold text-auth-ink leading-relaxed">
          {bid.pitch}
        </p>
      </div>

      {/* Deliverables section */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[9.5px] font-extrabold tracking-[0.06em] text-auth-ink-soft uppercase">DELIVERABLES</span>
        <p className="text-[13px] font-extrabold text-auth-ink leading-relaxed">
          {bid.deliverables}
        </p>
      </div>

      {/* Card bottom buttons & submission date */}
      <div className="flex justify-between items-center border-t border-brand-border pt-4 mt-1">
        <span className="text-[11.5px] font-bold text-auth-ink-soft">
          Submitted {bid.date}
        </span>

        {/* Accept / Reject buttons (only visible if status is PENDING) */}
        {bid.status === 'PENDING' && (
          <div className="flex gap-2.5">
            <button
              onClick={() => onReject(bid.id)}
              className="px-4 py-2 border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 text-red-400 font-extrabold text-[12px] tracking-wide rounded-lg cursor-pointer transition-colors"
            >
              &times; REJECT
            </button>

            <button
              onClick={() => onAccept(bid.id)}
              className="px-4 py-2 border border-brand-tealDark/50 bg-brand-tealDark/30 hover:bg-brand-tealDark/50 text-brand-teal font-extrabold text-[12px] tracking-wide rounded-lg cursor-pointer transition-colors"
            >
              &bull; ACCEPT
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
