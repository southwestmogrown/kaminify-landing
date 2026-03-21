export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow"></div>

      <div className="hero-badge">Powered by Claude · Multi-page generation</div>

      <h1>
        Clone any site&apos;s design.<br />
        <em>Keep your content.</em>
      </h1>

      <p className="hero-sub">
        Paste a design URL and a content URL. Kaminify scrapes both, extracts the design system,
        and generates a complete multi-page site — in minutes, not months.
      </p>

      <div className="hero-actions">
        <a href="https://app.kaminify.com" className="btn-primary">
          Try it free
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="#how-it-works" className="btn-secondary">See how it works</a>
      </div>

      <div className="hero-demo">
        <div className="demo-panel">
          <div className="demo-topbar">
            <div className="dot dot-r"></div>
            <div className="dot dot-y"></div>
            <div className="dot dot-g"></div>
          </div>
          <div className="demo-body">
            <div className="demo-url-box">
              <div className="demo-url-label">Design source</div>
              <div className="demo-url-value design">stripe.com</div>
            </div>
            <div className="demo-arrow">
              <div className="demo-arrow-icon">⇄</div>
              <div className="demo-arrow-label">Kaminify</div>
            </div>
            <div className="demo-url-box">
              <div className="demo-url-label">Content source</div>
              <div className="demo-url-value content">github.com/shanewilkey</div>
            </div>
          </div>
          <div className="demo-progress">
            <div className="demo-progress-item">
              <div className="progress-dot p-done"></div>
              <span className="progress-text done">Scraped design site — 3,847 CSS tokens extracted</span>
              <span className="progress-check">✓</span>
            </div>
            <div className="demo-progress-item">
              <div className="progress-dot p-done"></div>
              <span className="progress-text done">Discovered 4 pages — index, projects, about, contact</span>
              <span className="progress-check">✓</span>
            </div>
            <div className="demo-progress-item">
              <div className="progress-dot p-done"></div>
              <span className="progress-text done">Generated index.html</span>
              <span className="progress-check">✓</span>
            </div>
            <div className="demo-progress-item">
              <div className="progress-dot p-active"></div>
              <span className="progress-text">Generating projects.html...</span>
            </div>
            <div className="demo-progress-item">
              <div className="progress-dot p-wait"></div>
              <span className="progress-text">about.html — queued</span>
            </div>
            <div className="demo-progress-item">
              <div className="progress-dot p-wait"></div>
              <span className="progress-text">contact.html — queued</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
