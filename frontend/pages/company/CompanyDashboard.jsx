import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

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

// Initial campaigns list matching the attachment details
const INITIAL_CAMPAIGNS = [
  {
    id: 1,
    brandInitials: 'NA',
    brandColor: 'bg-[#B5482A] text-white',
    brandName: 'Norde Athletics',
    name: 'Norde Pro Runner X7',
    niche: 'Fitness',
    description: 'Launch campaign for our new performance running shoe. We need authentic creators who genuinely love fitness and running culture. Posts should feel natural, not scripted - show us how you integrate these into your training.',
    budgetRange: '$800 - $3,500',
    budgetMax: '$3,500',
    bids: 14,
    daysLeft: '11d',
    platforms: ['Instagram', 'TikTok'],
    status: 'OPEN',
    image: '/norde_runner.jpg',
    followersFilter: '10K - 500K',
    engagementFilter: '≥ 3.5%',
    ageFilter: '18 - 35',
    locationFilter: 'United States',
    tags: ['Fitness', 'Running', 'Health']
  },
  {
    id: 2,
    brandInitials: 'LS',
    brandColor: 'bg-[#D27C2C] text-white',
    brandName: 'Lumière Skin',
    name: 'Vitamin C Serum Pro',
    niche: 'Beauty',
    description: 'Premium skincare launch targeting beauty-focused audiences. We want creators who can demonstrate before/after results authentically, showing daily routine integration.',
    budgetRange: '$1,500 - $8,000',
    budgetMax: '$8,000',
    bids: 31,
    daysLeft: '4d',
    platforms: ['Instagram', 'YouTube'],
    status: 'OPEN',
    image: '/vitamin_c.jpg',
    followersFilter: '20K - 250K',
    engagementFilter: '≥ 4.0%',
    ageFilter: '18 - 30',
    locationFilter: 'United States, UK',
    tags: ['Beauty', 'Skincare', 'Cosmetics']
  },
  {
    id: 3,
    brandInitials: 'TF',
    brandColor: 'bg-[#1976D2] text-white',
    brandName: 'Techflow SaaS',
    name: 'Techflow AI Workspace',
    niche: 'Technology',
    description: 'B2B productivity tool — we need tech creators who speak to founders, remote teams, and developers. Looking for honest reviews, walkthroughs, and workspace integrations.',
    budgetRange: '$2,000 - $12,000',
    budgetMax: '$12,000',
    bids: 8,
    daysLeft: '18d',
    platforms: ['YouTube', 'LinkedIn'],
    status: 'OPEN',
    image: '/techflow_workspace.jpg',
    followersFilter: '5K - 100K',
    engagementFilter: '≥ 2.0%',
    ageFilter: '22 - 45',
    locationFilter: 'Global',
    tags: ['SaaS', 'AI', 'Productivity']
  },
  {
    id: 4,
    brandInitials: 'CR',
    brandColor: 'bg-[#5D4037] text-white',
    brandName: 'Café Ritual',
    name: 'Single-Origin Cold Brew Kit',
    niche: 'Food & Beverage',
    description: 'Summer launch of our single-origin cold brew kits. We want lifestyle, food, and daily vlog creators who show the brewing process, styling, and summer recipes.',
    budgetRange: '$600 - $2,500',
    budgetMax: '$2,500',
    bids: 19,
    daysLeft: '12d',
    platforms: ['Instagram', 'TikTok'],
    status: 'OPEN',
    image: '/cold_brew.jpg',
    followersFilter: '10K - 150K',
    engagementFilter: '≥ 3.0%',
    ageFilter: '18 - 40',
    locationFilter: 'United States, Canada',
    tags: ['Coffee', 'Lifestyle', 'Food']
  }
];

