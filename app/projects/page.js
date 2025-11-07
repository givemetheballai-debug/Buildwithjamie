import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

const styles = {
  pageHeader: {
    marginTop: '70px',
    padding: '4rem 2rem 2rem',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white'
  },
  section: {
    padding: '4rem 2rem'
  },
  sectionAlt: {
    padding: '4rem 2rem',
    background: '#f9f9f9'
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  },
  projectCard: {
    background: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s'
  },
  projectIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  },
  tag: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: 600,
    marginBottom: '1rem'
  },
  tagLive: {
    background: '#e8f5e9',
    color: '#2e7d32'
  },
  tagComing: {
    background: '#fff3e0',
    color: '#e65100'
  },
  projectLink: {
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: 600
  }
}

export const metadata = {
  title: 'Projects | Jamie Williams',
  description: 'All the things I\'ve built, am building, and will build',
}

export default function Projects() {
  return (
    <>
      <Navigation />
      
      <div style={styles.pageHeader}>
        <h1 style={{fontSize: '3rem', marginBottom: '0.5rem'}}>All Projects</h1>
        <p style={{fontSize: '1.2rem'}}>The things I've built, am building, and will build</p>
      </div>

      <section style={styles.section}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '0.5rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Live & Shipping</h2>
          <p style={{color: '#718096', marginBottom: '2rem', fontSize: '1.1rem'}}>Real products you can use right now</p>
          
          <div style={styles.projectsGrid}>
            <div style={styles.projectCard}>
              <div style={styles.projectIcon}>⚽</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Give Me The Ball</h3>
              <span style={{...styles.tag, ...styles.tagLive}}>Live</span>
              <p style={{color: '#718096', marginBottom: '1rem', lineHeight: 1.6}}>A media destination celebrating women leaders in sports and business who demand the ball instead of waiting for permission. Live scores, social features, mobile-responsive design.</p>
              <a href="https://givemetheball.com" target="_blank" style={styles.projectLink}>Visit Site →</a>
            </div>

            <div style={styles.projectCard}>
              <div style={styles.projectIcon}>✈️</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Fancy Lazy Travel</h3>
              <span style={{...styles.tag, ...styles.tagLive}}>Live</span>
              <p style={{color: '#718096', marginBottom: '1rem', lineHeight: 1.6}}>Travel Instagram celebrating doing less. Photography and stories from around the world with a philosophy that the best trips have space to breathe. Growing community of slow travelers.</p>
              <a href="https://instagram.com/fancylazytravel" target="_blank" style={styles.projectLink}>Follow on Instagram →</a>
            </div>

            <div style={styles.projectCard}>
              <div style={styles.projectIcon}>💬</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Human-AI Communication Protocol</h3>
              <span style={{...styles.tag, ...styles.tagLive}}>Live</span>
              <p style={{color: '#718096', marginBottom: '1rem', lineHeight: 1.6}}>A new emoji system designed specifically for human-AI interaction. Three pillars (Understanding, Certainty, Flow) that signal what emojis can't. Open spec ready to view.</p>
              <Link href="/protocol" style={styles.projectLink}>View Protocol →</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.sectionAlt}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '0.5rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Coming Soon</h2>
          <p style={{color: '#718096', marginBottom: '2rem', fontSize: '1.1rem'}}>In development</p>
          
          <div style={styles.projectsGrid}>
            <div style={styles.projectCard}>
              <div style={styles.projectIcon}>📰</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Daily AI by Jamie</h3>
              <span style={{...styles.tag, ...styles.tagComing}}>Coming Soon</span>
              <p style={{color: '#718096', lineHeight: 1.6}}>Newsletter covering AI, product strategy, and lessons learned. Conversational, smart, witty. My content pillar for building personal brand.</p>
            </div>

            <div style={styles.projectCard}>
              <div style={styles.projectIcon}>📊</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>JAMR</h3>
              <span style={{...styles.tag, ...styles.tagComing}}>Coming Soon</span>
              <p style={{color: '#718096', lineHeight: 1.6}}>Market research meets modern content. What Nielsen would look like if it started today. Combining audience insights with TikTok-style content creation.</p>
            </div>

            <div style={styles.projectCard}>
              <div style={styles.projectIcon}>🎯</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Cooler Ads</h3>
              <span style={{...styles.tag, ...styles.tagComing}}>Coming Soon</span>
              <p style={{color: '#718096', lineHeight: 1.6}}>Market research for the modern era. Making ad testing faster, smarter, more accessible. Leveraging AI to democratize insights.</p>
            </div>

            <div style={styles.projectCard}>
              <div style={styles.projectIcon}>✨</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Cosmic Convenience</h3>
              <span style={{...styles.tag, ...styles.tagComing}}>Coming Soon</span>
              <p style={{color: '#718096', lineHeight: 1.6}}>Shopping with magic. Where intuition meets commerce.</p>
            </div>

            <div style={styles.projectCard}>
              <div style={styles.projectIcon}>😱</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Scream into the Void</h3>
              <span style={{...styles.tag, ...styles.tagComing}}>Coming Soon</span>
              <p style={{color: '#718096', lineHeight: 1.6}}>Digital catharsis. Scream when you're mad at AI or work, get emojis and fun graphics. Daily micro-creative project designed for social virality.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '0.5rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Past Experience</h2>
          <p style={{color: '#718096', marginBottom: '2rem', fontSize: '1.1rem'}}>Entrepreneurial ventures and learnings</p>
          
          <div style={styles.projectsGrid}>
            <div style={styles.projectCard}>
              <div style={styles.projectIcon}>🏠</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Real Estate Ventures</h3>
              <p style={{color: '#718096', lineHeight: 1.6}}>Multiple entrepreneurial projects in real estate. Learned about operations, customer service, and building businesses from scratch. Skills that transfer directly to product building.</p>
            </div>

            <div style={styles.projectCard}>
              <div style={styles.projectIcon}>🍔</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Mobile Food Service</h3>
              <p style={{color: '#718096', lineHeight: 1.6}}>Entrepreneurial experience in mobile food industry. Taught me about logistics, marketing, customer experience, and running lean operations. First-hand lesson in building something people want.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
