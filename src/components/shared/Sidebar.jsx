import { Link } from 'react-router';
import { COMPANY_SIDEBAR_ITEMS, INFLUENCER_SIDEBAR_ITEMS } from '../../config/Sidebar_Items';

const USER_ROLE = localStorage.getItem('user_role');

const Sidebar = () => {
  return (
    <aside style={{ width: '250px', borderRight: '1px solid #ccc', padding: '1rem' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {USER_ROLE === 'company' ? COMPANY_SIDEBAR_ITEMS.map((item) => (
            <li key={item.path} style={{ margin: '1rem 0' }}>
              <Link to={item.path} style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {item.icon}
                {item.title}
              </Link>
            </li>
          )) : INFLUENCER_SIDEBAR_ITEMS.map((item) => (
            <li key={item.path} style={{ margin: '1rem 0' }}>
              <Link to={item.path} style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {item.icon}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;