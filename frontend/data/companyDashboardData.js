// Initial campaigns list matching the attachment details
export const INITIAL_CAMPAIGNS = [
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
export const INITIAL_ACTIVITIES = [
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
export const CHART_DATA = [
  { month: 'Feb', value: 3000 },
  { month: 'Mar', value: 5000 },
  { month: 'Apr', value: 4480 },
  { month: 'May', value: 8000 },
  { month: 'Jun', value: 7000 },
  { month: 'Jul', value: 9000 }
];

// Initial Received Bids list
export const INITIAL_BIDS = [
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
