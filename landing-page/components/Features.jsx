export default function Features() {
  return (
    <section className="how">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ color: 'var(--brand)' }}>Platform features</span>
            <div className="section-title display">Built for results</div>
          </div>
        </div>
        <div className="feat-grid">
          <div className="feat-card">
            <div className="feat-icon">◎</div>
            <h4>Precision matching</h4>
            <p>Brands set detailed eligibility — follower count, engagement, niche, platform, age, location.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">⚡</div>
            <h4>Competitive bidding</h4>
            <p>Creators submit proposals with their own rates. Brands pick the best fit, not the lowest price.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">🛡</div>
            <h4>Verified profiles</h4>
            <p>Every creator account shows real metrics: followers, engagement, campaign history, ratings.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">📊</div>
            <h4>Campaign analytics</h4>
            <p>Track bid activity, budget commitments, and performance with live dashboard charts.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">✓</div>
            <h4>Smart eligibility</h4>
            <p>Creators instantly see which campaigns they qualify for — no wasted applications.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">★</div>
            <h4>Transparent ratings</h4>
            <p>Post-campaign ratings build reputations over time. Better performance, more wins.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
