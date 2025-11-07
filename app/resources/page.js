import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function Resources() {
  return (
    <>
      <Navigation />
      <div style={{marginTop: '70px', padding: '4rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
        <h1 style={{fontSize: '3rem', marginBottom: '0.5rem'}}>Resources</h1>
        <p style={{fontSize: '1.2rem'}}>Templates, frameworks, and tools</p>
      </div>
      <section style={{padding: '4rem 2rem'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <p style={{fontSize: '1.2rem', color: '#718096', textAlign: 'center'}}>Coming soon: AI context templates, product frameworks, and more.</p>
        </div>
      </section>
      <Footer />
    </>
  )
}
