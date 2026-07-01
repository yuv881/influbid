import { useState } from 'react';
import {
  DollarSign,
  Briefcase,
  Users,
  TrendingUp,
  Send,
  Check,
  X,
  Plus,
  Clock,
  FileText,
  Percent,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const Dashboard = () => {
  const userRole = localStorage.getItem('user_role') || 'influencer';

  // ================= COMPANY DASHBOARD STATES =================
  const [companyCampaigns] = useState([
    { id: 1, title: 'Summer Apparel Launch', budget: '$12,000', bidsCount: 14, status: 'Active', platform: 'Instagram Reels' },
    { id: 2, title: 'Wireless Earbuds Review', budget: '$4,500', bidsCount: 8, status: 'Active', platform: 'YouTube Video' },
    { id: 3, title: 'Vegan Protein Shake Promo', budget: '$8,000', bidsCount: 6, status: 'Draft', platform: 'TikTok Video' },
  ]);

  const [influencerBids, setInfluencerBids] = useState([
    { id: 1, name: 'Sarah Jenkins', handle: '@sarahj_style', followers: '124K', engagement: '5.2%', campaign: 'Summer Apparel Launch', bidAmount: '$1,200', status: 'Pending', avatar: 'SJ' },
    { id: 2, name: 'Marcus Chen', handle: '@marcustech', followers: '89K', engagement: '6.8%', campaign: 'Wireless Earbuds Review', bidAmount: '$950', status: 'Pending', avatar: 'MC' },
    { id: 3, name: 'Jessica Vance', handle: '@jess_travels', followers: '210K', engagement: '4.1%', campaign: 'Summer Apparel Launch', bidAmount: '$2,500', status: 'Pending', avatar: 'JV' },
  ]);

  // ================= INFLUENCER DASHBOARD STATES =================
  const [availableCampaigns, setAvailableCampaigns] = useState([
    { id: 101, brand: 'FitLife Co.', title: 'Activewear Reel Promo', budget: 1500, deadline: 'July 15', niche: 'Fitness', platform: 'Instagram' },
    { id: 102, brand: 'Aura Cosmetics', title: 'Summer Gloss Review', budget: 800, deadline: 'July 18', niche: 'Beauty', platform: 'TikTok' },
    { id: 103, brand: 'ByteGear', title: 'Mechanical Keyboard Review', budget: 2200, deadline: 'July 25', niche: 'Tech', platform: 'YouTube' },
    { id: 104, brand: 'EcoWrap', title: 'Zero Waste Kitchen Kits', budget: 650, deadline: 'July 30', niche: 'Lifestyle', platform: 'Pinterest' }
  ]);

  const [myBids, setMyBids] = useState([
    { id: 201, brand: 'NaturePure', campaign: 'Organic Juice Review', bidAmount: '$600', status: 'Approved', platform: 'Instagram Stories' },
    { id: 202, brand: 'ZenSpace', campaign: 'Ergonomic Desk Pitch', bidAmount: '$1,800', status: 'Pending', platform: 'YouTube Short' },
  ]);

  // Modal State for Influencer Bidding
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [bidAmount, setBidAmount] = useState('');
  const [pitch, setPitch] = useState('');

  // Handle Company action
  const handleBidStatus = (bidId, newStatus) => {
    setInfluencerBids(prev =>
      prev.map(bid => (bid.id === bidId ? { ...bid, status: newStatus } : bid))
    );
  };

  // Handle Influencer submit bid
  const handleSubmitBid = (e) => {
    e.preventDefault();
    if (!selectedCampaign || !bidAmount) return;

    const newBidEntry = {
      id: Date.now(),
      brand: selectedCampaign.brand,
      campaign: selectedCampaign.title,
      bidAmount: `$${parseFloat(bidAmount).toLocaleString()}`,
      status: 'Pending',
      platform: selectedCampaign.platform
    };

    setMyBids([newBidEntry, ...myBids]);
    // Remove from available list for demo simulation
    setAvailableCampaigns(prev => prev.filter(c => c.id !== selectedCampaign.id));
    setSelectedCampaign(null);
    setBidAmount('');
    setPitch('');
  };

  // Render Company Dashboard
  if (userRole === 'company') {
    return (
      <div className="space-y-8 animate-fadeIn">
        {/* KPI Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Allocation</span>
              <h3 className="text-3xl font-extrabold text-gray-900">$24,500</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <DollarSign size={22} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Campaigns</span>
              <h3 className="text-3xl font-extrabold text-gray-900">2</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600">
              <Briefcase size={22} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Bids Received</span>
              <h3 className="text-3xl font-extrabold text-gray-900">{influencerBids.filter(b => b.status === 'Pending').length}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Users size={22} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Avg. Engagement</span>
              <h3 className="text-3xl font-extrabold text-gray-900">5.3%</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
              <TrendingUp size={22} />
            </div>
          </div>
        </div>

        {/* Dashboard Grid split: Left (Campaigns), Right (Review Bids) */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Campaigns Lists */}
          <div className="xl:col-span-1 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-gray-900">My Campaigns</h2>
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer">
                <Plus size={14} />
                <span>Create Brief</span>
              </button>
            </div>

            <div className="space-y-4">
              {companyCampaigns.map((c) => (
                <div key={c.id} className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs space-y-4 hover:border-indigo-100 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900 text-base leading-snug">{c.title}</h4>
                      <span className="text-xs text-gray-400 font-medium block mt-1">{c.platform}</span>
                    </div>
                    <span className={`px-2 py-0.5 text-2xs font-extrabold rounded-md uppercase tracking-wider ${
                      c.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}>
                      {c.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-50">
                    <div>
                      <span>Budget:</span>
                      <span className="font-bold text-slate-900 ml-1">{c.budget}</span>
                    </div>
                    <div>
                      <span>Bids:</span>
                      <span className="font-bold text-indigo-600 ml-1">{c.bidsCount} pitches</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review Bids Section */}
          <div className="xl:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-gray-900">Influencer Bids to Review</h2>
              <span className="text-xs text-gray-500 font-medium">Review proposals and finalize hires</span>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden">
              <div className="divide-y divide-gray-100">
                {influencerBids.length === 0 ? (
                  <div className="p-12 text-center text-gray-400">
                    No applications submitted yet.
                  </div>
                ) : (
                  influencerBids.map((bid) => (
                    <div key={bid.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-full bg-linear-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white font-extrabold shadow-sm">
                          {bid.avatar}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-gray-900 text-base">{bid.name}</h4>
                            <span className="text-xs text-gray-400">{bid.handle}</span>
                          </div>
                          <p className="text-xs text-gray-500">
                            Applied for <span className="font-semibold text-gray-700">{bid.campaign}</span>
                          </p>
                          <div className="flex items-center gap-3 text-2xs font-semibold text-gray-400 pt-1">
                            <span>Followers: <strong className="text-slate-700">{bid.followers}</strong></span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span>Engagement: <strong className="text-indigo-600">{bid.engagement}</strong></span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0">
                        <div className="text-left md:text-right">
                          <span className="text-2xs text-gray-400 font-bold uppercase tracking-wider block">Proposal Bid</span>
                          <span className="text-lg font-black text-slate-900">{bid.bidAmount}</span>
                        </div>

                        <div>
                          {bid.status === 'Pending' ? (
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleBidStatus(bid.id, 'Approved')}
                                className="w-9 h-9 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600 flex items-center justify-center transition-colors cursor-pointer"
                                title="Approve Bid"
                              >
                                <Check size={18} strokeWidth={2.5} />
                              </button>
                              <button
                                onClick={() => handleBidStatus(bid.id, 'Rejected')}
                                className="w-9 h-9 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 flex items-center justify-center transition-colors cursor-pointer"
                                title="Reject Bid"
                              >
                                <X size={18} strokeWidth={2.5} />
                              </button>
                            </div>
                          ) : (
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                              bid.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'
                            }`}>
                              {bid.status === 'Approved' ? <CheckCircle2 size={12} /> : null}
                              {bid.status}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Influencer Dashboard
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* KPI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Est. Earnings</span>
            <h3 className="text-3xl font-extrabold text-gray-900">$8,450</h3>
          </div>
          <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
            <DollarSign size={22} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Collabs</span>
            <h3 className="text-3xl font-extrabold text-gray-900">{myBids.filter(b => b.status === 'Approved').length + 2}</h3>
          </div>
          <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600">
            <Briefcase size={22} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">My Active Bids</span>
            <h3 className="text-3xl font-extrabold text-gray-900">{myBids.filter(b => b.status === 'Pending').length}</h3>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
            <FileText size={22} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Engagement Rate</span>
            <h3 className="text-3xl font-extrabold text-gray-900">6.2%</h3>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
            <Percent size={22} />
          </div>
        </div>
      </div>

      {/* Main Grid: Left (Explore Marketplace), Right (My Applications Status) */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Marketplace */}
        <div className="xl:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-gray-900">Campaign Marketplace</h2>
            <span className="text-xs text-gray-500 font-medium">Submit proposals & bids to brand briefs</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableCampaigns.map((c) => (
              <div key={c.id} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col justify-between space-y-5 hover:border-indigo-200 hover:shadow-md hover:shadow-indigo-500/5 transition-all">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-1 text-3xs font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-md uppercase tracking-wider">
                      {c.niche}
                    </span>
                    <span className="text-2xs text-gray-400 font-medium flex items-center gap-1">
                      <Clock size={11} /> Deadline: {c.deadline}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-extrabold text-gray-900 text-base leading-snug">{c.title}</h3>
                    <p className="text-xs text-gray-400">posted by <span className="font-semibold text-gray-600">{c.brand}</span></p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-3xs font-bold uppercase">{c.platform}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div>
                    <span className="text-3xs text-gray-400 block font-bold uppercase tracking-wider">Target Budget</span>
                    <span className="text-base font-black text-slate-900">${c.budget.toLocaleString()}</span>
                  </div>

                  <button
                    onClick={() => setSelectedCampaign(c)}
                    className="flex items-center gap-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <span>Bid Now</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Proposals */}
        <div className="xl:col-span-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-gray-900">My Applications</h2>
            <span className="text-xs text-gray-500 font-medium">Bids in review</span>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden">
            <div className="divide-y divide-gray-100">
              {myBids.map((bid) => (
                <div key={bid.id} className="p-5 space-y-3 hover:bg-slate-50/50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm leading-snug">{bid.campaign}</h4>
                      <span className="text-3xs text-gray-400 font-semibold block mt-0.5">Brand: {bid.brand} • {bid.platform}</span>
                    </div>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-3xs font-extrabold rounded-md uppercase tracking-wider ${
                      bid.status === 'Approved'
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                        : 'bg-amber-50 text-amber-600 border border-amber-100'
                    }`}>
                      {bid.status === 'Approved' ? <CheckCircle2 size={10} /> : <Clock size={10} />}
                      {bid.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                    <span>Your Bid:</span>
                    <span className="font-black text-slate-900">{bid.bidAmount}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bid Modal Overlay */}
      {selectedCampaign && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden border border-slate-100 animate-zoomIn">
            {/* Modal Header */}
            <div className="p-6 bg-slate-950 text-white flex items-center justify-between">
              <div>
                <span className="text-3xs font-bold uppercase tracking-wider text-indigo-400">Submit Proposal Brief</span>
                <h3 className="text-lg font-black mt-1 leading-snug">{selectedCampaign.title}</h3>
                <p className="text-2xs text-gray-400 mt-0.5">Requesting: {selectedCampaign.brand} • Platform: {selectedCampaign.platform}</p>
              </div>
              <button
                onClick={() => setSelectedCampaign(null)}
                className="text-gray-400 hover:text-white p-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmitBid} className="p-6 space-y-5">
              <div className="space-y-1">
                <label className="text-2xs font-bold text-gray-400 uppercase tracking-wider">
                  Pitch Proposal
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Explain why your audience is the perfect match for this campaign..."
                  value={pitch}
                  onChange={(e) => setPitch(e.target.value)}
                  className="block w-full px-4 py-3 rounded-xl border border-slate-200 placeholder-slate-400 text-slate-900 text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-2xs font-bold text-gray-400 uppercase tracking-wider">
                  Bid Amount ($)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-xs font-semibold">
                    $
                  </span>
                  <input
                    type="number"
                    required
                    placeholder="Enter bid amount (e.g. 1200)"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    className="block w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-200 placeholder-slate-400 text-slate-900 text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>
                <span className="text-3xs text-gray-400 mt-1 block">Brand budget range estimate: ${selectedCampaign.budget.toLocaleString()}</span>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-all shadow-md shadow-indigo-600/10 cursor-pointer"
              >
                <Send size={14} />
                <span>Submit Proposal</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;