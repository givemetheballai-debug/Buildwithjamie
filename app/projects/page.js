import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function Projects() {
  return (
    <>
      <Navigation />
      <div style={{marginTop: '70px', padding: '4rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
        <h1 style={{fontSize: '3rem', marginBottom: '0.5rem'}}>All Projects</h1>
        <p style={{fontSize: '1.2rem'}}>The things I've built, am building, and will build</p>
      </div>
      <section style={{padding: '4rem 2rem'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Live & Shipping</h2>
          <p style={{marginBottom: '2rem', color: '#718096'}}>Real products you can use right now</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem'}}>
            <div style={{background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)', border: '1px solid #e2e8f0'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>⚽</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Give Me The Ball</h3>
              <span style={{display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem', background: '#e8f5e9', color: '#2e7d32'}}>Live</span>
              <p style={{color: '#718096', marginBottom: '1rem'}}>A media destination celebrating women leaders in sports and business who demand the ball instead of waiting for permission.</p>
              <a href="https://givemetheball.com" target="_blank" style={{color: '#667eea', textDecoration: 'none', fontWeight: 600}}>Visit Site →</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
