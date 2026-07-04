import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaBolt, FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash, FaChevronLeft, FaArrowRight, FaBuilding, FaLink as LinkIcon } from 'react-icons/fa6';
import { FaInstagram, FaYoutube, FaTiktok, FaXTwitter, FaTwitch } from 'react-icons/fa6';
import { Link } from 'react-router';

const PLATFORMS = [
  { id: 'Instagram', icon: FaInstagram, label: 'Instagram' },
  { id: 'YouTube', icon: FaYoutube, label: 'YouTube' },
  { id: 'TikTok', icon: FaTiktok, label: 'TikTok' },
  { id: 'Twitter', icon: FaXTwitter, label: 'Twitter/X' },
  { id: 'Twitch', icon: FaTwitch, label: 'Twitch' },
];

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedPlatforms, setSelectedPlatforms] = useState(['Instagram']);

  const { register, handleSubmit, watch, setValue, trigger, formState: { errors } } = useForm({
    defaultValues: {
      type: 'Company',
      urls: { Instagram: '' }
    }
  });

  const accountType = watch('type');

  const handleNext = async () => {
    // Validate step 1 fields before proceeding
    const isValid = await trigger(['name', 'userName', 'email', 'phone', 'password']);
    if (isValid) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const onSubmit = (data) => {
    if (data.type === 'Influencer' && selectedPlatforms.length === 0) {
      alert("Please select at least one platform.");
      return;
    }

    // Prepare payload matching the backend User model schema
    const payload = {
      userName: data.userName,
      name: data.name,
      email: data.email,
      phone: Number(data.phone),
      password: data.password,
      type: data.type,
      url: data.type === 'Influencer' 
        ? selectedPlatforms.map(platform => ({ platform, url: data.urls[platform] }))
        : [{ platform: 'Website', url: data.companyDetails }]
    };

    console.log("Registration Payload:", payload);
    alert("Registration details submitted! (Check console for payload)");
    // TODO: Hook this up to the backend route
  };

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
            <FaBolt className="h-5 w-5 fill-current" />
          </div>
          <span className="font-heading text-xl font-black tracking-widest text-gray-900 dark:text-white">
            INFLUBLAST
          </span>
        </div>

        {/* Middle Content */}
        <div className="relative z-10 my-16 md:my-0">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[1.1] mb-6 text-gray-900 dark:text-white">
            Join the<br />Blast.
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-light max-w-sm leading-relaxed">
            Create an account to scale your reach or find the perfect creators for your next campaign.
          </p>
        </div>

        {/* Bottom Stats */}
        <div className="relative z-10 flex flex-col gap-4 font-mono text-sm tracking-wide hidden md:flex">
          <div className="flex items-baseline gap-3">
            <span className="text-brand-orange font-bold text-xl">2,400+</span>
            <span className="text-gray-500 uppercase text-xs">Active Campaigns</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-brand-orange font-bold text-xl">$4.2M</span>
            <span className="text-gray-500 uppercase text-xs">Paid to Creators</span>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full md:w-[55%] flex flex-col justify-center items-center p-6 sm:p-12 md:p-16 lg:p-24 bg-brand-dark dark:bg-[#151515] overflow-y-auto">
        <div className="w-full max-w-md flex flex-col relative z-10">

          <div className="flex items-center justify-between mb-2">
            <h2 className="font-heading text-4xl font-black tracking-widest uppercase text-gray-900 dark:text-white">
              CREATE ACCOUNT
            </h2>
            <span className="font-mono text-sm text-brand-orange font-bold">Step {step}/2</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-10">
            Already have an account? <Link to="/login" className="text-brand-orange hover:text-brand-orangeHover transition-colors">Sign in here</Link>
          </p>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>

            <div className={step === 1 ? "flex flex-col gap-6 animate-fadeIn" : "hidden"}>
              {/* Account Type Selection */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 font-heading tracking-widest uppercase text-xs font-bold pl-1">
                  I am a...
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setValue('type', 'Company')}
                    className={`py-3 px-4 rounded-xl font-heading text-sm font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 border ${accountType === 'Company' ? 'bg-brand-orange text-white border-brand-orange shadow-lg shadow-brand-orange/20' : 'bg-white dark:bg-[#121212] text-gray-500 border-gray-200 dark:border-[#2A2A2A] hover:border-brand-orange/50'}`}
                  >
                    <FaBuilding className="h-4 w-4" />
                    Company
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue('type', 'Influencer')}
                    className={`py-3 px-4 rounded-xl font-heading text-sm font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 border ${accountType === 'Influencer' ? 'bg-brand-orange text-white border-brand-orange shadow-lg shadow-brand-orange/20' : 'bg-white dark:bg-[#121212] text-gray-500 border-gray-200 dark:border-[#2A2A2A] hover:border-brand-orange/50'}`}
                  >
                    <FaBolt className="h-4 w-4" />
                    Influencer
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 font-heading tracking-widest uppercase text-xs font-bold pl-1">Name</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-brand-orange transition-colors">
                      <FaUser className="h-4 w-4" />
                    </div>
                    <input type="text" placeholder="John Doe"
                      {...register("name", { required: "Name is required" })}
                      className="w-full bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#2A2A2A] rounded-xl py-3 pl-11 pr-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all font-medium" />
                  </div>
                  {errors.name && <span className="text-red-500 text-xs pl-1 font-medium">{errors.name.message}</span>}
                </div>

                {/* Username */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 font-heading tracking-widest uppercase text-xs font-bold pl-1">Username</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-brand-orange transition-colors">
                      <span className="font-bold font-mono">@</span>
                    </div>
                    <input type="text" placeholder="johndoe123"
                      {...register("userName", { required: "Username is required" })}
                      className="w-full bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#2A2A2A] rounded-xl py-3 pl-11 pr-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all font-medium" />
                  </div>
                  {errors.userName && <span className="text-red-500 text-xs pl-1 font-medium">{errors.userName.message}</span>}
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 font-heading tracking-widest uppercase text-xs font-bold pl-1">Email</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-brand-orange transition-colors">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <input type="email" placeholder="you@example.com"
                    {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
                    className="w-full bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#2A2A2A] rounded-xl py-4 pl-12 pr-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all font-medium" />
                </div>
                {errors.email && <span className="text-red-500 text-xs pl-1 font-medium">{errors.email.message}</span>}
              </div>

              {/* Phone Field */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 font-heading tracking-widest uppercase text-xs font-bold pl-1">Phone</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-brand-orange transition-colors">
                    <FaPhone className="h-5 w-5" />
                  </div>
                  <input type="tel" placeholder="1234567890"
                    {...register("phone", { required: "Phone number is required", minLength: { value: 10, message: "Must be at least 10 digits" } })}
                    className="w-full bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#2A2A2A] rounded-xl py-4 pl-12 pr-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all font-medium" />
                </div>
                {errors.phone && <span className="text-red-500 text-xs pl-1 font-medium">{errors.phone.message}</span>}
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 font-heading tracking-widest uppercase text-xs font-bold pl-1">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-brand-orange transition-colors">
                    <FaLock className="h-5 w-5" />
                  </div>
                  <input type={showPassword ? "text" : "password"} placeholder="••••••••"
                    {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                    className="w-full bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#2A2A2A] rounded-xl py-4 pl-12 pr-12 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all font-medium tracking-widest" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors focus:outline-none">
                    {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && <span className="text-red-500 text-xs pl-1 font-medium">{errors.password.message}</span>}
              </div>

              {/* Next Button */}
              <button type="button" onClick={handleNext}
                className="mt-4 bg-brand-orange hover:bg-brand-orangeHover text-white py-4 rounded-xl font-heading text-sm font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-orange/20">
                Next Step
                <FaArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className={step === 2 ? "animate-fadeIn flex flex-col gap-6" : "hidden"}>
              <div className="p-4 bg-brand-orange/10 border border-brand-orange/20 rounded-xl mb-4">
                <p className="text-brand-orange text-sm font-medium">
                  Almost there! We just need a little more info about your {accountType === 'Company' ? 'company' : 'influence'}.
                </p>
              </div>

              {accountType === 'Company' ? (
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 font-heading tracking-widest uppercase text-xs font-bold pl-1">Company Website URL</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-brand-orange transition-colors">
                      <LinkIcon className="h-5 w-5" />
                    </div>
                    <input type="url" placeholder="https://yourcompany.com"
                      {...register("companyDetails", { required: accountType === 'Company' ? "Company Website is required" : false })}
                      className="w-full bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#2A2A2A] rounded-xl py-4 pl-12 pr-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all font-medium" />
                  </div>
                  {errors.companyDetails && <span className="text-red-500 text-xs pl-1 font-medium">{errors.companyDetails.message}</span>}
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-3">
                    <label className="text-gray-500 font-heading tracking-widest uppercase text-xs font-bold pl-1">Platforms</label>
                    <div className="flex flex-wrap gap-2">
                      {PLATFORMS.map((p) => {
                        const isSelected = selectedPlatforms.includes(p.id);
                        const Icon = p.icon;
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => {
                              if (isSelected) {
                                setSelectedPlatforms(selectedPlatforms.filter(id => id !== p.id));
                              } else {
                                setSelectedPlatforms([...selectedPlatforms, p.id]);
                              }
                            }}
                            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium border transition-all ${isSelected ? 'bg-brand-orange text-white border-brand-orange shadow-md' : 'bg-white dark:bg-[#121212] text-gray-500 border-gray-200 dark:border-[#2A2A2A] hover:border-brand-orange/50'}`}
                          >
                            <Icon className="h-4 w-4" />
                            {p.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {selectedPlatforms.length > 0 ? (
                    <div className="flex flex-col gap-4 mt-2">
                      <label className="text-gray-500 font-heading tracking-widest uppercase text-xs font-bold pl-1">Profile URLs</label>
                      {selectedPlatforms.map(platformId => {
                        const platform = PLATFORMS.find(p => p.id === platformId);
                        const Icon = platform.icon;
                        return (
                          <div key={platformId} className="flex flex-col gap-1 relative animate-fadeIn">
                            <div className="relative group">
                              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-brand-orange transition-colors">
                                <Icon className="h-5 w-5" />
                              </div>
                              <input type="url" placeholder={`https://${platform.label.toLowerCase().replace(/[^a-z]/g, '')}.com/yourhandle`}
                                {...register(`urls.${platformId}`, { required: `${platform.label} URL is required` })}
                                className="w-full bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#2A2A2A] rounded-xl py-4 pl-12 pr-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all font-medium" />
                            </div>
                            {errors?.urls?.[platformId] && <span className="text-red-500 text-xs pl-1 font-medium">{errors.urls[platformId].message}</span>}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-red-500 text-xs font-medium pl-1">Please select at least one platform.</p>
                  )}
                </>
              )}

              <div className="flex gap-4 mt-4">
                <button type="button" onClick={handleBack}
                  className="w-1/3 bg-transparent hover:bg-gray-100 dark:hover:bg-[#2A2A2A] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-[#2A2A2A] py-4 rounded-xl font-heading text-sm font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2">
                  <FaChevronLeft className="h-5 w-5" />
                  Back
                </button>
                <button type="submit"
                  className="w-2/3 bg-brand-orange hover:bg-brand-orangeHover text-white py-4 rounded-xl font-heading text-sm font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-orange/20">
                  <FaBolt className="h-5 w-5 fill-current" />
                  Complete Setup
                </button>
              </div>
            </div>
          </form>

          {/* Back to Home (only visible on step 1) */}
          {step === 1 && (
            <div className="mt-8">
              <Link to="/" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-mono tracking-tight group">
                <FaChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to home
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
