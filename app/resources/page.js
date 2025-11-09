'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function Resources() {
  return (
    <>
      {/* SEO Meta Tags */}
      {/* 
      <title>AI Resources - Tools, Templates & Guides | Jamie Williams</title>
      <meta name="description" content="Practical AI resources: intro guides, prompt libraries, context templates, tool comparisons. Learn AI from someone who actually uses it." />
      */}
      
      <Navigation />
      
      {/* Hero Section */}
      <section style={{
        marginTop: '70px',
        padding: '3rem 2rem',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        textAlign: 'center',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: '3rem', 
            fontWeight: '700', 
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            AI Resources
          </h1>
          <p style={{
            fontSize: '1.3rem', 
            opacity: '0.85', 
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Everything I've learned about using AI effectively. No fluff, no hype—just what actually works.
          </p>
        </div>
      </section>

      {/* Main Resources Grid */}
      <section style={{padding: '3rem 2rem', background: 'var(--bg-secondary)'}}>
        <div className="container">
          
          {/* Getting Started Section */}
          <div style={{marginBottom: '4rem'}}>
            <h2 style={{
              fontSize: '2rem', 
              fontWeight: '700', 
              marginBottom: '1.5rem',
              color: 'var(--text-primary)'
            }}>
              Getting Started
            </h2>
            
            <div className="content-grid-2" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '1.5rem'
            }}>
              
              {/* Intro to AI */}
              <a 
                href="/resources/explainers"
                className="card-featured"
                data-analytics="resource-intro-ai"
                style={{
                  padding: '2.5rem',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  background: 'var(--accent-gradient)',
                  color: 'white',
                  boxShadow: 'var(--shadow-neon-cyan)'
                }}
              >
                <div style={{fontSize: '3rem', marginBottom: '1rem'}} aria-hidden="true">🎓</div>
                <h3 style={{fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem'}}>
                  Intro to AI
                </h3>
                <p style={{fontSize: '1.1rem', opacity: '0.95', lineHeight: '1.6', marginBottom: '1.5rem'}}>
                  New to AI? Start here. Clear explanations of what AI is, how it works, and how to actually use it in your work.
                </p>
                <div style={{fontSize: '1rem', fontWeight: '600'}}>
                  Start learning → <span style={{
                    background: 'rgba(255,255,255,0.2)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    marginLeft: '0.5rem',
                    fontSize: '0.875rem'
                  }}>FREE</span>
                </div>
              </a>

              {/* Context Template */}
              <a 
                href="/resources/context-template"
                className="card"
                data-analytics="resource-context-template"
                style={{
                  padding: '2.5rem',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{fontSize: '3rem', marginBottom: '1rem'}} aria-hidden="true">📄</div>
                <h3 style={{fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem'}}>
                  AI Context Template
                </h3>
                <p style={{fontSize: '1.1rem', opacity: '0.7', lineHeight: '1.6', marginBottom: '1.5rem'}}>
                  Stop repeating yourself. This template helps AI remember who you are, what you do, and how you work.
                </p>
                <div style={{fontSize: '1rem', fontWeight: '600', color: 'var(--accent-cyan)'}}>
                  Download template → <span style={{
                    background: 'var(--bg-primary)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    marginLeft: '0.5rem',
                    fontSize: '0.875rem'
                  }}>FREE</span>
                </div>
              </a>
            </div>
          </div>

          {/* Practical Tools Section */}
          <div style={{marginBottom: '4rem'}}>
            <h2 style={{
              fontSize: '2rem', 
              fontWeight: '700', 
              marginBottom: '1.5rem',
              color: 'var(--text-primary)'
            }}>
              Practical Tools
            </h2>
            
            <div className="content-grid-3" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              
              {/* Prompt Library */}
              <a 
                href="/resources/prompts"
                className="card"
                data-analytics="resource-prompts"
                style={{
                  padding: '2rem',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'transform 0.2s, border-color 0.2s',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{fontSize: '2.5rem', marginBottom: '0.75rem'}} aria-hidden="true">💬</div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem'}}>
                  Prompt Library
                </h3>
                <p style={{fontSize: '1rem', opacity: '0.7', lineHeight: '1.6', marginBottom: '1rem'}}>
                  25+ copy-paste prompts for writing, research, analysis, and more. Actually tested, actually work.
                </p>
                <div style={{fontSize: '0.95rem', fontWeight: '600', color: 'var(--accent-cyan)'}}>
                  Browse prompts → <span style={{
                    background: 'var(--bg-primary)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    marginLeft: '0.5rem',
                    fontSize: '0.75rem'
                  }}>FREE</span>
                </div>
              </a>

              {/* Tool Comparison */}
              <a 
                href="/resources/tools"
                className="card"
                data-analytics="resource-tools"
                style={{
                  padding: '2rem',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'transform 0.2s, border-color 0.2s',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{fontSize: '2.5rem', marginBottom: '0.75rem'}} aria-hidden="true">🔧</div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem'}}>
                  Tool Comparison
                </h3>
                <p style={{fontSize: '1rem', opacity: '0.7', lineHeight: '1.6', marginBottom: '1rem'}}>
                  ChatGPT vs Claude vs Gemini. What each one's actually good at, based on real use.
                </p>
                <div style={{fontSize: '0.95rem', fontWeight: '600', color: 'var(--accent-cyan)'}}>
                  Compare tools → <span style={{
                    background: 'var(--bg-primary)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    marginLeft: '0.5rem',
                    fontSize: '0.75rem'
                  }}>FREE</span>
                </div>
              </a>

              {/* Advanced Techniques - Premium Placeholder */}
              <div 
                className="card"
                style={{
                  padding: '2rem',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  opacity: '0.6',
                  position: 'relative'
                }}
              >
                <div style={{fontSize: '2.5rem', marginBottom: '0.75rem'}} aria-hidden="true">🚀</div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem'}}>
                  Advanced Techniques
                </h3>
                <p style={{fontSize: '1rem', opacity: '0.7', lineHeight: '1.6', marginBottom: '1rem'}}>
                  Chain of thought, RAG, structured outputs. For when you're ready to level up.
                </p>
                <div style={{fontSize: '0.95rem', fontWeight: '600', opacity: '0.5'}}>
                  Coming soon
                </div>
                {/* Premium badge - hidden for now, easy to activate later */}
                <div style={{
                  display: 'none', // Remove this line when ready to show premium
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'var(--accent-gradient)',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '700'
                }}>
                  PREMIUM
                </div>
              </div>
            </div>
          </div>

          {/* Premium Tier Placeholder - Hidden but ready */}
          <div style={{
            display: 'none', // Remove this when ready to launch premium
            padding: '3rem 2rem',
            background: 'var(--accent-gradient)',
            borderRadius: '12px',
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: 'white'}}>
              Want More?
            </h2>
            <p style={{fontSize: '1.2rem', opacity: '0.95', marginBottom: '2rem', color: 'white'}}>
              Get access to advanced courses, exclusive templates, and monthly workshops.
            </p>
            <button 
              className="btn-primary"
              data-analytics="premium-upgrade-cta"
              style={{
                padding: '1rem 2.5rem',
                background: 'white',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              Upgrade to Premium
            </button>
          </div>

        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{
        padding: '3rem 2rem',
        background: 'var(--bg-tertiary)',
        borderTop: '1px solid var(--border-color)'
      }}>
        <div className="container" style={{maxWidth: '700px', textAlign: 'center'}}>
          <h2 style={{fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-primary)'}}>
            Get New Resources First
          </h2>
          <p style={{fontSize: '1.1rem', opacity: '0.7', marginBottom: '2rem', color: 'var(--text-primary)'}}>
            New guides, prompts, and insights delivered to your inbox. Plus daily intelligence on AI, business, and culture.
          </p>
          
          <form 
            action="#" 
            method="POST"
            aria-label="Subscribe to newsletter"
            data-analytics="resources-newsletter-signup"
            style={{
              display: 'flex',
              gap: '1rem',
              maxWidth: '500px',
              margin: '0 auto',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <input 
              type="email" 
              name="email"
              placeholder="Your email"
              required
              aria-label="Email address"
              style={{
                flex: '1 1 300px',
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                minWidth: '250px'
              }}
            />
            <button 
              type="submit"
              className="btn-primary"
              style={{
                padding: '1rem 2rem',
                background: 'var(--accent-gradient)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}
