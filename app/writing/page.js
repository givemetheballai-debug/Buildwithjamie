import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

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
          <p style={{textAlign: 'center', marginBottom: '3rem'}}>
            <a href="https://jamiewilliamswrites.medium.com/" target="_blank" style={{display: 'inline-block', padding: '1rem 2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 600}}>Read on Medium</a>
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
