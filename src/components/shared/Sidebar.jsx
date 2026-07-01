import { Link } from 'react-router';
import { SIDEBAR_ITEMS } from '../../config/Sidebar_Items';

const Sidebar = () => {
  return (
    <aside style={{ width: '250px', borderRight: '1px solid #ccc', padding: '1rem' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {SIDEBAR_ITEMS.map((item) => (
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