export default function Footer() {
  return (
    <footer style={{
      background: '#1a1a1a', 
      color: 'white', 
      textAlign: 'center', 
      padding: '3rem 2rem',
      borderTop: '1px solid #333333'
    }}>
      <div style={{maxWidth: '600px', margin: '0 auto'}}>
        <p style={{marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 600}}>
          Let's Connect
        </p>
        <div style={{marginBottom: '2rem'}}>
          <a 
            href="https://www.linkedin.com/in/jamiwill/" 
            target="_blank"
            style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: 'linear-gradient(135deg, #00f2ea 0%, #ff0050 100%)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'all 0.3s',
              border: 'none'
            }}
          >
            Connect on LinkedIn
          </a>
        </div>
        <p style={{opacity: 0.7, fontSize: '0.9rem'}}>
          Built in Cincinnati with Claude, caffeine, and chaos • © 2025 Jamie Williams
        </p>
      </div>
    </footer>
  )
}
