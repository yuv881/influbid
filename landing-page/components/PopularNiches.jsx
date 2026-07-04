export default function PopularNiches() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ color: 'var(--brand)' }}>Browse by category</span>
            <div className="section-title display">Popular niches</div>
          </div>
        </div>
        <div className="niche-grid">
          <div className="niche" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300')" }}><span>Fitness</span></div>
          <div className="niche" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300')" }}><span>Beauty</span></div>
          <div className="niche" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=300')" }}><span>Technology</span></div>
          <div className="niche" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300')" }}><span>Food & Drink</span></div>
          <div className="niche" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300')" }}><span>Travel</span></div>
          <div className="niche" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300')" }}><span>Fashion</span></div>
        </div>
      </div>
    </section>
  );
}
