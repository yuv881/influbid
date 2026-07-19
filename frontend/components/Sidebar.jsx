import { FiHome, FiBriefcase, FiBarChart2, FiSettings, FiLogOut } from 'react-icons/fi';

export default function Sidebar({
  currentUser,
  setActiveTab,
  handleLogout,
  sidebarItemClass
}) {
  return (
    <aside className="w-[260px] h-full shrink-0 bg-brand-card border-r border-brand-border flex flex-col justify-between p-6 z-10">
      <div className="flex flex-col gap-8">

        {/* Logo */}
        <div className="flex items-center gap-2.5 font-extrabold text-[19px] tracking-[-0.02em]">
          <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-base font-bold shadow-md shadow-brand-orange/20">⚡</span>
          <span className="font-heading font-black tracking-wider text-auth-ink uppercase">INFLUBLAST</span>
        </div>

        {/* Profile card */}
        {currentUser && (
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-brand-cardHover border border-brand-border hover:shadow-sm transition-all duration-200">
            <div className="w-10 h-10 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center font-bold text-[16px]">
              {currentUser.name ? currentUser.name[0].toUpperCase() : 'J'}
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="font-extrabold text-[14px] leading-tight text-auth-ink truncate">{currentUser.name || 'User'}</div>
              <div className="text-[12px] font-bold text-auth-ink-soft leading-none truncate">@{currentUser.userName || 'username'}</div>
            </div>
          </div>
        )}

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2">
          <button onClick={() => setActiveTab('Overview')} className={sidebarItemClass('Overview')}>
            <FiHome className="w-5 h-5" />
            Overview
          </button>
          <button onClick={() => setActiveTab('Campaigns')} className={sidebarItemClass('Campaigns')}>
            <FiBriefcase className="w-5 h-5" />
            Campaigns
          </button>
          <button onClick={() => setActiveTab('Analytics')} className={sidebarItemClass('Analytics')}>
            <FiBarChart2 className="w-5 h-5" />
            Analytics
          </button>
          <button onClick={() => setActiveTab('Settings')} className="flex items-center gap-3.5 px-4 py-3 rounded-lg text-[14.5px] font-semibold text-auth-ink-soft hover:text-auth-ink hover:bg-brand-cardHover border border-transparent transition-all w-full text-left">
            <FiSettings className="w-5 h-5" />
            Settings
          </button>
        </nav>
      </div>

      {/* Sidebar Footer */}
      <div className="flex flex-col gap-4">
        <button onClick={handleLogout} className="flex items-center gap-3.5 px-4 py-3 rounded-lg text-[14.5px] font-semibold text-red-500 hover:bg-red-500/5 transition-all mt-2 border border-transparent w-full text-left cursor-pointer">
          <FiLogOut className="w-5 h-5" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
