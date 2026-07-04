import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [selectedPlatforms, setSelectedPlatforms] = useState(['Instagram']);

  const { register, handleSubmit, watch, setValue, trigger, formState: { errors } } = useForm({
    defaultValues: {
      role: 'company',
      companySize: '1-10 employees',
      primaryPlatform: 'Instagram',
      primaryNiche: 'Fitness',
      terms: true
    }
  });

  const currentRole = watch('role');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  const handleNext = async () => {
    const isValid = await trigger(['name', 'userName', 'email', 'phone', 'password']);
    if (isValid) {
      setStep(2);
      window.scrollTo(0, 0);
    }
  };

  const onSubmit = (data) => {
    if (!data.terms) {
      alert("Please agree to the terms and privacy policy.");
      return;
    }
    console.log("Registration Payload:", data);
    alert("Registration details submitted! (Check console for payload)");
  };

  return (
    <div className="min-h-screen bg-auth-bg text-auth-ink font-sans transition-colors duration-300 antialiased" data-theme={theme}>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="hidden md:flex flex-col justify-between relative bg-auth-bg-alt border-r border-auth-line p-14 bg-[radial-gradient(var(--auth-line)_1px,transparent_1px)] bg-[size:26px_26px]">
          <div className="flex items-center gap-2.5 font-extrabold text-[19px] tracking-[-0.02em]">
            <span className="w-8 h-8 rounded-lg bg-[#B5482A] flex items-center justify-center text-[#FFF7F0] text-base">⚡</span>
            INFLUBLAST
          </div>

          <div>
            <h1 className="font-display text-[clamp(40px,5.2vw,66px)] leading-none font-bold tracking-[-0.02em] mb-6">
              Join the<br /><span className="text-[#B5482A] italic">blast.</span>
            </h1>
            <p className="max-w-[400px] text-auth-ink-soft text-base leading-[1.6]">
              Create an account to scale your reach or find the perfect creators for your next campaign.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-2.5">
              <span className="font-display text-[26px] font-bold text-[#B5482A]">2,400+</span>
              <span className="text-[12.5px] font-bold tracking-[0.06em] uppercase text-auth-ink-soft">Active campaigns</span>
            </div>
            <div className="flex items-baseline gap-2.5">
              <span className="font-display text-[26px] font-bold text-[#B5482A]">$4.2M</span>
              <span className="text-[12.5px] font-bold tracking-[0.06em] uppercase text-auth-ink-soft">Paid to creators</span>
            </div>
            <div className="flex items-baseline gap-2.5">
              <span className="font-display text-[26px] font-bold text-[#B5482A]">18K+</span>
              <span className="text-[12.5px] font-bold tracking-[0.06em] uppercase text-auth-ink-soft">Registered creators</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-auth-bg relative p-8 md:p-14 overflow-y-auto h-screen">
          <button
            className="absolute top-8 right-8 w-11 h-11 rounded-full border-[1.5px] border-auth-line bg-auth-surface cursor-pointer flex items-center justify-center text-base hover:bg-auth-line transition-colors"
            onClick={toggleTheme}
            id="themeBtn"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <div className="w-full max-w-[460px] my-auto">

            {/* STEP 1 */}
            <div className={step === 1 ? 'block' : 'hidden'}>
              <div className="flex items-start justify-between mb-2">
                <h2 className="font-display text-[32px] font-bold">Create account</h2>
                <span className="text-[12.5px] font-extrabold text-[#B5482A] bg-[color-mix(in_srgb,#B5482A_12%,transparent)] px-3 py-1.5 rounded-full whitespace-nowrap mt-1.5">Step 1/2</span>
              </div>
              <div className="text-auth-ink-soft text-[14.5px] mb-4">
                Already have an account? <Link to="/login" className="text-[#B5482A] font-bold hover:underline">Sign in here</Link>
              </div>
              <div className="flex gap-1.5 mb-8">
                <div className="flex-1 h-1.5 rounded-sm bg-auth-line overflow-hidden"><div className="h-full bg-[#B5482A] w-full transition-all duration-300"></div></div>
                <div className="flex-1 h-1.5 rounded-sm bg-auth-line overflow-hidden"><div className="h-full bg-[#B5482A] w-0 transition-all duration-300"></div></div>
              </div>

              <div className="mb-5">
                <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">I am a...</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button type="button" className={`flex items-center justify-center gap-2 border-[1.5px] p-3.5 rounded-[10px] font-bold text-[14px] cursor-pointer transition-all ${currentRole === 'company' ? 'bg-[#B5482A] text-white border-[#B5482A] shadow-md scale-[1.02]' : 'bg-auth-surface border-auth-line text-auth-ink hover:border-[#B5482A]'}`} onClick={() => setValue('role', 'company')}>🏢 Company</button>
                  <button type="button" className={`flex items-center justify-center gap-2 border-[1.5px] p-3.5 rounded-[10px] font-bold text-[14px] cursor-pointer transition-all ${currentRole === 'influencer' ? 'bg-[#B5482A] text-white border-[#B5482A] shadow-md scale-[1.02]' : 'bg-auth-surface border-auth-line text-auth-ink hover:border-[#B5482A]'}`} onClick={() => setValue('role', 'influencer')}>⚡ Influencer</button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Name</label>
                  <div className="relative flex items-center bg-auth-surface border-[1.5px] border-auth-line rounded-[10px] transition-colors focus-within:border-[#B5482A]">
                    <span className="px-3.5 text-auth-ink-soft text-[15px]">👤</span>
                    <input type="text" className="flex-1 border-none bg-transparent outline-none py-3.5 pr-3.5 font-sans text-[15px] text-auth-ink" placeholder="John Doe" {...register("name", { required: "Name is required" })} />
                  </div>
                  {errors.name && <div className="text-red-500 text-[12px] mt-1">{errors.name.message}</div>}
                </div>
                <div>
                  <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Username</label>
                  <div className="relative flex items-center bg-auth-surface border-[1.5px] border-auth-line rounded-[10px] transition-colors focus-within:border-[#B5482A]">
                    <span className="px-3.5 text-auth-ink-soft text-[15px]">@</span>
                    <input type="text" className="flex-1 border-none bg-transparent outline-none py-3.5 pr-3.5 font-sans text-[15px] text-auth-ink" placeholder="admin" {...register("userName", { required: "Username is required" })} />
                  </div>
                  {errors.userName && <div className="text-red-500 text-[12px] mt-1">{errors.userName.message}</div>}
                </div>
              </div>

              <div className="mb-5">
                <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Email</label>
                <div className="relative flex items-center bg-auth-surface border-[1.5px] border-auth-line rounded-[10px] transition-colors focus-within:border-[#B5482A]">
                  <span className="px-3.5 text-auth-ink-soft text-[15px]">✉</span>
                  <input type="email" className="flex-1 border-none bg-transparent outline-none py-3.5 pr-3.5 font-sans text-[15px] text-auth-ink" placeholder="you@example.com" {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })} />
                </div>
                {errors.email && <div className="text-red-500 text-[12px] mt-1">{errors.email.message}</div>}
              </div>

              <div className="mb-5">
                <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Phone</label>
                <div className="relative flex items-center bg-auth-surface border-[1.5px] border-auth-line rounded-[10px] transition-colors focus-within:border-[#B5482A]">
                  <span className="px-3.5 text-auth-ink-soft text-[15px]">📞</span>
                  <input type="tel" className="flex-1 border-none bg-transparent outline-none py-3.5 pr-3.5 font-sans text-[15px] text-auth-ink" placeholder="1234567890" {...register("phone", { required: "Phone is required" })} />
                </div>
                {errors.phone && <div className="text-red-500 text-[12px] mt-1">{errors.phone.message}</div>}
              </div>

              <div className="mb-5">
                <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Password</label>
                <div className="relative flex items-center bg-auth-surface border-[1.5px] border-auth-line rounded-[10px] transition-colors focus-within:border-[#B5482A]">
                  <span className="px-3.5 text-auth-ink-soft text-[15px]">🔒</span>
                  <input type={showPassword ? "text" : "password"} className="flex-1 border-none bg-transparent outline-none py-3.5 pr-3.5 font-sans text-[15px] text-auth-ink" placeholder="Create a password" {...register("password", { required: "Password is required" })} />
                  <button type="button" className="px-3.5 cursor-pointer text-auth-ink-soft text-[15px] bg-transparent border-none hover:text-auth-ink" onClick={() => setShowPassword(!showPassword)}>👁</button>
                </div>
                {errors.password && <div className="text-red-500 text-[12px] mt-1">{errors.password.message}</div>}
              </div>

              <button type="button" className="w-full inline-flex items-center justify-center gap-2 px-6 py-[15px] rounded-[10px] bg-[#B5482A] text-[#FFF7F0] font-bold text-[15px] font-sans cursor-pointer border-none transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-[#a03d22]" onClick={handleNext}>Next step →</button>
              <Link to="/" className="inline-flex items-center gap-1.5 mt-5 text-[13.5px] font-semibold text-auth-ink-soft hover:text-auth-ink hover:underline">‹ Back to home</Link>
            </div>

            {/* STEP 2 */}
            <form className={step === 2 ? 'block' : 'hidden'} onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-start justify-between mb-2">
                <h2 className="font-display text-[32px] font-bold">Almost there</h2>
                <span className="text-[12.5px] font-extrabold text-[#B5482A] bg-[color-mix(in_srgb,#B5482A_12%,transparent)] px-3 py-1.5 rounded-full whitespace-nowrap mt-1.5">Step 2/2</span>
              </div>
              <div className="text-auth-ink-soft text-[14.5px] mb-4">
                {currentRole === 'company' ? 'Tell us a bit more about your company' : 'Tell us a bit more about your creator profile'}
              </div>
              <div className="flex gap-1.5 mb-8">
                <div className="flex-1 h-1.5 rounded-sm bg-auth-line overflow-hidden"><div className="h-full bg-[#B5482A] w-full transition-all duration-300"></div></div>
                <div className="flex-1 h-1.5 rounded-sm bg-auth-line overflow-hidden"><div className="h-full bg-[#B5482A] w-full transition-all duration-300"></div></div>
              </div>

              {currentRole === 'company' && (
                <div className="mb-5">
                  <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Company size</label>
                  <div className="relative flex items-center bg-auth-surface border-[1.5px] border-auth-line rounded-[10px] transition-colors focus-within:border-[#B5482A]">
                    <span className="px-3.5 text-auth-ink-soft text-[15px]">🏢</span>
                    <select className="flex-1 border-none bg-transparent outline-none py-3.5 pr-3.5 font-sans text-[15px] text-auth-ink" {...register("companySize")}>
                      <option>1–10 employees</option>
                      <option>11–50 employees</option>
                      <option>51–200 employees</option>
                      <option>200+ employees</option>
                    </select>
                  </div>
                </div>
              )}

              {currentRole === 'influencer' && (
                <div className="mb-5">
                  <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Platforms (Select Multiple)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Instagram', 'TikTok', 'YouTube', 'X / Twitter'].map(platform => {
                      const isSelected = selectedPlatforms.includes(platform);
                      return (
                        <button
                          key={platform}
                          type="button"
                          className={`flex items-center justify-center gap-2 border-[1.5px] p-3 rounded-[10px] font-bold text-[13px] cursor-pointer transition-all ${isSelected ? 'bg-[#B5482A] text-white border-[#B5482A] shadow-md ring-2 ring-offset-1 ring-[#B5482A]/30 scale-[1.02]' : 'bg-auth-surface border-auth-line text-auth-ink hover:border-[#B5482A]'}`}
                          onClick={() => {
                            const newSelection = isSelected
                              ? selectedPlatforms.filter(p => p !== platform)
                              : [...selectedPlatforms, platform];
                            setSelectedPlatforms(newSelection);
                            setValue("platforms", newSelection);
                          }}
                        >
                          {platform}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {currentRole === 'influencer' && selectedPlatforms.length > 0 && (
                <div className="mb-5">
                  <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Profile URLs</label>
                  <div className="flex flex-col gap-3">
                    {selectedPlatforms.map(platform => (
                      <div key={`url-${platform}`}>
                        <div className="relative flex items-center bg-auth-surface border-[1.5px] border-auth-line rounded-[10px] transition-colors focus-within:border-[#B5482A]">
                          <span className="px-3.5 text-auth-ink-soft text-[15px]">🔗</span>
                          <input
                            type="url"
                            className="flex-1 border-none bg-transparent outline-none py-3.5 pr-3.5 font-sans text-[15px] text-auth-ink"
                            placeholder={`${platform} URL`}
                            {...register(`urls.${platform}`, { required: `${platform} URL is required` })}
                          />
                        </div>
                        {errors?.urls?.[platform] && <div className="text-red-500 text-[12px] mt-1">{errors.urls[platform].message}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-5">
                <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Primary niche</label>
                <div className="relative flex items-center bg-auth-surface border-[1.5px] border-auth-line rounded-[10px] transition-colors focus-within:border-[#B5482A]">
                  <span className="px-3.5 text-auth-ink-soft text-[15px]">🏷</span>
                  <select className="flex-1 border-none bg-transparent outline-none py-3.5 pr-3.5 font-sans text-[15px] text-auth-ink" {...register("primaryNiche")}>
                    <option>Fitness</option>
                    <option>Beauty</option>
                    <option>Technology</option>
                    <option>Food & Drink</option>
                    <option>Travel</option>
                    <option>Fashion</option>
                  </select>
                </div>
              </div>

              <label className="flex items-start gap-3 p-4 border-[1.5px] border-auth-line rounded-[10px] mb-5 cursor-pointer transition-colors hover:bg-auth-surface">
                <input type="checkbox" className="mt-1 accent-[#B5482A]" {...register("terms")} />
                <div>
                  <h4 className="text-[14.5px] font-bold mb-1">I agree to the Terms & Privacy Policy</h4>
                  <p className="text-[12.5px] text-auth-ink-soft leading-[1.5]">By creating an account you agree to Influblast's terms of service and privacy policy.</p>
                </div>
              </label>

              <div className="flex gap-3">
                <button type="button" className="inline-flex items-center justify-center px-6 py-[15px] rounded-[10px] bg-transparent border-[1.5px] border-auth-line text-auth-ink font-bold text-[14px] font-sans cursor-pointer transition-colors hover:bg-auth-line" onClick={() => setStep(1)}>← Back</button>
                <button type="submit" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-[10px] rounded-[10px] bg-[#B5482A] text-[#FFF7F0] font-bold text-[14px] font-sans cursor-pointer border-none transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-[#a03d22]">Create account</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
