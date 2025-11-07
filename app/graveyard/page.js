import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function Graveyard() {
  return (
    <>
      <Navigation />
      <div style={{marginTop: '70px', padding: '8rem 2rem 4rem', textAlign: 'center', background: '#1a202c', color: 'white'}}>
        <h1 style={{fontSize: '4rem', marginBottom: '1rem'}}>The Graveyard 🪦</h1>
        <p style={{fontSize: '1.5rem', fontStyle: 'italic', opacity: 0.8}}>Where good ideas go to die (for now)</p>
      </div>
      <section style={{padding: '4rem 2rem', background: '#1a202c'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <div style={{background: '#2d3748', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '2px solid #4a5568'}}>
            <h3 style={{fontSize: '1.8rem', color: '#667eea', marginBottom: '1rem'}}>Scene Stealers AI 🪦</h3>
            <p style={{color: '#cbd5e0', marginBottom: '0.5rem'}}><strong style={{color: '#e53e3e'}}>Cause of death:</strong> Realized I was just recreating YouTube search but worse</p>
            <p style={{color: '#cbd5e0'}}><strong style={{color: '#48bb78'}}>What I learned:</strong> Validate the problem before building the solution.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
