import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function Tools() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <div style={{
        marginTop: '70px',
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>Tools</h1>
        <p style={{fontSize: '1.2rem'}}>Interactive tools to help you build with AI</p>
      </div>

      {/* Coming Soon */}
      <section style={{padding: '4rem 2rem'}}>
        <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
          
          <div style={{
            padding: '3rem',
            background: '#f7fafc',
            borderRadius: '12px',
            marginBottom: '2rem'
          }}>
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🛠️</div>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              Coming Soon
            </h2>
            <p style={{fontSize: '1.1rem', color: '#718096', marginBottom: '2rem'}}>
              Building interactive tools like prompt builders, AI workflows, and more.
            </p>
            <p style={{color: '#4a5568'}}>
              In the meantime, check out the <a href="/resources" style={{color: '#667eea', textDecoration: 'underline'}}>Resources page</a> for templates and guides.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
