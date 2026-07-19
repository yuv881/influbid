import { Routes, Route } from 'react-router';
import { useEffect } from 'react';
import LandingPage from '../landing-page/App.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import CompanyDashboard from './pages/company/CompanyDashboard.jsx';
import InfluencerDashboard from './pages/influencer/InfluencerDashboard.jsx';

const App = () => {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/company/dashboard" element={<CompanyDashboard />} />
      <Route path="/influencer/dashboard" element={<InfluencerDashboard />} />
    </Routes>
  );
}

export default App;
