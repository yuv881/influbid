import { Routes, Route, Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

const Home = () => <div>Home</div>;
const Login = () => <div>Login</div>;
const Dashboard = () => <div>Dashboard</div>;
const Settings = () => <div>Settings</div>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;