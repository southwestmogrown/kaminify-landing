export default function Nav() {
  return (
    <nav>
      <a href="/" className="nav-logo">
        <span className="logo-dot"></span>
        Kaminify
      </a>
      <ul className="nav-links">
        <li>
          <a href="#how-it-works">How it works</a>
        </li>
        <li>
          <a href="#use-cases">Use cases</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="https://app.kaminify.com/sign-in" className="nav-signin">
            Sign in
          </a>
        </li>
        <li>
          <a href="https://app.kaminify.com/sign-up" className="nav-cta">
            Sign up free
          </a>
        </li>
      </ul>
    </nav>
  );
}
