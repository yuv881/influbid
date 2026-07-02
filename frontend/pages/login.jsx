import { useState } from 'react';
import { Zap, Building2, Users, ArrowRight, Lock, Mail, Check } from 'lucide-react';

const Login = () => {
  const [role, setRole] = useState('influencer'); // default role
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate authentication
    setTimeout(() => {
      localStorage.setItem('user_role', role);
      setLoading(false);
      // Force reload and redirect to home to refresh application state
      window.location.href = '/';
    }, 800);
  };

  return (
    <div className="min-h-screen w-full flex bg-slate-50 font-sans">
      {/* Left Column: Visual branding banner */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-slate-950 overflow-hidden select-none">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-indigo-900),transparent)] opacity-40"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl"></div>

        {/* Diagonal Line Decoration */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full text-indigo-500" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full flex flex-col justify-between p-16 text-white">
          {/* Logo Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
              <Zap className="text-white fill-white/20" size={20} />
            </div>
            <span className="text-2xl font-bold tracking-wide">Influbid</span>
          </div>

          {/* Copy and Features */}
          <div className="my-auto max-w-lg space-y-8">
            <div className="space-y-4">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                Next-Gen Collabs
              </span>
              <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight">
                The bidding market for brands & creators.
              </h1>
              <p className="text-gray-400 text-base leading-relaxed">
                Connect directly, negotiate fair pricing in real-time, and execute secure contracts seamlessly in one platform.
              </p>
            </div>

            {/* Bullet Highlights */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3.5">
                <div className="mt-1 w-5 h-5 rounded-md bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30 shrink-0">
                  <Check size={12} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Bidding System</h4>
                  <p className="text-sm text-gray-400">Creators pitch proposals directly to campaign briefs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-1 w-5 h-5 rounded-md bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30 shrink-0">
                  <Check size={12} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Role-Specific Workspace</h4>
                  <p className="text-sm text-gray-400">Customized experiences matching business and influencer workflows.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer stats */}
          <div className="flex items-center justify-between border-t border-slate-800 pt-8 text-gray-400 text-xs">
            <span>© {new Date().getFullYear()} Influbid Technologies Inc.</span>
            <span>Privacy Policy • Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Right Column: Form Container */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 xl:p-20">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Welcome Back</h2>
            <p className="text-sm text-gray-500">Sign in to your dashboard using your account.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Role Selection */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Select Your Role
              </label>
              <div className="grid grid-cols-2 gap-4">
                {/* Influencer Card */}
                <div
                  onClick={() => setRole('influencer')}
                  className={`relative flex flex-col p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                    role === 'influencer'
                      ? 'border-indigo-600 bg-indigo-50/50 ring-4 ring-indigo-500/10'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  {role === 'influencer' && (
                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                      <Check size={12} strokeWidth={3} />
                    </div>
                  )}
                  <Users className={`mb-3 ${role === 'influencer' ? 'text-indigo-600' : 'text-slate-400'}`} size={24} />
                  <span className="font-semibold text-gray-900 text-sm">Influencer</span>
                  <span className="text-xs text-gray-500 mt-1 leading-snug">Bid & collaborate on campaigns</span>
                </div>

                {/* Company Card */}
                <div
                  onClick={() => setRole('company')}
                  className={`relative flex flex-col p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                    role === 'company'
                      ? 'border-indigo-600 bg-indigo-50/50 ring-4 ring-indigo-500/10'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  {role === 'company' && (
                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                      <Check size={12} strokeWidth={3} />
                    </div>
                  )}
                  <Building2 className={`mb-3 ${role === 'company' ? 'text-indigo-600' : 'text-slate-400'}`} size={24} />
                  <span className="font-semibold text-gray-900 text-sm">Company</span>
                  <span className="text-xs text-gray-500 mt-1 leading-snug">Post briefs & hire talent</span>
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail size={16} />
                </span>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 placeholder-slate-400 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Password
                </label>
                <a href="#" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock size={16} />
                </span>
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 placeholder-slate-400 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            {/* Demo Helpers Info */}
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
              <p className="text-xs text-gray-500 leading-normal">
                💡 <span className="font-semibold text-slate-700">Demo Login:</span> Enter any email/password and select your workspace to enter the application.
              </p>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer shadow-md shadow-indigo-600/10"
            >
              {loading ? (
                <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
              ) : (
                <>
                  <span>Sign In as {role === 'company' ? 'Company' : 'Influencer'}</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;