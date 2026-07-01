import { useLocation } from 'react-router';
import { COMPANY_SIDEBAR_ITEMS, INFLUENCER_SIDEBAR_ITEMS } from '../../config/Sidebar_Items';

const ALL_ITEMS = [...COMPANY_SIDEBAR_ITEMS, ...INFLUENCER_SIDEBAR_ITEMS];

const Header = () => {
  const location = useLocation();

  // Find the matching item based on the current path
  const currentItem = ALL_ITEMS.find(item => item.path === location.pathname);

  // Default to something generic if not found
  const pageTitle = currentItem ? currentItem.title : 'Overview';

  return (
    <header className="bg-white border-b border-gray-200 px-8 h-20 flex items-center justify-between shadow-sm sticky top-0 z-10 shrink-0">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">{pageTitle}</h1>
      </div>
      <div className="flex items-center gap-4">
        {/* Placeholder for right-side items like notifications or user profile */}
        <div className="hidden md:flex flex-col items-end mr-2">
          <span className="text-sm font-semibold text-gray-700">Yuvraj</span>
          <span className="text-xs text-gray-500">Admin</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-linear-to-tr from-blue-500 to-indigo-500 shadow-md flex items-center justify-center text-white font-bold cursor-pointer">
          Y
        </div>
      </div>
    </header>
  );
};

export default Header;
