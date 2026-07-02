import { Routes, Route, Outlet, Navigate } from 'react-router';
import Sidebar from './components/shared/Sidebar';
import Header from './components/shared/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/login';
import LandingPage from '../landing_page/LandingPage';

const Layout = () => {
  return (
    <div className="flex w-screen bg-gray-50 text-gray-900 font-sans" style={{ height: "100vh", overflow: "hidden", position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const ProtectedRoute = () => {
  const role = localStorage.getItem('user_role');
  if (!role) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

const Settings = () => (
  <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs max-w-2xl">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Profile Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Username / Name</label>
            <input type="text" defaultValue="Yuvraj" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm transition-all" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Role</label>
            <input type="text" disabled defaultValue={localStorage.getItem('user_role') || ''} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 text-sm capitalize" />
          </div>
        </div>
      </div>
      <div className="pt-4 border-t border-gray-100">
        <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition-colors shadow-xs">
          Save Settings
        </button>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;