import { NavLink } from 'react-router';
import { COMPANY_SIDEBAR_ITEMS, INFLUENCER_SIDEBAR_ITEMS } from '../../config/Sidebar_Items';
import { Zap } from 'lucide-react'; // Brand icon

const USER_ROLE = localStorage.getItem('user_role') || 'influencer';

const Sidebar = () => {
  const items = USER_ROLE === 'company' ? COMPANY_SIDEBAR_ITEMS : INFLUENCER_SIDEBAR_ITEMS;

  return (
    <aside className="w-64 h-screen bg-gray-900 text-gray-300 flex flex-col shadow-2xl transition-all duration-300 flex-shrink-0">
      {/* Brand Header */}
      <div className="h-20 flex items-center px-6 border-b border-gray-800">
        <Zap className="text-indigo-500 mr-3" size={28} />
        <span className="text-2xl font-bold text-white tracking-wide">Influbid</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
        <p className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Main Menu
        </p>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                      : 'hover:bg-gray-800 hover:text-white'
                  }`
                }
              >
                {item.icon}
                <span className="font-medium">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer / User Profile Placeholder */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">
            {USER_ROLE === 'company' ? 'C' : 'I'}
          </div>
          <div>
            <p className="text-sm font-medium text-white capitalize">{USER_ROLE}</p>
            <p className="text-xs text-gray-400">View Profile</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;