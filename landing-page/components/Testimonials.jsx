export default function Testimonials() {
  return (
    <section className="how">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ color: 'var(--brand)' }}>Testimonials</span>
            <div className="section-title display">What they say</div>
          </div>
        </div>
        <div className="test-grid">
          <div className="test-card">
            <div className="stars">★★★★★</div>
            <p>"I landed 3 campaigns in my first month. The eligibility filtering is a game changer — I only apply to campaigns that fit my audience."</p>
            <div className="person">Sarah Jenkins<span>Fitness Creator · 45K followers</span></div>
          </div>
          <div className="test-card">
            <div className="stars">★★★★★</div>
            <p>"We got 31 bids in 48 hours for our serum launch. Transparent bidding lets us compare creators side-by-side, no hidden markups."</p>
            <div className="person">David Chang<span>Founder at Lumière Skin</span></div>
          </div>
          <div className="test-card">
            <div className="stars">★★★★★</div>
            <p>"The platform is brutally transparent. I know exactly what brands expect, and payments take days instead of months."</p>
            <div className="person">Elena Rostova<span>Travel & Lifestyle Creator</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
