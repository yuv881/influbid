import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const { register, handleSubmit, formState: { errors } } = useForm();

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

  const onSubmit = (data) => {
    console.log("Login Payload:", data);
    alert("Login details submitted! (Check console for payload)");
  };

  return (
    <div className="min-h-screen bg-auth-bg text-auth-ink font-sans transition-colors duration-300 antialiased" data-theme={theme}>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="hidden md:flex flex-col justify-between relative bg-auth-bg-alt border-r border-auth-line p-14 bg-[radial-gradient(var(--auth-line)_1px,transparent_1px)] bg-[size:26px_26px]">
          <div className="flex items-center gap-2.5 font-extrabold text-[19px] tracking-[-0.02em]">
            <span className="w-8 h-8 rounded-lg bg-auth-brand flex items-center justify-center text-auth-brand-ink text-base">⚡</span>
            INFLUBLAST
          </div>

          <div>
            <h1 className="font-display text-[clamp(40px,5.2vw,66px)] leading-none font-bold tracking-[-0.02em] mb-6">
              Welcome<br/><span className="text-auth-brand italic">back.</span>
            </h1>
            <p className="max-w-[400px] text-auth-ink-soft text-base leading-[1.6]">
              Sign in to manage your campaigns or discover new brand deals.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-2.5">
              <span className="font-display text-[26px] font-bold text-auth-brand">2,400+</span>
              <span className="text-[12.5px] font-bold tracking-[0.06em] uppercase text-auth-ink-soft">Active campaigns</span>
            </div>
            <div className="flex items-baseline gap-2.5">
              <span className="font-display text-[26px] font-bold text-auth-brand">$4.2M</span>
              <span className="text-[12.5px] font-bold tracking-[0.06em] uppercase text-auth-ink-soft">Paid to creators</span>
            </div>
            <div className="flex items-baseline gap-2.5">
              <span className="font-display text-[26px] font-bold text-auth-brand">18K+</span>
              <span className="text-[12.5px] font-bold tracking-[0.06em] uppercase text-auth-ink-soft">Registered creators</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-auth-bg relative p-8 md:p-14">
          <button 
            className="hidden md:flex absolute top-8 right-8 w-11 h-11 rounded-full border-[1.5px] border-auth-line bg-auth-surface cursor-pointer items-center justify-center text-base hover:bg-auth-line transition-colors" 
            onClick={toggleTheme} 
            id="themeBtn"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <div className="w-full max-w-[400px]">
            {/* Mobile Header (Logo + Theme Toggle) */}
            <div className="flex items-center justify-between mb-8 md:hidden">
              <Link to="/" className="flex items-center gap-2.5 font-extrabold text-[19px] tracking-[-0.02em] text-auth-ink no-underline">
                <span className="w-8 h-8 rounded-lg bg-auth-brand flex items-center justify-center text-auth-brand-ink text-base">⚡</span>
                INFLUBLAST
              </Link>
              <button 
                type="button"
                className="w-11 h-11 rounded-full border-[1.5px] border-auth-line bg-auth-surface cursor-pointer flex items-center justify-center text-base hover:bg-auth-line transition-colors" 
                onClick={toggleTheme}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </div>

            <h2 className="font-display text-[32px] font-bold mb-2.5">Sign in</h2>
            <div className="text-auth-ink-soft text-[14.5px] mb-9">
              No account? <Link to="/register" className="text-auth-brand font-bold">Create one free</Link>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-[22px]">
                <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Email</label>
                <div className="relative flex items-center bg-auth-surface border-[1.5px] border-auth-line rounded-[10px] transition-colors focus-within:border-auth-brand">
                  <span className="px-3.5 text-auth-ink-soft text-[15px]">✉</span>
                  <input 
                    type="email" 
                    className="flex-1 border-none bg-transparent outline-none py-3.5 pr-3.5 font-sans text-[15px] text-auth-ink placeholder:text-auth-ink-soft"
                    placeholder="you@example.com"
                    {...register("email", { required: "Email is required" })} 
                  />
                </div>
                {errors.email && <div className="text-red-500 text-[12px] mt-1">{errors.email.message}</div>}
              </div>

              <div className="mb-[22px]">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[12px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-0">Password</label>
                  <a href="#forgot" className="text-[13px] font-bold text-auth-brand">Forgot?</a>
                </div>
                <div className="relative flex items-center bg-auth-surface border-[1.5px] border-auth-line rounded-[10px] transition-colors focus-within:border-auth-brand">
                  <span className="px-3.5 text-auth-ink-soft text-[15px]">🔒</span>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    className="flex-1 border-none bg-transparent outline-none py-3.5 pr-3.5 font-sans text-[15px] text-auth-ink placeholder:text-auth-ink-soft"
                    placeholder="••••••••"
                    {...register("password", { required: "Password is required" })} 
                  />
                  <button type="button" className="px-3.5 cursor-pointer text-auth-ink-soft text-[15px] bg-transparent border-none" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? '👁' : '👁'}
                  </button>
                </div>
                {errors.password && <div className="text-red-500 text-[12px] mt-1">{errors.password.message}</div>}
              </div>

              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-[15px] rounded-[10px] bg-[#B5482A] text-[#FFF7F0] font-bold text-[15px] font-sans cursor-pointer border-none transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-[#a03d22]">
                <span>⚡</span> Sign in
              </button>
            </form>

            <div className="flex items-center gap-3.5 my-7 text-auth-ink-soft text-[12.5px] font-semibold before:content-[''] before:flex-1 before:h-px before:bg-auth-line after:content-[''] after:flex-1 after:h-px after:bg-auth-line">
              OR CONTINUE WITH
            </div>

            <div className="flex gap-3 mb-2">
              <button className="flex-1 flex items-center justify-center gap-2 border-[1.5px] border-auth-line bg-auth-surface rounded-[10px] p-3 text-[13.5px] font-bold cursor-pointer text-auth-ink hover:bg-auth-line transition-colors">Google</button>
              <button className="flex-1 flex items-center justify-center gap-2 border-[1.5px] border-auth-line bg-auth-surface rounded-[10px] p-3 text-[13.5px] font-bold cursor-pointer text-auth-ink hover:bg-auth-line transition-colors">Apple</button>
            </div>

            <Link to="/" className="inline-flex items-center gap-1.5 mt-6 text-[13.5px] font-semibold text-auth-ink-soft hover:text-auth-ink hover:underline">‹ Back to home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
