import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Writing | Jamie Williams',
  description: 'Thoughts on AI, product building, and lessons learned',
}

export default function Writing() {
  return (
    <>
      <Navigation />
      
      <div style={{marginTop: '70px', padding: '4rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
        <h1 style={{fontSize: '3rem', marginBottom: '0.5rem'}}>Writing</h1>
        <p style={{fontSize: '1.2rem'}}>Thoughts on AI, product building, and lessons learned</p>
      </div>
      
      <section style={{padding: '4rem 2rem'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Latest Articles</h2>
          <p style={{color: '#718096', marginBottom: '2rem', fontSize: '1.1rem'}}>Published on Medium and LinkedIn</p>

          <div style={{background: 'white', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)', border: '1px solid #e2e8f0'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem', color: '#2d3748'}}>From Dog Photos to AI Products</h3>
            <p style={{color: '#a0aec0', fontSize: '0.9rem', marginBottom: '1rem'}}>Medium • Product Journey</p>
            <p style={{color: '#718096', marginBottom: '1rem', lineHeight: 1.7}}>How six months of messing around with ChatGPT turned into building actual products. The story of going from silly dog photos to shipping AI tools.</p>
            <a href="https://jamiewilliamswrites.medium.com/" target="_blank" style={{color: '#667eea', textDecoration: 'none', fontWeight: 600}}>Read on Medium →</a>
          </div>

          <div style={{textAlign: 'center', marginTop: '3rem', padding: '2rem', background: '#f7fafc', borderRadius: '12px'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Find me on LinkedIn</h3>
            <p style={{color: '#718096', marginBottom: '1.5rem'}}>I write regularly about AI, product strategy, and building things that matter.</p>
            <a href="https://www.linkedin.com/in/jamiwill/" target="_blank" style={{display: 'inline-block', padding: '1rem 2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 600}}>Connect on LinkedIn</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
