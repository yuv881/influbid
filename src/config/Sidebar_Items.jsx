import { Home, LayoutDashboard, Settings, LogIn } from 'lucide-react';

export const SIDEBAR_ITEMS = [
    {
        title: 'Home',
        path: '/home',
        icon: <Home size={20} />,
    },
    {
        title: 'Dashboard',
        path: '/',
        icon: <LayoutDashboard size={20} />,
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <Settings size={20} />,
    },
    {
        title: 'Login',
        path: '/login',
        icon: <LogIn size={20} />,
    },
];
