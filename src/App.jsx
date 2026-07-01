import { Routes, Route, Outlet } from 'react-router';
import Sidebar from './components/shared/Sidebar';
import Dashboard from './pages/Dashboard';

const Layout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
};

const Home = () => <Dashboard />;
const Login = () => <div>Login</div>;
const Settings = () => <div>Settings</div>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;