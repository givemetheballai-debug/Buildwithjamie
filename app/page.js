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
          Hey, it's your friend, Jamie.
        </h1>
        <p style={{fontSize: '1.5rem', marginBottom: '2rem', opacity: '0.95', lineHeight: '1.6'}}>
          I use AI. A lot. And I make it make sense. No tech bro BS.
        </p>
        
        {/* Credentials */}
        <div style={{
          maxWidth: '800px',
          margin: '3rem auto 0',
          fontSize: '1.1rem',
          lineHeight: '1.8'
        }}>
          <p style={{marginBottom: '1rem'}}>
            15+ years in marketing and advertising. Early adopter who builds real things.
          </p>
          <p style={{fontStyle: 'italic', opacity: '0.9', fontSize: '1rem'}}>
            Award-winning marketer (Future Media 100, Global Innovation winner). Built a women's sports site using AI.
          </p>
        </div>
      </div>

      {/* Email Signup - Top */}
      <section style={{padding: '4rem 2rem', background: 'white'}}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
          borderRadius: '12px',
          border: '2px solid #e2e8f0'
        }}>
          <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
            📰 The Daily AI (Coming Soon)
          </h2>
          <p style={{fontSize: '1.1rem', color: '#4a5568', marginBottom: '2rem', lineHeight: '1.6'}}>
            Your morning briefing on AI, markets, and what matters. Smart insights without the jargon.
          </p>
          <form style={{display: 'flex', gap: '1rem', maxWidth: '400px', margin: '0 auto'}}>
            <input 
              type="email" 
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                border: '1px solid #cbd5e0',
                fontSize: '1rem'
              }}
            />
            <button style={{
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Join the Waitlist
            </button>
          </form>
        </div>
      </section>

      {/* Start Here Section */}
      <section style={{padding: '4rem 2rem', background: '#f7fafc'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: '#2d3748'}}>
            Start Here
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            <a href="/resources/explainers" style={{
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
              <div style={{fontSize: '2rem', marginBottom: '1rem'}}>🎓</div>
              <h3 style={{fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '600'}}>Intro to AI</h3>
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
              <h3 style={{fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '600'}}>5 Common Problems</h3>
              <p style={{opacity: '0.9'}}>Blog post: Using AI but frustrated? Read this</p>
            </a>

            <a href="/resources/prompts" style={{
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
              <div style={{fontSize: '2rem', marginBottom: '1rem'}}>💬</div>
              <h3 style={{fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '600'}}>Prompt Library</h3>
              <p style={{opacity: '0.9'}}>Ready to level up? Grab these</p>
            </a>
          </div>
        </div>
      </section>

      {/* 3 AI Uses Section */}
      <section style={{padding: '4rem 2rem', background: 'white'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center', color: '#2d3748'}}>
            3 Things You Should Be Using AI For Right Now
          </h2>
          <p style={{textAlign: 'center', color: '#718096', marginBottom: '3rem', fontSize: '1.1rem'}}>
            Stop overthinking it. Start here.
          </p>

          {/* Use Case 1 */}
          <div style={{
            background: '#f7fafc',
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
            background: '#f7fafc',
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
            background: '#f7fafc',
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
            background: '#f7fafc',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}>
            <p style={{fontSize: '1.1rem', color: '#718096', marginBottom: '1rem'}}>
              <strong>More ways to use it:</strong> Resume help, job search strategy, data analysis, brainstorming... basically anything that makes you go "ugh I don't want to think about this alone."
            </p>
          </div>
        </div>
      </section>

      {/* Latest from the Blog */}
      <section style={{padding: '4rem 2rem', background: '#f7fafc'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: '#2d3748'}}>
            Latest from the Blog
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            <a href="/blog/5-problems" style={{
              padding: '2rem',
              background: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#2d3748',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s',
              display: 'block'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <h3 style={{fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '600'}}>5 Problems Everyone Has With AI</h3>
              <p style={{color: '#718096'}}>And how to fix them</p>
            </a>
          </div>
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <a href="/blog" style={{
              color: '#667eea',
              fontSize: '1.1rem',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              See all posts →
            </a>
          </div>
        </div>
      </section>

      {/* Featured Resource - Context Template */}
      <section style={{padding: '4rem 2rem', background: 'white'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: '#2d3748'}}>
            Featured Resource
          </h2>
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '3rem',
            borderRadius: '12px',
            color: 'white',
            textAlign: 'center'
          }}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📄</div>
            <h3 style={{fontSize: '2rem', marginBottom: '1rem', fontWeight: '600'}}>AI Context Template</h3>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.95', lineHeight: '1.6'}}>
              Stop repeating yourself. This template helps AI remember who you are, what you do, and how you work—so every conversation starts smarter.
            </p>
            <a href="/resources/context-template" style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'white',
              color: '#667eea',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              Get the Template
            </a>
          </div>
        </div>
      </section>

      {/* Email Signup - Bottom */}
      <section style={{padding: '4rem 2rem', background: '#f7fafc'}}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'white',
          borderRadius: '12px',
          border: '2px solid #e2e8f0'
        }}>
          <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
            📰 The Daily AI (Coming Soon)
          </h2>
          <p style={{fontSize: '1.1rem', color: '#4a5568', marginBottom: '2rem', lineHeight: '1.6'}}>
            Your morning briefing on AI, markets, and what matters. Smart insights without the jargon.
          </p>
          <form style={{display: 'flex', gap: '1rem', maxWidth: '400px', margin: '0 auto'}}>
            <input 
              type="email" 
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                border: '1px solid #cbd5e0',
                fontSize: '1rem'
              }}
            />
            <button style={{
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Join the Waitlist
            </button>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{padding: '4rem 2rem', background: 'white', textAlign: 'center'}}>
        <div style={{maxWidth: '600px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#2d3748'}}>
            Ready to dive deeper?
          </h2>
          <a href="/resources" style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.2rem',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            Explore All Resources
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
