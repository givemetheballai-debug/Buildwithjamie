export default function Footer() {
  return (
    <footer style={{background: '#2d3748', color: 'white', textAlign: 'center', padding: '3rem 2rem'}}>
      <div style={{maxWidth: '600px', margin: '0 auto'}}>
        <p style={{marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 600}}>Let's Connect</p>
        <div style={{marginBottom: '2rem'}}>
          <a 
            href="https://www.linkedin.com/in/jamiwill/" 
            target="_blank"
            style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: 'rgba(102, 126, 234, 0.2)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'all 0.3s',
              border: '2px solid #667eea'
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
