import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import './Register.css';

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
          window.scrollTo(0,0);
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
    <div className="register-wrapper" data-theme={theme}>
      <div className="page">
        <div className="left">
          <div className="logo"><span className="mark">⚡</span>INFLUBLAST</div>

          <div className="left-mid">
            <h1 className="display">Join the<br/><span className="accent">blast.</span></h1>
            <p>Create an account to scale your reach or find the perfect creators for your next campaign.</p>
          </div>

          <div className="left-stats">
            <div className="left-stat"><span className="num">2,400+</span><span className="label">Active campaigns</span></div>
            <div className="left-stat"><span className="num">$4.2M</span><span className="label">Paid to creators</span></div>
            <div className="left-stat"><span className="num">18K+</span><span className="label">Registered creators</span></div>
          </div>
        </div>

        <div className="right">
          <button className="theme-toggle" onClick={toggleTheme} id="themeBtn">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <div className="form-wrap">

            {/* STEP 1 */}
            <div className={`step-panel ${step === 1 ? 'active' : ''}`} id="step1">
              <div className="form-head">
                <h2>Create account</h2>
                <span className="step-badge">Step 1/2</span>
              </div>
              <div className="sub">Already have an account? <Link to="/login">Sign in here</Link></div>
              <div className="progress">
                <div className="progress-seg"><div className="fill" style={{width: '100%'}}></div></div>
                <div className="progress-seg"><div className="fill" style={{width: '0%'}}></div></div>
              </div>

              <div className="field">
                <label>I am a...</label>
                <div className="role-row">
                  <button type="button" className={`role-btn ${currentRole === 'company' ? 'active' : ''}`} onClick={() => setValue('role', 'company')}>🏢 Company</button>
                  <button type="button" className={`role-btn ${currentRole === 'influencer' ? 'active' : ''}`} onClick={() => setValue('role', 'influencer')}>⚡ Influencer</button>
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label>Name</label>
                  <div className="input-wrap">
                    <span className="icon">👤</span>
                    <input type="text" placeholder="John Doe" {...register("name", { required: "Name is required" })} />
                  </div>
                  {errors.name && <div style={{color: 'red', fontSize: '12px', marginTop: '4px'}}>{errors.name.message}</div>}
                </div>
                <div className="field">
                  <label>Username</label>
                  <div className="input-wrap">
                    <span className="icon">@</span>
                    <input type="text" placeholder="admin" {...register("userName", { required: "Username is required" })} />
                  </div>
                  {errors.userName && <div style={{color: 'red', fontSize: '12px', marginTop: '4px'}}>{errors.userName.message}</div>}
                </div>
              </div>

              <div className="field">
                <label>Email</label>
                <div className="input-wrap">
                  <span className="icon">✉</span>
                  <input type="email" placeholder="you@example.com" {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })} />
                </div>
                {errors.email && <div style={{color: 'red', fontSize: '12px', marginTop: '4px'}}>{errors.email.message}</div>}
              </div>

              <div className="field">
                <label>Phone</label>
                <div className="input-wrap">
                  <span className="icon">📞</span>
                  <input type="tel" placeholder="1234567890" {...register("phone", { required: "Phone is required" })} />
                </div>
                {errors.phone && <div style={{color: 'red', fontSize: '12px', marginTop: '4px'}}>{errors.phone.message}</div>}
              </div>

              <div className="field">
                <label>Password</label>
                <div className="input-wrap">
                  <span className="icon">🔒</span>
                  <input type={showPassword ? "text" : "password"} placeholder="Create a password" {...register("password", { required: "Password is required" })} />
                  <button type="button" className="toggle-eye" onClick={() => setShowPassword(!showPassword)}>👁</button>
                </div>
                {errors.password && <div style={{color: 'red', fontSize: '12px', marginTop: '4px'}}>{errors.password.message}</div>}
              </div>

              <button type="button" className="btn btn-brand" onClick={handleNext}>Next step →</button>
              <Link to="/" className="back-link">‹ Back to home</Link>
            </div>

            {/* STEP 2 */}
            <form className={`step-panel ${step === 2 ? 'active' : ''}`} id="step2" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-head">
                <h2>Almost there</h2>
                <span className="step-badge">Step 2/2</span>
              </div>
              <div className="sub" id="step2sub">
                {currentRole === 'company' ? 'Tell us a bit more about your company' : 'Tell us a bit more about your creator profile'}
              </div>
              <div className="progress">
                <div className="progress-seg"><div className="fill" style={{width: '100%'}}></div></div>
                <div className="progress-seg"><div className="fill" style={{width: '100%'}}></div></div>
              </div>

              {currentRole === 'company' && (
                <div className="field" id="companyFields">
                  <label>Company size</label>
                  <div className="input-wrap">
                    <span className="icon">🏢</span>
                    <select {...register("companySize")}>
                      <option>1–10 employees</option>
                      <option>11–50 employees</option>
                      <option>51–200 employees</option>
                      <option>200+ employees</option>
                    </select>
                  </div>
                </div>
              )}

              {currentRole === 'influencer' && (
                <div className="field" id="influencerFields">
                  <label>Platforms (Select Multiple)</label>
                  <div className="role-row" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                    {['Instagram', 'TikTok', 'YouTube', 'X / Twitter'].map(platform => {
                      const isSelected = selectedPlatforms.includes(platform);
                      return (
                        <button
                          key={platform}
                          type="button"
                          className={`role-btn ${isSelected ? 'active' : ''}`}
                          style={{ padding: '10px', fontSize: '13px' }}
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
                <div className="field">
                  <label>Profile URLs</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {selectedPlatforms.map(platform => (
                      <div key={`url-${platform}`}>
                        <div className="input-wrap">
                          <span className="icon">🔗</span>
                          <input 
                            type="url" 
                            placeholder={`${platform} URL`}
                            {...register(`urls.${platform}`, { required: `${platform} URL is required` })}
                          />
                        </div>
                        {errors?.urls?.[platform] && <div style={{color: 'red', fontSize: '12px', marginTop: '4px'}}>{errors.urls[platform].message}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="field">
                <label>Primary niche</label>
                <div className="input-wrap">
                  <span className="icon">🏷</span>
                  <select {...register("primaryNiche")}>
                    <option>Fitness</option>
                    <option>Beauty</option>
                    <option>Technology</option>
                    <option>Food & Drink</option>
                    <option>Travel</option>
                    <option>Fashion</option>
                  </select>
                </div>
              </div>

              <label className="check-item">
                <input type="checkbox" {...register("terms")} />
                <div className="txt">
                  <h4>I agree to the Terms & Privacy Policy</h4>
                  <p>By creating an account you agree to Influblast's terms of service and privacy policy.</p>
                </div>
              </label>

              <div className="btn-row">
                <button type="button" className="btn btn-outline" onClick={() => setStep(1)}>← Back</button>
                <button type="submit" className="btn btn-brand">Create account</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
