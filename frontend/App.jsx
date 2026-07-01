import { Routes, Route, Outlet } from 'react-router';
import Sidebar from './components/shared/Sidebar';
import Header from './components/shared/Header';
import Dashboard from './pages/Dashboard';

const Layout = () => {
  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden text-gray-900 font-sans">
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