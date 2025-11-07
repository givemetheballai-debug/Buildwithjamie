import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Protocol() {
  return (
    <>
      <Navigation />
      <div style={{marginTop: '70px', padding: '8rem 2rem 4rem', textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
        <h1 style={{fontSize: '3.5rem', marginBottom: '1rem'}}>Human-AI Communication Protocol</h1>
        <p style={{fontSize: '1.3rem'}}>A new emoji system designed for human-AI interaction</p>
      </div>
      <section style={{padding: '4rem 2rem'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <div style={{fontSize: '1.2rem', lineHeight: 1.8, color: '#4a5568', marginBottom: '2rem'}}>
            <p style={{marginBottom: '1.5rem'}}>Human-to-human emojis don't work for AI conversations. They were designed to convey emotions between people, not to signal processing states between humans and machines.</p>
            <p>This protocol solves that gap with three pillars designed specifically for human-AI interaction.</p>
          </div>
          <div style={{background: 'white', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)', borderLeft: '4px solid #667eea'}}>
            <h3 style={{fontSize: '1.8rem', marginBottom: '1rem'}}>1. Understanding</h3>
            <p style={{marginBottom: '1rem'}}>Did the AI actually get what you asked?</p>
            <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>
              <div style={{flex: 1, minWidth: '150px', textAlign: 'center', padding: '1rem', background: '#f7fafc', borderRadius: '8px'}}>
                <span style={{fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem'}}>✅</span>
                <div style={{fontWeight: 600, color: '#667eea'}}>Aligned</div>
              </div>
              <div style={{flex: 1, minWidth: '150px', textAlign: 'center', padding: '1rem', background: '#f7fafc', borderRadius: '8px'}}>
                <span style={{fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem'}}>🔄</span>
                <div style={{fontWeight: 600, color: '#667eea'}}>Checking</div>
              </div>
              <div style={{flex: 1, minWidth: '150px', textAlign: 'center', padding: '1rem', background: '#f7fafc', borderRadius: '8px'}}>
                <span style={{fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem'}}>❓</span>
                <div style={{fontWeight: 600, color: '#667eea'}}>Lost</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
