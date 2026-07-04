export default function Hero() {
  return (
    <section className="hero">
      <span className="eyebrow">Merit-based influencer marketing</span>
      <h1 className="display">
        Brands meet<br />
        <span className="accent">creators.</span>
      </h1>
      <p>
        Companies post campaigns. Creators bid. The best match wins — no agencies, no fixed rates, just transparent competition.
      </p>
      <div className="hero-ctas">
        <button className="btn btn-brand btn-lg">Post a campaign →</button>
        <button className="btn btn-outline btn-lg">Find campaigns →</button>
      </div>
      <div className="stats">
        <div className="stat">
          <div className="num">2,400+</div>
          <div className="label">Active campaigns</div>
        </div>
        <div className="stat">
          <div className="num">$4.2M</div>
          <div className="label">Paid to creators</div>
        </div>
        <div className="stat">
          <div className="num">18K+</div>
          <div className="label">Verified creators</div>
        </div>
        <div className="stat">
          <div className="num">94%</div>
          <div className="label">Match rate</div>
        </div>
      </div>
    </section>
  );
}
