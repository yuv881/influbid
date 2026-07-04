import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import './Login.css';

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
    <div className="login-wrapper" data-theme={theme}>
      <div className="page">
        <div className="left">
          <div className="logo"><span className="mark">⚡</span>INFLUBLAST</div>

          <div className="left-mid">
            <h1 className="display">Welcome<br/><span className="accent">back.</span></h1>
            <p>Sign in to manage your campaigns or discover new brand deals.</p>
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
            <h2>Sign in</h2>
            <div className="sub">No account? <Link to="/register">Create one free</Link></div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="field">
                <label>Email</label>
                <div className="input-wrap">
                  <span className="icon">✉</span>
                  <input 
                    type="email" 
                    placeholder="you@example.com"
                    {...register("email", { required: "Email is required" })} 
                  />
                </div>
                {errors.email && <div style={{color: 'red', fontSize: '12px', marginTop: '4px'}}>{errors.email.message}</div>}
              </div>

              <div className="field">
                <div className="field-head">
                  <label>Password</label>
                  <a href="#forgot" className="forgot">Forgot?</a>
                </div>
                <div className="input-wrap">
                  <span className="icon">🔒</span>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    {...register("password", { required: "Password is required" })} 
                  />
                  <button type="button" className="toggle-eye" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? '👁' : '👁'}
                  </button>
                </div>
                {errors.password && <div style={{color: 'red', fontSize: '12px', marginTop: '4px'}}>{errors.password.message}</div>}
              </div>

              <button type="submit" className="btn btn-brand"><span>⚡</span> Sign in</button>
            </form>

            <div className="divider">OR CONTINUE WITH</div>
            <div className="oauth-row">
              <button className="oauth-btn">Google</button>
              <button className="oauth-btn">Apple</button>
            </div>

            <Link to="/" className="back-link">‹ Back to home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
