import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import MetricCard from '../../components/MetricCard.jsx';
import CompanyBidCard from '../../components/CompanyBidCard.jsx';
import CampaignPage from './campaignPage.jsx';
import LaunchCampaignModal from '../../components/LaunchCampaignModal.jsx';
import Sidebar from '../../components/Sidebar.jsx';
import NotificationsDropdown from '../../components/NotificationsDropdown.jsx';
import { FiSun, FiMoon, FiBell } from 'react-icons/fi';

// Platform SVG Icons component helper
function PlatformIcon({ platform, className = "w-4 h-4" }) {
  if (platform === 'Instagram') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }
  if (platform === 'TikTok') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    );
  }
  if (platform === 'YouTube') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
      </svg>
    );
  }
  if (platform === 'LinkedIn') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

import { INITIAL_ACTIVITIES, CHART_DATA, INITIAL_BIDS } from '../../data/companyDashboardData.js';

export default function CompanyDashboard() {
  const navigate = useNavigate();
  const [currentUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('currentUser')); } catch { return null; }
  });
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [activeTab, setActiveTab] = useState('Overview');
  const [campaigns, setCampaigns] = useState([]);
  const [activities, setActivities] = useState(INITIAL_ACTIVITIES);
  const [bids, setBids] = useState(INITIAL_BIDS);

  // Navigation for specific Campaign detail view
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [bidFilter, setBidFilter] = useState('All'); // 'All', 'Pending', 'Accepted', 'Rejected'
  const [searchQuery, setSearchQuery] = useState('');

  // Modal & dropdown toggles
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // New Campaign Form State
  const [newCampaign, setNewCampaign] = useState({
    name: '',
    brandName: currentUser?.name || 'My Brand',
    niche: 'Fitness',
    description: '',
    minBudget: '',
    maxBudget: '',
    daysLeft: '',
    platforms: ['Instagram'],
    image: ''
  });

  useEffect(() => {
    // Sync theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    if (!currentUser || currentUser.role !== 'company') {
      navigate('/login');
      return;
    }

    // Fetch campaigns from backend
    const fetchCampaigns = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL || "";
        const response = await fetch(`${backendUrl}/api/campaigns`);
        if (response.ok) {
          const data = await response.json();
          // Filter campaigns to only show ones matching this company
          const companyCampaigns = data.filter(c => c.companyId === currentUser._id || c.companyId?._id === currentUser._id);
          if (companyCampaigns.length > 0) {
            setCampaigns(companyCampaigns);
          }
        }
      } catch (err) {
        console.warn("Could not fetch campaigns from DB, falling back to static:", err);
      }
    };
    fetchCampaigns();
  }, [currentUser, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Click on campaign
  const handleCampaignClick = (campaign) => {
    setSelectedCampaign(campaign);
    setBidFilter('All');
    window.scrollTo(0, 0);
  };

  // Bid decisions
  const handleAcceptBid = (bidId) => {
    setBids(prev => prev.map(b => b.id === bidId ? { ...b, status: 'ACCEPTED' } : b));

    const acceptedBid = bids.find(b => b.id === bidId);
    if (acceptedBid) {
      const activity = {
        id: activities.length + 1,
        type: 'accept',
        text: `Bid accepted for ${acceptedBid.name} (${acceptedBid.budget})`,
        time: 'Just now',
        iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
      };
      setActivities([activity, ...activities]);
    }
  };

  const handleRejectBid = (bidId) => {
    setBids(prev => prev.map(b => b.id === bidId ? { ...b, status: 'REJECTED' } : b));

    const rejectedBid = bids.find(b => b.id === bidId);
    if (rejectedBid) {
      const activity = {
        id: activities.length + 1,
        type: 'deadline', // warning/danger
        text: `Bid rejected for ${rejectedBid.name}`,
        time: 'Just now',
        iconColor: 'text-red-400 bg-red-500/10 border-red-500/20'
      };
      setActivities([activity, ...activities]);
    }
  };

  // Add a campaign
  const handleCreateCampaign = async (e) => {
    e.preventDefault();
    if (!newCampaign.name || !newCampaign.minBudget || !newCampaign.maxBudget || !newCampaign.daysLeft || !newCampaign.description) {
      alert("Please fill in all campaign fields.");
      return;
    }

    const brandNameStr = newCampaign.brandName || currentUser?.name || 'My Brand';
    const initials = brandNameStr.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) || 'MY';

    const payload = {
      companyId: currentUser._id,
      brandName: brandNameStr,
      brandInitials: initials,
      brandColor: 'bg-brand-orange text-white',
      name: newCampaign.name,
      niche: newCampaign.niche,
      description: newCampaign.description,
      minBudget: Number(newCampaign.minBudget),
      maxBudget: Number(newCampaign.maxBudget),
      daysLeft: `${newCampaign.daysLeft}d`,
      platforms: newCampaign.platforms,
      image: newCampaign.image || '/techflow_workspace.jpg'
    };

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
      const response = await fetch(`${backendUrl}/api/campaigns`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const savedCampaign = await response.json();
        // map it to match UI expects (budgetRange, budgetMax, bids)
        const campaignForUI = {
          ...savedCampaign,
          id: savedCampaign._id,
          bids: savedCampaign.bidsCount || 0
        };
        setCampaigns([campaignForUI, ...campaigns]);
      } else {
        const errorData = await response.json();
        console.warn("Failed to create campaign in DB:", errorData.message);
        // Fallback local save if server error
        const localCampaign = {
          ...payload,
          id: campaigns.length + 1,
          budgetRange: `$${payload.minBudget.toLocaleString()} - $${payload.maxBudget.toLocaleString()}`,
          budgetMax: `$${payload.maxBudget.toLocaleString()}`,
          bids: 0
        };
        setCampaigns([localCampaign, ...campaigns]);
      }
    } catch (err) {
      console.warn("Failed to create campaign in DB with network error:", err);
      // Fallback local save if server down
      const localCampaign = {
        ...payload,
        id: campaigns.length + 1,
        budgetRange: `$${payload.minBudget.toLocaleString()} - $${payload.maxBudget.toLocaleString()}`,
        budgetMax: `$${payload.maxBudget.toLocaleString()}`,
        bids: 0
      };
      setCampaigns([localCampaign, ...campaigns]);
    }

    const activity = {
      id: activities.length + 1,
      type: 'create',
      text: `Campaign "${newCampaign.name}" launched`,
      time: 'Just now',
      iconColor: 'text-brand-orange bg-brand-orange/10 border-brand-orange/20'
    };
    setActivities([activity, ...activities]);

    setNewCampaign({
      name: '',
      brandName: currentUser?.name || '',
      niche: 'Fitness',
      description: '',
      minBudget: '',
      maxBudget: '',
      daysLeft: '',
      platforms: ['Instagram'],
      image: ''
    });
    setIsModalOpen(false);
  };

  const toggleFormPlatform = (platform) => {
    if (newCampaign.platforms.includes(platform)) {
      if (newCampaign.platforms.length > 1) {
        setNewCampaign(prev => ({
          ...prev,
          platforms: prev.platforms.filter(p => p !== platform)
        }));
      }
    } else {
      setNewCampaign(prev => ({
        ...prev,
        platforms: [...prev.platforms, platform]
      }));
    }
  };

  if (!currentUser) return null;

  // Filter campaigns
  const filteredCampaigns = campaigns.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.niche.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sidebar item styling helper
  const sidebarItemClass = (tabName) => `
    flex items-center gap-3.5 px-4 py-3 rounded-lg text-[14.5px] font-semibold cursor-pointer transition-all duration-200 w-full text-left
    ${activeTab === tabName
      ? 'bg-[rgba(255,78,13,0.06)] text-brand-orange border border-[rgba(255,78,13,0.15)] font-bold'
      : 'text-auth-ink-soft hover:text-auth-ink hover:bg-brand-cardHover border border-transparent'
    }
  `;

  // General Metrics
  const activeCampaignsCount = campaigns.length;
  const totalBidsCount = campaigns.reduce((acc, c) => acc + (parseInt(c.bids, 10) || 0), 0);
  const avgBidsPerCampaign = activeCampaignsCount > 0 ? (totalBidsCount / activeCampaignsCount).toFixed(1) : 0;
  const budgetCommitted = campaigns.reduce((acc, c) => acc + (Number(c.maxBudget) || 0), 0);

  // SVG Line Chart details
  const svgWidth = 500;
  const svgHeight = 220;
  const paddingX = 40;
  const paddingY = 30;

  const points = CHART_DATA.map((d, index) => {
    const x = paddingX + (index * (svgWidth - paddingX * 2)) / (CHART_DATA.length - 1);
    const y = svgHeight - paddingY - (d.value * (svgHeight - paddingY * 2)) / 10000;
    return { x, y, ...d };
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPath = `
    ${linePath}
    L ${points[points.length - 1].x} ${svgHeight - paddingY}
    L ${points[0].x} ${svgHeight - paddingY}
    Z
  `;

  // Specific campaign bids filtering
  const selectedCampaignBids = bids.filter(b => b.campaignId === selectedCampaign?.id);
  const filteredBids = selectedCampaignBids.filter(b => {
    if (bidFilter === 'All') return true;
    return b.status.toLowerCase() === bidFilter.toLowerCase();
  });

  return (
    <div className="h-screen overflow-hidden bg-brand-dark text-auth-ink font-sans flex transition-colors duration-300 antialiased" data-theme={theme}>

      {/* SIDEBAR - Hidden when viewing campaign details to match screenshot */}
      {!selectedCampaign && (
        <Sidebar
          currentUser={currentUser}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          handleLogout={handleLogout}
          sidebarItemClass={sidebarItemClass}
        />
      )}

      {/* MAIN CONTAINER */}
      <main className="flex-1 h-full overflow-y-auto bg-brand-dark p-8 flex flex-col gap-8">

        {/* VIEW 1: CAMPAIGN DETAIL PAGE (When selectedCampaign is set) */}
        {selectedCampaign ? (
          <div className="flex flex-col gap-6 w-full max-w-[1200px] mx-auto">

            {/* Header / Top breadcrumb bar */}
            <header className="flex items-center justify-between border-b border-brand-border pb-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedCampaign(null)}
                  className="text-[12px] font-black tracking-wider text-auth-ink-soft hover:text-auth-ink bg-transparent border-none cursor-pointer flex items-center gap-1.5 transition-colors"
                >
                  &lt; BACK
                </button>
                <span className="text-brand-border text-lg">|</span>
                <h2 className="font-heading text-[15px] font-black text-auth-ink uppercase tracking-wider">
                  {selectedCampaign.name}
                </h2>
                <span className="text-[10px] font-extrabold tracking-wider border border-brand-tealDark bg-brand-tealDark/30 text-brand-teal px-2 py-0.5 rounded uppercase">
                  {selectedCampaign.status}
                </span>
              </div>

              {/* Theme button */}
              <button
                className="w-10 h-10 rounded-full border border-brand-border bg-brand-card cursor-pointer flex items-center justify-center text-lg hover:bg-brand-cardHover hover:shadow-sm transition-all text-auth-ink"
                onClick={toggleTheme}
              >
                {theme === 'light' ? <FiMoon /> : <FiSun />}
              </button>
            </header>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* LEFT COLUMN: Campaign Details Summary (lg:col-span-4) */}
              <div className="lg:col-span-4 flex flex-col gap-6">

                {/* Product Image Card */}
                <div className="rounded-2xl border border-brand-border overflow-hidden bg-[#0b0a0a] flex items-center justify-center aspect-16/10 relative shadow-md">
                  <img src={selectedCampaign.image} alt={selectedCampaign.name} className="w-full h-full object-cover" onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<span class="text-3xl">⚡</span>';
                  }} />
                </div>

                {/* Campaign Main Summary Card */}
                <div className="bg-brand-card border border-brand-border rounded-2xl p-5 flex flex-col gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center font-extrabold text-[10.5px] ${selectedCampaign.brandColor || 'bg-brand-orange text-white'}`}>
                      {selectedCampaign.brandInitials}
                    </div>
                    <span className="text-[12.5px] font-extrabold text-auth-ink-soft">{selectedCampaign.brandName}</span>
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-black text-auth-ink leading-tight">{selectedCampaign.name}</h3>
                    <p className="text-[13px] text-auth-ink-soft font-semibold leading-relaxed mt-2.5">
                      {selectedCampaign.description}
                    </p>
                  </div>

                  {/* Vertical stats stack */}
                  <div className="flex flex-col gap-3.5 border-t border-brand-border pt-4 mt-2">
                    <div className="flex justify-between items-center text-[13px]">
                      <span className="text-auth-ink-soft font-bold">Budget</span>
                      <span className="text-auth-ink font-black">{selectedCampaign.budgetRange}</span>
                    </div>
                    <div className="flex justify-between items-center text-[13px]">
                      <span className="text-auth-ink-soft font-bold">Deadline</span>
                      <span className="text-auth-ink font-black">
                        {selectedCampaign.daysLeft.includes('left') ? selectedCampaign.daysLeft : `${selectedCampaign.daysLeft} left`}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[13px]">
                      <span className="text-auth-ink-soft font-bold">Category</span>
                      <span className="text-auth-ink font-black">{selectedCampaign.niche}</span>
                    </div>
                    <div className="flex justify-between items-center text-[13px]">
                      <span className="text-auth-ink-soft font-bold">Total Bids</span>
                      <span className="text-auth-ink font-black">{selectedCampaign.bids}</span>
                    </div>
                  </div>
                </div>

                {/* Eligibility Filters Card */}
                <div className="bg-brand-card border border-brand-border rounded-2xl p-5 flex flex-col gap-4">
                  <h4 className="text-[11px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft">ELIGIBILITY FILTERS</h4>

                  <div className="flex flex-col gap-3.5">
                    <div className="flex justify-between items-center text-[13px]">
                      <span className="text-auth-ink-soft font-bold">Followers</span>
                      <span className="text-auth-ink font-black">{selectedCampaign.followersFilter || '10K - 500K'}</span>
                    </div>
                    <div className="flex justify-between items-center text-[13px]">
                      <span className="text-auth-ink-soft font-bold">Engagement</span>
                      <span className="text-auth-ink font-black">{selectedCampaign.engagementFilter || '≥ 3.5%'}</span>
                    </div>
                    <div className="flex justify-between items-center text-[13px]">
                      <span className="text-auth-ink-soft font-bold">Age</span>
                      <span className="text-auth-ink font-black">{selectedCampaign.ageFilter || '18 - 35'}</span>
                    </div>
                    <div className="flex justify-between items-center text-[13px]">
                      <span className="text-auth-ink-soft font-bold">Location</span>
                      <span className="text-auth-ink font-black">{selectedCampaign.locationFilter || 'United States'}</span>
                    </div>
                  </div>

                  {/* Tags & Platforms row */}
                  <div className="flex flex-col gap-2.5 border-t border-brand-border pt-4 mt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCampaign.platforms.map(p => (
                        <span key={p} className="px-2.5 py-1 text-[12px] font-bold text-auth-ink bg-brand-dark border border-brand-border rounded-md flex items-center gap-1.5">
                          <PlatformIcon platform={p} className="w-3 h-3 text-auth-ink-soft" />
                          {p}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {(selectedCampaign.tags || ['Fitness', 'Social']).map(t => (
                        <span key={t} className="px-2.5 py-1 text-[12px] font-bold text-auth-ink bg-brand-dark border border-brand-border rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Received Bids (lg:col-span-8) */}
              <div className="lg:col-span-8 flex flex-col gap-5">

                {/* Bids Header and filters bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h3 className="text-[13.5px] font-black font-heading tracking-wider text-auth-ink uppercase">
                    RECEIVED BIDS ({selectedCampaignBids.length})
                  </h3>

                  {/* Filter tags button row */}
                  <div className="flex gap-2">
                    {['All', 'Pending', 'Accepted', 'Rejected'].map(filter => {
                      const isActive = bidFilter === filter;
                      return (
                        <button
                          key={filter}
                          onClick={() => setBidFilter(filter)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer border ${isActive
                            ? 'bg-[#B5482A] border-[#B5482A] text-[#FFF7F0] shadow-sm'
                            : 'bg-brand-card border-brand-border text-auth-ink-soft hover:text-auth-ink hover:border-auth-ink'
                            }`}
                        >
                          {filter.toUpperCase()}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Bids cards stack */}
                <div className="flex flex-col gap-5">
                  {filteredBids.length === 0 ? (
                    <div className="bg-brand-card border border-brand-border rounded-2xl p-12 text-center text-auth-ink-soft font-bold">
                      No received bids in this category.
                    </div>
                  ) : (
                    filteredBids.map((bid) => (
                      <CompanyBidCard
                        key={bid.id}
                        bid={bid}
                        onAccept={handleAcceptBid}
                        onReject={handleRejectBid}
                      />
                    ))
                  )}
                </div>

              </div>

            </div>

          </div>
        ) : (
          /* VIEW 2: NORMAL OVERVIEW & CAMPAIGNS TAB VIEWS */
          <>
            {/* OVERVIEW TAB */}
            {activeTab === 'Overview' && (
              <>
                {/* OVERVIEW HEADER */}
                <header className="flex justify-between items-center">
                  <div>
                    <h1 className="text-[26px] font-black font-heading text-auth-ink uppercase tracking-tight">OVERVIEW</h1>
                    <p className="text-[14.5px] font-bold text-auth-ink-soft mt-0.5">Welcome back, {currentUser.name || 'jkkh'}</p>
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

                {/* METRICS ROW */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      label: 'ACTIVE CAMPAIGNS',
                      value: activeCampaignsCount,
                      highlight: true,
                      iconPath: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                    },
                    {
                      label: 'TOTAL BIDS',
                      value: totalBidsCount,
                      subtitle: 'across all campaigns',
                      iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
                    },
                    {
                      label: 'BUDGET COMMITTED',
                      value: `$${budgetCommitted.toLocaleString()}`,
                      subtitle: 'this month',
                      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                    },
                    {
                      label: 'AVG BIDS / CAMPAIGN',
                      value: avgBidsPerCampaign,
                      iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
                    },
                  ].map((metric) => (
                    <MetricCard
                      key={metric.label}
                      label={metric.label}
                      value={metric.value}
                      subtitle={metric.subtitle}
                      highlight={metric.highlight}
                      icon={
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d={metric.iconPath} />
                        </svg>
                      }
                    />
                  ))}
                </section>

                {/* CHART & ACTIVITY ROW */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                  {/* Bid Activity SVG Line Chart */}
                  <div className="bg-brand-card border border-brand-border rounded-2xl p-6 lg:col-span-2 flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-[11.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft">BID ACTIVITY</div>
                        <h3 className="text-xl font-bold mt-1 text-auth-ink">Monthly Overview</h3>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Live
                      </div>
                    </div>

                    <div className="relative w-full h-[220px]">
                      <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full">
                        <defs>
                          <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FF4E0D" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#FF4E0D" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        {/* Horizontal gridlines */}
                        {[0, 2500, 5000, 7500, 10000].map((val) => {
                          const y = svgHeight - paddingY - (val * (svgHeight - paddingY * 2)) / 10000;
                          return (
                            <g key={val}>
                              <line x1={paddingX} y1={y} x2={svgWidth - paddingX} y2={y} className="stroke-brand-border opacity-50" strokeWidth="1" strokeDasharray="4 4" />
                              <text x={paddingX - 10} y={y + 4} className="fill-auth-ink-soft text-[10px] font-bold text-right" textAnchor="end">{val === 0 ? '0' : val.toLocaleString()}</text>
                            </g>
                          );
                        })}

                        {/* Hover vertical guidelining */}
                        {hoveredPoint !== null && (
                          <line
                            x1={points[hoveredPoint].x}
                            y1={points[hoveredPoint].y}
                            x2={points[hoveredPoint].x}
                            y2={svgHeight - paddingY}
                            className="stroke-brand-border"
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                          />
                        )}

                        <path d={areaPath} fill="url(#chartGlow)" />
                        <path d={linePath} fill="none" stroke="#FF4E0D" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_2px_8px_rgba(255,78,13,0.3)]" />

                        {points.map((p, i) => (
                          <g key={i}>
                            <text x={p.x} y={svgHeight - 8} className="fill-auth-ink-soft text-[10.5px] font-extrabold" textAnchor="middle">{p.month}</text>
                            <circle cx={p.x} cy={p.y} r={hoveredPoint === i ? "6" : "4.5"} className="fill-brand-dark stroke-brand-orange cursor-pointer transition-all duration-150" strokeWidth={hoveredPoint === i ? "3.5" : "2.5"} onMouseEnter={() => setHoveredPoint(i)} onMouseLeave={() => setHoveredPoint(null)} />
                          </g>
                        ))}
                      </svg>

                      {/* Tooltip matching Apr screenshot */}
                      {hoveredPoint !== null && (
                        <div
                          className="absolute bg-brand-card border border-brand-border text-auth-ink px-4 py-2.5 rounded-xl text-xs font-bold shadow-md pointer-events-none transition-all duration-150 -translate-x-1/2 -translate-y-full flex flex-col items-start min-w-[120px]"
                          style={{
                            left: `${(points[hoveredPoint].x / svgWidth) * 100}%`,
                            top: `${(points[hoveredPoint].y / svgHeight) * 100 - 8}%`
                          }}
                        >
                          <div className="text-[12px] font-bold text-auth-ink">{points[hoveredPoint].month}</div>
                          <div className="text-brand-orange mt-1.5 text-xs font-semibold flex items-center gap-1.5">
                            <span className="text-auth-ink-soft font-bold">revenue :</span>
                            <span className="text-brand-orange font-black">{points[hoveredPoint].value}</span>
                          </div>
                          <div className="w-2.5 h-2.5 bg-brand-card border-r border-b border-brand-border rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Recent Activity feed */}
                  <div className="bg-brand-card border border-brand-border rounded-2xl p-6 flex flex-col gap-5">
                    <div>
                      <div className="text-[11.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft">RECENT ACTIVITY</div>
                      <h3 className="text-xl font-bold mt-1 text-auth-ink">Activity Feed</h3>
                    </div>

                    <div className="flex flex-col gap-4 overflow-y-auto max-h-[220px] pr-1">
                      {activities.slice(0, 5).map((act) => (
                        <div key={act.id} className="flex gap-3 text-[14px]">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border text-[14px] ${act.iconColor}`}>
                            {act.type === 'bid' && '👤'}
                            {act.type === 'accept' && '✓'}
                            {act.type === 'new_bid' && '+'}
                            {act.type === 'received' && '🔔'}
                            {act.type === 'deadline' && '⚠️'}
                            {act.type === 'create' && '⚡'}
                          </div>

                          <div className="flex-1 flex flex-col justify-center leading-snug">
                            <div className="text-auth-ink-soft">
                              {act.user && <span className="font-extrabold text-auth-ink mr-1">{act.user}</span>}
                              {act.text}
                            </div>
                            <span className="text-[12px] font-bold text-auth-ink-soft/60 mt-0.5">{act.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* YOUR CAMPAIGNS SUMMARY */}
                <section className="bg-brand-card border border-brand-border rounded-2xl p-6 flex flex-col gap-5">
                  <div className="flex justify-between items-center">
                    <h3 className="text-[11.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft">YOUR CAMPAIGNS</h3>
                    <button onClick={() => setActiveTab('Campaigns')} className="text-brand-orange hover:text-brand-orangeHover text-[12.5px] font-bold tracking-wider transition-colors cursor-pointer flex items-center gap-1 bg-transparent border-none">
                      VIEW ALL <span className="text-xs">&gt;</span>
                    </button>
                  </div>

                  <div className="flex flex-col gap-3">
                    {campaigns.slice(0, 3).map((c) => (
                      <div
                        key={c.id}
                        onClick={() => handleCampaignClick(c)}
                        className="flex items-center justify-between gap-4 p-3 border border-brand-border rounded-xl bg-brand-dark hover:border-brand-orange/20 hover:scale-[1.005] cursor-pointer transition-all duration-200"
                      >
                        <div className="flex items-center gap-4">
                          {/* Thumbnail */}
                          <div className="w-12 h-12 rounded-lg bg-brand-card border border-brand-border overflow-hidden shrink-0 flex items-center justify-center relative">
                            <img src={c.image} alt={c.name} className="w-full h-full object-cover" onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentNode.innerHTML = '<span class="text-xl">⚡</span>';
                            }} />
                          </div>

                          {/* Title & Subtitle */}
                          <div>
                            <h4 className="font-bold text-auth-ink text-[14.5px] leading-tight">{c.name}</h4>
                            <p className="text-auth-ink-soft text-[12px] font-bold mt-1">
                              {c.niche} &nbsp;&middot;&nbsp; {c.bids} bids &nbsp;&middot;&nbsp; {c.daysLeft.includes('left') ? c.daysLeft : `${c.daysLeft} left`}
                            </p>
                          </div>
                        </div>

                        {/* Right side aligned elements */}
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-extrabold tracking-wider border border-brand-tealDark bg-brand-tealDark/30 text-brand-teal px-2 py-0.5 rounded uppercase">
                            {c.status}
                          </span>
                          <span className="font-heading text-[14.5px] font-black text-brand-teal min-w-[65px] text-right">
                            {c.budgetMax}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* CAMPAIGNS TAB */}
            {activeTab === 'Campaigns' && (
              <CampaignPage
                campaigns={campaigns}
                filteredCampaigns={filteredCampaigns}
                theme={theme}
                toggleTheme={toggleTheme}
                setIsModalOpen={setIsModalOpen}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleCampaignClick={handleCampaignClick}
                PlatformIcon={PlatformIcon}
                activities={activities}
                setActivities={setActivities}
              />
            )}

            {/* ANALYTICS TAB */}
            {activeTab === 'Analytics' && (
              <div className="bg-brand-card border border-brand-border rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[450px]">
                <div className="w-16 h-16 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center text-3xl mb-4">📈</div>
                <h2 className="text-2xl font-black font-heading text-auth-ink">Analytics Hub</h2>
                <p className="text-auth-ink-soft max-w-md mt-2">Comprehensive graphs, conversion tracking, creator performance analysis, and ROI calculator charts will be displayed here.</p>
              </div>
            )}

            {/* SETTINGS TAB */}
            {activeTab === 'Settings' && (
              <div className="bg-brand-card border border-brand-border rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[450px]">
                <div className="w-16 h-16 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center text-3xl mb-4">⚙️</div>
                <h2 className="text-2xl font-black font-heading text-auth-ink">Company Settings</h2>
                <p className="text-auth-ink-soft max-w-md mt-2">Manage your company profile details, API integrations, workspace roles, and billing subscription preferences here.</p>
              </div>
            )}
          </>
        )}

      </main>

      {/* NEW CAMPAIGN POSTING MODAL */}
      <LaunchCampaignModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        newCampaign={newCampaign}
        setNewCampaign={setNewCampaign}
        onSubmit={handleCreateCampaign}
        toggleFormPlatform={toggleFormPlatform}
      />

    </div>
  );
}
