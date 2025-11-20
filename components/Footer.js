import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <p className="footer-heading">
          Let's Connect
        </p>
        <div className="footer-cta">
          <a 
            href="https://www.linkedin.com/in/jamiwill/" 
            target="_blank"
            rel="noopener noreferrer"
            className="footer-btn"
          >
            Connect on LinkedIn
          </a>
        </div>
        <div className="footer-links">
          <Link href="/privacy" className="footer-link">Privacy Policy</Link>
          <span className="footer-separator">•</span>
          <Link href="/terms" className="footer-link">Terms of Service</Link>
        </div>
        <p className="footer-credit">
          Built in Cincinnati with Claude, caffeine, and chaos • © 2025 Jamie Williams
        </p>
      </div>
    </footer>
  )
}
