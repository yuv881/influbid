import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

export default function InfluencerDashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || user.role !== 'influencer') {
      // If not logged in as influencer, redirect to login
      navigate('/login');
    } else {
      setCurrentUser(user);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

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

  if (!currentUser) return null;

  return (
    <div className="min-h-screen bg-auth-bg text-auth-ink font-sans transition-colors duration-300 antialiased p-8 flex flex-col items-center justify-center relative" data-theme={theme}>
      <button 
        className="absolute top-8 right-8 w-11 h-11 rounded-full border-[1.5px] border-auth-line bg-auth-surface cursor-pointer flex items-center justify-center text-base" 
        onClick={toggleTheme} 
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <div className="w-full max-w-md bg-auth-surface border border-auth-line rounded-xl p-8 text-center shadow-lg">
        <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          {currentUser.name ? currentUser.name[0].toUpperCase() : 'I'}
        </div>
        <h1 className="text-2xl font-bold mb-2">Influencer Dashboard</h1>
        <p className="text-auth-ink-soft mb-6">Welcome, {currentUser.name || currentUser.userName}! This dashboard is currently under construction.</p>
        
        <div className="bg-auth-bg-alt border border-auth-line rounded-lg p-4 mb-6 text-left text-sm flex flex-col gap-2">
          <div><span className="font-semibold text-auth-ink-soft">Username:</span> @{currentUser.userName}</div>
          <div><span className="font-semibold text-auth-ink-soft">Email:</span> {currentUser.email}</div>
          <div><span className="font-semibold text-auth-ink-soft">Niche:</span> {currentUser.primaryNiche}</div>
        </div>

        <button 
          onClick={handleLogout} 
          className="w-full py-3 bg-[#B5482A] text-white font-bold rounded-lg hover:bg-[#a03d22] transition-colors cursor-pointer"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
