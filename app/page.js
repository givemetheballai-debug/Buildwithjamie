'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Stats Hero Section - Black + Neon */}
      <div style={{
        marginTop: '70px',
        padding: '3rem 2rem',
        background: '#000000',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <h2 style={{
                fontSize: '3.5rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem', 
                lineHeight: '1',
                background: 'linear-gradient(135deg, #00f2ea 0%, #ff0050 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>48%</h2>
              <p style={{fontSize: '1.1rem', opacity: '0.8'}}>Don't know how to use AI effectively</p>
            </div>
            <div>
              <h2 style={{
                fontSize: '3.5rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem', 
                lineHeight: '1',
                background: 'linear-gradient(135deg, #00f2ea 0%, #ff0050 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>63%</h2>
              <p style={{fontSize: '1.1rem', opacity: '0.8'}}>Don't see AI as relevant to their work</p>
            </div>
            <div>
              <h2 style={{
                fontSize: '3.5rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem', 
                lineHeight: '1',
                background: 'linear-gradient(135deg, #00f2ea 0%, #ff0050 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>25%</h2>
              <p style={{fontSize: '1.1rem', opacity: '0.8'}}>Of AI projects actually deliver ROI</p>
            </div>
          </div>
          
          <h1 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.2'}}>
            I help you cut through the confusion.
          </h1>
          <p style={{fontSize: '1.3rem', opacity: '0.85', lineHeight: '1.6'}}>
            No tech bro BS. Just what actually works.
          </p>
        </div>
      </div>

      {/* Credibility Strip */}
      <section style={{padding: '2rem', background: '#1a1a1a', color: 'white', textAlign: 'center', borderTop: '1px solid #333'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <p style={{fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '0.5rem'}}>
            15+ years in marketing and advertising. Early adopter who builds real things.
          </p>
          <p style={{fontSize: '1rem', fontStyle: 'italic', opacity: '0.7'}}>
            Award-winning marketer (Future Media 100, Global Innovation winner). Built a women's sports site using AI.
          </p>
        </div>
      </section>

      {/* Main Content - Bento Grid */}
      <section style={{padding: '2.5rem 2rem', background: '#0a0a0a'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          
          {/* Featured Resources - Bento Style */}
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem', color: 'white'}}>
            Start Here
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {/* Intro to AI - Large Block */}
            <a href="/resources/explainers" style={{
              padding: '2.5rem',
              background: 'linear-gradient(135deg, #00f2ea 0%, #ff0050 100%)',
              color: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '280px',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 30px rgba(0, 242, 234, 0.3)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 40px rgba(0, 242, 234, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 242, 234, 0.3)';
            }}>
              <div>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎓</div>
                <h3 style={{fontSize: '2rem', fontWeight: '700', marginBottom: '1rem'}}>Intro to AI</h3>
                <p style={{fontSize: '1.2rem', opacity: '0.95', lineHeight: '1.6'}}>
                  For the 48% who don't know where to start. Clear, practical guidance.
                </p>
              </div>
              <div style={{fontSize: '1.1rem', fontWeight: '600', marginTop: '1rem'}}>Start learning →</div>
            </a>

            {/* Prompt Library */}
            <a href="/resources/prompts" style={{
              padding: '2rem',
              background: '#1a1a1a',
              color: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              border: '1px solid #333'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 0, 80, 0.3)';
              e.currentTarget.style.borderColor = '#ff0050';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
              e.currentTarget.style.borderColor = '#333';
            }}>
              <div>
                <div style={{fontSize: '2.5rem', marginBottom: '0.75rem'}}>💬</div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem'}}>Prompt Library</h3>
                <p style={{fontSize: '1rem', opacity: '0.7', lineHeight: '1.6'}}>
                  Copy-paste prompts that actually work. No fluff.
                </p>
              </div>
              <div style={{fontSize: '1rem', fontWeight: '600', color: '#00f2ea', marginTop: '1rem'}}>Get prompts →</div>
            </a>

            {/* Context Template */}
            <a href="/resources/context-template" style={{
              padding: '2rem',
              background: '#1a1a1a',
              color: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              border: '1px solid #333'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 0, 80, 0.3)';
              e.currentTarget.style.borderColor = '#ff0050';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
              e.currentTarget.style.borderColor = '#333';
            }}>
              <div>
                <div style={{fontSize: '2.5rem', marginBottom: '0.75rem'}}>📄</div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem'}}>Context Template</h3>
                <p style={{fontSize: '1rem', opacity: '0.7', lineHeight: '1.6'}}>
                  Stop repeating yourself. Make AI remember.
                </p>
              </div>
              <div style={{fontSize: '1rem', fontWeight: '600', color: '#00f2ea', marginTop: '1rem'}}>Download →</div>
            </a>
          </div>

          {/* Latest Thinking */}
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem', color: 'white'}}>
            Latest Thinking
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            <a href="/blog/5-problems" style={{
              padding: '2rem',
              background: '#1a1a1a',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'white',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              transition: 'transform 0.2s, border-color 0.2s',
              border: '1px solid #333'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = '#00f2ea';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#333';
            }}>
              <div style={{
                fontSize: '0.875rem',
                color: '#00f2ea',
                fontWeight: '600',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>BLOG</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem', lineHeight: '1.3'}}>
                5 Problems Everyone Has With AI (And How to Fix Them)
              </h3>
              <p style={{opacity: '0.7', lineHeight: '1.6'}}>
                The real barriers to AI adoption—and the practical solutions that actually work.
              </p>
            </a>

            <a href="/blog/enterprise-ai" style={{
              padding: '2rem',
              background: '#1a1a1a',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'white',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              transition: 'transform 0.2s, border-color 0.2s',
              border: '1px solid #333'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = '#00f2ea';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#333';
            }}>
              <div style={{
                fontSize: '0.875rem',
                color: '#ff0050',
                fontWeight: '600',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>COMING SOON</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem', lineHeight: '1.3'}}>
                Why 75% of AI Projects Fail
              </h3>
              <p style={{opacity: '0.7', lineHeight: '1.6'}}>
                I've seen this at scale. Here's what companies get wrong about AI adoption.
              </p>
            </a>

            <a href="/blog" style={{
              padding: '2rem',
              background: '#1a1a1a',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              fontWeight: '600',
              transition: 'transform 0.2s, border-color 0.2s',
              border: '1px solid #333'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = '#ff0050';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#333';
            }}>
              View all posts →
            </a>
          </div>

          {/* What I'm Building */}
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: 'white'}}>
            What I'm Building
          </h2>
          <p style={{fontSize: '1.1rem', opacity: '0.7', marginBottom: '2rem', color: 'white'}}>
            I don't just teach—I build. Here's what I'm working on.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              padding: '1.5rem',
              background: '#1a1a1a',
              borderRadius: '12px',
              border: '1px solid #333'
            }}>
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem', color: 'white'}}>
                givemetheball.com
              </h3>
              <p style={{fontSize: '0.95rem', opacity: '0.7', lineHeight: '1.6', color: 'white'}}>
                Women's sports + leadership platform. Live scores, newsletters, built with AI.
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: '#1a1a1a',
              borderRadius: '12px',
              border: '1px solid #333'
            }}>
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem', color: 'white'}}>
                Fancy Lazy Travel
              </h3>
              <p style={{fontSize: '0.95rem', opacity: '0.7', lineHeight: '1.6', color: 'white'}}>
                3K+ Instagram followers. Testing ad strategies in real-time.
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: '#1a1a1a',
              borderRadius: '12px',
              border: '1px solid #333'
            }}>
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem', color: 'white'}}>
                The Daily AI
              </h3>
              <p style={{fontSize: '0.95rem', opacity: '0.7', lineHeight: '1.6', color: 'white'}}>
                Morning briefing on AI, markets, culture. Coming soon.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Newsletter CTA - Full Width */}
      <section style={{
        padding: '3rem 2rem',
        background: 'linear-gradient(135deg, #00f2ea 0%, #ff0050 100%)',
        color: 'white'
      }}>
        <div style={{maxWidth: '700px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem'}}>
            📰 The Daily AI
          </h2>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.95', lineHeight: '1.6'}}>
            Cut through the noise. Get the signal. Every morning, straight to your inbox—AI, tech, markets, culture, leadership.
          </p>
          <form style={{
            display: 'flex',
            gap: '1rem',
            maxWidth: '500px',
            margin: '0 auto',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <input 
              type="email" 
              placeholder="Your email"
              style={{
                flex: '1 1 300px',
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                border: 'none',
                fontSize: '1rem',
                minWidth: '250px'
              }}
            />
            <button style={{
              padding: '1rem 2rem',
              background: '#000000',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              Join the Waitlist
            </button>
          </form>
          <p style={{fontSize: '0.9rem', marginTop: '1rem', opacity: '0.85'}}>
            Coming soon. Be first in line.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
