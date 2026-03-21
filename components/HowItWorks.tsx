export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <span className="section-label reveal">How it works</span>
      <h2 className="section-title reveal">
        Three inputs. One pipeline.<br />A complete site.
      </h2>
      <p className="section-sub reveal">
        Kaminify runs a multi-stage AI pipeline that treats design and content as separate
        concerns — then combines them with surgical precision.
      </p>

      <div className="steps reveal">
        <div className="step">
          <span className="step-number">01</span>
          <div className="step-icon orange">🔍</div>
          <h3>Scrape &amp; extract</h3>
          <p>
            Kaminify fetches both URLs, parses CSS for color palettes, font stacks, spacing
            scales, and component patterns. Your content site is mapped page by page.
          </p>
        </div>
        <div className="step">
          <span className="step-number">02</span>
          <div className="step-icon teal">⚡</div>
          <h3>Generate in parallel</h3>
          <p>
            Each page is sent to Claude with the full design system and page-specific content.
            Pages generate simultaneously and stream back as they complete — no waiting for the
            full batch.
          </p>
        </div>
        <div className="step">
          <span className="step-number">03</span>
          <div className="step-icon purple">📦</div>
          <h3>Preview &amp; download</h3>
          <p>
            Pages appear in the preview as they finish. Review each one in a live iframe, then
            download the complete site as a ZIP — self-contained HTML, ready to deploy anywhere.
          </p>
        </div>
      </div>

      <div className="features reveal">
        <div className="feature">
          <span className="feature-tag">Architecture</span>
          <h3>Server-Sent Events streaming</h3>
          <p>
            The pipeline runs server-side and streams progress events to your browser in real
            time. You see every step as it happens — no black box, no waiting.
          </p>
        </div>
        <div className="feature">
          <span className="feature-tag">Privacy</span>
          <h3>Bring your own API key</h3>
          <p>
            Your Anthropic API key stays in your browser session. It&apos;s passed directly to the
            generation pipeline and never stored on our servers. You control your costs and your
            data.
          </p>
        </div>
        <div className="feature">
          <span className="feature-tag">Output</span>
          <h3>Zero dependencies</h3>
          <p>
            Every generated page is entirely self-contained — all CSS is inline or in a style
            tag. No framework, no CDN, no external requests. Drop it anywhere and it works.
          </p>
        </div>
        <div className="feature">
          <span className="feature-tag">Intelligence</span>
          <h3>Design token extraction</h3>
          <p>
            Kaminify doesn&apos;t just copy HTML. It extracts the semantic design system — color
            relationships, spacing ratios, typography hierarchy — and applies it intelligently to
            your content structure.
          </p>
        </div>
      </div>

      <div className="pipeline reveal">
        <div className="pipeline-title">// pipeline.ts</div>
        <div className="pipeline-steps">
          <div className="pipeline-step">
            <div className="pipeline-step-name">scrapeSite()</div>
            <div className="pipeline-step-desc">fetch HTML + CSS from both URLs</div>
          </div>
          <div className="pipeline-step">
            <div className="pipeline-step-name">discoverPages()</div>
            <div className="pipeline-step-desc">parse nav, find internal links</div>
          </div>
          <div className="pipeline-step">
            <div className="pipeline-step-name">extractDesign()</div>
            <div className="pipeline-step-desc">tokens, components, patterns</div>
          </div>
          <div className="pipeline-step">
            <div className="pipeline-step-name">extractContent()</div>
            <div className="pipeline-step-desc">headings, copy, CTAs per page</div>
          </div>
          <div className="pipeline-step">
            <div className="pipeline-step-name">composePage()</div>
            <div className="pipeline-step-desc">Claude generates HTML per page</div>
          </div>
          <div className="pipeline-step">
            <div className="pipeline-step-name">stream()</div>
            <div className="pipeline-step-desc">SSE events → live preview</div>
          </div>
        </div>
      </div>
    </section>
  )
}
