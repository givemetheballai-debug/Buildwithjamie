'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <div style={{
        marginTop: '70px',
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{fontSize: '3rem', marginBottom: '1rem', fontWeight: '700'}}>
          Your Friend Who's Really Into AI
        </h1>
        <p style={{fontSize: '1.5rem', marginBottom: '2rem', opacity: '0.95'}}>
          I make AI make sense. No tech bro BS.
        </p>
        
        {/* Who You Are */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          margin: '3rem auto 0',
          textAlign: 'left'
        }}>
          <div>
            <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>✨</div>
            <strong>15+ years marketing + product</strong>
          </div>
          <div>
            <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🚀</div>
            <strong>Corporate scale. Startup speed.</strong>
          </div>
          <div>
            <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🔬</div>
            <strong>Early adopter. Constant experimenter.</strong>
          </div>
        </div>
      </div>

      {/* What This Site Does */}
      <section style={{padding: '4rem 2rem', background: '#f7fafc'}}>
        <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '3rem', color: '#2d3748'}}>
            What This Site Does
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            textAlign: 'left'
          }}>
            <div style={{padding: '2rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
              <div style={{fontSize: '2rem', marginBottom: '1rem'}}>🧪</div>
              <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#2d3748'}}>Test every tool</h3>
              <p style={{color: '#718096'}}>I try everything so you don't waste time on what doesn't work.</p>
            </div>
            <div style={{padding: '2rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
              <div style={{fontSize: '2rem', marginBottom: '1rem'}}>🛠️</div>
              <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#2d3748'}}>Build real products</h3>
              <p style={{color: '#718096'}}>Not just demos. Actual working things people use.</p>
            </div>
            <div style={{padding: '2rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
              <div style={{fontSize: '2rem', marginBottom: '1rem'}}>📢</div>
              <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#2d3748'}}>Tell you what works</h3>
              <p style={{color: '#718096'}}>No hype. Just what actually helps you ship faster.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Jump In Section */}
      <section style={{padding: '4rem 2rem', background: 'white'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: '#2d3748'}}>
            Jump In
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            <a href="/explainers" style={{
              padding: '2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'transform 0.2s',
              display: 'block'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{fontSize: '2rem', marginBottom: '1rem'}}>📖</div>
              <h3 style={{fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '600'}}>Start Here: AI Explainers</h3>
              <p style={{opacity: '0.9'}}>Absolute beginner? Go here first</p>
            </a>

            <a href="/blog/5-problems" style={{
              padding: '2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'transform 0.2s',
              display: 'block'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{fontSize: '2rem', marginBottom: '1rem'}}>🔧</div>
              <h3 style={{fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '600'}}>5 Problems Everyone Has</h3>
              <p style={{opacity: '0.9'}}>Using AI but frustrated? Read this</p>
            </a>

            <a href="/resources" style={{
              padding: '2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'transform 0.2s',
              display: 'block'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{fontSize: '2rem', marginBottom: '1rem'}}>🛠️</div>
              <h3 style={{fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '600'}}>Tools & Templates</h3>
              <p style={{opacity: '0.9'}}>Ready to level up? Grab these</p>
            </a>
          </div>
        </div>
      </section>

      {/* 3 AI Uses Section */}
      <section style={{padding: '4rem 2rem', background: '#f7fafc'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center', color: '#2d3748'}}>
            3 Things You Should Be Using AI For Right Now
          </h2>
          <p style={{textAlign: 'center', color: '#718096', marginBottom: '3rem', fontSize: '1.1rem'}}>
            Stop overthinking it. Start here.
          </p>

          {/* Use Case 1 */}
          <div style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748'}}>
              1. Writing & Content
            </h3>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem'}}>
              Write it yourself first. Then let AI punch it up. Change the tone. Adapt it for LinkedIn, a blog, Instagram. Same idea, different audiences. Stop starting from scratch every time.
            </p>
          </div>

          {/* Use Case 2 */}
          <div style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748'}}>
              2. Research & Learning
            </h3>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem'}}>
              Need to understand a new topic fast? AI synthesizes information way faster than you scrolling through 10 articles. Get the basics in 5 minutes, then decide where to dig deeper.
            </p>
          </div>

          {/* Use Case 3 */}
          <div style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748'}}>
              3. Life Planning
            </h3>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem'}}>
              Stuck on a career move? Big decision? AI can map out scenarios, play devil's advocate, ask you the hard questions. It's like having a thinking partner who never gets tired of your bullshit.
            </p>
          </div>

          {/* More Uses */}
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}>
            <p style={{fontSize: '1.1rem', color: '#718096', marginBottom: '1rem'}}>
              <strong>More ways to use it:</strong> Resume help, job search strategy, data analysis, brainstorming... basically anything that makes you go "ugh I don't want to think about this alone."
            </p>
            <a href="/blog/5-problems" style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600',
              marginTop: '1rem'
            }}>
              Read the full guide →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
