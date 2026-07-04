export default function HowItWorks() {
  return (
    <section className="how">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ color: 'var(--brand)' }}>How it works</span>
            <div className="section-title display">Two sides, one platform</div>
            <div className="section-sub">Built for brands and creators alike — each role gets its own clean workflow.</div>
          </div>
        </div>
        <div className="how-grid">
          <div className="how-card">
            <span className="tag tag-brand">For brands</span>
            <h3 className="display">Post, filter, hire</h3>
            <div className="step">
              <span className="step-num">01</span>
              <div className="step-body">
                <h4>Post your campaign</h4>
                <p>Add product details, budget range, deadline, and content requirements. Takes under 5 minutes.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-num">02</span>
              <div className="step-body">
                <h4>Set bidder filters</h4>
                <p>Define exactly who can apply — platform, follower range, engagement rate, niche, age, location.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-num">03</span>
              <div className="step-body">
                <h4>Review & accept</h4>
                <p>Bids come in from qualified creators. Compare proposals and accept the best match.</p>
              </div>
            </div>
            <button className="btn btn-brand">Post your first campaign →</button>
          </div>
          <div className="how-card">
            <span className="tag tag-creator">For creators</span>
            <h3 className="display">Browse, pitch, win</h3>
            <div className="step">
              <span className="step-num">01</span>
              <div className="step-body">
                <h4>Build your profile</h4>
                <p>Add your platform, stats, niches, and bio. Auto-checked against campaign conditions.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-num">02</span>
              <div className="step-body">
                <h4>Browse eligible campaigns</h4>
                <p>See exactly which campaigns you qualify for. No guessing, no wasted effort.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-num">03</span>
              <div className="step-body">
                <h4>Submit your bid</h4>
                <p>Write your pitch, set your rate, and describe your deliverables.</p>
              </div>
            </div>
            <button className="btn btn-creator">Start browsing campaigns →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