// Initial activity feed
const INITIAL_ACTIVITIES = [
  {
    id: 1,
    type: 'bid',
    user: 'Sofia Andersson',
    text: 'bid on Norde Pro Runner X7',
    time: '2m ago',
    iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
  },
  {
    id: 2,
    type: 'accept',
    text: 'Bid accepted for Vitamin C Serum Pro',
    time: '1h ago',
    iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
  },
  {
    id: 3,
    type: 'new_bid',
    user: 'Marcus Chen',
    text: 'submitted a new bid',
    time: '3h ago',
    iconColor: 'text-brand-orange bg-brand-orange/10 border-brand-orange/20'
  },
  {
    id: 4,
    type: 'received',
    text: 'Campaign Techflow AI received 2 new bids',
    time: '5h ago',
    iconColor: 'text-brand-orange bg-brand-orange/10 border-brand-orange/20'
  },
  {
    id: 5,
    type: 'deadline',
    text: 'Cold Brew Kit campaign deadline in 14 days',
    time: '1d ago',
    iconColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20'
  }
];

// Chart values matching April tooltip in screenshots
const CHART_DATA = [
  { month: 'Feb', value: 3000 },
  { month: 'Mar', value: 5000 },
  { month: 'Apr', value: 4480 },
  { month: 'May', value: 8000 },
  { month: 'Jun', value: 7000 },
  { month: 'Jul', value: 9000 }
];

// Initial Received Bids list
const INITIAL_BIDS = [
  {
    id: 1,
    campaignId: 1, // Norde Pro Runner X7
    name: 'Marcus Chen',
    avatar: 'MC',
    username: '@marcusruns',
    platform: 'Instagram',
    followers: '87K',
    engagement: '5.2%',
    location: 'New York',
    pitch: 'I run 40+ miles per week and document every training block. My audience is 78% runners aged 22-34. I can create a 3-week story series showing real training performance.',
    deliverables: '1x Reel (60s)  |  4x Stories  |  1x Feed Post',
    budget: '$1,800',
    status: 'PENDING',
    date: '2026-06-29'
  },
  {
    id: 2,
    campaignId: 1,
    name: 'Sofia Andersson',
    avatar: 'SA',
    username: '@sofiaactive',
    platform: 'TikTok',
    followers: '234K',
    engagement: '8.7%',
    location: 'Stockholm',
    pitch: 'Marathon runner with a loyal fitness community. My TikToks regularly hit 500K+ views. This shoe review would be part of my Boston qualifying journey content.',
    deliverables: '3x TikTok videos + product unboxing',
    budget: '$3,200',
    status: 'ACCEPTED',
    date: '2026-06-29'
  },
  {
    id: 3,
    campaignId: 1,
    name: 'Jordan Lee',
    avatar: 'JL',
    username: '@jordanlifts',
    platform: 'Instagram',
    followers: '62K',
    engagement: '6.8%',
    location: 'Chicago',
    pitch: 'Powerlifting coach with a community that trusts my gear reviews. My followers are serious athletes who buy what I recommend.',
    deliverables: '2x Reels + 3x Stories + 1x Post',
    budget: '$1,400',
    status: 'REJECTED',
    date: '2026-06-28'
  },
  // Bids for Vitamin C Serum Pro
  {
    id: 4,
    campaignId: 2,
    name: 'Elena Rostova',
    avatar: 'ER',
    username: '@elenabeauty',
    platform: 'Instagram',
    followers: '45K',
    engagement: '6.1%',
    location: 'Paris',
    pitch: 'I specialize in clean beauty skincare formulations and daily aesthetic routines. My audience trusts my scientific breakdowns.',
    deliverables: '1x Reel (30s) + 3x Stories',
    budget: '$2,200',
    status: 'ACCEPTED',
    date: '2026-06-29'
  },
  {
    id: 5,
    campaignId: 2,
    name: 'Chloe Tan',
    avatar: 'CT',
    username: '@chloeskin',
    platform: 'YouTube',
    followers: '82K',
    engagement: '4.3%',
    location: 'Los Angeles',
    pitch: 'Skincare chemical engineer, I review skincare ingredients from a science perspective. I can build a highly technical review of the Serum Pro.',
    deliverables: '1x Dedicated YouTube video + 2x IG stories',
    budget: '$1,600',
    status: 'PENDING',
    date: '2026-06-28'
  },
  // Bids for Techflow AI Workspace
  {
    id: 6,
    campaignId: 3,
    name: 'David Miller',
    avatar: 'DM',
    username: '@davidtech',
    platform: 'YouTube',
    followers: '18K',
    engagement: '3.2%',
    location: 'San Francisco',
    pitch: 'Aesthetic productivity tech reviews channel. I can showcase the Techflow AI Workspace in action inside my desk setup routines.',
    deliverables: '1x YouTube Short + 1x Dedicated Workspace Walkthrough video',
    budget: '$4,500',
    status: 'PENDING',
    date: '2026-06-29'
  },
  // Bids for Café Coffee kit
  {
    id: 7,
    campaignId: 4,
    name: 'Sarah Jenkins',
    avatar: 'SJ',
    username: '@sarahbrews',
    platform: 'Instagram',
    followers: '34K',
    engagement: '5.5%',
    location: 'Seattle',
    pitch: 'Coffee recipe creator publishing aesthetic daily brews. I will formulate 3 custom recipes using the single-origin beans.',
    deliverables: '2x TikTok brewing videos + 1x Instagram Reel',
    budget: '$1,200',
    status: 'ACCEPTED',
    date: '2026-06-29'
  },
  {
    id: 8,
    campaignId: 4,
    name: 'Takahiro Sato',
    avatar: 'TS',
    username: '@takacoffee',
    platform: 'TikTok',
    followers: '12K',
    engagement: '8.0%',
    location: 'Tokyo',
    pitch: 'Morning coffee routine vlogger. I show relaxing, highly-edited aesthetic brewing guides.',
    deliverables: '1x TikTok coffee review',
    budget: '$900',
    status: 'REJECTED',
    date: '2026-06-27'
  }
];

