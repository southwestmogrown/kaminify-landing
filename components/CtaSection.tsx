export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-glow"></div>
      <h2 className="reveal">
        Two URLs.<br />One complete site.
      </h2>
      <p className="reveal">No account required to try. Bring your Anthropic key for unlimited generation.</p>
      <div className="hero-actions reveal">
        <a href="https://app.kaminify.com" className="btn-primary">
          Launch Kaminify
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="mailto:hello@kaminify.com" className="btn-secondary">Talk to us</a>
      </div>
    </section>
  )
}
