import { useState } from 'react';
import { FiSun, FiMoon, FiSearch, FiBell } from 'react-icons/fi';
import NotificationsDropdown from '../../components/NotificationsDropdown.jsx';

export default function CampaignPage({
    campaigns,
    filteredCampaigns,
    theme,
    toggleTheme,
    setIsModalOpen,
    searchQuery,
    setSearchQuery,
    handleCampaignClick,
    PlatformIcon,
    activities,
    setActivities
}) {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    return (
        <>
            {/* CAMPAIGNS HEADER */}
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-[26px] font-black font-heading text-auth-ink uppercase tracking-tight">CAMPAIGNS</h1>
                    <p className="text-[14.5px] font-bold text-auth-ink-soft mt-0.5">{campaigns.length} total campaigns</p>
                </div>

                <div className="flex items-center gap-4">
                    {/* Theme button */}
                    <button
                        className="w-11 h-11 rounded-full border border-brand-border bg-brand-card cursor-pointer flex items-center justify-center text-lg hover:bg-brand-cardHover hover:shadow-sm transition-all text-auth-ink"
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? <FiMoon /> : <FiSun />}
                    </button>

                    {/* Notifications */}
                    <div className="relative">
                        <button
                            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                            className="w-11 h-11 rounded-xl border border-brand-border bg-brand-card cursor-pointer flex items-center justify-center relative hover:bg-brand-cardHover hover:shadow-sm transition-all text-auth-ink"
                        >
                            {activities.length > 0 && (
                                <>
                                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-orange animate-ping"></span>
                                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-orange"></span>
                                </>
                            )}
                            <FiBell className="w-5 h-5 text-auth-ink-soft hover:text-auth-ink transition-colors" />
                        </button>

                        <NotificationsDropdown
                            isOpen={isNotificationsOpen}
                            onClose={() => setIsNotificationsOpen(false)}
                            activities={activities}
                            onClearAll={() => setActivities([])}
                        />
                    </div>

                    {/* New Campaign CTA */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-5 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-[14.5px] cursor-pointer flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-orange/20"
                    >
                        <span className="text-[17px] font-bold">+</span> NEW CAMPAIGN
                    </button>
                </div>
            </header>

            {/* SEARCH CTA */}
            <div className="flex gap-4 items-center w-full">
                <div className="flex-1 relative flex items-center bg-brand-card border border-brand-border rounded-xl transition-colors focus-within:border-brand-orange">
                    <span className="px-4 text-auth-ink-soft text-lg"><FiSearch /></span>
                    <input
                        type="text"
                        className="flex-1 border-none bg-transparent outline-none py-3.5 pr-4 font-sans text-[15px] text-auth-ink placeholder-auth-ink-soft"
                        placeholder="Search campaigns..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* CAMPAIGN CARDS GRID */}
            {filteredCampaigns.length === 0 ? (
                <div className="bg-brand-card border border-brand-border rounded-2xl p-12 text-center text-auth-ink-soft font-bold my-4 w-full">
                    No campaigns posted.
                </div>
            ) : (
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCampaigns.map((c) => (
                        <div
                            key={c.id}
                            onClick={() => handleCampaignClick(c)}
                            className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden flex flex-col justify-between hover:border-brand-orange/30 hover:scale-[1.005] cursor-pointer transition-all duration-300 group"
                        >

                            {/* Banner Image Container */}
                            <div className="h-44 relative bg-[#0b0a0a] overflow-hidden flex items-center justify-center">
                                <img src={c.image} alt={c.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentNode.innerHTML = '<span class="text-3xl text-brand-orange font-bold">⚡</span>';
                                }} />

                                {/* Live indicator tag */}
                                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-extrabold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 backdrop-blur-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                    LIVE
                                </div>

                                {/* Niche Tag */}
                                <div className="absolute top-4 right-4 px-3 py-1 rounded-md text-[12.5px] font-bold text-auth-ink bg-brand-card/85 backdrop-blur-sm border border-brand-border">
                                    {c.niche}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-5 flex flex-col flex-1 gap-4">

                                {/* Brand header */}
                                <div className="flex items-center gap-2.5">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center font-extrabold text-[10.5px] ${c.brandColor || 'bg-brand-orange text-white'}`}>
                                        {c.brandInitials}
                                    </div>
                                    <span className="text-[13px] font-extrabold text-auth-ink-soft">{c.brandName}</span>
                                </div>

                                {/* Campaign Title */}
                                <div>
                                    <h3 className="font-heading text-lg font-black text-auth-ink leading-tight">{c.name}</h3>
                                    <p className="text-[13px] text-auth-ink-soft font-semibold leading-relaxed mt-2 h-12 overflow-hidden text-ellipsis line-clamp-2">
                                        {c.description}
                                    </p>
                                </div>

                                {/* Metrics row */}
                                <div className="grid grid-cols-3 border-t border-brand-border pt-4 text-center">
                                    <div className="border-r border-brand-border pr-2">
                                        <span className="text-[10px] font-extrabold tracking-[0.06em] text-auth-ink-soft uppercase block">BUDGET</span>
                                        <span className="text-[13px] sm:text-[14px] font-black text-auth-ink block mt-1 truncate">{c.budgetRange}</span>
                                    </div>
                                    <div className="border-r border-brand-border px-2">
                                        <span className="text-[10px] font-extrabold tracking-[0.06em] text-auth-ink-soft uppercase block">BIDS</span>
                                        <span className="text-[14px] font-black text-auth-ink block mt-1">{c.bids}</span>
                                    </div>
                                    <div className="pl-2">
                                        <span className="text-[10px] font-extrabold tracking-[0.06em] text-auth-ink-soft uppercase block">DAYS LEFT</span>
                                        <span className="text-[14px] font-black text-auth-ink block mt-1">{c.daysLeft}</span>
                                    </div>
                                </div>

                                {/* Platforms lists footer */}
                                <div className="flex items-center gap-4 border-t border-brand-border pt-3.5 mt-1">
                                    {c.platforms.map(platform => (
                                        <div key={platform} className="flex items-center gap-1.5 text-auth-ink-soft text-[12.5px] font-bold">
                                            <PlatformIcon platform={platform} className="w-3.5 h-3.5 text-auth-ink-soft" />
                                            {platform}
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </section>
            )}
        </>
    );
}