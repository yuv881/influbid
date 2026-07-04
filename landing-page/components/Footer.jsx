import { FaBolt } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer>
      <div className="logo" style={{ fontSize: '15px' }}>
        <span className="mark" style={{ width: '26px', height: '26px', fontSize: '13px' }}>
          <FaBolt />
        </span>
        INFLUBLAST
      </div>
      <div>© 2026 Influblast · Influencer Marketplace Platform</div>
      <div className="foot-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
}
