import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'The Graveyard | Jamie Williams',
  description: 'Where good ideas go to die (for now)',
}

export default function Graveyard() {
  const tombstoneStyle = {
    background: '#2d3748',
    borderRadius: '12px',
    padding: '2rem',
    marginBottom: '2rem',
    border: '2px solid #4a5568',
    position: 'relative',
    overflow: 'hidden'
  }

  return (
    <>
      <Navigation />
      
      <div style={{marginTop: '70px', padding: '8rem 2rem 4rem', textAlign: 'center', background: '#1a202c', color: 'white'}}>
        <h1 style={{fontSize: '4rem', marginBottom: '1rem'}}>The Graveyard 🪦</h1>
        <p style={{fontSize: '1.5rem', fontStyle: 'italic', opacity: 0.8}}>Where good ideas go to die (for now)</p>
      </div>
      
      <section style={{padding: '4rem 2rem', background: '#1a202c'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          
          <div style={tombstoneStyle}>
            <h3 style={{fontSize: '1.8rem', color: '#667eea', marginBottom: '1rem'}}>Scene Stealers AI 🪦</h3>
            <p style={{color: '#cbd5e0', marginBottom: '0.5rem'}}>
              <strong style={{color: '#e53e3e'}}>Cause of death:</strong> Copyright nightmare meets AI visual tools that don't work
            </p>
            <p style={{color: '#cbd5e0', marginBottom: '0.5rem'}}>
              <strong style={{color: '#48bb78'}}>What I learned:</strong> AI trivia/movie game idea was fun - mock up AI images putting you in scenes from famous movies or locations. But copyright issues are real, and getting visual AI tools to consistently work is harder than it looks.
            </p>
            <p style={{color: '#cbd5e0', fontStyle: 'italic', opacity: 0.8}}>
              <strong>Status:</strong> Dead dead. Not coming back.
            </p>
          </div>

          <div style={tombstoneStyle}>
            <h3 style={{fontSize: '1.8rem', color: '#667eea', marginBottom: '1rem'}}>Comedy Pilot with ChatGPT 🪦</h3>
            <p style={{color: '#cbd5e0', marginBottom: '0.5rem'}}>
              <strong style={{color: '#e53e3e'}}>Cause of death:</strong> Turns out AI can help write jokes, but it can't make them funny
            </p>
            <p style={{color: '#cbd5e0', marginBottom: '0.5rem'}}>
              <strong style={{color: '#48bb78'}}>What I learned:</strong> Collaborative writing with AI is interesting. But comedy needs timing, nuance, and cultural context that AI doesn't quite get yet. The pilot exists. It's not good.
            </p>
            <p style={{color: '#cbd5e0', fontStyle: 'italic', opacity: 0.8}}>
              <strong>Status:</strong> Filed away as "learning experience."
            </p>
          </div>

          <div style={tombstoneStyle}>
            <h3 style={{fontSize: '1.8rem', color: '#667eea', marginBottom: '1rem'}}>Feed Check (Bubble Score) 🪦</h3>
            <p style={{color: '#cbd5e0', marginBottom: '0.5rem'}}>
              <strong style={{color: '#e53e3e'}}>Cause of death:</strong> Instagram API restrictions + people don't actually want to know how bubble-y they are
            </p>
            <p style={{color: '#cbd5e0', marginBottom: '0.5rem'}}>
              <strong style={{color: '#48bb78'}}>What I learned:</strong> Great concept - "Spotify Wrapped for your social bubble." Analyze Instagram following diversity and algorithmic bubbles. MVP would upload followers.json for analysis. But Instagram's API makes it nearly impossible to get that data publicly. And honestly? People like their bubbles.
            </p>
            <p style={{color: '#cbd5e0', fontStyle: 'italic', opacity: 0.8}}>
              <strong>Status:</strong> Good idea, wrong platform, wrong time.
            </p>
          </div>

          <div style={{textAlign: 'center', padding: '3rem 0'}}>
            <p style={{color: '#cbd5e0', fontSize: '1.2rem', fontStyle: 'italic'}}>
              "The graveyard is big, but the things that survive are worth it."
            </p>
            <p style={{color: '#718096', marginTop: '1rem'}}>
              More tombstones coming soon as I build and abandon things at speed.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
