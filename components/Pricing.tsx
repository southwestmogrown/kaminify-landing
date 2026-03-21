export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <span className="section-label reveal">Pricing</span>
      <h2 className="section-title reveal">
        Start free. Scale when you need to.
      </h2>
      <p className="section-sub reveal">
        Demo mode is free with no account required. Bring your own Anthropic key
        for unlimited generation. Paid tiers coming soon.
      </p>

      <div className="pricing-grid">
        <div className="pricing-card reveal">
          <span className="pricing-tier">Demo</span>
          <div className="pricing-price">Free</div>
          <p className="pricing-desc">
            No account. No API key. See it work before you commit.
          </p>
          <ul className="pricing-features">
            <li className="included">3 runs per session</li>
            <li className="included">Up to 3 pages per run</li>
            <li className="included">Live preview</li>
            <li className="included">ZIP download</li>
            <li>Unlimited runs</li>
            <li>Unlimited pages</li>
          </ul>
          <a
            href="https://app..app..app..app.kaminify.com"
            className="btn-pricing-secondary"
          >
            Try demo
          </a>
        </div>

        <div className="pricing-card featured reveal">
          <div className="pricing-badge">Available now</div>
          <span className="pricing-tier">BYOK</span>
          <div className="pricing-price">
            Free <span>with your key</span>
          </div>
          <p className="pricing-desc">
            Use your own Anthropic API key. Unlimited runs, unlimited pages.
          </p>
          <ul className="pricing-features">
            <li className="included">Unlimited runs</li>
            <li className="included">Unlimited pages per run</li>
            <li className="included">Live preview</li>
            <li className="included">ZIP download</li>
            <li className="included">Your key, your costs</li>
            <li className="included">No data stored</li>
          </ul>
          <a href="https://kaminify.com" className="btn-pricing-primary">
            Get started free
          </a>
        </div>

        <div className="pricing-card reveal">
          <span className="pricing-tier">Pro</span>
          <div className="pricing-price">
            $49 <span>/ mo</span>
          </div>
          <p className="pricing-desc">
            Our key. No setup. Priority generation and higher page limits.
          </p>
          <ul className="pricing-features">
            <li className="included">Unlimited runs</li>
            <li className="included">Up to 20 pages per run</li>
            <li className="included">No API key needed</li>
            <li className="included">Priority queue</li>
            <li className="included">Run history</li>
            <li className="included">Email support</li>
          </ul>
          <a
            href="mailto:mail@shanewilkey.com"
            className="btn-pricing-secondary"
          >
            Join waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
