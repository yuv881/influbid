import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  Zap, 
  Briefcase, 
  Sparkles, 
  Fingerprint, 
  BarChart3, 
  Wallet, 
  Plus, 
  ArrowRight, 
  ArrowUpRight, 
  Check,
  ChevronDown
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem('user_role');
    if (role) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleCtaClick = () => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased font-sans selection:bg-indigo-500 selection:text-white overflow-y-auto" style={{ height: "100vh", overflowY: "auto" }}>
      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer animate-fadeIn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20">
              <Zap className="w-5 h-5 fill-white/20" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">InfluBid.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How it Works</a>
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#marketplace" className="hover:text-slate-900 transition-colors">Marketplace</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleCtaClick} 
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              {isLoggedIn ? 'Dashboard' : 'Sign In'}
            </button>
            <button 
              onClick={handleCtaClick} 
              className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-indigo-600 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/20 active:scale-95 cursor-pointer"
            >
              {isLoggedIn ? 'Go to Dashboard' : 'Get Started'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        {/* Minimal subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center z-10">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            The New Standard
          </div>
          <h1 className="reveal delay-100 text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-slate-900">
            Meaningful Connections.<br className="hidden md:block" />
            <span className="text-slate-400">Zero Friction.</span>
          </h1>
          <p className="reveal delay-200 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            A minimalist, highly-curated marketplace connecting visionary brands with world-class creators through a seamless bidding experience.
          </p>
          <div className="reveal delay-300 flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleCtaClick} 
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-indigo-600 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isLoggedIn ? 'Open Workspace' : 'Start a Campaign'}</span> 
              <ArrowRight className="w-4 h-4" />
            </button>
            <a 
              href="#marketplace"
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center cursor-pointer"
            >
              Explore Creators
            </a>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-slate-200/50 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Trusted By</h2>
          <div className="flex items-center gap-12 text-slate-400 font-bold text-xl tracking-tighter">
            <span>Vogue.</span>
            <span>TechCrunch.</span>
            <span>Dribbble.</span>
            <span>Stripe.</span>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal mb-20 md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">Designed for clarity. Built for speed.</h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed">We stripped away the noise so you can focus on what matters: finding the perfect partnership and producing great content.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* For Brands */}
            <div className="reveal delay-100 bg-white p-10 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 group">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-2xl font-bold tracking-tight text-slate-955">For Brands</h3>
                <div className="w-12 h-12 bg-slate-50 text-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>
              <div className="space-y-10">
                <div className="relative pl-8 border-l border-slate-200">
                  <div className="absolute w-3 h-3 bg-slate-900 rounded-full -left-[6.5px] top-1.5 ring-4 ring-white"></div>
                  <h4 className="font-semibold text-lg mb-2 text-slate-955">1. Draft</h4>
                  <p className="text-slate-500 font-light">Outline your vision, budget, and requirements in our distraction-free editor.</p>
                </div>
                <div className="relative pl-8 border-l border-slate-200">
                  <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-[6.5px] top-1.5 ring-4 ring-white"></div>
                  <h4 className="font-semibold text-lg mb-2 text-slate-955">2. Receive Bids</h4>
                  <p className="text-slate-500 font-light">Curated creators submit tailored proposals directly to your dashboard.</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-[6.5px] top-1.5 ring-4 ring-white"></div>
                  <h4 className="font-semibold text-lg mb-2 text-slate-955">3. Collaborate</h4>
                  <p className="text-slate-500 font-light">Approve, communicate, and track deliverables effortlessly.</p>
                </div>
              </div>
            </div>

            {/* For Creators */}
            <div className="reveal delay-200 bg-slate-900 text-white p-10 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-800 hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -z-10 group-hover:bg-indigo-500/30 transition-all duration-700"></div>
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-2xl font-bold tracking-tight">For Creators</h3>
                <div className="w-12 h-12 bg-slate-800 text-white rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-colors duration-500">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
              <div className="space-y-10">
                <div className="relative pl-8 border-l border-slate-700">
                  <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-1.5 ring-4 ring-slate-900"></div>
                  <h4 className="font-semibold text-lg mb-2">1. Curate Profile</h4>
                  <p className="text-slate-400 font-light">Connect your socials and showcase your aesthetic with a premium portfolio.</p>
                </div>
                <div className="relative pl-8 border-l border-slate-700">
                  <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[6.5px] top-1.5 ring-4 ring-slate-900"></div>
                  <h4 className="font-semibold text-lg mb-2">2. Discover</h4>
                  <p className="text-slate-400 font-light">Browse exclusive campaigns from brands that align with your vibe.</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[6.5px] top-1.5 ring-4 ring-slate-900"></div>
                  <h4 className="font-semibold text-lg mb-2">3. Pitch & Earn</h4>
                  <p className="text-slate-400 font-light">Submit custom bids and get paid securely upon completion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="reveal text-4xl font-bold tracking-tight mb-16 text-center text-slate-900">Uncompromising Quality.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="reveal delay-100 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Fingerprint className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-3 text-slate-955 font-medium">Verified Identity</h3>
              <p className="text-slate-500 font-light text-sm">Every brand and creator is manually vetted to ensure a high-trust environment.</p>
            </div>
            {/* Feature 2 */}
            <div className="reveal delay-200 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-3 text-slate-955 font-medium">Real Analytics</h3>
              <p className="text-slate-500 font-light text-sm">Direct API integrations provide un-manipulated reach and engagement metrics.</p>
            </div>
            {/* Feature 3 */}
            <div className="reveal delay-300 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Wallet className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-3 text-slate-955 font-medium">Secure Escrow</h3>
              <p className="text-slate-500 font-light text-sm">Funds are held safely during collaboration and released upon milestone approval.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section id="marketplace" className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="reveal md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-widest mb-6">
                Live Feed
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Opportunities, curated beautifully.</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                The marketplace is designed to feel like a premium editorial. Filter seamlessly, read detailed briefs, and apply with a single click.
              </p>
              <button 
                onClick={handleCtaClick} 
                className="px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-200 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>View Marketplace</span> 
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="reveal delay-200 md:w-1/2 w-full">
              {/* Modern UI Card Mockup */}
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 shadow-2xl hover:border-slate-500 transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                      A
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Aura Cosmetics</h4>
                      <p className="text-slate-400 text-sm">Beauty & Lifestyle</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium rounded-full">Accepting Bids</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">Summer Collection Launch: TikTok Series</h3>
                <p className="text-slate-400 font-light mb-8 line-clamp-2">We are looking for 5 creative influencers to produce high-quality, aesthetic TikTok videos featuring our new summer glow collection.</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Budget</p>
                    <p className="font-semibold">$2,500 - $5,000</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Format</p>
                    <p className="font-semibold">3x Videos</p>
                  </div>
                </div>
                
                <button 
                  onClick={handleCtaClick} 
                  className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-semibold hover:bg-indigo-500 active:scale-99 transition-all cursor-pointer shadow-lg shadow-indigo-600/20"
                >
                  Submit Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="reveal text-3xl font-bold tracking-tight text-center mb-16 text-slate-900">Clear answers.</h2>
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div 
              onClick={() => toggleFaq(0)} 
              className="reveal delay-100 bg-white border border-slate-200 rounded-2xl cursor-pointer overflow-hidden transition-all hover:border-slate-300"
            >
              <div className="p-6 flex justify-between items-center select-none">
                <h3 className="font-semibold text-slate-900">How does the bidding work?</h3>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500">
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openFaq === 0 ? 'rotate-180 text-indigo-600' : ''}`} />
                </div>
              </div>
              <div className={`px-6 pb-6 text-slate-500 font-light text-sm leading-relaxed transition-all duration-300 ${openFaq === 0 ? 'block' : 'hidden'}`}>
                Brands set a budget range, and verified creators submit specific proposals outlining their deliverables and exact price. The brand then selects the best fit.
              </div>
            </div>
            {/* FAQ Item 2 */}
            <div 
              onClick={() => toggleFaq(1)} 
              className="reveal delay-200 bg-white border border-slate-200 rounded-2xl cursor-pointer overflow-hidden transition-all hover:border-slate-300"
            >
              <div className="p-6 flex justify-between items-center select-none">
                <h3 className="font-semibold text-slate-900">Is there a fee to join?</h3>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500">
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openFaq === 1 ? 'rotate-180 text-indigo-600' : ''}`} />
                </div>
              </div>
              <div className={`px-6 pb-6 text-slate-500 font-light text-sm leading-relaxed transition-all duration-305 transition-all ${openFaq === 1 ? 'block' : 'hidden'}`}>
                Creating a profile is completely free. We take a small, transparent platform fee only when a successful collaboration is completed and paid out.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="reveal text-5xl font-bold tracking-tighter mb-8 text-slate-900">Ready for better partnerships?</h2>
          <p className="reveal delay-100 text-xl text-slate-500 font-light mb-12 max-w-2xl mx-auto">
            Join the platform that respects your time and elevates your brand.
          </p>
          <div className="reveal delay-200 flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleCtaClick} 
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/10 cursor-pointer"
            >
              {isLoggedIn ? 'Go to Dashboard' : 'Create Brand Account'}
            </button>
            <button 
              onClick={handleCtaClick} 
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {isLoggedIn ? 'Open App' : 'Apply as Creator'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-slate-50 text-center text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <Zap className="w-4 h-4 text-indigo-600 fill-indigo-600/10" /> InfluBid.
          </div>
          <p>© {new Date().getFullYear()} InfluBid. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
