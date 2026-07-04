export default function OpenCampaigns() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="live-tag">
              <span className="live-dot"></span>Live now
            </span>
            <div className="section-title display">Open campaigns</div>
          </div>
          <a href="#" className="view-all">View all →</a>
        </div>
        <div className="campaign-grid">
          <div className="campaign-card">
            <div className="campaign-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400')" }}></div>
            <div className="campaign-body">
              <div className="live-tag"><span className="live-dot"></span>Live</div>
              <div className="brand-name">Norde Athletics</div>
              <h4>Norde Pro Runner X7</h4>
              <div className="campaign-foot">
                <span className="price">$800–$3,500</span>
                <span className="bids">14 bids</span>
              </div>
            </div>
          </div>
          <div className="campaign-card">
            <div className="campaign-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400')" }}></div>
            <div className="campaign-body">
              <div className="live-tag"><span className="live-dot"></span>Live</div>
              <div className="brand-name">Lumière Skin</div>
              <h4>Vitamin C Serum Pro</h4>
              <div className="campaign-foot">
                <span className="price">$1,500–$8,000</span>
                <span className="bids">31 bids</span>
              </div>
            </div>
          </div>
          <div className="campaign-card">
            <div className="campaign-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400')" }}></div>
            <div className="campaign-body">
              <div className="live-tag"><span className="live-dot"></span>Live</div>
              <div className="brand-name">Techflow SaaS</div>
              <h4>Techflow AI Workspace</h4>
              <div className="campaign-foot">
                <span className="price">$2,000–$12,000</span>
                <span className="bids">8 bids</span>
              </div>
            </div>
          </div>
          <div className="campaign-card">
            <div className="campaign-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400')" }}></div>
            <div className="campaign-body">
              <div className="live-tag"><span className="live-dot"></span>Live</div>
              <div className="brand-name">Café Ritual</div>
              <h4>Single-Origin Cold Brew Kit</h4>
              <div className="campaign-foot">
                <span className="price">$400–$2,000</span>
                <span className="bids">22 bids</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
