import { FiX } from 'react-icons/fi';

export default function NotificationsDropdown({
  isOpen,
  onClose,
  activities,
  onClearAll
}) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-14 w-80 bg-brand-card border border-brand-border rounded-2xl shadow-xl z-50 p-4 animate-[fadeIn_0.2s_ease-out]">
      <div className="flex justify-between items-center pb-2.5 border-b border-brand-border mb-3">
        <h4 className="font-heading font-black text-sm text-auth-ink uppercase tracking-wider">Notifications</h4>
        <div className="flex gap-2 items-center">
          {activities.length > 0 && (
            <button
              onClick={onClearAll}
              className="text-[11px] font-black text-brand-orange hover:underline cursor-pointer bg-transparent border-none"
            >
              CLEAR ALL
            </button>
          )}
          <button
            onClick={onClose}
            className="w-6 h-6 rounded-full border border-brand-border flex items-center justify-center text-auth-ink-soft hover:text-auth-ink hover:bg-brand-cardHover cursor-pointer"
          >
            <FiX className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 max-h-[280px] overflow-y-auto pr-1">
        {activities.length === 0 ? (
          <div className="py-6 text-center text-xs text-auth-ink-soft font-bold">
            No new notifications.
          </div>
        ) : (
          activities.map((act) => (
            <div
              key={act.id}
              className="flex items-start gap-3 p-2.5 rounded-xl bg-brand-dark/20 border border-brand-border hover:border-brand-orange/20 transition-all duration-200"
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border text-[11.5px] ${act.iconColor}`}>
                {act.type === 'bid' && '👤'}
                {act.type === 'accept' && '✓'}
                {act.type === 'new_bid' && '+'}
                {act.type === 'received' && '⚡'}
                {act.type === 'deadline' && '⏳'}
                {act.type === 'create' && '🚀'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12.5px] font-bold text-auth-ink leading-snug">
                  {act.user ? <span className="font-black text-brand-orange">{act.user} </span> : ''}
                  {act.text}
                </p>
                <span className="text-[10px] font-extrabold tracking-wider text-auth-ink-soft block mt-1 uppercase">
                  {act.time}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
