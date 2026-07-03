import { useState } from 'react';
import { Zap, Mail, Lock, Eye, EyeOff, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-brand-dark text-gray-900 dark:text-white font-sans selection:bg-brand-orange/30">

      {/* LEFT PANEL */}
      <div className="w-full md:w-[45%] flex flex-col justify-around p-6 sm:p-12 md:p-16 relative border-b md:border-b-0 md:border-r border-brand-border/40 overflow-hidden dark:bg-[#0a0a0a]">
        {/* Subtle grid/dot background */}
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>

        {/* Top Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="bg-brand-orange text-white p-2 rounded-xl flex items-center justify-center shadow-lg shadow-brand-orange/20">
            <Zap className="h-5 w-5 fill-current" />
          </div>
          <span className="font-heading text-xl font-black tracking-widest text-gray-900 dark:text-white">
            INFLUBLAST
          </span>
        </div>

        {/* Middle Content */}
        <div className="relative z-10 my-16 md:my-0">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[1.1] mb-6 text-gray-900 dark:text-white">
            Welcome<br />Back.
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-light max-w-sm leading-relaxed">
            Sign in to manage your campaigns or discover new brand deals.
          </p>
        </div>

        {/* Bottom Stats */}
        <div className="relative z-10 flex flex-col gap-4 font-mono text-sm tracking-wide">
          <div className="flex items-baseline gap-3">
            <span className="text-brand-orange font-bold text-xl">2,400+</span>
            <span className="text-gray-500 uppercase text-xs">Active Campaigns</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-brand-orange font-bold text-xl">$4.2M</span>
            <span className="text-gray-500 uppercase text-xs">Paid to Creators</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-brand-orange font-bold text-xl">18K+</span>
            <span className="text-gray-500 uppercase text-xs">Registered Creators</span>
          </div>
        </div>
      </div>


      {/* RIGHT PANEL */}
      <div className="w-full md:w-[55%] flex flex-col justify-center items-center p-6 sm:p-12 md:p-16 lg:p-24 bg-brand-dark dark:bg-[#151515]">
        <div className="w-full max-w-md flex flex-col relative z-10">

          <h2 className="font-heading text-4xl font-black tracking-widest uppercase mb-2 text-gray-900 dark:text-white">
            SIGN IN
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-10">
            No account? <a href="#create" className="text-brand-orange hover:text-brand-orangeHover transition-colors">Create one free</a>
          </p>


          {/* Form */}
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-500 font-heading tracking-widest uppercase text-xs font-bold pl-1">
                Email
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-brand-orange transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#2A2A2A] rounded-xl py-4 pl-12 pr-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all font-medium"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center pl-1 pr-1">
                <label className="text-gray-500 font-heading tracking-widest uppercase text-xs font-bold">
                  Password
                </label>
                <a href="#forgot" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs font-medium transition-colors">
                  Forgot?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-brand-orange transition-colors">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#2A2A2A] rounded-xl py-4 pl-12 pr-12 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all font-medium tracking-widest"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 bg-brand-orange hover:bg-brand-orangeHover text-white py-4 rounded-xl font-heading text-sm font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-orange/20"
            >
              <Zap className="h-5 w-5 fill-current" />
              Sign In
            </button>
          </form>

          {/* Back to Home */}
          <div className="mt-8">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-mono tracking-tight group">
              <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