export default function CompanyDashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [activeTab, setActiveTab] = useState('Overview');
  const [campaigns, setCampaigns] = useState(INITIAL_CAMPAIGNS);
  const [activities, setActivities] = useState(INITIAL_ACTIVITIES);
  const [bids, setBids] = useState(INITIAL_BIDS);
  
  // Navigation for specific Campaign detail view
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [bidFilter, setBidFilter] = useState('All'); // 'All', 'Pending', 'Accepted', 'Rejected'
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modal toggle
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // New Campaign Form State
  const [newCampaign, setNewCampaign] = useState({
    name: '',
    brandName: '',
    niche: 'Fitness',
    description: '',
    minBudget: '',
    maxBudget: '',
    daysLeft: '',
    platforms: ['Instagram']
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
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || user.role !== 'company') {
      navigate('/login');
    } else {
      setCurrentUser(user);
      setNewCampaign(prev => ({ ...prev, brandName: user.name || 'My Brand' }));
    }
  }, [navigate]);

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
  const handleCreateCampaign = (e) => {
    e.preventDefault();
    if (!newCampaign.name || !newCampaign.minBudget || !newCampaign.maxBudget || !newCampaign.daysLeft || !newCampaign.description) {
      alert("Please fill in all campaign fields.");
      return;
    }

    const brandNameStr = newCampaign.brandName || currentUser?.name || 'My Brand';
    const initials = brandNameStr.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) || 'MY';

    const campaign = {
      id: campaigns.length + 1,
      brandInitials: initials,
      brandColor: 'bg-brand-orange text-white',
      brandName: brandNameStr,
      name: newCampaign.name,
      niche: newCampaign.niche,
      description: newCampaign.description,
      budgetRange: `$${parseInt(newCampaign.minBudget, 10).toLocaleString()} - $${parseInt(newCampaign.maxBudget, 10).toLocaleString()}`,
      budgetMax: `$${parseInt(newCampaign.maxBudget, 10).toLocaleString()}`,
      bids: 0,
      daysLeft: `${newCampaign.daysLeft}d`,
      platforms: newCampaign.platforms,
      status: 'OPEN',
      image: '/techflow_workspace.jpg', // default
      followersFilter: '10K - 100K',
      engagementFilter: '≥ 2.5%',
      ageFilter: '18 - 35',
      locationFilter: 'United States',
      tags: [newCampaign.niche, 'Social']
    };

    setCampaigns([campaign, ...campaigns]);

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
      platforms: ['Instagram']
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
  const budgetCommitted = 24500; 

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
        <aside className="w-[260px] h-full flex-shrink-0 bg-brand-card border-r border-brand-border flex flex-col justify-between p-6 z-10">
          <div className="flex flex-col gap-8">
            
            {/* Logo */}
            <div className="flex items-center gap-2.5 font-extrabold text-[19px] tracking-[-0.02em]">
              <span className="w-8 h-8 rounded-lg  flex items-center justify-center text-white text-base font-bold shadow-md shadow-brand-orange/20">⚡</span>
              <span className="font-heading font-black tracking-wider text-auth-ink uppercase">INFLUBLAST</span>
            </div>

            {/* Profile card */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-brand-cardHover border border-brand-border hover:shadow-sm transition-all duration-200">
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center font-bold text-[16px]">
                {currentUser.name ? currentUser.name[0].toUpperCase() : 'J'}
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="font-extrabold text-[14px] leading-tight text-auth-ink truncate">{currentUser.name || 'jkkh'}</div>
                <div className="text-[12px] font-bold text-auth-ink-soft leading-none truncate">@{currentUser.userName || 'fdsjlj'}</div>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2">
              <button onClick={() => setActiveTab('Overview')} className={sidebarItemClass('Overview')}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Overview
              </button>
              <button onClick={() => setActiveTab('Campaigns')} className={sidebarItemClass('Campaigns')}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Campaigns
              </button>
              <button onClick={() => setActiveTab('Analytics')} className={sidebarItemClass('Analytics')}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                </svg>
                Analytics
              </button>
            </nav>
          </div>

          {/* Sidebar Footer */}
          <div className="flex flex-col gap-4">
            <button onClick={() => setActiveTab('Settings')} className="flex items-center gap-3.5 px-4 py-3 rounded-lg text-[14.5px] font-semibold text-auth-ink-soft hover:text-auth-ink hover:bg-brand-cardHover border border-transparent transition-all w-full text-left">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0" />
              </svg>
              Settings
            </button>
            
            <button className="text-[12px] font-medium text-auth-ink-soft hover:underline self-start bg-transparent border-none cursor-pointer">
              Manage cookies or opt out
            </button>
            
            <button onClick={handleLogout} className="flex items-center gap-3.5 px-4 py-3 rounded-lg text-[14.5px] font-semibold text-red-500 hover:bg-red-500/5 transition-all mt-2 border border-transparent w-full text-left">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign out
            </button>
          </div>
        </aside>
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
                className="w-10 h-10 rounded-full border border-brand-border bg-brand-card cursor-pointer flex items-center justify-center text-base hover:bg-brand-cardHover hover:shadow-sm transition-all"
                onClick={toggleTheme}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </header>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: Campaign Details Summary (lg:col-span-4) */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                
                {/* Product Image Card */}
                <div className="rounded-2xl border border-brand-border overflow-hidden bg-[#0b0a0a] flex items-center justify-center aspect-[16/10] relative shadow-md">
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
                          className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer border ${
                            isActive 
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
                      <div key={bid.id} className="bg-brand-card border border-brand-border rounded-2xl p-5 flex flex-col gap-4">
                        
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
                            <span className={`text-[10px] font-extrabold tracking-wider border px-2 py-0.5 rounded uppercase ${
                              bid.status === 'ACCEPTED' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' :
                              bid.status === 'REJECTED' ? 'border-red-500/30 bg-red-500/10 text-red-400' :
                              'border-yellow-500/30 bg-yellow-500/10 text-yellow-400'
                            }`}>
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
                                onClick={() => handleRejectBid(bid.id)}
                                className="px-4 py-2 border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 text-red-400 font-extrabold text-[12px] tracking-wide rounded-lg cursor-pointer transition-colors"
                              >
                                &times; REJECT
                              </button>
                              
                              <button 
                                onClick={() => handleAcceptBid(bid.id)}
                                className="px-4 py-2 border border-brand-tealDark/50 bg-brand-tealDark/30 hover:bg-brand-tealDark/50 text-brand-teal font-extrabold text-[12px] tracking-wide rounded-lg cursor-pointer transition-colors"
                              >
                                &bull; ACCEPT
                              </button>
                            </div>
                          )}
                        </div>

                      </div>
                    ))
                  )}
                </div>

              </div>

            </div>

            {/* Sticky/Bottom manage cookies bar */}
            <button className="text-[12px] font-medium text-auth-ink-soft hover:underline self-start bg-transparent border-none cursor-pointer mt-8">
              Manage cookies or opt out
            </button>

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
                      className="w-11 h-11 rounded-full border border-brand-border bg-brand-card cursor-pointer flex items-center justify-center text-base hover:bg-brand-cardHover hover:shadow-sm transition-all"
                      onClick={toggleTheme}
                    >
                      {theme === 'light' ? '🌙' : '☀️'}
                    </button>

                    {/* Notifications */}
                    <button className="w-11 h-11 rounded-xl border border-brand-border bg-brand-card cursor-pointer flex items-center justify-center relative hover:bg-brand-cardHover hover:shadow-sm transition-all">
                      <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-orange animate-ping"></span>
                      <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-orange"></span>
                      <svg className="w-5 h-5 text-auth-ink-soft hover:text-auth-ink transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </button>

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
                  {/* Card 1 */}
                  <div className="bg-brand-card border border-brand-border rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-brand-orange/30 transition-all duration-300">
                    <div className="flex justify-between items-start">
                      <div className="text-[11.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft">ACTIVE CAMPAIGNS</div>
                      <div className="w-9 h-9 rounded-lg bg-[rgba(255,78,13,0.06)] border border-[rgba(255,78,13,0.15)] flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="font-heading text-[32px] font-bold text-brand-orange leading-none">{activeCampaignsCount}</div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-brand-card border border-brand-border rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-brand-orange/30 transition-all duration-300">
                    <div className="flex justify-between items-start">
                      <div className="text-[11.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft">TOTAL BIDS</div>
                      <div className="w-9 h-9 rounded-lg bg-brand-cardHover border border-brand-border flex items-center justify-center text-auth-ink-soft group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-heading text-[32px] font-bold text-auth-ink leading-none">{totalBidsCount}</div>
                      <span className="text-[12.5px] font-bold text-auth-ink-soft mt-1">across all campaigns</span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-brand-card border border-brand-border rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-brand-orange/30 transition-all duration-300">
                    <div className="flex justify-between items-start">
                      <div className="text-[11.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft">BUDGET COMMITTED</div>
                      <div className="w-9 h-9 rounded-lg bg-brand-cardHover border border-brand-border flex items-center justify-center text-auth-ink-soft group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-heading text-[32px] font-bold text-auth-ink leading-none">${budgetCommitted.toLocaleString()}</div>
                      <span className="text-[12.5px] font-bold text-auth-ink-soft mt-1">this month</span>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-brand-card border border-brand-border rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-brand-orange/30 transition-all duration-300">
                    <div className="flex justify-between items-start">
                      <div className="text-[11.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft">AVG BIDS / CAMPAIGN</div>
                      <div className="w-9 h-9 rounded-lg bg-brand-cardHover border border-brand-border flex items-center justify-center text-auth-ink-soft group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <div className="font-heading text-[32px] font-bold text-auth-ink leading-none">{avgBidsPerCampaign}</div>
                  </div>
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
                            <circle cx={p.x} cy={p.y} r={hoveredPoint === i ? "6" : "4.5"} className="fill-brand-dark stroke-[#FF4E0D] cursor-pointer transition-all duration-150" strokeWidth={hoveredPoint === i ? "3.5" : "2.5"} onMouseEnter={() => setHoveredPoint(i)} onMouseLeave={() => setHoveredPoint(null)} />
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
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border text-[14px] ${act.iconColor}`}>
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
                          <div className="w-12 h-12 rounded-lg bg-brand-card border border-brand-border overflow-hidden flex-shrink-0 flex items-center justify-center relative">
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
                      className="w-11 h-11 rounded-full border border-brand-border bg-brand-card cursor-pointer flex items-center justify-center text-base hover:bg-brand-cardHover hover:shadow-sm transition-all"
                      onClick={toggleTheme}
                    >
                      {theme === 'light' ? '🌙' : '☀️'}
                    </button>

                    {/* Notifications */}
                    <button className="w-11 h-11 rounded-xl border border-brand-border bg-brand-card cursor-pointer flex items-center justify-center relative hover:bg-brand-cardHover hover:shadow-sm transition-all">
                      <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-orange animate-ping"></span>
                      <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-orange"></span>
                      <svg className="w-5 h-5 text-auth-ink-soft hover:text-auth-ink transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </button>

                    {/* New Campaign CTA */}
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="px-5 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-[14.5px] cursor-pointer flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-orange/20"
                    >
                      <span className="text-[17px] font-bold">+</span> NEW CAMPAIGN
                    </button>
                  </div>
                </header>

                {/* SEARCH AND POST NEW CTA */}
                <div className="flex gap-4 items-center">
                  <div className="flex-1 relative flex items-center bg-brand-card border border-brand-border rounded-xl transition-colors focus-within:border-brand-orange">
                    <span className="px-4 text-auth-ink-soft text-lg">🔍</span>
                    <input 
                      type="text" 
                      className="flex-1 border-none bg-transparent outline-none py-3.5 pr-4 font-sans text-[15px] text-auth-ink placeholder-auth-ink-soft"
                      placeholder="Search campaigns..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-[14.5px] cursor-pointer flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-md shadow-brand-orange/15"
                  >
                    <span className="text-base font-bold">+</span> POST NEW
                  </button>
                </div>

                {/* CAMPAIGN CARDS GRID */}
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
              </>
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
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-auth-surface border border-auth-line rounded-2xl w-full max-w-md p-7 shadow-2xl relative animate-[fadeIn_0.2s_ease-out] max-h-[90vh] overflow-y-auto">
            
            {/* Close */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-auth-line bg-auth-surface cursor-pointer flex items-center justify-center text-auth-ink-soft hover:text-auth-ink hover:bg-auth-line transition-colors"
            >
              &times;
            </button>

            <h3 className="text-xl font-bold mb-1 text-auth-ink">Launch New Campaign</h3>
            <p className="text-[13.5px] text-auth-ink-soft mb-6">Launch a new marketing campaign to attract creator bid submissions.</p>

            <form onSubmit={handleCreateCampaign} className="flex flex-col gap-4">
              
              {/* Campaign Title */}
              <div>
                <label className="text-[11.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Campaign Name</label>
                <div className="relative flex items-center bg-auth-surface border border-auth-line rounded-lg transition-colors focus-within:border-brand-orange">
                  <input 
                    type="text" 
                    required
                    className="w-full border-none bg-transparent outline-none py-3 px-3.5 font-sans text-[14.5px] text-auth-ink"
                    placeholder="e.g. Vitamin C Serum Pro"
                    value={newCampaign.name}
                    onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })}
                  />
                </div>
              </div>

              {/* Brand Name Input */}
              <div>
                <label className="text-[11.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Brand/Company Name</label>
                <div className="relative flex items-center bg-auth-surface border border-auth-line rounded-lg transition-colors focus-within:border-brand-orange">
                  <input 
                    type="text" 
                    required
                    className="w-full border-none bg-transparent outline-none py-3 px-3.5 font-sans text-[14.5px] text-auth-ink"
                    placeholder="e.g. Norde Athletics"
                    value={newCampaign.brandName}
                    onChange={(e) => setNewCampaign({ ...newCampaign, brandName: e.target.value })}
                  />
                </div>
              </div>

              {/* Campaign Description */}
              <div>
                <label className="text-[11.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Description</label>
                <textarea 
                  required
                  rows="3"
                  className="w-full bg-auth-surface border border-auth-line rounded-lg py-2.5 px-3.5 outline-none font-sans text-[14.5px] text-auth-ink focus:border-brand-orange resize-none"
                  placeholder="Tell creators about your product, requirements, and campaign targets..."
                  value={newCampaign.description}
                  onChange={(e) => setNewCampaign({ ...newCampaign, description: e.target.value })}
                ></textarea>
              </div>

              {/* Niche Dropdown */}
              <div>
                <label className="text-[11.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Niche Category</label>
                <select 
                  className="w-full bg-auth-surface border border-auth-line rounded-lg py-3 px-3.5 outline-none font-sans text-[14.5px] text-auth-ink focus:border-brand-orange"
                  value={newCampaign.niche}
                  onChange={(e) => setNewCampaign({ ...newCampaign, niche: e.target.value })}
                >
                  <option>Fitness</option>
                  <option>Beauty</option>
                  <option>Technology</option>
                  <option>Food & Beverage</option>
                  <option>Travel</option>
                  <option>Fashion</option>
                </select>
              </div>

              {/* Budget Range (Min & Max) */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Min Budget ($)</label>
                  <input 
                    type="number" 
                    required
                    min="1"
                    className="w-full bg-auth-surface border border-auth-line rounded-lg py-3 px-3.5 outline-none font-sans text-[14.5px] text-auth-ink focus:border-brand-orange"
                    placeholder="e.g. 800"
                    value={newCampaign.minBudget}
                    onChange={(e) => setNewCampaign({ ...newCampaign, minBudget: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-[11.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Max Budget ($)</label>
                  <input 
                    type="number" 
                    required
                    min="1"
                    className="w-full bg-auth-surface border border-auth-line rounded-lg py-3 px-3.5 outline-none font-sans text-[14.5px] text-auth-ink focus:border-brand-orange"
                    placeholder="e.g. 3500"
                    value={newCampaign.maxBudget}
                    onChange={(e) => setNewCampaign({ ...newCampaign, maxBudget: e.target.value })}
                  />
                </div>
              </div>

              {/* Days Left & Platforms */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Duration (Days)</label>
                  <input 
                    type="number" 
                    required
                    min="1"
                    className="w-full bg-auth-surface border border-auth-line rounded-lg py-3 px-3.5 outline-none font-sans text-[14.5px] text-auth-ink focus:border-brand-orange"
                    placeholder="e.g. 15"
                    value={newCampaign.daysLeft}
                    onChange={(e) => setNewCampaign({ ...newCampaign, daysLeft: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-[11.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Platforms</label>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {['Instagram', 'TikTok', 'YouTube', 'LinkedIn'].map(p => {
                      const isSelected = newCampaign.platforms.includes(p);
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => toggleFormPlatform(p)}
                          className={`px-2 py-1 rounded text-xs font-bold transition-all border cursor-pointer ${
                            isSelected 
                              ? 'bg-brand-orange text-white border-brand-orange shadow-sm' 
                              : 'bg-auth-surface text-auth-ink-soft border-auth-line hover:border-brand-orange'
                          }`}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Submit / Cancel buttons */}
              <div className="flex gap-3 mt-4">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 border border-auth-line rounded-lg text-auth-ink font-bold text-[14.5px] cursor-pointer hover:bg-auth-line transition-colors bg-transparent"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 py-3 bg-brand-orange text-white font-bold rounded-lg text-[14.5px] cursor-pointer border-none hover:bg-brand-orangeHover transition-colors"
                >
                  Launch Campaign
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
